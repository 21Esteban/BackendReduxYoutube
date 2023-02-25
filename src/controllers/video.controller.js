import { response } from "../helpers/response.js";
import { videoModel } from "../models/video.model.js";

const videoCtrl = {};

videoCtrl.listar = async (req, reply) => {
  try {
    const video = await videoModel.find();
    response(reply, 200, true, video, "lista de Videos ");
  } catch (error) {
    response(reply, 500, false, "", error.message);
    // res.status(500).json({
    //     ok:false,
    //     data:"",
    //     message:error.message
    // })
  }
};
videoCtrl.listarById = async (req, reply) => {
  try {
    const { id } = req.params;

    const video = await videoModel.findById(id);

    if (!video) {
      return response(reply, 404, false, "", "Video no encontrado");
    }
    console.log("entre");
    response(reply,200, true, video, "video encontrado");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

videoCtrl.add = async (req, reply) => {
  try {
  
    const {date} = req.body;

    const newVideo = new videoModel({
      //todo lo que me llegue por el req.body lo voy a obtener
      ...req.body,
      // date:Date.now(),
    });

    await videoModel.create(newVideo);

    console.log(newVideo);
    response(reply, 201, true, newVideo, "Video Subido");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

videoCtrl.delete = async (req, reply) => {
  try {
    const { id } = req.params;

    const video = await videoModel.findById(id);

    if (!video) {
      return response(
        reply,
        404,
        false,
        "",
        "video no encontrado para eliminar"
      );
    }

    await video.deleteOne();

    response(reply, 200, true, "", "video eliminado ");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

videoCtrl.update = async (req, reply) => {
  try {
    const { id } = req.params;

    const videoAUpdatear = await videoModel.findById(id);

    if (!videoAUpdatear) {
      return response(reply, 404, false, "", "video no encontrado");
    }


    await videoAUpdatear.updateOne(req.body);

    response(reply, 200, true, "", "Video actualizado correctamente");
  } catch (error) {
    response(reply, 500, false, "", error.message);
  }
};

export default videoCtrl;