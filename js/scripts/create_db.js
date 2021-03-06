"use strict";
/**
 * (C) gerd forstmann 2017
 *
 * Create database
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Constants = require("./../constants");
const mgnlq_model_1 = require("mgnlq_model");
// var FUtils = require(root + '/model/model.js')
const mongoose = require('mongoose');
var mongoConnectionString = Constants.MONGO_DBURL;
var modelPath = Constants.RAW_MODEL_PATH;
mgnlq_model_1.Dataload.createDB(mongoose, Constants.MONGO_DBURL, Constants.RAW_MODEL_PATH).then(() => {
    console.log(`created database ${Constants.MONGO_DBURL} `);
}).catch(err => {
    console.log(`Creating database ${Constants.MONGO_DBURL} with data from ${Constants.RAW_MODEL_PATH} failed!\n`);
    console.log(err);
    console.log(err.stack);
    process.exit(-1);
});

//# sourceMappingURL=create_db.js.map
