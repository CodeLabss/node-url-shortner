const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectUrl:{
        type: String,
        required:true
    },
    clicks:
        [
            {
                timestamp: {type: Number}
            }
        ]
    

},
{timestamps: true}
)

const url = mongoose.model('URL', urlSchema)

module.exports = url