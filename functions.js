// Dev-Script: https://discord.gg/3try8b5e3x
// Author: kadeciok#1234

const fs = require("fs");

module.exports = (client) => {

    fs.readdir("./handlers/", (err, files) => {
        if (err) console.error(err);
        let jsfiles = files.filter(f => f.split(".").pop() === "js");
        if (jsfiles.length <= 0) return console.log("There are no events to load...");
        console.log(`Załadowano ${jsfiles.length} eventów...`);
        jsfiles.forEach((f, i) => {
            require(`./handlers/${f}`);
            console.log(`${i + 1}: ${f} załadowane! ✅`);
        });
    });
}

// Dev-Script: https://discord.gg/3try8b5e3x
// Author: kadeciok#1234