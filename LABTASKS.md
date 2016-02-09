#Lab Tasks

## Part 1: Exploring the project

- Set up this project to use Travis CI, and add your build status icon to the README.

##### What are the differences between the folder structure of this project and the previous one? Note that api/pets is server-side routing specific to the database, and the client folder contains the client-side portion of the project.

- Instead of everything being in the /public folder, it's now in separate folders (api, client, config, coverage)
- Our Javascript(index.js, pets.controller.js) are now in /api/pets rather than /public/javascript
- Now we have js files paired with each HTML file, for example we have a main.html file and a main.js file in addition to the main.controller.js file that we had in the previous lab.

##### How is app.js (at the project root) different from the ones in the previous two labs? Give examples of the kinds of urls that app.js handles, and describe where each case will be routed.

- App.js now loads mongoose in addition to express and body-parser.
- Uses Json file for body parser
- Instead of public, makes the client directory available to the client
- New app.js now connects to the mongo database
- Options Express uses to send files to client are defined
- Routes now have API and Non API routes.

##### The project is connected to the database via mongoose. Where is this connection set?

- App.js Line 32 connects to mongoose.

##### Explain how api/pets/pets.controller.js gets added to app.js (remember this is all server-side).

- api/pets/pets.controller.js gets added to app.js when the api routes are defined on line 46 of app.js

##### Study the file api/pets/pets.controller.js, answer the following questions:
-  What kind of documents would the database contain? What is the field in the model?
   - The database contains 'pet' documents which consist of a text field (string).
-  What functions are defined in the controller? How do they change the database data?
   -  Index - this does not change the database data, it finds things in the databas
   -  Create - Adds to database
   -  Destroy - Deletes from database
-  How does one get or delete elements in the database?
   - Use destroy to delete
   - Use index to locate a 'pet' in the database

##### What is the purpose of index.js in the api/pets? Where is it referenced?

- app.js references the /api/pets folder that contains index.js. 
- index.js handles the routing for the functions that modify the database in pets.controller.js.

##### What views are used in the project?

- 404, about, and main are the views used in this project.

##### We've seen a few different ways to display HTML in the last couple labs (straight, individual HTML pages and components being added to HTML). How are HTML files combined and displayed in this lab? 

>Protip: main.html isn't a full HTML document, so how does it get displayed?

- Index.html has a div with a ui-view inside of it that handles the display of all the html files for the project. 

##### Where is the code for the navigation bar located? How is it connected to the pages of the project?

- The code for the navbar is in components/navbar in navbar.controller.js and navbar.html. navbar.html is referenced at the top of main.html and and about.html.

##### client/app.js performs client-side routing. How do you think it works?

- It uses appModule which exists in main.controller.js and about.controller.js. 
- It also uses the urlrouterprovider to route the client to the 404 page when urlprovider cannot provide a url.

## Part 2: Add another field to pet data.

- Add a numeric field to the pet model (say, for example, weight). Add a field to enter weight when a new pet document is created. Add a field in the main page to show the heaviest of all pets and its weight. Remember to practice TDD and perform frequent commits.

>Protip: Make sure to separate business logic functions from functions that make http calls. That is, don't have a function that performs both. This alows for optimal testing conditions.

## Part 3: Add a GPA calculator

- Add a view to enter courses and display the GPA. Add a link on the navigation bar that leads to it; add the corresponding route. Entered courses (name, credits, letter grade) must be stored in the database. Practice TDD and perform frequent commits. Don't forget to add new files to git before committing. Use the refactoring menu when renaming files (this will rename then in the git repo as well). Remember to check out you test coverage, and watch your build history on Travis-CI.
