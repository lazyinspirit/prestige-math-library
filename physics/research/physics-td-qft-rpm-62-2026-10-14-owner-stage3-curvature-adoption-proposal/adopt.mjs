// Private root-executable proposal. No source, ledger, state, or gate writes.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {splitFrontmatter,sourceSectionText,sectionText,SOURCE_SECTIONS} from '../../tools/physics-support/facts-block.mjs';
const RUN='physics-td-qft-rpm-62-2026-10-14';
const ID='lem-tdmath-constrained-curvature';
const BASE=`research/${RUN}-owner-stage3-curvature-adoption-proposal`;
const args=process.argv.slice(2), flag=k=>args.includes(k), get=k=>{const n=args.indexOf(k);return n<0?null:args[n+1];};
if(!get('--index')||flag('--apply')===flag('--dry-run'))throw Error('Use --index FINAL_INDEX --dry-run OR --apply --target-writers-drained --ledger-append-serialized');
if(flag('--apply')&&(!flag('--target-writers-drained')||!flag('--ledger-append-serialized')))throw Error('Root must confirm target-4 writers drained and official serialized ledger append');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
const safe=p=>{if(typeof p!=='string'||path.isAbsolute(p)||p.split('/').includes('..'))throw Error('Unsafe path '+p);return p;};
const cache=new Map(),errors=[],writes=new Map();
const statKeys=['dev','ino','size','mtimeMs','ctimeMs'];
const read=p=>{safe(p);if(!cache.has(p)){const a=fs.statSync(p),bytes=fs.readFileSync(p),b=fs.statSync(p);if(statKeys.some(k=>a[k]!==b[k]))throw Error('Input changed during read '+p);cache.set(p,{bytes,stat:b,sha:hash(bytes)});}return cache.get(p);};
const json=p=>JSON.parse(read(p).bytes.toString());
const error=(message,detail={})=>errors.push({message,...detail});
const attempt=(label,f)=>{try{f();}catch(e){error(e.message,{label});}};
const guard=(p,h)=>{if(!/^[a-f0-9]{64}$/.test(h??''))throw Error('Missing final raw guard '+p);if(read(p).sha!==h)throw Error('Stale final raw guard '+p);};
const targetGuard=t=>{if(t.before_file){const before=read(t.before_file).bytes;if(!read(t.path).bytes.equals(before))throw Error('Current target differs from exact archived preimage '+t.path);}else guard(t.path,t.before_sha256);};
const targetWritersDrained=()=>{
 const statePath=`.physics-autopilot/${RUN}/state.json`;
 // Native state remains mutable for unrelated batches. Inspect only current target
 // ownership, without caching or hashing the whole changing engine state.
 const state=JSON.parse(fs.readFileSync(statePath,'utf8'));
 if(state.run!==RUN)throw Error('Wrong actual native run state');
 const rows=Object.values(state.dispatches??{}).filter(d=>(d.covers??[]).map(String).includes('4'));
 const unfinished=rows.filter(d=>d.startedAt&&!d.endedAt);
 if(unfinished.length)throw Error('Actual target-4 dispatch remains active: '+unfinished.map(d=>d.label).join(', '));
 const alpha=rows.find(d=>d.stage==='3a-adjudicate'&&d.label==='3a-batch-4');
 if(!alpha?.endedAt||alpha.lastExitOk!==true)throw Error('Target-4 native adjudicator handoff is not successful/current');
};
const clone=x=>structuredClone(x);
const encode=d=>Buffer.from(JSON.stringify(d,null,2)+'\n');
const index=json(get('--index'));
if(index.run!==RUN||index.released!==true||index.science_owner_approved!==true)throw Error('Need released exact scientific-owner index, not prepared/mutable observation');
attempt('scientific release',()=>{guard(index.receipt.path,index.receipt.sha256);const r=json(index.receipt.path);for(const c of index.receipt.checks??[]){let value=r;for(const k of c.path)value=value?.[k];if(JSON.stringify(value)!==JSON.stringify(c.equals))throw Error('Release assertion differs '+c.path.join('.'));}if(!index.receipt.checks?.length)throw Error('Missing exact release assertions');});
if(index.source?.id!==ID||index.source?.path!==`items/${ID}.md`)throw Error('Only released curvature source is authorized');
attempt('source final and archive',()=>{guard(index.source.path,index.source.final_sha256);guard(index.source.before_file,index.source.before_sha256);});
for(const p of index.protected_inputs??[])attempt('protected historical input',()=>{guard(p.path,p.sha256);});
for(const p of index.providers??[])attempt('current quote provider',()=>{guard(p.path,p.sha256);});
attempt('actual target writer handoff',targetWritersDrained);
const allowedFields=new Set(['citations','derivations','boundaries','routine_steps','supplier_excerpts']);
for(const target of index.contract_partials??[])attempt('owning partial contracts',()=>{
 if(target.path!==`research/${RUN}-batch-4.proof-contracts.json`)throw Error('Only exact batch4 contracts authorized');
 if(writes.has(target.path))throw Error('Duplicate contract target');targetGuard(target);guard(target.proposal.path,target.proposal.sha256);
 const before=json(target.path),packet=json(target.proposal.path),proposal=packet.by_path?.[target.path],next=clone(before);
 if(!proposal||proposal.before_sha256!==target.before_sha256)throw Error('Proposal owning target/preimage mismatch');
 for(const [id,fields]of Object.entries(proposal.contracts??{})){
  if(!target.approved_ids?.includes(id)||!before.scope?.includes(id)||!before.contracts?.[id])throw Error('Subject lacks owning existing scope/owner approval '+id);
  for(const [field,value]of Object.entries(fields)){
   if(!allowedFields.has(field))throw Error('Unapproved partial field '+id+'/'+field);
   next.contracts[id][field]=clone(value);
  }
 }
 if(!Object.keys(proposal.contracts??{}).length)throw Error('Empty partial contract proposal');
 writes.set(target.path,encode(next));
});
attempt('owner current decision and ledger reference',()=>{
 const d=index.decision;
 if(d.path!==`research/${RUN}-alpha-batch-4-3a-decisions.json`)throw Error('Wrong current native decision path');
 targetGuard(d);const before=json(d.path),next=clone(before);
 if(before.version!==1||before.run!==RUN||before.group!=='batch-4')throw Error('Wrong current decision identity');
 const matches=next.decisions.filter(x=>x.obligation===`touched:4:${ID}`);
 if(matches.length!==1||matches[0].id!==ID||matches[0].route!=='touched')throw Error('Missing exact existing frozen obligation');
 const fields=d.fields;
 if(fields.verdict!=='amended_repair'||fields.repair_confidence!==1||typeof fields.owner_resolution!=='string'||fields.owner_resolution.trim().length<40||typeof fields.evidence!=='string'||!fields.evidence.trim()||!Array.isArray(fields.defect_ids)||!fields.defect_ids.length)throw Error('Missing actual completed owner repair disposition');
 const allowed=new Set(['verdict','repair_confidence','owner_resolution','evidence','defect_ids']);
 if(Object.keys(fields).some(k=>!allowed.has(k)))throw Error('Proposal changes protected observation/routing/stamp fields');
 const ledgerPath='research/defect-ledger.jsonl';
 if(fs.existsSync(ledgerPath+'.append-lock'))throw Error('Canonical ledger append lock remains active');
 const rows=read(ledgerPath).bytes.toString().split(/\r?\n/).filter(Boolean).map(JSON.parse);
 for(const id of fields.defect_ids){const rowsForId=rows.filter(r=>r.defect_id===id);if(rowsForId.length!==1)throw Error('Canonical ledger row must already be present exactly once '+id);const r=rowsForId[0];const expected=index.ledger_expected_rows?.find(x=>x.defect_id===id);if(!expected||JSON.stringify(expected)!==JSON.stringify(r))throw Error('Canonical ledger row differs from exact owner/root proposal '+id);if(rows.some(x=>x.supersedes?.includes(id)))throw Error('Referenced ledger row was superseded '+id);if(r.run!==RUN||r.subject!==ID||r.caught_at_stage!=='3a-adjudicate'||!['fixed','narrowed','dropped'].includes(r.disposition))throw Error('Ledger does not attest actual completed owned repair '+id);}
 Object.assign(matches[0],clone(fields));
 // subject_sha256 is intentionally unchanged: native stamp binds final carriers.
 writes.set(d.path,encode(next));
});
for(const m of index.source_mirrors??[])attempt('exact approved source to current owning MF/plan mirror',()=>{
 const allowed=[`research/${RUN}-batch-4.pages.json`,'research/plan-spec.json'];
 if(!allowed.includes(m.path)||writes.has(m.path))throw Error('Unexpected/duplicate mirror target');
 targetGuard(m);const before=json(m.path),next=clone(before),pages=Array.isArray(next)?next:next.pages;
 const page=pages.filter(p=>p.id==='td-math-nonsmooth-equilibrium');if(page.length!==1)throw Error('Missing exact existing owning page');
 const found=page[0].items.filter(x=>x.id===ID);if(found.length!==1)throw Error('Missing exact existing owning item');
 const packet=index.contract_partials[0].proposal,approved=json(packet.path).source_mirror_proposal;
 if(approved?.id!==ID)throw Error('Missing source-owner exact mirror');
 const body=splitFrontmatter(read(index.source.path).bytes.toString()).body;
 if(sourceSectionText(body,'Statement').trim()!==approved.statement.trim())throw Error('Approved Statement mirror differs from current source');
 if(sectionText(body,'Proof').trim()!==approved.proof.trim())throw Error('Approved proof mirror differs from current source');
 // Owner provided a proof transcript, not a public proof acceptance verdict.
 found[0].statement=approved.statement;found[0].proof=approved.proof;
 writes.set(m.path,encode(next));
});
for(const t of index.contract_partials??[])attempt('legal current case-scope binding',()=>{
 const packet=json(t.proposal.path),fields=packet.by_path[t.path].contracts;
 for(const [id,c]of Object.entries(fields)){
  if(id!==ID)throw Error('Only released curvature contract authorized');
  for(const b of c.boundaries??[]){const scope=b.case_scope;if(!scope)continue;if(!SOURCE_SECTIONS.has(scope.source_section))throw Error('Illegal public case section');if(scope.current_raw_sha256!==index.source.final_sha256)throw Error('Unapproved case raw guard');const body=splitFrontmatter(read(index.source.path).bytes.toString()).body;if(!sourceSectionText(body,scope.source_section).includes(scope.source_excerpt))throw Error('Stale public case excerpt');}
 }
});
for(const [p,r]of cache)attempt('input currency',()=>{const s=fs.statSync(p);if(statKeys.some(k=>s[k]!==r.stat[k]))throw Error('Input changed during planning '+p);});
const out=`${BASE}/executions/${new Date().toISOString().replace(/[:.]/g,'-')}`;
fs.mkdirSync(out,{recursive:true});
const report={run:RUN,index:get('--index'),errors,targets:[...writes.keys()],source_writes:false,ledger_writes:false,protected_native_evidence_writes:false,shared_writes:false,native_stamp_required:true,native_acceptance:false};
fs.writeFileSync(out+'/report.json',JSON.stringify(report,null,2)+'\n');
if(errors.length){console.error(JSON.stringify({status:'refused-before-writes',errors:errors.length,report:out+'/report.json'}));process.exitCode=1;}
else if(!flag('--apply'))console.log(JSON.stringify({status:'dry-run',report:out+'/report.json'}));
else{
 const staged=[],applied=[];
 try{
  for(const [p,bytes]of writes){const archive=out+'/'+p.replaceAll('/','__')+'.before',tmp=p+'.curvature-owner-'+process.pid+'.tmp';fs.writeFileSync(archive,read(p).bytes,{flag:'wx'});fs.writeFileSync(tmp,bytes,{flag:'wx'});staged.push({p,tmp,archive});}
  for(const [p,r]of cache){const s=fs.statSync(p);if(statKeys.some(k=>s[k]!==r.stat[k]))throw Error('Input changed before commit '+p);}
  targetWritersDrained();
  if(fs.existsSync('research/defect-ledger.jsonl.append-lock'))throw Error('Ledger append transaction appeared before commit');
  const ledgerCurrency=()=>{const p='research/defect-ledger.jsonl',r=cache.get(p),current=fs.statSync(p);if(fs.existsSync(p+'.append-lock')||statKeys.some(k=>current[k]!==r.stat[k]))throw Error('Serialized ledger append changed during integration');};
  for(const s of staged){ledgerCurrency();if(!fs.readFileSync(s.p).equals(read(s.p).bytes))throw Error('Target changed before atomic write '+s.p);fs.renameSync(s.tmp,s.p);applied.push(s);}
  ledgerCurrency();
  report.shared_writes=true;fs.writeFileSync(out+'/receipt.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({status:'applied',receipt:out+'/receipt.json'}));
 }catch(e){
  const rollback=[];
  for(const s of applied.reverse())try{if(!fs.readFileSync(s.p).equals(writes.get(s.p))){rollback.push({path:s.p,error:'Concurrent edit preserved; manual restore required',archive:s.archive});continue;}const tmp=s.p+'.rollback-'+process.pid;fs.writeFileSync(tmp,fs.readFileSync(s.archive),{flag:'wx'});fs.renameSync(tmp,s.p);}catch(x){rollback.push({path:s.p,error:x.message,archive:s.archive});}
  for(const s of staged)if(fs.existsSync(s.tmp))fs.unlinkSync(s.tmp);
  fs.writeFileSync(out+'/rollback.json',JSON.stringify({error:e.message,rollback},null,2)+'\n');throw e;
 }
}
