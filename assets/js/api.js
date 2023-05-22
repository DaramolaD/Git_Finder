/**
 * @license MIT
 * @author codewithsadee <mohammadsadee24@gmail.com>
 * @copyright codewithsadee 2023
 */


'use strict';

/**
 * Fectch data from server
 * @param {*} url App url {required}
 * @param {*} sucessCallback Success callback {required}
 * @param {*} errorCallback error callback {required}
 */

export async function fecthData(url, sucessCallback, errorCallback) {

    const response = await fetch(url);

    if (response.ok) {
        const data = await response.json();
        sucessCallback(data)
    } else {
        const error = await response.json();
        errorCallback && errorCallback(error);
    }
}