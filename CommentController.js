import Comment from "./model/Comment.js"

class CommentController{
    async create(req,res){
        try{
        const {name, service, master, review, rating } = req.body
        const comment = await Comment.create({name, service, master, review, rating })
        res.redirect('/comments')
        }
        catch(e){
            res.status(500).json(e)
            return
        }
    }
    async getAll(req,res){
        try{
            var data = await Comment.find()
            //res.redirect('/')
            res.render('comments' , {comments : data })
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
            const comment = await Comment.findById(id)
            res.render('edit_comment', {comment : comment})
            return 
        }
        catch(e){
            res.status(500).json(e)
            return
        }
    }
    async update(req,res){
        try{
            Comment.findByIdAndUpdate({_id:req.params.id}, req.body, (err, docs) =>{
                if(err) {throw err}
                else{
                    res.redirect('/comments')
                }
            })
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try{
            Comment.findByIdAndDelete({_id:req.params.id}, req.body, (err, docs) =>{
                if(err) {throw err}
                else{
                    res.redirect('/comments')
                }
            })
        }
        catch(e){
            res.status(500).json(e)
        }
    }
}

export default new CommentController();