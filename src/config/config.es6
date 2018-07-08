import path from "path"
const CONFIG=new Map()
CONFIG.set("prot",3000);
CONFIG.set("startDiv",path.join(__dirname,"../public"))
CONFIG.set("viewDiv",path.join(__dirname,"../views"))
export default CONFIG