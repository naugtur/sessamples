import 'ses';
lockdown();

import { importLocation } from '@endo/compartment-mapper';

import { addToCompartment } from './helper.mjs';
import fs from 'fs';

import assert from 'assert';
import zlib from 'zlib';

const read = async (location) =>
  fs.promises.readFile(new URL(location).pathname);

const entrypointPath = new URL('./app.js', import.meta.url).href

const ApiSubsetOfBuffer = { from: Buffer.from }

const { namespace } = await importLocation(
  read, 
  entrypointPath, 
  {
    globals: {
      Buffer: ApiSubsetOfBuffer
    },
    modules: {
      assert: await addToCompartment('assert', assert),
      buffer: await addToCompartment('buffer', ApiSubsetOfBuffer),
      zlib: await addToCompartment('zlib', zlib),
    },
});

console.log(namespace.poem)
