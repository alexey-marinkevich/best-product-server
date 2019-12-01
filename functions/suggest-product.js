import { uuid } from 'uuidv4';
import * as ddb from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export async function main(event, context) {
  const { prodName, headImg, shortDescription, fullDescription, siteUrl, gallery } = event;
  const params = {
    TableName: process.env.PRODUCTS_TABLE,
    Item: {
      id: uuid(),
      prodName,
      headImg,
      shortDescription,
      fullDescription,
      siteUrl,
      gallery,
      createdAt: Date.now(),
    },
  };

  try {
    await ddb.call('put', params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false });
  }
}
