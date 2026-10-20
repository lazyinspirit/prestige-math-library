// Root metadata-only preparation; reads actual YAML rather than list regexes.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {yaml} from '../tools/pathway-lib.mjs';
import {dependencyLevels} from '../tools/item-dependency-levels.mjs';
const run='machine-learning-all-101-2026-10-19',base=`research/${run}-owner-step5-preparation`,sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const read=p=>fs.readFileSync(p,'utf8'),state=JSON.parse(read(`.autopilot/${run}/state.json`));
if(state.stage!=='5.1-adjudicate'||!state.paused||Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Need actual paused/drained native5.1');
const carriers=[],pages=[],mismatches=[],sourceGuards=[];
for(const name of fs.readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n))){
 const file=`research/${name}`,raw=read(file),data=JSON.parse(raw);
 for(const page of data)for(const item of page.items){
  const source=`items/${item.id}.md`,text=read(source),fm=yaml().parse(/^---\n([\s\S]*?)\n---\n/.exec(text)?.[1]??'');
  if(fm.id!==item.id||!Array.isArray(fm.deps))throw Error('Malformed actual source: '+item.id);
  sourceGuards.push({path:source,sha256:sha(text)});
  for(const field of ['kind','title','deps','dependency_level']){
   const same=field==='deps'?JSON.stringify([...item[field]].sort())===JSON.stringify([...fm[field]].sort()):JSON.stringify(item[field])===JSON.stringify(fm[field]);
   if(!same){mismatches.push({id:item.id,file,field,before:item[field],after:fm[field]});item[field]=fm[field];}
  }
 }
 pages.push(...data);carriers.push({path:file,before_sha256:sha(raw),after_sha256:sha(JSON.stringify(data,null,2)+'\n'),before:raw,after:JSON.stringify(data,null,2)+'\n'});
}
const graph=dependencyLevels(pages),changed=carriers.filter(c=>c.before!==c.after);
// Do not lower source levels to fit accidentally truncated manifest deps.
// All current full source dependencies must yield their actual declared levels.
if(graph.errors.length)throw Error(graph.errors.join('\n'));
const actual=changed.filter(c=>mismatches.some(m=>m.file===c.path));
const plan={version:1,run,created_at:new Date().toISOString(),purpose:'Restore exact current-source metadata mirrors only; no native report, claim, source, scope or verdict changes',items:graph.items.size,mismatches,source_guards:sourceGuards,carriers:actual};
fs.mkdirSync(base,{recursive:true});
if(!process.argv.includes('--apply')){
 fs.writeFileSync(`${base}/plan.json`,JSON.stringify(plan,null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify({mode:'plan',items:graph.items.size,mismatches:mismatches.length,files:actual.map(c=>c.path),fields:[...new Set(mismatches.map(m=>m.field))],source_level_changes:0,source_writes:0}));
}else{
 const old=JSON.parse(read(`${base}/plan.json`));
 if(JSON.stringify(old.mismatches)!==JSON.stringify(mismatches)||JSON.stringify(old.source_guards)!==JSON.stringify(sourceGuards)||JSON.stringify(old.carriers)!==JSON.stringify(actual))throw Error('Metadata CAS plan changed');
 for(const c of actual){if(sha(read(c.path))!==c.before_sha256)throw Error('Manifest changed');fs.writeFileSync(c.path,c.after);}
 for(const g of sourceGuards)if(sha(read(g.path))!==g.sha256)throw Error('Source changed during metadata-only preparation');
 fs.writeFileSync(`${base}/applied.json`,JSON.stringify({version:1,run,at:new Date().toISOString(),plan_sha256:sha(read(`${base}/plan.json`)),manifests:actual.map(c=>({path:c.path,before_sha256:c.before_sha256,after_sha256:c.after_sha256})),source_writes:0,native_evidence_writes:0},null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify({mode:'applied',items:graph.items.size,mismatches:mismatches.length,files:actual.length,source_writes:0,native_evidence_writes:0}));
}
