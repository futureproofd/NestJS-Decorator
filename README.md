## Description

Test decorator with a tracer and ability to extract headers

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```
## Calling with headers

```
curl --location --request GET 'localhost:3000' \
--header 'X-Correlation-Id: 99999'
```