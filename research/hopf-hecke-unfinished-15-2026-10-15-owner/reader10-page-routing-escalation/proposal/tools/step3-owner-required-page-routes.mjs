// Exact owner routing of a native finding about a published required page.
// The original finding's subject label remains historical; this grants no
// frontier ownership, edit permission, reader observation or acceptance.
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, lstatSync, existsSync } from 'node:fs';
import { resolve, relative, isAbsolute } from 'node:path';
import { split, yaml } from './pathway-lib.mjs';
import { itemHashGuard } from './item-hash.mjs';
const sha = x => createHash('sha256').update(x).digest('hex');
const canonical = x => Array.isArray(x) ? x.map(canonical) : x && typeof x === 'object'
  ? Object.fromEntries(Object.keys(x).sort().map(k => [k,canonical(x[k])])) : x;
export const requiredPageHash = x => sha(JSON.stringify(canonical(x)));
const assert = (x,m) => { if (!x) throw Error(`required page route: ${m}`); };
const safe = x => /^[a-zA-Z0-9_-]+$/.test(String(x ?? ''));
const id = x => /^[a-z][a-z0-9-]*$/.test(String(x ?? ''));
const policy = 'owner-step3-required-published-page-route-v1';
function file(root,p) {
  assert(typeof p === 'string' && !isAbsolute(p) && !p.includes('\\'), 'invalid relative path');
  const full=resolve(root,p),rel=relative(resolve(root),full);
  assert(rel && !rel.startsWith('..') && !isAbsolute(rel), 'escaping path');
  let cursor=resolve(root); for(const part of rel.split('/')) {cursor=resolve(cursor,part);assert(!lstatSync(cursor).isSymbolicLink(),'symlink path');}
  assert(lstatSync(full).isFile(),'nonregular carrier');return full;
}
const bytes=(root,p)=>readFileSync(file(root,p));
const json=(root,p)=>JSON.parse(bytes(root,p));
function ref(root,r) {assert(r && /^[a-f0-9]{64}$/.test(r.sha256 ?? ''),'missing reference');const b=bytes(root,r.path);assert(sha(b)===r.sha256,`changed ${r.path}`);return b;}
const front = b => yaml().parse(split(String(b)).fm);
export function validateRequiredPageRoute(root,run,e,receipt) {
  assert(safe(run) && e.version===1 && e.policy===policy && e.run===run && e.owner_identity==='/root'
    && e.mathematical_acceptance===false && e.historical_page_observation_bound===false,'invalid authority');
  assert(/^[1-9]\d*$/.test(e.batch ?? '') && Number.isSafeInteger(e.index) && e.index>0 && id(e.page)
    && id(e.origin_page) && id(e.consumer_id),'invalid subject');
  assert(e.observation_basis==='unbound-native-reader; owner-current-before capture only','invented observation');
  assert(e.reviewed===true && typeof e.reason==='string' && e.reason.trim().length>=80,'missing focused owner review');
  const reportPath=`research/${run}-reader-findings-${e.batch}.json`, nativePrefix=`research/${run}-dispatch/reader-reader-${e.batch}`;
  assert(e.findings.path===reportPath && e.report.path===`research/${run}-reader-${e.batch}.md`,'wrong native report');
  const findings=JSON.parse(ref(root,e.findings)),report=ref(root,e.report).toString();
  assert([e.batch,`${run}-batch-${e.batch}`].includes(String(findings.batch)) && Array.isArray(findings.findings),'wrong findings batch');
  const finding=findings.findings[e.index-1];
  assert(finding && finding.id===e.page && finding.consumer_id===e.consumer_id && finding.subject_type==='published-dependency'
    && finding.observed_source==null && requiredPageHash(finding)===e.finding_sha256,'changed original finding');
  assert(report.includes(e.page) && report.includes(e.consumer_id),'report lacks original page/consumer');
  assert(new RegExp(`^${nativePrefix}\\.attempt-[1-9]\\d*\\.result\\.json$`).test(e.native_result.path),'wrong native attempt');
  const result=JSON.parse(ref(root,e.native_result));
  assert(result.run===run && result.role==='reader' && result.label===`reader-${e.batch}` && result.ok===true
    && result.exit_code===0 && result.process_exit_code===0 && result.timed_out!==true
    && result.covers?.map(String).includes(e.batch) && Number.isFinite(Date.parse(result.ended_at))
    && Date.parse(e.at)>=Date.parse(result.ended_at),'reader did not genuinely succeed');
  assert(e.prompt.path===e.native_result.path.replace(/\.result\.json$/,'.prompt.md')
    && String(result.prompt).endsWith('/'+e.prompt.path),'wrong native prompt'); ref(root,e.prompt);
  // Require the genuine structured native completion, not an owner-created finding.
  const nativeDoc=JSON.parse(result.tail);assert(requiredPageHash(nativeDoc)===requiredPageHash(findings),'native completion differs');
  for(const label of ['pre','post']) {
    const r=e[`${label}_snapshot`];assert(r.path===`research/${run}-step3-hash-${e.batch}-${label}.json`,'wrong snapshot path');
    const s=JSON.parse(ref(root,r));assert(s.version===2 && s.run===run && String(s.batch)===e.batch && s.label===label
      && !s.page_manifest?.includes(e.page),'invalid foreign page snapshot');
  }
  assert(e.manifest.path===`research/${run}-batch-${e.batch}.pages.json`,'wrong manifest');
  const manifest=JSON.parse(ref(root,e.manifest));const rows=Array.isArray(manifest)?manifest:manifest.pages;
  const origin=rows.filter(p=>p.id===e.origin_page);assert(origin.length===1 && origin[0].requires?.includes(e.page)
    && origin[0].items?.some(x=>(typeof x==='string'?x:x.id)===e.consumer_id),'page not required by assigned consumer home');
  for(const n of readdirSync(resolve(root,'research')).filter(n=>n.startsWith(`${run}-batch-`) && /-batch-\d+\.pages\.json$/.test(n))) {
    const raw=json(root,`research/${n}`);assert(!(Array.isArray(raw)?raw:raw.pages).some(p=>p.id===e.page),'foreign page acquired run ownership');
  }
  assert(/^library\/[a-z0-9-]+\/[a-z0-9-]+\.md$/.test(e.current_path)
    && e.current_path.endsWith('/'+e.page+'.md'),'wrong published page path');
  const homes=readdirSync(resolve(root,'library'),{withFileTypes:true}).filter(d=>d.isDirectory()
    && existsSync(resolve(root,'library',d.name,e.page+'.md')));
  assert(homes.length===1 && e.current_path===`library/${homes[0].name}/${e.page}.md`,'ambiguous physical page home');
  const before=ref(root,e.before),after=ref(root,e.after),beforeFm=front(before),afterFm=front(after);
  assert(beforeFm.page===e.page && beforeFm.status==='published' && requiredPageHash(beforeFm)===requiredPageHash(afterFm),'changed page metadata');
  assert(Array.isArray(e.edits) && e.edits.length && e.edits.length<=2,'exact small prose edits required');
  let reconstructed=before.toString(); const bodyStart=reconstructed.indexOf('\n---',4)+4;
  for(const edit of e.edits) {assert(typeof edit.before==='string' && edit.before && typeof edit.after==='string' && edit.after
    && edit.before!==edit.after && reconstructed.split(edit.before).length===2
    && reconstructed.indexOf(edit.before)>bodyStart,'ambiguous or nonprose edit');reconstructed=reconstructed.replace(edit.before,edit.after);}
  assert(sha(reconstructed)===sha(after) && sha(before)!==sha(after),'unaccounted source change');
  assert(bytes(root,e.current_path).equals(after),'current page changed');
  const pageItems=[...(afterFm.items ?? []),...(afterFm.examples ?? [])];assert(pageItems.length && new Set(pageItems).size===pageItems.length,'invalid page inventory');
  for(const item of pageItems) {assert(id(item),'invalid page item');const meta=front(bytes(root,`items/${item}.md`));
    assert(meta.id===item && meta.status==='published','page contains unpublished or misidentified item');}
  const path=e.dependency_path;assert(Array.isArray(path) && path.length>=2 && path[0]?.id===e.consumer_id
    && pageItems.includes(path.at(-1)?.id) && new Set(path.map(x=>x.id)).size===path.length,'invalid dependency path');
  for(let i=0;i<path.length;i++) {const node=path[i];assert(id(node.id),'invalid path item');const source=bytes(root,`items/${node.id}.md`).toString();
    assert(front(source).id===node.id && itemHashGuard(source)===node.guard_sha256,'changed logical supplier context');
    if(i+1<path.length)assert(front(source).deps?.includes(path[i+1].id),'missing actual dependency edge');
    else assert(front(source).status==='published','terminal page item not published');}
  const review=ref(root,e.review).toString();assert(review.includes(run) && review.includes(e.page) && review.includes(e.consumer_id)
    && review.includes(e.before.sha256) && review.includes(e.after.sha256),'owner review lacks exact guards');
  return {entry:e, binding:receipt, original:finding, obligation:`reader:${e.batch}:${e.index}`};
}
export function loadRequiredPageRoutes(root,run,batch) {
  assert(safe(run) && /^[1-9]\d*$/.test(String(batch)),'invalid routing identity');
  const p=`research/${run}-step3-owner-required-page-routes.json`;if(!existsSync(resolve(root,p)))return new Map();
  const raw=bytes(root,p),doc=JSON.parse(raw);assert(doc.version===1 && doc.run===run && doc.policy===policy && Array.isArray(doc.routes),'wrong route registry');
  const all=new Set(),out=new Map();for(const e of doc.routes) {const key=`reader:${e.batch}:${e.index}`;assert(!all.has(key),'duplicate obligation');all.add(key);
    if(e.batch!==String(batch))continue;const route=validateRequiredPageRoute(root,run,e,{path:p,entry_sha256:requiredPageHash(e)});out.set(key,route);}
  return out;
}
export function requiredPageCarrier(root,run,batch,finding) {
  const route=loadRequiredPageRoutes(root,run,batch).get(finding.obligation);
  assert(route && finding.id===route.entry.page && finding.consumer_id===route.entry.consumer_id
    && finding.subject_type==='published-dependency' && requiredPageHash(finding.owner_required_page_route)===requiredPageHash(route.binding)
    && finding.observed_sha256===null && finding.observation_basis==='unbound' && finding.pre_sha256===undefined,'lost exact foreign-page route');
  return {file_sha256:sha(bytes(root,route.entry.current_path)),owner_required_page_route:route.binding};
}

// Freeze only this route's authenticated historical inputs. Current mathematical
// sources retain ordinary later-stage currency rules; the after archive is the
// immutable corrected page carrier. Existing owner registries are unaffected.
export function requiredPageClosureEvidence(root,run) {
  assert(safe(run),'invalid run');const p=`research/${run}-step3-owner-required-page-routes.json`;
  if(!existsSync(resolve(root,p)))return {};
  const raw=bytes(root,p),doc=JSON.parse(raw);
  assert(doc.version===1 && doc.run===run && doc.policy===policy && Array.isArray(doc.routes),'wrong closure registry');
  const out={[p]:sha(raw)};
  for(const e of doc.routes) for(const key of ['findings','report','native_result','prompt','pre_snapshot','post_snapshot','manifest','before','after','review']) {
    const r=e[key];assert(typeof r?.path==='string' && r.path.startsWith('research/'),'invalid historical closure path');
    ref(root,r);assert(out[r.path]===undefined || out[r.path]===r.sha256,'ambiguous closure reference');out[r.path]=r.sha256;
  }
  return out;
}
