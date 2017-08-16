// 柱状图组件
var H5componentBar=function(name,config){
	//基于componentBase
	var component=H5componentBase(name,config);
	//循环遍历data创建柱状图
	$.each(config.data,function(i,item){
		var line=$('<div class="line">');
		var name=$('<div class="name">');
		var rate=$('<div class="rate">');
		var bg=$('<div class="bg">');
		var per=$('<div class="per">');
		var width=(item.per*100)+"%";
		name.text(item.name);
		rate.width(width);
		per.text(item.per);
		//插入
		rate.append(bg);
		if(item.color){
           bg.css({backgroundColor:item.color});
           per.css({color:item.color});
		}
        line.append(name).append(rate).append(per);
        component.append(line);
	})
	//
	return component;
}