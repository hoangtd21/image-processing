import supertest from 'supertest';
import app from '..';

const request = supertest(app);

describe('Test image processing', () => {
  it('should get api/images success', async () => {
    const response = await request
      .get('/api/images')
      .query({ filename: 'vietnam', width: 200, height: 200 });
    expect(response.status).toBe(200);
  });

  it('should get api/images failed', async () => {
    const response = await request
      .get('/api/images')
      .query({ filename: 'vietnam', width: 200 });
    expect(response.status).toBe(400);
  });
});
