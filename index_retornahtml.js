const http = require("http");
var url = require("url");
var fs = require("fs");


http.createServer((req,res)=>{

    // -- RETORNANDO UMA PAGINA COMO RESPOSTA
    // --
    
    // var q = url.parse(req.url,true);
    // var nomedoarquivo = "." + q.pathname;
    // fs.readFile(nomedoarquivo,((err,data)=>{
    //     if(err){
    //         res.writeHead(404,{"Content-type":'text/html'});  
    //         return res.end("404 NOT FOUND");
    //     }
    //     res.writeHead(200,{"Content-type":'text/html'});  
    //     res.write(data);
    //     return res.end();
    // })
    // );



    //split de url
    // var q = url.parse(req.url,true).query;
    // var texto = q.year;
    // res.end(texto);


}).listen(8082);