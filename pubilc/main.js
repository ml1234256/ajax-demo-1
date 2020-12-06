getCSS.onclick = () => {
    const request = new XMLHttpRequest(); // readyState === 0
    request.open('GET', 'style.css');     // readyState === 1
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            // 成功 2xx，失败 4xx 5xx
            if (request.status >= 200 && request.status < 300) {
                // console.log(1, request.response);
                const style = document.createElement('style');
                style.innerHTML = request.response;
                document.head.appendChild(style);
            }else{
                alert('加载失败');
            }
        }
    }
        // request.onload = () => {
    //     const style = document.createElement('style');
    //     style.innerHTML = request.response;
    //     document.head.appendChild(style);
    // }
    // request.onerror = () => {
    //     alert('加载失败');
    // }
    request.send();   // readyState === 2
}

getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '2.js');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // console.log(1, request.response);
                const script = document.createElement('script');
                script.innerHTML = request.response;
                document.body.appendChild(script);
            }else{
                alert('加载失败');
            }
        }
    }
    request.send();
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '3.html');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                // console.log(1, request.responseXML);
                const div = document.createElement('div');
                div.innerHTML = request.response;
                document.body.appendChild(div);
            }else{
                alert('加载失败');
            }
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '4.xml');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const dom = request.responseXML;
                // console.log(1, request.responseXML);
                const text = dom.getElementsByTagName('warning')[0].textContent;
                console.log(text.trim()); // text.trim() 去掉 text 前后的空格
            }else{
                alert('加载失败');
            }
        } 
    }
    request.send();
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '5.json');
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
               console.log(request.response);
               const object = JSON.parse(request.response);
               console.log(object);
               ZhuzhuName.textContent = object.name;
            }else{
                alert('加载失败');
            }
        } 
    }
    request.send();
}
let n = 2;
getPage.onclick = () => {
    if (n <= 3) {
        const request = new XMLHttpRequest();
        request.open('GET', `page${n}.json`);
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300) {
                   const array = JSON.parse(request.response);
                    array.forEach(item => {
                        const li = document.createElement('li');
                        li.textContent = item.id;
                        xxx.appendChild(li)
                    });
                }else{
                    alert('加载失败');
                }
            } 
        }
        request.send();
        n += 1;
    } 
}

