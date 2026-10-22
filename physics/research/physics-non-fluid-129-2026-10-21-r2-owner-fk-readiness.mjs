// Root-only globally drained readiness join for the released FK proof closure.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {loadStep1Record,itemInputPaths} from '../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision,checkStep1} from '../tools/physics-support/step1-decisions.mjs';
import {runPages,dependencyLevels} from '../tools/physics-support/item-dependency-levels.mjs';
import {readItem} from '../tools/physics-support/physics-content.mjs';
const root=process.cwd(),run='physics-non-fluid-129-2026-10-21-r2',dir=`research/${run}-owner-fk-readiness`,read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(!process.argv.includes('--outside-writers-drained'))throw Error('Root must verify every outside source writer released');
if(existsSync(dir))throw Error('Prior application exists; inspect history');
const assertDrained=()=>{if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native writers/controller not drained');};
assertDrained();
const reportPath=`research/${run}-owner-fk-critical-point/owned-source-release-report.json`,report=read(reportPath);
if(sha(readFileSync(reportPath))!=='e65003e99cd0bf23269e591ee3b5bbb7874667e1f97162b70629086b4877d668'||report.scope.current_items!==19||report.scope.pending_writers.length||report.scope.pending_scientific_obligations.length||report.scope.outside_consumers.length)throw Error('Scientific source release incomplete');
const edgePath=`research/${run}-owner-fk-page-edges/receipt.json`,edges=read(edgePath),repairs=new Map(edges.changes.map(row=>[row.path,row]));
const bindings=[{path:reportPath,sha256:sha(readFileSync(reportPath))},{path:edgePath,sha256:sha(readFileSync(edgePath))},...report.items.map(i=>({path:i.current.path,sha256:i.current.raw_sha256})),...report.used_external_supplier_bindings.map(i=>({path:i.path,sha256:i.raw_sha256})),...report.checks];
for(const row of report.metadata){const repair=repairs.get(row.path);if(repair&&repair.before_sha256!==row.current_sha256)throw Error('Metadata repair preimage not released '+row.path);bindings.push({path:row.path,sha256:repair?.after_sha256??row.current_sha256});}
for(const row of bindings)if(sha(readFileSync(row.path))!==row.sha256)throw Error('Released input changed '+row.path);
const metadata=read(`research/${run}-owner-fk-final-plan-observation/physics-metadata.json`);if(metadata.items!==19||metadata.errors.length)throw Error('Focused physics metadata unresolved');
const planLog=`research/${run}-owner-fk-page-edges/current-plan-check.log`;if(!readFileSync(planLog,'utf8').includes('OK — declared page order is acyclic'))throw Error('Actual current19item plan check not passed');
const snapshot=loadStep1Record(root,run),pages=snapshot.pages.filter(p=>p.batch==='97'),ids=pages.flatMap(p=>p.items.map(i=>i.id));
if(ids.length!==19||report.items.some(i=>!ids.includes(i.id)))throw Error('Released/current frontier differs');
const levels=dependencyLevels(runPages(root,run));if(levels.errors.length)throw Error(JSON.stringify(levels.errors));
const records=ids.map(id=>{const item=readItem(`items/${id}.md`),old=step1Decision(snapshot,id);if(item.dependency_level!==levels.levels.get(id))throw Error('Current source level differs '+id);return {id,dependencies:[...new Set([...(old.row?.dependencies??[]),...(item.deps??[]),...(item.justified_by??[])])]};}).sort((a,b)=>levels.levels.get(a.id)-levels.levels.get(b.id)||a.id.localeCompare(b.id));
const paths=new Set(bindings.map(r=>r.path));for(const row of records)for(const path of itemInputPaths(snapshot,row.id,row.dependencies))paths.add(path);
paths.add('research/plan-spec.json');paths.add(planLog);paths.add('research/math-imports.json');
const guards=new Map([...paths].map(path=>[path,sha(readFileSync(path))]));
function verify(){assertDrained();for(const[path,h]of guards)if(sha(readFileSync(path))!==h)throw Error('Guarded input changed '+path);}
verify();mkdirSync(dir);
const render=spawnSync(process.execPath,['tools/physics-support/rendercheck.mjs',...pages.map(p=>`library/${p.category}/${p.id}.md`),'--json'],{cwd:root,encoding:'utf8'});writeFileSync(`${dir}/page-render.json`,render.stdout??'');if(render.status!==0)throw Error('Changed source page renderer failed');
mkdirSync(`${dir}/before`);for(const row of records){const path=`research/${run}-step1-${row.id}.json`;if(existsSync(path))writeFileSync(`${dir}/before/${row.id}.json`,readFileSync(path));}
writeFileSync(`${dir}/preflight.json`,JSON.stringify({at:new Date().toISOString(),ids,records,guarded_paths:guards.size,source_report:reportPath,source_report_sha256:sha(readFileSync(reportPath)),global_drained:true,full_native_gate:false},null,2)+'\n');
verify();
const written=recordStep1Batch(root,{run,owner:true,records:records.map(row=>({item:row.id,decision:'ready',dependencies:row.dependencies,reason:`Root adopts the exact19item same-owner FK scientific release ${reportPath}. Seven local helpers close finite-box influence, torus cellular duality, numerical pressure, corrected mixed-reflection geometry/exploration, wired numerical threshold, animal envelope and subcritical decay; approved real-q>=1/ceiling-width/actual-edge domains and Potts/Ising conversions are retained. The rejected first-hit construction and executable counterexample remain archived; the second corrected construction is fully proved. Actual Borel-law/coupling statements explicitly retain the published Countable Choice premise; numerical finite-volume results remain choice-free. Same owner checked every actual consumer and found no outside closure. Root verified all exact source/metadata/supplier/check bindings, actual full source writer drain, current dependency levels and focused19item metadata; added only two missing existing-published graph-page prerequisite declarations, whose real19item plan check and changed-page render pass. Native import verification passed33483pins and required originals immediately before this join. Old readiness records and examined dependency/context arrays are retained. Ordinary globally drained native authoring readiness; no independent acceptance or full native gate.`}))});
verify();const currency=checkStep1(loadStep1Record(root,run));writeFileSync(`${dir}/currency.json`,JSON.stringify(currency,null,2)+'\n');if(!currency.closed)throw Error('Remaining authoring readiness holds: '+JSON.stringify(currency.work.map(r=>({item:r.item,reason:r.reason}))));
writeFileSync(`${dir}/application.json`,JSON.stringify({at:new Date().toISOString(),run,operation:'native recordStep1Batch at actual global drained join',written:written.map(r=>({item:r.item,sha256:r.sha256})),current_frontier_items:currency.items,all_current:currency.closed,guards:[...guards].map(([path,sha256])=>({path:relative(root,path.startsWith('/')?path:join(root,path)),sha256})),full_native_gate:false},null,2)+'\n');console.log(JSON.stringify({ready:written.length,current_frontier:currency.items,all_current:currency.closed,guarded_paths:guards.size}));
