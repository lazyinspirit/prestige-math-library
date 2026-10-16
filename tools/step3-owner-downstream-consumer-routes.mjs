// Exact routing only: never source edit permission, reader observation or acceptance.
import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync, lstatSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { split, yaml } from './pathway-lib.mjs';
import { draftOwnerMatcher } from './run-draft-ownership.mjs';
import { requiredPageHash as hash } from './step3-owner-required-page-routes.mjs';
export const downstreamConsumerHash = hash;
const policy = 'owner-step3-downstream-consumer-route-v1';
const sha = x => createHash('sha256').update(x).digest('hex');
const assert = (x,m) => { if (!x) throw Error(`downstream consumer route: ${m}`); };
const safe = x => /^[a-zA-Z0-9_-]+$/.test(String(x ?? ''));
const id = x => /^[a-z][a-z0-9-]*$/.test(String(x ?? ''));
const batchId = x => typeof x === 'string' && /^[1-9]\d*$/.test(x);
function bytes(root,p) {
  assert(typeof p === 'string' && !isAbsolute(p) && !p.includes('\\'), 'invalid relative path');
  const full=resolve(root,p),rel=relative(resolve(root),full);
  assert(rel && !rel.startsWith('..') && !isAbsolute(rel),'escaping path');
  let cursor=resolve(root);for(const part of rel.split('/')) {cursor=resolve(cursor,part);assert(!lstatSync(cursor).isSymbolicLink(),'symlink path');}
  assert(lstatSync(full).isFile(),'nonregular carrier');return readFileSync(full);
}
function ref(root,r,expected) {
  assert(r && /^[a-f0-9]{64}$/.test(r.sha256 ?? '') && (!expected || r.path===expected),'invalid reference');
  assert(r.path.startsWith('research/'),'historical evidence outside research');
  const b=bytes(root,r.path);assert(sha(b)===r.sha256,`changed ${r.path}`);return b;
}
const front = b => yaml().parse(split(String(b)).fm);
const rows = doc => Array.isArray(doc) ? doc : doc.pages ?? [];
const inventory = doc => rows(doc).flatMap(p=>(p.items ?? []).map(x=>typeof x==='string'?x:x.id));
function snapshot(root,run,batch,label,r) {
  const s=JSON.parse(ref(root,r,`research/${run}-step3-hash-${batch}-${label}.json`));
  assert(s.version===2 && s.run===run && String(s.batch)===batch && s.label===label && Array.isArray(s.manifest),'wrong native snapshot');return s;
}
function currentOwnership(root,run,e) {
  const homes=new Map();
  for(const name of readdirSync(resolve(root,'research'))) {
    const match=name.match(new RegExp(`^${run}-batch-([1-9]\\d*)\\.pages\\.json$`));if(!match)continue;
    for(const item of inventory(JSON.parse(bytes(root,`research/${name}`))))homes.set(item,[...(homes.get(item) ?? []),match[1]]);
  }
  const owned=draftOwnerMatcher(root,run);
  for(const [item,batch] of [[e.supplier_id,e.batch],[e.consumer_id,e.consumer_batch]]) {
    assert(homes.get(item)?.length===1 && homes.get(item)[0]===batch,'changed or ambiguous item ownership');
    const fm=front(bytes(root,`items/${item}.md`));
    assert(fm.id===item && owned(fm),'subject is not an actual current-run draft');
  }
  assert(front(bytes(root,`items/${e.consumer_id}.md`)).deps?.includes(e.supplier_id),'missing actual direct consumer-to-supplier dependency');
}
export function validateDownstreamConsumerRoute(root,run,e,binding) {
  assert(safe(run) && e.version===1 && e.policy===policy && e.run===run && e.owner_identity==='/root'
    && e.mathematical_acceptance===false && e.historical_reader_observation_bound===false
    && e.edit_permission===false,'invalid authority');
  assert(batchId(e.batch) && batchId(e.consumer_batch) && e.batch!==e.consumer_batch
    && Number.isSafeInteger(e.index) && e.index>0 && id(e.supplier_id) && id(e.consumer_id)
    && e.supplier_id!==e.consumer_id,'invalid subject');
  assert(e.routing_basis==='native-downstream-inflight-null-consumer-v1'
    && e.observation_basis==='unbound-native-reader; owner-registration capture only','invented observation');
  assert(e.reviewed===true && typeof e.reason==='string' && e.reason.trim().length>=80
    && e.coverage==='original-reader-obligation-and-target-native-refuter-alpha','missing focused review/coverage');
  const findings=JSON.parse(ref(root,e.findings,`research/${run}-reader-findings-${e.batch}.json`));
  const report=ref(root,e.report,`research/${run}-reader-${e.batch}.md`).toString();
  assert([e.batch,`${run}-batch-${e.batch}`].includes(String(findings.batch)) && Array.isArray(findings.findings),'wrong findings batch');
  const original=findings.findings[e.index-1];
  assert(original?.id===e.consumer_id && original.subject_type==='in-flight-item' && original.consumer_id===null
    && original.observed_source==null && hash(original)===e.finding_sha256,'changed original finding');
  assert(report.includes(e.supplier_id) && report.includes(e.consumer_id),'report lacks actual supplier/consumer');
  const prefix=`research/${run}-dispatch/reader-reader-${e.batch}`;
  assert(new RegExp(`^${prefix}\\.attempt-[1-9]\\d*\\.result\\.json$`).test(e.native_result?.path),'wrong native result');
  const result=JSON.parse(ref(root,e.native_result));
  assert(result.run===run && result.role==='reader' && result.label===`reader-${e.batch}` && result.ok===true
    && result.exit_code===0 && result.process_exit_code===0 && result.timed_out!==true
    && result.covers?.map(String).includes(e.batch) && Number.isFinite(Date.parse(result.ended_at))
    && Number.isFinite(Date.parse(e.at)) && Date.parse(e.at)>=Date.parse(result.ended_at),'reader did not genuinely succeed');
  assert(e.prompt?.path===e.native_result.path.replace(/\.result\.json$/,'.prompt.md')
    && String(result.prompt).endsWith('/'+e.prompt.path),'wrong native prompt');ref(root,e.prompt);
  assert(hash(JSON.parse(result.tail))===hash(findings),'native structured completion differs');
  const pre=snapshot(root,run,e.batch,'pre',e.pre_snapshot),post=snapshot(root,run,e.batch,'post',e.post_snapshot);
  const target=snapshot(root,run,e.consumer_batch,'pre',e.consumer_pre_snapshot);
  assert(pre.manifest.includes(e.supplier_id) && post.manifest.includes(e.supplier_id)
    && !pre.manifest.includes(e.consumer_id) && !post.manifest.includes(e.consumer_id)
    && target.manifest.includes(e.consumer_id),'wrong assigned/foreign snapshot subjects');
  for(const [s,item] of [[pre,e.supplier_id],[post,e.supplier_id],[target,e.consumer_id]]) {
    assert(new Set(s.manifest).size===s.manifest.length && ['item_sha256','contract_sha256','manifest_sha256']
      .every(key=>/^[a-f0-9]{64}$/.test(s.hashes?.[item]?.[key] ?? '')),'incomplete native subject carrier');
  }
  const before=ref(root,e.supplier_before),after=ref(root,e.supplier_after);
  assert(front(before).id===e.supplier_id && front(after).id===e.supplier_id
    && sha(before)===pre.hashes?.[e.supplier_id]?.item_sha256
    && sha(after)===post.hashes?.[e.supplier_id]?.item_sha256 && sha(before)!==sha(after),'assigned supplier did not actually change pre/post');
  for(const [key,batch,item] of [['manifest',e.batch,e.supplier_id],['consumer_manifest',e.consumer_batch,e.consumer_id]]) {
    const manifest=JSON.parse(ref(root,e[key],`research/${run}-batch-${batch}.pages.json`));
    assert(inventory(manifest).filter(x=>x===item).length===1,'subject absent or duplicated in assigned manifest');
  }
  // This immutable owner capture establishes the routing edge, not what the
  // reader saw. Later genuine consumer repairs use their own current carrier.
  const capture=ref(root,e.consumer_registration_source),fm=front(capture);
  assert(fm.id===e.consumer_id && fm.deps?.includes(e.supplier_id),'registration capture lacks actual dependency');
  currentOwnership(root,run,e);
  const review=ref(root,e.review).toString();
  assert([run,`reader:${e.batch}:${e.index}`,e.consumer_id,e.supplier_id,e.consumer_registration_source.sha256,
    e.supplier_before.sha256,e.supplier_after.sha256].every(x=>review.includes(x)),'review lacks exact provenance');
  return {entry:e,binding,original,obligation:`reader:${e.batch}:${e.index}`};
}
export function loadDownstreamConsumerRoutes(root,run,batch) {
  assert(safe(run) && batchId(String(batch)),'invalid routing identity');
  const p=`research/${run}-step3-owner-downstream-consumer-routes.json`;if(!existsSync(resolve(root,p)))return new Map();
  const doc=JSON.parse(bytes(root,p));assert(doc.version===1 && doc.run===run && doc.policy===policy && Array.isArray(doc.routes),'wrong registry');
  const used=new Set(),out=new Map();for(const e of doc.routes) {
    const key=`reader:${e.batch}:${e.index}`;assert(!used.has(key),'duplicate obligation');used.add(key);
    if(e.batch===String(batch))out.set(key,validateDownstreamConsumerRoute(root,run,e,{path:p,entry_sha256:hash(e)}));
  }return out;
}
export function downstreamConsumerRoute(root,run,batch,finding) {
  const route=loadDownstreamConsumerRoutes(root,run,batch).get(finding.obligation);
  assert(route && finding.id===route.original.id && finding.subject_type===route.original.subject_type
    && finding.consumer_id===route.original.consumer_id && finding.observed_source===undefined
    && hash(finding.owner_downstream_consumer_route)===hash(route.binding)
    && finding.observed_sha256===null && finding.observation_basis==='unbound' && finding.pre_sha256===undefined,'lost exact downstream route');
  return route;
}
export function downstreamConsumerClosureEvidence(root,run) {
  assert(safe(run),'invalid run');const p=`research/${run}-step3-owner-downstream-consumer-routes.json`;
  if(!existsSync(resolve(root,p)))return {};
  const raw=bytes(root,p),doc=JSON.parse(raw);
  assert(doc.version===1 && doc.run===run && doc.policy===policy && Array.isArray(doc.routes),'wrong closure registry');
  const out={[p]:sha(raw)};
  for(const e of doc.routes)for(const key of ['findings','report','native_result','prompt','pre_snapshot','post_snapshot',
    'consumer_pre_snapshot','manifest','consumer_manifest','supplier_before','supplier_after','consumer_registration_source','review']) {
    const r=e[key];ref(root,r);assert(out[r.path]===undefined || out[r.path]===r.sha256,'ambiguous historical reference');out[r.path]=r.sha256;
  }return out;
}
