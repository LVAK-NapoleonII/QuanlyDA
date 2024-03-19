const HoatDongModel = require("../models/HoatDongModel");

// thêm room
module.exports.addHD = async (req, res, next) => {
  try {
    const { TenHD } = req.body;
    const HoatDong = await HoatDongModel.create({
        TenHD,
    })
    if (HoatDong) return res.json({ msg: " added successfully." });
    else return res.json({ msg: "Failed to add to the database" });
  } catch (ex) {
    next(ex);
  }
};

// Sửa phòng
module.exports.updateQuyHD = async (req, res, next) => {
    try {
      const hdId = req.params.id; // ID của Hd cần sửa
      const updateData = req.body; // Dữ liệu cập nhật từ request body
      const hd = await HoatDongModel.findByIdAndUpdate(hdId, updateData, { new: true });
      if (hd) return res.json({ msg: "quyhd updated successfully", hd });
      else return res.json({ msg: "Failed to update quyhd" });
    } catch (ex) {
      next(ex);
    }
  };
  
  // Xóa phòng
  module.exports.deleteQuyHd = async (req, res, next) => {
    try {
      const hdId = req.params.id; // ID của hoạt động cần xóa
      const hd = await HoatDongModel.findByIdAndRemove(hdId);
      if (hd) return res.json({ msg: "hd deleted successfully" });
      else return res.json({ msg: "Failed to delete hd" });
    } catch (ex) {
      next(ex);
    }
  };
  
  //lấy tất cả quỹ
  module.exports.getAllhd = async (req, res, next) => {
    try{
        const hd = await HoatDongModel.find({_id:{$ne:req.params.id }}).select([
          TenHD,
        ]);
        return res.json(hd);
    }catch(ex){
        next(ex);
    }
  };