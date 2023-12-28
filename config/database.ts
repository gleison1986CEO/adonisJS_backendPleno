
import Env from '@ioc:Adonis/Core/Env'
import { OrmConfig } from '@ioc:Adonis/Lucid/Orm'
import { DatabaseConfig } from '@ioc:Adonis/Lucid/Database'

const databaseConfig: DatabaseConfig & { orm: Partial<OrmConfig> } = {
  connection: Env.get('DB_CONNECTION'),

  connections: {

		mssql: {
			client: 'mssql',

      connection: {
				user: Env.get('MSSQL_USER'),
				port: 1433,
				server: Env.get('MSSQL_SERVER'),
				password: Env.get('MSSQL_PASSWORD', ''),
				database: Env.get('MSSQL_DB_NAME'),
        options: {
          encrypt: false, //use for mssql server for
        },
      },
      healthCheck: false,
			debug: false,
		}

  },

  orm: {
  },
}

export default databaseConfig
