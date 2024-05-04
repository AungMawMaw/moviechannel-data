import {
  DynamoDBClient,
  CreateTableCommand,
  CreateTableCommandInput,
  DescribeTableCommand,
  DeleteTableCommand,
  PutItemCommand,
  PutItemCommandInput,
} from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { AWSRegions } from "./types/aws";
import { Movie } from "./types/movies";

const client = new DynamoDBClient({ region: AWSRegions.DEFAULT });

// 1. create a table
export const dynamodb_createTable = async (params: CreateTableCommandInput) => {
  try {
    const command = new CreateTableCommand(params);
    const result = await client.send(command);
    console.log("Table created..", result);
    return result;
  } catch (e) {
    console.error("Error creating table:", e);
    throw e;
  }
};

// 2. describe a table
export const dynamodb_descriveTable = async (tableName: string) => {
  try {
    const command = new DescribeTableCommand({ TableName: tableName });
    const table = await client.send(command);
    console.log("Table retrieved", table);
    return table;
  } catch (e) {
    console.error("Error describing table:", e);
    // throw e;
    return e;
  }
};

// 3. delete a table
export const dynamodb_deleteTable = async (tableName: string) => {
  try {
    const command = new DeleteTableCommand({ TableName: tableName });
    const result = await client.send(command);
    console.log("Table deleted", result);
    return result;
  } catch (e) {
    console.error("Error deleting table:", e);
    throw e;
  }
};

// 4. create a record
export const dynamodb_createRecord = async (
  tableName: string,
  movie: Movie,
) => {
  try {
    const params: PutItemCommandInput = {
      TableName: tableName,
      Item: marshall(movie),
    };
    const command = new PutItemCommand(params);
    const result = await client.send(command);
    console.log("Record created", result);
    return result;
  } catch (e) {
    console.error("Error creating record:", e);
    throw e;
  }
};
