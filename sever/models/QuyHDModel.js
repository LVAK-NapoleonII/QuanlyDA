const mongoose = require("mongoose")

const QuySchema = new mongoose.Schema({
    MaThanhVien: {
        type: String,
        required: true,
        unique: true
    },
    Ten: {
        type: String,
        required: true,
    },
    SoTien: {
        type: float,
        required: true,
    },
    Nam: {
        type: int,
        required: true,
    }
    Quy: {
        type: float,
        required: true,
    }
})

module.exports = mongoose.model("QuyHD", QuySchema)