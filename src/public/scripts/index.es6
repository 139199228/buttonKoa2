class PraiseButton {
    constructor(ele, num) {
        this.ele = ele
        this.num = num
        this.event()
    }
    event() {
        this.ele.on("click", this.throttle(this.clickAction.bind(this),800));
    }
    throttle(fn,ms){
        let time;
        return function(...arg){
            if(!time){
                time = setTimeout(()=>time=null,ms);
                return fn.apply(this,arg)
            }
        }
    }
    clickAction() {
        if (this.num < 10) {
            $("#animation").addClass("num");
            setTimeout(() => {
                $("#animation").removeClass("num");
            }, 1000)
            axios("/index/num")
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            $("div").css("webkit-filter", "grayscale(0)")
            this.num = add(this.num)
        } else {
            $("div").css("webkit-filter", "grayscale(1)")
            this.num = 0
        }
        console.log(this.num)
    }
}
class Thumb extends PraiseButton {
    constructor(ele, num) {
        console.log(num)
        super(ele, num)
    }
}
export default Thumb