import {readFileSync,writeFileSync,statSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {basename} from 'node:path';
import {loadStep3,itemHash} from '../../../../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1} from '../../../../../tools/physics-support/step1-decisions.mjs';
import {orderedItems} from '../../../../../tools/physics-support/item-dependency-levels.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',base=`research/${run}-resumed-orchestration`,out=`${base}/metadata/source40-41-release`;
const hash=(b:any)=>createHash('sha256').update(b).digest('hex'),json=(p:string)=>JSON.parse(readFileSync(p,'utf8'));
const closurePaths=[40,41].map(n=>`${base}/spectral-lead/closure-tranche${n}.json`),closureBytes=closurePaths.map(p=>readFileSync(p)),closures=closureBytes.map(b=>JSON.parse(b.toString()));
const closure={...closures[0],history:closures[0].history,rows:closures.flatMap(c=>c.rows)},closurePath=closurePaths.join(' and ');
if(closures.some(c=>c.run!==run||c.unresolved_substantial_mathematical_prerequisites?.length)||closure.rows.length!==50)throw Error('Exact completed50source40/41 owning closure required');
const rootReleasePath=`${base}/metadata/source40-41-root-release.json`,rootRelease=json(rootReleasePath);
if(rootRelease.run!==run||rootRelease.authorized!==true||rootRelease.items?.length!==50||closurePaths.some((p,i)=>rootRelease.tranches.find((r:any)=>r.path===p)?.rawSha256!==hash(closureBytes[i]))||closure.rows.some((r:any)=>!rootRelease.items.includes(r.id)))throw Error('Exact root50 release required');
const initial=loadStep3(root,run),authMap=new Map(closure.rows.map((r:any)=>[r.id,r]));
const rows=orderedItems(initial.pages.filter(p=>p.items?.length),{validateLabels:false}).filter(r=>authMap.has(r.id)).map(r=>authMap.get(r.id) as any);
const guardMap=new Map<string,string>(closurePaths.map((p,i)=>[p,hash(closureBytes[i])]));
for(const r of rows){guardMap.set(`items/${r.id}.md`,r.raw_sha256);for(const [path,sha] of Object.entries(r.mirror_hashes))guardMap.set(path,sha as string);}
const guards=[...guardMap].map(([path,sha])=>{if(hash(readFileSync(path))!==sha)throw Error(`Tracker raw guard stale ${path}`);const st=statSync(path);return {path,sha,stamp:`${st.size}:${st.mtimeMs}:${st.ctimeMs}`};});
const s=initial,before=rows.map((r:any)=>{const path=`research/${run}-step1-${r.id}.json`,bytes=existsSync(path)?readFileSync(path):null,row=bytes?JSON.parse(bytes.toString()):null,native=itemHash(s,r.id,r.examination_dependencies);if(native!==r.native_context_sha256)throw Error(`Tracker native hash stale ${r.id}`);if(bytes)writeFileSync(`${out}/before/${basename(path)}`,bytes);return {id:r.id,path,raw_sha256:bytes?hash(bytes):null,row,native,held:row?.decision==='escalated',missing:!row,current:row?.decision==='ready'&&row.sha256===native};});
writeFileSync(`${out}/preparation.json`,JSON.stringify({at:new Date().toISOString(),run,root_authorization:'Exact50source40/41 after Mellin bibliographic correction:22held+one missing reviewed arbitraryCC+27ready-context rows; original history/caps preserved',closure_path:closurePath,closure_raw_sha256:closurePaths.map((p,i)=>({path:p,sha256:hash(closureBytes[i])})),guards,before},null,2)+'\n');
function checkGuards(){for(const g of guards){const st=statSync(g.path),stamp=`${st.size}:${st.mtimeMs}:${st.ctimeMs}`;if(stamp!==g.stamp){if(hash(readFileSync(g.path))!==g.sha)throw Error(`Actual closure input changed ${g.path}`);g.stamp=stamp;}}}
const mutations:any[]=[],skipped:any[]=[];
for(const r of rows){
 checkGuards();const original=before.find((b:any)=>b.id===r.id)!,bytes=existsSync(original.path)?readFileSync(original.path):null,actual=bytes?JSON.parse(bytes.toString()):null;
 if(actual?.decision==='ready'&&actual.sha256===r.native_context_sha256){skipped.push({id:r.id,reason:'Already current external owner row preserved'});continue;}
 if((bytes?hash(bytes):null)!==original.raw_sha256)throw Error(`External changed actual before row ${r.id}`);
 const reason=`Root-authorized completed source40/41 tranches after exact Mellin bibliographic title correction owning local proof/interface and exact old/current/alias/body/justified consumer closure from ${closure.reviewer} at ${closure.at}: ${closurePath}. Actual disposition: ${r.proof_observation} Consumer closure: ${r.consumer_disposition} Exact current examination_dependencies and tracker native_context_sha256 authenticated, all50current carrier/raw mirrors guarded; actual recorded strict39/40 checks and scoped new-carrier/Mellin layout checks retained. This is local owning readiness resolution/currency, not independent audit, native judgment, gate acceptance, or new blanket mathematical acceptance. ${closure.history} ${closure.source_import_qualification} Original prior record/evidence retained durably in ${out}/before; no carrier/mirror/import/controller files touched; mathematical public interfaces and genuine history retained.`;
 const next=recordStep1(root,{run,item:r.id,decision:'ready',owner:true,dependencies:r.examination_dependencies,reason});
 if(next.sha256!==r.native_context_sha256){if(bytes)writeFileSync(original.path,bytes);throw Error(`Native current hash changed ${r.id}; before row restored`);}
 mutations.push({id:r.id,held_closed:original.held,currency_refreshed:!original.held&&!original.missing,missing_created:original.missing,before_raw_sha256:original.raw_sha256,after_raw_sha256:hash(readFileSync(original.path)),native_context_sha256:next.sha256});
 writeFileSync(`${out}/progress.json`,JSON.stringify({at:new Date().toISOString(),run,mutations,skipped},null,2)+'\n');
}
for(const g of guards)if(hash(readFileSync(g.path))!==g.sha)throw Error(`Final closure raw guard changed ${g.path}`);
const final=rows.map((r:any)=>{const row=json(`research/${run}-step1-${r.id}.json`);return {id:r.id,current:row.decision==='ready'&&row.sha256===r.native_context_sha256};});
const result={at:new Date().toISOString(),run,mutations,skipped,held_closed:mutations.filter(r=>r.held_closed).length,currency_refreshed:mutations.filter(r=>r.currency_refreshed).length,missing_created:mutations.filter(r=>r.missing_created).length,current:final.filter(r=>r.current).length,total:50,closure_guards_current:true,independent_audit:false,native_gate_acceptance:false,only_exact_40_41_readiness_written:true,engine_controls_written:false,imports_or_content_written:false};
writeFileSync(`${out}/result.json`,JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify({at:result.at,held_closed:result.held_closed,currency_refreshed:result.currency_refreshed,missing_created:result.missing_created,skipped:skipped.length,current:result.current},null,2));
