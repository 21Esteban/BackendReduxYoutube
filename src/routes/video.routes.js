import videoCtrl from "../controllers/video.controller.js";
import { videoValid } from "../validSchema/videoValid.js";

export const videoRoutes = (fastify, opts, done) => {
  fastify.post("/", { schema: videoValid }, videoCtrl.add);
  fastify.get("/", videoCtrl.listar);
  fastify.get("/:id", videoCtrl.listarById);
  fastify.put("/:id", videoCtrl.update);
  fastify.delete("/:id", videoCtrl.delete);

  done();
};
