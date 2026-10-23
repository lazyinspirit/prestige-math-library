import {readFileSync,writeFileSync,existsSync,mkdirSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-formal-consumer-readiness-resolution`,root=process.cwd();
const read=p=>JSON.parse(readFileSync(p)),write=(p,v)=>writeFileSync(p,JSON.stringify(v,null,2)+'\n'),sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const report=read(`${base}/review.json`),out=`${base}/integration.json`;
if(existsSync(out)||report.items.length!==11||report.unresolved_scientific_gaps.length)throw Error('Already applied or unresolved review');
const state=read(`.physics-autopilot/${run}/state.json`);
for(const b of [1,3,4,7,39])if(!state.dispatches[`1-scaffold:batch-${b}`]?.endedAt||!state.dispatches[`1-scaffold:batch-${b}`].lastExitOk)throw Error('Undrained batch '+b);
if(!state.nativeRefreshes.some(x=>x.unit==='5'&&x.completedAt&&x.resultFile===report.native_supplier_evidence.source5_native_refresh.resultFile))throw Error('Source5 genuine refresh not complete');
for(const pid of readdirSync('/proc').filter(x=>/^\d+$/.test(x))){let args;try{args=readFileSync(`/proc/${pid}/cmdline`,'utf8').split('\0');}catch{continue;}
if(args.some(x=>x.endsWith('/dispatch.mjs'))&&args.includes('--run')&&args[args.indexOf('--run')+1]===run&&args.includes('--label')&&/^batch-(1|3|4|5|7|39)(?:$|-)/.test(args[args.indexOf('--label')+1]))throw Error('Relevant native writer live');}
const snapshot=loadStep1Record(root,run),suppliers=['def-fd-x00','def-fd-quantity-and-frame-conventions','thm-fdmath-finite-reynolds-identity'].map(id=>({id,...step1Decision(snapshot,id)}));
if(suppliers.some(x=>!x.closed))throw Error('Actual supplier readiness stale');
const paths=new Set();for(const b of [4,7,39])for(const suffix of ['pages.json','notes.md','coverage.json','proof-contracts.json','cross-batch-dependencies.json'])paths.add(`research/${run}-batch-${b}.${suffix}`);
paths.add(`research/${run}-batch-7-notes.md`);
for(const r of report.items){paths.add(`items/${r.item}.md`);paths.add(`research/${run}-step1-${r.item}.json`);}
mkdirSync(`${base}/before-integration`,{recursive:true});const before=[];
for(const p of paths){if(!existsSync(p))continue;const archive=`${base}/before-integration/${p.replaceAll('/','__')}`;if(existsSync(archive)){if(sha(archive)!==sha(p))throw Error('Archived input changed '+p);}else writeFileSync(archive,readFileSync(p));before.push({path:p,archive,sha256:sha(p)});}
write(`${base}/before-integration-complete.json`,{version:1,run,at:new Date().toISOString(),files:before});
const evidence=`Owner /root resolves the former missing readiness/placement hold using ${base}/review.json and current source5, F01 and finite-Reynolds readiness bindings. Actual R3 conventions, locally defined all-n residual and R2 shallow-water branches, and stress sign/units match their precise consuming scopes. This records authoring readiness; independent review and native gates remain required.`;
for(const b of [4,7,39]){
 const cp=`research/${run}-batch-${b}.proof-contracts.json`,c=read(cp);
 for(const entry of Object.values(c.contracts))for(const key of ['prerequisite_gaps','unresolved_prerequisites'])if(entry[key]){entry.resolved_prerequisites=[...(entry.resolved_prerequisites??[]),...entry[key].map(row=>({...row,status:'owner-resolved',current_readiness:evidence,evidence,planned_proof_status:'Historical planned fields retained for traceability; current supplier is available and current authoring readiness verified.'}))];entry[key]=[];}
 write(cp,c);
 const ep=`research/${run}-batch-${b}.cross-batch-dependencies.json`,edges=read(ep);
 for(const edge of edges)if((b===7&&edge.supplier==='fd-x01')||edge.supplier==='def-fd-x00'||(b===39&&edge.supplier==='fd-x01')||(b===4&&edge.supplier==='def-fd-quantity-and-frame-conventions')){edge.status='verified';edge.evidence=evidence+' Exact supplier/consumer use is documented in the focused review; no independent proof acceptance is asserted.';}
 write(ep,edges);
 const np=`research/${run}-batch-${b}${b===7?'-':'.'}notes.md`;writeFileSync(np,readFileSync(np,'utf8')+`\n\n### Owner readiness resolution (${new Date().toISOString()})\n\n${evidence}\nEarlier author observations are historical and preserved in before-integration.\n`);
}
const records=report.items.toSorted((a,b)=>a.dependency_level-b.dependency_level).map(r=>({item:r.item,decision:'ready',dependencies:r.examined_dependency_ids,reason:evidence+' '+r.actual_use_and_hypothesis_match}));
const receipt={version:1,run,owner:'/root',at:new Date().toISOString(),review:{path:`${base}/review.json`,sha256:sha(`${base}/review.json`)},supplier_bindings:suppliers.map(x=>({id:x.id,sha256:x.row.sha256,retained:true})),before:`${base}/before-integration-complete.json`,source_changes:[],gates_attempted:0};
try{const rows=recordStep1Batch(root,{run,owner:true,records}),fresh=loadStep1Record(root,run);receipt.records=rows.map(row=>({id:row.item,sha256:row.sha256,current:step1Decision(fresh,row.item).closed}));if(receipt.records.some(r=>!r.current))throw Error('Current readiness changed');for(const p of before.filter(x=>x.path.startsWith('items/')))if(sha(p.path)!==p.sha256)throw Error('Source changed');receipt.complete=true;}catch(e){receipt.complete=false;receipt.error=e.message;write(out,receipt);throw e;}
write(out,receipt);console.log(JSON.stringify({current_ready:receipt.records.length,suppliers_current:suppliers.length,gates:0}));
