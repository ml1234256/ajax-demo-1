var http = require('http')
var fs = require('fs')
var url = require('url')
var port = process.argv[2]

if(!port){
  console.log('请指定端口号好不啦？\nnode server.js 8888 这样不会吗？')
  process.exit(1)
}

var server = http.createServer(function(request, response){
  var parsedUrl = url.parse(request.url, true)
  var pathWithQuery = request.url 
  var queryString = ''
  if(pathWithQuery.indexOf('?') >= 0){ queryString = pathWithQuery.substring(pathWithQuery.indexOf('?')) }
  var path = parsedUrl.pathname
  var query = parsedUrl.query
  var method = request.method

  /******** 从这里开始看，上面不要看 ************/

  console.log('猪猪来啦！猪猪走到了：' + pathWithQuery)

  if(path === '/'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    let string = fs.readFileSync('src/index.html').toString();
    const page = fs.readFileSync('db/page1.json').toString();
    const array = JSON.parse(page);
    const result = array.map(item=>`<li>${item.id}</li>`).join('');
    string = string.replace('{{page}}', `<ul id='xxx'>${result}</ul>`);
    response.write(string);
    response.end();
  }else if(path === '/main.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('src/main.js'))
    response.end()
  }else if(path === '/style.css'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/css;charset=utf-8')
    response.write(fs.readFileSync('src/style.css'))
    response.end()
  }else if(path === '/2.js'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/javascript;charset=utf-8')
    response.write(fs.readFileSync('src/2.js'))
    response.end()
  }else if(path === '/3.html'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(fs.readFileSync('src/3.html'))
    response.end()
  }else if(path === '/4.xml'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/xml;charset=utf-8')
    response.write(fs.readFileSync('src/4.xml'))
    response.end()
  }else if(path === '/5.json'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json;charset=utf-8') // text.json 都行
    response.write(fs.readFileSync('src/5.json'))
    response.end()
  }else if(path === '/page2.json'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json;charset=utf-8') // text.json 都行
    response.write(fs.readFileSync('db/page2.json'))
    response.end()
  }else if(path === '/page3.json'){
    response.statusCode = 200
    response.setHeader('Content-Type', 'application/json;charset=utf-8') // text.json 都行
    response.write(fs.readFileSync('db/page3.json'))
    response.end()
  }else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/html;charset=utf-8')
    response.write(`猪猪迷路了T_T\n`)
    response.end()
  }

  /******** 代码结束，下面不要看 ************/
})

server.listen(port)
console.log('监听 ' + port + ' 成功\n请猪猪跳一只芭蕾舞然后进入 http://localhost:' + port)
