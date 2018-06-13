/*
 * @Author: BlingBling 
 * @Date: 2018-06-13 11:06:43 
 * @Last Modified by: BlingBling
 * @Last Modified time: 2018-06-13 17:02:59
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

     function BaseObject(){
         this.name = "baseObjects";
     }

     BaseObject.prototype = {
        name:"baseObject",
        element:"",
        setElement:function(ele){
            this.element = ele;
        },
        getElement:function(){
            return this.element;
        },
        getName:function (){
            return this.name;
        },
        onChange : function(){
            console.log("changed");
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


