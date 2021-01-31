import * as express from 'express';


const app = express();


app.get('/', (req, res) => {
    return res.send('Hel000oo World');

})

app.listen(3333);


