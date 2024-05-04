import dotenv from 'dotenv';

dotenv.config();

const config = Object.freeze({
    PORT: process.env.PORT,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    EXPRESS_SECRET: process.env.EXPRESS_SECRET,
    JWT_SECRET: process.env.JWT_SECRET,
    COOKIE_NAME: process.env.COOKIE_NAME
    // DB_USER: process.env.DBUSERNAME,
    // DB_PASSWORD: process.env.DBPASSWORD,
    // DB_HOST: process.env.DBHOST,
    // DB_PORT: process.env.DBPORT,
    // DB_NAME: process.env.DBNAME,
    // ACCESSTOKEN_SECRET: process.env.ACCESSTOKEN_SECRET,
    // SENDGRID_API: process.env.SENGRID_API,
    // SENDER_EMAIL: process.env.EMAIL,
    // APILAYER_KEY: process.env.APILAYER_ACCESS
});

export default config;