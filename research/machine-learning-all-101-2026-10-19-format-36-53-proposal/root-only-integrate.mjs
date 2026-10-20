#!/usr/bin/env node
// FORMAT/METADATA ONLY. Prepared but not executed by the delegated repair owner.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const base = path.dirname(fileURLToPath(import.meta.url)), root = path.resolve(base, '../..');
const sha = value => createHash('sha256').update(value).digest('hex');
const full = p => { const result=path.resolve(root,p);if(!result.startsWith(root+path.sep))throw Error('Outside repository: '+p);return result; };
const bytes = p => fs.readFileSync(full(p));
if (process.argv.length!==3 || process.argv[2]!=='--apply-reviewed-root-only') throw Error('Root-only integration requires --apply-reviewed-root-only; delegated repair owner must not execute.');
const manifestPath = path.join(base,'integration-manifest.json');
if (sha(fs.readFileSync(manifestPath))!=='dbcce16b3235b9006126064987c04247ecc2361d8a71fada8ed21c09138b77c6') throw Error('Manifest hash changed');
const manifest=JSON.parse(fs.readFileSync(manifestPath,'utf8'));
for (const row of manifest.context_guards) if (sha(bytes(row.target))!==row.sha256) throw Error('Actual source/metadata/context preimage changed: '+row.target);
const outputs=[];
for (const row of manifest.files) {
  if (sha(bytes(row.target))!==row.before_sha256) throw Error('Actual target changed: '+row.target);
  const content=bytes(row.proposed);
  if (sha(content)!==row.proposed_sha256) throw Error('Proposed target changed: '+row.proposed);
  outputs.push({...row,content});
}
// All73 actual guards and all15 proposed hashes pass before the first mutation.
const record=path.join(base,'root-execution-record');
if(fs.existsSync(record))throw Error('Single-use execution record already exists');
fs.mkdirSync(record);
for(const row of outputs){const archive=path.join(record,'before',row.target);fs.mkdirSync(path.dirname(archive),{recursive:true});fs.writeFileSync(archive,bytes(row.target),{flag:'wx'});}
fs.writeFileSync(path.join(record,'intent.json'),JSON.stringify({run:manifest.run,scope:manifest.scope,files:manifest.files},null,2)+'\n',{flag:'wx'});
for(const row of outputs)fs.writeFileSync(full(row.target),row.content);
for(const row of outputs)if(sha(bytes(row.target))!==row.proposed_sha256)throw Error('Postwrite mismatch: '+row.target);
fs.writeFileSync(path.join(record,'completed.json'),JSON.stringify({run:manifest.run,format_metadata_only:true,mathematical_review_cycles_reopened:false,files:manifest.files,readiness_or_gate_credit:false},null,2)+'\n',{flag:'wx'});
console.log('Integrated15 guarded format/metadata files. Root actual-source focused checks remain owed. No canonical/readiness/gate actions were taken.');
