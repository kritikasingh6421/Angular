# ResultManagmentApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Api Server
* Install JSON Server
    npm install -g json-server

* Create a db.json file with some data like
    {
        "result": [
            { "id": 1, "rollno": 1, "name": "kritika singh", "dob":"06-04-2001", "score": 88 }
        ]
    }

* Start JSON Server
    json-server --watch db.json

## Assignment

Develop a “Result Management Application” using Angular and Node.
* Two types of users can login to application by clicking a button on homepage
* Students can enter their roll number and date of birth to view their result
* If roll number and D.O.B. does not match, an error should be shown on screen.
* Teachers can View all records, add new record, edit and delete the records.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


