import config from 'infrastructure/config'
import app from './app'

const { host, port } = config.server

app.listen(
  port,
  host,
  () => console.log(`Started at ${host}:${port}`)
)
