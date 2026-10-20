// Exact wiki-link/title substitutions plus current native interface mirrors.
import fs from 'node:fs';import crypto from 'node:crypto';
import {splitFrontmatter,sourceSectionText} from '../tools/facts-block.mjs';
import {sharedWriteLock} from '../tools/step5-shared-write-lock.mjs';
const run='machine-learning-all-101-2026-10-19',dir=`research/${run}-owner-repeat-quote-reconciliation`,read=p=>fs.readFileSync(p,'utf8'),json=p=>JSON.parse(read(p)),sha=x=>crypto.createHash('sha256').update(x).digest('hex'),norm=t=>t.replace(/\s+/g,' ').trim();
const scan=json(`${dir}/full-scope-scan.json`),collection=`research/${run}-step5-v2/repeat-1-collected.json`,col=json(collection),state=json(`.autopilot/${run}/state.json`);
if(state.stage!=='5.5-adjudicate'||!state.paused||Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Need paused/drained5.5');
if(scan.scope!==1285||scan.unresolved.length!==12||scan.mechanical_link_title_refreshes.length!==1295)throw Error('Unexpected scoped inventory');
const rows=scan.mechanical_link_title_refreshes.map(x=>({...x,classification:'exact wiki-link to displayed-title presentation substitution'}));
for(const x of scan.unresolved){
 if(!col.downstream.includes(x.id)||!col.restated.includes(x.source)||!['def-hahn-hard-soft-attention-sequence-model','lem-carath-ode-flow-with-integrable-local-bounds','def-imitation-learning-and-expert-surrogate-loss'].includes(x.source))throw Error('Not actual native changed supplier/queued consumer');
 rows.push({...x,after_quote:x.current_section.trim(),classification:'current native repaired interface mirror; ordinary consumer review still owed'});
}
const owner=`${run}-root-full-quotes`;if(!sharedWriteLock(process.cwd(),'acquire',owner).acquired)throw Error('Metadata busy');
try{
 const files=new Map(),sources=new Map();
 for(const x of rows){
  if(!files.has(x.path)){const before=read(x.path);files.set(x.path,{before,data:JSON.parse(before)});}
  const row=files.get(x.path).data.contracts[x.id].citations[x.index],source=`items/${x.source}.md`,text=read(source),sec=sourceSectionText(splitFrontmatter(text).body,x.source_section);
  if(row.quote!==x.before_quote||row.source!==x.source||row.source_section!==x.source_section||!norm(sec).includes(norm(x.after_quote)))throw Error('Quote/source CAS failed');
  row.quote=x.after_quote;sources.set(source,sha(text));
 }
 fs.mkdirSync(`${dir}/full-scope-carriers`,{recursive:true});
 const carriers=[...files].map(([path,f])=>({path,before_sha256:sha(f.before),after_sha256:sha(JSON.stringify(f.data,null,2)+'\n')}));
 fs.writeFileSync(`${dir}/full-scope-plan.json`,JSON.stringify({version:1,run,at:new Date().toISOString(),attribution:'root metadata-only, no mathematical review or coverage',scan_sha256:sha(read(`${dir}/full-scope-scan.json`)),collection_sha256:sha(read(collection)),rows,carriers,sources:Object.fromEntries(sources)},null,2)+'\n',{flag:'wx'});
 for(const [p,f] of files){if(read(p)!==f.before)throw Error('Carrier CAS changed');fs.writeFileSync(`${dir}/full-scope-carriers/${p.split('/').at(-1)}.before`,f.before,{flag:'wx'});}
 for(const [p,h] of sources)if(sha(read(p))!==h)throw Error('Source changed');
 for(const [p,f] of files){const after=JSON.stringify(f.data,null,2)+'\n';fs.writeFileSync(p,after);fs.writeFileSync(`${dir}/full-scope-carriers/${p.split('/').at(-1)}.after`,after,{flag:'wx'});}
 fs.writeFileSync(`${dir}/full-scope-applied.json`,JSON.stringify({version:1,run,at:new Date().toISOString(),plan_sha256:sha(read(`${dir}/full-scope-plan.json`)),presentation_quotes:1295,native_interface_mirrors:12,carriers,source_writes:0,native_evidence_writes:0},null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify({presentation_quotes:1295,native_interface_mirrors:12,carriers:carriers.length,source_writes:0,native_evidence_writes:0}));
}finally{sharedWriteLock(process.cwd(),'release',owner);}
