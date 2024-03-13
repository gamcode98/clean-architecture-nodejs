import { envs } from './config'
import { MongoDatabase } from './data/mongodb'
import { AppRoutes } from './presentation/routes'
import { Server } from './presentation/server'

(() => {
  void main()
})()

async function main () {
  await MongoDatabase.connect({
    mongoUrl: envs.MONGO_URL,
    dbName: envs.MONGO_DB_NAME
  })

  await new Server({
    port: envs.PORT,
    routes: AppRoutes.routes
  }).start()
}
