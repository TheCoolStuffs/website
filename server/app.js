import express from 'express'
import morgan from 'morgan'

import engine, { templateDir } from 'infrastructure/template-engine'

const app = express()

app.use(morgan('dev'))

app.set('view engine', 'ect')
app.set('views', templateDir)
app.engine('ect', engine.render)

app.use((req, res) => res.render('index'))

export default app
