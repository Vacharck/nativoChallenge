import app from '../src/app'
import request from 'supertest'

describe('GET /',() =>{
    
    test('should responde with a 200 status code', async () =>{
        const response = await request(app).get('/').send()
        expect(response.statusCode).toBe(200);
    })
})

describe('POST /', () =>{

    test('should respond with a 200 status code', async () =>{
        const response = await (await request(app).post('/')).send();
        expect(response.statusCode).toBe(200);
    })
})

describe('GET /:shortUrl',() =>{
    
    test('should responde with a 200 status code', async () =>{
        const response = await request(app).get('/:shortUrl').send()
        expect(response.statusCode).toBe(200);
    })   
})
