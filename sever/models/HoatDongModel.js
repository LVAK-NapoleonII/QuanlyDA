const mongoose = require("mongoose")

const ActiveSchema = new mongoose.Schema({
    TenHD: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("Active", ActiveSchema)