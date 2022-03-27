import express, { Express, Router, Request, Response } from "express";
import axios from 'axios'
const app: Express = express();//创建服务器
const router: Router = express.Router()//创建路由器
app.use('/api', router)//挂载路由到 /api 地址
// 挂载路由到 /list 请求疫情数据
router.get('/covid/list', async (req: Request, res: Response) => {
  // 腾讯新闻疫情URL
  const url = 'https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf'
  // 请求腾讯新闻疫情数据
  const result = await axios.post(url)
  // 发送给前端
  res.json({
    ...result.data.data
  })
})
//开启服务到端口号3000
app.listen(3000, () => {
  console.log('success server http://localhost:3000')
})