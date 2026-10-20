import fs from 'node:fs';import path from 'node:path';import {syncBuiltinESMExports}from'node:module';
const base=path.dirname(new URL(import.meta.url).pathname),original=fs.readFileSync.bind(fs),ops=JSON.parse(original(path.join(base,'source-operations.json'))),redirect=new Map();
for(const op of ops){const target=path.resolve(op.target);if(!original(target).equals(original(path.join(base,'before',op.target))))throw Error('Actual source drift');redirect.set(target,path.join(base,'proposed',op.target));}
fs.readFileSync=function(p,...args){return original(typeof p==='string'&&redirect.has(path.resolve(p))?redirect.get(path.resolve(p)):p,...args);};syncBuiltinESMExports();
