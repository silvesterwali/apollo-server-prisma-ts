# apollo-server-prisma-ts
learn typescript and apollo server and prisma with mysql 

## Docs

- [Prisma Migrate](https://www.prisma.io/docs/concepts/components/prisma-migrate)

## migrate prisma

- to migrate the prisma schema
 ```bash
    npx prisma migrate dev
 ```
- migrate without apply the migration
```bash
    npx prisma migrate dev --create-only
```
- reset migration in development . only do it when development only 
```bash
 npx prisma migrate reset
```



- to generate the schema

```bash
    npx prisma generate
```

- to apply the migration in production
 ```
 npx prisma migrate deploy
 ```