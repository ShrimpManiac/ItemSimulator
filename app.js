import express from 'express';
import goodsRouter from './routes/goods.js';
import newsRouter from './routes/news.js';

const app = express();
const PORT = 3000;

// Express에서 req.body에 접근하여, body 데이터를 사용할 수 있도록 설정하는 미들웨어
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// localhost:3000/api -> goodsRouter
app.use('/api', [goodsRouter, newsRouter]);

app.listen(PORT, () => {
  console.log(PORT, '포트로 서버가 열렸어요!');
});
