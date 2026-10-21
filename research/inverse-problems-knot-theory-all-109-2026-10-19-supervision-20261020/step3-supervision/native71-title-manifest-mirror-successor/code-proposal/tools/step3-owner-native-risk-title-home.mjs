// Separate unit71 native risk-title route; no existing continuation policy relaxed.
import { existsSync,readFileSync,readdirSync,lstatSync } from 'node:fs';
import { resolve,relative,isAbsolute } from 'node:path';
import { createHash } from 'node:crypto';
import { split,yaml } from './pathway-lib.mjs';
import { sourceSectionText } from './facts-block.mjs';
import { foreignRefuterHash as hash } from './step3-owner-foreign-refuter-routes.mjs';
export const NATIVE_RISK_TITLE_POLICY='owner-step3-native-risk-title-home-alpha-continuation-v1';
export const RISK_TITLE_ID='lem-incompressible-surface-torus-boundary-essential-or-parallel-annulus';
const OLD_TITLE='Incompressible surfaces at torus boundary are essential or parallel annuli';
const NEW_TITLE='Boundary-compressible incompressible surfaces at torus boundary are parallel annuli';
const label='3a-batch-71-native-risk-title-continuation-1';
const sha=x=>createHash('sha256').update(x).digest('hex');
const need=(x,m)=>{if(!x)throw Error(`native risk title home: ${m}`);};
const registry=run=>`research/${run}-step3-native-risk-title-home-alpha-continuations.json`;
function bytes(root,p){need(typeof p==='string'&&!isAbsolute(p)&&!p.includes('\\')&&!p.split('/').some(x=>!x||x==='.'||x==='..'),'unsafe path');const full=resolve(root,p),r=relative(resolve(root),full);need(r&&!r.startsWith('..')&&!isAbsolute(r),'escaping path');let at=resolve(root);for(const part of r.split('/')){at=resolve(at,part);need(!lstatSync(at).isSymbolicLink(),'symlink');}need(lstatSync(full).isFile(),'nonregular file');return readFileSync(full);}
const parse=b=>JSON.parse(b.toString());
function ref(root,run,r){need(r&&r.path?.startsWith(`research/${run}-`)&&/^[a-f0-9]{64}$/.test(r.sha256??''),'invalid reference');const b=bytes(root,r.path);need(sha(b)===r.sha256,`changed evidence ${r.path}`);return b;}
const pages=d=>Array.isArray(d)?d:d.pages??[];
const ids=d=>pages(d).flatMap(p=>(p.items??[]).map(x=>typeof x==='string'?x:x.id));
const exact=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&new Set(a).size===a.length&&a.every(x=>b.includes(x));
const fm=b=>yaml().parse(split(b.toString()).fm);
const subjectRows=m=>pages(m).flatMap(p=>(p.items??[]).filter(x=>typeof x==='object'&&x.id===RISK_TITLE_ID).map(item=>({page:p.id,item})));
function titleOnly(before,after){
 need(fm(before).id===RISK_TITLE_ID&&fm(after).id===RISK_TITLE_ID&&fm(before).status==='draft'&&fm(after).status==='draft'&&fm(before).title===OLD_TITLE&&fm(after).title===NEW_TITLE,'wrong draft/title transition');
 const front=before.toString().match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);need(front,'missing frontmatter');const lines=[...front[1].matchAll(/^title:[^\r\n]*$/gm)];need(lines.length===1,'title must be one actual source line');
 const old=lines[0][0],replacement='title: '+JSON.stringify(NEW_TITLE);need(before.toString().replace(old,replacement)===after.toString(),'source delta must be exactly the one title line');
}
export function nativeRiskTitleHomeContinuations(root,run,{beforeDispatch=false,units=null,selected=null}={}){
 need(/^[A-Za-z0-9_-]+$/.test(run),'invalid run');const p=registry(run);if(!existsSync(resolve(root,p)))return [];
 const doc=parse(bytes(root,p));need(doc.version===1&&doc.run===run&&doc.policy===NATIVE_RISK_TITLE_POLICY&&doc.authorized_by==='owner'&&typeof doc.authorization==='string'&&doc.authorization.trim().length>=40&&Array.isArray(doc.continuations)&&doc.continuations.length===1,'invalid explicit authority');
 need(!existsSync(resolve(root,`research/${run}-step3-hash-71-pre-3a.json`)),'pre-3a snapshot would create duplicate automatic obligations');
 const e=doc.continuations[0],canonical='batch-71',prefix=`research/${run}-dispatch/alpha-3a-batch-71`;
 need(e.version===1&&e.run===run&&e.unit==='71'&&e.owner_identity==='/root'&&e.label===label&&e.canonical_group===canonical&&e.mathematical_acceptance===false&&e.previous_acceptance_inherited===false&&e.historical_artifact_basis==='owner-captured current completed-native artifacts; no structured-output byte attestation'&&typeof e.reason==='string'&&e.reason.trim().length>=80&&Number.isFinite(Date.parse(e.writers_drained_at)),'invalid title entry');
 if(units)need(units.map(String).includes('71'),'unit outside actual native stage');
 const groupsDoc=parse(bytes(root,`research/${run}-alpha-groups.json`)),owners=(Array.isArray(groupsDoc)?groupsDoc:groupsDoc.groups??[]).filter(g=>g.covers?.map(String).includes('71'));need(owners.length===1,'ambiguous native Alpha assignment');
 const nativeBytes=ref(root,run,e.previous_result),old=parse(nativeBytes),attempt=ref(root,run,e.previous_attempt);ref(root,run,e.previous_prompt);
 need(e.previous_result.path===prefix+'.result.json'&&Number.isSafeInteger(old.attempt)&&old.attempt>0&&e.previous_attempt.path===prefix+`.attempt-${old.attempt}.result.json`&&attempt.equals(nativeBytes)&&e.previous_prompt.path===prefix+`.attempt-${old.attempt}.prompt.md`&&old.prompt?.endsWith('/'+e.previous_prompt.path)&&old.evidence_tag===`.attempt-${old.attempt}`&&old.written_by!=='autopilot'&&old.run===run&&old.role==='alpha'&&old.label==='3a-batch-71'&&old.covers?.length===1&&String(old.covers[0])==='71'&&old.ok===true&&old.exit_code===0&&old.process_exit_code===0&&old.timed_out!==true&&old.terminal_summary?.task_completed===true&&old.terminal_summary?.task_aborted===false&&old.terminal_summary?.final_response_present===true&&typeof old.session_id==='string'&&old.session_id.length>0&&Number.isFinite(Date.parse(old.started_at))&&Number.isFinite(Date.parse(old.ended_at))&&Date.parse(old.started_at)<=Date.parse(old.ended_at)&&Date.parse(old.ended_at)<=Date.parse(e.writers_drained_at),'not genuine completed standalone native Alpha71');
 const reportPath=`research/${run}-alpha-batch-71-3a.md`,decisionsPath=`research/${run}-alpha-batch-71-3a-decisions.json`,scopePath=`research/${run}-step3-scope-71.json`;
 need(e.previous_report.path!==reportPath&&e.previous_decisions.path!==decisionsPath&&e.previous_scope.path!==scopePath,'old outputs require immutable archives');
 const report=ref(root,run,e.previous_report),decisionBytes=ref(root,run,e.previous_decisions),decisions=parse(decisionBytes),scopeBytes=ref(root,run,e.previous_scope),scope=parse(scopeBytes);
 need(old.tail?.includes(reportPath)&&old.tail?.includes(decisionsPath)&&decisions.version===1&&decisions.run===run&&decisions.group===canonical&&Array.isArray(decisions.decisions)&&decisions.decisions.length===16&&scope.version===2&&scope.run===run&&String(scope.batch)==='71'&&scope.group===String(owners[0].label),'wrong old scope/16 decisions/native completion');
 const oldTargets=[...(scope.touched??[]).map(id=>`touched:71:${id}`),...(scope.pages_touched??[]).map(id=>`page:71:${id}`),...(scope.reader_findings??[]).map(x=>x.obligation),...(scope.refuter_findings??[]).map(x=>x.obligation)];
 need(exact(oldTargets,decisions.decisions.map(d=>d.obligation))&&!(scope.touched??[]).includes(RISK_TITLE_ID)&&!(scope.reader_findings??[]).some(f=>f.id===RISK_TITLE_ID)&&!(scope.refuter_findings??[]).some(f=>f.id===RISK_TITLE_ID)&&(scope.high_risk??[]).includes(RISK_TITLE_ID)&&(scope.untouched??[]).includes(RISK_TITLE_ID),'target must be actually risk-only, all old obligations preserved');
 const sourceBefore=ref(root,run,e.source_before),sourceAfter=ref(root,run,e.source_after);titleOnly(sourceBefore,sourceAfter);need(fm(sourceBefore).pipeline_run===run&&fm(sourceAfter).pipeline_run===run,'wrong source run marker');
 const before=parse(ref(root,run,e.manifest_before)),after=parse(ref(root,run,e.registration_manifest)),b=subjectRows(before),a=subjectRows(after);need(b.length===1&&a.length===1&&b[0].page===a[0].page&&b[0].item.title===OLD_TITLE&&a[0].item.title===NEW_TITLE,'wrong exact title mirror');
 const homes=[];for(const name of readdirSync(resolve(root,'research')).filter(n=>n.startsWith(`${run}-batch-`)&&n.endsWith('.pages.json')))for(const row of subjectRows(parse(bytes(root,`research/${name}`))))homes.push({name,row});need(homes.length===1&&homes[0].name===`${run}-batch-71.pages.json`,'target must retain unique actual manifest home');
 const expected=structuredClone(before);subjectRows(expected)[0].item.title=NEW_TITLE;need(hash(expected)===hash(after)&&exact(ids(after),scope.manifest_post??[])&&exact(pages(after).map(p=>p.id),scope.page_manifest_post??[]),'manifest delta exceeds single title mirror or changes inventory');
 need(e.previous_risk_contract?.path!==`research/${run}-batch-71.proof-contracts.json`,'previous risk contract must be immutable archive');
 const contracts=parse(ref(root,run,e.previous_risk_contract)),risk=contracts.contracts?.[RISK_TITLE_ID]?.risk_review;
 need(risk?.status==='complete'&&risk.reviewer==='alpha-batch-71'&&typeof e.native_alert_quote==='string'&&e.native_alert_quote.length>=80&&report.toString().includes(e.native_alert_quote)&&e.native_alert_quote.includes(RISK_TITLE_ID)&&e.native_alert_quote.includes(NEW_TITLE)&&risk.notes?.includes('NEW DEFECT:')&&risk.unresolved_alert==='Owner supplemental title-repair routing required; written Statement/proof sound.','not actual unresolved native risk-title alert');
 need(typeof e.defect_id==='string'&&/^[A-Za-z0-9][A-Za-z0-9._:-]*$/.test(e.defect_id)&&!decisions.decisions.some(d=>d.obligation===`gate:${e.defect_id}`),'invalid/new gate identity');
 const application=parse(ref(root,run,e.application));need(application.run===run&&application.owner_identity==='/root'&&application.native_finding_unchanged===true&&application.files?.length===2&&application.files.some(x=>x.path===`items/${RISK_TITLE_ID}.md`&&x.before_sha256===e.source_before.sha256&&x.after_sha256===e.source_after.sha256)&&application.files.some(x=>x.path===`research/${run}-batch-71.pages.json`&&x.before_sha256===e.manifest_before.sha256&&x.after_sha256===e.registration_manifest.sha256),'not actual two-file owner title application');
 const review=parse(ref(root,run,e.owner_review));need(review.run===run&&review.unit==='71'&&review.owner_identity==='/root'&&review.title_only===true&&review.statement_definition_proof_unchanged===true&&review.native_acceptance_claimed===false&&review.source_before_sha256===e.source_before.sha256&&review.source_after_sha256===e.source_after.sha256&&typeof review.evidence==='string'&&review.evidence.trim().length>=80,'missing actual bounded owner title review');
 const capture=parse(ref(root,run,e.owner_capture));need(capture.version===1&&capture.run===run&&capture.unit==='71'&&capture.owner_identity==='/root'&&capture.native_acceptance_claimed===false&&capture.original_artifact_bytes_native_bound===false&&capture.report_sha256===e.previous_report.sha256&&capture.decisions_sha256===e.previous_decisions.sha256&&capture.scope_sha256===e.previous_scope.sha256&&capture.old_result_sha256===e.previous_result.sha256,'missing honest native artifact capture');
 const paths=[scopePath,`research/${run}-batch-71.pages.json`,`research/${run}-batch-71.proof-contracts.json`,...ids(after).map(id=>`items/${id}.md`),...pages(after).map(p=>`library/${p.category}/${p.id}.md`)];need(exact(e.current_inputs?.map(x=>x.path),paths)&&e.current_inputs.every(x=>/^[a-f0-9]{64}$/.test(x.sha256??'')),'incomplete exact launch inputs');
 const map=new Map(e.current_inputs.map(x=>[x.path,x.sha256]));need(map.get(scopePath)===e.previous_scope.sha256&&map.get(`research/${run}-batch-71.pages.json`)===e.registration_manifest.sha256&&map.get(`items/${RISK_TITLE_ID}.md`)===e.source_after.sha256&&map.get(`research/${run}-batch-71.proof-contracts.json`)===e.previous_risk_contract.sha256,'inconsistent launch input mirrors');
 const task=ref(root,run,e.task).toString();need(task.includes(reportPath)&&task.includes(decisionsPath)&&task.includes(label)&&oldTargets.every(x=>task.includes(x))&&task.includes(`gate:${e.defect_id}`)&&task.includes('full current risk review')&&task.includes('Canonical group: batch-71')&&task.includes('No inherited acceptance'),'task omits actual old16/new gate/canonical identity/full risk');
 if(beforeDispatch&&(selected===null||selected.map(String).includes('71'))){
  need(!existsSync(resolve(root,`research/${run}-step3-hash-71-pre-3a.json`)),'new pre-3a snapshot would create unrelated automatic obligations');
  need(!readdirSync(resolve(root,`research/${run}-dispatch`)).some(n=>n===`alpha-${label}.result.json`||new RegExp(`^alpha-${label}\\.attempt-[1-9]\\d*\\.result\\.json$`).test(n)),'one-shot fresh native attempt already completed');
  need(bytes(root,reportPath).equals(report)&&bytes(root,decisionsPath).equals(decisionBytes),'old canonical report/decisions changed before dispatch');for(const x of e.current_inputs)need(sha(bytes(root,x.path))===x.sha256,`launch carrier changed ${x.path}`);
 }
 return [{entry:e,binding:{path:p,entry_sha256:hash(e)},old_scope:scope,old_decisions:decisions,additional_obligations:[{obligation:`gate:${e.defect_id}`,id:RISK_TITLE_ID,batch:'71',route:'gate',defect_id:e.defect_id,owner_native_risk_title:{path:p,entry_sha256:hash(e)}}]}];
}
const MIRROR_RUN='inverse-problems-knot-theory-all-109-2026-10-19';
export const NATIVE_RISK_TITLE_MIRROR_POLICY='owner-step3-native-risk-title-71-two-claim-mirrors-v1';
const MIRRORS=[{id:'cor-satellite-companion-is-detected-by-jsj',section:'Statement'},
 {id:'ex-knot-kt-17-worked-cases',section:'Example'}];
