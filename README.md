# Social_Network_API

This project is a back end for a social media startup. It utilizes Express.js for the API routes and Mongoose to interact with a MongoDB database. Insomnia Core is used for testing the API routes.

## Installation

Clone the repository.

Run npm install to install dependencies.

Set up your MongoDB connection string in the config/connection.js file.

Run the server using npm start.

## API Routes

### Users

GET /api/users: Retrieve all users.

GET /api/users/:userId: Retrieve a specific user by ID.

POST /api/users: Create a new user.

PUT /api/users/:userId: Update a user by ID.

DELETE /api/users/:userId: Delete a user by ID.

POST /api/users/:userId/friends/:friendId: Add a friend to a user.

DELETE /api/users/:userId/friends/:friendId: Remove a friend from a user.

### Thoughts

GET /api/thoughts: Retrieve all thoughts.

GET /api/thoughts/:thoughtId: Retrieve a specific thought by ID.

POST /api/thoughts: Create a new thought.

PUT /api/thoughts/:thoughtId: Update a thought by ID.

DELETE /api/thoughts/:thoughtId: Delete a thought by ID.

POST /api/thoughts/:thoughtId/reactions: Add a reaction to a thought.

DELETE /api/thoughts/:thoughtId/reactions/:reactionId: Remove a reaction from a thought.

## Testing with Insomnia Core

Use Insomnia Core to test the GET, POST, PUT, and DELETE routes for both users and thoughts.

Ensure that the data for each route is displayed in a formatted JSON.

## Usage 

https://drive.google.com/file/d/1WTU7AeiU0qkC0-0E7DzpCc6n_586BAGO/view?usp=sharing


## Github Repository 

https://github.com/GibinMGeorge/Social_Network_API