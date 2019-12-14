import dotenv from 'dotenv';
import path from 'path';
process.env.MONGO_URL="mongodb://localhost/node302"
const bluebird = require('bluebird');
import * as http from 'http';
process.env.NODE_ENV = 'test';


//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
var sinon = require('sinon');
var sinonTest = require('sinon-test');
var test = sinonTest(sinon);

import app from '../app';
let should = chai.should();
const expect = chai.expect;
const supertest = require('supertest');
import Restaurant from "../models/Restaurants"


chai.use(chaiHttp);

describe('Search', () => {
    //search by name
  describe('/GET /restaurants by name', () => {
      it('it should GET all the Restaurants with given name', () => {
        chai.request(app)
            .get('/api/search?name=MyRestaurant2')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.a('array');
            });
      });
  });
  //search by city
  describe('/GET /restaurants by city', () => {
    it('it should GET all the Restaurants with given city', () => {
      chai.request(app)
          .get('/api/search?city=chennai')
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.a('array');
         
          });
    });
});
//search by rating
describe('/GET /restaurants by rating', () => {
    it('it should GET all the Restaurants with given rating', () => {
      chai.request(app)
          .get('/api/search?rating=5')
          .end((err, res) => {
              res.should.have.status(200);
              res.should.be.a('array');
         
          });
    });
});

});//testsuite