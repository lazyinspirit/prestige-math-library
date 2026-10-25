// Private read-only hypothetical adoption diagnostic. Not used by native code.
// Only the ABSENT canonical original-maintenance receipt is virtualized; every
// source, pin, evidence, manifest, original and consumer remains an actual read.
import fs from 'node:fs';
import {syncBuiltinESMExports} from 'node:module';
import {fileURLToPath} from 'node:url';
import {resolve} from 'node:path';
const root=resolve(fileURLToPath(new URL('.',import.meta.url)),'../../../..');
const canonical=resolve(root,'research/advanced-qft-supersymmetry-build-2026-10-23-original-maintenance.json');
const candidate=fileURLToPath(new URL('./PENDING-original-maintenance.json',import.meta.url));
const old={readFileSync:fs.readFileSync,existsSync:fs.existsSync,lstatSync:fs.lstatSync,realpathSync:fs.realpathSync};
if(old.existsSync(canonical))throw Error('Private candidate diagnostic requires canonical receipt to stay absent');
const isTarget=p=>resolve(p instanceof URL?fileURLToPath(p):String(p))===canonical;
fs.readFileSync=function(p,...args){return old.readFileSync.call(fs,isTarget(p)?candidate:p,...args);};
fs.existsSync=function(p){return isTarget(p)||old.existsSync.call(fs,p);};
fs.lstatSync=function(p,...args){return old.lstatSync.call(fs,isTarget(p)?candidate:p,...args);};
fs.realpathSync=function(p,...args){return isTarget(p)?canonical:old.realpathSync.call(fs,p,...args);};
syncBuiltinESMExports();
