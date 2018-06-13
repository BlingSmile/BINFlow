/*
 * @Author: BlingBling 
 * @Date: 2018-06-13 15:43:31 
 * @Last Modified by: BlingBling
 * @Last Modified time: 2018-06-13 22:32:08
 */

 (function(global,undefined){
     var ActivityList = [];
     var baseRect = document.getElementById("baseRect");
     if(baseRect !== null ){
         baseRect.onmouseover = function(){
             baseRect.setAttribute("class","rect_hover");
         }
         baseRect.onmouseout = function(){
             baseRect.setAttribute("class","rect");
         }
         baseRect.onmousedown = function(ev){
            var ev = ev||event;
            var n = addDiv(ev);
             var newRect = $$("rect",n);
             ActivityList.push(newRect);
         }
     }else{
         console.log("not exits");
     }

     function addDiv(ev){
        var d = document.createElement("div");
        document.body.appendChild(d);
        d.setAttribute("class","rect");
        d.style.position ="absolute";
        d.style.top = (ev.clientY -d.offsetHeight/2) +"px";
        d.style.left = (ev.clientX -d.offsetWidth/2 )+"px";
        d.onmousedown = function(){
            d.onmousemove = function(ev){
                var ev = ev||event;
                this.style.top = (ev.clientY -d.offsetHeight/2) +"px";
                this.style.left = (ev.clientX -d.offsetWidth/2 )+"px";
            }
        }
        d.onmouseup = function(){
            this.onmousemove = function(){};
        }
        return d;
     }
 })(window,)
