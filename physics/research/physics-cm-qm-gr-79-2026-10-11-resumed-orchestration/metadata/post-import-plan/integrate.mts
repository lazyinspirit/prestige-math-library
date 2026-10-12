// Research-only by default. Root must release exact current rows after all writes.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {join,basename} from 'node:path';
import {loadStep3,itemHash} from '../../../../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1} from '../../../../../tools/physics-support/step1-decisions.mjs';
import {orderedItems} from '../../../../../tools/physics-support/item-dependency-levels.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',root=process.cwd(),base=`research/${run}-resumed-orchestration/metadata`,out=`${base}/post-import-plan`;
const hash=(b:any)=>createHash('sha256').update(b).digest('hex'),json=(p:string)=>JSON.parse(readFileSync(p,'utf8'));
const args=process.argv.slice(2),option=(f:string)=>{const i=args.indexOf(f);return i<0?undefined:args[i+1];};
const executionPath=option('--import-execution'),releasePath=option('--release'),execute=args.includes('--execute');
if(!executionPath||!releasePath)throw Error('Supply --import-execution actual seven execution.json and --release root exact-current authorization.json; --execute only after final root release');
const execution=json(executionPath),release=json(releasePath);
if(execution.run!==run||execution.changed_snapshots?.length!==7||execution.post_scoped_drifts!==0)throw Error('Actual seven-overlay execution required');
const before=json(join(execution.archive,'before-bindings.json'));
const importBefore=new Map(before.rows.map((r:any)=>[r.id,r]));
const old42=new Map(json(`${base}/batch42-momentum-applied/applied-impact.json`).consumer_hash_impact.map((r:any)=>[r.id,r]));
const old37=new Map(json(`${base}/batch37-refresh-result.json`).updated.map((r:any)=>[r.id,r]));
if(release.run!==run||release.writersDrained!==true||release.externalPhysicsThreadsIdle!==true||release.writerScopes?.length!==0||!Array.isArray(release.items)||!release.closureAuthority?.trim()||!release.localCheckEvidence?.trim()||!release.verifiedAt)throw Error('Exact actual root drain/current-closure/local-check authority required');
const released=new Map(release.items.map((r:any)=>[r.id,r]));
if(released.size!==release.items.length)throw Error('Duplicate released item');
function guards(){
 if(Date.now()-Date.parse(release.verifiedAt)>600000)throw Error('Root drain authority older than ten minutes');
 if(!release.inputGuards?.length)throw Error('Root final input guards required');
 for(const g of release.inputGuards)if(hash(readFileSync(g.path))!==g.rawSha256)throw Error(`Final input changed ${g.path}`);
}
guards();
const s=loadStep3(root,run),ordered=orderedItems(s.pages.filter(p=>p.items?.length),{validateLabels:false});
const scope=new Set([...old42.keys(),...old37.keys(),...importBefore.keys()]);
const rows=ordered.filter((r:any)=>scope.has(r.id)).map((r:any)=>{
 const path=`research/${run}-step1-${r.id}.json`,raw=existsSync(path)?readFileSync(path):null,row=raw?JSON.parse(raw.toString()):null,current=itemHash(s,r.id,row?.dependencies??[]),prior:any=importBefore.get(r.id),from42:any=old42.get(r.id),from37:any=old37.get(r.id),actualImportHashChanged=prior?prior.native_old_hash!==current:false;
 const authenticReadyBefore=prior?.status==='ready'||!!from42||!!from37;
 const category=!row?'missing':row.decision==='escalated'?'owner-held':row.sha256===current?'unchanged-current':authenticReadyBefore?'stale-authentic-ready':'stale-no-ready-before';
 return {id:r.id,batch:r.batch,level:r.level,path,row,raw,currentNativeHash:current,beforeRawSha256:raw?hash(raw):null,category,actualImportHashChanged,authenticReadyBefore};
});
const serial=rows.map(({raw,...r}:any)=>r),report={at:new Date().toISOString(),run,globalContextLoads:1,importExecution:executionPath,rootRelease:releasePath,rows:serial,counts:Object.fromEntries([...new Set(rows.map(r=>r.category))].map(k=>[k,rows.filter(r=>r.category===k).length])),productionWritten:false};
writeFileSync(`${out}/actual-post-import-classification.json`,JSON.stringify(report,null,2)+'\n');
if(!execute){console.log(JSON.stringify({mode:'research-only',counts:report.counts},null,2));process.exit(0);}
// Even an exact root release cannot silently convert a preexisting hold/missing
// row: these require separate substantive spectral closure outside this script.
const eligible=rows.filter(r=>released.has(r.id)&&r.category==='stale-authentic-ready');
for(const r of rows)if(released.has(r.id)){
 const authority:any=released.get(r.id);
 if(r.category==='unchanged-current')continue;
 if(['owner-held','missing','stale-no-ready-before'].includes(r.category))throw Error(`Substantive hold/missing-before excluded ${r.id}`);
 if(authority.nativeSha256!==r.currentNativeHash||authority.beforeRawSha256!==r.beforeRawSha256)throw Error(`Released exact current hash/raw row mismatch ${r.id}`);
}
for(const id of released.keys())if(!scope.has(id))throw Error(`Released ID outside authentic integration scope ${id}`);
const archive=`${out}/execution-${new Date().toISOString().replaceAll(':','-')}`,beforeDir=join(archive,'before');mkdirSync(beforeDir,{recursive:true});
for(const r of eligible)writeFileSync(join(beforeDir,basename(r.path)),r.raw!);
writeFileSync(join(archive,'selection.json'),JSON.stringify(report,null,2)+'\n');
const mutations=[];
for(const r of eligible){
 guards();
 if(hash(readFileSync(r.path))!==r.beforeRawSha256)throw Error(`Readiness row changed externally ${r.id}`);
 const reason=`${r.row.reason} Post-seven-import root-authorized bookkeeping currency integration: actual overlay execution ${executionPath}; exact current closure ${release.closureAuthority}; actual final local checks ${release.localCheckEvidence}. Existing authentic ready-before retained, no new public interface, independent audit, review-round reset, or gate acceptance. Exact native hash/context changed; preexisting held/missing rows remain excluded.`;
 const next=recordStep1(root,{run,item:r.id,decision:'ready',owner:true,dependencies:r.row.dependencies,reason});
 if(next.sha256!==r.currentNativeHash)throw Error(`Native helper observed changed input ${r.id}`);
 mutations.push({id:r.id,beforeRawSha256:r.beforeRawSha256,afterRawSha256:hash(readFileSync(r.path)),nativeSha256:next.sha256});
 writeFileSync(join(archive,'mutations.json'),JSON.stringify(mutations,null,2)+'\n');
}
for(const r of rows.filter(r=>!mutations.some(m=>m.id===r.id)))if(r.raw&&hash(readFileSync(r.path))!==r.beforeRawSha256)throw Error(`Unselected row changed ${r.id}`);
guards();
writeFileSync(join(archive,'result.json'),JSON.stringify({at:new Date().toISOString(),run,mutations,skippedCurrent:rows.filter(r=>r.category==='unchanged-current').map(r=>r.id),preservedHeld:rows.filter(r=>r.category==='owner-held').map(r=>r.id),preservedMissing:rows.filter(r=>r.category==='missing').map(r=>r.id),globalContextLoads:1,nativeHelperPerMutationContext:'Required unmodified API behavior',contentWritten:false},null,2)+'\n');
console.log(JSON.stringify({mutated:mutations.length,archive},null,2));
