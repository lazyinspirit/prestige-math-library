// Explicit required home-Alpha obligation, never dependency/observation/acceptance.
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { split, yaml } from './pathway-lib.mjs';
import { draftOwnerMatcher } from './run-draft-ownership.mjs';
export const FOREIGN_REFUTER_POLICY = 'owner-step3-required-foreign-refuter-obligation-v1';
const sha = x => createHash('sha256').update(x).digest('hex');
const canon = x => Array.isArray(x) ? x.map(canon) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k, canon(x[k])])) : x;
export const foreignRefuterHash = x => sha(JSON.stringify(canon(x)) ?? 'undefined');
const assert = (x,m) => { if (!x) throw Error(`foreign refuter route: ${m}`); };
const batch = x => typeof x === 'string' && /^[1-9]\d*$/.test(x);
const hex = x => /^[a-f0-9]{64}$/.test(x ?? '');
const registryPath = run => `research/${run}-step3-owner-foreign-refuter-routes.json`;
function bytes(root,p) {
  assert(typeof p === 'string' && !isAbsolute(p) && !p.includes('\\'), 'invalid path');
  const full=resolve(root,p), rel=relative(resolve(root),full);
  assert(rel && !rel.startsWith('..') && !isAbsolute(rel),'escaping path');
  let at=resolve(root); for(const part of rel.split('/')) {at=resolve(at,part);assert(!lstatSync(at).isSymbolicLink(),'symlink evidence');}
  assert(lstatSync(full).isFile(),'nonregular evidence');return readFileSync(full);
}
function ref(root,run,r) {
  assert(r && typeof r.path==='string' && r.path.startsWith(`research/${run}-`) && hex(r.sha256),'invalid evidence reference');
  const b=bytes(root,r.path);assert(sha(b)===r.sha256,`changed evidence ${r.path}`);return b;
}
const parse = b => JSON.parse(b.toString());
const front = b => yaml().parse(split(b.toString()).fm);
const rows = x => Array.isArray(x) ? x : x.pages ?? [];
function home(root,run,id) {
  const found=[];
  for(const name of readdirSync(resolve(root,'research'))) {
    const m=name.match(new RegExp(`^${run}-batch-([1-9]\\d*)\\.pages\\.json$`));if(!m)continue;
    const doc=parse(bytes(root,`research/${name}`));
    for(const p of rows(doc))for(const item of p.items??[])if((typeof item==='string'?item:item.id)===id)found.push({page_id:p.id,batch:m[1],path:`research/${name}`,item:typeof item==='string'?{id:item}:item});
  }
  assert(found.length===1,'ambiguous or missing current home');return found[0];
}
function authenticate(root,run,e,binding) {
  assert(e.version===1 && e.policy===FOREIGN_REFUTER_POLICY && e.owner_identity==='/root'
    && e.reviewed===true && e.mathematical_acceptance===false && e.edit_permission===false
    && e.run===run && Number.isFinite(Date.parse(e.at)) && e.historical_observation_bound===false && e.observation_basis==='unbound-native-refuter; owner-registration capture only','invalid authority');
  assert(batch(e.origin_batch) && batch(e.target_batch) && e.origin_batch!==e.target_batch
    && Number.isSafeInteger(e.index) && e.index>0 && /^[a-z][a-z0-9-]*$/.test(e.id??'')
    && typeof e.defect_id==='string' && /^[a-zA-Z0-9][a-zA-Z0-9._:-]*$/.test(e.defect_id),'invalid identity');
  assert(typeof e.reason==='string' && e.reason.trim().length>=80,'missing owner rationale');
  assert(e.original_report?.path!==`research/${run}-refute-${e.origin_batch}.json`
    && e.origin_scope?.path!==`research/${run}-step3-scope-${e.origin_batch}.json`,'original report/scope must be immutable archives');
  const report=parse(ref(root,run,e.original_report)), native=parse(ref(root,run,e.native_result));
  assert(e.native_result.path===`research/${run}-dispatch/refuter-refute-${e.origin_batch}.attempt-${native.attempt}.result.json`
    && Number.isSafeInteger(native.attempt) && native.attempt>=1 && native.run===run && native.role==='refuter'
    && native.label===`refute-${e.origin_batch}` && native.ok===true && native.exit_code===0
    && native.process_exit_code===0 && native.timed_out!==true && native.covers?.length===1
    && String(native.covers[0])===e.origin_batch && Number.isFinite(Date.parse(native.ended_at)),'not genuine successful original native attempt');
  assert(Date.parse(e.at)>=Date.parse(native.ended_at),'registration predates native completion');
  assert(e.prompt?.path===e.native_result.path.replace(/\.result\.json$/,'.prompt.md')
    && typeof native.prompt==='string' && native.prompt.endsWith('/'+e.prompt.path),'wrong native prompt');ref(root,run,e.prompt);
  assert(typeof native.tail==='string','missing native output');
  let nativeReport;try {nativeReport=JSON.parse(native.tail);}catch{}
  if(nativeReport!==undefined)assert(foreignRefuterHash(nativeReport)===foreignRefuterHash(report),'native output differs from report');
  else {const tail=native.tail.trimEnd();assert(tail.length>=256 && /"not_opened"\s*:/.test(tail) && /"flagged"\s*:/.test(tail) && ref(root,run,e.original_report).toString().trimEnd().endsWith(tail),'unauthenticated clipped output');}
  const scope=parse(ref(root,run,e.origin_scope));
  assert(scope.run===run && String(scope.batch)===e.origin_batch && scope.version===2
    && Array.isArray(scope.refuter_scope) && new Set(scope.refuter_scope).size===scope.refuter_scope.length
    && scope.refuter_scope.length>0,'wrong original scope');
  assert(String(report.batch)===e.origin_batch && Array.isArray(report.opened) && Array.isArray(report.not_opened)
    && report.not_opened.length===0 && Array.isArray(report.flagged) && new Set(report.opened).size===report.opened.length
    && scope.refuter_scope.every(id=>report.opened.includes(id)) && !scope.refuter_scope.includes(e.id)
    && report.opened.filter(id=>id===e.id).length===1,'target not genuine extra opened context');
  const original=report.flagged[e.index-1];
  assert(original?.id===e.id && foreignRefuterHash(original)===e.finding_sha256
    && foreignRefuterHash(e.finding)===e.finding_sha256,'changed original indexed finding');
  const own=home(root,run,e.id), current=bytes(root,`items/${e.id}.md`), fm=front(current);
  assert(own.batch===e.target_batch && fm.id===e.id && fm.status==='draft' && draftOwnerMatcher(root,run)(fm),'not actual unique current-run draft home');
  const before=ref(root,run,e.source_before), after=ref(root,run,e.source_after);
  assert(front(before).id===e.id && front(after).id===e.id && !before.equals(after),'source repair archive mismatch');
  const application=parse(ref(root,run,e.application));
  assert(application.run===run && application.owner_identity==='/root' && application.native_finding_unchanged===true
    && application.files?.filter(row=>row.path===`items/${e.id}.md` && row.before_sha256===e.source_before.sha256 && row.after_sha256===e.source_after.sha256).length===1,'missing actual owner source application');
  const review=parse(ref(root,run,e.owner_review));
  assert(review.run===run && review.id===e.id && review.original_obligation===`refuter:${e.origin_batch}:${e.index}`
    && review.source_before_sha256===e.source_before.sha256 && review.source_after_sha256===e.source_after.sha256
    && review.full_current_proof_read===true && review.consumer_checks_complete===true
    && Array.isArray(review.evidence_refs) && review.evidence_refs.length>0
    && review.native_acceptance_claimed===false && typeof review.evidence==='string' && review.evidence.trim().length>=80,'missing genuine focused proof/consumer evidence');
  for(const evidence of review.evidence_refs)ref(root,run,evidence);
  const archived=parse(ref(root,run,e.defect_record));
  const ledgerPath=resolve(root,'research/defect-ledger.jsonl');
  const ledger=existsSync(ledgerPath)?bytes(root,'research/defect-ledger.jsonl').toString().split(/\r?\n/).filter(Boolean).map(JSON.parse):[];
  const matches=ledger.filter(row=>row.defect_id===e.defect_id);assert(matches.length<=1,'duplicate genuine defect record');
  assert(archived.defect_id===e.defect_id && archived.run===run && archived.subject===e.id
    && archived.owner_identity==='/root' && archived.native_adjudication_claimed===false
    && archived.disposition==='open' && archived.original_obligation===`refuter:${e.origin_batch}:${e.index}`
    && archived.original_finding_sha256===e.finding_sha256
    && archived.caught_at_stage==='3a-adjudicate' && String(archived.batch)===e.target_batch
    && archived.severity===original.severity && archived.location===original.location,'not genuine pending owner defect record');
  // No native ledger row is fabricated by registration. Alpha writes its own
  // ordinary closed row; the normal gate requires it when deciding this target.
  if(matches.length)assert(['defect_id','run','subject','batch','caught_at_stage'].every(k=>foreignRefuterHash(matches[0][k])===foreignRefuterHash(archived[k])),'changed defect identity');
  const contractPath=`research/${run}-batch-${e.target_batch}.proof-contracts.json`;
  assert(parse(bytes(root,contractPath)).contracts?.[e.id],'missing current proof contract');
  return {e,binding,original,own,contractPath};
}
export function loadForeignRefuterRoutes(root,run) {
  assert(/^[a-zA-Z0-9_-]+$/.test(run),'invalid run');
  const path=registryPath(run), continuation=`research/${run}-step3-refuter-continuations.json`;
  if(!existsSync(resolve(root,path))) {
    if(existsSync(resolve(root,continuation)))assert(!(parse(bytes(root,continuation)).continuations??[]).some(e=>e.foreign_refuter_routes?.length),'missing required foreign registry');
    return [];
  }
  const raw=bytes(root,path), doc=parse(raw);
  assert(doc.version===1 && doc.run===run && doc.policy===FOREIGN_REFUTER_POLICY && doc.authorized_by==='owner'
    && typeof doc.authorization==='string' && doc.authorization.trim().length>=40 && Array.isArray(doc.routes) && doc.routes.length,'invalid registry');
  const seen=new Set(), defects=new Set();
  return doc.routes.map(e=>{
    const key=`${e.origin_batch}:${e.index}`;
    assert(!seen.has(key) && !defects.has(e.defect_id),'duplicate origin/defect');seen.add(key);defects.add(e.defect_id);
    return authenticate(root,run,e,{path,entry_sha256:foreignRefuterHash(e)});
  });
}
export function foreignRefuterObligations(root,run,targetBatch,{beforeDispatch=false}={}) {
  const routes=loadForeignRefuterRoutes(root,run);
  if(beforeDispatch)for(const {e} of routes.filter(x=>x.e.target_batch===String(targetBatch)))
    assert(sha(bytes(root,`items/${e.id}.md`))===e.source_after.sha256,
      "source changed before initial home Alpha dispatch; fresh owner review/registration required");
  return routes.filter(({e})=>e.target_batch===String(targetBatch)).map(({e,binding,original})=>({
    obligation:`gate:${e.defect_id}`,id:e.id,batch:e.target_batch,route:'gate',defect_id:e.defect_id,
    historical_delta_unknown:true,original_obligation:`refuter:${e.origin_batch}:${e.index}`,
    original_finding:original,owner_foreign_refuter_route:{...binding,evidence:e},
  }));
}
export function foreignRefuterCarrier(root,run,target) {
  const actual=foreignRefuterObligations(root,run,target.batch).find(x=>x.obligation===target.obligation);
  assert(actual && foreignRefuterHash(actual)===foreignRefuterHash(target),'changed required obligation');
  const {e,binding,own,contractPath}=loadForeignRefuterRoutes(root,run).find(x=>x.e.defect_id===target.defect_id);
  return {item_sha256:sha(bytes(root,`items/${e.id}.md`)),contract_sha256:foreignRefuterHash(parse(bytes(root,contractPath)).contracts[e.id]),
    manifest_sha256:foreignRefuterHash({...own.item,__step4_page_id:own.page_id}),owner_foreign_refuter_route:binding};
}
export function validateForeignRefuterContinuation(root,run,entry,old) {
  const routes=loadForeignRefuterRoutes(root,run), refs=entry.foreign_refuter_routes??[];
  assert(Array.isArray(refs) && new Set(refs.map(foreignRefuterHash)).size===refs.length,'duplicate continuation binding');
  const scope=parse(bytes(root,`research/${run}-step3-scope-${entry.unit}.json`));
  const required=(old.flagged??[]).map((finding,i)=>({finding,index:i+1})).filter(({finding})=>!scope.refuter_scope.includes(finding.id));
  assert(refs.length===required.length,'foreign original flags must remain mandatory');
  for(const {finding,index} of required) {
    const route=routes.find(x=>x.e.origin_batch===String(entry.unit) && x.e.index===index);
    assert(route && route.e.finding_sha256===foreignRefuterHash(finding) && route.e.original_report.sha256===entry.report_sha256
      && refs.some(x=>foreignRefuterHash(x)===foreignRefuterHash(route.binding)),'unregistered original foreign flag');
  }
}
export function foreignRefuterClosureEvidence(root,run) {
  const path=registryPath(run);
  if(!existsSync(resolve(root,path))) {loadForeignRefuterRoutes(root,run);return {};}
  const closedPath=resolve(root,`research/${run}-step3-closure.json`);
  const closed=existsSync(closedPath)?parse(bytes(root,`research/${run}-step3-closure.json`)):null;
  // Frozen closure evidence authenticates history; later stage source changes
  // do not claim new Step3 observation or invalidate the preserved original.
  const routes=closed?.version===3 && closed.run===run && closed.status==='closed' && closed.basis==='dependency-ordered-step3a'
    ? parse(bytes(root,path)).routes.map(e=>({e})) : loadForeignRefuterRoutes(root,run);
  if(!routes.length)return {};
  const result={[registryPath(run)]:sha(bytes(root,registryPath(run)))};
  for(const {e} of routes)for(const key of ['original_report','native_result','prompt','origin_scope','source_before','source_after','owner_review','defect_record','application']){ref(root,run,e[key]);result[e[key].path]=e[key].sha256;}
  for(const {e} of routes)for(const evidence of parse(ref(root,run,e.owner_review)).evidence_refs){ref(root,run,evidence);result[evidence.path]=evidence.sha256;}
  return result;
}
