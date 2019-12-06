import * as ddb from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export async function main() {
  const params = {
    TableName: process.env.PRODUCTS_TABLE,
    Limit: 50,
  };

  try {
    const result = await ddb.call('scan', params);

    if (result.Items) {
      return success(result.Items);
    }

    return failure({ status: false, error: 'Nothign found' });
  } catch (e) {
    return failure({ status: false });
  }
}
