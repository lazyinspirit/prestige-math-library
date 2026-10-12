// Research-only integration preparation; never mutates canonical carriers or native records.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL, fileURLToPath } from 'node:url';
const root=process.cwd(), run='physics-cm-qm-gr-79-2026-10-11';
const dest=path.dirname(fileURLToPath(import.meta.url));
const recovery=path.dirname(dest), attempt='3e629cf4-71f7-450c-ab55-56103b6c8769';
const args=process.argv.slice(2), option=k=>{const i=args.indexOf(k);return i<0?null:args[i+1];};
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const json=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const write=(p,x)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(x,null,2)+'\n');};
const assert=(ok,message)=>{if(!ok)throw Error(message);};
const rel=p=>path.relative(root,p);
const safeRel=p=>{assert(!path.isAbsolute(p)&&!p.split(path.sep).includes('..'),'Unsafe relative path: '+p);return p;};
const abs=p=>path.join(root,safeRel(p));
const hashFile=p=>fs.existsSync(p)?sha(fs.readFileSync(p)):null;
const {loadStep3,itemHash,itemInputPaths}=await import(pathToFileURL(path.join(root,'tools/physics-support/frontier-snapshot.mjs')));
const {yaml}=await import(pathToFileURL(path.join(root,'tools/physics-support/pathway-lib.mjs')));
const boundHistory=path.join(root,'.physics-autopilot',run,'owner-gate-history',attempt+'.json');
const ledger=json(boundHistory), request=ledger.request, receipt=ledger.receipt, snapshot=request.snapshot;
assert(request.version===2&&receipt.version===2&&request.attempt===attempt&&request.consumedAt,'Missing genuine consumed Step1 gate request');
assert(snapshot.run===run&&snapshot.stages.length===1&&snapshot.stages[0]==='1-scaffold','Wrong native baseline stage/run');
const {sha256:snapshotHash,...snapshotBody}=snapshot;
assert(sha(JSON.stringify(snapshotBody))===snapshotHash&&receipt.snapshotSha256===snapshotHash&&receipt.attempt===attempt,'Native baseline snapshot/receipt hash mismatch');
assert(snapshot.items.length===1547&&receipt.items.length===1547,'Expected genuine1547-item Step1 baseline');
for(let i=0;i<snapshot.items.length;i++){
 const a=snapshot.items[i],b=receipt.items[i];assert(b.id===a.id&&b.carrierSha256===a.carrierSha256&&b.manifestSha256===a.manifestSha256&&b.verdict==='format-metadata-pass','Baseline item formatting receipt mismatch: '+a.id);
}
const bound=new Map(snapshot.inputs.filter(x=>x.path.startsWith(root+path.sep)).map(x=>[rel(x.path),x.sha256]));
assert(bound.size>0,'No content-workspace native bindings');
const currentRequestPath=path.join(root,'.physics-autopilot',run,'owner-gate-request.json');const currentRequest=json(currentRequestPath);assert(currentRequest.attempt===attempt&&currentRequest.consumedAt&&currentRequest.snapshot.sha256===snapshotHash,'Current consumed Step1 request differs from authority');
const archives=new Map();
function addArchive(file,before,claimed){
 safeRel(file);const p=path.isAbsolute(before)?before:abs(before);assert(p.startsWith(root+path.sep+'research'+path.sep),'Before archive must remain research-owned');
 assert(hashFile(p)===claimed,'Archived before bytes do not match own receipt: '+before);
 if(bound.get(file)===claimed){if(!archives.has(file))archives.set(file,[]);archives.get(file).push(p);}
}
const geometry=path.join(recovery,'batch1-geometry-repair/final-production-guards.json');
assert(fs.existsSync(geometry),'Missing geometry before guards');
for(const row of json(geometry).files)addArchive(row.path,row.before_file,row.before_raw_sha256);
for(const lane of ['batch11-evidence-repair','batch2-balance-repair']){
 const p=path.join(recovery,lane,'before-hashes.json');assert(fs.existsSync(p),'Missing before archive inventory: '+lane);
 for(const row of json(p))addArchive(row.file,row.before_file,row.raw_sha256);
}
// Later owner-released lanes (for example GR65+) can supply exact preimages without expanding this script's production authority.
for(let i=0;i<args.length;i++)if(args[i]==='--extra-before-guards'){
 assert(args[i+1],'Missing extra before-guard path');const document=json(path.resolve(args[++i]));const rows=Array.isArray(document)?document:document.files;
 assert(Array.isArray(rows),'Extra before guards require an array or files array');
 for(const row of rows)addArchive(row.file??row.path,row.before_file,row.raw_sha256??row.before_raw_sha256);
}
// Original integration archives can recover authentic rows if a parent has already made a guarded refresh.
const priorIntegration=path.join(recovery,'before');
function walk(dir){return fs.existsSync(dir)?fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(dir,e.name)):[path.join(dir,e.name)]):[];}
for(const p of walk(priorIntegration)){
 const f=path.relative(priorIntegration,p), h=hashFile(p);if(bound.get(f)===h)addArchive(f,p,h);
}
function originalPath(file){
 assert(bound.has(file),'No consumed native binding for old input: '+file);
 const live=abs(file);if(hashFile(live)===bound.get(file))return live;
 const archive=archives.get(file)?.[0];assert(archive,'Missing exact native-bound before bytes: '+file);return archive;
}
function symlink(file,to,base){const p=path.join(base,safeRel(file));fs.mkdirSync(path.dirname(p),{recursive:true});if(fs.existsSync(p)||fs.lstatSync(path.dirname(p)).isSymbolicLink()){
  if(fs.existsSync(p)){assert(fs.lstatSync(p).isSymbolicLink(),'Refuse overwrite mirror regular file: '+p);fs.unlinkSync(p);}
 }fs.symlinkSync(to,p);}
