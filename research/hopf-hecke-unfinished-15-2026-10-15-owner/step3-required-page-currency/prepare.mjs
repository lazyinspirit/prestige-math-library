import {readFileSync,writeFileSync,mkdirSync,copyFileSync,readdirSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {createHash} from 'node:crypto';
import {requiredPageHash,validateRequiredPageRoute,requiredPageCarrier,requiredPageClosureEvidence} from '../../../tools/step3-owner-required-page-routes.mjs';
import {split,yaml} from '../../../tools/pathway-lib.mjs';
const root=process.cwd(),run='hopf-hecke-unfinished-15-2026-10-15';
const base=`research/${run}-owner/step3-required-page-currency`;
const sha=x=>createHash('sha256').update(x).digest('hex');
const bytes=p=>readFileSync(resolve(root,p));
const read=p=>JSON.parse(bytes(p));
function put(p,b){mkdirSync(dirname(resolve(root,p)),{recursive:true});writeFileSync(resolve(root,p),b);}
const emit=(p,j)=>put(`${base}/${p}`,JSON.stringify(j,null,2)+'\n');
const registryPath=`research/${run}-step3-owner-required-page-routes.json`;
const scopePath=`research/${run}-step3-scope-10.json`;
const registry=read(registryPath),scope=read(scopePath),e=registry.routes[0];
const originalManifest=`research/${run}-owner/reader10-page-routing-escalation/original-${run}-batch-10.pages.json`;
if(sha(bytes(originalManifest))!==e.manifest.sha256)throw Error('original manifest archive does not authenticate');
const oldManifest=read(originalManifest),currentManifest=read(e.manifest.path);
const differences=[];
function diff(a,b,p=''){
  if(JSON.stringify(a)===JSON.stringify(b))return;
  if(a&&b&&typeof a==='object'&&typeof b==='object'){
    if(JSON.stringify(Object.keys(a))!==JSON.stringify(Object.keys(b)))throw Error('structural manifest delta');
    for(const k of Object.keys(a))diff(a[k],b[k],`${p}/${k}`);return;
  }
  if(typeof a!=='string'||b!==a.replace('Section 4, printed pp. 6-7:','Section 2, printed pp. 6-7:')||!p.endsWith('/locator'))throw Error(`unexpected manifest delta ${p}`);
  differences.push({path:p,before:a,after:b});
}
diff(oldManifest,currentManifest);
if(differences.length!==4)throw Error('expected exactly four locator corrections');
const nativePath=`research/${run}-dispatch/alpha-3a-batch-10.attempt-1.result.json`;
const native=read(nativePath);
if(!native.ok||native.exit_code!==0||native.process_exit_code!==0||native.timed_out||native.label!=='3a-batch-10')throw Error('missing genuine successful Alpha');
const decisionPath=`research/${run}-alpha-batch-10-3a-decisions.json`,decision=read(decisionPath);
const pageDecision=decision.decisions.find(x=>x.obligation==='reader:10:1');
if(pageDecision?.verdict!=='confirmed_fatal'||pageDecision.historical_delta_unknown!==true||!pageDecision.owner_resolution)throw Error('lost independent disposition');
const oldEntryHash=requiredPageHash(e),newRegistry=structuredClone(registry);
newRegistry.routes[0].manifest.sha256=sha(bytes(e.manifest.path));
const newEntryHash=requiredPageHash(newRegistry.routes[0]);
const newScope=structuredClone(scope),finding=newScope.reader_findings.find(x=>x.obligation==='reader:10:1');
if(finding.owner_required_page_route.entry_sha256!==oldEntryHash)throw Error('scope original route binding mismatch');
finding.owner_required_page_route.entry_sha256=newEntryHash;
for(const p of [registryPath,scopePath,e.manifest.path,originalManifest,nativePath,decisionPath,`research/${run}-alpha-batch-10-3a.md`])put(`${base}/archives/${p}`,bytes(p));
emit('registry.proposed.json',newRegistry);emit('scope.proposed.json',newScope);
emit('json-operations.proposed.json',{run,authorized_by:'owner /root; integration pending',operations:[
 {file:registryPath,sha256_before:sha(bytes(registryPath)),sha256_after:sha(JSON.stringify(newRegistry,null,2)+'\n'),patch:[{op:'test',path:'/routes/0/manifest/sha256',value:e.manifest.sha256},{op:'replace',path:'/routes/0/manifest/sha256',value:newRegistry.routes[0].manifest.sha256}]},
 {file:scopePath,sha256_before:sha(bytes(scopePath)),sha256_after:sha(JSON.stringify(newScope,null,2)+'\n'),patch:[{op:'test',path:'/reader_findings/0/obligation',value:'reader:10:1'},{op:'test',path:'/reader_findings/0/owner_required_page_route/entry_sha256',value:oldEntryHash},{op:'replace',path:'/reader_findings/0/owner_required_page_route/entry_sha256',value:newEntryHash}]}
],preconditions:[{path:e.manifest.path,sha256:newRegistry.routes[0].manifest.sha256},{path:originalManifest,sha256:e.manifest.sha256}],native_followup:'Owner performs ordinary rehash, recertification, native decision stamping and complete gate battery; preserve all verdicts and observations.'});
// Minimal regular-file resolver view exercises production validation without touching live carriers.
const shadow=`${base}/validation-view`,copy=p=>put(`${shadow}/${p}`,bytes(p));
for(const k of ['findings','report','native_result','prompt','pre_snapshot','post_snapshot','manifest','before','after','review'])copy(e[k].path);
for(const n of readdirSync('research').filter(n=>n.startsWith(`${run}-batch-`)&&/-batch-\d+\.pages\.json$/.test(n)))copy('research/'+n);
copy(e.current_path);
const page=bytes(e.current_path).toString(),pageFm=yaml().parse(split(page).fm),ids=[...(pageFm.items??[]),...(pageFm.examples??[])];
for(const id of new Set([...ids,...e.dependency_path.map(x=>x.id)]))copy(`items/${id}.md`);
put(`${shadow}/${registryPath}`,JSON.stringify(newRegistry,null,2)+'\n');
validateRequiredPageRoute(resolve(root,shadow),run,newRegistry.routes[0],{path:registryPath,entry_sha256:newEntryHash});
const carrier=requiredPageCarrier(resolve(root,shadow),run,'10',finding);
const closure=requiredPageClosureEvidence(resolve(root,shadow),run);
emit('review-evidence.json',{run,reviewer:'/root/hh_step3_required_page_currency',cycle:1,confirmed_defect:'Native Alpha citation-only manifest corrections invalidated the current manifest reference in the owner required-page route; no finding, obligation, logical edge or independent disposition changed.',manifest_differences:differences,native_alpha:{path:nativePath,sha256:sha(bytes(nativePath)),ended_at:native.ended_at,ok:native.ok},original_entry_sha256:oldEntryHash,proposed_entry_sha256:newEntryHash,production_validation:{validateRequiredPageRoute:'pass',requiredPageCarrier:carrier,requiredPageClosureEvidence:closure},live_mutation:false,remaining_owner_actions:'Integrate guarded two-field currency repair, then native stamp and full battery. No waiver or core change.'});
console.log(JSON.stringify({differences:differences.length,oldEntryHash,newEntryHash,productionRouteValidation:'pass',productionCarrierValidation:'pass',productionClosureEvidenceValidation:'pass'}));
