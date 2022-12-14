/* eslint-disable max-classes-per-file */
import joi from 'joi';

const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]*)(?=.*[!@#$%^&*_-])(?=.{8,})');
export const registerValidator = joi.object().keys({
  phone_number: joi
    .object({
      countryCode: joi.string().valid('234').max(3).message('Your region is wrong for the phone number now').required(),
      localFormat: joi.string().length(11).message('Wrong Phone number format').required(),
    })
    .required(),
  email: joi.string().email().required(),
  password: joi.string().pattern(passwordRegex).required(),
  is_business: joi.boolean().allow(null),
  first_name: joi.string().min(3).message('First Name must have more than 3 Characters').required(),
  last_name: joi.string().min(3).message('Last Name must have more than 3 Characters').required(),
});

export const userAuthValidator = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().pattern(passwordRegex).required(),
  addPhone: joi.boolean().allow(null),
});

export const shopperLoginValidator = joi.object().keys({
  email: joi.string().email().required(),
  password: joi.string().pattern(passwordRegex).required(),
});

export interface Response {
  success: boolean;
  message?: string;
  error?: any;
}
