# BACKENDPLENO
## ADONIS JS
- adonisJS webapi
- sqlserver Database
- linux server
---
## REQUISITOS
- sudo apt install nodejs
- sudo apt install npm
- npm i @adonisjs/lucid@alpha
- node ace invoke @adonisjs/lucid
- node ace configure @adonisjs/lucid ## para outros tipos de bancos de dados como postgres, mysql e etc

## PM2
- npm install pm2@latest -g  # for server project
- pm2 start "npm run dev" --exp-backoff-restart-delay=100  ## para testes
- pm2 list, pm2 start, pm2 stop
---

## NOHUP -- ALTERNATIVA

- pode ser usar nohup como altrnativa pra subir o serviço
- nohup npm run dev
- nohup stop #PID
---


## INITIAL DATA
- node ace make:controller Aluno
- node ace make:model Aluno -m

- node ace make:controller Professor
- node ace make:model Professor -m

- node ace make:controller Sala
- node ace make:model Sala -m
---


## CONFIG FOR SQLSERVER
-    mssql: {
			client: 'mssql',

      connection: {
				user: Env.get('MSSQL_USER'),
				port: 1433,
				server: Env.get('MSSQL_SERVER'),
				password: Env.get('MSSQL_PASSWORD', ''),
				database: Env.get('MSSQL_DB_NAME'),
        options: {
          encrypt: false,
        },
      },
}
---



## SQLSERVER WITH LINUX
- sudo apt-get update
- curl -fsSL https://packages.microsoft.com/keys/microsoft.asc | sudo gpg --dearmor -o /usr/share/keyrings/microsoft-prod.gpg
- curl -fsSL https://packages.microsoft.com/config/ubuntu/22.04/mssql-server-preview.list | sudo tee /etc/apt/sources.list.d/mssql-server-preview.list
- sudo apt-get install -y mssql-server
- sudo /opt/mssql/bin/mssql-conf setup
- systemctl status mssql-server --no-pager
- curl https://packages.microsoft.com/keys/microsoft.asc | sudo tee /etc/apt/trusted.gpg.d/microsoft.asc
- curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list > /etc/apt/sources.list.d/mssql-release.list
- sudo apt-get install mssql-tools18 unixodbc-dev
- sudo apt-get install mssql-tools18
- echo 'export PATH="$PATH:/opt/mssql-tools18/bin"' >> ~/.bash_profile
- echo 'export PATH="$PATH:/opt/mssql-tools18/bin"' >> ~/.bashrc source ~/.bashrc
- sudo apt install zlib1g
---


## DEPENDÊNCIAS
- libc6
- libgcc1
- libgcc-s1
- libgssapi-krb5-2
- libicu71
- liblttng-ust1
- libssl3
- libstdc++6
- libunwind8
- zlib1g
---

## SQLSERVER COMMAND LINE
- sqlcmd -S localhost -U sa -P '<YourPassword>'
- sudo ln -sfn /opt/mssql-tools/bin/sqlcmd* /usr/local/bin/sqlcmd
- sudo ln -sfn /opt/mssql-tools/bin/bcp* /usr/local/bin/bcp
---

