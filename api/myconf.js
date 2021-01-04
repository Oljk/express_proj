require('dotenv').config({ encoding: 'latin1' });
class MyConf {
    port = process.env.PORT;
    host = process.env.HOST;

    get Port() {
        //console.log(this.port);
        return this.port;
    }

    get Host() {
      //  console.log(process.env.HOST);
        return this.host;
    }
}

module.exports = new MyConf();