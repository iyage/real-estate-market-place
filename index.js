const express = require("express");
const { default: mongoose } = require("mongoose");
const connectDb = require("./connection");
const listingController = require("./controllers/listingController");
const realtorController = require("./controllers/realtorController");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
connectDb();
// app.use(testMiddleWare);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(realtorController);
app.use("/", listingController);

mongoose.connection.once("open", () => {
  console.log("deb connected");
  app.listen(4500, () => {
    console.log("app is listen on port 4500");
  });
});

// "/pet/findByStatus": {
//   "get": {
//     "tags": ["pet"],
//     "summary": "Finds Pets by status",
//     "description": "Multiple status values can be provided with comma separated strings",
//     "operationId": "findPetsByStatus",
//     "parameters": [
//       {
//         "name": "status",
//         "in": "query",
//         "description": "Status values that need to be considered for filter",
//         "required": false,
//         "explode": true,
//         "schema": {
//           "type": "string",
//           "default": "available",
//           "enum": ["available", "pending", "sold"]
//         }
//       }
//     ],
//     "responses": {
//       "200": {
//         "description": "successful operation",
//         "content": {
//           "application/json": {
//             "schema": {
//               "type": "array",
//               "items": {
//                 "$ref": "#/components/schemas/Pet"
//               }
//             }
//           },
//           "application/xml": {
//             "schema": {
//               "type": "array",
//               "items": {
//                 "$ref": "#/components/schemas/Pet"
//               }
//             }
//           }
//         }
//       },
//       "400": {
//         "description": "Invalid status value"
//       }
//     },
//     "security": [
//       {
//         "petstore_auth": ["write:pets", "read:pets"]
//       }
//     ]
//   }
// },
