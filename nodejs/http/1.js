var http=require("http");
var url=require("url");

function userLogin(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('yangyan');
	res.end();
}

http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	var parsed=url.parse(req.url);
	console.log(parsed);
	if(parsed.pathname==='/user/login'){
		return userLogin(req,res);
	}
	res.write('hello,你请求了'+ req.url);
	res.end();
}).listen(8080);
	