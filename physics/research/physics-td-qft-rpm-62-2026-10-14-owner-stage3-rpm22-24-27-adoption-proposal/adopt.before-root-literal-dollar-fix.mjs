// Root-only, exact metadata adoption. The author has not executed this helper.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {splitFrontmatter, sourceSectionText} from '../../tools/physics-support/facts-block.mjs';

const RUN = 'physics-td-qft-rpm-62-2026-10-14';
const BASE = 'research/' + RUN + '-owner-stage3-rpm22-24-27-adoption-proposal';
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
  if (typeof p !== 'string' || path.isAbsolute(p) || p.split('/').includes('..'))
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
const index=json(indexPath);
if(index.run !== RUN || index.root_only !== true || index.sources_frozen !== true)
  throw Error('Wrong run or unreleased index');
attempt('science release',()=>{
  guard(index.release.path,index.release.raw_sha256);
  const r=json(index.release.path);
  if(r.run!==RUN || !r.sources_released || !r.sources_frozen || r.round!==1 ||
     r.consumer_dispositions?.union_items!==86 || r.consumer_dispositions?.consumer_source_edits!==0)
    throw Error('Scientific release assertions missing');
  guard(index.scientific_consumer_evidence.path,index.scientific_consumer_evidence.raw_sha256);
  const e=json(index.scientific_consumer_evidence.path);
  if(e.worldline_consumers?.length!==82 || e.bmt_consumers?.length!==4)
    throw Error('Focused science evidence scope mismatch');
});
const affectedBatches=new Set(['22','23','24','25','27','31']);
if(!same([...(index.affected_native_batches??[])].sort(),[...affectedBatches].sort()))
  problem('Affected native writer scope mismatch');
const scopedHandoff=()=>{
  // State is deliberately uncached/unhashed: unrelated workers may continue.
  const state=JSON.parse(fs.readFileSync('.physics-autopilot/'+RUN+'/state.json','utf8'));
  if(state.run!==RUN) throw Error('Wrong native run');
  const live=Object.entries(state.dispatches).filter(([,d])=>d.startedAt&&!d.endedAt&&
    ['alpha','reader','beta'].includes(d.role)&&(d.covers??[]).some(b=>affectedBatches.has(String(b))));
  if(live.length) throw Error('Affected native source writers live: '+live.map(([k])=>k).join(', '));
};
attempt('scoped writer barrier',scopedHandoff);
const approvedSources=new Set(['def-rpm-spacetime-observer-and-worldline','post-rpm-bmt-dipole-model']);
if(index.unchanged_reviewed_consumers?.length!==4 ||
   new Set(index.unchanged_reviewed_consumers.map(g=>g.id)).size!==4)
  problem('Exactly four independently completed current consumer proof snapshots are required');
