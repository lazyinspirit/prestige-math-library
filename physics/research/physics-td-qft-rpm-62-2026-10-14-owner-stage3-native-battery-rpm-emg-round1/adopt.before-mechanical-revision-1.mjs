// Root-only, exact metadata adoption. The author has not executed this helper.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {splitFrontmatter, sourceSectionText} from '../../tools/physics-support/facts-block.mjs';

const RUN = 'physics-td-qft-rpm-62-2026-10-14';
const BASE = 'research/' + RUN + '-owner-stage3-native-battery-rpm-emg-round1';
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
if(index.run!==RUN||index.round!==1||index.root_only!==true||index.science_sources_frozen!==true||index.source_writes!==false)throw Error('Wrong or unreleased root-only actual battery packet');
const affected=new Set(['22','24','25','26','27','28','30','31','32','33']);if(!same([...affected].sort(),[...index.affected_batches].sort()))throw Error('Wrong native scope');
const scopedHandoff=()=>{const state=JSON.parse(fs.readFileSync('.physics-autopilot/'+RUN+'/state.json','utf8'));if(state.run!==RUN)throw Error('Wrong native run');const live=Object.entries(state.dispatches).filter(([,d])=>d.startedAt&&!d.endedAt&&['reader','alpha','beta'].includes(d.role)&&(d.covers??[]).some(b=>affected.has(String(b))));if(live.length)throw Error('Actual target source writer live');};
attempt('scoped native writer absence',scopedHandoff);
for(const g of index.approved_proposal_byte_guards)attempt('exact frozen owner proposal '+g.path,()=>{if(!read(g.path).bytes.equals(read(g.frozen_byte_archive).bytes))throw Error('Original owner proposal bytes changed');});
for(const g of index.immutable_native_evidence_byte_guards??[])attempt('exact immutable native evidence '+g.path,()=>{if(!read(g.path).bytes.equals(read(g.frozen_byte_archive).bytes))throw Error('Original independent review/finding scope changed');});
const partial=json(index.contract_proposal),routing=json(index.routing_proposal);
if(partial.run!==RUN||routing.run!==RUN||!same(routing.ledger_append_rows,index.ledger_expected_rows))throw Error('Owner packet identity/ledger projection mismatch');
for(const[id,g]of Object.entries(index.source_byte_guards))attempt('exact current source '+id,()=>{if(g.path!=='items/'+id+'.md'||!read(g.path).bytes.equals(read(g.current_byte_archive).bytes))throw Error('Current source changed beyond frozen scientific completion');const s=source(id);if(s.fm.id!==id)throw Error('Source identity changed');});
const inventory=new Map();for(const g of index.inventory_byte_guards)attempt('actual canonical ownership '+g.path,()=>{if(!affected.has(g.batch)||g.path!==`research/${RUN}-batch-${g.batch}.pages.json`||!read(g.path).bytes.equals(read(g.before_byte_archive).bytes))throw Error('Canonical inventory changed');for(const pg of json(g.path))for(const item of pg.items??[]){if(!item.id)throw Error('Noncanonical manifest item inventory');if(inventory.has(item.id))throw Error('Duplicate owning manifest');inventory.set(item.id,{batch:g.batch,page:pg.id});}});
const ledgerPath='research/defect-ledger.jsonl';let ledgerRows;
const ledgerCurrency=()=>{if(fs.existsSync(ledgerPath+'.append-lock'))throw Error('Canonical append lock active');const old=cache.get(ledgerPath),now=fs.statSync(ledgerPath);if(!old||statKeys.some(k=>now[k]!==old.stat[k]))throw Error('Concurrent ledger append; serialize');};
attempt('official exact canonical append first',()=>{if(fs.existsSync(ledgerPath+'.append-lock'))throw Error('Official ledger append lock active');ledgerRows=read(ledgerPath).bytes.toString().split('\n').filter(Boolean).map(x=>JSON.parse(x));if(index.ledger_expected_rows.length!==5)throw Error('Exactly five actual classified ledger rows required');for(const expected of index.ledger_expected_rows){const found=ledgerRows.filter(x=>x.defect_id===expected.defect_id);if(found.length!==1||!same(found[0],expected)||ledgerRows.some(x=>x.supersedes?.includes(expected.defect_id)))throw Error('Exact active canonical classified row missing '+expected.defect_id);if(expected.run!==RUN||expected.caught_by_role!=='owner'||expected.caught_at_stage!=='3a-adjudicate')throw Error('Wrong canonical owner classification');if(expected.supersedes?.length){const old=ledgerRows.find(x=>x.defect_id===expected.supersedes[0]);if(!old||old.subject!==expected.subject||expected.subject!=='thm-rpm-h-second-class-dirac-bracket'||expected.disposition!=='false-positive')throw Error('No cross-subject supersession or fabricated lineage permitted');}else if(expected.disposition!=='fixed')throw Error('Actual native repair must remain fixed');}ledgerCurrency();});
const contractIDs=new Set(Object.values(partial.by_path).flatMap(x=>Object.keys(x.contracts))),decisionPaths=new Set(routing.documents.map(x=>x.path));
for(const target of index.targets)attempt('target '+target.path,()=>{
 if(!read(target.path).bytes.equals(read(target.before_byte_archive).bytes))throw Error('Exact current shared byte preimage changed');const original=json(target.path),next=structuredClone(original),touched=[];
 if(!['contracts','decisions'].includes(target.kind)||target.kind==='contracts'&&!Object.hasOwn(partial.by_path,target.path)||target.kind==='decisions'&&!decisionPaths.has(target.path))throw Error('Unapproved target document');
 for(const op of target.ops){const k=parts(op.pointer),slot=location(next,op.pointer);if(slot.present!==op.before_present||op.before_present&&!same(slot.value,op.before))throw Error('Exact field before differs');
  if(target.kind==='contracts'){if(k.length!==3||k[0]!=='contracts'||k[1]!==op.id||k[2]!==op.field||!contractIDs.has(op.id)||!original.scope?.includes(op.id)||target.path!==`research/${RUN}-batch-${inventory.get(op.id)?.batch}.proof-contracts.json`||!['citations','boundaries'].includes(op.field)||!op.after_present||!same(op.after,partial.by_path[target.path].contracts[op.id][op.field]))throw Error('Wrong owning contract or owner-approved partial');}
  else if(target.kind==='decisions'){const d=original.decisions[k[1]],owner=routing.documents.find(x=>x.path===target.path).updates.find(x=>x.obligation===op.obligation);if(k.length!==3||k[0]!=='decisions'||k[2]!==op.field||d.obligation!==op.obligation||d.id!==op.id||owner?.append||!same(d,owner.before)||!['verdict','change_kind','owner_resolution','defect_ids','evidence','same_defect_as','same_defect_evidence'].includes(op.field)||op.after_present!==Object.hasOwn(owner.after,op.field)||op.after_present&&!same(op.after,owner.after[op.field]))throw Error('Actual decision update diverges from exact original-owner classification');}
  else throw Error('All source/manifest/plan/state/findings/ledger targets excluded');
  if(op.after_present)slot.parent[slot.key]=structuredClone(op.after);else delete slot.parent[slot.key];touched.push(op.pointer);
 }
 if(target.kind==='decisions')for(const d of target.appends??[]){const owner=routing.documents.find(x=>x.path===target.path).updates.find(x=>x.obligation===d.obligation);if(!owner?.append||!same(owner.after,d)||next.decisions.some(x=>x.obligation===d.obligation)||d.route!=='gate'||d.obligation!=='gate:'+d.defect_ids?.[0]||!original.run||original.run!==RUN||original.group!==`batch-${inventory.get(d.id)?.batch}`)throw Error('Only exact owning supplemental gate may append');next.decisions.push(structuredClone(d));touched.push('/decisions/'+(next.decisions.length-1));}
 if(diff(original,next).some(p=>!touched.some(t=>p===t||p.startsWith(t+'/'))))throw Error('Unproposed native/manual field changed');
 if(target.kind==='contracts')for(const id of target.subjects){const a=original.contracts[id],z=next.contracts[id];for(const k of Object.keys(a))if(!Object.hasOwn(partial.by_path[target.path].contracts[id],k)&&!same(a[k],z[k]))throw Error('Unproposed/manual/risk/finite contract field changed');if(!same(a.finite_checks,z.finite_checks)||!same(a.finite_smoke,z.finite_smoke))throw Error('Manual worksheet changed');
  if(!same(a.citations,z.citations)){if(a.citations.length!==z.citations.length)throw Error('Citation inventory changed');for(let i=0;i<z.citations.length;i++){const old=a.citations[i],c=z.citations[i];if(!same(Object.fromEntries(Object.entries(old).filter(([k])=>!['quote','reviewed'].includes(k))),Object.fromEntries(Object.entries(c).filter(([k])=>!['quote','reviewed'].includes(k)))))throw Error('Unapproved source/uses/manual citation field changed');if(old.quote!==c.quote){if(!['thm-rpm-h-constraint-consistency','pthm-rpm-constant-magnetic-helix'].includes(c.source)||!sourceSectionText(source(c.source).body,c.source_section).includes(c.quote)||!c.quote?.trim())throw Error('Changed quote not exact current used supplier public clause');}if(!same(old.reviewed,c.reviewed)&&(id!=='lem-rpm-curved-charge-action-variation'||c.fact!=='F18'||c.source!=='cor-archimedean-reciprocal'||c.reviewed?.upheld!==true||c.reviewed.reason.length<80))throw Error('Unapproved citation uphold');}}
  if(!same(a.boundaries,z.boundaries)){if(a.boundaries.length!==z.boundaries.length)throw Error('Boundary inventory changed');for(let i=0;i<z.boundaries.length;i++){const old=a.boundaries[i],c=z.boundaries[i];if(old.case!==c.case||!same(old.case_scope,c.case_scope))throw Error('Existing actual source case binding changed');for(const[k,v]of Object.entries(old))if(!['status','reason','evidence','reviewed'].includes(k)&&!same(c[k],v))throw Error('Unknown/manual boundary field changed');if(id==='lem-emg-observer-field-decomposition'&&['iff-forward','iff-reverse'].includes(c.case)){if(c.status!=='checked'||!same(c.owner_previous_disposition,{status:old.status,reason:old.reason})||!c.evidence.includes('Statement'))throw Error('Actual musical equivalence discharge/history absent');}else if(c.status!==old.status||c.reviewed?.upheld!==true||c.reviewed.reason.length<80)throw Error('Case-specific approved heuristic review mismatch');}}
 }
 if(target.kind==='decisions'){const ledger=new Map((ledgerRows??[]).map(x=>[x.defect_id,x]));for(const d of next.decisions){const owned=routing.documents.find(x=>x.path===target.path).updates.some(x=>x.obligation===d.obligation);if(!owned)continue;if(d.verdict==='reviewed_no_defect'){if(d.change_kind!=='audit_enrichment'||d.defect_ids.length)throw Error('Clarification classification must retain zero fault count');}else for(const id of d.defect_ids){const row=ledger.get(id);if(!row||row.subject!==d.id||row.run!==RUN||d.verdict==='false_positive'&&row.disposition!=='false-positive'||d.verdict!=='false_positive'&&!['fixed','narrowed','dropped','nonfatal-recorded'].includes(row.disposition))throw Error('Actual same-subject decision ledger binding mismatch');}}}
 if(target.kind==='decisions'&&original.group==='batch-27'){
  const scope=json('research/'+RUN+'-step3-scope-27.json');for(const [ob,primary]of [['refuter:27:1','reader:27:2'],['refuter:27:5','reader:27:1']]){const d=next.decisions.find(x=>x.obligation===ob),p=next.decisions.find(x=>x.obligation===primary),a=scope.reader_findings.find(x=>x.obligation===primary),z=scope.refuter_findings.find(x=>x.obligation===ob);if(!a||!z||!d||!p||d.same_defect_as!==primary||d.verdict!==p.verdict||!same(d.defect_ids,p.defect_ids)||a.id!==z.id||a.defect!==z.defect||a.observed_sha256!==z.observed_sha256||!/^[a-f0-9]{64}$/.test(a.observed_sha256)||d.same_defect_evidence.length<80)throw Error('Exact native same-observed-carrier alias guard failed');}
 }
 if(staged.has(target.path))throw Error('Duplicate shared target');staged.set(target.path,Buffer.from(JSON.stringify(next,null,2)+'\n'));
});
if(index.targets.length!==13)problem('Exact six contract/seven decision targets required');
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
  const inputCurrency=()=>{const owned=new Set(applied.map(x=>x.path));for(const[p,r]of cache){if(owned.has(p)){if(!fs.readFileSync(p).equals(staged.get(p)))throw Error('Concurrent edit to applied metadata '+p);}else{const now=fs.statSync(p);if(statKeys.some(k=>now[k]!==r.stat[k]))throw Error('Source/provider/target changed during atomic adoption '+p);}}ledgerCurrency();scopedHandoff();};
  try {
    for(const[p,b]of staged) {
      const archive=out+'/'+p.replaceAll('/','__')+'.before',tmp=p+'.rpm-adopt-'+process.pid+'.tmp';
      fs.writeFileSync(archive,read(p).bytes,{flag:'wx'}); fs.writeFileSync(tmp,b,{flag:'wx'});
      pending.push({path:p,tmp,archive});
    }
    inputCurrency();
    for(const p of pending) {
      inputCurrency();
      if(!fs.readFileSync(p.path).equals(read(p.path).bytes)) throw Error('Target changed before atomic commit '+p.path);
      fs.renameSync(p.tmp,p.path); applied.push(p);
    }
    inputCurrency();
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
