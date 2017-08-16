var H5_loading=function(count,total){
	//获取整个H5对象的id
  if(count&&count<total){
    $(".app").hide()
    $("#rate").text(((count/total*100)>>0)+"%")
  }else{
    $("#rate").text("0%")
  }
}