let edits;
attempt('exact scientific edits',()=>{
  guard(index.source_edit_proposal.path,index.source_edit_proposal.raw_sha256);
  edits=new Map(json(index.source_edit_proposal.path).edits.map(e=>[e.id,e]));
  if(index.sources.length!==2 || index.sources.some(g=>!approvedSources.has(g.id)))
    throw Error('Only the two released scientific sources are permitted');
});
for(const g of index.sources ?? []) attempt('source '+g.id,()=>{
  if(g.path!=='items/'+g.id+'.md') throw Error('Source path mismatch');
  guard(g.path,g.final_raw_sha256); guard(g.before_archive,g.before_raw_sha256);
  const old=read(g.before_archive).bytes.toString(), edit=edits?.get(g.id);
  if(!edit) throw Error('No exact approved source edit');
  const anchor=edit.before ?? edit.insert_after;
  if(old.split(anchor).length!==2) throw Error('Approved source anchor not unique');
  const expected=edit.before ? old.replace(edit.before,edit.after)
    : old.replace(edit.insert_after,edit.insert_after+'\n\n'+edit.text);
  if(expected!==read(g.path).bytes.toString()) throw Error('Scientific source changed beyond approved edit');
  const before=splitFrontmatter(old), current=source(g.id);
  if(before.fm!==splitFrontmatter(expected).fm || !same(yaml.parse(before.fm),current.fm))
    throw Error('Unapproved source frontmatter/physical qualification change');
  if(current.fm.status!=='draft') throw Error('Repair source not local draft');
});
for(const g of index.unchanged_reviewed_consumers ?? []) attempt('reviewed consumer '+g.id,()=>{
  if(!['pthm-rpm-bmt-constraints','pthm-rpm-rest-spin-and-size-bound',
       'ex-rpm-bmt-fw-and-g-two','ex-rpm-rest-spin-and-size-bound'].includes(g.id))
    throw Error('Unapproved consumer proof scope');
  guard(g.snapshot,g.snapshot_raw_sha256);
  if(g.path!=='items/'+g.id+'.md' || !read(g.path).bytes.equals(read(g.snapshot).bytes))
    throw Error('Reviewed consumer source currency changed');
  source(g.id);
});
const ids=new Set(index.approved_contract_ids), obligations=new Set(index.approved_decision_obligations);
const owningMF=new Map();
let adoptedLedgerRows;
const ledgerPath='research/defect-ledger.jsonl';
const ledgerCurrency=()=>{
  if(fs.existsSync(ledgerPath+'.append-lock')) throw Error('Official ledger append lock active');
  const saved=cache.get(ledgerPath), now=fs.statSync(ledgerPath);
  if(!saved||statKeys.some(k=>now[k]!==saved.stat[k]))
    throw Error('Canonical ledger changed during adoption; serialized append required');
};
attempt('official canonical ledger successors',()=>{
  if(fs.existsSync(ledgerPath+'.append-lock')) throw Error('Official ledger append lock active');
  adoptedLedgerRows=read(ledgerPath).bytes.toString().split('\n').filter(Boolean).map(x=>JSON.parse(x));
  if(index.ledger_expected_rows?.length!==2) throw Error('Two exact official successor rows required');
  for(const expected of index.ledger_expected_rows) {
    const found=adoptedLedgerRows.filter(x=>x.defect_id===expected.defect_id);
    if(found.length!==1||!same(found[0],expected)||
       adoptedLedgerRows.some(x=>x.supersedes?.includes(expected.defect_id)))
      throw Error('Exact canonical successor must already be active: '+expected.defect_id);
    const old=adoptedLedgerRows.find(x=>x.defect_id===expected.supersedes?.[0]);
    if(!old||old.run!==RUN||expected.run!==RUN||old.subject!==expected.subject||
       old.severity!==expected.severity||expected.disposition!=='fixed'||expected.repair_confidence!==1)
      throw Error('Canonical same-subject repair lineage mismatch');
  }
  ledgerCurrency();
});
for(const target of index.targets ?? []) if(target.kind==='contracts') attempt('owning MF '+target.path,()=>{
  const mfPath=target.path.replace('.proof-contracts.json','.pages.json');
  const rows=json(mfPath);
  if(!Array.isArray(rows)) throw Error('Noncanonical page manifest');
  for(const page of rows) for(const row of page.items ?? []) {
    if(typeof row!=='object'||!row.id) throw Error('Noncanonical item inventory');
    if(ids.has(row.id)) {
      if(owningMF.has(row.id)) throw Error('Duplicate approved contract owner');
      owningMF.set(row.id,{path:target.path,page:page.id});
    }
  }
});
if(ids.size!==10 || owningMF.size!==10 || obligations.size!==8)
  problem('Exact approved contract/decision scope changed');
