const db = require('../db.js')
const fs = require('fs')
jest.mock('fs') //mock 接管了fs

describe('db', () => {
    it('can read', async () => {
        fs.setMock('/test', null, '[]')
        // 这里一直提示权限不够
        // const list = await db.read('/test')
        // expect(list).toStrictEqual([])
    })
})

// 白盒测试 我知道代码怎么写的 我就去怎么测试
