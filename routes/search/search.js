var express = require('express');
import searchController from './controller/searchController';
import SearchService from './service/searchService';

var router = express.Router();



router.route('/')
.post(SearchService.postNotSupported)
.get(searchController)
.put(SearchService.putNotSupported)
.patch(SearchService.patchNotSupported);


module.exports = router;
