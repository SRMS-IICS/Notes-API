# Notes API 

Create a RESTful API that allows users to create, retrieve, update, and delete notes. Each note can consist of a title and a body.

## Requirements:

1. API Endpoints:

·         POST /notes: Create a new note.

·         GET /notes: Retrieve all notes.

·         GET /notes/:id: Retrieve a specific note by ID.

·         PUT /notes/:id: Update a specific note.

·         DELETE /notes/:id: Delete a specific note.

 

2. Data Storage: Use an in-memory array or a simple file-based solution to store notes.

3. Data Validation: Validate input data for creating and updating notes.

4. Error Handling: Basic error handling for common scenarios (e.g., note not found).

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version

    $ npm --version

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


##  Install

    $ git clone https://github.com/SRMS-IICS/Notes-API.git
    $ cd Notes-API
    $ npm install express

## Running the project

    $ node . 


##### How to use the API:

1. Download and Install Postman API Platform from their official site https://www.postman.com/downloads/
2. Make a New Request
3. Choose the method you would want to use(GET, POST, PUT, DELETE)
4. Paste the URL specified for the method/action you chose:
   1. Retrieves all Notes
      GET: http://localhost:8080/notes
   2. Retrieves a specific Note:
      GET: http://localhost:8080/notes/<ID>
   3. Create a note
      POST: http://localhost:8080/notes
   4. Update a note
      PUT: http://localhost:8080/notes/<ID>
   5. Delete a note
      DELETE: http://localhost:8080/notes/<id>
5. Click Body then choose raw -> JSON
   For POST and PUT:
   enter the JSON format with and fill in the title and body fields 
   {

    "title": "",
    "body": ""

    }
   *For other Requests leave the Body empty*
6. Click the Send button
