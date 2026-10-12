import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {basename} from 'node:path';
import {execFileSync} from 'node:child_process';
import {loadStep3,itemHash} from '../../../../../tools/physics-support/frontier-snapshot.mjs';
import {dependencyLevels,orderedItems} from '../../../../../tools/physics-support/item-dependency-levels.mjs';
import {recordStep1} from '../../../../../tools/physics-support/step1-decisions.mjs';
import {split,yaml} from '../../../../../tools/physics-support/pathway-lib.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',base=`research/${run}-resumed-orchestration/metadata`,out=`${base}/source40-label-repair`;
const hash=(b:any)=>createHash('sha256').update(b).digest('hex'),json=(p:string)=>JSON.parse(readFileSync(p,'utf8')),proposal=json(`${out}/proposal.json`),targets=new Set(proposal.rows.map((r:any)=>r.id));
for(const g of proposal.guards)if(hash(readFileSync(g.path))!==g.rawSha256)throw Error(`Exact three-file guard changed ${g.path}`);
const s=loadStep3(root,run),edges=new Map<string,Set<string>>(),aliases=new Map<string,string>();
for(const [id,record] of s.items){const p=`items/${id}.md`,fm=existsSync(p)?yaml().parse(split(readFileSync(p,'utf8')).fm):{};for(const a of fm.aliases??[])aliases.set(a,id);edges.set(id,new Set([...(record.item.deps??[]),...(record.item.justified_by??[]),...(record.item.forward_refs??[]),...(fm.deps??[]),...(fm.justified_by??[]),...(fm.forward_refs??[])]));}
for(const [id,deps]of edges)edges.set(id,new Set([...deps].map(d=>aliases.get(d)??d)));
const cone=new Set<string>(targets as Set<string>);let changed=true;while(changed){changed=false;for(const [id,deps]of edges)if(!cone.has(id)&&[...deps].some(d=>cone.has(d))){cone.add(id);changed=true;}}
const order=orderedItems(s.pages.filter(p=>p.items?.length),{validateLabels:false}).filter(r=>cone.has(r.id));
const before=order.map(r=>{const path=`research/${run}-step1-${r.id}.json`,bytes=existsSync(path)?readFileSync(path):null,row=bytes?JSON.parse(bytes.toString()):null,native=itemHash(s,r.id,row?.dependencies??[]);if(bytes)writeFileSync(`${out}/before/${basename(path)}`,bytes);return {id:r.id,path,row,native,beforeRawSha256:bytes?hash(bytes):null,authenticCurrent:row?.decision==='ready'&&row.sha256===native};});
for(const g of proposal.guards){if(hash(readFileSync(g.path))!==g.rawSha256)throw Error(`Pre-patch guard changed ${g.path}`);writeFileSync(`${out}/before/${basename(g.path)}`,readFileSync(g.path));}
for(const g of proposal.guards)writeFileSync(g.path,readFileSync(`${out}/${basename(g.path)}.proposed`));
for(const r of proposal.rows){s.items.get(r.id)!.item.dependency_level=r.computed;s.cache.delete(r.id);}
const levelGraph=dependencyLevels(s.pages.filter(p=>p.items?.length),{validateLabels:false});
const checked=proposal.rows.map((r:any)=>{const p=`items/${r.id}.md`,fm=yaml().parse(split(readFileSync(p,'utf8')).fm);return {id:r.id,manifest:s.items.get(r.id)!.item.dependency_level,carrier:fm.dependency_level,computed:levelGraph.levels.get(r.id)};});
if(levelGraph.errors.length||checked.some((r:any)=>r.manifest!==r.computed||r.carrier!==r.computed))throw Error('Exact current native label check failed');
const layoutPaths=proposal.rows.map((r:any)=>`items/${r.id}.md`),argv=['tools/physics-support/proof-layout.mjs',...layoutPaths],stdout=execFileSync('node',argv,{encoding:'utf8',cwd:root});
writeFileSync(`${out}/final-scoped-checks.json`,JSON.stringify({at:new Date().toISOString(),nativeGraphItems:levelGraph.items.size,graphErrors:levelGraph.errors,checked,proofLayout:{command:['node',...argv],exitCode:0,stdout},scope:'Exact metadata labels plus mandated layout2; no full battery or mathematical audit'},null,2)+'\n');
const impact=before.map(r=>({...r,afterNativeHash:itemHash(s,r.id,r.row?.dependencies??[])}));
writeFileSync(`${out}/native-hash-impact.json`,JSON.stringify({at:new Date().toISOString(),globalContextLoads:1,cone:impact,publicInterfaceChanged:false},null,2)+'\n');
const mutations:any[]=[],skipped:any[]=[];
for(const r of impact){const current=json(r.path);if(current.decision==='ready'&&current.sha256===r.afterNativeHash){skipped.push({id:r.id,reason:'Already current preserved'});continue;}if(r.native===r.afterNativeHash){skipped.push({id:r.id,reason:'Native hash unchanged'});continue;}if(!r.authenticCurrent||hash(readFileSync(r.path))!==r.beforeRawSha256)throw Error(`No exact genuine current before/readiness changed ${r.id}`);
 const reason=`${r.row.reason} Root-authorized label-only correction: two source40manifest/carrier dependency_level fields now equal actual native in-run graph (gap-closing1, long-time-RWA2). Statements/Proof/deps and all other metadata unchanged. Exact two-item native level check and mandated proof-layout output ${out}/final-scoped-checks.json. Existing completed source40 owning proof/old-current-alias consumer closure retained; metadata-only native hash impact ${out}/native-hash-impact.json. Original identities/cycle1cap2 preserved, no new mathematical audit, repair round, gate or import acceptance.`;
 const next=recordStep1(root,{run,item:r.id,decision:'ready',owner:true,dependencies:r.row.dependencies,reason});if(next.sha256!==r.afterNativeHash)throw Error(`Native inputs changed during label refresh ${r.id}`);mutations.push({id:r.id,beforeRawSha256:r.beforeRawSha256,afterRawSha256:hash(readFileSync(r.path)),nativeSha256:next.sha256});}
const result={at:new Date().toISOString(),run,checked,nativeHashImpacted:impact.filter(r=>r.native!==r.afterNativeHash).length,mutations,skipped,remainingOpenLabelFindings:0,publicInterfaceChanged:false,independentMathAudit:false,fullBatteryRepeated:false,enginePaused:false};writeFileSync(`${out}/result.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
