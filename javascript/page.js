// 构建整个web对象
var App=function(){
	this.id=('app'+Math.random()).replace(".","_")
	this.ele=$('<div class="app" id="'+this.id+'">');
	this.page=[];//用于存储添加的page
	$("body").append(this.ele);
	//添加方法
	this.addPage=function(name,text){
		//添加页
		var page=$('<div class="page section">');
		this.ele.append(page);
		if(name!=undefined){
			page.addClass("page_"+name)
		}
		// if(text!=undefined){
		// 	page.text(text)
		// }
		this.page.push(page);
    if(typeof this.whenAddPage=="function"){
      this.whenAddPage();
    }
    return this;
  }
  this.addComponent=function(name,config){
		//添加组件
   var config=config||{};
   config=$.extend({
    type:"base"
       },config)//如果没有传入type的默认值
   var component;
       var page=this.page.slice(-1)[0];//取最近添加的page
       switch(config.type){
       	case 'base':
        component=H5componentBase(name,config);
        break;
        case 'bar':
        component=H5componentBar(name,config);
        break;
        default:
      }
      page.append(component);
      return this;
    }
    this.loader=function(pageIndex){
		//初始化
   this.ele.fullpage({
    afterLoad:function(anchorLink,index){
     $(".page").eq(index-1).find(".component").trigger("onLoad");
   },
   onLeave:function(index,nextIndex,dirction){
     $(".page").eq(index-1).find(".component").trigger("onLeave");
   }
 });
       //第一页默认loader()
       this.page[0].find(".component").trigger("onLoad");
       this.ele.show();
       if(pageIndex){
       	$.fn.fullpage.moveTo(pageIndex);
       }
     }
    return this;  
   }