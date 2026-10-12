// Mechanical existing-ready currency only. No content review or workflow transitions.
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {resolve,join,relative} from 'node:path';
import {loadStep3,itemHash} from '../../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision} from '../../../tools/physics-support/step1-decisions.mjs';
const root=process.cwd(), run='physics-cm-qm-gr-79-2026-10-11';
const archive=resolve(process.argv[2]??''), mode=process.argv[3]??'authenticate', closurePath=process.argv[4];
const json=p=>JSON.parse(fs.readFileSync(p,'utf8')), hash=p=>createHash('sha256').update(fs.readFileSync(p)).digest('hex'), must=(v,m)=>{if(!v)throw Error(m)};
must(archive.startsWith(join(root,'research',run+'-resumed-orchestration/imports/ten-reconciliation/')),'Exact-ten archive required');
const before=join(archive,'before'), bindingPath=join(archive,'before-bindings.json'), executionPath=join(archive,'execution.json'), bindings=json(bindingPath), execution=json(executionPath);
must(bindings.run===run&&execution.run===run&&execution.changed_snapshots.length===10&&execution.post_scoped_drifts===0,'Incomplete exact-ten execution');
for(const b of bindings.bindings)must(hash(join(before,b.path))===b.sha256,'Before archive changed '+b.path);
if(bindings.aliasInventory)must(JSON.stringify(fs.readdirSync(join(before,'items')).filter(n=>n.endsWith('.md')).sort())===JSON.stringify(bindings.aliasInventory),'Before alias inventory differs');
const old=loadStep3(before,run), current=loadStep3(root,run), rows=[], failed=[], untouched=[];
const imported=new Map(bindings.guards.map(g=>[g.path,g.new]));
const originalRoot=json(join(root,'research/math-imports.json')).source_root;
const liveGuards=bindings.bindings.map(b=>({path:b.path,sha256:imported.get(b.path)??(b.path==='research/math-imports.json'?execution.receipt_after_sha256:b.sha256)}));
const assertGuards=()=>{for(const g of liveGuards)must(hash(join(root,g.path))===g.sha256,'Live input changed '+g.path);if(bindings.aliasInventory)must(JSON.stringify(fs.readdirSync(join(root,'items')).filter(n=>n.endsWith('.md')).sort())===JSON.stringify(bindings.aliasInventory),'Live alias inventory differs');for(const g of bindings.guards)must(hash(g.source)===g.new&&hash(g.prepared)===g.new,'Original/prepared changed '+g.id);for(const g of bindings.selectedBindings)must(hash(join(originalRoot,g.path))===(imported.get(g.path)??g.original),'Selected original changed '+g.path)};
assertGuards();
const existingAuthPath=join(archive,'readiness-authentication.json');
if(mode==='apply'){const a=json(existingAuthPath);must(a.execution_sha256===hash(executionPath)&&a.before_bindings_sha256===hash(bindingPath),'Authentication evidence mismatch');rows.push(...a.rows);untouched.push(...a.untouched_rows);failed.push(...a.failed);}
else for(const r of bindings.rows){
 const prior=r.readiness, beforeHash=itemHash(old,r.id,prior?.dependencies??[]), currentHash=itemHash(current,r.id,prior?.dependencies??[]);
 must(beforeHash===r.native_old_hash,'Native old reconstruction mismatch '+r.id);
 if(r.status!=='ready'||prior?.decision!=='ready'||prior.sha256!==beforeHash){failed.push({id:r.id,batch:r.batch,status:r.status,native_old_hash:beforeHash,row_sha256:prior?.sha256??null,reason:'No current genuine prior ready; bounded historical authorization required'});continue;}
 const live=step1Decision(current,r.id);must(live.row&&JSON.stringify(live.row)===JSON.stringify(prior),'Live prior readiness changed '+r.id);
 const entry={id:r.id,batch:r.batch,prior_sha256:prior.sha256,current_sha256:currentHash,readiness_path:r.readiness_path,prior};
 if(currentHash===beforeHash){must(live.closed,'Unchanged hash must remain ready '+r.id);untouched.push(entry);}else rows.push(entry);
}
const authPath=join(archive,'readiness-authentication.json'), result={at:new Date().toISOString(),run,execution:relative(root,executionPath),execution_sha256:hash(executionPath),before_bindings_sha256:hash(bindingPath),authenticated:rows.length+untouched.length,changed:rows.length,untouched:untouched.length,failed,rows,untouched_rows:untouched,mechanical_only:true,production_writes:false};
if(mode!=='apply')fs.writeFileSync(authPath,JSON.stringify(result,null,2)+'\n');
if(mode==='apply'){
 must(failed.every(r=>r.status==='stale'),'Escalated/missing before rows remain blocked');must(closurePath,'Semantic closure receipt required');const closure=json(closurePath);
 must(closure.run===run&&closure.execution_archive===relative(root,archive)&&closure.execution_sha256===hash(executionPath)&&closure.source_use_closed===true&&closure.readiness_release_reason?.trim(),'Exact owning semantic closure missing');
 must(closure.before_bindings_sha256===hash(bindingPath)&&Array.isArray(closure.input_guards)&&closure.input_guards.length>0,'Semantic evidence bindings missing');
 const assertClosure=()=>{for(const g of closure.input_guards)must(hash(resolve(root,g.path))===g.sha256,'Semantic evidence changed '+g.path)};
 const closureGuard=hash(closurePath);assertGuards();assertClosure();must(hash(closurePath)===closureGuard,'Closure changed');
 const ordered=rows.slice().sort((a,b)=>(current.items.get(a.id).item.dependency_level-current.items.get(b.id).item.dependency_level)||a.id.localeCompare(b.id));
 const written=[];
 for(const r of ordered){
  const path=join(root,r.readiness_path);must(hash(path)===bindings.bindings.find(b=>b.path===r.readiness_path).sha256,'Prior readiness drift '+r.id);
  const row={version:1,run,item:r.id,decision:r.prior.decision,owner:r.prior.owner,reason:r.prior.reason+' Mechanical current-input currency after authenticated exact-ten approved import reconciliation: '+closure.readiness_release_reason+' Evidence '+relative(root,authPath)+'; '+closurePath+'. Prior acceptance and owning history preserved; no new content/source acceptance.',dependencies:[...new Set(r.prior.dependencies)].sort(),sha256:r.current_sha256,at:new Date().toISOString()};
  must(current.items.has(r.id)&&r.prior.sha256===bindings.rows.find(b=>b.id===r.id).native_old_hash,'Authenticated prior identity differs '+r.id);fs.writeFileSync(path,JSON.stringify(row,null,2)+'\n');written.push({id:r.id,batch:r.batch,previous_sha256:r.prior.sha256,current_sha256:row.sha256,at:row.at});
 }
 const after=current;for(const r of written)must(step1Decision(after,r.id).closed,'Final native readiness not closed '+r.id);
 for(const r of failed)must(hash(join(root,bindings.rows.find(b=>b.id===r.id).readiness_path))===bindings.bindings.find(b=>b.path===bindings.rows.find(x=>x.id===r.id).readiness_path).sha256,'Failed prior row changed '+r.id);
 for(const r of untouched)must(hash(join(root,r.readiness_path))===bindings.bindings.find(b=>b.path===r.readiness_path).sha256,'Untouched row drift '+r.id);
 for(const g of liveGuards.filter(g=>!g.path.includes('-step1-')))must(hash(join(root,g.path))===g.sha256,'Post-write input changed '+g.path);
 assertClosure();must(hash(closurePath)===closureGuard,'Post-write closure changed');
 const receipt={at:new Date().toISOString(),run,mode:'authenticated-existing-ready-import-currency',authentication:relative(root,authPath),authentication_sha256:hash(authPath),semantic_closure:closurePath,semantic_closure_sha256:closureGuard,genuine_auth:result.authenticated,changed_ready:written.length,untouched:untouched.length,failed,written,before_archive:relative(root,before),mechanical_only:true};
 fs.writeFileSync(join(archive,'readiness-currency-receipt.json'),JSON.stringify(receipt,null,2)+'\n');
 console.log(JSON.stringify({genuine_auth:result.authenticated,changed_ready:written.length,untouched:untouched.length,failed:failed.length,receipt:relative(root,join(archive,'readiness-currency-receipt.json'))}));
}else console.log(JSON.stringify({authenticated:result.authenticated,changed:rows.length,untouched:untouched.length,failed,authentication:relative(root,authPath)}));
