import test from 'node:test';import assert from 'node:assert/strict';
import{mkdtempSync,mkdirSync,readFileSync,writeFileSync,copyFileSync,rmSync,existsSync}from'node:fs';
import{resolve,dirname}from'node:path';import{tmpdir}from'node:os';import{pathToFileURL,fileURLToPath}from'node:url';import{execFileSync}from'node:child_process';import{createHash}from'node:crypto';
const repo=process.cwd(),run='machine-learning-all-101-2026-10-19',id='lem-diffusion-objective-estimator-expectation',stem=`research/${run}-dispatch/alpha-3a-batch-66.attempt-1`,logPath=stem+'.log';
const code=mkdtempSync(resolve(tmpdir(),'native66-code-'));test.after(()=>rmSync(code,{recursive:true,force:true}));
for(const p of execFileSync('git',['ls-files','tools'],{encoding:'utf8',cwd:repo}).trim().split('\n').filter(p=>/\.(mjs|mts|json)$/.test(p))){mkdirSync(dirname(resolve(code,p)),{recursive:true});copyFileSync(resolve(repo,p),resolve(code,p));}
for(const name of ['step3-native-creation-origin.mjs','step3-native66-static-replay.mjs'])copyFileSync(fileURLToPath(new URL(name,import.meta.url)),resolve(code,'tools',name));
const api=await import(pathToFileURL(resolve(code,'tools/step3-native-creation-origin.mjs'))),extra=await import(pathToFileURL(resolve(code,'tools/step3-native66-static-replay.mjs'))),item=await import(pathToFileURL(resolve(code,'tools/item-hash.mjs')));
const sha=x=>createHash('sha256').update(x).digest('hex'),canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x,hash=x=>sha(JSON.stringify(canon(x)));
const available=existsSync(resolve(repo,logPath));
function fixture(t){
 const root=mkdtempSync(resolve(tmpdir(),'native66-case-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
 const put=(p,x)=>{mkdirSync(dirname(resolve(root,p)),{recursive:true});writeFileSync(resolve(root,p),Buffer.isBuffer(x)||typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');return{path:p,sha256:sha(readFileSync(resolve(root,p)))};};
 const real=p=>readFileSync(resolve(repo,p)),copy=p=>put(p,real(p)),archive=(n,p)=>put(`research/${run}-unit-native66/${n}`,real(p));
 const baseline=JSON.parse(real(`research/${run}-step3-auditor-baseline.json`));copy(`research/${run}-step3-auditor-baseline.json`);
 const author=JSON.parse(real(stem+'.result.json'));copy(stem+'.result.json');copy(stem+'.prompt.md');copy(logPath);
 // Unit context substitutes local paths only in the trusted caller's authors
 // view; exact genuine result/prompt/log bytes remain unchanged. These tests
 // grant no actual-run native authentication or coverage.
 const authors=[{...author,result_file:'alpha-3a-batch-66.attempt-1.result.json',immutable_result_file:'alpha-3a-batch-66.attempt-1.result.json',log:logPath,prompt:stem+'.prompt.md'}];
 const raw=real('items/'+id+'.md'),manifest=JSON.parse(real(`research/${run}-batch-66.pages.json`)),contracts=JSON.parse(real(`research/${run}-batch-66.proof-contracts.json`));
 const page=manifest.find(p=>p.items.some(x=>x.id===id)),entry=page.items.find(x=>x.id===id),contract=contracts.contracts[id];
 copy('items/'+id+'.md');copy(`research/${run}-batch-66.pages.json`);copy(`research/${run}-batch-66.proof-contracts.json`);
 const native_item=archive('item.md','items/'+id+'.md'),native_manifest=archive('manifest.json',`research/${run}-batch-66.pages.json`),native_contract=archive('contract.json',`research/${run}-batch-66.proof-contracts.json`);
 const restoration=archive('restoration.json',`research/${run}-owner-step3-current-input-preparation-1/minimal-metadata-successor.json`),manifest_before_restore=archive('preparation-before-manifest.json',`research/${run}-owner-step3-current-input-preparation-1/before/research/${run}-batch-66.pages.json`);
 const source_inputs=contract.citations.map(c=>({id:c.source,archive:archive(c.source+'.md','items/'+c.source+'.md')}));
 const carriers={guard_sha256:item.itemHashGuard(raw.toString()),judge_sha256:item.itemHashJudge(raw.toString()),item_file_sha256:sha(raw),manifest_sha256:hash({...entry,__step4_page_id:page.id}),contract_sha256:hash(contract)};carriers.step3_subject_sha256=hash({item_sha256:carriers.item_file_sha256,manifest_sha256:carriers.manifest_sha256,contract_sha256:carriers.contract_sha256});
 const evidence={version:2,policy:extra.NATIVE66_EVIDENCE_POLICY,run,step:3,id,owner_identity:'/root',native_execution_credit:false,mathematical_acceptance:false,reason:'Explicit unit fixture of actual native birth with replayed selected carrier writes and genuine root byte-identical restore; never a mathematical verdict.',baseline_sha256:sha(JSON.stringify(baseline)),page:page.id,batch:'66',author_result:authors[0].result_file,author_evidence:{result:{path:stem+'.result.json',sha256:sha(real(stem+'.result.json'))},prompt:{path:stem+'.prompt.md',sha256:sha(real(stem+'.prompt.md'))},log:{path:logPath,sha256:sha(real(logPath))}},native_item,native_manifest,native_contract,carriers,metadata_replay:{policy:'native66-heredoc-selected-metadata-v1',historical_manifest_mtime:'unavailable; exact native writes and root byte-identical restore used instead',restoration,manifest_before_restore,source_inputs}};
 const context={baseline,authors,row:{id,batch:'66',page:page.id,manifest_entry:entry}};
 const save=()=>put(`research/${run}-unit-native66/evidence.json`,evidence);
 const register=()=>api.recordNativeCreationOrigin(root,run,3,id,save(),context);
 return{root,put,evidence,context,save,register,real,raw,entry,contract};
}
const actual={skip:!available};
test('explicit actual-native66 replay proves complete source/selected metadata without fabricated mtime',actual,t=>{const f=fixture(t),r=f.register(),d=JSON.parse(readFileSync(r.path));assert.equal(d.version,2);assert.equal(d.policy,extra.NATIVE66_ORIGIN_POLICY);assert.equal(d.native_metadata_capture,undefined);assert.equal(d.native_write_binding.historical_manifest_mtime_unavailable,true);assert.equal(d.native_write_binding.contract_sha256,f.evidence.carriers.contract_sha256);assert.equal(d.native_write_binding.manifest_sha256,f.evidence.carriers.manifest_sha256);assert.equal(d.native_write_binding.commands[1].status,'exited 1 in 475ms:');assert.ok(api.loadNativeCreationOrigin(f.root,run,id,f.context));const freeze=api.nativeOriginClosureEvidence(f.root,run,()=>f.context,{requireLiveLog:true});assert.equal(freeze[f.evidence.metadata_replay.restoration.path],f.evidence.metadata_replay.restoration.sha256);for(const s of f.evidence.metadata_replay.source_inputs)assert.equal(freeze[s.archive.path],s.archive.sha256);assert.equal(f.register().reused,true);});
const negatives={
 'baseline existed':f=>{f.context.baseline.existing_item_files.push(id);f.evidence.baseline_sha256=sha(JSON.stringify(f.context.baseline));},
 'native creator not successful':f=>{f.context.authors=[];},
 'creator wrong home coverage':f=>{f.context.authors[0].covers=['65'];},
 'unsupported item':f=>{f.evidence.id='lem-other';},
 'log byte drift':f=>{f.evidence.author_evidence.log=f.put(logPath,f.real(logPath).toString()+'\n');},
 'missing or partial metadata command':f=>{f.evidence.author_evidence.log=f.put(logPath,f.real(logPath).toString().replace("c['derivations']=[]",'c["derivations"]=[]'));},
 'later unrecognized overwrite':f=>{f.evidence.author_evidence.log=f.put(logPath,f.real(logPath).toString()+"\nexec\n/bin/bash -lc 'echo altered > items/"+id+".md' in /home/lazyinspirit/Projects/prestige-math-library\n succeeded in 0ms:\n");},
 'invented old metadata capture':f=>{f.evidence.native_metadata_capture=f.put(`research/${run}-unit-native66/fake-capture.json`,{captured_at:'2026-10-19T13:30:00Z',sources:[]});},
 'invented old mtime declaration':f=>{f.evidence.metadata_replay.historical_manifest_mtime='2026-10-19T13:26:00Z';},
 'missing restoration':f=>{delete f.evidence.metadata_replay.restoration;},
 'wrong restoration bytes':f=>{f.evidence.metadata_replay.manifest_before_restore=f.put(`research/${run}-unit-native66/wrong-manifest.json`,{});},
 'unapproved restore owner':f=>{const d=JSON.parse(readFileSync(resolve(f.root,f.evidence.metadata_replay.restoration.path)));d.owner_identity='/root/other';f.evidence.metadata_replay.restoration=f.put(f.evidence.metadata_replay.restoration.path,d);},
 'restoration predates native completion':f=>{const d=JSON.parse(readFileSync(resolve(f.root,f.evidence.metadata_replay.restoration.path)));d.at='2026-10-19T12:00:00Z';f.evidence.metadata_replay.restoration=f.put(f.evidence.metadata_replay.restoration.path,d);},
 'quote substitution cannot self validate':f=>{const s=f.evidence.metadata_replay.source_inputs[0];s.archive=f.put(s.archive.path,readFileSync(resolve(f.root,s.archive.path),'utf8').replace('## Definition','## Definition\nUNAUTHENTICATED'));},
 'duplicate quote source':f=>{f.evidence.metadata_replay.source_inputs[1]=f.evidence.metadata_replay.source_inputs[0];},
 'claimed contract substituted':f=>{const p=f.evidence.native_contract.path,d=JSON.parse(readFileSync(resolve(f.root,p)));d.contracts[id].boundaries[0].evidence+=' forged';f.evidence.native_contract=f.put(p,d);},
 'claimed manifest substituted':f=>{const p=f.evidence.native_manifest.path,d=JSON.parse(readFileSync(resolve(f.root,p)));d[0].items.find(x=>x.id===id).title+=' forged';f.evidence.native_manifest=f.put(p,d);},
 'current item drift':f=>f.put('items/'+id+'.md',f.raw.toString()+'\n'),
 'current manifest drift':f=>{f.context.row.manifest_entry={...f.entry,title:'changed'};},
 'current contract drift':f=>{const p=`research/${run}-batch-66.proof-contracts.json`,d=JSON.parse(readFileSync(resolve(f.root,p)));d.contracts[id].finite_smoke.push({check:'changed'});f.put(p,d);},
};
for(const[name,mutate]of Object.entries(negatives))test('reject '+name,actual,t=>{const f=fixture(t);mutate(f);assert.throws(()=>f.register());assert.equal(existsSync(resolve(f.root,`research/${run}-step3-native-origin-${id}.json`)),false);});
for(const key of ['guard_sha256','judge_sha256','item_file_sha256','manifest_sha256','contract_sha256','step3_subject_sha256'])test('all six current/native carrier fields guarded: '+key,actual,t=>{const f=fixture(t);f.evidence.carriers[key]='0'.repeat(64);assert.throws(()=>f.register());});
test('version1 cannot opt into the replacement timing route',actual,t=>{const f=fixture(t);f.evidence.version=1;f.evidence.policy='native-created-step3-origin-evidence-v1';assert.throws(()=>f.register());});
test('historical origin permits later source amendment but initial registration rejects it',actual,t=>{const f=fixture(t);f.register();f.put('items/'+id+'.md',f.raw.toString()+'\n');assert.ok(api.loadNativeCreationOrigin(f.root,run,id,f.context));assert.equal(JSON.parse(readFileSync(resolve(f.root,`research/${run}-step3-native-origin-${id}.json`))).carriers.item_file_sha256,sha(f.raw));});

function readBound(f,r){const b=readFileSync(resolve(f.root,r.path));assert.equal(sha(b),r.sha256);return b;}
for(const mode of ['truncated','cross-source'])test('complete native quote section rejects self-validating '+mode,actual,t=>{
 const f=fixture(t),v=f.evidence.metadata_replay.source_inputs.find(x=>x.id==='def-axiom-of-choice');
 const body=readBound(f,v.archive).toString(),head=body.split('## Definition\n',1)[0];
 const d=JSON.parse(readBound(f,f.evidence.native_contract));const citation=d.contracts[id].citations.find(x=>x.source===v.id);
 const quote=mode==='truncated'?citation.quote.split('\n')[0]:d.contracts[id].citations.find(x=>x.source!==v.id).quote;
 v.archive=f.put(v.archive.path,head+'## Definition\n\n'+quote+'\n');citation.quote=quote;f.evidence.native_contract=f.put(f.evidence.native_contract.path,d);
 assert.throws(()=>extra.replayNative66(f.root,run,id,{...f.evidence,recorded_at:new Date().toISOString()},r=>readBound(f,r)),/complete quote section/);
});
for(const [name,mutate]of Object.entries({page:f=>{f.evidence.page='forged-page';f.context.row.page='forged-page';},batch:f=>{f.evidence.batch='65';f.context.row.batch='65';},author:f=>{f.evidence.author_result='alpha-3a-batch-65.attempt-1.result.json';}}))test('explicit case pin rejects wrong '+name,actual,t=>{const f=fixture(t);mutate(f);assert.throws(()=>extra.replayNative66(f.root,run,id,{...f.evidence,recorded_at:new Date().toISOString()},r=>readBound(f,r)),/wrong exact native case/);});
test('default version1 still rejects missing genuine native-window metadata timing',actual,t=>{
 const f=fixture(t),registered=f.register(),d=JSON.parse(readFileSync(registered.path));d.version=1;d.policy='native-created-step3-origin-v1';delete d.metadata_replay;d.replay={policy:'literal-python-item-writer-v1',writer_script:'/tmp/legacy-writer.py'};
 d.native_metadata_capture=f.put(`research/${run}-unit-native66/fake-old-time.json`,{captured_at:d.recorded_at,sources:[[d.native_manifest,'pages'],[d.native_contract,'proof-contracts']].map(([r,suffix])=>({source:`research/${run}-batch-66.${suffix}.json`,archive:r.path,raw_sha256:r.sha256,owner_modified_source:false,source_stat_at_capture:{mtime_utc:'2026-10-19T15:00:00Z'}}))});
 rmSync(registered.path);writeFileSync(registered.path,JSON.stringify(d));assert.throws(()=>api.loadNativeCreationOrigin(f.root,run,id,f.context),/original metadata not bound by actual native-window capture/);
});
