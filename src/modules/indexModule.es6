import rpA from 'request-promise';
import { userInfo } from 'os';


class Module{
    constructor(ctx){
        this.ctx=ctx;
    }
    Updata(){
        var options = {
            uri: 'http://localhost/myphp/koa2php/index.php',
            methods:"GET"
        };
        // rpA('http://www.baidu.com')
        //         .then(function (htmlString) {
        //             // Process html...c
        //             console.log(htmlString)
        //         })
        //         .catch(function (err) {
        //             // Crawling failed...
        //             console.log(err)

        //         });

        return new Promise((resolve,reject)=>{
            rpA(options).then(function(result){
                console.log(result)
                const info = JSON.parse(result);
                console.log(info)
                if(info){
                    console.log("->",info);
                    resolve(info);
                }else{
                    console.log("2222222")
                    reject({});
                }
                console.log(info);
            })
        })
    }
} 

export default Module;