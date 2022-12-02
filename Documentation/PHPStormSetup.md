# Running tests from PHPStorm

## Setting up docker

- Tell what docker to use and where is the project mount point in the container, **/app** in our case and set the mapping
![](Screenshoots/what-docker-to-use.png)

## Setting up interpreter

-  add new interpreter

![](Screenshoots/PHP-interpreter-add-new-step-1.png)

![](Screenshoots/PHP-interpreter-add-new-step-2.png)

- Select from Docker,Vagrant,VM, WSL, Remote

![](Screenshoots/PHP-interpreter-add-new-step-3.png)


-  Select docker compose and pick php as a service from dropdown


![](Screenshoots/PHP-interpreter-add-new-step-4.png)


## Setting up codeception

- go to PHP->Test Frameworks and add a new configuration

![](Screenshoots/Codeception-configure-step-1.png)

- Pick Codeception by Remote Interpreter

![](Screenshoots/Codeception-configure-step-2.png)

- Pick the interpreter from the list
![](Screenshoots/Codeception-configure-step-3.png)

-  Paths should be set automatically

![](Screenshoots/Codeception-configure-step-4.png)

## Running the tests

- To run the test pick codeception run configuration. this will run the whole suite

![](Screenshoots/running-tests-step-1.png)

- you will see the results in run window.

![](Screenshoots/running-tests-step-2.png)

- if you want to see also passing tests do not forget to turn it on

![](Screenshoots/running-tests-step-3.png)