// Guarded two-Statement notation join and stable proof-row identity mapping.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',stem='research/'+run+'-owner-step2-battery1-';
const out=join(root,stem+'source-join'),read=p=>readFileSync(join(root,p),'utf8'),json=p=>JSON.parse(read(p)),sha=x=>createHash('sha256').update(x).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Preserve completed join');
const csmPath=stem+'csm-source/report.json',emgPath=stem+'emg-format/final-report.json';
if(sha(read(csmPath))!=='9bd20c324659eeb6c9da64dd84fe5d567e08a26357b7877b979a52c7f64b9f07'||sha(read(emgPath))!=='38f5e8dd4bf3be02157fc6594c3196f5e2c2bc56aa0324263ead386b5139455e')throw Error('Changed actual source releases');
const csm=json(csmPath),emg=json(emgPath);
for(const x of csm.inputs)if(sha(read(x.path))!==x.sha256)throw Error('Changed reviewed source/context '+x.path);
for(const x of csm.consumer_closure.nodes)if(sha(read('items/'+x.id+'.md'))!==x.sha256)throw Error('Changed reviewed consumer '+x.id);
for(const x of emg.source_bindings)if(sha(read(x.path.replace(/^physics\//,'')))!==x.sha256)throw Error('Changed EMG release '+x.path);
const maps=new Map([...csm.proof_step_maps_and_preservation.map(x=>[x.id,x.old_to_new_step_map]),...emg.source_changes.map(x=>[x.id,x.step_map])]);
const pending=[],transcribed=[],mapped=[];
for(let n=1;n<=80;n++){
 const manifest='research/'+run+'-batch-'+n+'.pages.json',before=read(manifest),pages=JSON.parse(before);let changed=false;
 for(const page of pages)for(const claim of page.items){
  if(!['pthm-csm-ideal-gas-ensemble','pthm-csm-ising-ring-correlation'].includes(claim.id))continue;
  const source=readItem(join(root,'items',claim.id+'.md')),current=sourceSectionText(source.body,'Statement').trim();
  if(claim.statement.replaceAll('\\iota(n!)','n!')!==current||claim.statement===current)throw Error('Not the exact notation-only Statement join '+claim.id);
  claim.statement=current;changed=true;transcribed.push(claim.id);
 }
 if(changed)pending.push({path:manifest,before,after:JSON.stringify(pages,null,2)+'\n'});
 const contract='research/'+run+'-batch-'+n+'.proof-contracts.json',old=read(contract),doc=JSON.parse(old);let touched=false;
 for(const [id,map] of maps){const entry=doc.contracts[id];if(!entry)continue;
  for(const field of ['derivations','routine_steps'])for(const row of entry[field]??[]){if(!map[row.step])throw Error('Unmapped actual old step '+id+' '+row.step);const step=map[row.step];if(step!==row.step){mapped.push({id,stable_id:row.id,old_step:row.step,current_step:step});row.step=step;touched=true;}}
 }
 if(touched)pending.push({path:contract,before:old,after:JSON.stringify(doc,null,2)+'\n'});
}
if(transcribed.length!==2||mapped.length!==7)throw Error('Unexpected exact source join');
mkdirSync(join(out,'before'),{recursive:true});const files=[];
for(const f of pending){if(read(f.path)!==f.before)throw Error('Concurrent metadata/worksheet edit');writeFileSync(join(out,'before',f.path.split('/').at(-1)),f.before,{flag:'wx'});writeFileSync(join(root,f.path),f.after);files.push({path:f.path,before_sha256:sha(f.before),after_sha256:sha(f.after)});}
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Two exact factorial-notation Statement transcriptions and stable identity preservation for seven renamed proof rows. Current claims/inputs and quotes are transcribed separately from actual source; no scientific verdict or gate waiver.',reports:[csmPath,emgPath].map(path=>({path,sha256:sha(read(path))})),transcribed,mapped,files},null,2)+'\n');
console.log(JSON.stringify({statement_joins:transcribed.length,mapped_rows:mapped.length,files:files.length}));
