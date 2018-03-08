import ect from 'ect'
import path from 'path'

import config from 'infrastructure/config'

export const templateDir = path.join(config.rootDir, 'views')

console.log(templateDir)

export default ect({
  root: templateDir,
  ext: '.ect',
  watch: true
})
