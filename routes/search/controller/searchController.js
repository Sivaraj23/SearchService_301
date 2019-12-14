
import searchService from "../service/searchService";
import logger from "../../../utilities/Logger"

export default async (req, res) => {

    try {
        res.json(await searchService.search(req.query))
        res.end()
    } catch (err) {
        logger.error(err)
        throw new Error(err)
    }
};
