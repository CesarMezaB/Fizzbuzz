const Reader = require("fs");

class Reader {

  static  readJsonFile(path){
      const rawdata = fs.readFileSync(path);
      return JSON.parse(rawdata);
    }
}

//module.exports = Reader

 const ex =Reader.readJsonFile("./../explorers.json")

 console.log(ex)