// Root-only, exact metadata adoption. The author has not executed this helper.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {createRequire} from 'node:module';
import {splitFrontmatter, sourceSectionText, sectionText, numberedProofSteps, SOURCE_SECTIONS} from '../../tools/physics-support/facts-block.mjs';

const RUN = 'physics-td-qft-rpm-62-2026-10-14';
const BASE = 'research/' + RUN + '-owner-stage3-qft43-44-metadata-adoption-proposal';
const args = process.argv.slice(2);
const indexPath = args[args.indexOf('--index') + 1];
const apply = args.includes('--apply');
if (!args.includes('--index') || !indexPath ||
    apply === args.includes('--dry-run') ||
    apply && (!args.includes('--affected-carriers-drained') || !args.includes('--science-owners-released')))
  throw Error('ROOT: --index PATH --dry-run OR --apply --affected-carriers-drained --science-owners-released');
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
  if (typeof p !== 'string' || path.isAbsolute(p) || (p.split('/').includes('..')&&!/^\.\.\/items\/[a-zA-Z0-9-]+\.md$/.test(p)))
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
if(index.run!==RUN||index.root_only!==true||index.sources_frozen!==true||index.decision_ledger_state_excluded!==true)throw Error('Wrong or unreleased metadata-only index');
const sourceIDs=new Set(['lem-qft-free-domain-observables','lem-qft-photon-covariance-spectrum']),ownedIDs=new Set(['lem-qft-free-domain-observables','lem-qft-photon-covariance-spectrum','lem-qft-photon-local-field-strength','pthm-qft-photon-physical-properties','pthm-qft-free-observable-domain-limits']);
const affected=new Set(['43','44','52','58']);if(!same([...affected].sort(),[...index.affected_batches].sort())||!same([...ownedIDs].sort(),[...index.approved_contract_ids].sort()))throw Error('Actual approved ownership scope mismatch');
const scopedHandoff=()=>{const state=JSON.parse(fs.readFileSync('.physics-autopilot/'+RUN+'/state.json','utf8'));if(state.run!==RUN)throw Error('Wrong native run');const live=Object.entries(state.dispatches).filter(([,d])=>d.startedAt&&!d.endedAt&&['reader','alpha','beta'].includes(d.role)&&(d.covers??[]).some(x=>affected.has(String(x))));if(live.length)throw Error('Affected native source writer live: '+live.map(([k])=>k).join(', '));};
attempt('scoped writer release',scopedHandoff);
for(const p of index.scientific_receipts??[])attempt('exact scientific proposal '+p.path,()=>guard(p.path,p.raw_sha256));
let partial,mirrorProposal,science;
attempt('complete original-owner release',()=>{science=json(index.release_path);partial=json(index.contract_proposal);mirrorProposal=json(index.mirror_proposal);if(science.run!==RUN||science.released!==true||science.source_frozen!==true||science.source_count!==2||science.old_current_consumer_union!==18||science.consumer_source_edits!==0||science.contract_subjects!==5||science.proof_step_ids_preserved!==true||!same(science.source_guards,index.sources.map(({final_archive,...g})=>g)))throw Error('Scientific source/consumer handoff incomplete');if(!same(Object.values(partial.by_path).flatMap(x=>Object.keys(x.contracts)).sort(),[...ownedIDs].sort()))throw Error('Exact partial ownership mismatch');});
attempt('exact retained-source binding amendment',()=>{
 const receipt=json(index.binding_amendment),old=json(index.original_contract_proposal);
 if(receipt.run!==RUN||receipt.original_frozen_packet_restored!==true||receipt.original!==index.original_contract_proposal||receipt.revised!==index.contract_proposal||receipt.only_metadata_fields.length!==2)throw Error('Wrong binding-only amendment receipt');
 const p44='research/'+RUN+'-batch-44.proof-contracts.json',p52='research/'+RUN+'-batch-52.proof-contracts.json';
 const ds=old.by_path[p44].contracts['lem-qft-photon-covariance-spectrum'].derivations,cs=old.by_path[p52].contracts['pthm-qft-photon-physical-properties'].citations;
 const di=ds.findIndex(x=>x.step==='2.1'),ci=cs.findIndex(x=>x.fact==='F2'&&x.source==='def-qft-framework-units');if(di<0||ci<0)throw Error('Exact two amendment bindings absent');
 const escape=x=>x.replaceAll('~','~0').replaceAll('/','~1');const allowed=[`/by_path/${escape(p44)}/contracts/lem-qft-photon-covariance-spectrum/derivations/${di}`,`/by_path/${escape(p52)}/contracts/pthm-qft-photon-physical-properties/citations/${ci}/quote`];
 if(diff(old,partial).some(p=>!allowed.some(t=>p===t||p.startsWith(t+'/'))))throw Error('Amendment changed beyond exact retained2.1 and frameworkF2 binding');
});
for(const g of index.sources??[])attempt('released source '+g.id,()=>{if(!sourceIDs.has(g.id)||g.path!=='items/'+g.id+'.md')throw Error('Released source identity mismatch');guard(g.path,g.final_raw_sha256);guard(g.final_archive,g.final_raw_sha256);guard(g.before_archive,g.before_raw_sha256);if(!read(g.path).bytes.equals(read(g.final_archive).bytes))throw Error('Released final source archive mismatch');const old=yaml.parse(splitFrontmatter(read(g.before_archive).bytes.toString()).fm),now=source(g.id).fm;if(now.status!=='draft')throw Error('Non-draft source');for(const k of new Set([...Object.keys(old),...Object.keys(now)]))if(!['deps','dependency_roles'].includes(k)&&!same(old[k],now[k]))throw Error('Protected public/empirical/provenance frontmatter changed '+k);});
for(const g of index.consumer_snapshots??[])attempt('unchanged actual consumer '+g.id,()=>{if(!ownedIDs.has(g.id)||sourceIDs.has(g.id)||g.path!=='items/'+g.id+'.md'||!read(g.path).bytes.equals(read(g.snapshot).bytes))throw Error('Consumer source changed beyond released no-edits handoff');});
const inventory=new Map();for(const g of index.inventory_guards??[])attempt('canonical owning inventory '+g.path,()=>{guard(g.path,g.raw_sha256);const batch=g.path.match(/-batch-(\d+)\.pages\.json$/)?.[1];if(!affected.has(batch))throw Error('Unapproved inventory');for(const pg of json(g.path))for(const item of pg.items??[]){if(!item?.id)throw Error('Noncanonical manifest inventory');if(ownedIDs.has(item.id)){if(inventory.has(item.id))throw Error('Duplicate owning item');inventory.set(item.id,{batch,page:pg.id});}}});
if(inventory.size!==5)problem('Exact five owning source/consumer items missing');
const norm=x=>String(x??'').replace(/\s+/g,' ').trim();
const provider=id=>{const p=index.provider_paths[id];if(!p||![`items/${id}.md`,`../items/${id}.md`].includes(p))throw Error('Unapproved exact provider path '+id);const b=splitFrontmatter(read(p).bytes.toString());const fm=yaml.parse(b.fm);if(fm.id!==id)throw Error('Provider identity mismatch '+id);return b.body;};
const checkMirrors=(m)=>{const approved=mirrorProposal?.mirrors.find(x=>x.id===m.id);if(!sourceIDs.has(m.id)||!approved)throw Error('Unapproved mirror source');const s=source(m.id);for(const[k,v]of Object.entries(approved.fields)){if(!['statement','proof','deps','dependency_roles'].includes(k))throw Error('Unapproved mirror field '+k);const actual=k==='statement'?sourceSectionText(s.body,'Statement').trim():k==='proof'?sectionText(s.body,'Proof').trim():s.fm[k];if(!same(actual,v))throw Error('Mirror proposal differs from exact current source '+m.id+'/'+k);}return approved;};
for(const target of index.targets??[])attempt('metadata target '+target.path,()=>{
 const original=json(target.path),next=structuredClone(original),touched=[];
 if(target.kind==='plan_projection'){
  if(target.path!=='research/plan-spec.json'||target.mirrors.length!==2)throw Error('Only existing two released Plan item mirrors permitted');
  // Current Plan is read late; disjoint ROOT changes are preserved. No global raw preimage waiver for owned fields.
  for(const m of target.mirrors){const approved=checkMirrors(m),home=inventory.get(m.id),hits=next.pages.filter(pg=>pg.id===m.page);if(!home||home.page!==m.page||hits.length!==1)throw Error('Existing owning Plan page identity mismatch');const pg=hits[0],pi=next.pages.indexOf(pg);for(const[k,g]of Object.entries(m.page_projection)){if(!['id','order','requires'].includes(k)||Object.hasOwn(pg,k)!==g.present||g.present&&!same(pg[k],g.value))throw Error('Owning Plan context/order projection changed '+m.page+'/'+k);}const items=pg.items.filter(x=>x.id===m.id);if(items.length!==1)throw Error('Existing Plan source item missing');const item=items[0],j=pg.items.indexOf(item);for(const[field,g]of Object.entries(m.fields)){if(Object.hasOwn(item,field)!==g.before_present||g.before_present&&!same(item[field],g.before)||!same(g.after,approved.fields[field]))throw Error('Owned Plan field projection mismatch '+m.id+'/'+field);item[field]=structuredClone(g.after);touched.push(`/pages/${pi}/items/${j}/${field}`);}}
 }else{
  guard(target.path,target.before_raw_sha256);guard(target.before_archive,target.before_raw_sha256);if(!read(target.path).bytes.equals(read(target.before_archive).bytes))throw Error('Exact target archive differs');
  for(const op of target.ops??[]){const k=parts(op.pointer),slot=location(next,op.pointer);if(slot.present!==op.before_present||op.before_present&&!same(slot.value,op.before))throw Error('Exact owned field preimage mismatch '+op.pointer);
   if(target.kind==='contracts'){const id=k[1],field=k[2],home=inventory.get(id);if(k.length!==3||k[0]!=='contracts'||!ownedIDs.has(id)||target.path!==`research/${RUN}-batch-${home?.batch}.proof-contracts.json`||!original.scope?.includes(id)||!['citations','derivations','boundaries'].includes(field))throw Error('Wrong owning contract/field');const owner=partial?.by_path[target.path]?.contracts[id]?.[field];if(owner===undefined||!same(op.after,owner))throw Error('After field differs from exact released owner partial');}
   else if(target.kind==='manifest'){if(!['43','44'].some(b=>target.path===`research/${RUN}-batch-${b}.pages.json`)||k.length!==4||k[1]!=='items'||k[3]!==op.field)throw Error('Unapproved mirror manifest path');const approved=checkMirrors(op),pg=original[k[0]],item=pg.items[k[2]];if(pg.id!==op.page||item.id!==op.id||inventory.get(op.id)?.page!==pg.id||!same(op.after,approved.fields[op.field]))throw Error('Exact existing MF mirror identity/after mismatch');}
   else throw Error('Decisions/ledger/page/state/extra targets excluded');
   slot.parent[slot.key]=structuredClone(op.after);touched.push(op.pointer);
  }
 }
 if(diff(original,next).some(p=>!touched.some(t=>p===t||p.startsWith(t+'/'))))throw Error('Unproposed field changed');
 if(target.kind==='contracts')for(const id of target.subjects){const old=original.contracts[id],after=next.contracts[id],fields=partial.by_path[target.path].contracts[id],body=splitFrontmatter(read('items/'+id+'.md').bytes.toString()).body,steps=new Map(numberedProofSteps(body).map(x=>[x.id,x]));if(!same(old.finite_checks,after.finite_checks)||!same(old.finite_smoke,after.finite_smoke)||!same(old.risk_review,after.risk_review))throw Error('Manual finite/risk history altered');
  for(const d of fields.derivations??[]){const actual=steps.get(String(d.step));if(!actual||norm(actual.claim)!==norm(d.claim)||!same(actual.inputs,d.inputs))throw Error('Derivation not actual current numbered source step '+id+'/'+d.step);const prior=old.derivations.find(x=>x.step===d.step);if(prior)for(const[k,v]of Object.entries(prior))if(!['claim','inputs'].includes(k)&&!same(v,d[k]))throw Error('Unproposed derivation manual field changed');}
  for(const c of fields.citations??[]){if(!SOURCE_SECTIONS.has(c.source_section)||!c.quote?.trim()||!norm(sourceSectionText(provider(c.source),c.source_section)).includes(norm(c.quote)))throw Error('Quote not actual legal current provider clause '+id+'/'+c.fact);if(!c.uses?.length||c.uses.some(x=>!steps.has(String(x))))throw Error('Citation does not bind actual numbered uses');const matches=old.citations.filter(x=>x.fact===c.fact&&x.source===c.source&&x.source_section===c.source_section);if(matches.length>1)throw Error('Ambiguous composite citation identity');if(matches[0])for(const[k,v]of Object.entries(matches[0]))if(!['quote','uses'].includes(k)&&!same(c[k],v))throw Error('Unknown citation/history field changed');}
  if(fields.boundaries){if(old.boundaries.length!==after.boundaries.length)throw Error('Boundary inventory changed');for(let i=0;i<after.boundaries.length;i++){const a=old.boundaries[i],z=after.boundaries[i],scope=z.case_scope,g=index.sources.find(x=>x.id===id);if(a.case!==z.case||!g||!SOURCE_SECTIONS.has(scope?.source_section)||scope.current_raw_sha256!==g.final_raw_sha256||!sourceSectionText(body,scope.source_section).includes(scope.source_excerpt))throw Error('Current legal actual boundary binding mismatch');for(const[k,v]of Object.entries(a))if(!['status','reason','evidence','case_scope'].includes(k)&&!same(z[k],v))throw Error('Unknown boundary/manual field altered');for(const[k,v]of Object.entries(a.case_scope??{}))if(!['source_section','source_excerpt','current_raw_sha256','scope_only_not_proof_acceptance'].includes(k)&&!same(scope[k],v))throw Error('Unknown case_scope field altered');}}
 }
 if(!same(original,next))staged.set(target.path,Buffer.from(JSON.stringify(next,null,2)+'\n'));
});
if(index.targets?.length!==7)problem('Exact four contracts/two manifests/one projected Plan targets required');
for(const[p,r]of cache) attempt('input currency '+p,()=>{
  const now=fs.statSync(p); if(statKeys.some(k=>now[k]!==r.stat[k])) throw Error('Input changed during preparation');
});
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
  const inputCurrency=()=>{
    const committed=new Set(applied.map(x=>x.path));
    for(const[p,r]of cache){if(committed.has(p)){if(!fs.readFileSync(p).equals(staged.get(p)))throw Error('Concurrent edit to committed metadata '+p);}else{const now=fs.statSync(p);if(statKeys.some(k=>now[k]!==r.stat[k]))throw Error('Source/provider/target input changed during atomic adoption '+p);}}
    scopedHandoff();
  };
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
