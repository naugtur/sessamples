import 'ses';
lockdown();

import { importLocation } from '@endo/compartment-mapper';

import { addToCompartment } from './helper.mjs';
import fs from 'fs';

import assert from 'assert';
import zlib from 'zlib';

const readPower = async (location) =>
  fs.promises.readFile(new URL(location).pathname);

const entrypointPath = new URL('./app.js', import.meta.url).href

const ApiSubsetOfBuffer = harden({ from: Buffer.from })

const { namespace } = await importLocation(
  readPower, 
  entrypointPath, 
  {
    globals: {
      Buffer: ApiSubsetOfBuffer
    },
    modules: {
      assert: await addToCompartment('assert', assert),
      buffer: await addToCompartment('buffer', Object.create(null)), //imported but unused
      zlib: await addToCompartment('zlib', zlib),
    },
});

console.log(namespace.poem)
