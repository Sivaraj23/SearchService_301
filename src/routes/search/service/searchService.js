import Restaurant from "../../../models/Restaurants"
import logger from "../../../utilities/Logger"
var path = require('path');
var NAME = path.basename(__filename);

const SearchService = {

    getCaseInsensitiveQuery: async (string) => {
        try{
        return new RegExp(["^", string, "$"].join(""), "i")
        }catch(err){
            logger.error(NAME+err)
            throw new Error(message)

        }
    },
    search: async (obj) => {
        // var res=new Restaurant({
        //         "budgetPerPerson" :200,
        //         "cuisine" : 
        //             "hyderabad",

        //         "menuItems" : [ 
        //         ],
        //         "name" : "MyRestauranthyderabad",
        //         "email" : "myrestauranthyderabad@gmail.com",
        //         "contactNumber" : "984311653",
        //             "addressLine1" : "hyderabad",
        //             "addressLine2" : "main road",
        //             "city" : "hyderabad",
        //             "state" : "Andhra",
        //             "pincode" : "6200006",
        //             "country" : "india",
        //             "location" :{"type":"Point","coordinates":[17.4126274,78.2679613]}, 
        //             "rating" : "5"
        // })
        
        // return await res.save();
        var query = {};
        if (obj.name){
            logger.info(NAME+"->Received Name field")
            query.name = await SearchService.getCaseInsensitiveQuery(obj.name);  //name
        }
        if (obj.city)
        {
            logger.info(NAME+"->Received city field")
            query.city = await SearchService.getCaseInsensitiveQuery(obj.city);  //city
        }
        if (obj.cuisine)
        {
            logger.info(NAME+"->Received cuisine field")
            query.cuisine = await SearchService.getCaseInsensitiveQuery(obj.cuisine);  //cuisine
        }       
        if (obj.budget)
        {
            logger.info(NAME+"->Received budget field")
            query.budgetPerPerson = obj.budget;  //budget
        }       
        if (obj.rating)
        {
            logger.info(NAME+"->Received rating field")
            query.rating = obj.rating;  //rating
        }
        //longitude latitudes
        if (obj.lat) {
            if (obj.long) {
            logger.info(NAME+"->Received lat,long field")
                return await Restaurant.find({
                    location: {
                        $near: {
                            $geometry: { type: "Point", coordinates: [parseFloat(obj.long), parseFloat(obj.lat)] },
                            $maxDistance: 20000
                        }
                    }
                })

            } else {
                let message='Please provide the longitude also';
                logger.error(NAME+message)
                throw new Error(message)
            }
        }
        if (obj.menu) {
            
            logger.info(NAME+"->Received menufield")
            try{
            return await Restaurant.aggregate([
                { $unwind: "$menuItems" },
                {
                    "$lookup": {
                        "from": "fooditems",
                        "localField": "menuItems",
                        "foreignField": "_id",
                        "as": "menuItem"
                    }
                }, { "$project": {"_id":1, "menuItem": 1, "name": 1, "rating": 1, "location": 1 } }, { "$match": { "menuItem.name": obj.menu } }
            ]);
        }catch(err){
            logger.error(NAME+err)
            console.log(err)
            throw new Error(err)
        }
        }
        return await Restaurant.find(query);
    }, 
    getNotSupported : (req, res) => {
        res.statusCode = 403;
        res.end('GET operation not supported on this endpoint');
    },
    postNotSupported : (req, res) => {
        res.statusCode = 403;
        res.end('GET operation not supported on this endpoint');
    },
    putNotSupported : (req, res) => {
        res.statusCode = 403;
        res.end('GET operation not supported on this endpoint');
    },
    patchNotSupported : (req, res) => {
        res.statusCode = 403;
        res.end('GET operation not supported on this endpoint');
    }
}
export default SearchService;