import dotenv from "dotenv";
dotenv.config({ path: __dirname+'/../../.env' });
class Config{
    PORT= process.env.PORT
    DB= process.env.DB
    PASSWORD= process.env.PASSWORD
}

export default new Config();