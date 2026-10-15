// Root-only, exact metadata adoption. The author has not executed this helper.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {splitFrontmatter, sourceSectionText, numberedProofSteps} from '../../tools/physics-support/facts-block.mjs';

const RUN = 'physics-td-qft-rpm-62-2026-10-14';
const BASE = 'research/' + RUN + '-owner-stage3-soft55-adoption-proposal';
const args = process.argv.slice(2);
const indexPath = args[args.indexOf('--index') + 1];
const apply = args.includes('--apply');
if (!args.includes('--index') || !indexPath ||
    apply === args.includes('--dry-run') ||
    apply && (!args.includes('--affected-carriers-drained') || !args.includes('--ledger-append-serialized')))
  throw Error('ROOT: --index PATH --dry-run OR --apply --affected-carriers-drained --ledger-append-serialized');
if (path.resolve(process.cwd()) !== '/Users/ianx/Projects/prestige-math-library/physics')
  throw Error('Execute from the physics repository root');
const yaml = createRequire('/Users/ianx/Projects/prestige-intelligence/web/package.json')('yaml');
const sha = bytes => crypto.createHash('sha256').update(bytes).digest('hex');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canonical(x[k])])) : x;
const same = (a,b) => JSON.stringify(canonical(a)) === JSON.stringify(canonical(b));
const errors = [], cache = new Map(), staged = new Map(), sourceCache = new Map();
const problem = (message, details={}) => errors.push({message,...details});
const attempt = (label, fn) => { try { return fn(); } catch(e) { problem(e.message,{label}); } };
const safe = p => {
  if (typeof p !== 'string' || path.isAbsolute(p) || (p.split('/').includes('..')&&p!=='../items/def-countable-choice.md'))
    throw Error('Unsafe local path ' + p);
  return p;
};
const statKeys = ['size','mtimeMs','ctimeMs','ino','dev'];
const read = p => {
  safe(p);
  if (!cache.has(p)) {
    const before = fs.statSync(p), bytes = fs.readFileSync(p), after = fs.statSync(p);
    if (statKeys.some(k => before[k] !== after[k])) throw Error('Read raced with writer: ' + p);
    cache.set(p,{bytes,stat:after,sha:null});
  }
  return cache.get(p);
};
const hash = p => { const r=read(p); return r.sha ??= sha(r.bytes); };
const json = p => JSON.parse(read(p).bytes.toString());
const guard = (p, expected) => {
  if (!/^[a-f0-9]{64}$/.test(expected ?? '') || hash(p) !== expected)
    throw Error('Exact raw preimage guard failed: ' + p);
};
const parse = p => {
  const parts=splitFrontmatter(read(p).bytes.toString());
  return {...parts, fm:yaml.parse(parts.fm)};
};
const source = id => {
  if (!sourceCache.has(id)) {
    const p='items/'+id+'.md', parsed=parse(p);
    if(parsed.fm.id !== id) throw Error('Source identity mismatch: '+id);
    sourceCache.set(id,{path:p,...parsed});
  }
  return sourceCache.get(id);
};
const parts = pointer => {
  if (!pointer.startsWith('/')) throw Error('Invalid JSON pointer');
  return pointer.slice(1).split('/').map(x=>x.replaceAll('~1','/').replaceAll('~0','~'));
};
const location = (doc,pointer) => {
  const keys=parts(pointer),key=keys.pop();
  const parent=keys.reduce((v,k)=>v?.[k],doc);
  if(!parent || typeof parent !== 'object') throw Error('Missing pointer parent '+pointer);
  return {parent,key,present:Object.hasOwn(parent,key),value:parent[key]};
};
const diff = (a,b,p='') => {
  if(same(a,b)) return [];
  if(a===null || b===null || typeof a!=='object' || typeof b!=='object' ||
      Array.isArray(a)!==Array.isArray(b)) return [p];
  return [...new Set([...Object.keys(a),...Object.keys(b)])].flatMap(k=>
    diff(a[k],b[k],p+'/'+k.replaceAll('~','~0').replaceAll('/','~1')));
};
const index=json(indexPath),ID='pthm-qft-example-soft-coherent-counts';
if(index.run!==RUN||index.root_only!==true||index.sources_frozen!==true)throw Error('Wrong or unreleased root index');
const ledgerPath='research/defect-ledger.jsonl';let ledgerRows,originalStatement,approvedClaim,approvedDecision;
const scopedHandoff=()=>{const state=JSON.parse(fs.readFileSync('.physics-autopilot/'+RUN+'/state.json','utf8'));if(state.run!==RUN)throw Error('Wrong native run');const live=Object.entries(state.dispatches).filter(([,d])=>d.startedAt&&!d.endedAt&&['reader','alpha','beta'].includes(d.role)&&(d.covers??[]).some(x=>String(x)==='55'));if(live.length)throw Error('Native55 source writer live');};
const ledgerCurrency=()=>{if(fs.existsSync(ledgerPath+'.append-lock'))throw Error('Official ledger append lock active');const old=cache.get(ledgerPath),now=fs.statSync(ledgerPath);if(!old||statKeys.some(k=>old.stat[k]!==now[k]))throw Error('Concurrent canonical ledger append; serialize');};
attempt('scoped writer absence',scopedHandoff);
attempt('frozen scientific source',()=>{
 guard(index.release.path,index.release.raw_sha256);const release=json(index.release.path);if(release.run!==RUN||release.released!==true||release.source_frozen!==true||release.public_interface_changed!==false||!same(release.source_guard,index.source))throw Error('Scientific release mismatch');
 const g=index.source;if(g.path!=='items/'+ID+'.md')throw Error('Source path identity mismatch');guard(g.path,g.after_sha256);guard(g.before_archive,g.before_sha256);
 const old=read(g.before_archive).bytes.toString(),current=read(g.path).bytes.toString(),anchor='fixed positive adjacent-ray distance';if(old.split(anchor).length!==2||old.replace(anchor,()=> 'fixed positive squared adjacent-ray distance')!==current)throw Error('Source differs beyond exact approved7.1 label');
 const before=splitFrontmatter(old),after=source(ID);if(before.fm!==splitFrontmatter(current).fm||after.fm.status!=='draft')throw Error('Public frontmatter/model/empirical qualifier change');originalStatement=sourceSectionText(after.body,'Statement').trim();if(originalStatement!==sourceSectionText(before.body,'Statement').trim())throw Error('Public Statement changed');
});
attempt('owning source inventory',()=>{guard(index.owning_manifest.path,index.owning_manifest.raw_sha256);const pages=json(index.owning_manifest.path);const hits=pages.flatMap(p=>(p.items??[]).filter(i=>i.id===ID));if(hits.length!==1||hits[0].statement!==originalStatement)throw Error('Manifest55 current public mirror mismatch');});
attempt('exact owner partials',()=>{guard(index.contract_proposal.path,index.contract_proposal.raw_sha256);const partial=json(index.contract_proposal.path).by_path['research/'+RUN+'-batch-55.proof-contracts.json'].contracts[ID];if(Object.keys(partial).length!==1||!partial.derivations)throw Error('Only approved derivation correction allowed');approvedClaim=partial.derivations.find(d=>d.step==='7.1').claim;guard(index.decision_proposal.path,index.decision_proposal.raw_sha256);approvedDecision=json(index.decision_proposal.path).decision;});
attempt('official canonical fixed row',()=>{if(fs.existsSync(ledgerPath+'.append-lock'))throw Error('Ledger lock active');ledgerRows=read(ledgerPath).bytes.toString().split('\n').filter(Boolean).map(x=>JSON.parse(x));const expected=index.ledger_expected_row,found=ledgerRows.filter(x=>x.defect_id===expected.defect_id);if(found.length!==1||!same(found[0],expected)||ledgerRows.some(x=>x.supersedes?.includes(expected.defect_id))||expected.subject!==ID||expected.run!==RUN||expected.disposition!=='fixed'||expected.severity!=='nonfatal'||expected.caught_by_role!=='owner')throw Error('Exact active official soft55 row missing');ledgerCurrency();});
const expectedPaths=new Map([['research/'+RUN+'-batch-55.proof-contracts.json','contracts'],['research/'+RUN+'-alpha-batch-55-3a-decisions.json','decisions'],['research/plan-spec.json','plan']]);
for(const target of index.targets??[])attempt('target '+target.path,()=>{
 if(expectedPaths.get(target.path)!==target.kind||target.ops.length!==1||staged.has(target.path))throw Error('Unexpected soft55 target/field inventory');guard(target.path,target.before_raw_sha256);guard(target.before_archive,target.before_raw_sha256);if(!read(target.path).bytes.equals(read(target.before_archive).bytes))throw Error('Exact shared archive mismatch');const original=json(target.path),next=structuredClone(original),op=target.ops[0],keys=parts(op.pointer),slot=location(next,op.pointer);if(!slot.present||!same(slot.value,op.before))throw Error('Exact shared field before mismatch');
 if(target.kind==='contracts'){
  if(keys.length!==5||keys[0]!=='contracts'||keys[1]!==ID||keys[2]!=='derivations'||keys[4]!=='claim'||!original.scope?.includes(ID)||original.contracts[ID].derivations[keys[3]].step!=='7.1'||op.after!==approvedClaim)throw Error('Only exact owner7.1 claim correction allowed');const actual=numberedProofSteps(source(ID).body).find(x=>x.id==='7.1');if(!actual||actual.claim!==op.after)throw Error('Proposed claim not actual final proof7.1');
 }else if(target.kind==='plan'){
  if(keys.length!==5||keys[0]!=='pages'||keys[2]!=='items'||keys[4]!=='statement'||op.id!==ID||original.pages[keys[1]].id!==op.page||slot.parent.id!==ID||op.after!==originalStatement)throw Error('Only exact current existing soft55 Statement mirror allowed');
 }else{
  if(op.pointer!=='/decisions'||original.run!==RUN||original.group!=='batch-55'||!same(op.after,original.decisions.concat(approvedDecision))||original.decisions.some(x=>x.obligation===approvedDecision.obligation))throw Error('Native55 history must be unchanged and one exact supplemental decision appended');const d=approvedDecision;if(d.route!=='gate'||d.verdict!=='confirmed_nonfatal'||d.id!==ID||d.repair_confidence!==1||!same(d.defect_ids,[index.ledger_expected_row.defect_id])||!d.obligation.startsWith('gate:'))throw Error('Actual same-subject supplemental route mismatch');
 }
 slot.parent[slot.key]=structuredClone(op.after);if(diff(original,next).some(p=>p!==op.pointer&&!p.startsWith(op.pointer+'/')))throw Error('Unapproved field changed');if(target.kind==='contracts'){const a=original.contracts[ID],z=next.contracts[ID];if(!same(a.finite_checks,z.finite_checks)||!same(a.finite_smoke,z.finite_smoke)||!same(a.boundaries,z.boundaries)||!same(a.citations,z.citations)||!same(a.risk_review,z.risk_review))throw Error('Manual/history/case/citation fields changed');}
 staged.set(target.path,Buffer.from(JSON.stringify(next,null,2)+'\n'));
});
if(index.targets?.length!==3)problem('Expected contract, supplemental55 decision and existing Plan mirror targets');
for(const[p,r]of cache) attempt('input currency '+p,()=>{
  const now=fs.statSync(p); if(statKeys.some(k=>now[k]!==r.stat[k])) throw Error('Input changed during preparation');
});
attempt('serialized ledger currency',ledgerCurrency);
attempt('scoped handoff currency',scopedHandoff);
const stamp=new Date().toISOString().replace(/[:.]/g,'-'),out=BASE+'/executions/'+stamp;
fs.mkdirSync(out,{recursive:true});
const report={run:RUN,index:indexPath,index_raw_sha256:hash(indexPath),at:new Date().toISOString(),errors,
  writes:[...staged].map(([p,b])=>({path:p,before_raw_sha256:hash(p),after_raw_sha256:sha(b)})),
  actual_cached_source_reads:sourceCache.size,shared_writes:false,source_writes:false,
  ledger_writes:false,ledger_view_writes:false,numeric_levels_certified:false,gate_acceptance:false};
