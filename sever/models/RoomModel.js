const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
    MaRoom: {
        type: String,
        required: true,
        unique: true,
    },
    TenRoom: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    Loai: {
        type: String,
        required: true,
    },
    Chucvu: {
        type: String,
        required: true,
    },
    NgayTao: {
        type: String,
        required: true,
    }
    SDT: {
        type: String,
        required: true,
        min:10,
        max:11
        unique: true
    }
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
})


module.exports = mongoose.model("Rooms", RoomSchema)