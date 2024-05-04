import { CreateTableCommandInput } from "@aws-sdk/client-dynamodb";
import {
  dynamodb_createRecord,
  dynamodb_createTable,
  dynamodb_deleteTable,
  dynamodb_descriveTable,
} from "./aws";
import movies from "./data/movies";
import dotenv from "dotenv";
dotenv.config();

const MOVIE_TABLENAME = process.env.MOVIE_TABLENAME ?? "movies";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const init = async () => {
  const movie_Table = await dynamodb_descriveTable(MOVIE_TABLENAME);

  if (!(movie_Table instanceof Error)) {
    //Delete table
    await dynamodb_deleteTable(MOVIE_TABLENAME);
    await delay(6000);
  }

  const movieTable_createtablecommand: CreateTableCommandInput = {
    TableName: MOVIE_TABLENAME,
    KeySchema: [{ AttributeName: "movieId", KeyType: "HASH" }],
    AttributeDefinitions: [{ AttributeName: "movieId", AttributeType: "S" }],
    ProvisionedThroughput: {
      ReadCapacityUnits: 10,
      WriteCapacityUnits: 10,
    },
  };

  await dynamodb_createTable(movieTable_createtablecommand);

  await delay(12000);

  for (const i in movies) {
    const movie = movies[i];
    const res = await dynamodb_createRecord(MOVIE_TABLENAME, movie);
    if (res instanceof Error) {
      console.log("Error", movie, res);
    }
  }
};
// init();
const test = async () => {
  try {
    const res = await dynamodb_descriveTable(MOVIE_TABLENAME);
    console.log("result is ", res);
  } catch (e) {
    console.log("error", e);
  }
};
test();
