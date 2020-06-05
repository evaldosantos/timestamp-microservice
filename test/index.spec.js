import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../src/index';

chai.use(chaiHttp);

describe('Timestamp microservice', () => {
  describe('GET /api/timestamp/:date_string?', () => {
    let request;

    beforeEach(function () {
      request = chai.request(app).get('/api/timestamp/2015-12-25');
    });

    it('should handle a valid date, and return the correct unix timestamp', (done) => {
      request.end((err, res) => {
        const response = { unix: 1451001600000 };
        expect(res.body).to.include(response);
        expect(res).to.have.status(200);
        done();
      });
    });

    it('should handle a valid date, and return the correct UTC string', (done) => {
      request.end((err, res) => {
        const response = { utc: 'Fri, 25 Dec 2015 00:00:00 GMT' };
        expect(res.body).to.include(response);
        expect(res).to.have.status(200);
        done();
      });
    });
  });
});
