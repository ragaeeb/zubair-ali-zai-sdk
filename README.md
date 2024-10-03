[![wakatime](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/039ea7a3-176d-431b-9816-671ac0cecfb8.svg)](https://wakatime.com/badge/user/a0b906ce-b8e7-4463-8bce-383238df6d4b/project/039ea7a3-176d-431b-9816-671ac0cecfb8) [![E2E](https://github.com/ragaeeb/zubair-ali-zai-sdk/actions/workflows/e2e.yml/badge.svg)](https://github.com/ragaeeb/zubair-ali-zai-sdk/actions/workflows/e2e.yml) [![Node.js CI](https://github.com/ragaeeb/zubair-ali-zai-sdk/actions/workflows/build.yml/badge.svg)](https://github.com/ragaeeb/zubair-ali-zai-sdk/actions/workflows/build.yml) ![GitHub License](https://img.shields.io/github/license/ragaeeb/zubair-ali-zai-sdk) ![GitHub Release](https://img.shields.io/github/v/release/ragaeeb/zubair-ali-zai-sdk) [![codecov](https://codecov.io/gh/ragaeeb/zubair-ali-zai-sdk/graph/badge.svg?token=DEG44D46GC)](https://codecov.io/gh/ragaeeb/zubair-ali-zai-sdk) [![Size](https://deno.bundlejs.com/badge?q=zubair-ali-zai-sdk@1.0.0)](https://bundlejs.com/?q=zubair-ali-zai-sdk%401.0.0) ![typescript](https://badgen.net/badge/icon/typescript?icon=typescript&label&color=blue) ![npm](https://img.shields.io/npm/v/zubair-ali-zai-sdk) ![npm](https://img.shields.io/npm/dm/zubair-ali-zai-sdk) ![GitHub issues](https://img.shields.io/github/issues/ragaeeb/zubair-ali-zai-sdk) ![GitHub stars](https://img.shields.io/github/stars/ragaeeb/zubair-ali-zai-sdk?style=social)

# zubair-ali-zai-sdk

SDK to access alathar.net content.

## Installation

To install zubair-ali-zai-sdk, use npm or yarn:

```bash
npm install zubair-ali-zai-sdk
# or
yarn add zubair-ali-zai-sdk
# or
pnpm i zubair-ali-zai-sdk
```

## Usage

### Importing the SDK

```javascript
import { init } from 'zubair-ali-zai-sdk';
```

### Initialize the SDK

There are two ways to initialize the SDK to process the requests. Either set the environment variable directly:

```dotenv
ZUBAIR_ALI_ZAI_API="https://domain.com/:book/:id"
```

or use the `init` function:

```javascript
import { init } from 'zubair-ali-zai-sdk';

init('https://domain.com/:book/:id');
```

Note that your URL pattern for the endpoint must have the `:book` and `:id` placeholders in it so that the correct book ID and hadith number can be substituted.

### Get hadith

Retrieve metadata about a specific hadith.

```javascript
(async () => {
    try {
        let hadith = await getAbuDawud(123); // from Sunan Abu Dawud
        hadith = await getIbnMajah(123); // from Sunan Ibn Majah
        hadith = await getMishkaat(123); //
        hadith = await getNasai(123);
        hadith = await getTirmidhi(123);
        console.log(hadith); // { arabic: 'حَدَّثَنَا مَحْمُودُ بْنُ خَالِدٍ', description: 'إسنادہ ضعیف باب ما جاء فی الرجل', hukm: 'حسن' }
    } catch (error) {
        console.error(error.message);
    }
})();
```
