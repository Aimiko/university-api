const test = require('tape')
const request = require('supertest')
const app = require('../server')

test('First test case',(t)=>{
    t.equal(1,1)
    t.end()
})

test('GET /student',(t)=>{
    request(app).get('/students')//เหมือนเปิดบราวเซอร์
        .expect(200)
        .then((res)=>{
            let students = res.body
            t.equal(2,students.length)
            let student = student[0]
            t.notEqual(undefined,student.id)
            t.end()
        })//คือการปิดคอนเนตชั่น
})
test('POST /students',(t)=>{
    request(app).post('/students')
    .send({name: 'Chatda',email:'chatda@gmail.com'})
    expect(200)
    .then((res)=>{
        let student = res.body
        t.notEqual(undefined,student.id)
        t.equal('Chatda',student.name)
        t.end()
    })
})
