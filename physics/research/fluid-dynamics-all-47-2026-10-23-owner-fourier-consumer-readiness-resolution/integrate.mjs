import {readFileSync,writeFileSync,existsSync,mkdirSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision} from '../../tools/physics-support/step1-decisions.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-fourier-consumer-readiness-resolution`,root=process.cwd();
const read=p=>JSON.parse(readFileSync(p,'utf8')),write=(p,v)=>writeFileSync(p,JSON.stringify(v,null,2)+'\n'),sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex');
const report=read(`${base}/review.json`),out=`${base}/integration.json`;
if(existsSync(out))throw Error('Integration already recorded');
if(report.unresolved_scientific_gaps.length||report.consumer_recommendations.length!==8)throw Error('Wrong/unresolved review');
const state=read(`.physics-autopilot/${run}/state.json`);
for(const b of [17,37,43])if(!state.dispatches[`1-scaffold:batch-${b}`]?.endedAt||!state.dispatches[`1-scaffold:batch-${b}`].lastExitOk)throw Error(`Writer not drained ${b}`);
for(const pid of readdirSync('/proc').filter(x=>/^\d+$/.test(x))){let args;try{args=readFileSync(`/proc/${pid}/cmdline`,'utf8').split('\0');}catch{continue;}
if(args.some(x=>x.endsWith('/dispatch.mjs'))&&args.includes('--run')&&args[args.indexOf('--run')+1]===run&&args.includes('--label')&&/^batch-(17|37|43)(?:$|-)/.test(args[args.indexOf('--label')+1]))throw Error('Relevant writer process live');}
const initial=loadStep1Record(root,run),supplierChecks=report.source17_review.all_final_interfaces_and_direct_deps_read.map(x=>({id:x.item,...step1Decision(initial,x.item)}));
if(supplierChecks.some(x=>!x.closed))throw Error('Source17 readiness stale: '+supplierChecks.filter(x=>!x.closed).map(x=>x.id));
const paths=new Set();
for(const b of [37,43])for(const suffix of ['pages.json','notes.md','coverage.json','proof-contracts.json','cross-batch-dependencies.json'])paths.add(`research/${run}-batch-${b}.${suffix}`);
for(const r of report.consumer_recommendations){paths.add(`items/${r.item}.md`);paths.add(`research/${run}-step1-${r.item}.json`);}
mkdirSync(`${base}/before-integration`,{recursive:true});
const before=[];for(const p of paths){if(!existsSync(p))continue;const archive=`${base}/before-integration/${p.replaceAll('/','__')}`;if(existsSync(archive))throw Error('Archive exists '+archive);writeFileSync(archive,readFileSync(p));before.push({path:p,archive,sha256:sha(p)});}
write(`${base}/before-integration.json`,{version:1,run,at:new Date().toISOString(),files:before});
const evidence=`Owner /root resolves the former missing source17 readiness hold using ${base}/review.json and actual current native source17 readiness. Normalized torus and explicit Countable Choice interfaces match. This is authoring readiness only; independent review and ordinary gates remain pending.`;
const c37p=`research/${run}-batch-37.proof-contracts.json`,c37=read(c37p);
for(const c of Object.values(c37.contracts))if(c.risk_review)c.risk_review={status:'authoring-readiness-owner-resolved; independent-review-pending',reviewer:'/root',notes:evidence};
write(c37p,c37);
const coveragePath=`research/${run}-batch-37.coverage.json`,coverage=read(coveragePath);
if(coverage.blockers.length!==1||!coverage.blockers[0].includes('readiness'))throw Error('Unexpected coverage blocker');
coverage.status='authoring-complete; owner resolved source readiness hold; independent review pending';coverage.blockers=[];coverage.owner_resolution={at:new Date().toISOString(),evidence};write(coveragePath,coverage);
const cp=`research/${run}-batch-43.proof-contracts.json`,c=read(cp);
for(const b of c.contracts['thm-fd-reduced-ode-global-energy'].boundaries)if(['empty','one'].includes(b.case))b.case_scope.source_excerpt='$r\\ge1$';
const ex=c.contracts['ex-fd-single-shear-reduced-model'];
for(const b of ex.boundaries){if(b.case==='empty')b.case_scope.source_excerpt='take the single vector field $v_1(x_1,x_2)=\\sqrt2\\sin(x_2)e_1$';if(['iff-forward','iff-reverse'].includes(b.case))b.case_scope.source_excerpt='unique forward solution $a(t)=a_0e^{-\\nu t}$';}
for(const f of ex.finite_checks)f.inputs=f.inputs.map(x=>x==='A1'?'given':x);write(cp,c);
const ep=`research/${run}-batch-43.cross-batch-dependencies.json`,edges=read(ep);
const edge=edges.find(e=>e.kind==='item'&&e.consumer==='def-fd-solenoidal-reduced-ode'&&e.supplier==='def-fd-periodic-fourier-sobolev-spaces');
if(!edge)throw Error('Missing exact reviewed edge');edge.evidence='Read the actual normalized torus, H^0 coefficient completion, unique L^2 representatives, real conjugate symmetry and Countable Choice interface; focused owner review confirms this exact use. '+evidence;write(ep,edges);
for(const b of [37,43]){const p=`research/${run}-batch-${b}.notes.md`;writeFileSync(p,readFileSync(p,'utf8')+`\n\n### Owner readiness resolution (${new Date().toISOString()})\n\n${evidence}\nNative observations above are retained as historical authoring evidence.\n`);}
const records=report.consumer_recommendations.toSorted((a,b)=>a.dependency_level-b.dependency_level).map(r=>({item:r.item,decision:'ready',dependencies:r.examined_direct_dependency_ids,reason:evidence+' '+r.actual_interface_and_hypotheses}));
const receipt={version:1,run,owner:'/root',at:new Date().toISOString(),review:{path:`${base}/review.json`,sha256:sha(`${base}/review.json`)},suppliers:supplierChecks.map(x=>({id:x.id,sha256:x.row.sha256,retained:true})),before:`${base}/before-integration.json`,source_changes:[],gate_attempts:0};
try{const rows=recordStep1Batch(root,{run,owner:true,records});const current=loadStep1Record(root,run);receipt.records=rows.map(row=>({id:row.item,sha256:row.sha256,current:step1Decision(current,row.item).closed}));if(receipt.records.some(r=>!r.current))throw Error('Recorded readiness changed');for(const b of before.filter(x=>x.path.startsWith('items/')))if(sha(b.path)!==b.sha256)throw Error('Consumer source changed');receipt.complete=true;}catch(e){receipt.complete=false;receipt.error=e.message;write(out,receipt);throw e;}
write(out,receipt);console.log(JSON.stringify({current_ready:receipt.records.length,retained_source_ready:supplierChecks.length,gates:0}));