const mirrorRegistry=run=>`research/${run}-step3-native-risk-title-manifest-mirror-successor.json`;
// Current metadata only: the authentic title-launch registry is never rewritten.
// Caller still validates the complete original native continuation and title gate.
export function nativeRiskTitleManifestMirrorSuccessor(root,run,e,{current=true}={}){
 const p=mirrorRegistry(run);if(!existsSync(resolve(root,p)))return null;
 need(run===MIRROR_RUN,'claim-mirror successor outside exact run');
 const raw=bytes(root,p),d=parse(raw);
 need(d.version===1&&d.run===run&&d.unit==='71'&&d.policy===NATIVE_RISK_TITLE_MIRROR_POLICY
  &&d.authorized_by==='owner'&&d.owner_identity==='/root'&&d.reviewed===true
  &&d.mathematical_acceptance===false&&d.native_reread_claimed===false
  &&Number.isFinite(Date.parse(d.at))&&typeof d.reason==='string'&&d.reason.trim().length>=80,
  'invalid explicit two-mirror successor authority');
 need(e.unit==='71'&&hash(d.registration_manifest)===hash(e.registration_manifest),
  'successor does not retain exact immutable registration manifest');
 const original=parse(ref(root,run,e.registration_manifest));
 const successor=ref(root,run,d.current_manifest);
 need(!current||successor.equals(bytes(root,`research/${run}-batch-71.pages.json`)),'current manifest differs from exact successor archive');
 ref(root,run,e.source_after);
 need(!current||sha(bytes(root,`items/${RISK_TITLE_ID}.md`))===e.source_after.sha256,
  'risk-title source changed');
 need(Array.isArray(d.changes)&&d.changes.length===MIRRORS.length
  &&exact(d.changes.map(x=>x.id),MIRRORS.map(x=>x.id)),'wrong exact two mirror IDs');
 const expected=structuredClone(original);
 for(const allowed of MIRRORS){
  const c=d.changes.find(x=>x.id===allowed.id),sourcePath=`items/${allowed.id}.md`;
  const pins=(e.current_inputs??[]).filter(x=>x.path===sourcePath);
  need(pins.length===1&&/^[a-f0-9]{64}$/.test(pins[0].sha256??'')
   &&c.field==='statement'&&c.source_section===allowed.section&&c.source_path===sourcePath
   &&c.source_sha256===pins[0].sha256,'mirror must retain actual source launch pin');
  need(c.source_archive?.sha256===pins[0].sha256,'source archive must retain launch pin');
  const source=ref(root,run,c.source_archive);
  need(!current||bytes(root,sourcePath).equals(source),`changed launch source ${sourcePath}`);
  const text=sourceSectionText(split(source.toString()).body,allowed.section)?.trim();
  const rows=pages(expected).flatMap(p=>(p.items??[]).filter(x=>typeof x==='object'&&x.id===allowed.id));
  need(rows.length===1&&typeof rows[0].statement==='string'&&c.before_quote===rows[0].statement
   &&typeof text==='string'&&text.length>0&&c.after_quote===text&&c.after_quote!==c.before_quote,
   'mirror must be exact complete current source section, with actual old field guard');
  rows[0].statement=c.after_quote;
 }
 need(hash(expected)===hash(parse(successor)),
  'successor changes risk row, inventory, or another manifest field');
 return {path:p,sha256:sha(raw),current_manifest:d.current_manifest,sources:d.changes.map(c=>c.source_archive)};
}
export function nativeRiskTitleCarrier(root,run,target){
 const row=nativeRiskTitleHomeContinuations(root,run).find(r=>r.entry.unit==='71');need(row&&target.id===RISK_TITLE_ID&&target.obligation===`gate:${row.entry.defect_id}`&&hash(target.owner_native_risk_title)===hash(row.binding),'wrong actual title gate');
 const e=row.entry;need(sha(bytes(root,`items/${RISK_TITLE_ID}.md`))===e.source_after.sha256,'current source exceeds approved title-only successor');
 const successor=nativeRiskTitleManifestMirrorSuccessor(root,run,e);
 need(successor||sha(bytes(root,`research/${run}-batch-71.pages.json`))===e.registration_manifest.sha256,'current manifest exceeds approved title-only successor');
 const manifest=parse(bytes(root,`research/${run}-batch-71.pages.json`)),m=subjectRows(manifest)[0],contracts=parse(bytes(root,`research/${run}-batch-71.proof-contracts.json`));return {item_sha256:e.source_after.sha256,contract_sha256:hash(contracts.contracts?.[RISK_TITLE_ID]??null),manifest_sha256:hash({...m.item,__step4_page_id:m.page}),owner_native_risk_title:row.binding};
}
export function nativeRiskTitleHomeCurrentOutputs(root,run,e){
 const row=nativeRiskTitleHomeContinuations(root,run).find(r=>r.entry.unit===e.unit);need(row,'missing current title continuation');const reportPath=`research/${run}-alpha-batch-71-3a.md`,decisionPath=`research/${run}-alpha-batch-71-3a-decisions.json`,report=bytes(root,reportPath),body=bytes(root,decisionPath),doc=parse(body),targets=[...row.old_decisions.decisions,...row.additional_obligations];
 need(sha(report)!==e.previous_report.sha256&&doc.version===1&&doc.run===run&&doc.group==='batch-71'&&exact(doc.decisions?.map(d=>d.obligation),targets.map(t=>t.obligation))&&targets.every(t=>doc.decisions.some(d=>d.obligation===t.obligation&&d.id===t.id&&d.route===t.route))&&doc.decisions.every(d=>d.verdict!=='escalated'&&(d.repair_confidence===undefined||d.repair_confidence===1)),'fresh native outputs omit old/new obligations or retain escalation');
 const gate=doc.decisions.find(d=>d.obligation===`gate:${e.defect_id}`);need(exact(gate?.defect_ids,[e.defect_id])&&['confirmed_fatal','confirmed_nonfatal','false_positive'].includes(gate.verdict),'new title gate must retain real defect row and ordinary independent verdict');
 const outputs={[reportPath]:sha(report),[decisionPath]:sha(body)};
 const closedPath=`research/${run}-step3-closure.json`,closed=existsSync(resolve(root,closedPath))?parse(bytes(root,closedPath)):null;
 let frozen=false;
 if(closed?.version===3&&closed.run===run&&closed.status==='closed'&&closed.basis==='dependency-ordered-step3a'){
  const prefix=`research/${run}-dispatch/alpha-${e.label}`,stable=prefix+'.result.json',native=parse(bytes(root,stable));
  need(Number.isSafeInteger(native.attempt)&&native.attempt>0,'invalid frozen fresh native attempt');
  const attempt=prefix+`.attempt-${native.attempt}.result.json`,prompt=prefix+`.attempt-${native.attempt}.prompt.md`;
  const evidence={...nativeRiskTitleHomeClosureEvidence(root,run),...outputs,...Object.fromEntries([stable,attempt,prompt].map(p=>[p,sha(bytes(root,p))]))};
  need(closed.artifacts&&Object.entries(evidence).every(([p,h])=>closed.artifacts[p]===h),'closure does not freeze exact title registry/history/fresh native outputs');
  frozen=true;
 }
 // A sealed historical receipt binds archived title bytes, not later source reads.
 // Active Step3 always checks the actual live title carrier and fresh risk closure.
 if(!frozen){
  const oldRisk=parse(ref(root,run,e.previous_risk_contract)).contracts?.[RISK_TITLE_ID]?.risk_review;
  const risk=parse(bytes(root,`research/${run}-batch-71.proof-contracts.json`)).contracts?.[RISK_TITLE_ID]?.risk_review;
  need(risk?.status==='complete'&&typeof risk.notes==='string'&&risk.notes.trim().length>=40&&risk.notes!==oldRisk.notes&&!(typeof risk.unresolved_alert==='string'&&risk.unresolved_alert.trim()),'fresh title risk review is missing, stale or still open');
  nativeRiskTitleCarrier(root,run,row.additional_obligations[0]);
 }
 return outputs;
}
export function nativeRiskTitleHomeClosureEvidence(root,run){
 const rows=nativeRiskTitleHomeContinuations(root,run);if(!rows.length)return {};const p=registry(run),out={[p]:sha(bytes(root,p))};for(const {entry:e}of rows)for(const k of ['previous_result','previous_attempt','previous_prompt','previous_report','previous_decisions','previous_scope','previous_risk_contract','source_before','source_after','manifest_before','registration_manifest','application','owner_review','owner_capture','task']){ref(root,run,e[k]);out[e[k].path]=e[k].sha256;}for(const {entry:e}of rows){const successor=nativeRiskTitleManifestMirrorSuccessor(root,run,e,{current:false});if(successor){out[successor.path]=successor.sha256;out[successor.current_manifest.path]=successor.current_manifest.sha256;for(const source of successor.sources)out[source.path]=source.sha256;}}return out;
}
