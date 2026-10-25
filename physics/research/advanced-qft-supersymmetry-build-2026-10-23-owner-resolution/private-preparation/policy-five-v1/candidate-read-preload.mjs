// Isolated private candidate fixture: redirects exactly five source reads.
// Never imported by production/native code and never writes a source.
import fs from'node:fs';import{syncBuiltinESMExports}from'node:module';import{fileURLToPath}from'node:url';import{join}from'node:path';
const original=fs.readFileSync,map=JSON.parse(original(new URL('./candidate-read-map.json',import.meta.url),'utf8'));fs.readFileSync=function(path,...args){const key=path instanceof URL?fileURLToPath(path):String(path);return original.call(fs,map[key]??path,...args);};syncBuiltinESMExports();
