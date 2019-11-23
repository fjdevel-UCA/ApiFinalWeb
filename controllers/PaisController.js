const Pais = require("../models/Pais");
const mongoose = require("mongoose");

const insert = (req, res)=>{
  
console.log(req.body.codigoPostal)
    if(!req.body.codigoPostal || !req.body.nombre || !req.body.poblacionTotal || !req.body.extensionTerritorial || !req.body.pib){
        return res.status(400).json({
            message: "There are missing fields",
        });
    }
    
    let pais= new Pais(
        req.body
    );


    pais.save((err, nRegister)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to insert Country",
        });

        res.status(200).json({
            message: "Insert Country was successful",
            register: nRegister
        });
    })
}


const update = (req, res)=>{
    let pais = req.body
    
    

    if(!pais._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Pais.update({_id: new mongoose.mongo.ObjectID(pais._id)},pais)
        .then(value =>{
            res.status(200).json({
                message: "update register was successful"
            });
        })
        .catch((err)=>{
            res.status(500).json({
                message: "Something happend trying to update the Register"
            });
        })

}

const deleteById = (req, res)=>{
    
    let pais = req.body;
console.log(pais)
    if(!pais._id){
        return res.status(400).json({
            message: "id is needed",
        }); 
    }

    Pais.findOneAndRemove({_id:new mongoose.mongo.ObjectID(pais._id)})
        .then(deleted=>{
            res.status(200).json({
                message: "delete country was successful"
            });
        })
        .catch(err=>{
            res.status(500).json({
                message: "Something happend trying to delete the Country"
            });
        })
}

// /**
//  * METHOD = GET
//  */
const getAll = (req, res)=>{
    Pais.find((err, paises)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to get the Register",
        });

        if(paises){
            res.status(200).json(paises);
        }else{
            res.status(404).json({
                message: "There isn't any register",
            });
        }
    });
}

// /**
//  * METHOD = GET
//  * Params -> id
//  */
const getOneById = (req, res)=>{
    let id = req.query.id;
    console.log(req.body)
    Pais.findOne({codigoPostal:id}, (err, pais)=>{
        if(err) return res.status(500).json({
            message: "Something happend trying to get all countrys",
        });

        if(pais){
            res.status(200).json(pais);
        }else{
            res.status(404).json({
                message: `There is not a register with id ${id}`,
            });
        }
    });  
}

// const panic = (req, res)=>{
//     Register.deleteMany({}, (err)=>{
//         res.status(200).send("F en el chat");
//     });
// }

module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById,
}