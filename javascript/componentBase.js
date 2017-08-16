//componentBase对象
var H5componentBase=function(name,config){
	var config=config||{};

   // 创建component
   var id=("component_"+Math.random()).replace(".","_"); //使用随机数生成id
   var kls="component_"+config.type
   var component=$('<div class="component '+kls+' component_'+name+'" id="'+id+'">');

   //处理参数
   config.text&&component.text(config.text);
   config.width&&component.width(config.width/2); //移动端2px屏
   config.height&&component.height(config.height/2);
   config.bg&&component.css("backgroundImage",'url('+config.bg+')');
   if(config.center){
   	component.css({
   		left:"50%",
   		marginLeft:(-(config.width/4))+"px"
   	})
   }
   if(config.left!=undefined){
      component.css("left",config.left)
   }
   if(config.right!=undefined){
      component.css("right",config.right)
   }
   config.css&&component.css(config.css);
   if(typeof config.onclick=="function"){
      component.on('click',config.onclick)
   }
   //...更多
   //fullpage进场动画animateIn和animateOut
   component.on("onLoad",function(){
   	 //动画延时
   	  setTimeout(function(){
          component.addClass(kls+"_load").removeClass(kls+"_leave");
          config.animateIn&&component.animate(config.animateIn);
   	  },config.delay||0)
   	  //return false是啥？
   	  return false;
   })
   component.on("onLeave",function(){
      setTimeout(function(){
      	component.addClass(kls+"_leave").removeClass(kls+"_load");
      	config.animateOut&&component.animate(config.animateOut);
      })
   })
   //
   return component;
}