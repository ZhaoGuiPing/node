//引入http模块
const http = require("http");
const http1 = require("http");
//通过http模块创建服务器
const server = http.createServer(function(request,response){
//const创建一服务端口  创建服务   回调函数   请求     响应
 //设置字符编码
 response.setHeader("Content-type","text/plain;charset=utf-8");
    response.write("music");
    response.end(); 
});
server.listen(9999);//监听端口号9999

const server1 = http1.createServer(function(request,response){
        response.write("video");
        response.end(); 
    });
    server1.listen(8888);