const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const authRouter = require('./src/routes/auth');

const app = new express();
app.use(bodyParser.urlencoded({
    limit: '5mb',
    parameterLimit: 100000,
    extended: false
}));


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use(authRouter);
app.use('/api/v1', router);

let port = 3000;
app.listen(port);
console.log(`Api server listerning at port ${port}`);
console.log(`Swager API Doc is available now at http://localhost:${port}/api-docs`);