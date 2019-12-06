import { uuid } from 'uuidv4';
import * as ddb from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';
import { transform } from '../libs/transformator';
import { validateProduct } from '../libs/validator';

export async function main(event) {
  try {
    const data = transform(event.body);
    const input = validateProduct(data);

    const { prodName, headImg, shortDescription, fullDescription, gallery } = input;
    const params = {
      TableName: process.env.PRODUCTS_TABLE,
      Item: {
        id: uuid(),
        prodName,
        headImg,
        shortDescription,
        fullDescription,
        gallery,
        createdAt: new Date().toISOString(),
      },
    };

    await ddb.call('put', params);
    return success(params.Item);
  } catch (e) {
    return failure({ status: false, error: e.message });
  }
}
