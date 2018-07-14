import Koa from "koa";
import serve from "koa-static";
import render from "koa-swig";
import router from "koa-simple-router";
import co from "co";


import initController from "./controller/init"
import CONFIG from './config/config';

const app = new Koa();
initController.init(app,router)
app.context.render = co.wrap(render({
    root: CONFIG.get("viewDiv"),
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    writeBody: false
  }));
    

app.use(serve(CONFIG.get("startDiv")));


app.listen(CONFIG.get("prot"))

export default app;