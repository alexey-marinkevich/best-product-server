export const validatorUtils = {
  validateString: value => value && typeof value === 'string',
  validateArray: value => value && Array.isArray(value),
  validateNotEmptyArray: value => !!value.length,
};

export const validateProduct = data => {
  if (!data) {
    throw new Error('No data provided');
  }

  const stringsToValidate = [
    data.prodName,
    data.headImg,
    data.shortDescription,
    data.fullDescription,
  ];

  if (
    !stringsToValidate.every(validatorUtils.validateString) ||
    !validatorUtils.validateArray(data.gallery) ||
    !validatorUtils.validateNotEmptyArray(data.gallery) ||
    !data.gallery.every(validatorUtils.validateString)
  ) {
    throw new Error('Input data is invalid');
  }

  return data;
};
