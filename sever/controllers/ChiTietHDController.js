const ChiTietHDModel = require("../models/ChiTietHDModel");

// thêm room
module.exports.addChitietHD = async (req, res, next) => {
  try {
    const { NoiDung, SoTien, ForId } = req.body;
    const ChitietHD = await ChitietHDModel.create({
       NoiDung,
       SoTien,
       ForId,
    })
    if (ChitietHD) return res.json({ msg: "added successfully." });
    else return res.json({ msg: "Failed to add to the database" });
  } catch (ex) {
    next(ex);
  }
};

// Sửa phòng
module.exports.updateChitietHD = async (req, res, next) => {
    try {
      const ChitietHDId = req.params.id; // ID của ChitietHD cần sửa
      const updateData = req.body; // Dữ liệu cập nhật từ request body
      const ChitietHD = await ChitietHDModel.findByIdAndUpdate(ChitietHDId, updateData, { new: true });
      if (ChitietHD) return res.json({ msg: " updated successfully", room });
      else return res.json({ msg: "Failed to update" });
    } catch (ex) {
      next(ex);
    }
  };
  
  // Xóa phòng
  module.exports.deleteChitietHD = async (req, res, next) => {
    try {
      const ChitietHDId = req.params.id; // ID của phòng cần xóa
      const ChitietHD = await ChitietHDModel.findByIdAndRemove(ChitietHDId);
      if (ChitietHD) return res.json({ msg: "deleted successfully" });
      else return res.json({ msg: "Failed to delete" });
    } catch (ex) {
      next(ex);
    }
  };
  
  //lấy tất cả phòng
  module.exports.getAllChitietHD = async (req, res, next) => {
    try{
        const ChitietHD = await ChitietHDModel.find({_id:{$ne:req.params.id }}).select([
            NoiDung,
            SoTien,
            ForId,
        ]);
        return res.json(ChitietHD);
    }catch(ex){
        next(ex);
    }
  };