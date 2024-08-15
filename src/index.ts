import express, { Request, Response, NextFunction  } from "express";
import planetRoutes from "./routes/planet";

const app = express();
const port = process.env.PORT || 3000

app.use(express.json())
app.use('/planets', planetRoutes)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack)
    res.status(500).send('Something went wrong')
});

app.listen(port, () => {
    console.log(`API listening on port ${port}`)
})