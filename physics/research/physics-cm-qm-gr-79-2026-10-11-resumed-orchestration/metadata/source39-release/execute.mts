import {readFileSync,writeFileSync,statSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {basename} from 'node:path';
import {loadStep3,itemHash} from '../../../../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1} from '../../../../../tools/physics-support/step1-decisions.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',base=`research/${run}-resumed-orchestration`,out=`${base}/metadata/source39-release`,closurePath=`${base}/spectral-lead/closure-tranche39.json`;
const hash=(b:any)=>createHash('sha256').update(b).digest('hex'),json=(p:string)=>JSON.parse(readFileSync(p,'utf8'));
const closureBytes=readFileSync(closurePath),closure=JSON.parse(closureBytes.toString());
if(closure.run!==run||closure.rows.length!==21||closure.rows.some((r:any)=>r.batch!=='39')||closure.unresolved_substantial_mathematical_prerequisites?.length)throw Error('Exact completed21source39 owning closure required');
const rows=[...closure.rows].sort((a:any,b:any)=>a.dependency_level-b.dependency_level||a.id.localeCompare(b.id));
const guardMap=new Map<string,string>([[closurePath,hash(closureBytes)]]);
for(const r of rows){guardMap.set(`items/${r.id}.md`,r.raw_sha256);for(const [path,sha] of Object.entries(r.mirror_hashes))guardMap.set(path,sha as string);}
const guards=[...guardMap].map(([path,sha])=>{if(hash(readFileSync(path))!==sha)throw Error(`Tracker raw guard stale ${path}`);const st=statSync(path);return {path,sha,stamp:`${st.size}:${st.mtimeMs}:${st.ctimeMs}`};});
const s=loadStep3(root,run),before=rows.map((r:any)=>{const path=`research/${run}-step1-${r.id}.json`,bytes=readFileSync(path),row=JSON.parse(bytes.toString()),native=itemHash(s,r.id,r.examination_dependencies);if(native!==r.native_context_sha256)throw Error(`Tracker native hash stale ${r.id}`);writeFileSync(`${out}/before/${basename(path)}`,bytes);return {id:r.id,path,raw_sha256:hash(bytes),row,native,held:row.decision==='escalated',current:row.decision==='ready'&&row.sha256===native};});
writeFileSync(`${out}/preparation.json`,JSON.stringify({at:new Date().toISOString(),run,root_authorization:'Exact21source39:12held+9currency; original history/caps preserved; no40/41release',closure_path:closurePath,closure_raw_sha256:hash(closureBytes),guards,before},null,2)+'\n');
function checkGuards(){for(const g of guards){const st=statSync(g.path),stamp=`${st.size}:${st.mtimeMs}:${st.ctimeMs}`;if(stamp!==g.stamp){if(hash(readFileSync(g.path))!==g.sha)throw Error(`Actual closure input changed ${g.path}`);g.stamp=stamp;}}}
const mutations:any[]=[],skipped:any[]=[];
for(const r of rows){
 checkGuards();const original=before.find((b:any)=>b.id===r.id)!,bytes=readFileSync(original.path),actual=JSON.parse(bytes.toString());
 if(actual.decision==='ready'&&actual.sha256===r.native_context_sha256){skipped.push({id:r.id,reason:'Already current external owner row preserved'});continue;}
 if(hash(bytes)!==original.raw_sha256)throw Error(`External changed actual before row ${r.id}`);
 const reason=`Root-authorized completed source39 tranche owning local proof/interface and exact old/current/alias/body/justified consumer closure from ${closure.reviewer} at ${closure.at}: ${closurePath}. Actual disposition: ${r.proof_observation} Consumer closure: ${r.consumer_disposition} Exact current examination_dependencies and tracker native_context_sha256 authenticated, all21carrier/raw mirrors guarded; actual strict39 check21checked0errors0warnings. This is local owning readiness resolution/currency, not independent audit, native judgment, gate acceptance, or new blanket mathematical acceptance. ${closure.history} ${closure.source_import_qualification} Original prior record/evidence retained durably in ${out}/before; no40/41readiness or Mellin metadata touched.`;
 const next=recordStep1(root,{run,item:r.id,decision:'ready',owner:true,dependencies:r.examination_dependencies,reason});
 if(next.sha256!==r.native_context_sha256){writeFileSync(original.path,bytes);throw Error(`Native current hash changed ${r.id}; before row restored`);}
 mutations.push({id:r.id,held_closed:original.held,currency_refreshed:!original.held,before_raw_sha256:original.raw_sha256,after_raw_sha256:hash(readFileSync(original.path)),native_context_sha256:next.sha256});
 writeFileSync(`${out}/progress.json`,JSON.stringify({at:new Date().toISOString(),run,mutations,skipped},null,2)+'\n');
}
for(const g of guards)if(hash(readFileSync(g.path))!==g.sha)throw Error(`Final closure raw guard changed ${g.path}`);
const final=rows.map((r:any)=>{const row=json(`research/${run}-step1-${r.id}.json`);return {id:r.id,current:row.decision==='ready'&&row.sha256===r.native_context_sha256};});
const result={at:new Date().toISOString(),run,mutations,skipped,held_closed:mutations.filter(r=>r.held_closed).length,currency_refreshed:mutations.filter(r=>r.currency_refreshed).length,current:final.filter(r=>r.current).length,total:21,closure_guards_current:true,independent_audit:false,native_gate_acceptance:false,batch40_41_readiness_written:false,engine_controls_written:false,imports_or_content_written:false};
writeFileSync(`${out}/result.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({at:result.at,held_closed:result.held_closed,currency_refreshed:result.currency_refreshed,skipped:skipped.length,current:result.current},null,2));
