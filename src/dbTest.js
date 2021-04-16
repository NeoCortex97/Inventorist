require("dotenv").config();
const path = require("path");
const fs = require("fs");

const { Sequelize, Model, DataTypes } = require("sequelize");

const sqlz = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "..", process.env.dbpath),
    logging: console.log,
});

const models = fs.readdirSync(path.join(__dirname, "..", "database", "models"))
let modelMap = {};
models.forEach(element => {
    const tmp = require(path.join(__dirname, "..", "database", "models", element));
    let asdf = tmp.cls;
    asdf.init(tmp.definition, { sequelize: sqlz });
    modelMap[element.split(".")[0]] = asdf;
});


modelMap.Part.hasMany(modelMap.Tag);
modelMap.Tag.belongsToMany(modelMap.Part, { through: "PartTags" });

modelMap.Part.hasMany(modelMap.Source);
modelMap.Source.belongsTo(modelMap.Part);

async function run(){
    try {
        await sqlz.authenticate();
        await sqlz.sync({force: true});
        const timer = await modelMap.Tag.create({name: "timer"});
        const analog = await modelMap.Tag.create({name: "analog"});
        const digital = await modelMap.Tag.create({name: "digital"});
        const logik = await modelMap.Tag.create({name: "logik"});
        const triber = await modelMap.Tag.create({name: "treiber"});

        const ne555 = await modelMap.Part.build({name: "NE555"});
        await ne555.save();
        sqlz.close();
    }
    catch (error){
        console.error(error);
    }
}

run().then((val) => {
    console.log("ENDE");
}).catch((reason) => {
    console.log(reason);
});