const allowedTarget = target => {
  if(target.kind==='plan') return target.path==='research/plan-spec.json';
  if(target.kind==='manifest') return [22,24].some(b=>target.path==='research/'+RUN+'-batch-'+b+'.pages.json');
  if(target.kind==='decisions') return target.path==='research/'+RUN+'-alpha-batch-27-3a-decisions.json';
  if(target.kind==='contracts') return [22,23,24,25,27,31].some(b=>target.path==='research/'+RUN+'-batch-'+b+'.proof-contracts.json');
  return false;
};
for(const target of index.targets ?? []) attempt('target '+target.path,()=>{
  if(!allowedTarget(target)) throw Error('Unapproved shared target');
  guard(target.path,target.before_raw_sha256); guard(target.before_archive,target.before_raw_sha256);
  if(!read(target.path).bytes.equals(read(target.before_archive).bytes)) throw Error('Archive is not exact current target');
  if(staged.has(target.path)) throw Error('Duplicate shared target');
  const original=json(target.path), next=structuredClone(original), touched=new Set();
  for(const op of target.ops ?? []) {
    if(touched.has(op.pointer)) throw Error('Duplicate field patch'); touched.add(op.pointer);
    const keys=parts(op.pointer);
    if(target.kind==='contracts') {
      const id=keys[1], field=keys[2];
      if(keys[0]!=='contracts' || !ids.has(id) || owningMF.get(id)?.path!==target.path ||
         !original.scope?.includes(id)) throw Error('Contract owning scope mismatch');
      const riskConsumer=index.unchanged_reviewed_consumers.some(g=>g.id===id);
      const legal=field==='citations' && keys.length===5 && keys[4]==='quote'
        || field==='boundaries' && keys[4]==='case_scope' && id==='def-rpm-spacetime-observer-and-worldline'
        || field==='risk_review' && riskConsumer && keys.length===4 && ['status','reviewer','notes'].includes(keys[3])
        || field==='physics_review' && id==='post-rpm-bmt-dipole-model' &&
           keys.length===5 && keys[3]==='formulation' && keys[4]==='evidence';
      if(!legal) throw Error('Unapproved contract field '+op.pointer);
    } else if(target.kind==='manifest'||target.kind==='plan') {
      if(keys.at(-1)!=='statement' || !approvedSources.has(op.id)) throw Error('Only released public-section mirrors permitted');
      const item=location(original,op.pointer).parent;
      if(item.id!==op.id) throw Error('Existing mirror item identity mismatch');
      const page=target.kind==='manifest' ? original[keys[0]] : original.pages[keys[1]];
      if(page.id!==op.page) throw Error('Existing mirror page identity mismatch');
      const section=op.id.startsWith('def-')?'Definition':'Postulate';
      if(op.after!==sourceSectionText(source(op.id).body,section).trim()) throw Error('Mirror is not exact released public section');
    } else if(target.kind==='decisions') {
      const d=original.decisions[keys[1]];
      if(keys[0]!=='decisions'||keys.length!==3||!['verdict','repair_confidence','defect_ids','evidence','change_kind'].includes(keys[2]) ||
         !obligations.has(op.obligation)||d.obligation!==op.obligation||d.id!==op.id)
        throw Error('Unapproved actual27 decision field');
      if(original.run!==RUN||original.group!=='batch-27') throw Error('Decision document identity mismatch');
    }
    const slot=location(next,op.pointer);
    if(slot.present!==op.before_present || op.before_present&&!same(slot.value,op.before))
      throw Error('Field preimage mismatch '+op.pointer);
    if(op.after_present) slot.parent[slot.key]=structuredClone(op.after); else delete slot.parent[slot.key];
  }
  const changes=diff(original,next);
  if(changes.some(p=>![...touched].some(t=>p===t||p.startsWith(t+'/')))) throw Error('Unproposed field changed');
  if(target.kind==='contracts') for(const id of target.subjects) {
    const before=original.contracts[id], after=next.contracts[id];
    if(!same(before.finite_checks,after.finite_checks) || !same(before.finite_smoke,after.finite_smoke))
      throw Error('Manual finite worksheet changed');
    if(!same(before.citations,after.citations)) for(let i=0;i<after.citations.length;i++) {
      const a=before.citations[i],b=after.citations[i]; if(a.quote===b.quote) continue;
      if(!approvedSources.has(b.source) || !same({...a,quote:b.quote},b) ||
         !sourceSectionText(source(b.source).body,b.source_section).includes(b.quote))
        throw Error('Updated citation is not an exact legal provider quote');
    }
    if(id==='def-rpm-spacetime-observer-and-worldline') for(let i=0;i<after.boundaries.length;i++) {
      const a=before.boundaries[i],b=after.boundaries[i],scope=b.case_scope;
      if(!same({...a,case_scope:scope},b) || scope.source_section!=='Definition' ||
         scope.current_raw_sha256!==hash(source(id).path) || scope.scope_only_not_proof_acceptance!==true ||
         !sourceSectionText(source(id).body,'Definition').includes(scope.source_excerpt))
        throw Error('Boundary case flags/manual fields or actual binding changed improperly');
      const editableScope=new Set(['source_section','source_excerpt','current_raw_sha256','scope_only_not_proof_acceptance']);
      for(const[k,v]of Object.entries(a.case_scope??{}))
        if(!editableScope.has(k)&&!same(scope[k],v)) throw Error('Unknown/manual case_scope field changed');
      if(a.case_scope?.current_raw_sha256) {
        const sourceGuard=index.sources.find(g=>g.id===id);
        if(![sourceGuard.before_raw_sha256,sourceGuard.final_raw_sha256].includes(a.case_scope.current_raw_sha256))
          throw Error('Unexpected prior boundary SHA: exact currency repair required');
      }
    }
    if(after.risk_review?.status!==before.risk_review?.status &&
       (after.risk_review.status!=='complete'||before.risk_review.status!=='open'||
        !after.risk_review.notes.startsWith(before.risk_review.notes)))
      throw Error('Risk completion lost original history or altered an unrelated status');
  }
  if(!same(original,next)) staged.set(target.path,Buffer.from(JSON.stringify(next,null,2)+'\n'));
});
attempt('final actual27 legal decision routes',()=>{
  if(!adoptedLedgerRows) throw Error('No exact ledger successor plan');
  const ledger=new Map(adoptedLedgerRows.map(x=>[x.defect_id,x]));
  const decisionPath='research/'+RUN+'-alpha-batch-27-3a-decisions.json';
  const final=staged.has(decisionPath)?JSON.parse(staged.get(decisionPath).toString()):json(decisionPath);
  const seen=new Map();
  for(const d of final.decisions.filter(x=>obligations.has(x.obligation))) {
    if(d.repair_confidence!==1) throw Error('Current owned proof/repair completion not explicit');
    if(d.route==='touched') {
      if(d.verdict==='reviewed_no_defect') {
        if(d.change_kind!=='metadata'||d.defect_ids.length) throw Error('Metadata-only touched classification mismatch');
      } else if(d.verdict!=='accepted_repair'||!d.defect_ids.length) throw Error('Genuine native touched repair not retained');
    } else if(!['confirmed_fatal','confirmed_nonfatal'].includes(d.verdict)) throw Error('Unresolved supplier decision');
    for(const id of d.defect_ids) {
      const row=ledger.get(id);
      if(!row||row.run!==RUN||row.subject!==d.id||row.caught_at_stage!=='3a-adjudicate'||row.disposition!=='fixed')
        throw Error('Actual decision has no same-subject fixed row');
      if(d.verdict==='confirmed_fatal'&&row.severity!=='fatal'||
         d.verdict==='confirmed_nonfatal'&&row.severity==='fatal') throw Error('Decision severity mismatch');
      const prior=seen.get(id);
      if(prior&&!([prior.route,d.route].includes('reader')&&[prior.route,d.route].includes('flagged')&&prior.id===d.id))
        throw Error('Ledger row owned by incompatible actual decisions');
      if(!prior) seen.set(id,d);
    }
  }
});
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
