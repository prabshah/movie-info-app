## Movie Searching Application

## Instructions

### To run the app locally
1. Install dependencies - it might take a while (!)
    ```
    $ yarn/npm install
    ```    
5. Checkout to the application
    ```
    $ yarn/npm start
    ```  
### To run test
I chose Jest as a test runner, as it requires almost no configuration and provides useful features such as parallel testing, intelligent test watching and coverage report out of the box.

1. Install dependencies.
2. Run all the test at once.
    ```
    $ npm/yarn test
3. Run test in a watch mode.
    ```
    $ npm/yarn test:watch

## Approach

### Features
With the time given, I have chosen a combination of features and a clean and simple user interface to structure the application. I then followed agile development approach to develop the application.

With this application, users can:
- type movie name in the input field and see the list of movies displayed in a list
- able to update the list as they type. The list gets updated according to the current input value
- able go view more details about the movies by clicking on the result items.
- able to go back to the search page by clicking the go back button
- able to hold the information on reload/refresh as the app uses localstorage to retain the data

### Main frameworks and libraries
- React, Redux, Webpack, Babel, SASS, HTML & CSS

### Application architecture
The frontend serves as an interface with the user. I aimed to achieve a simple yet attracting and user-friendly design. The movie api gets called to fetch data on user interaction that is then passed to the application's state to change and manipulate the user views.

### Possible Improvements
I am aware that I have only managed to write very few tests. If I had more time I would have written more tests for actions, reducers and integration tests. I fully understand the importance of testing in software development.

## Authour

Prabesh Shah