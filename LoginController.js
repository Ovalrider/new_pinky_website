import Login from "./model/Login.js"

class LoginController{
        async getAll(req,res){
        try{
            var data = await Login.find()
            //res.redirect('/')
           //res.render('clients' , {clients : data })
            return data
        }
        catch(e){
            res.status(500).json(e)
            return
        }
    }
    
    
}

export default new LoginController();