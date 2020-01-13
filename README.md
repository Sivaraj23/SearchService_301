# Search Restaurant server

This server has the different handlers for searching restaurant based on different criteria. This server is used by Aggregator service to get the restaurants list for analysis purpose.

## Getting Started

The server is written in node JS using express framework and  mongoDB. 

### Prerequisites
Please install following softwares before pulling the project.

 1,Node JS\
 2,MongoDB (running as a service)\
 3,Docker

### Installing for Dev

1,Pull the code from this repository  by executing the following command.

```
git clone https://github.com/Sivaraj23/SearchService_301.git
```

2,move to the SearchService_301 folder and  execute npm install

```
cd  SearchService_301
npm i
```
3,The project is now ready to run.
```
npm start
```

you can try placing order by hitting 
```
http://localhost:3004/search?name=<RESTAURANT NAME>
```


## Deployment in Docker

#### building docker container
```
docker build -t searchserver .
```

## To run in Docker

#### Run consul in docker container
```
docker run -d -p 8500:8500 -p 8600:8600/udp --name=badger consul agent -server -ui -node=server-1 -bootstrap-expect=1 -client=0.0.0.0
```
#### Run Mongo DB container
```
docker run --name mongoserver  -it -d mongo
docker run -it --link=mongoserver:mongo mongo /bin/bash
```
#### Get Mongo IP  and PORT by executing the following command in mongo bash
```
env
```
#### To run Order Management  server
```
docker run -e MONGO_IP="<MONGO_DB_IP>"  -e CONSUL_IP="<CONSUL_IP>" -e MONGO_PORT="<MONGO_DB_PORT>" -it -d -p <HOST_PORT>:<CONTAINER:PORT> searchserver
```


## Built With

* [NodeJS](https://nodejs.org/) 
* [Express JS](https://expressjs.com/)
* [MONGO DB](https://www.mongodb.com/)