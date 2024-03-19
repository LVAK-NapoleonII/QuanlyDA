const mongoose = require("mongoose")

const ChitietHDSchema = new mongoose.Schema({
    NoiDung: {
        type: String,
        required: true,
    },
    SoTien: {
        type: float,
        required: true,
    },
    ForId: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model("ChitietHD", ChitietHDSchema)