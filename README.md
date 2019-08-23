# Gungnir
Gungnir helps.


## Usage
- [Getting Started](#getting-started)
- [GraphQL Queries](#graphql-queries)
- [Deployment](#deployment)
- [Built with](#built-with)

## Getting Started

These instructions will get you a copy of the tool up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Gungnir is built with nodeJS packages, therefore will require nodeJS to be installed. It also makes a connection to a neo4j database so make sure you have an neo4j instance running somewhere. 

You will also need to create an .env file which will contain your environment variables. It should look like these (Depending on your setup):

```
NEO4J_URI=bolt://localhost:7687
NEO4J_USER=neo4j
NEO4J_PASSWORD=password
GRAPHQL_LISTEN_PORT=4001
GRAPHQL_URI=http://localhost:5000/graphql
```

### Installing

Once nodeJS is installed, we are ready to get started. 

These steps will help you get started: 

1. Clone or fork the repo
2. Install the dependencies:

    ```cmd
    npm install
    ```
## GraphQL Queries

Currently Gungnir grabs the existing GQL schema from the neo4j instance, and if needed to add more, add it in src/query.js file.

## Deployment

You can deploy the tool using docker.

## Built with

- GraphQL
- Appolo
- Neo4j Database 
