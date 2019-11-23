var express = require('express');
var router = express.Router();
const PaisController = require("../controllers/PaisController");

/* GET All registers */
router.get('/', PaisController.getAll);
router.get('/find/', PaisController.getOneById);

router.post('/', PaisController.insert);

router.put('/', PaisController.update);

router.delete('/', PaisController.deleteById);

module.exports = router;
