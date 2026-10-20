#!/usr/bin/env node
// Current imported context and its explicit recorded root successors. Historical
// authentication lives in a shared leaf that never calls the repair policy.
import { readFileSync, readdirSync, mkdirSync, writeFileSync, chmodSync, unlinkSync } from 'node:fs';
import { resolve, join, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { recordedPublishedRepair } from './published-repair-policy.mjs';
import { inspectSelection, rawHash, verifyContextReceiptHistory,
  bytes, json, present, fail, reviewEvidence, item } from './physics-math-context-history.mjs';
export { inspectSelection, rawHash } from './physics-math-context-history.mjs';
const stable = value => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map(k => [k, stable(value[k])])) : value;
const fingerprint = value => rawHash(JSON.stringify(stable(value)));
export function importSelectedContext(root,run,selection,{review,acceptance,receipt}) {
  root=resolve(root); const wanted=`research/${run}-physics-math-context-import.json`;
  if(receipt!==wanted) fail(`receipt must be ${wanted}`); if(present(join(root,receipt))) fail('receipt already exists');
  const inspection=inspectSelection(root,run,selection);const evidence=reviewEvidence(root,run,inspection,review,acceptance);
  const result={...inspection,kind:'immutable-selected-physics-mathematics-context-import',recorded_at:new Date().toISOString(),source_reference_root:'physics',external_context_only:true,native_execution_coverage:false,...evidence,owned_paths:inspection.files.map(({path,sha256})=>({path,sha256}))};
  // All sources, evidence and targets were checked before any write. Exclusive
  // creates refuse races. Roll back only files created by this invocation.
  const created=[];
  try {
    for(const row of inspection.files) { const source=bytes(root,row.source_path);if(rawHash(source)!==row.sha256)fail('source changed during import');const target=join(root,row.path);writeFileSync(target,source,{flag:'wx',mode:0o444});created.push(target);chmodSync(target,0o444); }
    const second=inspectSelection(root,run,selection,{installed:true}); if(second.context_sha256!==inspection.context_sha256) fail('context changed during import');
    reviewEvidence(root,run,second,review,acceptance);mkdirSync(dirname(join(root,receipt)),{recursive:true});writeFileSync(join(root,receipt),JSON.stringify(result,null,2)+'\n',{flag:'wx'});created.push(join(root,receipt));
    return result;
  } catch(error) { for(const path of created.reverse())unlinkSync(path);throw error; }
}
export function verifyContextReceipt(root,receiptPath,options={}) {
  const verified=verifyContextReceiptHistory(root,receiptPath,options), {receipt}=verified;
  for(const file of receipt.files) {
    const current=bytes(root,file.path);
    if(rawHash(current)===file.sha256)continue;
    const currentItem=item(root,file.path,file.id,false);
    const repairPath=currentItem.data?.verification?.repair;
    // The immutable import pin remains original. A changed root copy must be
    // an ordinary recorded repair rooted in exactly this pin, never a reimport.
    if(typeof repairPath!=='string')fail(`immutable import changed: ${file.id}`);
    const repair=json(root,repairPath), ref=repair.prior_publication_context;
    if(repair.run!==receipt.run || repair.before_raw_sha256!==file.sha256
      || ref?.path!==receiptPath || ref.sha256!==rawHash(bytes(root,receiptPath))
      || ref.source_path!==file.source_path || repair.prior_publication_commit!==file.publication_commit
      || !recordedPublishedRepair(root,file.id,current.toString('utf8'),repairPath).ok)
      fail(`immutable import changed without an authenticated root repair: ${file.id}`);
    verified.paths.push(repairPath,repair.before_file,
      `research/${repair.run}-step3-published-claims.jsonl`,'research/published-consumer-supplier-ledger.md');
  }
  verified.paths=[...new Set(verified.paths)];
  return verified;
}
export function reachedPhysicsMathContext(root,reachedIds,{selectedIds=[],cache=null}={}) {
  const reached=new Set(reachedIds), bindings=[], paths=new Set();
  const registry=cache?.registry ?? readdirSync(join(root,'research')).filter(n=>n.endsWith('-physics-math-context-import.json')).map(name=>({path:`research/${name}`,header:json(root,`research/${name}`)}));
  if(cache)cache.registry=registry;
  for(const {path,header} of registry) {
    if(!Array.isArray(header.expected_ids))fail('malformed import identity registry');
    if(!header.expected_ids.some(id=>reached.has(id)))continue;
    const verified=cache?.get(path) ?? verifyContextReceipt(root,path,{selectedIds});if(cache)cache.set(path,verified);
    bindings.push({path,sha256:rawHash(bytes(root,path)),context_sha256:verified.receipt.context_sha256});for(const p of verified.paths)paths.add(join(root,p));
  }
  return {bindings:bindings.sort((a,b)=>a.path.localeCompare(b.path)),paths:[...paths].sort()};
}
if(process.argv[1] && import.meta.url===pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const args=process.argv.slice(2),command=args.shift();const value=flag=>{const at=args.indexOf(flag);if(at<0||!args[at+1]||args[at+1].startsWith('--'))fail(`missing ${flag}`);return args[at+1];};
    const root=args.includes('--root')?resolve(value('--root')):process.cwd();
    let result;
    if(command==='verify')result=verifyContextReceipt(root,value('--receipt'));
    else {const run=value('--run'),selection=json(root,value('--selection'));if(command==='inspect')result=inspectSelection(root,run,selection);else if(command==='import')result=importSelectedContext(root,run,selection,{review:value('--review'),acceptance:value('--acceptance'),receipt:value('--receipt')});else fail('usage: inspect|import --run RUN --selection FILE; verify --receipt FILE');}
    console.log(JSON.stringify(result,null,2));
  }catch(error){console.error(error.message);process.exitCode=1;}
}
