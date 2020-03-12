export function transform(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    throw new Error('Failed to transform the input data');
  }
}
