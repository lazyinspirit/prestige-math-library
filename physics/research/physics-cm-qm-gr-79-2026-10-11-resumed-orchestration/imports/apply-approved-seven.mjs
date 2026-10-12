// Exact persisted user-approved seven-item reconciliation only. Root must
// provide current drain evidence; no engine controls or readiness writes.
import {readFileSync,writeFileSync,existsSync,readdirSync,mkdirSync,statSync,chmodSync,renameSync} from 'node:fs';
import {join,resolve,relative,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {markdownFiles,readItem} from '../../../../tools/physics-support/physics-content.mjs';
import {frontierMathematicsImportScope} from '../../../../tools/physics-support/frontier-import-scope.mjs';
import {loadStep3,itemHash,itemInputPaths} from '../../../../tools/physics-support/frontier-snapshot.mjs';
import {recordedPublishedRepair} from '../../../../tools/published-repair-policy.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',dest=join(root,'research',run+'-resumed-orchestration/imports'),prior=join(root,'research',run+'-supervision-restored-2026-10-11/import-drift-triage');
const json=p=>JSON.parse(readFileSync(p,'utf8')),sha=p=>createHash('sha256').update(readFileSync(p)).digest('hex'),check=(yes,msg)=>{if(!yes)throw Error(msg);};
const ids=['def-dependent-choice','lem-power-monotone','rem-real-exponents-deferred','thm-countable-union-of-countable','thm-n-cross-n-countable','thm-schroder-bernstein','thm-reals-cauchy-complete'];
const expected=json(join(dest,'seven-current-guards.json')).rows;
const drainPath=join(dest,'approved-seven-writer-drain.json');
check(existsSync(drainPath),'Root drain receipt missing');
const drain=json(drainPath);check(drain.run===run&&drain.externalPhysicsThreadsIdle===true&&drain.affectedAdoptedWritersDrained===true&&Array.isArray(drain.writerScopes)&&drain.writerScopes.length===0,'Root actual external/adopted drain evidence incomplete');
check(drain.verifiedAt&&Date.now()-Date.parse(drain.verifiedAt)<600000,'Root writer-drain evidence exceeds ten minutes');
const assertNativeDrain=()=>{const state=json(join(root,'.physics-autopilot',run,'state.json'));check(!Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt),'Active native worker remains');check(drain.naturalWriterFreeJoin===true&&drain.pendingAuthorDispatches===0,'Root must confirm natural author-free join without pausing');};
assertNativeDrain();
const receiptPath=join(root,'research/math-imports.json'),receipt=json(receiptPath),receiptBefore=sha(receiptPath),receiptText=readFileSync(receiptPath,'utf8');
check(receiptBefore==='7b52d31d322c7fa8f7174d676e674f0b1a4e4a8ecf561efe75cdd1f98207499e','Live receipt differs from exact approved page-only baseline; rebase actual approved overlays before execution');
const guards=ids.map(id=>{const path='items/'+id+'.md',e=expected.find(r=>r.id===id),local=join(root,path),source=join(receipt.source_root,path),prepared=join(prior,id==='thm-reals-cauchy-complete'?'seventh-drift-proposal/prepared-after7/physics':'prepared-after/physics',path),fm=readItem(source),repair=recordedPublishedRepair(receipt.source_root,id,readFileSync(source,'utf8'),fm.verification?.repair);check(receipt.files.filter(f=>f.path===path).length===1,'Approved receipt path not unique '+id);check(sha(local)===e.local&&receipt.files.find(f=>f.path===path).sha256===e.pin,'Approved old local/pin guard changed '+id);check(sha(source)===e.original&&sha(prepared)===e.prepared&&e.original===e.prepared,'Exact approved original/prepared guard changed '+id);check(fm.status==='published'&&repair.ok,'Original recorded repair/publication invalid '+id);return{id,path,local,source,prepared,old:e.pin,new:e.original,mode:statSync(local).mode&0o777,repair};});
const addedIds=new Set(guards.flatMap(g=>{const old=readItem(g.local),after=readItem(g.source);return(after.deps??[]).filter(id=>!(old.deps??[]).includes(id));}));
const addedPins=[...addedIds].sort().map(id=>{const path='items/'+id+'.md',pin=receipt.files.find(f=>f.path===path);check(pin&&sha(join(root,path))===pin.sha256&&sha(join(receipt.source_root,path))===pin.sha256,'Approved added supplier pin/original drift '+id);check(readItem(join(receipt.source_root,path)).status==='published','Added supplier no longer published '+id);return{id,path,sha256:pin.sha256};});
const originals={items:markdownFiles(join(receipt.source_root,'items')).map(readItem),pages:markdownFiles(join(receipt.source_root,'library')).filter(p=>!p.split('/').at(-1).startsWith('_')).map(p=>({...readItem(p),path:relative(receipt.source_root,p)}))};
const scope=frontierMathematicsImportScope(root,run,{planning:true,receipt,originals}),selected=receipt.files.filter(f=>scope.paths.has(f.path));
const selectedBindings=selected.map(f=>({path:f.path,pin:f.sha256,local:sha(join(root,f.path)),original:sha(join(receipt.source_root,f.path))}));
check(selectedBindings.every(f=>f.local===f.pin),'Selected local snapshot/pin mismatch');
const drifts=selectedBindings.filter(f=>f.original!==f.pin).map(f=>f.path).sort();check(JSON.stringify(drifts)===JSON.stringify(guards.map(g=>g.path).sort()),'Selected original drift differs from approved seven');
const stamp=new Date().toISOString().replaceAll(':','-'),archive=join(dest,'seven-reconciliation',stamp),before=join(archive,'before');mkdirSync(before,{recursive:true});
const sourceEvidence=guards.map(g=>{const fm=readItem(g.source),receiptFile=join(receipt.source_root,fm.verification.repair),repairRow=json(receiptFile),beforeFile=join(receipt.source_root,repairRow.before_file),evidenceDir=join(archive,'original-repair-evidence',g.id);mkdirSync(evidenceDir,{recursive:true});writeFileSync(join(evidenceDir,'current-original.md'),readFileSync(g.source));writeFileSync(join(evidenceDir,'recorded-repair.json'),readFileSync(receiptFile));writeFileSync(join(evidenceDir,'source-owner-before.md'),readFileSync(beforeFile));return{id:g.id,repair_path:fm.verification.repair,repair_sha256:sha(receiptFile),before_path:repairRow.before_file,before_sha256:sha(beforeFile)};});
const s=loadStep3(root,run),paths=new Set([receiptPath,join(root,'research/plan-spec.json'),drainPath]),rows=[];
for(const p of addedPins)paths.add(join(root,p.path));
for(const page of s.pages)for(const suffix of ['pages','coverage','proof-contracts']){const p=join(root,'research',run+'-batch-'+page.batch+'.'+suffix+'.json');if(existsSync(p))paths.add(p);}
for(const [id,e]of s.items){const rp=join(root,'research',run+'-step1-'+id+'.json'),row=existsSync(rp)?json(rp):null,inputPaths=itemInputPaths(s,id,row?.dependencies??[]),affected=ids.filter(d=>inputPaths.includes(join(root,'items',d+'.md')));if(!affected.length)continue;for(const p of inputPaths)paths.add(p);if(row)paths.add(rp);const oldHash=itemHash(s,id,row?.dependencies??[]);rows.push({id,page:e.page.id,batch:e.page.batch,affected,readiness_path:relative(root,rp),readiness:row,native_old_hash:oldHash,status:!row?'missing':row.decision==='escalated'?'escalated':row.sha256===oldHash?'ready':'stale',input_paths:inputPaths.map(p=>relative(root,p))});}
// Native alias resolution consults the complete item inventory when needed.
// Preserve that exact context for authentic old-view reconstruction too.
const aliasInventory=s.aliases?readdirSync(join(root,'items')).filter(name=>name.endsWith('.md')).sort():null;
if(aliasInventory)for(const name of aliasInventory)paths.add(join(root,'items',name));
// Freeze authentic before bytes and modes for the complete actual input union.
const bindings=[...paths].sort().map(p=>{const rel=relative(root,p);check(!rel.startsWith('..'),'Before input escapes physics workspace');const target=join(before,rel),bytes=readFileSync(p),hash=createHash('sha256').update(bytes).digest('hex');mkdirSync(dirname(target),{recursive:true});writeFileSync(target,bytes);return{path:rel,sha256:hash,mode:statSync(p).mode&0o777};});
writeFileSync(join(archive,'before-bindings.json'),JSON.stringify({at:new Date().toISOString(),run,guards,addedPins,sourceEvidence,receipt_sha256:receiptBefore,selectedBindings,aliasInventory,bindings,rows},null,2)+'\n');
assertNativeDrain();check(sha(drainPath)===bindings.find(b=>b.path===relative(root,drainPath)).sha256,'Root drain evidence changed');
check(Date.now()-Date.parse(drain.verifiedAt)<600000,'Root drain evidence expired during before reconstruction');
for(const b of bindings)check(sha(join(root,b.path))===b.sha256,'Frozen before input changed '+b.path);
if(aliasInventory)check(JSON.stringify(readdirSync(join(root,'items')).filter(name=>name.endsWith('.md')).sort())===JSON.stringify(aliasInventory),'Alias item inventory changed during reconstruction');
for(const g of guards)check(sha(g.source)===g.new&&sha(g.prepared)===g.new,'Original changed during before reconstruction '+g.id);
for(const e of sourceEvidence)check(sha(join(receipt.source_root,e.repair_path))===e.repair_sha256&&sha(join(receipt.source_root,e.before_path))===e.before_sha256,'Original repair evidence changed '+e.id);
for(const f of selectedBindings)check(sha(join(receipt.source_root,f.path))===f.original,'Selected original changed during reconstruction '+f.path);
for(const p of addedPins)check(sha(join(receipt.source_root,p.path))===p.sha256,'Added supplier original changed during reconstruction '+p.id);
// Preserve live receipt fields and approved page row using exactly seven overlays.
let afterText=receiptText;for(const g of guards){const start=afterText.indexOf('"path": "'+g.path+'"'),end=afterText.indexOf('}',start);check(start>=0&&end>start,'Receipt row formatting unrecognized '+g.id);const chunk=afterText.slice(start,end);check(chunk.includes(g.old),'Old row hash missing '+g.id);afterText=afterText.slice(0,start)+chunk.replace(g.old,g.new)+afterText.slice(end);}
const after=jsonFromText(afterText);function jsonFromText(text){return JSON.parse(text);}
const changed=receipt.files.filter((f,n)=>JSON.stringify(f)!==JSON.stringify(after.files[n]));check(changed.length===7&&changed.every(f=>ids.includes(f.path.split('/')[1].slice(0,-3))),'Receipt mutation exceeds exact approved seven');
check(after.files.find(f=>f.path==='library/real-analysis/construction-of-r-via-cauchy-sequences.md').sha256==='645853cbfd9f2933927f4655be17e27a450648167d8b70172c9c3a48bbd16385','Approved page overlay lost');
const install=(target,bytes,mode)=>{const tmp=target+'.approved-seven.tmp';writeFileSync(tmp,bytes);chmodSync(tmp,mode);renameSync(tmp,target);};
for(const g of guards)install(g.local,readFileSync(g.prepared),g.mode);install(receiptPath,afterText,statSync(receiptPath).mode&0o777);
for(const g of guards)check(sha(g.local)===g.new&&(statSync(g.local).mode&0o777)===g.mode,'Installed snapshot/mode mismatch '+g.id);
const current=json(receiptPath),postScope=frontierMathematicsImportScope(root,run,{planning:true,receipt:current,originals});
const postDrifts=current.files.filter(f=>postScope.paths.has(f.path)).filter(f=>sha(join(root,f.path))!==f.sha256||sha(join(current.source_root,f.path))!==f.sha256);check(!postDrifts.length,'Post-overlay scoped import drift remains');
for(const g of guards){const fm=readItem(g.source);check(recordedPublishedRepair(current.source_root,g.id,readFileSync(g.source,'utf8'),fm.verification?.repair).ok,'Post-overlay recorded repair invalid '+g.id);}
const result={at:new Date().toISOString(),run,archive:relative(root,archive),changed_snapshots:guards.map(g=>g.path),receipt_before_sha256:receiptBefore,receipt_after_sha256:sha(receiptPath),selected_paths:postScope.paths.size,post_scoped_drifts:postDrifts.length,affected_rows:rows.length,readiness_counts:Object.fromEntries(['ready','stale','escalated','missing'].map(x=>[x,rows.filter(r=>r.status===x).length])),readiness_written:false,originals_written:false};
writeFileSync(join(archive,'execution.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));
