import Course from "./model/Course.js"

class CourseController{
    async create(req,res){
        try{
        const {name,  master, phone, deadline } = req.body
        const course = await Course.create({name,  master, phone, deadline })
        res.redirect('/courses')
        }
        catch(e){
            res.status(500).json(e)
            return
        }
    }
    async getAll(req,res){
        try{
            var data = await Course.find()
            if(req.session.loggedin && req.session.username == 'admin'){
                res.render('courses' , {courses : data , admin: true, user:true})
            }else if(req.session.loggedin && req.session.username != null && req.session.username != 'admin'){
                res.render('courses' , {courses : data, admin: false, user:true })
            }
            else{
                res.render('courses' , {courses : data , admin: false, user:false})
            }
            return
        }
        catch(e){
            res.status(500).json(e)
            return
        }
    }
    async getOne(req,res){
        try{
            const {id} = req.params
            if(!id){
                return res.status(400).json("Not Found!")
            }
            if(req.session.loggedin && req.session.username == 'admin'){
                const course = await Course.findById(id)
                res.render('edit_course', {course : course})
            }else{
                res.send("<p>No Access!</p>")
            }
            return 
        }
        catch(e){
            res.status(500).json(e)
            return
        }
    }
    async update(req,res){
        try{
            Course.findByIdAndUpdate({_id:req.params.id}, req.body, (err, docs) =>{
                if(err) {throw err}
                else{
                    res.redirect('/courses')
                }
            })
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try{
            Course.findByIdAndDelete({_id:req.params.id}, req.body, (err, docs) =>{
                if(err) {throw err}
                else{
                    res.redirect('/courses')
                }
            })
        }
        catch(e){
            res.status(500).json(e)
        }
    }
}

export default new CourseController();