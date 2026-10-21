import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {resolve,join,dirname} from 'node:path';
import {tmpdir} from 'node:os';
import {pathToFileURL,fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
const repo=process.cwd(),candidate=dirname(fileURLToPath(import.meta.url));
const run='inverse-problems-knot-theory-all-109-2026-10-19',id='lem-ip-conditional-flow-matching-population-and-exact-flow-meaning';
const rootGuardPath=`research/${run}-supervision-20261020/step3-supervision/gate-r1-created-item24/root-pins.json`;
// Operational logs are intentionally absent in some checkouts. Do not invent
// evidence there; the ordinary synthetic v1 compatibility case still runs.
const available=(()=>{try{const guard=JSON.parse(fs.readFileSync(join(repo,rootGuardPath)));return Object.keys(guard.refs??{}).length===14&&Object.values(guard.refs).every(ref=>typeof ref.path==='string'&&fs.existsSync(join(repo,ref.path)))}catch{return false}})();
const actual={skip:!available};
const code=fs.mkdtempSync(join(tmpdir(),'native24-code-'));test.after(()=>fs.rmSync(code,{recursive:true,force:true}));fs.mkdirSync(join(code,'tools'));
for(const name of fs.readdirSync(join(repo,'tools')))fs.symlinkSync(join(repo,'tools',name),join(code,'tools',name));
for(const name of ['step3-native-creation-origin.mjs','step3-native24-restart-adoption.mjs']){const dest=join(code,'tools',name);if(fs.existsSync(dest))fs.unlinkSync(dest);fs.copyFileSync(join(candidate,name),dest)}
const api=await import(pathToFileURL(join(code,'tools/step3-native-creation-origin.mjs'))),extra=await import(pathToFileURL(join(code,'tools/step3-native24-restart-adoption.mjs'))),item=await import(pathToFileURL(join(code,'tools/item-hash.mjs')));
const sha=b=>createHash('sha256').update(b).digest('hex'),canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x,hash=x=>sha(JSON.stringify(canon(x)));
function fixture(t){
 const root=fs.mkdtempSync(join(tmpdir(),'native24-fixture-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 const put=(p,x)=>{fs.mkdirSync(dirname(join(root,p)),{recursive:true});fs.writeFileSync(join(root,p),Buffer.isBuffer(x)||typeof x==='string'?x:JSON.stringify(x,null,2)+'\n');return{path:p,sha256:sha(fs.readFileSync(join(root,p)))}};
 const guard=JSON.parse(fs.readFileSync(join(repo,rootGuardPath))),refs=guard.refs;
 for(const ref of Object.values(refs))put(ref.path,fs.readFileSync(join(repo,ref.path)));const root_pins=put(rootGuardPath,fs.readFileSync(join(repo,rootGuardPath)));
 const raw=fs.readFileSync(join(root,refs.native_item.path)),pages=JSON.parse(fs.readFileSync(join(root,refs.native_manifest.path))),contracts=JSON.parse(fs.readFileSync(join(root,refs.native_contract.path))),baseline=JSON.parse(fs.readFileSync(join(root,refs.baseline.path)));
 const page=pages.find(p=>p.items.some(x=>x.id===id)),entry=page.items.find(x=>x.id===id);
 put('items/'+id+'.md',raw);put(`research/${run}-batch-24.pages.json`,fs.readFileSync(join(root,refs.native_manifest.path)));put(`research/${run}-batch-24.proof-contracts.json`,fs.readFileSync(join(root,refs.native_contract.path)));
 const author=JSON.parse(fs.readFileSync(join(root,refs.adopter_result.path))),authors=[{...author,result_file:'alpha-3a-batch-24.attempt-2.result.json',immutable_result_file:'alpha-3a-batch-24.attempt-2.result.json',log:refs.adopter_log.path,prompt:refs.adopter_prompt.path}];
 const carriers={guard_sha256:item.itemHashGuard(raw.toString()),judge_sha256:item.itemHashJudge(raw.toString()),item_file_sha256:sha(raw),manifest_sha256:hash({...entry,__step4_page_id:page.id}),contract_sha256:hash(contracts.contracts[id])};carriers.step3_subject_sha256=hash({item_sha256:carriers.item_file_sha256,manifest_sha256:carriers.manifest_sha256,contract_sha256:carriers.contract_sha256});
 const evidence={version:3,policy:extra.NATIVE24_EVIDENCE_POLICY,run,step:3,id,owner_identity:'/root',native_execution_credit:false,mathematical_acceptance:false,reason:'Explicit fixture of actual failed native birth followed by genuinely successful restart full-carrier adoption. Neither creation failure nor independent mathematical coverage is relabeled.',baseline_sha256:sha(JSON.stringify(baseline)),page:page.id,batch:'24',author_result:authors[0].result_file,author_evidence:{result:refs.adopter_result,prompt:refs.adopter_prompt,log:refs.adopter_log},native_item:refs.native_item,native_manifest:refs.native_manifest,native_contract:refs.native_contract,carriers,metadata_replay:{policy:'native24-failed-birth-successful-restart-adoption-v1',root_pins,failed_creator:{result:refs.failed_result,prompt:refs.failed_prompt,log:refs.failed_log},algorithm_input:refs.algorithm_input,reader_post:refs.reader_post,adopter_report:refs.adopter_report,adopter_decisions:refs.adopter_decisions}};
 const context={baseline,authors,row:{id,batch:'24',page:page.id,manifest_entry:entry}};
 const save=()=>put(`research/${run}-unit-native24/evidence.json`,evidence),register=()=>api.recordNativeCreationOrigin(root,run,3,id,save(),context);
 return{root,guard,refs,put,evidence,context,save,register,raw,entry,contracts};
}
test('actual failed birth static replay and successful full-carrier adoption register ordinary native origin',actual,t=>{
 const f=fixture(t),r=f.register(),receipt=JSON.parse(fs.readFileSync(r.path));assert.equal(receipt.version,3);assert.equal(receipt.policy,extra.NATIVE24_ORIGIN_POLICY);assert.equal(receipt.author_result,'alpha-3a-batch-24.attempt-2.result.json');assert.equal(receipt.native_metadata_capture,undefined);
 assert.equal(receipt.native_write_binding.failed_creator_not_successful,true);assert.equal(receipt.native_write_binding.adoption_does_not_claim_new_write,true);assert.equal(receipt.native_write_binding.failed_creator_commands.length,3);assert.equal(receipt.native_write_binding.successful_adoption_reads.length,3);assert.equal(receipt.native_write_binding.item_sha256,f.evidence.carriers.item_file_sha256);
 assert.ok(api.loadNativeCreationOrigin(f.root,run,id,f.context));assert.equal(f.register().reused,true);
 const frozen=api.nativeOriginClosureEvidence(f.root,run,()=>f.context,{requireLiveLog:true});assert.ok(frozen[f.evidence.metadata_replay.root_pins.path]);assert.ok(frozen[f.refs.failed_result.path]);assert.ok(frozen[f.refs.reader_post.path]);assert.equal(frozen[f.refs.native_contract.path],f.refs.native_contract.sha256);
});
test('unrelated current batch rows may change, selected helper carriers remain exact',actual,t=>{
 const f=fixture(t),d=structuredClone(f.contracts);const other=Object.keys(d.contracts).find(k=>k!==id);d.contracts[other]={unrelated_fixture_update:true};f.put(`research/${run}-batch-24.proof-contracts.json`,d);
 const r=f.register();assert.ok(api.loadNativeCreationOrigin(f.root,run,id,f.context));assert.equal(JSON.parse(fs.readFileSync(r.path)).carriers.contract_sha256,f.evidence.carriers.contract_sha256);
});
for(const [name,mutate]of Object.entries({
 'baseline listed':f=>{f.context.baseline.items.push({id});f.evidence.baseline_sha256=sha(JSON.stringify(f.context.baseline))},
 'baseline disk present':f=>{f.context.baseline.existing_item_files.push(id);f.evidence.baseline_sha256=sha(JSON.stringify(f.context.baseline))},
 'no successful adopter':f=>{f.context.authors=[]},
 'wrong adopter home cover':f=>{f.context.authors[0].covers=['23']},
 'failed creator substituted as successful author':f=>{f.evidence.author_result='alpha-3a-batch-24.attempt-1.result.json'},
 'wrong source home':f=>{f.evidence.page='other'},
 'wrong case item':f=>{f.evidence.id='lem-other'},
 'fake native capture':f=>{f.evidence.native_metadata_capture=f.put(`research/${run}-unit-native24/fake.json`,{})},
 'unknown replay permission':f=>{f.evidence.metadata_replay.assume_write_window=true},
 'missing failed creator':f=>{delete f.evidence.metadata_replay.failed_creator},
 'failed log consistent ref mutation':f=>{f.evidence.metadata_replay.failed_creator.log=f.put(f.refs.failed_log.path,fs.readFileSync(join(f.root,f.refs.failed_log.path),'utf8')+'\n')},
 'adopter log consistent ref mutation':f=>{f.evidence.author_evidence.log=f.put(f.refs.adopter_log.path,fs.readFileSync(join(f.root,f.refs.adopter_log.path),'utf8')+'\n')},
 'missing complete algorithm input':f=>{delete f.evidence.metadata_replay.algorithm_input},
 'changed algorithm with updated ref':f=>{f.evidence.metadata_replay.algorithm_input=f.put(f.refs.algorithm_input.path,fs.readFileSync(join(f.root,f.refs.algorithm_input.path),'utf8')+'Unlogged addition')},
 'partial adopted manifest':f=>{f.evidence.native_manifest=f.put(f.refs.native_manifest.path,[{id:f.evidence.page,items:[f.entry]}])},
 'partial adopted contract':f=>{f.evidence.native_contract=f.put(f.refs.native_contract.path,{version:1,scope:[id],contracts:{[id]:f.contracts.contracts[id]}})},
 'changed original source':f=>{f.evidence.native_item=f.put(f.refs.native_item.path,f.raw.toString()+'Owner addition')},
 'claimed selected contract changed':f=>{f.evidence.carriers.contract_sha256='a'.repeat(64)},
 'current selected contract successor':f=>{f.contracts.contracts[id].unauthorized=true;f.put(`research/${run}-batch-24.proof-contracts.json`,f.contracts)},
 'current source successor':f=>{f.put('items/'+id+'.md',f.raw.toString()+'Owner addition')},
 'source birth promoted to success with consistent ref':f=>{const d=JSON.parse(fs.readFileSync(join(f.root,f.refs.failed_result.path)));d.ok=true;d.exit_code=0;d.process_exit_code=0;f.evidence.metadata_replay.failed_creator.result=f.put(f.refs.failed_result.path,d)},
 'root guard claims different failed hash':f=>{f.guard.refs.failed_result.sha256='a'.repeat(64);f.evidence.metadata_replay.root_pins=f.put(f.evidence.metadata_replay.root_pins.path,f.guard)},
 'root capture predates successful adoption':f=>{f.guard.recorded_at='2026-10-21T08:30:00Z';f.evidence.metadata_replay.root_pins=f.put(f.evidence.metadata_replay.root_pins.path,f.guard)},
 'missing actual native report':f=>{delete f.evidence.metadata_replay.adopter_report},
 'invented old v1 literal route':f=>{f.evidence.policy='native-created-step3-origin-evidence-v1';f.evidence.version=1;f.evidence.replay={policy:'literal-python-item-writer-v1',writer_script:'/tmp/not-real.py'}},
}))test('reject '+name,actual,t=>{const f=fixture(t);mutate(f);assert.throws(()=>f.register())});

// Exercise the SAME restricted parser directly with altered transcript fixtures.
// No alternate parser API or test authority exists in the production module.
const parser=fs.readFileSync(join(candidate,'step3-native24-restart-adoption.mjs'),'utf8').split('const SCRIPT=String.raw`')[1].split('`;')[0];
function parserFixture(t){const f=fixture(t),input={run,id,birth_log:fs.readFileSync(join(f.root,f.refs.failed_log.path),'utf8'),adopter_log:fs.readFileSync(join(f.root,f.refs.adopter_log.path),'utf8'),algorithm_input:fs.readFileSync(join(f.root,f.refs.algorithm_input.path),'utf8'),native_item:f.raw.toString(),adoption_inputs:{}};for(const [path,ref]of [[`items/${id}.md`,f.refs.native_item],[`research/${run}-batch-24.pages.json`,f.refs.native_manifest],[`research/${run}-batch-24.proof-contracts.json`,f.refs.native_contract]])input.adoption_inputs[path]=fs.readFileSync(join(f.root,ref.path),'utf8');return{f,input,parse:()=>spawnSync('python3',['-I','-c',parser],{input:JSON.stringify(input),encoding:'utf8',timeout:15000,maxBuffer:2*1024*1024})}}
test('parser alone reproduces actual entire source without evaluating logged Python',actual,t=>{const x=parserFixture(t),p=x.parse();assert.equal(p.status,0,p.stderr);assert.equal(JSON.parse(p.stdout).item_sha256,x.f.evidence.carriers.item_file_sha256)});
for(const [name,mutate]of Object.entries({
 'incomplete original algorithm':x=>{x.input.algorithm_input+='Unlogged data'},
 'missing source creation':x=>{x.input.birth_log=x.input.birth_log.replace("pathlib.Path('items/'+nid+'.md').write_text(new)","pathlib.Path('items/'+nid+'.md').write_text(other)")},
 'unsupported source expression':x=>{x.input.birth_log=x.input.birth_log.replace("pathlib.Path('items/'+nid+'.md').write_text(new)","pathlib.Path('items/'+nid+'.md').write_text(__import__('os').getcwd())")},
 'unsupported later literal edit':x=>{x.input.birth_log=x.input.birth_log.replace('s=s[:s.index(', 's=s[:s.find(')},
 'source final bytes mismatch':x=>{x.input.native_item+='Unlogged addition'},
 'partial full contract adoption':x=>{const key=`research/${run}-batch-24.proof-contracts.json`;x.input.adoption_inputs[key]='UNLOGGED PARTIAL CONTRACT'},
 'duplicate complete carrier output':x=>{x.input.adopter_log+='\n'+x.input.native_item},
 'no unchanged reflow':x=>{x.input.adopter_log=x.input.adopter_log.replace('unchanged items/'+id+'.md','changed items/'+id+'.md')},
}))test('restricted parser rejects '+name,actual,t=>{const x=parserFixture(t);mutate(x);const p=x.parse();assert.notEqual(p.status,0,p.stdout)});

test('ordinary version1 literal native-writer origin remains available without restart authority',t=>{
 const root=fs.mkdtempSync(join(tmpdir(),'native-v1-default-'));t.after(()=>fs.rmSync(root,{recursive:true,force:true}));
 const put=(p,x)=>{fs.mkdirSync(dirname(join(root,p)),{recursive:true});fs.writeFileSync(join(root,p),typeof x==='string'?x:JSON.stringify(x));return{path:p,sha256:sha(fs.readFileSync(join(root,p)))}};
 const r='unit-v1',i='lem-unit-native-v1',page='unit-page',batch='1',stem=`research/${r}-dispatch/alpha-3a-batch-1.attempt-1`;
 const raw=`---\nid: ${i}\nkind: lemma\nstatus: draft\npipeline_run: ${r}\n---\n## Statement\nUnit.\n`,entry={id:i,kind:'lemma'},manifest=[{id:page,items:[entry]}],contract={version:1,scope:[i],contracts:{[i]:{}}};
 const writer="from pathlib import Path\nR='unit-v1'\nbase=Path('items')\ndef item(i,title,deps,body,level):\n t=f'''---\nid: {i}\nkind: lemma\nstatus: draft\npipeline_run: {R}\n---\n'''+body\n (base/(i+'.md')).write_text(t)\nitem('lem-unit-native-v1','Unit',[],'## Statement\\nUnit.\\n',0)";
 const shell="cat > /tmp/unit-native-v1.py <<'PY'\n"+writer+"\nPY\npython3 /tmp/unit-native-v1.py";
 const log='exec\n/bin/bash -lc "'+shell+'" in /fixture\n succeeded in 0ms:\n';
 const baseline={at:'2020-01-01T00:00:00Z',items:[],existing_item_files:[]};put(`research/${r}-step3-auditor-baseline.json`,baseline);
 const author={run:r,role:'alpha',label:'3a-batch-1',evidence_tag:'.attempt-1',result_file:'alpha-3a-batch-1.attempt-1.result.json',immutable_result_file:'alpha-3a-batch-1.attempt-1.result.json',started_at:'2020-01-02T00:00:00Z',ended_at:'2020-01-02T01:00:00Z',covers:['1'],prompt:stem+'.prompt.md',log:stem+'.log'};
 const author_evidence={result:put(stem+'.result.json',author),prompt:put(stem+'.prompt.md','Unit synthetic successful author.'),log:put(stem+'.log',log)};
 const native_item=put(`research/${r}-archive/item.md`,raw),native_manifest=put(`research/${r}-archive/manifest.json`,manifest),native_contract=put(`research/${r}-archive/contract.json`,contract);
 const sources=[[native_manifest,'pages'],[native_contract,'proof-contracts']].map(([ref,suffix])=>({source:`research/${r}-batch-1.${suffix}.json`,archive:ref.path,raw_sha256:ref.sha256,owner_modified_source:false,source_stat_at_capture:{mtime_utc:'2020-01-02T00:30:00Z'}}));
 const native_metadata_capture=put(`research/${r}-archive/capture.json`,{captured_at:'2020-01-02T02:00:00Z',sources});
 const carriers={guard_sha256:item.itemHashGuard(raw),judge_sha256:item.itemHashJudge(raw),item_file_sha256:sha(raw),manifest_sha256:hash({...entry,__step4_page_id:page}),contract_sha256:hash({})};carriers.step3_subject_sha256=hash({item_sha256:carriers.item_file_sha256,manifest_sha256:carriers.manifest_sha256,contract_sha256:carriers.contract_sha256});
 const evidence={version:1,policy:'native-created-step3-origin-evidence-v1',run:r,step:3,id:i,owner_identity:'/root',native_execution_credit:false,mathematical_acceptance:false,reason:'Synthetic compatibility fixture for the unchanged ordinary successful literal-writer route.',baseline_sha256:sha(JSON.stringify(baseline)),page,batch,author_result:author.result_file,author_evidence,native_item,native_manifest,native_contract,native_metadata_capture,carriers,replay:{policy:'literal-python-item-writer-v1',writer_script:'/tmp/unit-native-v1.py'}};
 const saved=put(`research/${r}-archive/evidence.json`,evidence),context={baseline,authors:[author],row:{id:i,page,batch,manifest_entry:entry}},registered=api.recordNativeCreationOrigin(root,r,3,i,saved,context);
 assert.equal(JSON.parse(fs.readFileSync(registered.path)).version,1);assert.ok(api.loadNativeCreationOrigin(root,r,i,context));
});
