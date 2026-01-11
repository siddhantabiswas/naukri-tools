import { createLogger, transports as _transports, format } from "winston";

export const logger = createLogger({
    level: "silly",
    format: format.combine(
        // 1. Add timestamp
        format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // adds a timestamp property
        
        // 2. Uppercase the level BEFORE it gets colorized
        format((level) => {
            level.level = level.level.toUpperCase();
            return level;
        })(), 
        
        // 3. Colorize the already-uppercased level
        format.colorize(),
        
         // 4. Final output
        format.printf(({ level, message, timestamp }) => {
            return `${timestamp} [${level}]: ${message}`;
        })
    ),
    transports: [new _transports.Console()],
});

export default logger;