const http = require('http');
//console.log(http);

http.createServer(function(req, res){
   
   res.writeHead(200,{
       "Content-Type" : "text/plain; charset=utf-8"
   });

   switch (req.url) {
    case '/':
        res.end('Este el HOME')
        break;
    case '/productos' :
        res.end('Estos son nuestros productos')
        break
    case '/contacto':
        res.end('Dejanos tu mensaje')
        break
    default:
        break;
}



   res.end('AGUANTE EL ROJO (Si, este es mi primer servidor con Node JS=D)');     


}).listen(3030, 'localhost',()=>console.log('Servidor funcionando en el puerto 3030'));