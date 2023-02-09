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
            //res.redirect('/')
            res.render('courses' , {courses : data })
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
            const course = await Course.findById(id)
            res.render('edit_course', {course : course})
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