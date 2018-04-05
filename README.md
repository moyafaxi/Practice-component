# demo 
```
<div id="progress1"></div>
<script src="progress.js"></script>
<script>
   var params = {
  id:"progress1",//dom
  bgColor:"#e5e5e5",//背景色
  barColor:"#fe6500",//进度条颜色
  textColor:"#fe6500",//文字颜色
  radius:5,//矩形弧度
  percent:30,//百分比
  width:200,//进度条宽度
  height:10//进度条高度
}
new Progress(params).init();
</script>
```
