import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/index';

chai.use(chaiHttp);

describe('test suit', function () {
  it('GET /', function () {
    chai
      .request(app)
      .get('/')
      .end(function (err, res) {
        expect(res.text).to.eq('Hello World!');
        expect(res).to.have.status(200);
      });
  });
});
