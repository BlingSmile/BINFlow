/*
 * @Author: BlingBling 
 * @Date: 2018-06-13 11:06:43 
 * @Last Modified by: BlingBling
 * @Last Modified time: 2018-06-13 16:32:35
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
         console.log(Child.prototype.__proto__ === BaseObject.prototype);
     }

     function BaseObject(){
         this.name = "baseObjects";
     }

     BaseObject.prototype = {
         name:"baseObject",
        
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
     console.log(vec.getName());
     var bobj = new BaseObject();

     global.$$ = $$ = function(name){
         switch(name){
             case "rect":return new Vec();
             default: return undefined;
         }
     }
     
 })(window,)


