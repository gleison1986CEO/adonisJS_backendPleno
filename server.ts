import 'reflect-metadata'
import sourceMapSupport from 'source-map-support'
import { Ignitor } from '@adonisjs/core/build/standalone'

sourceMapSupport.install({ handleUncaughtExceptions: false })
// NEED CONDIFURATION
new Ignitor(__dirname)
  .httpServer()
  .start()
