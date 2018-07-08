import index from "./index.js"
const controller = {
    init(app, router) {
        app.use(router(_ => {
            _.get("/index/index", index.index());
            _.get("/index/num",index.upData());
        }))
    }
}
export default controller