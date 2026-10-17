// Current-source transcription only. Preserve substantive reviews and historical preimages.
import {readFileSync,writeFileSync,mkdirSync,existsSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {fileURLToPath} from 'node:url';
import {join,dirname} from 'node:path';
import {SOURCE_SECTIONS,factParagraphs,numberedProofSteps,sourceSectionText,splitFrontmatter} from '../../tools/physics-support/facts-block.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-step2-contract-use-join');
const read=p=>readFileSync(join(root,p),'utf8'),json=p=>JSON.parse(read(p));
const sha=x=>createHash('sha256').update(x).digest('hex');
const norm=x=>String(x??'').replace(/\s+/g,' ').trim();
if(existsSync(join(out,'completion.json')))throw Error('Preserve completed transcription');
const state=json('.physics-autopilot/'+run+'/state.json');
if(state.stage!=='2-scope-review'||Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Native writers not drained');
const release=json('.physics-autopilot/'+run+'/owner-step2-all-science-released.json');
if(!release.all_scientific_escalations_resolved)throw Error('Science unresolved');
for(let n=1;n<=80;n++)if(json('research/'+run+'-scope-review/batch-'+n+'/state.json').phase!=='accepted')throw Error('Batch held '+n);
const bindings=new Map(),pending=[],changes=[],diagnostics=[];
function body(id){const path='items/'+id+'.md',raw=read(path);bindings.set(path,sha(raw));return splitFrontmatter(raw).body;}
function section(id,preferred){const b=body(id);for(const h of [...new Set([preferred,...SOURCE_SECTIONS])]){if(!SOURCE_SECTIONS.has(h))continue;const text=sourceSectionText(b,h)?.trim();if(text)return {section:h,text};}throw Error('No public quotation '+id);}
function tokens(text,steps){const result=new Set();for(const m of text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g))if(m[2]||/^step\s/.test(m[0])||steps.has(m[1]))result.add(m[1]??m[2]);return result;}
for(let n=1;n<=80;n++){
 const path='research/'+run+'-batch-'+n+'.proof-contracts.json',before=read(path),doc=JSON.parse(before);
 for(const [id,entry] of Object.entries(doc.contracts)){
  const b=body(id),steps=numberedProofSteps(b),byId=new Map(steps.map(s=>[s.id,s])),facts=factParagraphs(b);
  // Do not create proof worksheets for nonproof items or overwrite source/scope verdicts.
  if(steps.length){
   const oldRows=new Map();
   for(const field of ['derivations','routine_steps'])for(const row of entry[field]??[]){if(oldRows.has(row.step))throw Error('Preexisting duplicate classification '+id+' '+row.step);oldRows.set(row.step,{field,row});}
   const derivations=[],routine=[];
   for(const s of steps){
    const old=oldRows.get(s.id),inputs=[...s.inputs],have=new Set(inputs.map(t=>t.replace(/^step\s+/,'')));
    for(const token of tokens(s.text,byId))if(!have.has(token)){inputs.push(/^\d/.test(token)?'step '+token:token);have.add(token);}
    const retainRoutine=old?.field==='routine_steps'&&norm(old.row.claim)===norm(s.claim);
    const row={...(old?.row??{}),id:old?.row.id??'step-'+s.id.replace('.','-'),claim:s.claim,step:s.id,inputs};
    if(Object.hasOwn(row,'steps'))throw Error('Legacy steps needs specific review '+id);
    (retainRoutine?routine:derivations).push(row);
    if(old?.field==='routine_steps'&&!retainRoutine)diagnostics.push({id,step:s.id,change:'Changed claim transcribed as a derivation, without a new routine classification.'});
   }
   for(const [step,old] of oldRows)if(!byId.has(step))diagnostics.push({id,step,change:'Removed source step; original worksheet retained in before archive.',old:old.row});
   entry.derivations=derivations;entry.routine_steps=routine;
   const citations=[];
   for(const f of facts.values())for(const supplier of new Set(f.links)){
    const old=(entry.citations??[]).find(c=>c.fact===f.label&&c.source===supplier),st=section(supplier,old?.source_section);
    const quote=old?.quote&&norm(st.text).includes(norm(old.quote))?old.quote:st.text;
    citations.push({...old,fact:f.label,source:supplier,source_section:st.section,quote,uses:steps.filter(s=>tokens(s.text,byId).has(f.label)).map(s=>s.id)});
   }
   entry.citations=citations;
  }else for(const c of entry.citations??[]){const st=section(c.source,c.source_section);if(!norm(st.text).includes(norm(c.quote))){c.source_section=st.section;c.quote=st.text;}}
  for(const excerpt of entry.supplier_excerpts??[]){if(!excerpt.supplier||typeof excerpt.exact_statement!=='string')continue;const st=section(excerpt.supplier,excerpt.source_section);if(!norm(st.text).includes(norm(excerpt.exact_statement))){excerpt.source_section=st.section;excerpt.exact_statement=st.text;}}
 }
 const after=JSON.stringify(doc,null,2)+'\n';if(after!==before)pending.push({path,before,after});
}
for(const [path,hash] of bindings)if(sha(read(path))!==hash)throw Error('Concurrent source mutation '+path);
mkdirSync(join(out,'before'),{recursive:true});
for(const f of pending){if(read(f.path)!==f.before)throw Error('Concurrent contract mutation '+f.path);const archive=join(out,'before',f.path);mkdirSync(dirname(archive),{recursive:true});writeFileSync(archive,f.before,{flag:'wx'});writeFileSync(join(root,f.path)+'.owner-temp',f.after);renameSync(join(root,f.path)+'.owner-temp',join(root,f.path));changes.push({path:f.path,before_sha256:sha(f.before),after_sha256:sha(f.after)});}
const completion={run,at:new Date().toISOString(),qualification:'Source transcription of actual steps, input tokens and exact public quotations. Original substantive reviews, risk and boundaries retained. No source editing, new proof/source-reading verdict or gate approval.',files:changes,diagnostics,source_bindings:[...bindings].map(([path,sha256])=>({path,sha256}))};
writeFileSync(join(out,'completion.json'),JSON.stringify(completion,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({changed_contracts:changes.length,diagnostics:diagnostics.length,source_bindings:bindings.size}));
