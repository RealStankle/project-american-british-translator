const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

suite('Functional Tests', () => {
  test('POST /api/translate, translation with text and locale fields', (done) => {
    const text = 'The parking lot was full.';
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
        text,
      })
      .end((_, response) => {
        assert.strictEqual(response.status, 200);
        assert.deepEqual(response.body, {
          text,
          translation: 'The <span class="highlight">car park</span> was full.',
        });
        done();
      });
  });

  test('POST /api/translate, translation with text and invalid locale field', (done) => {
    const text = 'The parking lot was full.';
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-spanish',
        text,
      })
      .end((_, response) => {
        assert.strictEqual(response.status, 200);
        assert.deepEqual(response.body, {
          error: 'Invalid value for locale field',
        });
        done();
      });
  });

  test('POST /api/translate, translation with missing text field', (done) => {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
      })
      .end((_, response) => {
        assert.strictEqual(response.status, 200);
        assert.deepEqual(response.body, {
          error: 'Required field(s) missing',
        });
        done();
      });
  });

  test('POST /api/translate, translation with missing locale field', (done) => {
    const text = 'The parking lot was full.';
    chai
      .request(server)
      .post('/api/translate')
      .send({
        text,
      })
      .end((_, response) => {
        assert.strictEqual(response.status, 200);
        assert.deepEqual(response.body, {
          error: 'Required field(s) missing',
        });
        done();
      });
  });

  test('POST /api/translate, translation with empty text', (done) => {
    const text = '';
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'american-to-british',
        text,
      })
      .end((_, response) => {
        assert.strictEqual(response.status, 200);
        assert.deepEqual(response.body, { error: 'No text to translate' });
        done();
      });
  });

  test('POST /api/translate, translation with text that needs no translation', (done) => {
    const text = 'The parking lot was full.';
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'british-to-american',
        text,
      })
      .end((_, response) => {
        assert.strictEqual(response.status, 200);
        assert.deepEqual(response.body, {
          text,
          translation: 'Everything looks good to me!',
        });
        done();
      });
  });
});
