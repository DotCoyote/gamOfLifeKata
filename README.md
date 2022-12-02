# Description

This is a simple skeleton to use when running the tests. Perfect for practicing coding Katas.

# Running tests

## Docker setup
- Make sure you have docker and docker-compose installed
- Open a terminal and go to project root
- Run `docker-compose build` to build the container
- Run `docker-compose up` to run the container
- Open a new terminal and go to project root again 

## Running tests

### PHP
- To run tests using interactive shell 
  - execute `docker-compose exec php bash` to enter the shell
  - execute `vendor/bin/codecept build`
  - execute `vendor/bin/codecept run`
- To run tests from the host directly
  - `docker-compose exec php bash -c './vendor/bin/codecept build'`
  - `docker-compose exec php bash -c './vendor/bin/codecept run'`

#### Running tests from PHPStorm
[How to set up Codeception in PHPStorm](./Documentation/PHPStormSetup.md)


### TS
- To run tests using interactive shell
  - execute `docker-compose exec php bash` to enter the shell
  - execute `yarn run test`

