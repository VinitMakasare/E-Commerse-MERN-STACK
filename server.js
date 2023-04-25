import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
// import authRoute from './routes/authRoute.js'
import authRoutes from './routes/authRoute.js'

//env config
dotenv.config()

//databse config
connectDB()

const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))



//routes
app.use('/api/v1/auth',authRoutes)




app.get('/', (req,res) => {
    res.send("<h1>WELCOME</h1>")
})




const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`app is listening on port ${PORT}`);
})      
