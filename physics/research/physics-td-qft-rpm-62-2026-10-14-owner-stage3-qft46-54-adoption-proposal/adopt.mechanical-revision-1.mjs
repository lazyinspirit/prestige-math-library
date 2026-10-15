// Root-only, exact metadata adoption. The author has not executed this helper.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {splitFrontmatter, sourceSectionText} from '../../tools/physics-support/facts-block.mjs';

const RUN = 'physics-td-qft-rpm-62-2026-10-14';
const BASE = 'research/' + RUN + '-owner-stage3-qft46-54-adoption-proposal';
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
const index=json(indexPath);
if(index.run !== RUN || index.root_only !== true || index.sources_frozen !== true)
  throw Error('Wrong run or unreleased index');
attempt('science release',()=>{
  guard(index.release.path,index.release.raw_sha256);
  const r=json(index.release.path);
  if(r.run!==RUN || !r.sources_released || !r.sources_frozen || r.round!==1 ||
     r.old_current_union!==9 || r.consumer_count!==7 || r.source_count!==3)
    throw Error('Scientific release assertions missing');
  guard(index.scientific_consumer_evidence.path,index.scientific_consumer_evidence.raw_sha256);
  const e=json(index.scientific_consumer_evidence.path);
  if(e.affected_consumers?.length!==7 || e.old_current_union_total!==9 || e.current_guards?.length!==9)
    throw Error('Focused science evidence scope mismatch');
  for(const g of e.current_guards){if(g.path!=='items/'+g.id+'.md')throw Error('Reviewed consumer identity mismatch');guard(g.path,g.current_raw_sha256);}
});
const affectedBatches=new Set(['46','54']);
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
const approvedSources=new Set(['cor-qft-example-scalar-tree-coefficients','lem-qft-example-dirac-pauli-square','ex-qftmath-x05']);
let edits;
attempt('exact scientific edits',()=>{
  guard(index.source_edit_proposal.path,index.source_edit_proposal.raw_sha256);
  edits=new Map(json(index.source_edit_proposal.path).sources.map(e=>[e.id,e]));
  if(index.sources.length!==3 || index.sources.some(g=>!approvedSources.has(g.id))) throw Error('Only three released science sources allowed');
});
for(const g of index.sources??[]) attempt('source '+g.id,()=>{
  if(g.path!=='items/'+g.id+'.md') throw Error('Source identity mismatch');
  guard(g.path,g.final_raw_sha256);guard(g.before_archive,g.before_raw_sha256);
  const old=read(g.before_archive).bytes.toString(),edit=edits?.get(g.id);if(!edit)throw Error('Missing exact science edit');
  let expected=old;
  for(const replacement of edit.replacements){if(expected.split(replacement.before).length!==2)throw Error('Nonunique exact source anchor');expected=expected.replace(replacement.before,()=>replacement.after);}
  if(expected!==read(g.path).bytes.toString())throw Error('Source differs from exact released science proposal');
  const oldFM=yaml.parse(splitFrontmatter(old).fm),current=source(g.id);
  for(const key of new Set([...Object.keys(oldFM),...Object.keys(current.fm)]))if(!['deps','dependency_roles'].includes(key)&&!same(oldFM[key],current.fm[key]))throw Error('Unapproved frontmatter/public/empirical qualifier change '+key);
  if(current.fm.status!=='draft'||!same(oldFM.physical_scope,current.fm.physical_scope))throw Error('Draft/physical scope changed');
});
attempt('Countable Choice exact provider',()=>guard(index.countable_choice_provider.path,index.countable_choice_provider.raw_sha256));
const ids=new Set(index.approved_contract_ids), obligations=new Set(index.approved_decision_obligations);
const owningMF=new Map();
let approvedPartials,approvedRouting,approvedMetadata;
attempt('exact released shared proposals',()=>{guard(index.partial_contract_proposal.path,index.partial_contract_proposal.raw_sha256);approvedPartials=json(index.partial_contract_proposal.path);guard(index.routing_proposal.path,index.routing_proposal.raw_sha256);approvedRouting=json(index.routing_proposal.path);guard(index.metadata_proposal.path,index.metadata_proposal.raw_sha256);approvedMetadata=json(index.metadata_proposal.path);guard(index.ledger_role_normalization.path,index.ledger_role_normalization.raw_sha256);const normalization=json(index.ledger_role_normalization.path),expected=structuredClone(approvedRouting.ledger_append_rows);const row=expected.find(x=>x.defect_id===normalization.row_id);if(normalization.run!==RUN||normalization.before.caught_by_role!=='codex-owner'||normalization.after.caught_by_role!=='owner'||!row||row.subject!=='ex-qftmath-x05'||row.caught_by_role!=='codex-owner')throw Error('Unapproved ledger role normalization');row.caught_by_role='owner';if(!same(expected,index.ledger_expected_rows))throw Error('Ledger proposal diverges beyond exact enum normalization');});
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
  if(index.ledger_expected_rows?.length!==4) throw Error('Four exact official repair rows required');
  for(const expected of index.ledger_expected_rows) {
    const found=adoptedLedgerRows.filter(x=>x.defect_id===expected.defect_id);
    if(found.length!==1||!same(found[0],expected)||
       adoptedLedgerRows.some(x=>x.supersedes?.includes(expected.defect_id)))
      throw Error('Exact canonical successor must already be active: '+expected.defect_id);
    if(expected.run!==RUN||expected.disposition!=='fixed'||expected.repair_confidence!==1)throw Error('Canonical fixed row mismatch');
    if(expected.supersedes?.length){const old=adoptedLedgerRows.find(x=>x.defect_id===expected.supersedes[0]);if(!old||old.run!==RUN||old.subject!==expected.subject||old.severity!==expected.severity)throw Error('Same-subject repair lineage mismatch');}
    else if(expected.subject!=='ex-qftmath-x05'||expected.batch!=='46')throw Error('Only genuine affected math example finding may be new');
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
if(ids.size!==7 || owningMF.size!==7 || obligations.size!==6 || !same([...ids].sort(),Object.values(approvedPartials?.by_path??{}).flatMap(x=>Object.keys(x.contracts)).sort()) || !same([...obligations].sort(),(approvedRouting?.decision_documents??[]).flatMap(x=>x.updates.map(y=>y.obligation)).sort()))
  problem('Exact approved contract/decision scope changed');
const allowedTarget = target => {
  if(target.kind==='plan') return target.path==='research/plan-spec.json';
  if(target.kind==='manifest') return [46].some(b=>target.path==='research/'+RUN+'-batch-'+b+'.pages.json');
  if(target.kind==='decisions') return [46,54].some(b=>target.path==='research/'+RUN+'-alpha-batch-'+b+'-3a-decisions.json');
  if(target.kind==='contracts') return [46,54].some(b=>target.path==='research/'+RUN+'-batch-'+b+'.proof-contracts.json');
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
      const legal=approvedSources.has(id)&&keys.length===3&&['citations','derivations','boundaries'].includes(field)
        || field==='citations'&&keys.length===5&&keys[4]==='quote';
      if(!legal)throw Error('Unapproved contract field '+op.pointer);
      const ownerField=approvedPartials?.by_path?.[target.path]?.contracts?.[id]?.[field];
      const ownerAfter=keys.length===3?ownerField:ownerField?.[Number(keys[3])]?.quote;
      if(ownerAfter===undefined||!op.after_present||!same(ownerAfter,op.after))throw Error('Contract after-value differs from released exact owner proposal');
    } else if(target.kind==='manifest'||target.kind==='plan') {
      if(!['statement','deps','dependency_roles'].includes(keys.at(-1)) || !approvedSources.has(op.id)) throw Error('Only released public-section mirrors permitted');
      const item=location(original,op.pointer).parent;
      if(item.id!==op.id) throw Error('Existing mirror item identity mismatch');
      const page=target.kind==='manifest' ? original[keys[0]] : original.pages[keys[1]];
      if(page.id!==op.page) throw Error('Existing mirror page identity mismatch');
      const s=source(op.id),field=keys.at(-1),section=s.fm.kind==='example'?'Example':'Statement';
      const actual=field==='statement'?sourceSectionText(s.body,section).trim():s.fm[field];
      if(!same(op.after,actual))throw Error('Mirror not exact released source metadata/publicsection');
      const ownerMirror=approvedMetadata?.documents?.find(x=>x.path===target.path)?.updates?.find(x=>x.id===op.id&&x.page===op.page);
      if(!ownerMirror||!same(op.after,ownerMirror.fields[field]))throw Error('Mirror after-value differs from exact released metadata proposal');
    } else if(target.kind==='decisions') {
      const d=original.decisions[keys[1]];
      if(keys[0]!=='decisions'||keys.length!==3||!['verdict','repair_confidence','defect_ids','evidence','change_kind'].includes(keys[2]) ||
         !obligations.has(op.obligation)||d.obligation!==op.obligation||d.id!==op.id)
        throw Error('Unapproved actual46/54 decision field');
      if(original.run!==RUN||!['batch-46','batch-54'].includes(original.group)) throw Error('Decision document identity mismatch');
      const owner=approvedRouting?.decision_documents?.find(x=>x.path===target.path)?.updates?.find(x=>x.obligation===op.obligation);
      if(!owner||owner.id!==op.id||op.after_present!==Object.hasOwn(owner.after,keys[2])||(op.after_present&&!same(op.after,owner.after[keys[2]])))throw Error('Decision after-value differs from released exact owner classification');
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
    if(!same(before.citations,after.citations))for(const c of after.citations){
      const matches=before.citations.filter(x=>x.fact===c.fact&&x.source===c.source&&x.source_section===c.source_section);if(matches.length>1)throw Error('Ambiguous exact citation identity');const old=matches[0];
      if(old&&same(old,c))continue;
      if(!approvedSources.has(c.source)&&c.source!=='def-countable-choice')throw Error('Unapproved updated citation provider');
      let body;if(c.source==='def-countable-choice')body=splitFrontmatter(read(index.countable_choice_provider.path).bytes.toString()).body;else body=source(c.source).body;
      if(!sourceSectionText(body,c.source_section).includes(c.quote)||!c.quote?.trim())throw Error('Updated citation not exact legal provider quote');
      if(old&&!same({...old,quote:c.quote},c))throw Error('Existing citation metadata unexpectedly changed');
      if(!old&&(c.fact!=='A1'||c.source!=='def-countable-choice'||!same(c.uses,['1.1'])))throw Error('Only exact actual A1 setup citation may be added');
    }
    if(!same(before.boundaries,after.boundaries)){
      if(!approvedSources.has(id)||before.boundaries.length!==after.boundaries.length)throw Error('Unapproved boundary scope');
      const s=source(id),section=s.fm.kind==='example'?'Example':'Statement';
      for(let i=0;i<after.boundaries.length;i++){
        const a=before.boundaries[i],b=after.boundaries[i],scope=b.case_scope;
        if(!same({...a,case_scope:scope},b)||scope.source_section!==section||scope.current_raw_sha256!==hash(s.path)||scope.scope_only_not_proof_acceptance!==true||!sourceSectionText(s.body,section).includes(scope.source_excerpt))throw Error('Case flags/manual fields or exact source binding changed improperly');
        const editable=new Set(['source_section','source_excerpt','current_raw_sha256','scope_only_not_proof_acceptance']);for(const[k,v]of Object.entries(a.case_scope??{}))if(!editable.has(k)&&!same(scope[k],v))throw Error('Unknown/manual case_scope field changed');
        if(a.case_scope?.current_raw_sha256){const g=index.sources.find(x=>x.id===id);if(![g.before_raw_sha256,g.final_raw_sha256].includes(a.case_scope.current_raw_sha256))throw Error('Unknown old boundary SHA requires owner correction');}
      }
    }
  }
  if(!same(original,next)) staged.set(target.path,Buffer.from(JSON.stringify(next,null,2)+'\n'));
});
attempt('final actual46/54 legal decision routes',()=>{
  if(!adoptedLedgerRows)throw Error('Missing canonical ledger rows');
  const ledger=new Map(adoptedLedgerRows.map(x=>[x.defect_id,x])),seen=new Map();
  for(const n of [46,54]){
    const p='research/'+RUN+'-alpha-batch-'+n+'-3a-decisions.json',final=staged.has(p)?JSON.parse(staged.get(p).toString()):json(p);
    for(const d of final.decisions.filter(x=>obligations.has(x.obligation))){
      if(d.repair_confidence!==1)throw Error('Actual repair confidence missing');
      if(d.route==='touched'){if(d.id!=='ex-qftmath-x05'||d.verdict!=='amended_repair'||!d.defect_ids.length)throw Error('Only genuine repaired math example touched change is approved');}
      else if(!['confirmed_fatal','confirmed_nonfatal'].includes(d.verdict))throw Error('Unresolved actual supplier decision');
      for(const id of d.defect_ids){const row=ledger.get(id);if(!row||row.run!==RUN||row.subject!==d.id||row.caught_at_stage!=='3a-adjudicate'||row.disposition!=='fixed')throw Error('No exact same-subject actual fixed row');if(d.verdict==='confirmed_fatal'&&row.severity!=='fatal'||d.verdict==='confirmed_nonfatal'&&row.severity==='fatal')throw Error('Severity mismatch');const prior=seen.get(id);if(prior&&!([prior.route,d.route].includes('reader')&&[prior.route,d.route].includes('flagged')&&prior.id===d.id))throw Error('Ledger row duplicate owned');if(!prior)seen.set(id,d);}
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
