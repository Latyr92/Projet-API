import db from '../../api/configuration.js';
import Utilisateur from "../models/utilisateur.js";
import  bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

const JWT = "jMP0lIHdC8tf7EYBiuwcsoB/CYUIllrcFB40/19c0fI="

export const inscrire= async (req,res)=>{
    let userExist = false;
    try {
     userExist = await Utilisateur.getOne(req.body.email);
    } catch (err) {
        console.log(err)
    }  
     if(userExist.rows.lenght > 0){
        console.log(userExist)
        return res.status(402).json({ message : "Utilisateur existant"})
     }
    try {
        const salt =bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.mot_de_passe,salt);
        const newUser= {
            "nom":req.body.nom,
            "prenom":req.body.prenom,
            "email":req.body.email,
            "mot_de_passe": hash,
            "isadmin": req.body.isadmin
        }
        Utilisateur.create(newUser)
        .then(() => {
        res.json({ message: 'Utilisateur cree' });
        })
        .catch((error) => {
        console.error('Erreur lors de la création ', error);
        res.status(500).json({ error: 'Erreur lors de la création' });
        });
       
    } catch (err) {
        console.log(err)
    }
    }
    

export const connexion= async (req,res)=>{

    try {
        const salt =bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body?.mot_de_passe,salt);
        const user= await Utilisateur.getOne(req.body.email)
        if(Object.keys(user.rows).length === 0) {
            console.log(Object.keys(user.rows).length)
            return res.status(400).json({ message: 'Utilisateur non existant' });
        }
        else{
            console.log(Object.keys(user.rows).length)
            const isPasswordCorrect = await bcrypt.compare(req.body?.mot_de_passe, user.rows[0].mot_de_passe);
            if (!isPasswordCorrect) return  res.status(400).json({ message: 'Login ou mot de passe incorrect' });
            
            const token = jwt.sign({ id: user.rows[0].id, nom : user.rows[0].nom, prenom : user.rows[0].prenom, isadmin : user.rows[0].isadmin }, JWT , {expiresIn : "1h",})
        
            return res.status(200).json({token});


        }

        
       
    } catch (err) {
        console.log(err)
    }
}

export const findAllUser =async (req,res)=>{
    
    try {
        const findUser = await Utilisateur.getByAll();
        res.status(200).json(findUser.rows);
    } catch (err) {
        console.log(err);
    }

}
