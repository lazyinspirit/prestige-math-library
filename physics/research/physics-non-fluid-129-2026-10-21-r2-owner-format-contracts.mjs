// Root-only, exact released format repairs; this does not assert proof acceptance.
import {readFileSync,writeFileSync,mkdirSync,existsSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {numberedProofSteps,splitFrontmatter,sourceSectionText} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-preparation-repairs`,out=`${base}/central-contracts`;
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
const config=read(`${base}/central-contract-config.json`),bindings=config.bindings;
if(!process.argv.includes('--source-writers-drained'))throw Error('Require actual source writer drain');
if(existsSync(out))throw Error('Preserve prior operation; inspect existing archive');
if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native controller/workers not drained');
for(const row of bindings)if(sha(readFileSync(row.path))!==row.sha256)throw Error('Released input changed '+row.path);
const mappings=new Map(config.items.map(r=>[r.id,r.mapping]));
const hard=read(`research/${run}-owner-four-precheck-repairs/source-bindings-and-contract-proposal.json`).entries;
for(const e of hard)if(sha(readFileSync(`items/${e.id}.md`))!==e.source_file_sha256_after)throw Error('Hard repair changed '+e.id);
// Replace only explicitly marked own-step references, including list/range tails.
// Never touch free numeric constants, supplier quotes, finite-check programs or data.
function refs(s,map){return s.replace(/\bsteps?\s+\d+\.\d+(?:(?:\s*[,;–—-]\s*|\s+(?:and|through|to)\s+)\d+\.\d+)*/gi,chunk=>chunk.replace(/\d+\.\d+/g,n=>map[n]??n));}
function rewrite(value,map,key=''){
 if(Array.isArray(value))return value.map(v=>rewrite(v,map,key));
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,rewrite(v,map,k)]));
 if(typeof value!=='string'||['quote','exact_statement','code','program','expected'].includes(key))return value;
 if(['step','uses','inputs'].includes(key)&&map[value])return map[value];
 if(key==='id'&&/^step-\d+-\d+$/.test(value)){const n=value.slice(5).replace('-', '.');return map[n]?`step-${map[n].replace('.','-')}`:value;}
 return refs(value,map);
}
const changes=[];
for(const name of readdirSync('research').filter(n=>n.startsWith(`${run}-batch-`)&&n.endsWith('.proof-contracts.json'))){
 const path=`research/${name}`,before=readFileSync(path),doc=JSON.parse(before),touched=[];
 for(const [id,old]of Object.entries(doc.contracts??{})){
  const special=hard.find(e=>e.id===id),map=mappings.get(id);
  if(!special&&!map)continue;
  let entry=rewrite(old,special?Object.fromEntries(Object.entries(special.step_mapping).filter(([,v])=>typeof v==='string')):map);
  const steps=numberedProofSteps(splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).body),byId=new Map(steps.map(s=>[s.id,s]));
  if(special){
   const proposal=special.contract_changes_required;
   entry.derivations=proposal.proposed_derivations;entry.routine_steps=[];
   for(const citation of entry.citations){const patch=proposal.citations_uses.find(c=>c.fact===citation.fact&&c.source===citation.source);if(!patch)throw Error('Missing explicit citation proposal '+id);citation.uses=patch.new_uses;}
   for(const p of proposal.boundary_and_finite_check_reference_patches){const tail=p.path.slice(`contracts.${id}.`.length),m=tail.match(/^(\w+)\[(\d+)\]\.(\w+)$/);if(!m)throw Error(p.path);if(old[m[1]][+m[2]][m[3]]!==p.old)throw Error('Patch preimage '+p.path);entry[m[1]][+m[2]][m[3]]=p.proposed;}
  }
  // Existing paragraph classifications retained; source-preserved final paragraphs
  // supply their exact claims and actual local references after canonical ordering.
  for(const field of ['derivations','routine_steps'])for(const d of entry[field]??[]){
   const step=byId.get(d.step);if(!step)throw Error('Missing mapped step '+id+' '+d.step);
   d.claim=step.claim;
   const explicit=[...step.text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].filter(m=>m[2]||/^step\s/.test(m[0])||byId.has(m[1])).map(m=>m[2]??`step ${m[1]}`);
   d.inputs=[...new Set([...(d.inputs??[]),...step.inputs,...explicit])];
  }
  if(new Set([...entry.derivations,...entry.routine_steps].map(d=>d.step)).size!==steps.length)throw Error('Changed paragraph coverage '+id);
  // Citation use labels refer to THIS proof's facts, never supplier proof labels.
  for(const c of entry.citations)c.uses=steps.filter(s=>new RegExp(`\\b${c.fact}\\b`).test(s.text)).map(s=>s.id);
  doc.contracts[id]=entry;touched.push(id);
 }
 // Public interface edits were whitespace-only. Mirror only an exact old section
 // whose whitespace-normalized value equals its current public supplier section.
 const quoteRepairs=[];
 function quotes(value,key='',supplier=null,section=null){
  if(Array.isArray(value))return value.map(v=>quotes(v,key,supplier,section));
  if(value&&typeof value==='object'){
   const own=value.source??value.supplier??supplier,sec=value.source_section??section;
   return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,quotes(v,k,own,sec)]));
  }
  if(typeof value==='string'&&['quote','exact_statement'].includes(key)&&config.public_whitespace_ids.includes(supplier)){
   const current=sourceSectionText(splitFrontmatter(readFileSync(`items/${supplier}.md`,'utf8')).body,section);
   if(current&&value!==current&&value.replace(/\s+/g,' ').trim()===current.replace(/\s+/g,' ').trim()){quoteRepairs.push({supplier,section,key});return current;}
  }
  return value;
 }
 const final=quotes(doc),after=Buffer.from(JSON.stringify(final,null,2)+'\n');
 if((touched.length||quoteRepairs.length)&&!before.equals(after))changes.push({path,before,after,items:touched,quote_repairs:quoteRepairs});
}
// Mutation starts only after every source binding and every contract preimage has
// been read and the complete proposed operation is reviewable.
mkdirSync(`${out}/before`,{recursive:true});
writeFileSync(`${out}/proposal.json`,JSON.stringify({at:new Date().toISOString(),bindings,changes:changes.map(({path,before,after,...r})=>({path,before_sha256:sha(before),after_sha256:sha(after),...r})),scientific_acceptance:false},null,2)+'\n');
for(const row of bindings)if(sha(readFileSync(row.path))!==row.sha256)throw Error('Source changed before write '+row.path);
for(const row of changes){if(sha(readFileSync(row.path))!==sha(row.before))throw Error('Contract preimage changed');writeFileSync(`${out}/before/${row.path.split('/').at(-1)}`,row.before);}
for(const row of changes)writeFileSync(row.path,row.after);
writeFileSync(`${out}/application.json`,JSON.stringify({at:new Date().toISOString(),files:changes.length,items:config.items.length+hard.length,changes:changes.map(({path,before,after,...r})=>({path,before_sha256:sha(before),after_sha256:sha(after),...r})),scientific_acceptance:false},null,2)+'\n');
console.log(JSON.stringify({contracts:changes.length,format_items:config.items.length,hard_cases:hard.length,archive:out}));
