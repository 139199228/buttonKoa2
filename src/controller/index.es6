import indexM from "../modules/indexModule";
import { AsyncResource } from "async_hooks";

const controller={
    index(){
        return async(ctx,next)=>{
            ctx.body=await ctx.render('index.html',{
                title:"大拇指"
            })
        }
    },
    upData(){
        return async(ctx,next)=>{
            var index =new indexM(ctx)
            console.log(index.Updata())
            ctx.body=await index.Updata();
        }
    }
}
export default controller