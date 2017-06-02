# _Question and Answer Message Board_

#### _This app lets users input a question, see questions, and add answers to specific questions, Friday, June 2, 2017_

#### By _**James Higgins**_

## Description

_The home page displays all the questions. A user can add new questions, or updated one. They can also click into a specific question, and add an answer. From there they can also delete the answer_

## Setup/Installation Requirements

### Access Atom Files

* _Ensure connection to the Internet_
* _On a mac using spotlight search type in terminal_
* _Once in terminal enter the following commands to clone the file to your desktop and open the repository:_
```
$ cd desktop
$ git clone https://github.com/jamesmilanhiggins/ask-me-anything
$ cd ask-me-anything
$ npm install
$ bower install
$ ember s
$ open localhost:4200 in your browser
```

## Planning

1. Configuration/dependencies
  * firebase

2. Specs
  * Spec 1: A user can input a question on the homepage, Ex: What is a good course to take at Epicodus?, "What is a good course to take at Epicodus" is listed on the homepage.
  * Spec 2: A user can click into a question, and add an answer, Ex: Ruby!, "Ruby!" is listed as an answer to the question.
  * Spec 3: A user can update/edit questions, What is a good course to take at Epicodus? , What is the best course at Epicodus?.

3. Integration
  * A home page /index route
  * An about page/route
  * A social-media page/route
  * And a contact page/route

4. UX/UI
  * Include and modify bootstrap.
  * Develop custom style

5. Polish
  * Refactor minor portion of...
  * Delete unused...
  * Make README awesome


## Known Bugs

* There are no known bugs at this time*


## Support and contact details

_Please contact James Higgins at James.Milan.Higgins@gmail.com if you have any questions._

## Technologies Used

* JavaScript
* Ember
* Node
* Bower
* HTML
* Jquery
* Bootstrap

### License

*This software is licensed under MIT license.*

Copyright (c) 2017 **_James Higgins_**

![Home Page Screenshot](/images/home-page.png)
![Question Screenshot](/images/update-question.png)
![Answer Screenshot](/images/answers.png)
![New Answer Screenshot](/images/new-answer.png)
