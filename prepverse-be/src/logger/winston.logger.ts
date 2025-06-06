import winston from "winston";

// Define your severity levels
const levels: Record<string, number> = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};

// Determine the log level based on the environment
const level = (): string => {
    const env = process.env.NODE_ENV || "development";
    return env === "development" ? "debug" : "warn";
};

// Define color scheme for logs
const colors: Record<string, string> = {
    error: "red",
    warn: "yellow",
    info: "blue",
    http: "magenta",
    debug: "white",
};

winston.addColors(colors);

// Common log format
const format = winston.format.combine(
    winston.format.timestamp({ format: "DD MMM, YYYY - HH:mm:ss:ms" }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `[${info.timestamp}] ${info.level}: ${info.message}`
    )
);

// Build transports based on environment
const env = process.env.NODE_ENV || "development";
let transports: winston.transport[] = [
    new winston.transports.Console(),
];

if (env === "development") {
    transports = [
        ...transports,
        new winston.transports.File({ filename: "logs/error.log", level: "error" }),
        new winston.transports.File({ filename: "logs/info.log", level: "info" }),
        new winston.transports.File({ filename: "logs/http.log", level: "http" }),
    ];
}

// Create logger
const logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
});

export default logger;
