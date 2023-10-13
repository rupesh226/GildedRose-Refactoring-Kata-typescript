# Gilded Rose

This is the Gilded Rose kata in TypeScript.

# Here's a breakdown of the changes:

## Item Class:

- Utilized TypeScript's shorthand constructor to immediately declare the properties. Also added helper methods increaseQuality and decreaseQuality to simplify the logic of quality modification.

## GildedRose Class:

- Simplified the nested if conditions by switching to a switch statement which improves readability.
- created constants for item names to avoid repetition and potential typos.
- Created utility function for each switch cases
- Created utility function for updateQualityByItems
- refactor GildedRose class code

## Getting started

Install dependencies

```sh
npm install
```

## Running app

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:

```sh
npx ts-node test/golden-master-text-test.ts 10
```

## Running tests

To run all tests

### Jest way

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

### Mocha way

```sh
npm run test:mocha
```
