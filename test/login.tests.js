const request = require('supertest')
const app = require('../../build/app')  // adjust if needed

describe('Student Tests', () => {
  test('Rejects invalid login (no user enumeration)', async () => {
    const res = await request(app)
      .post('/rest/user/login')
      .send({ email: 'invalid@example.com', password: 'wrong' })
    expect(res.statusCode).toBe(401)
    expect(res.text).toMatch(/Invalid email or password/i)
  })

  test('Search input should sanitize script tags', async () => {
    const res = await request(app)
      .get('/rest/products/search?q=<script>alert(1)</script>')
    expect(res.statusCode).toBe(200)
    expect(res.text).not.toContain('<script>')
  })
})

