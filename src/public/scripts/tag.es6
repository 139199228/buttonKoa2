import PraiseButton from './index.es6'
const f = new PraiseButton()
let time;

xtag.register('x-praise', {
    content:`<div class="hand" id="thumb">
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger"></div>
    <div class="finger thumb"></div>
    <div class="arm"></div>
</div>
<span class="hide" id="animation">+1</span>`,

    methods: {
      praise: function(){
        let _self = this;
        f.clickAction();
        let animation = document.querySelector("#animation")
        animation.className = 'hide num';
        console.log(animation)
        setTimeout(()=>{
          animation.className = 'hide';
        },800)
      },
      
    },
   
    events: {
      click:function(el){
          clearTimeout(time)
          time = setTimeout(() => {
             this.praise()    
          }, 800);
      }
    }
  });
  