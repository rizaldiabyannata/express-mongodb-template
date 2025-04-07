const winston = require("winston");

// Membuat format log
const logFormat = winston.format.combine(
  winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), // Menambahkan timestamp pada setiap log
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} ${level}: ${message}`;
  })
);

// Konfigurasi logger
const logger = winston.createLogger({
  level: "info", // Level log default
  format: logFormat,
  transports: [
    // Menyimpan log ke file 'app.log'
    new winston.transports.File({ filename: "logs/app.log", level: "info" }),

    // Menampilkan log ke console
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(), // Menambahkan warna pada log
        winston.format.simple() // Format log yang lebih sederhana
      ),
    }),
  ],
});

// Jika kita ingin menambahkan log ke file untuk level error saja
if (process.env.NODE_ENV === "production") {
  logger.add(
    new winston.transports.File({ filename: "error.log", level: "error" })
  );
}

module.exports = logger;
