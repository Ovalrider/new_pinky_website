import Client from "./model/Client.js"

class ClientController{
    async create(req,res){
        try{
        const {name, phone, email, course, master} = req.body
        const client = await Client.create({name, phone, email,course, master})
        res.redirect('/clients')
        }
        catch(e){
            res.status(500).json(e)
            return
        }
    }
    async getAll(req,res){
        try{
            var data = await Client.find()
            //res.redirect('/')
            res.render('clients' , {clients : data })
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
            const client = await Client.findById(id)
            res.render('edit_client', {client : client})
            return 
        }
        catch(e){
            res.status(500).json(e)
            return
        }
    }
    async update(req,res){
        try{
            Client.findByIdAndUpdate({_id:req.params.id}, req.body, (err, docs) =>{
                if(err) {throw err}
                else{
                    res.redirect('/clients')
                }
            })
        }
        catch(e){
            res.status(500).json(e)
        }
    }
    async delete(req,res){
        try{
            Client.findByIdAndDelete({_id:req.params.id}, req.body, (err, docs) =>{
                if(err) {throw err}
                else{
                    res.redirect('/clients')
                }
            })
        }
        catch(e){
            res.status(500).json(e)
        }
    }
}

export default new ClientController();