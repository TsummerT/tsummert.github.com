var map = new BMap.Map("mymap");    // 创建Map实例

var point = new BMap.Point(120.141373, 30.257803);	//创建坐标点
map.centerAndZoom(point, 13);     // 初始化地图,设置中心点坐标和地图级别 

map.enableScrollWheelZoom();		//滚轮缩放
map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.NavigationControl());    

var marker = new BMap.Marker(point);	// 创建标注    
map.addOverlay(marker);

var local = new BMap.LocalSearch(map, {
	pageCapacity: 7,
  	renderOptions: {
   		map: map,
    	panel: "result",
    	autoViewport: true
  }
});
local.searchNearby("宾馆","西湖");	//本地搜索

var transit = new BMap.TransitRoute(map, {
  	renderOptions: {
    map: map,
    panel: "results"
  }
});
var markerArr=[];
local.setMarkersSetCallback(function(pois){
     for(var i=0;i<pois.length;i++){
        markerArr[i]=pois[i].marker;
        pois[i].marker.addEventListener("click", function(e){
         	transit.clearResults(); 
			transit.search("杭州师范大学-东南1门",this.z.title);
         });
          
     }
 });

var hznuinfo=[
	{ title :"杭州师范大学体育场", point:"120.014299,30.29512", image:"picture/1.jpg"},
	{ title :"博文苑8号楼", point:"120.015184,30.296398", image:"picture/2.jpg"},
	{ title :"杭州师范大学仓前新校区", point:"120.015251,30.295154", image:"picture/3.jpg"},
	{ title :"菜鸟驿站", point:"120.016796,30.296269", image:"picture/4.jpg"},
	{ title :"杭州师范大学1号餐厅", point:"120.016994,30.29361", image:"picture/1.jpg"},
	{ title :"恕园1号楼阿里巴巴商学院", point:"120.019990,30.294831", image:"picture/6.jpg"},
	{ title :"恕园7号楼彩色玻璃房", point:"120.019006,30.295271", image:"picture/1.jpg"},
	{ title :"恕园36号楼图书馆", point:"120.016945,30.297671", image:"picture/1.jpg"},
	{ title :"恕园17号楼法学院", point:"120.019743,30.297124", image:"picture/1.jpg"},
	{ title :"恕园23号楼人文学院", point:"120.01837,30.297435", image:"picture/1.jpg"},
	{ title :"杭州师范大学学生事务服务中心", point:"120.016212,30.296636", image:"picture/1.jpg"}
];

var opts = {
  width: 200, // 信息窗口宽度    
  height: 200, // 信息窗口高度    
}

var points = new Array(); //存放标注点经纬信息的数组  
var mark = new Array(); //存放标注点对象的数组  
var info = new Array(); //存放提示信息窗口对象的数组  
 for (var i = 0; i < hznuinfo.length; i++) {
    var p0 = hznuinfo[i].point.split(",")[0]; //  
    var p1 = hznuinfo[i].point.split(",")[1]; //按照原数组的point格式将地图点坐标的经纬度分别提出来  
    points[i] = new window.BMap.Point(p0, p1); //循环生成新的地图点  
    mark[i] = new window.BMap.Marker(points[i]); //按照地图点坐标生成标记  
    map.addOverlay(mark[i]);
	OnClick(hznuinfo[i].title,mark[i],hznuinfo[i].image);
}
function OnClick(address,point,image){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var box=document.createElement("div");
	box.style.width='200px';
	box.style.height="150px";
	box.style.border = '1px solid black';
	var img = document.createElement('img');
	img.style.width='200px';
	img.style.height='150px';
	img.setAttribute('src', image);
	$(box).append(img);
	$(box).append(address);
	var infoWindow = new BMap.InfoWindow(box,opts);
	map.openInfoWindow(infoWindow,point);
	});
}