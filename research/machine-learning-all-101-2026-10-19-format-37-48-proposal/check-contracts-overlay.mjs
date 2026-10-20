// Read-only explicit carrier overlay: native checker reads each selected item
// from its staged bytes; every unstaged supplier quote uses actual bytes.
// No synthetic run root and no native readiness/gate credit.
import fs from 'node:fs';
import {syncBuiltinESMExports} from 'node:module';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {dirname,resolve} from 'node:path';
const base=dirname(fileURLToPath(import.meta.url)),root=resolve(base,'../..');
const batch=process.argv[2];if(!['37','48'].includes(batch))throw Error('batch37/48 required');
const scope=JSON.parse(fs.readFileSync(resolve(base,'scope.json'),'utf8'));
const original=fs.readFileSync.bind(fs),exists=fs.existsSync.bind(fs);
const paths=new Map(Object.values(scope).flat().map(id=>[resolve(root,'items',id+'.md'),resolve(base,'items',id+'.md')]));
fs.readFileSync=(p,...args)=>original(paths.get(resolve(String(p)))??p,...args);
fs.existsSync=p=>exists(paths.get(resolve(String(p)))??p);
syncBuiltinESMExports();
process.argv=[process.argv[0],resolve(root,'tools/proof-contract.mjs'),resolve(base,`batch-${batch}.contracts.proposed.json`),'--strict','--items',scope[batch].join(','),'--json'];
await import(pathToFileURL(resolve(root,'tools/proof-contract.mjs')).href);
