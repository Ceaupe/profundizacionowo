const {Schema, model} = require('mongoose');

const ObraSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    
    /* image: {
        type: String,
        required: true
    },
*/
    autor: {
        type: String,
        required: true

    },
    short_description: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = model('Obra', ObraSchema);
