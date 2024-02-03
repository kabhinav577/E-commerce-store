"use strict";

/**
 * order router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;
console.log("IN ORDERS ROUTES");

module.exports = createCoreRouter("api::order.order");
