"use strict";

var emojis = require('./utils');

/**
 * regex match emoji e.g. "":eye:"
 */
var emojiKeyRegex = /:([a-zA-Z0-9_\-\+]+):/g;

var Emoji = {};

/**
 * get all emojis
 * @return {array}
 */
Emoji.all = function all() {
  return Emoji.get();
};

/**
 * find emoji by key
 * @param {string} key
 * @return {object} | undefined
 */
Emoji.findEmojiByKey = function findEmojiByKey(key) {
  return emojis.find(item => item.key == key) || undefined;
};

/**
 * find emoji by name
 * @param {string} name
 * @return {object} | undefined
 */
Emoji.findEmojiByName = function findEmojiByName(name) {
  name = name.toLowerCase();
  return emojis.find(item => item.name.toLowerCase() == name) || undefined;
};

/**
 * search for emoji occurrence by name
 * @param {string} name
 * @return {array} | undefined
 */
Emoji.searchEmojiByName = function searchEmojiByName(name) {
  name = name.toLowerCase();
  return emojis.filter(item => item.name.toLowerCase().indexOf(name) > -1) || [];
};

/**
 * find emoji by image
 * @param {symbol} emoji
 * @return {object} | undefined
 */
Emoji.findEmojiByImage = function findEmojiByImage(emoji) {
  return emojis.find(item => item.emoji == emoji) || undefined;
};

/**
 * find emoji by group
 * @param {string} groupName
 * @return {array} | undefined
 */
Emoji.findEmojiByGroupName = function findEmojiByGroupName(groupName) {
  groupName = groupName.toLowerCase();
  return emojis.filter(item => item.group.toLowerCase() == groupName) || [];
};

/**
 * add colon to str if not added
 * @param {string} str
 * @return {string}
 */
function addColonToString(str) {
  if (typeof str == "string") {
    return str[0] != ":" ? ":" + str + ":" : str;
  }
}

/**
 * encode emoji from character to key value
 * e.g "Hay! we've won the 🏆" => "Hay! we've won the :trophy:"
 * @param {string} str
 * @return {string}
 */
Emoji.encodeEmoji = function encodeEmoji(str) {
  if (!str) return "";
  return str.split(' ').map(function (value, index) {
    var s = "";
    for (var v of value) {
      var r = emojis.find(item => item.emoji == v);
      if (r) { s += r.key; } else { s += v; }
    }
    return s;
  }).join(' ');
};

/**
 * decode emoji from key to character value
 * e.g "Hay! we've won the :trophy:" => "Hay! we've won the 🏆"
 * @param {string} str
 * @return {string}
 */
Emoji.decodeEmoji = function decodeEmoji(str) {
  if (!str) return "";
  return str.split(emojiKeyRegex).map(function (value, index) {
    var r = emojis.find(item => item.key == addColonToString(value));
    if (r) { return Emoji.findEmojiByKey(r.key).emoji; } else { return value; }
  }).join('');
};


/**
 * return a random emoji
 * @return {string}
 */
Emoji.getRandomEmoji = function getRandomEmoji() {
  var indexOfEmoji = Math.floor(Math.random() * emojis.length);
  var emoji = emojis[indexOfEmoji];
  return emoji;
};

module.exports = Emoji;