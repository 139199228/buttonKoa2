import requester from "supertest"
import app from "../app.js"
function request(){
    return requester(app.listen())
}
describe('测试add+1', function() {
    it('加1测试', function(done) {
      request(app)
        .get('/index/num')
        .expect(200)
        .end(function(err,res){
            if(res.success==1){
                return done(err)
            }
        })
        done();
    });
  });