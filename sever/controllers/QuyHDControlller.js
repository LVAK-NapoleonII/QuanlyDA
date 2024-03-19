const QuyHDModel = require("../models/QuyHDModel");

// thêm room
module.exports.addQuyHD = async (req, res, next) => {
  try {
    const { MaThanhVien,Ten,SoTien,Nam,Quy } = req.body;
    const quyhd = await RoomModel.create({
        MaThanhVien,
        Ten,
        SoTien,
        Nam,
        Quy,
    })
    if (quyhd) return res.json({ msg: " added successfully." });
    else return res.json({ msg: "Failed to add to the database" });
  } catch (ex) {
    next(ex);
  }
};

// Sửa phòng
module.exports.updateQuyHD = async (req, res, next) => {
    try {
      const quyId = req.params.id; // ID của Quỹ cần sửa
      const updateData = req.body; // Dữ liệu cập nhật từ request body
      const quyhd = await QuyHDModel.findByIdAndUpdate(quyId, updateData, { new: true });
      if (room) return res.json({ msg: "quyhd updated successfully", quyhd });
      else return res.json({ msg: "Failed to update quyhd" });
    } catch (ex) {
      next(ex);
    }
  };
  
  // Xóa phòng
  module.exports.deleteQuyHd = async (req, res, next) => {
    try {
      const quyId = req.params.id; // ID của phòng cần xóa
      const quyhd = await QuyHDModel.findByIdAndRemove(quyId);
      if (quyhd) return res.json({ msg: "quyhd deleted successfully" });
      else return res.json({ msg: "Failed to delete quyhd" });
    } catch (ex) {
      next(ex);
    }
  };
  
  //lấy tất cả quỹ
  module.exports.getAllQuyhd = async (req, res, next) => {
    try{
        const quyhd = await QuyHDModel.find({_id:{$ne:req.params.id }}).select([
            MaThanhVien,
            Ten,
            SoTien,
            Nam,
            Quy,
        ]);
        return res.json(quyhd);
    }catch(ex){
        next(ex);
    }
  };