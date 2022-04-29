const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {}
  const arraysDomains = domains.map(domain => domain.split('.').reverse());
  let arrResult = [];
  arraysDomains.forEach(arrayDomains => {
    const arrDNS = [];
    arrayDomains.forEach((domain, index) => {
      const newDomain = index > 0 ? `${arrDNS[index-1]}.${domain}` : `.${domain}`;
      arrDNS.push(newDomain);
    });
    arrResult.push(arrDNS)
  });

  arrResult = arrResult.flat();

  arrResult.forEach(domain => {
    if(result.hasOwnProperty(domain)) {
      result[domain]++;
    } else {
      result[domain] = 1;
    }
  })
  return result;
}

module.exports = {
  getDNSStats
};
