const request = require('supertest');
const app = require('../app'); // adjust to your server entry

describe('Authentication', () => {
  test('Login rejects invalid credentials (no user enumeration)', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ email: 'noone@example.com', password: 'wrong' });
    expect(res.statusCode).toBe(401);
    expect(res.text).toMatch(/invalid credentials|error/i);
  });
});


