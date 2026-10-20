// Owner metadata reconciliation after ordinary native collection archived support.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {splitFrontmatter,sourceSectionText} from '../tools/facts-block.mjs';
import {sharedWriteLock} from '../tools/step5-shared-write-lock.mjs';
const run='machine-learning-all-101-2026-10-19',dir=`research/${run}-owner-repeat-quote-reconciliation`;
const read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p)),sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const state=json(`.autopilot/${run}/state.json`),collection=`research/${run}-step5-v2/repeat-1-collected.json`,col=json(collection);
if(state.stage!=='5.5-adjudicate'||!state.paused||Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Need actual paused/drained5.5');
for(const [p,h] of Object.entries(col.evidence))if(p.includes('/supporting-metadata/')&&sha(read(p))!==h)throw Error('Native support archive changed');
const report37=`research/${run}-step5-v2/step5-v2-repeat-r1-u37.json`;
const edits=json(report37).repair_notes.consumer_quote_updates.map(x=>({path:x.path,id:x.id,index:Number(x.pointer.split('/')[4]),source:x.supplier,section:x.source_section}));
const prefix='thm-directional-sample-covariance-resolvent-limit';
for(const [id,fact,source] of [[prefix+'-for-bounded-entries','A1','def-axiom-of-choice'],[prefix+'-for-bounded-entries','F12','def-weak-convergence-of-borel-probability-measures'],[prefix,'A1','def-axiom-of-choice'],[prefix,'F7','def-identically-distributed-and-iid-random-variables'],[prefix,'F10','def-weak-convergence-of-borel-probability-measures']]){
 const path=`research/${run}-batch-47.proof-contracts.json`,rows=json(path).contracts[id].citations,index=rows.findIndex(x=>x.fact===fact&&x.source===source);
 if(index<0)throw Error('Named citation missing');edits.push({path,id,index,source,section:'Definition'});
}
{
 const path=`research/${run}-batch-96.proof-contracts.json`,id='thm-finite-action-gibbs-policy-optimum',source='def-proper-scoring-rule';
 const index=json(path).contracts[id].citations.findIndex(x=>x.fact==='F2'&&x.source===source);
 if(index<0)throw Error('Gibbs F2 missing');edits.push({path,id,index,source,section:'Definition'});
}
if(edits.length!==16)throw Error('Unexpected edit inventory');
const owner=`${run}-root-repeat-quotes`,lock=sharedWriteLock(process.cwd(),'acquire',owner);
if(!lock.acquired)throw Error('Metadata lock busy');
try{
 const files=new Map(),sources=new Map();
 for(const e of edits){
  if(!files.has(e.path)){const before=read(e.path);files.set(e.path,{before,data:JSON.parse(before)});}
  const row=files.get(e.path).data.contracts[e.id].citations[e.index];
  if(row.source!==e.source||row.source_section!==e.section)throw Error('Citation identity changed');
  const p=`items/${e.source}.md`,text=read(p),quote=sourceSectionText(splitFrontmatter(text).body,e.section)?.trim();
  if(!quote)throw Error('Missing current source section');sources.set(p,sha(text));
  e.before_quote=row.quote;e.after_quote=quote;if(e.before_quote===quote)throw Error('Expected stale quote');row.quote=quote;
 }
 fs.mkdirSync(dir,{recursive:true});
 const carriers=[...files].map(([path,f])=>({path,before_sha256:sha(f.before),after_sha256:sha(JSON.stringify(f.data,null,2)+'\n')}));
 const plan={version:1,run,at:new Date().toISOString(),attribution:'root metadata correction only; no mathematical review or native coverage granted',collection:{path:collection,sha256:sha(read(collection))},edits,carriers,sources:Object.fromEntries(sources)};
 fs.writeFileSync(`${dir}/plan.json`,JSON.stringify(plan,null,2)+'\n',{flag:'wx'});
 for(const [path,f] of files){
  if(read(path)!==f.before)throw Error('Carrier CAS changed');
  fs.writeFileSync(`${dir}/${path.split('/').at(-1)}.before`,f.before,{flag:'wx'});
 }
 for(const [p,h] of sources)if(sha(read(p))!==h)throw Error('Source CAS changed');
 for(const [path,f] of files){const after=JSON.stringify(f.data,null,2)+'\n';fs.writeFileSync(path,after);fs.writeFileSync(`${dir}/${path.split('/').at(-1)}.after`,after,{flag:'wx'});}
 fs.writeFileSync(`${dir}/applied.json`,JSON.stringify({version:1,run,at:new Date().toISOString(),plan_sha256:sha(read(`${dir}/plan.json`)),quote_changes:edits.length,carriers,source_writes:0,native_report_writes:0},null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify({quote_changes:edits.length,carriers,source_writes:0,native_report_writes:0}));
}finally{sharedWriteLock(process.cwd(),'release',owner);}
