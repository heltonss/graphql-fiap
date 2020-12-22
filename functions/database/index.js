const serviceAccount = require("../../basefiapbancohelton-graphql-firebase-adminsdk-ertlc-7c8c7fae58.json");
const admin = require("firebase-admin");
const express = require("express");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `${process.env.DATABASE}`,
});

module.exports = admin;
