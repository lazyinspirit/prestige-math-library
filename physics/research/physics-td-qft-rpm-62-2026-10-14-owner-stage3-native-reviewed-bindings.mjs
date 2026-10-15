// Root-only adoption of released exact same-issue/context metadata.
import { readFileSync, writeFileSync, statSync, mkdirSync, renameSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve, join } from 'node:path';
const root=process.cwd(), run='physics-td-qft-rpm-62-2026-10-14';
if(!process.argv.includes('--apply')) throw Error('Root adoption requires --apply');
const sha=b=>createHash('sha256').update(b).digest('hex');
const canon=v=>Array.isArray(v)?v.map(canon):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canon(v[k])])):v;
const hv=v=>sha(JSON.stringify(canon(v)));
const snapshots=new Map(), planned=new Map();
function snap(p){if(p.startsWith('/')||p.split('/').includes('..'))throw Error('unsafe path');if(!snapshots.has(p)){const raw=readFileSync(resolve(root,p)),s=statSync(resolve(root,p));snapshots.set(p,{p,raw,sha:sha(raw),ino:s.ino,size:s.size,mtime:s.mtimeMs});}return snapshots.get(p);}
const read=p=>JSON.parse(snap(p).raw);
function guard(p,h){if(snap(p).sha!==h)throw Error('stale evidence '+p);}
function set(p,d){planned.set(p,Buffer.from(JSON.stringify(d,null,2)+'\n'));}
const aliasPath=`research/${run}-step3-owner-same-defect-aliases.json`, aliases=read(aliasPath);
for(const [p,h] of Object.entries(aliases.inputs??{})) guard(p,h);
const classifiers=[
 [20,`research/${run}-owner-stage3-native-td-1f350534-round1/revision-1/batch20-same-issue-classification.json`,'7b0512b57266a8dc1a4bd5354b6b640a0d5f06cf9b66403eafc8e32314c4a607'],
 [63,`research/${run}-owner-stage3-native-qft-repairs-round1/complex-polar63-same-issue-classification.revision1.json`,'4fb43d367e748c6fe28d8e42492d162e7f99aeb23bc944ca4c5be0f32e3e01c6'],
];
function bind(receipt,p,h){guard(p,h);receipt.inputs??={};receipt.inputs[p]=h;return {path:p,sha256:h};}
for(const [batch,p,expected] of classifiers){
 if(!expected) throw Error('Root must bind the released classification hash before adoption');
 guard(p,expected); const c=read(p);
 if(c.run!==run||!c.classification_approved||!c.one_underlying_issue) throw Error('unreleased classification');
 const scopePath=`research/${run}-step3-scope-${batch}.json`, scope=read(scopePath);
 const primary=scope.reader_findings.find(x=>x.obligation===c.primary.obligation), alias=scope.refuter_findings.find(x=>x.obligation===c.alias.obligation);
 if(!primary||!alias||primary.id!==alias.id||primary.consumer_id!==alias.consumer_id||primary.producer_batch!==alias.producer_batch)throw Error('frozen pair differs');
 const entry={kind:'same-source-distinct-carrier',group:`batch-${batch}`,primary_obligation:primary.obligation,alias_obligation:alias.obligation,
  subject:primary.id,consumer_id:primary.consumer_id,producer_batch:primary.producer_batch,
  primary_defect:primary.defect,alias_defect:alias.defect,primary_finding_sha256:hv(primary),alias_finding_sha256:hv(alias),
  primary_location:primary.location,alias_location:alias.location,primary_observed_sha256:primary.observed_sha256,alias_observed_sha256:alias.observed_sha256,
  original_defect_id:c.canonical_defect_id,scientific_owner_receipt:bind(aliases,p,expected),
  observed_raw_archive:bind(aliases,c.observed_raw_archive.path,c.observed_raw_archive.sha256),
  frozen_scope_guard:bind(aliases,scopePath,snap(scopePath).sha),current_source:bind(aliases,c.current_source_guard.path,c.current_source_guard.sha256),
  frozen_file_guards:['reader-findings','refute'].map(kind=>{const q=`research/${run}-${kind}-${batch}.json`;return bind(aliases,q,snap(q).sha);}),
  reviewed_source_excerpts:c.reviewed_source_excerpts?.map(x=>typeof x==='string'?x:x.quote)};
 if(!Array.isArray(entry.reviewed_source_excerpts)||entry.reviewed_source_excerpts.length<2||entry.reviewed_source_excerpts.some(x=>typeof x!=='string'||x.length<80||!snap(entry.current_source.path).raw.toString().includes(x)))throw Error('source excerpts invalid');
 if(aliases.aliases.some(x=>x.group===entry.group&&x.alias_obligation===entry.alias_obligation))throw Error('already adopted');
 aliases.aliases.push(entry);
}
set(aliasPath,aliases);const aliasSha=sha(planned.get(aliasPath));
const decisions=new Map();
function decisionsFor(group){const p=`research/${run}-alpha-${group}-3a-decisions.json`;if(!decisions.has(p))decisions.set(p,read(p));return [p,decisions.get(p)];}
for(const entry of aliases.aliases){const [p,d]=decisionsFor(entry.group), row=d.decisions.find(x=>x.obligation===entry.alias_obligation),primary=d.decisions.find(x=>x.obligation===entry.primary_obligation);
 if(!row||!primary||row.route!=='flagged'||primary.route!=='reader'||row.id!==entry.subject||primary.id!==entry.subject||hv(row.defect_ids)!==hv(primary.defect_ids))throw Error('decision alias ownership not ready');
 row.same_defect_as=primary.obligation;row.same_defect_receipt_sha256=aliasSha;
 if(entry.kind==='same-source-distinct-carrier')row.same_defect_evidence=`Original scientific owner classifies these exact frozen findings as one underlying issue; same observed source bytes, preserved distinct contract carriers. Guarded classification ${entry.scientific_owner_receipt.path}.`;
 set(p,d);
}
const contextPath=`research/${run}-step3-owner-external-context.json`, context=read(contextPath);
for(const [p,h] of Object.entries(context.inputs??{}))guard(p,h);
const tensorPath=`research/${run}-owner-stage3-native-td-1f350534-round1/revision-1/tensor-reviewed-maintenance-classification.json`;
const tensorSha='d1d397d3e421b3f3f81b1f9991db442805430bc9f918ba11d59ed1dedb3c6410';guard(tensorPath,tensorSha);const t=read(tensorPath);
const entries=context.contexts.filter(x=>x.obligation===t.obligation&&x.supplier_id===t.supplier_id);if(entries.length!==1)throw Error('tensor context not exact');
const entry=entries[0];if(entry.reviewed_maintenance_findings?.length)throw Error('maintenance already adopted');
const ledgerPath='research/defect-ledger.jsonl', ledger=snap(ledgerPath).raw.toString().trim().split(/\r?\n/).map(JSON.parse), rows=ledger.filter(x=>x.defect_id===t.defect_id);
if(rows.length!==1||hv(rows[0])!==t.ledger_row_sha256||rows[0].disposition!=='nonfatal-recorded')throw Error('tensor row changed');
if(!snap(`items/${t.supplier_id}.md`).raw.toString().includes(t.literal_used_clause))throw Error('tensor used clause changed');
for(const premise of t.literal_consumer_premises)if(!snap(`items/${premise.consumer_id}.md`).raw.toString().includes(premise.literal_premise))throw Error('tensor premise changed');
bind(context,tensorPath,tensorSha);for(const ref of t.review.evidence_refs)bind(context,ref.path,ref.sha256);
entry.reviewed_maintenance_findings=[{defect_id:t.defect_id,ledger_row_sha256:t.ledger_row_sha256,review:t.review}];set(contextPath,context);const contextSha=sha(planned.get(contextPath));
for(const e of context.contexts){const [p,d]=decisionsFor(e.group),row=d.decisions.find(x=>x.obligation===e.obligation);
 if(row?.verdict!=='context_accepted')throw Error('context decision not ready');row.context_receipt_sha256=contextSha;set(p,d);}
const output=`research/${run}-owner-stage3-native-reviewed-bindings/${new Date().toISOString().replaceAll(':','-')}`;mkdirSync(resolve(root,output),{recursive:true});
const current=s=>{const n=statSync(resolve(root,s.p));return n.ino===s.ino&&n.size===s.size&&n.mtimeMs===s.mtime&&sha(readFileSync(resolve(root,s.p)))===s.sha;};
for(const s of snapshots.values())if(!current(s))throw Error('concurrent input '+s.p);
const writes=[];try{for(const [p,after] of planned){const s=snap(p);writeFileSync(join(root,output,p.replaceAll('/','__')+'.before'),s.raw);const tmp=resolve(root,p+'.root-reviewed-tmp');writeFileSync(tmp,after);if(!current(s))throw Error('concurrent target '+p);renameSync(tmp,resolve(root,p));writes.push({p,before:s.sha,after:sha(after)});}}catch(e){for(const w of writes.reverse())if(sha(readFileSync(resolve(root,w.p)))===w.after)writeFileSync(resolve(root,w.p),snap(w.p).raw);throw e;}
writeFileSync(join(root,output,'receipt.json'),JSON.stringify({run,applied:true,source_edits:false,writes},null,2)+'\n');console.log(output+'/receipt.json');
