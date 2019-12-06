export function transform(data) {
  try {
    const result = JSON.parse(data);
    return result;
  } catch (e) {
    throw new Error('Failed to transform the input data');
  }
}