const beforeRoot=path.join(dest,'before-root');fs.mkdirSync(beforeRoot,{recursive:true});
const manifests=[...bound.keys()].filter(p=>new RegExp(`^research/${run}-batch-\\d+\\.pages\\.json$`).test(p));
assert(manifests.length===79,'Native baseline must bind all79 manifests');
for(const f of manifests)symlink(f,originalPath(f),beforeRoot);
symlink('research/plan-spec.json',originalPath('research/plan-spec.json'),beforeRoot);
// Preserve the native canonical filename namespace; omitted nonlogical context can otherwise trigger unrelated alias collisions.
// No corpus validation is performed; only actually used native hash inputs are authenticated below.
for(const name of fs.readdirSync(abs('items')).filter(n=>n.endsWith('.md')))symlink('items/'+name,abs('items/'+name),beforeRoot);
for(const f of bound.keys())if(/^items\/[A-Za-z0-9_-]+\.md$/.test(f)){
 const candidate=archives.get(f)?.[0]??abs(f);symlink(f,candidate,beforeRoot);
}
const old=loadStep3(beforeRoot,run), originalIds=new Set(snapshot.items.map(x=>x.id));
assert(old.items.size===1547&&[...old.items.keys()].every(id=>originalIds.has(id)),'Reconstructed manifest inventory differs from consumed native baseline');
const baseline=[], beforeInputs=new Map();
for(const id of old.items.keys()){
 const f=`research/${run}-step1-${id}.json`, source=originalPath(f), row=json(source);
 assert(row.version===1&&row.run===run&&row.item===id&&row.decision==='ready'&&typeof row.owner==='boolean'&&row.reason?.trim()&&Array.isArray(row.dependencies),'Invalid original bound ready row: '+id);
 const used=itemInputPaths(old,id,row.dependencies);
 for(const p of used){const key=path.relative(beforeRoot,p);if(!beforeInputs.has(key)){const h=hashFile(p);if(bound.has(key))assert(h===bound.get(key),'Old native hash would read unbound current/partial bytes: '+key);beforeInputs.set(key,{path:key,before_file:fs.realpathSync(p),raw_sha256:h,individual_gate_binding:bound.get(key)??null,authenticated_original_ready_ids:[id]});}}
 const reconstructed=itemHash(old,id,row.dependencies);assert(reconstructed===row.sha256,'Original ready itemHash fails reconstruction: '+id);
 baseline.push({id,ready_path:f,ready_before_file:source,ready_before_raw_sha256:bound.get(f),row,reconstructed_sha256:reconstructed});
}
for(const input of beforeInputs.values())assert(hashFile(input.before_file)===input.raw_sha256,'Original input changed during reconstruction: '+input.path);
write(path.join(dest,'baseline-authentication.json'),{version:1,run,attempt,native_history_raw_sha256:hashFile(boundHistory),snapshot_sha256:snapshotHash,original_ready:baseline.length,rows:baseline,needed_before_inputs:[...beforeInputs.values()]});
if(args.includes('--authenticate-baseline-only')){console.log(JSON.stringify({baseline_ready:baseline.length,needed_before_inputs:beforeInputs.size}));process.exit(0);}
const drainPath=option('--drain-receipt');assert(drainPath,'Late evaluation requires --drain-receipt PATH');
const drain=json(path.resolve(drainPath));assert(drain.writersDrained===true||drain.production_writer_drained===true,'Parent writer-drain confirmation missing');
assert(drain.run===run&&drain.confirmedByParent===true,'Drain receipt must name run and explicit parent confirmation');
const nativeState=json(abs(`.physics-autopilot/${run}/state.json`));
const active=Object.values(nativeState.dispatches??{}).filter(d=>d.startedAt&&!d.endedAt);
assert(active.every(d=>String(d.role??'').includes('reviewer')||String(d.label??'').includes('scope-reviewer')),'Native non-read-only dispatch remains active');
for(const lane of ['batch1-geometry-repair','batch11-evidence-repair','batch2-balance-repair']){
 const f=path.join(recovery,lane,'writer-drained.json');assert(fs.existsSync(f),'Missing final lane drain: '+lane);
 const row=json(f);assert(row.production_writer_drained===true||row.writers_drained===true||row.writersDrained===true,'Lane has not drained: '+lane);
}
const iid='lem-cm-finite-iid-sample-mean-bound', current=loadStep3(root,run);
assert(current.pages.length===158&&current.pairs.size===79&&current.items.size===1548,'Expected exact current79-pair1548-item frontier');
assert([...originalIds].every(id=>current.items.has(id))&&[...current.items.keys()].filter(id=>!originalIds.has(id)).join(',')===iid,'Unexpected approved inventory change');
const currentGuards=new Map(), patchDocs=new Map();
function guard(file){safeRel(file);if(!currentGuards.has(file))currentGuards.set(file,hashFile(abs(file)));return currentGuards.get(file);}
function text(file){guard(file);return fs.readFileSync(abs(file),'utf8');}
function patch(file,before,after,kind,detail){
 const prior=patchDocs.get(file);assert(!prior||prior.after===before,'Conflicting staged changes: '+file);
 const original=prior?.before??text(file);patchDocs.set(file,{path:file,before:original,after,before_raw_sha256:sha(original),after_raw_sha256:sha(after),kind:prior?[...new Set([].concat(prior.kind,kind))]:[kind],details:[...(prior?.details??[]),detail]});
}
const importedCarriers=new Set(json(abs('research/math-imports.json')).files.map(x=>x.path));guard('research/math-imports.json');
const carrierMetadata=new Map(), aliases=new Map();
for(const [id,live] of current.items){const p='items/'+id+'.md';assert(!importedCarriers.has(p),'Current frontier must not own an imported carrier: '+id);const src=text(p),match=src.match(/^---\r?\n([\s\S]*?)\r?\n---/);assert(match,'Carrier frontmatter missing: '+id);const fm=yaml().parse(match[1]);assert(fm.id===id,'Carrier identity mismatch');carrierMetadata.set(id,fm);
 for(const a of fm.aliases??[]){assert(!aliases.has(a)||aliases.get(a)===id,'Ambiguous run alias: '+a);aliases.set(a,id);}
 guard(`research/${run}-batch-${live.page.batch}.pages.json`);
}
let externalAliasesLoaded=false;const externalAliasCandidates=new Map();
function canonical(id){if(current.items.has(id))return id;if(aliases.has(id))return aliases.get(id);if(fs.existsSync(abs('items/'+id+'.md')))return id;
 if(!externalAliasesLoaded){externalAliasesLoaded=true;
  // This is only the alias index required to resolve actual used dependencies, never proof/format validation.
  for(const file of fs.readdirSync(abs('items')).filter(f=>f.endsWith('.md'))){const src=fs.readFileSync(abs('items/'+file),'utf8');const fm=yaml().parse(src.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1]??'')??{};
   for(const a of fm.aliases??[]){if(!externalAliasCandidates.has(a))externalAliasCandidates.set(a,new Set());externalAliasCandidates.get(a).add(file.slice(0,-3));}}
 }const candidates=externalAliasCandidates.get(id);assert(candidates?.size===1,'Missing or ambiguous actual used dependency alias: '+id);return [...candidates][0];
}
const graph=new Map(), levels=new Map(), visiting=new Set();
for(const [id,live] of current.items){const fm=carrierMetadata.get(id);assert(Array.isArray(fm.deps)&&Array.isArray(live.item.deps),'Missing deps list: '+id);
 const bodyDeps=[...new Set(fm.deps.map(canonical))].sort(),manifestDeps=[...new Set(live.item.deps.map(canonical))].sort();assert(JSON.stringify(bodyDeps)===JSON.stringify(manifestDeps),'Declared carrier/manifest deps differ: '+id);
 graph.set(id,bodyDeps.filter(x=>current.items.has(x)));
}
function level(id){if(levels.has(id))return levels.get(id);assert(!visiting.has(id),'In-run dependency cycle: '+id);visiting.add(id);const n=Math.max(0,...graph.get(id).map(d=>level(d)+1));visiting.delete(id);levels.set(id,n);return n;}
for(const id of current.items.keys())level(id);
const ordered=[...current.items.keys()].sort((a,b)=>levels.get(a)-levels.get(b)||Number(current.items.get(a).page.order)-Number(current.items.get(b).page.order)||a.localeCompare(b));
const levelCorrections=[];
for(const id of ordered){const live=current.items.get(id),fm=carrierMetadata.get(id),n=levels.get(id),file='items/'+id+'.md';
 if(fm.dependency_level!==n){const src=text(file);assert(/^dependency_level:.*$/m.test(src),'Missing carrier level field: '+id);patch(file,src,src.replace(/^dependency_level:.*$/m,'dependency_level: '+n),'dependency-level',{id,old:fm.dependency_level,new:n});}
 if(live.item.dependency_level!==n){const mf=`research/${run}-batch-${live.page.batch}.pages.json`,src=patchDocs.get(mf)?.after??text(mf),doc=JSON.parse(src);const page=doc.find(x=>x.id===live.page.id),entry=page.items.find(x=>x.id===id);entry.dependency_level=n;patch(mf,src,JSON.stringify(doc,null,2)+'\n','dependency-level',{id,old:live.item.dependency_level,new:n});}
 if(fm.dependency_level!==n||live.item.dependency_level!==n)levelCorrections.push({id,batch:live.page.batch,computed:n,carrier_before:fm.dependency_level,manifest_before:live.item.dependency_level});
}
const planFile='research/plan-spec.json',planSrc=text(planFile),plan=JSON.parse(planSrc),bpage='cm-math-geometry-examples';
const canonicalPage=plan.pages.find(x=>x.id===bpage),livePage=current.pages.find(x=>x.id===bpage);assert(canonicalPage&&livePage,'Geometry companion page missing');
const required=['rank-theorems-and-embedded-submanifolds','fundamental-trigonometric-identities'];
for(const id of required)assert(livePage.requires.includes(id),'Owned geometry B manifest omitted repaired actual supplier home: '+id);
const prerequisiteChanges=[];
for(const id of required)if(!canonicalPage.requires.includes(id)){canonicalPage.requires.push(id);prerequisiteChanges.push(id);}
if(prerequisiteChanges.length)patch(planFile,planSrc,JSON.stringify(plan,null,2)+'\n','geometry-B-requires',{page:bpage,added:prerequisiteChanges});
// Propose the matching canonical dependency-level labels without modifying inventory/claims.
let canonicalLevels=0;
for(const page of plan.pages)for(const entry of page.items??[]){if(!levels.has(entry.id))continue;const n=levels.get(entry.id);if(entry.dependency_level!==n){entry.dependency_level=n;canonicalLevels++;}}
if(canonicalLevels){const before=patchDocs.get(planFile)?.after??planSrc;patch(planFile,before,JSON.stringify(plan,null,2)+'\n','canonical-dependency-level',{count:canonicalLevels});}
const proposedRoot=path.join(dest,'proposed-root-'+crypto.randomUUID());fs.mkdirSync(proposedRoot,{recursive:true});
for(const name of fs.readdirSync(abs('items')).filter(x=>x.endsWith('.md')))symlink('items/'+name,abs('items/'+name),proposedRoot);
for(const name of fs.readdirSync(abs('research')).filter(x=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(x)))symlink('research/'+name,abs('research/'+name),proposedRoot);
symlink(planFile,abs(planFile),proposedRoot);
function copyOnWrite(file,bytes){const target=path.join(proposedRoot,safeRel(file));if(fs.existsSync(target))fs.unlinkSync(target);fs.mkdirSync(path.dirname(target),{recursive:true});fs.writeFileSync(target,bytes);}
for(const p of patchDocs.values())copyOnWrite(p.path,p.after);
const proposed=loadStep3(proposedRoot,run), refreshed=[];
for(const prior of baseline){const f=prior.ready_path,liveBytes=text(f),liveRow=JSON.parse(liveBytes);assert(sha(liveBytes)===prior.ready_before_raw_sha256,'Ready row changed since consumed baseline without authenticated refresh history: '+prior.id);
 const h=itemHash(proposed,prior.id,prior.row.dependencies);
 for(const p of itemInputPaths(proposed,prior.id,prior.row.dependencies)){const f=path.relative(proposedRoot,p);if(!patchDocs.has(f))guard(f);}
 if(h===prior.reconstructed_sha256)continue;
 const after={...prior.row,sha256:h,at:new Date().toISOString()};patch(f,liveBytes,JSON.stringify(after,null,2)+'\n','authenticated-ready-currency',{id:prior.id,prior_sha256:prior.row.sha256,current_sha256:h,reason_and_owner_preserved:true});refreshed.push({id:prior.id,old:prior.row.sha256,current:h});
}
const confirmPath=option('--iid-confirmation');assert(confirmPath,'New owner-ready proposal requires --iid-confirmation PATH');
const confirm=json(path.resolve(confirmPath));assert(confirm.run===run&&confirm.item===iid&&confirm.confirmedByParent===true&&confirm.authorConsumerChecksConfirmed===true,'Finite-IID author/consumer/check receipt has not been confirmed by parent');
assert(Array.isArray(confirm.receipts)&&confirm.receipts.length&&confirm.receipts.every(x=>hashFile(abs(x.path))===x.raw_sha256),'Finite-IID confirmed receipts are missing/stale');
assert(hashFile(abs('items/'+iid+'.md'))===confirm.carrier_raw_sha256,'Finite-IID carrier differs from confirmed final bytes');
const home=current.items.get(iid),iidManifest=`research/${run}-batch-${home.page.batch}.pages.json`;assert(hashFile(abs(iidManifest))===confirm.manifest_raw_sha256,'Finite-IID manifest differs from parent confirmation');
const newReady=`research/${run}-step1-${iid}.json`;assert(!fs.existsSync(abs(newReady)),'First IID readiness already exists; require separate authenticated handling');guard(newReady);
const iidHash=itemHash(proposed,iid,carrierMetadata.get(iid).deps);for(const p of itemInputPaths(proposed,iid,carrierMetadata.get(iid).deps)){const f=path.relative(proposedRoot,p);if(!patchDocs.has(f))guard(f);}
const newRow={version:1,run,item:iid,decision:'ready',owner:true,reason:confirm.reason,dependencies:[...new Set(carrierMetadata.get(iid).deps)].sort(),sha256:iidHash,at:new Date().toISOString()};assert(newRow.reason?.trim(),'Parent must provide honest first-ready reason');
patchDocs.set(newReady,{path:newReady,before:null,after:JSON.stringify(newRow,null,2)+'\n',before_raw_sha256:null,after_raw_sha256:sha(JSON.stringify(newRow,null,2)+'\n'),kind:['first-owner-ready'],details:[{item:iid,confirmation_path:path.resolve(confirmPath),confirmation_raw_sha256:hashFile(path.resolve(confirmPath))}]});
const metadata=path.join(dest,'proposal-files');fs.mkdirSync(metadata,{recursive:true});
const mutations=[];
for(const p of patchDocs.values()){const file=path.join(metadata,p.path);fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,p.after);mutations.push({...p,before:undefined,after:undefined,proposed_file:rel(file)});}
const proposal={version:1,run,prepared_at:new Date().toISOString(),mode:'metadata-currency-only-parent-apply',baseline_attempt:attempt,baseline_history_raw_sha256:hashFile(boundHistory),drain_receipt:path.resolve(drainPath),drain_raw_sha256:hashFile(path.resolve(drainPath)),iid_confirmation:path.resolve(confirmPath),iid_confirmation_raw_sha256:hashFile(path.resolve(confirmPath)),baseline_ready:1547,proposed_ready:1548,inventory_unchanged_except_confirmed_iid:true,levelCorrections,canonical_level_corrections:canonicalLevels,geometry_B_added_requires:prerequisiteChanges,refreshed_original_ready:refreshed,current_input_guards:[...currentGuards].map(([path,raw_sha256])=>({path,raw_sha256})),mutations,production_writes_performed:false,no_independent_audit_or_acceptance_claim:true};
write(path.join(dest,'proposal.json'),proposal);console.log(JSON.stringify({proposal:rel(path.join(dest,'proposal.json')),metadata_mutations:mutations.length,levels:levelCorrections.length,ready_refreshed:refreshed.length,baseline:1547,proposed:1548}));
