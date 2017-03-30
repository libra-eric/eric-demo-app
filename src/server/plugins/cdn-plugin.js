"use strict";
const fs = require("fs");
const path = require("path");

exports.register = (server, options, next) => {
  server.route({
    method: "GET",
    path: "/cdn",
    handler: (request, reply) => {
      const { query } = request;
      const { file } = query;
      if (file === "ueditor.all.js") {
        const filePath = path.join(__dirname, "../thirdParty/ueditor.all.js");
        reply.file(filePath);
      }
    }
  });
  
  next();
};

exports.register.attributes = {
  name: "cdnPlugin",
  version: "1.0.0"
};
