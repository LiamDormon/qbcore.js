# QBCore.js
<div style="margin: auto 0; width: 100%">
  <div>
  <a href="https://www.npmjs.com/package/@zerio2/qbcore.js">
    <img src="https://img.shields.io/npm/v/@zerio2/qbcore.js?style=flat" alt="npm version">
  </a>
  <a href="https://www.npmjs.com/package/@zerio2/qbcore.js">
    <img src="https://img.shields.io/npm/dm/@zerio2/qbcore.js?style=flat">
  </a>
</div>

## About

This is a JavaScript/TypeScript wrapper for the QBCore framework in FiveM, based on esx.js by [itschip](https://github.com/itschip). 

If you experience any issues, please post them in the `Issues`. 

## Guide

### `Installation`

Run `npm i @zerio2/qbcore.js` to install the package. When this is done you are ready to use it. 

### `Usage`

So how do you use it? 

First you need to import either the `Client` class or `Server` class. 

### `Client`

```js
import { Client } from '@zerio2/qbcore.js'

let QBCore: Client = exports['qb-core'].GetCoreObject()

```

### `Server`
```js
import { Server } from '@zerio2/qbcore.js'

let QBCore: Server = exports['qb-core'].GetCoreObject()
```

## You can also import a single type:
```js
import { Player } from '@zerio2/qbcore.js/@types/server'

const Player: Player
```

### Contributions and Additions are always welcome!
