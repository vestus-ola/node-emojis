# Node Emoji
[![npm (scoped)](https://img.shields.io/npm/v/node-emojis.svg)](https://www.npmjs.com/package/node-emojis)
[![npm (scoped)](https://img.shields.io/badge/npm-node--emojis-brightgreen.svg)](https://www.npmjs.com/package/node-emojis)
```
A node package for emoji
```

## Installation
```
npm install node-emojis
```

## Usage
```js
const nodeEmojis = require("node-emojis");
```

## nodeEmojis.all();
Get all emojis. return [{...}]

## nodeEmojis.findEmojiByKey(key);
Return object if valid or undefined if not valid.

## nodeEmojis.findEmojiByName(name);
Return object if valid or undefined if not valid.

## nodeEmojis.findEmojiByImage(param);
Return object if valid or undefined if not valid.

## nodeEmojis.findEmojiByGroupName(groupName);
Get arrays of emoji belonging to the emoji group. return [{...}]

## nodeEmojis.encodeEmoji(str);
Encode all valid emoji in variable (str) to key. e.g ":grinning_face:" => "😀"

## nodeEmojis.decodeEmoji(str);
Decode all valid emoji in variable (str) to char. e.g "😀" => ":grinning_face:"

## nodeEmojis.getRandomEmoji();
Get random emoji. return {...}