fs.writeFileSync(out+'/proposal-report.json',JSON.stringify(report,null,2)+'\n');
if(errors.length) { console.error(JSON.stringify({status:'refused-before-writes',report:out+'/proposal-report.json',errors:errors.length})); process.exitCode=1; }
else if(!apply) console.log(JSON.stringify({status:'dry-run',report:out+'/proposal-report.json'}));
else {
  const pending=[],applied=[];
  try {
    for(const[p,b]of staged) {
      const archive=out+'/'+p.replaceAll('/','__')+'.before',tmp=p+'.rpm-adopt-'+process.pid+'.tmp';
      fs.writeFileSync(archive,read(p).bytes,{flag:'wx'}); fs.writeFileSync(tmp,b,{flag:'wx'});
      pending.push({path:p,tmp,archive});
    }
    for(const[p,r]of cache) { const now=fs.statSync(p); if(statKeys.some(k=>now[k]!==r.stat[k])) throw Error('Input changed before commit '+p); }
    ledgerCurrency(); scopedHandoff();
    for(const p of pending) {
      ledgerCurrency(); scopedHandoff();
      if(!fs.readFileSync(p.path).equals(read(p.path).bytes)) throw Error('Target changed before atomic commit '+p.path);
      fs.renameSync(p.tmp,p.path); applied.push(p);
    }
    ledgerCurrency(); scopedHandoff();
    report.shared_writes=true; report.status='applied';
    fs.writeFileSync(out+'/receipt.json',JSON.stringify(report,null,2)+'\n');
    console.log(JSON.stringify({status:'applied',writes:pending.length,receipt:out+'/receipt.json'}));
  } catch(e) {
    const recovery=[];
    for(const p of applied.reverse()) try {
      const current=fs.readFileSync(p.path);
      if(!current.equals(staged.get(p.path))) { recovery.push({path:p.path,archive:p.archive,error:'Concurrent edit preserved; manual recovery required'}); continue; }
      const tmp=p.path+'.rpm-rollback-'+process.pid+'.tmp';
      fs.writeFileSync(tmp,read(p.path).bytes,{flag:'wx'});
      if(!fs.readFileSync(p.path).equals(staged.get(p.path))) {
        fs.unlinkSync(tmp); recovery.push({path:p.path,archive:p.archive,error:'Concurrent edit preserved during rollback staging; manual recovery required'}); continue;
      }
      fs.renameSync(tmp,p.path);
    } catch(x) { recovery.push({path:p.path,archive:p.archive,error:x.message}); }
    for(const p of pending) if(fs.existsSync(p.tmp)) fs.unlinkSync(p.tmp);
    fs.writeFileSync(out+'/rollback.json',JSON.stringify({error:e.message,manual_recovery:recovery},null,2)+'\n');
    throw e;
  }
}
