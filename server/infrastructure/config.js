import path from 'path'
import config from 'recursive-config'

export default config.load({
  defaults: {
    rootDir: path.join(__dirname, '..')
  }
})
