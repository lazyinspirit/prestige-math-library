import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep3,itemHash} from '../../tools/step3-decisions.mjs';
import {recordStep1,step1Decision,checkStep1} from '../../tools/step1-decisions.mjs';
const run='frontier-44-special-representation-examples-28',root=process.cwd();
const dir=`research/${run}-owner-native24-cyclotomic-consumer-review`;
const evidencePath=process.argv[2];if(!evidencePath)throw Error('Explicit final same-reviewer evidence required');
const sha=b=>createHash('sha256').update(b).digest('hex');
const evidenceRaw=readFileSync(evidencePath),evidence=JSON.parse(evidenceRaw);
if(evidence.run!==run||evidence.reviewer!=='/root/repair_klr_global_basis'||!/^SUFFICIENT/.test(evidence.verdict)||evidence.remaining_mathematical_gap!==null)throw Error('Final sufficient verdict missing');
const guardList=evidence.raw_current_guards;if(!Array.isArray(guardList)||!guardList.length)throw Error('Current raw guard list required');
const verify=()=>{for(const g of guardList){if(g.absent===true){if(existsSync(g.path))throw Error(`Expected absent: ${g.path}`);}else if(!existsSync(g.path)||sha(readFileSync(g.path))!==g.sha256)throw Error(`Input drift: ${g.path}`);}};
verify();
const snapshot=loadStep3(root,run),pages=snapshot.pages.filter(p=>String(p.batch)==='24'),ids=pages.flatMap(p=>p.items.map(i=>i.id));
if(ids.length!==47||!Array.isArray(evidence.subjects)||evidence.subjects.length!==47)throw Error('Final reviewed inventory mismatch');
const reviewed=new Map(evidence.subjects.map(x=>[x.id,x]));
for(const id of ids){const r=reviewed.get(id);if(!r||r.sha256!==itemHash(snapshot,id,r.deps))throw Error(`Final semantic binding drift: ${id}`);}
const ordered=ids.sort((a,b)=>snapshot.items.get(a).item.dependency_level-snapshot.items.get(b).item.dependency_level||a.localeCompare(b));
const round=evidence.repair_round??1; const archive=`${dir}/root-final-step1-registration${round===2?"-round2":""}`;mkdirSync(archive);
const before=[];for(const id of ordered){const path=`research/${run}-step1-${id}.json`;if(existsSync(path)){const raw=readFileSync(path),out=`${archive}/${id}.before.json`;writeFileSync(out,raw,{flag:'wx'});before.push({path,sha256:sha(raw),before_file:out});}else before.push({path,absent:true});}
// Records are outputs. Their authentic prior bytes above remain immutable history.
const outputPaths=new Set(before.map(x=>x.path));if(guardList.some(g=>outputPaths.has(g.path)))throw Error('Final proof guards incorrectly include readiness outputs');
const rows=[];for(const id of ordered){verify();const r=reviewed.get(id);const row=recordStep1(root,{run,item:id,decision:'ready',owner:true,dependencies:r.deps,reason:`Same original reviewer final actual-afterbinding sufficiency for native24 repair round ${round}; evidence ${evidencePath}`});if(row.sha256!==r.sha256)throw Error(`Registration hash drift: ${id}`);rows.push(row);console.log(`Registered ${rows.length}/47 ${id}`);}
verify();const fresh=loadStep3(root,run);for(const row of rows)if(!step1Decision(fresh,row.item).closed||itemHash(fresh,row.item,row.dependencies)!==row.sha256)throw Error(`Fresh currency failed: ${row.item}`);
const status=checkStep1(fresh);const unexpected=status.work.filter(w=>w.item&&ids.includes(w.item));if(unexpected.length)throw Error(`Unexpected unresolved items: ${unexpected.map(x=>x.item).join(',')}`);
verify();const receipt={version:1,run,at:new Date().toISOString(),action:'normal-api-native24-final-step1-readiness',repair_round:round,maximum_rounds:2,evidence:{path:evidencePath,sha256:sha(evidenceRaw)},before,rows,current_subjects:47,all_registered_subjects_freshly_ready:true,all_nonoutput_guards_unchanged:guardList.length,remaining_empty_pages:status.work.filter(w=>!w.item).map(w=>w.page),other_unresolved:status.work.filter(w=>w.item&&!ids.includes(w.item)).map(w=>({item:w.item,page:w.page,reason:w.reason})),gate_attempt:false,independent_audit_claim:false};
writeFileSync(`${archive}/registration.json`,JSON.stringify(receipt,null,2)+'\n',{flag:'wx'});console.log(JSON.stringify({registered:47,frontier_items:status.items,frontier_ready:status.ready,remaining_empty:receipt.remaining_empty_pages,receipt:`${archive}/registration.json`}));
