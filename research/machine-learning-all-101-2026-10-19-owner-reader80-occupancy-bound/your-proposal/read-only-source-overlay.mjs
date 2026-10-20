// Explicit one-source read-only overlay for focused native contract validation only.
import fs from 'node:fs';
import path from 'node:path';
import {syncBuiltinESMExports} from 'node:module';
const base=path.dirname(new URL(import.meta.url).pathname);
const target=path.resolve('items/lem-normalized-discounted-state-occupancy-is-probability.md');
const candidate=path.join(base,'proposed/items/lem-normalized-discounted-state-occupancy-is-probability.md');
const original=fs.readFileSync.bind(fs);
if(!original(target).equals(original(path.join(base,'before/items/lem-normalized-discounted-state-occupancy-is-probability.md'))))throw Error('Actual source drift');
fs.readFileSync=function(file,...args){return original(typeof file==='string'&&path.resolve(file)===target?candidate:file,...args);};
syncBuiltinESMExports();
