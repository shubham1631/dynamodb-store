"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toSecondsEpoch = toSecondsEpoch;
/**
 * Transforms a date t seconds epoch.
 * @param  {Date} date The date to be converted.
 * @return {Integer}      Representation of the date in seconds epoch.
 */
function toSecondsEpoch(date) {
  if (!(date instanceof Date)) {
    throw new Error(date + " is not a Date!");
  }
  return Math.floor(date.getTime() / 1000);
}