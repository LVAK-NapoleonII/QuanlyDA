const RoomModel = require("../models/RoomModel");

// thêm room
module.exports.addRoom = async (req, res, next) => {
  try {
    const {  MaRoom, TenRoom, Loai, Chucvu, NgayTao, SDT, email } = req.body;
    const room = await RoomModel.create({
        MaRoom,
        TenRoom,
        Loai,
        Chucvu,
        NgayTao,
        SDT,
        email,
    })
    if (room) return res.json({ msg: "room added successfully." });
    else return res.json({ msg: "Failed to add room to the database" });
  } catch (ex) {
    next(ex);
  }
};

// Sửa phòng
module.exports.updateRoom = async (req, res, next) => {
    try {
      const roomId = req.params.id; // ID của phòng cần sửa
      const updateData = req.body; // Dữ liệu cập nhật từ request body
      const room = await RoomModel.findByIdAndUpdate(roomId, updateData, { new: true });
      if (room) return res.json({ msg: "Room updated successfully", room });
      else return res.json({ msg: "Failed to update room" });
    } catch (ex) {
      next(ex);
    }
  };
  
  // Xóa phòng
  module.exports.deleteRoom = async (req, res, next) => {
    try {
      const roomId = req.params.id; // ID của phòng cần xóa
      const room = await RoomModel.findByIdAndRemove(roomId);
      if (room) return res.json({ msg: "Room deleted successfully" });
      else return res.json({ msg: "Failed to delete room" });
    } catch (ex) {
      next(ex);
    }
  };
  
  //lấy tất cả phòng
  module.exports.getAllRooms = async (req, res, next) => {
    try{
        const rooms = await RoomModel.find({_id:{$ne:req.params.id }}).select([
          MaRoom,
          TenRoom,
          Loai,
          Chucvu,
          NgayTao,
          SDT,
          email,
        ]);
        return res.json(rooms);
    }catch(ex){
        next(ex);
    }
  };