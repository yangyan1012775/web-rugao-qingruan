var http=require('http);
var qs=require('querystring');
var fs=require('fs');
var path=require('path');

http.createServer(function(req,res){
		if(req.method==="POST"){
			var data=[];
			var length=0;
			req.on('data',function(chunk){
				console.log('data');
				//接受数据
				length+=chunk.length;
				data.push(chunk);
			});
			req.on('end',function(){
				//拼接数据
				data=Buffer.concat(data,length);
				//分析数据
				var formData=qs.parse(String(data));
				req.body=formData;
				res.write(String(data));
				res.end();
			});
		}else{
			console.log('inside home');
			var filename=path.resolve(_dirname,'form.html');
			var content=fs.readFileSync(filename);
			res.write(String(content));
			res.end();
		}
}).listen(8080);