# Changes from "standard" adonisjs

- Railsification
  - Env files made more like our rails template
  - Setup script added: `bin/setup`
  - Scripts for creating and dropping databases
  - `config/database.ts`: A single place for db config for multiple envs (like rails)
- Render views with inertia so that we can use react for the whole frontend if we want
- Database
  - Kysely used instead of lucid
    - Allows us to have types in react
- Tailwind added + setup for component library

# WIP:
- Set up authentication

# TODO:
- Don't load .env in production env (maybe delete it when building?)

# Nice to have:
- Code coverage for frontend code tested via browser tests
