require('dotenv').config({ encoding: 'latin1' });
class MyConf {
   static port = process.env.PORT;
    static host = process.env.HOST;

    static get Port() {
        //console.log(this.port);
        return this.port;
    }

    static get Host() {
      //  console.log(process.env.HOST);
        return this.host;
    }

    static getVar(varName, defaultvalue = '') {
        if (varName == null || varName.empty) {
            varName = defaultvalue;
        }
        return process.env[varName];
    }
}

module.exports = MyConf;