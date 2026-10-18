#!/usr/bin/env node
// Owner-executed integration helper. Preparing this file performs no integration.
import * as fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {pathToFileURL} from 'node:url';
import {isDeepStrictEqual as equal} from 'node:util';
const argv=process.argv.slice(2), command=argv[0]??'dry-run';
const opt=k=>{const i=argv.indexOf('--'+k);return i<0?undefined:argv[i+1];};
const root=path.resolve(opt('root')??'.');
const here=path.dirname(new URL(import.meta.url).pathname);
const plan=JSON.parse(fs.readFileSync(opt('plan')??path.join(here,'plan.json'),'utf8'));
const {itemHashGuard}=await import(pathToFileURL(path.join(root,'tools/item-hash.mjs')));
const {recordedPublishedRepair}=await import(pathToFileURL(path.join(root,'tools/published-repair-policy.mjs')));
const {hasCommittedPriorPublication}=await import(pathToFileURL(path.join(root,'tools/published-repair-adoption.mjs')));
const sha=x=>createHash('sha256').update(x).digest('hex');
const fail=s=>{throw Error(s);};
const safe=p=>{if(typeof p!=='string'||path.isAbsolute(p)||p.includes('\\')||p.split('/').some(x=>!x||x==='.'||x==='..'))fail('unsafe path '+p);return path.join(root,p);};
const read=p=>fs.readFileSync(safe(p),'utf8');
const json=p=>JSON.parse(read(p));
const save=(p,v)=>fs.writeFileSync(safe(p),typeof v==='string'?v:JSON.stringify(v,null,2)+'\n',{flag:'wx'});
const get=(v,keys)=>keys.reduce((a,k)=>a?.[k],v);
const set=(v,keys,value)=>{const parent=get(v,keys.slice(0,-1));if(parent===undefined)fail('absent pointer');parent[keys.at(-1)]=value;};
const claimsPath=`research/${plan.run}-step3-published-claims.jsonl`;
const claimFor=id=>{const a=read(claimsPath).split(/\r?\n/).filter(Boolean).map(JSON.parse).filter(x=>x.id===id);if(a.length!==1)fail(id+': need one genuine claim');return a[0];};
const fm=s=>/^---\n([\s\S]*?)\n---\n/.exec(s)?.[1]??'';
const published=s=>/^status: published\s*$/m.test(fm(s));
const timestamp=()=>new Date().toISOString();
function authorize(){
 const p=opt('authorization');if(!p)fail('mutation requires --authorization research/<fresh-root-hold>.json');const a=json(p);
 if(a.run!==plan.run||a.authorized_by!=='owner'||a.phase!=='step5.1'||a.paused!==true||a.drained!==true||a.permit_published_integration!==true||!Number.isFinite(Date.parse(a.recorded_at))||Date.now()-Date.parse(a.recorded_at)>3600000||Date.parse(a.recorded_at)>Date.now())fail('missing fresh actual owner paused/drained hold');
 if(!Array.isArray(a.evidence)||!a.evidence.length)fail('hold needs actual current status/drain evidence');
 for(const e of a.evidence)if(sha(read(e.path))!==e.sha256)fail('hold evidence changed '+e.path);
 return {path:p,sha256:sha(read(p))};
}
function lineage(s,before){
 if(!published(before))fail(s.id+': not published');const c=claimFor(s.id);
 if(c.run!==plan.run||!Number.isFinite(Date.parse(c.claimed_at)))fail('bad claim '+s.id);
 let original;
 if(s.previous_repair_path){
  const raw=read(s.previous_repair_path);if(sha(raw)!==s.previous_repair_sha256)fail('predecessor changed '+s.id);
  const old=JSON.parse(raw);const result=recordedPublishedRepair(root,s.id,before,s.previous_repair_path);if(!result.ok)fail(s.id+': predecessor authentication: '+result.reason);
  if(old.group!==c.group||old.pre_sha256!==c.pre_sha256)fail('predecessor/claim mismatch '+s.id);
  original={before_file:old.before_file,before_raw_sha256:old.before_raw_sha256,pre_sha256:old.pre_sha256};
  for(const k of ['prior_publication_commit','prior_publication_context'])if(old[k]!==undefined)original[k]=old[k];
 }else{
  if(s.id!=='ex-quantile-coupling-on-the-real-line'||c.group!=='owner-step5-monotone-followthrough'||c.pre_sha256!=='d796e92c0fc71a04aaf36b3d8b0a0fd17743ea5c08af9b2e1703cd27b3e688ed'||itemHashGuard(before)!==c.pre_sha256)fail('unexpected first-repair lineage '+s.id);
  if(!/^  (?:audited|verified):/m.test(fm(before)))fail('first-repair before lacks genuine publication audit');
  original={pre_sha256:c.pre_sha256};
 }
 for(const e of s.evidence)if(sha(read(e.path))!==e.sha256)fail('owner/delegated evidence changed '+e.path);
 return {claim:c,claim_sha256:sha(JSON.stringify(c)),original};
}
function stage(){
 const staged=new Map(), originals=new Map(), auth={};
 for(const s of [...plan.sources,...(argv.includes('--include-page')?plan.optional_pages:[])]){
  const before=read(s.path);if(sha(before)!==s.before_raw_sha256)fail('source raw guard '+s.path);
  let after=before;for(const o of s.operations){if(after.split(o.old).length!==2)fail('literal must occur exactly once '+s.path);after=after.replace(o.old,()=>o.new);}
  if(after!==read(s.proposal))fail('literal replay differs from reviewed proposed source '+s.id);
  if(s.path.startsWith('items/'))auth[s.id]=lineage(s,before);
  originals.set(s.path,before);staged.set(s.path,after);
 }
 const docs=new Map();for(const o of plan.contract_operations)if(!docs.has(o.path))docs.set(o.path,json(o.path));
 // Validate every original row/array before any operation in the shared file.
 for(const o of plan.contract_operations){
  const doc=docs.get(o.path);if(o.row_pointer&&!equal(get(doc,o.row_pointer),o.row_original))fail('contract row guard '+o.path+' '+o.pointer.join('/'));
  const target=get(doc,o.pointer);const observed=o.selector?target?.filter(v=>Object.entries(o.selector).every(([k,x])=>equal(v[k],x))):target;
  if(o.selector?(!observed||observed.length!==1||!equal(observed[0],o.original)):!equal(observed,o.original))fail('contract field guard '+o.path+' '+o.pointer.join('/'));
 }
 for(const o of plan.contract_operations){const doc=docs.get(o.path);if(o.selector){const a=get(doc,o.pointer);const i=a.findIndex(v=>Object.entries(o.selector).every(([k,x])=>equal(v[k],x)));a[i]=o.proposed;}else if('append' in o)get(doc,o.pointer).push(...[].concat(o.append));else set(doc,o.pointer,o.proposed);}
 for(const [p,doc] of docs){const original=read(p);originals.set(p,original);staged.set(p,JSON.stringify(doc,null,2)+'\n');}
 return {staged,originals,auth};
}
function bridgeEvidence(installed){
 const file=opt('bridge-evidence');if(!file)fail('--bridge-evidence requires actual root_repair/consumer_dispositions files');const b=json(file);
 if(b.run!==plan.run||!Array.isArray(b.entries)||b.entries.length!==plan.sources.length)fail(`bridge evidence must cover all ${plan.sources.length} actual sources exactly`);
 const entries={};
 for(const source of plan.sources){
  const matches=b.entries.filter(e=>e.id===source.id);if(matches.length!==1)fail('missing/duplicate bridge entry '+source.id);const e=matches[0],r=installed.rows.find(x=>x.path===source.path),before=read(r.before_file),after=read(source.path),claim=claimFor(source.id),repair=json(e.root_repair_file),consumers=json(e.consumer_dispositions_file);
  if(sha(before)!==r.before_raw_sha256||sha(after)!==r.after_raw_sha256)fail('bridge source guard '+source.id);
  if(repair.version!==1||repair.run!==plan.run||repair.id!==source.id||repair.authorized_by!=='owner'||repair.reviewed_by!=='root'||repair.confirmed_defect!==true||repair.native_execution_coverage_adopted!==false||!Number.isFinite(Date.parse(repair.reviewed_at))||Date.parse(repair.reviewed_at)<Date.parse(installed.installed_at)||Date.parse(repair.reviewed_at)>Date.now()||repair.before_raw_sha256!==sha(before)||repair.current_raw_sha256!==sha(after)||typeof repair.reason!=='string'||repair.reason.trim().length<80||typeof repair.repairer!=='string'||!/^\/root\/\S+$/.test(repair.repairer))fail('actual root scientific confirmation absent/stale '+source.id);
  if(consumers.version!==1||consumers.run!==plan.run||consumers.supplier!==source.id||consumers.reviewer!==repair.repairer||consumers.full_affected_scope_checked!==true||consumers.native_execution_coverage_adopted!==false||!Array.isArray(consumers.items)||consumers.items.some(c=>typeof c.id!=='string'||!['sound','repair-proposed','repaired'].includes(c.disposition)||typeof c.affected_use!=='string'||c.affected_use.trim().length<40||typeof c.reason!=='string'||c.reason.trim().length<40))fail('actual same-owner consumer dispositions absent/malformed '+source.id);
  const owner_maintenance={root_repair:{path:e.root_repair_file,sha256:sha(read(e.root_repair_file))},consumer_dispositions:{path:e.consumer_dispositions_file,sha256:sha(read(e.consumer_dispositions_file))}};
  if(source.previous_repair_path){if(!equal(e.prior_receipt,{path:source.previous_repair_path,sha256:source.previous_repair_sha256})||e.prior_publication!==undefined)fail('bridge predecessor ref must remain exact '+source.id);}
  else{
   const publication=e.prior_publication;
   if(e.origin_kind!=='first-recorded-consumer-repair'||e.prior_receipt!==undefined||publication?.path!==source.path||publication.before_raw_sha256!==sha(before)||!hasCommittedPriorPublication(root,source.id,before,publication.commit,claim.claimed_at))fail('quantile requires authentic preclaim Git publication, not synthetic predecessor');
  }
  entries[source.id]={owner_maintenance,reviewed_at:repair.reviewed_at,...(!source.previous_repair_path?{previous_publication:e.prior_publication,prior_publication_commit:e.prior_publication.commit}:{})};
 }
 return {path:file,sha256:sha(read(file)),entries};
}
function outdir(){const p=opt('output');if(!p?.startsWith('research/'))fail('--output must be a new research directory');return p;}
if(command==='dry-run'){
 const s=stage();console.log(JSON.stringify({mode:'read-only literal/row replay and lineage authentication',sources:plan.sources.length,contracts:plan.contract_operations.length,files:s.staged.size,optional_page_included:argv.includes('--include-page'),canonical_writes:false},null,2));
}else if(command==='apply'){
 const hold=authorize(),out=outdir();if(fs.existsSync(safe(out)))fail('output exists');const s=stage();
 // Install the final receipt reference before root confirmation and checks.
 // No precheck/audit/judge claim is installed; the real receipt is still due.
 for(const source of plan.sources){const text=s.staged.get(source.path),replacement=`verification:\n  repair: ${out}/receipts/${source.id}.json\n`;const after=text.replace(/^verification:[ \t]*\n(?:[ \t]+[^\n]*\n?)*/m,()=>replacement);if(after===text||itemHashGuard(after)!==itemHashGuard(text))fail('unsafe final repair-reference installation '+source.id);s.staged.set(source.path,after);} 
 fs.mkdirSync(safe(out),{recursive:false});fs.mkdirSync(safe(out+'/before'));fs.mkdirSync(safe(out+'/after'));
 const rows=[];let i=0;for(const [p,text]of s.staged){const archive=`${out}/before/${i}.txt`,after=`${out}/after/${i}.txt`;save(archive,s.originals.get(p));save(after,text);rows.push({path:p,before_file:archive,before_raw_sha256:sha(s.originals.get(p)),after_file:after,after_raw_sha256:sha(text)});i++;}
 // Recheck all file bytes together immediately before installation. Native writers must be drained by root.
 for(const r of rows)if(sha(read(r.path))!==r.before_raw_sha256)fail('concurrent preimage change '+r.path);
 for(const [p,text]of s.staged)fs.writeFileSync(safe(p),text);
 save(out+'/installed.json',{run:plan.run,installed_at:timestamp(),authorization:hold,plan_sha256:sha(fs.readFileSync(opt('plan')??path.join(here,'plan.json'))),rows,lineage:s.auth});
 console.log('Installed exact source/contract operations; old evidence untouched. Final repair references installed without audit/precheck stamps; actual root confirmation, checks and receipts remain due.');
}else if(command==='continue-round'){
 const hold=authorize(),out=outdir(),priorOut=opt('prior-output'),patchFile=opt('format-patch');
 if(!priorOut?.startsWith('research/')||!patchFile?.startsWith('research/')||out===priorOut||fs.existsSync(safe(out)))fail('continuation needs distinct new output, prior output and exact format patch');
 if(fs.existsSync(safe(priorOut+'/recorded.json')))fail('continuation cannot supersede recorded receipts');
 const priorPath=priorOut+'/installed.json',prior=json(priorPath),patch=json(patchFile);
 if(prior.run!==plan.run||patch.run!==plan.run||patch.kind!=='guarded-proof-format-continuation'||patch.id!=='prop-the-null-set-definition-is-independent-of-the-smooth-atlas')fail('wrong actual continuation ancestry/format scope');
 const failure=patch.native_local_failure;if(sha(read(failure.path))!==failure.raw_sha256||json(failure.path).exit_code===0)fail('missing genuine retained failed round check');
 const originals=new Map(),immediate=new Map(),staged=new Map(),auth={},priorRows=new Map(prior.rows.map(r=>[r.path,r]));
 for(const source of plan.sources){
  let r=priorRows.get(source.path);if(!r){const fresh=(plan.fresh_source_preimages??[]).filter(f=>f.id===source.id&&f.path===source.path);if(fresh.length!==1||sha(read(fresh[0].before_file))!==fresh[0].raw_sha256||sha(read(source.path))!==fresh[0].raw_sha256)fail('fresh published source lacks exact pre-edit archive '+source.id);r={path:source.path,before_file:fresh[0].before_file,before_raw_sha256:fresh[0].raw_sha256,after_raw_sha256:fresh[0].raw_sha256};priorRows.set(source.path,r);} 
  const before=read(r.before_file),current=read(source.path);if(sha(before)!==r.before_raw_sha256||sha(current)!==r.after_raw_sha256||(r.after_file&&read(r.after_file)!==current))fail('changed prior source/archive '+source.id);
  const lineageNow=lineage(source,before);if(prior.lineage[source.id]&&!equal(lineageNow,prior.lineage[source.id]))fail('original claim/predecessor lineage changed '+source.id);
  originals.set(source.path,before);immediate.set(source.path,current);staged.set(source.path,current);auth[source.id]=lineageNow;
 }
 const sp=patch.source_patch;if(sp.path!==`items/${patch.id}.md`||sha(immediate.get(sp.path))!==sp.expected_raw_sha256)fail('atlas exact current format guard');
 let formatted=immediate.get(sp.path);for(const op of sp.operations){if(formatted.split(op.old).length!==2)fail('format literal guard');formatted=formatted.replace(op.old,()=>op.new);}
 if(formatted!==read(sp.proposed_file))fail('format replay differs from proposed bytes');
 const eraseNumbers=text=>text.replace(/^(\d+\.\d+) /gm,'STEP ').replace(/\bstep \d+\.\d+\b/g,'step STEP');
 if(eraseNumbers(formatted)!==eraseNumbers(immediate.get(sp.path)))fail('continuation patch changes more than proof numbering/references');
 staged.set(sp.path,formatted);
 if(plan.original_r1_plan&&(sha(read(plan.original_r1_plan.path))!==plan.original_r1_plan.raw_sha256||prior.plan_sha256!==plan.original_r1_plan.raw_sha256))fail('original r1 plan ancestry changed');
 for(const lp of plan.continuation_level_patches??[]){if(sha(immediate.get(lp.path))!==lp.expected_raw_sha256||!/^dependency_level: \d+$/.test(lp.old)||lp.new!==`dependency_level: ${lp.computed}`||!Number.isSafeInteger(lp.computed)||lp.computed<0)fail('exact derived level guard '+lp.id);const text=staged.get(lp.path);if(text.split(lp.old).length!==2)fail('derived level literal is not unique');const after=text.replace(lp.old,()=>lp.new);if(text.split('---').slice(2).join('---')!==after.split('---').slice(2).join('---'))fail('numeric metadata edit changed mathematical body');staged.set(lp.path,after);} 
 const docs=new Map(),oldDocs=new Map();for(const op of plan.contract_operations){if(!docs.has(op.path)){const r=priorRows.get(op.path);if(!r)fail('missing prior metadata ancestry');const current=read(op.path);docs.set(op.path,JSON.parse(current));oldDocs.set(op.path,JSON.parse(read(r.after_file)));originals.set(op.path,read(r.before_file));immediate.set(op.path,current);}}
 // Check the 70 already-installed selected fields against r1's immutable after snapshots.
 // Unrelated current metadata values are retained from the live file.
 for(const op of plan.contract_operations)if(!equal(get(docs.get(op.path),op.pointer),get(oldDocs.get(op.path),op.pointer)))fail('already-installed selected contract field changed '+op.path+' '+op.pointer.join('/'));
 for(const op of patch.contract_operations){const doc=docs.get(op.path);if(!doc||!equal(get(doc,op.pointer),op.original)||(op.row_pointer&&!equal(get(doc,op.row_pointer),op.row_original)))fail('atlas contract format guard '+op.path+' '+op.pointer.join('/'));}
 for(const op of patch.contract_operations)set(docs.get(op.path),op.pointer,op.proposed);
 for(const [file,doc]of docs)staged.set(file,JSON.stringify(doc,null,2)+'\n');
 for(const source of plan.sources){const text=staged.get(source.path),replacement=`verification:\n  repair: ${out}/receipts/${source.id}.json\n`;const after=text.replace(/^verification:[ \t]*\n(?:[ \t]+[^\n]*\n?)*/m,()=>replacement);if(after===text||itemHashGuard(after)!==itemHashGuard(text))fail('unsafe fresh final receipt ref');staged.set(source.path,after);}
 const retainedChecks=fs.readdirSync(safe(priorOut)).filter(n=>/\.(?:precheck|rendercheck|proof-layout)\.json$/.test(n)).map(n=>({path:priorOut+'/'+n,sha256:sha(read(priorOut+'/'+n))}));
 if(!retainedChecks.some(e=>e.path===failure.path))fail('failure is not retained in actual prior output');
 fs.mkdirSync(safe(out),{recursive:false});for(const dir of ['before','after','continuation-before'])fs.mkdirSync(safe(out+'/'+dir));
 const rows=[];let i=0;for(const [file,text]of staged){const before=`${out}/before/${i}.txt`,after=`${out}/after/${i}.txt`,continuationBefore=`${out}/continuation-before/${i}.txt`;save(before,originals.get(file));save(after,text);save(continuationBefore,immediate.get(file));rows.push({path:file,before_file:before,before_raw_sha256:sha(originals.get(file)),after_file:after,after_raw_sha256:sha(text),original_before_file:priorRows.get(file).before_file,continuation_before_file:continuationBefore,continuation_before_raw_sha256:sha(immediate.get(file))});i++;}
 for(const r of rows)if(sha(read(r.path))!==r.continuation_before_raw_sha256)fail('concurrent continuation input changed');
 for(const [file,text]of staged)if(text!==immediate.get(file))fs.writeFileSync(safe(file),text);
 save(out+'/installed.json',{run:plan.run,installed_at:timestamp(),authorization:hold,plan_sha256:sha(fs.readFileSync(opt('plan')??path.join(here,'plan.json'))),rows,lineage:auth,continuation:{prior_output:priorOut,prior_installed:{path:priorPath,sha256:sha(read(priorPath))},format_patch:{path:patchFile,sha256:sha(read(patchFile))},retained_prior_checks:retainedChecks,original_before_endpoints_preserved:true,native_history_reset:false}});
 console.log(`Installed guarded fresh repair round for ${plan.sources.length} sources; original before endpoints/claims/${plan.sources.filter(s=>s.previous_repair_path).length} predecessor receipts and all prior failed/successful checks retained. Fresh confirmations/checks/receipts remain due.`);
}else if(command==='checks'){
 authorize();const out=outdir(),installed=json(out+'/installed.json');if(installed.run!==plan.run)fail('run mismatch');const bridge=bridgeEvidence(installed),checks={run:plan.run,bridge_evidence:{path:bridge.path,sha256:bridge.sha256},items:{}};
 for(const s of plan.sources){const r=installed.rows.find(x=>x.path===s.path),text=read(s.path);if(!r||sha(text)!==r.after_raw_sha256)fail('changed installed source '+s.id);const content=itemHashGuard(text);const nonproof=!/^## (?:Proof|Refutation|Counterexample|Verification)\b/m.test(text);const record={};
  for(const tool of ['precheck','rendercheck','proof-layout']){
   const args=tool==='precheck'?['tools/tsx-run.mjs','tools/precheck.mts',s.path,...(nonproof?['--json']:[])]:[`tools/${tool}.mjs`,s.path];
   const result=spawnSync(process.execPath,args,{cwd:root,encoding:'utf8',maxBuffer:20*1024*1024});const row={command:['node',...args],exit_code:result.status,output:result.stdout??'',stderr:result.stderr??'',checked_at:timestamp(),content_sha256:content};record[tool]=row;
   save(`${out}/${s.id}.${tool}.json`,row);if(result.error||result.status!==0)fail('actual '+tool+' failed '+s.id+'; retain output, repair and prepare fresh plan/checks');
  }checks.items[s.id]=record;
 }save(out+'/checks.json',checks);console.log(`Captured actual current one-file checks for ${plan.sources.length} items.`);
}else if(command==='record'){
 const hold=authorize(),out=outdir(),installed=json(out+'/installed.json'),checks=json(out+'/checks.json'),accept=opt('acceptance');if(!accept)fail('--acceptance requires actual root acceptance/current consumer refresh evidence');const a=json(accept);
 const bridge=bridgeEvidence(installed);if(!equal(checks.bridge_evidence,{path:bridge.path,sha256:bridge.sha256}))fail('bridge evidence changed since actual checks');
 if(a.run!==plan.run||a.authorized_by!=='owner'||a.verdict!=='accepted'||!Number.isFinite(Date.parse(a.accepted_at))||Date.parse(a.accepted_at)<Date.parse(installed.installed_at)||a.current_consumer_contexts_refreshed!==true)fail('need genuine post-install focused acceptance/current consumer refresh, not an old receipt');
 if(!Array.isArray(a.evidence)||!a.evidence.length)fail('acceptance evidence absent');for(const e of a.evidence)if(sha(read(e.path))!==e.sha256)fail('acceptance evidence changed');
 const ledgerPath='research/published-consumer-supplier-ledger.md',ledger=read(ledgerPath),receipts=[],now=timestamp(),sourceUpdates=[];let blocks='';
 for(const s of plan.sources){const r=installed.rows.find(x=>x.path===s.path),text=read(s.path);if(sha(text)!==r.after_raw_sha256||!equal(claimFor(s.id),installed.lineage[s.id].claim))fail('source or original claim changed '+s.id);const oldBefore=read(r.before_file);const liveLineage=lineage(s,oldBefore);if(!equal(liveLineage,installed.lineage[s.id]))fail('lineage changed '+s.id);const content=itemHashGuard(text),local_checks=checks.items?.[s.id],maintenance=bridge.entries[s.id];if(!local_checks)fail('checks absent '+s.id);
  for(const tool of ['precheck','rendercheck','proof-layout']){const c=local_checks[tool];if(!c||c.exit_code!==0||c.content_sha256!==content||!Number.isFinite(Date.parse(c.checked_at))||Date.parse(c.checked_at)<Date.parse(installed.installed_at)||Date.parse(c.checked_at)<Date.parse(maintenance.reviewed_at)||Date.parse(c.checked_at)>Date.parse(now))fail('stale actual checks '+s.id);const stored=json(`${out}/${s.id}.${tool}.json`);if(!equal(stored,c))fail('check carrier mismatch');}
  const receiptPath=`${out}/receipts/${s.id}.json`,marker=`${plan.run}-step5-focused-${path.basename(out)}-${s.id}`;
  if(ledger.includes(`local-published-repair:${marker}:`))fail('ledger marker exists');
  const block=`\n${s.id} | ${content} | Focused ordinary Step5 owner repair; ${accept}. Original claims, prior repair receipts and original native findings retained.\n`;blocks+=`\n<!-- local-published-repair:${marker}:begin -->${block}<!-- local-published-repair:${marker}:end -->\n`;
  const before=liveLineage.original;const receipt={version:1,kind:'recorded-local-published-repair',id:s.id,run:plan.run,group:liveLineage.claim.group,correction:s.correction,content_sha256:content,...before,before_file:before.before_file??r.before_file,before_raw_sha256:before.before_raw_sha256??r.before_raw_sha256,recorded_at:now,ledger_marker:marker,ledger_sha256:sha(block),local_checks:{precheck:local_checks.precheck,rendercheck:local_checks.rendercheck},owner_maintenance:maintenance.owner_maintenance,...(maintenance.previous_publication?{previous_publication:maintenance.previous_publication,prior_publication_commit:maintenance.prior_publication_commit}:{}),owner_repair_acceptance:{path:accept,sha256:sha(read(accept))},owner_delegated_evidence:s.evidence,successor_before:{path:r.before_file,sha256:r.before_raw_sha256,content_sha256:itemHashGuard(oldBefore)},corrected_snapshot:{path:r.after_file,sha256:r.after_raw_sha256},proof_layout:local_checks['proof-layout'],integration_authorization:hold};
  if(s.previous_repair_path)receipt.previous_repair={path:s.previous_repair_path,sha256:s.previous_repair_sha256};
  if(/^  repair: (.+)$/m.exec(fm(text))?.[1]!==receiptPath)fail('final receipt reference changed '+s.id);receipts.push({path:receiptPath,receipt,text});sourceUpdates.push({path:s.path,before:text});
 }
 fs.mkdirSync(safe(out+'/receipts'),{recursive:false});if(read(ledgerPath)!==ledger)fail('ledger changed');fs.appendFileSync(safe(ledgerPath),blocks);
 try{for(const r of receipts)save(r.path,r.receipt);for(const r of receipts){const result=recordedPublishedRepair(root,r.receipt.id,r.text,r.path);if(!result.ok)fail('ordinary policy rejected '+r.receipt.id+': '+result.reason);}for(const r of sourceUpdates)if(read(r.path)!==r.before)fail('concurrent source changed');}
 catch(e){for(const r of receipts)if(fs.existsSync(safe(r.path)))fs.unlinkSync(safe(r.path));if(read(ledgerPath)===ledger+blocks)fs.writeFileSync(safe(ledgerPath),ledger);throw e;}
 save(out+'/recorded.json',{run:plan.run,recorded_at:now,receipts:receipts.map(x=>({path:x.path,sha256:sha(read(x.path))})),native_state_changed:false,bridge_recording_still_due:true});
 console.log(`Recorded ${plan.sources.length} genuine ordinary repair receipts and appended distinct ledger blocks; native bridge/recertification remains root-owned.`);
}else fail('command must be dry-run | apply | continue-round | checks | record');
