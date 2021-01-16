import { toJS } from "mobx";

/**
 * @description - Function to store profiles
 * 
 * @param {string} url - Url to get profiles from
 * 
 * @returns{Boolean>} - Returns boolean indication store state
 */
export const storeProfiles = async (url) => {
  try {
    if (!url) throw new Error('URL must be provided');

    let response = await fetch(url);
    const { records: { profiles } } = await response.json();

    localStorage.setItem('profiles', JSON.stringify(profiles));

    return false;
  } catch (error) {
    console.log(error);
  }
};


/**
 * @description - Function to get some profiles
 * 
 * @param {number} currentPage - Current page number
 * 
 * @param {number} limit - Limit to be displayed
 * 
 * @returns{Array<object>} - Returns All profiles
 */
export const getProfiles = (currentPage = 1, limit = 20) => {
  const profiles = JSON.parse(localStorage.getItem('profiles'));

  const startIndex = (currentPage - 1 === 0 ? 0 : (currentPage - 1) * limit);
  const endIndex = startIndex + limit;

  return profiles.slice(startIndex, endIndex);
};


/**
 * @description - Function to get all profiles
 * 
 * @param {number} currentPage - Current page number
 * 
 * @param {number} limit - Limit to be displayed
 * 
 * @returns{Array<object>} - Returns All profiles
 */
export const getAllProfiles = () => {
  const profiles = JSON.parse(localStorage.getItem('profiles'));
  console.log('profiles: ', profiles);
  return profiles ? profiles : [];
};

/**
 * @description - Function to get profile count
 * 
 * @returns{number} - Returns profile cound
 */
export const getProfileCount = () => {
  const profiles = JSON.parse(localStorage.getItem('profiles'));

  return profiles && profiles.length !== 0 ? 0 : profiles.length;
};

/**
 * @description - Function to based on paymentType and cardType
 * 
 * @param {string} data - Data to filter
 * 
 * @param {string} paymentMethod - Payment type to search for
 * 
 * @param {string} cardType - Card type to search for
 * 
 * @returns{array<object>} - Returns all profiles found
 */
export const filterProfiles = (data, paymentType = '', cardType = '') => {
  const paymentReg = new RegExp(paymentType);
  const cardReg = new RegExp(cardType);

  if (!paymentType && !cardType) return [];

  if (paymentType && !cardType) return data.filter((profile) => {
    return paymentReg.test(toJS(profile).PaymentMethod);
  });

  if (!paymentType && cardType) return data.filter((profile) => {
    return cardReg.test(toJS(profile).CreditCardType);
  });

  return data.filter(profile => {
    return (paymentReg.test(toJS(profile).PaymentMethod) || cardReg.test(toJS(profile).CreditCardType));
  });
};

/**
 * @description - Function to get profile based on user name
 * 
 * @param {string} data - Data to filter
 * 
 * @param {string} userName - User name to search for
 * 
 * @returns{array<object>} - Returns all profiles found
 */
export const filterByUserName = (data, userName = '') => {
  const userReg = new RegExp(userName);

  if (!userName) return getAllProfiles();

  if (userName) return data.filter((profile) => {
    return userReg.test(toJS(profile).UserName);
  });
};