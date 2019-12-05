const joi= require('joi')

exports.validate_user = (req,res,next) => {
    let schema = joi.object().keys({
        angka1 : joi.string().required().min(0) ,
        angka2 : joi.string().required().min(0),
        operator : joi.string().required().min(0)
    })

    joi.validate(req.body,schema)
        .then(validated => {
            next()
        })
        .catch(err => {
            res.render("kalkulator", { message : err.details })
        })
}