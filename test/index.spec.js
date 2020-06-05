import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/index';

chai.use(chaiHttp);

describe('Timestamp microservice', function () {
  describe('GET /api/timestamp/:date_string?', function () {
    it('should handle a valid date, and return the correct unix timestamp', function (done) {
      chai
        .request(app)
        .get('/api/timestamp/2015-12-25')
        .end((err, res) => {
          const response = { unix: 1451001600000 };
          expect(res.body).to.include(response);
          expect(res).to.have.status(200);

          done();
        });
    });
  });
});
