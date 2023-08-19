# E-commerce Back End Database


## Description

This project is a backend CRUD application to store the categories, products and tags of an ecommerce site. It allows the user to store, delete, add and update the contents of the database, thourgh json objects. In developing this project it helped with better understanding third party libraries such as Sequalize to easily modify MYSQL databases with minimal MYSQL usage.

## Installation

Technologies used:
- MYSQL2
- Sequalize 
- dotenv
- Express

These third party dependancies need to be downloaded and installed once this project is download and opened up within a code editor. This can be done through NPM install in the terminal window.

## Usage

Link to a walkthrough: https://youtu.be/K2_TpK5mrdQ

In order to use this project, download or clone this project, and then open it in a code editor and follow these steps.

1. Fill in your mysql information in the .env file.
2. Open your intergrated terminal and source your schema.sql file ("source db/schema.sql"), located in the db folder.
3. Then source your seed data with, node seeds/index.js.
4. Then start the program with node server.js.
