import dotenv from 'dotenv';
import winston from 'winston';

dotenv.config();

const logDirectory = process.env.LOG_DIRECTORY;

const logger: winston.Logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
        winston.format.prettyPrint()
    ),
    transports: [
        // - Write all logs with level `error` and below to `error.log`
        new winston.transports.File({ filename: `${logDirectory}/error.log`, level: 'error' }),
        // - Write all logs with level `info` and below to `combined.log`
        new winston.transports.File({ filename: `${logDirectory}/combined.log` }),
    ],
});

// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
    }));
}

export { logger };
