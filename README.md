# Creating Table and Database Setup :book:

Database is configured per environment in `ormconfig.yml`
- Connection can be specified passing --connection or -c flag to **typerom-cli** more details in `package.json` scripts
- Migrations are described in src/database/migrations preceding with timestamp zone in its name

`yarn typeorm migration:run` to running migrations in development environment

`yarn production migration:run` the name says it all

Doesn't matter where you create the migration so yarn typeorm migration:create -n NameOfMigration works in yarn production script either.

SQLite just works in database that dont uses timestamp data type
---
