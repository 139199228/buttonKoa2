import css from '../css/index.css'
class PraiseButton {
    
    // event() {
    //     this.ele.on("click", this.throttle(this.clickAction.bind(this),800));
    // }
    // throttle(fn,ms){
    //     let time;
    //     return function(...arg){
    //         if(!time){
    //             time = setTimeout(()=>time=null,ms);
    //             return fn.apply(this,arg)
    //         }
    //     }
    // }
    clickAction() {
        axios.get("/index/num")
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}
export default PraiseButton