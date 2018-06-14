/*
 * @Author: BlingBling 
 * @Date: 2018-06-13 11:06:43 
 * @Last Modified by: BlingBling
 * @Last Modified time: 2018-06-14 15:00:06
 * core.js 核心控件
 */

 (function(global,undefined){
     /*
     * 继承方法 
     */
     function extend(Child,Parent){
         var F = function(){};
         F.prototype = Parent.prototype;
         Child.prototype = new F();
         Child.prototype.constructor = Child;
         Child.uber = Parent.prototype;//备用属性
     }
     /*
     * 徐徐要的函数节流
     * @param func 实际应用函数
     * @delay 间隔实践
     */
    function throttle(func,delay){
        var prev = Date.now();
        var timer = null;
        return function(){
            var context = this;
            var args =  arguments;
            var now = Date.now();
            var remain = delay - (now - prev);
            clearTimeout(timer);

            if(remain <= 0){
                func.apply(context,args);
                prev = Date.now();
            }else{
                timer = setTimeout(func, remain);
            }
            
        }

    }
    /*
    * 鼠标移动函数
    */
    function mouseMoveEvent(ev){
        var ev = ev||event;
        this.style.top = (ev.clientY -this.offsetHeight/2) +"px";
        this.style.left = (ev.clientX -this.offsetWidth/2 )+"px";
    }

     function BaseObject(){
         this.name = "baseObjects";
     }

     BaseObject.prototype = {
        name:"baseObject",
        element:"",
        setElement:function(ele){
            this.element = ele;
            this.boundEvent(this.element);
        },
        getElement:function(){
            return this.element;
        },
        getName:function (){
            return this.name;
        },
        onChange : function(){
            console.log("changed");
         },
        boundEvent : function(ele){
            // var mouseMoveEvents = throttle(mouseMoveEvent,15);
            ele.addEventListener('mousedown',function(){
                ele.addEventListener("mousemove",mouseMoveEvent);
            });
            ele.addEventListener('mouseup',function(){
                console.log("up");
                ele.removeEventListener("mousemove",mouseMoveEvent);
            });
            ele.addEventListener('mouseleave',function(){
                console.log("out");
                ele.removeEventListener('mousemove',mouseMoveEvent);
            });
            console.log(ele);
        }

     }

     function Vec(){
        //  this.name = "xbb2";
         this.mode = "VecMode";
     }

     extend(Vec,BaseObject);

     var vec = new Vec();
     var bobj = new BaseObject();

     global.$$ = $$ = function(name,ele){
         switch(name){
             case "rect":var vec = new Vec();vec.setElement(ele);return vec;
             default: return undefined;
         }
     }
     
 })(window,)


