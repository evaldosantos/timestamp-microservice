import express from 'express';
import TimestampService from './TimestampService';
const app = express();
const port = process.env.PORT || 3000;

app.get('/api/timestamp/:date_string?', TimestampService.handle);

export default app.listen(port);
