//引入http模块
const http = require("http");

//通过http模块创建服务器
const server = http.createServer(function(request,response){
 //设置字符编码
 response.setHeader("Content-type","text/plain;charset=utf-8");
    response.write("music");
    response.end(); 
    console.log("111");
    
});
console.log("222");

server.listen(9999);//监听端口号9999

