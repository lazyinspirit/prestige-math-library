// ROOT ONLY, after actual reader/Alpha writer drain. Research preview; NO APPLY MODE.
// This file has not been executed as part of its preparation.
import fs from 'node:fs';import path from 'node:path';
import {splitFrontmatter,numberedProofSteps,factParagraphs,sourceSectionText,SOURCE_SECTIONS} from '../../tools/facts-block.mjs';
import {yaml} from '../../tools/pathway-lib.mjs';
const run='numerical-optimization-dynamics-2026-10-16',base=path.resolve(`research/${run}-owner-step3-metadata-handoff`),args=process.argv.slice(2),opt=f=>args[args.indexOf(f)+1],must=(x,m)=>{if(!x)throw Error(m)};
must(args.every((x,i)=>['--writers-drained','--batches','--output-dir'].includes(x)||(i>0&&['--batches','--output-dir'].includes(args[i-1]))),'Unsupported option; no phase maps or apply mode');
must(args.includes('--writers-drained')&&args.includes('--batches')&&args.includes('--output-dir'),'Require root actual-drain attestation, --batches N,N and --output-dir NEWDIR');
const bs=[...new Set(opt('--batches').split(','))];must(bs.length&&bs.every(b=>/^[1-9]\d*$/.test(b)&&+b<=107),'Explicit nonempty current run batches required');
const dest=path.resolve(opt('--output-dir'));must(dest.startsWith(base+path.sep)&&!fs.existsSync(dest),'NEW output directory must be inside handoff research directory');
const bound=new Map(),read=f=>{if(!bound.has(f))bound.set(f,fs.readFileSync(f,'utf8'));return bound.get(f)},j=f=>JSON.parse(read(f)),eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b),norm=s=>String(s??'').replace(/\s+/g,' ').trim();
const operations=[],holds=[],retained=[],src=new Map(),source=id=>{must(/^[a-z0-9-]+$/.test(id),'Invalid source ID');if(!src.has(id)){const f=`items/${id}.md`,raw=read(f),s=splitFrontmatter(raw);src.set(id,{path:f,...s,fm:yaml().parse(s.fm)??{},steps:numberedProofSteps(s.body),facts:factParagraphs(s.body)})}return src.get(id)},hold=(batch,id,kind,detail)=>holds.push({batch,id,kind,detail});
const tokens=(text,steps)=>{const out=new Set();for(const m of text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)){if(m[2])out.add(m[2]);else if(/^steps?\s/i.test(m[0])||steps.has(m[1]))out.add(m[1])}return [...out]};
const esc=s=>s.replaceAll('~','~0').replaceAll('/','~1'),op=(target,pointer,before,after,id,reason)=>operations.push({target,pointer,before,after,id,reason,root_continuity_screen_required:true});
for(const batch of bs){const mf=`research/${run}-batch-${batch}.pages.json`,cf=`research/${run}-batch-${batch}.proof-contracts.json`,pages=j(mf),doc=j(cf),owned=new Set();
 for(const [pi,p]of pages.entries()){const pageSource=read(`library/${p.category}/${p.id}.md`),pf=yaml().parse(splitFrontmatter(pageSource).fm)??{},listed=[...pf.items??[],...pf.examples??[]];
  for(const [ii,row]of (p.items??[]).entries()){if(typeof row!=='object'||!row.id){hold(batch,p.id,'manifest-inventory','String or missing row; no inferred new ownership');continue}const id=row.id,s=source(id);owned.add(id);
   if(!listed.includes(id)||s.fm.id!==id||row.kind!==s.fm.kind||row.title!==s.fm.title){hold(batch,id,'identity-or-placement','Page listing, ID, kind or title differs; no automatic ownership/schema edit');continue}
   const heading=['definition','algorithm'].includes(s.fm.kind)?'Definition':s.fm.kind==='example'?'Example':s.fm.kind==='counterexample'?'Statement refuted':'Statement';
   // Native local excerpts in contracts are not full source claim mirrors.
   const actualClaim=sourceSectionText(s.body,heading);if(actualClaim&&norm(row.statement)!==norm(actualClaim))hold(batch,id,'manifest-statement','Actual public section differs; root must review full retained claim before any mirror replacement');
   for(const field of ['deps','justified_by','forward_refs']){const before=row[field]??[],after=s.fm[field]??[];if(!Array.isArray(before)||!Array.isArray(after)){hold(batch,id,'dependency-shape',field);continue}if(!eq(before,after))op(mf,`/${pi}/items/${ii}/${field}`,Object.hasOwn(row,field)?row[field]:null,after,id,'Proposed exact same-ID source dependency mirror; root must confirm genuine source repair and page/consumer closure')}
  }
 }
 for(const id of doc.scope??[]){if(!owned.has(id)){hold(batch,id,'contract-scope','Contract item not in selected current manifest; retain, resolve owner separately');continue}const s=source(id),c=doc.contracts?.[id];if(!c){hold(batch,id,'missing-contract','No worksheet synthesis');continue}
  const steps=new Map(s.steps.map(x=>[x.id,x])),records=['derivations','routine_steps'].flatMap(group=>(c[group]??[]).map((r,i)=>({r,group,i}))),badSteps=s.steps.length!==steps.size;
  if(badSteps)hold(batch,id,'duplicate-source-step','No inferred paragraph mapping');
  for(const [step,st]of steps){const matches=records.filter(x=>x.r.step===step);if(badSteps||matches.length!==1){hold(batch,id,'step-classification',step);continue}const {r,group,i}=matches[0];
   if(norm(r.claim)!==norm(st.claim)){hold(batch,id,'paragraph-identity',`Retain ${group}/${r.id} at ${step}: abbreviated or changed claim is not safely remapped by label or old Step2 phase map`);continue}
   if(!Array.isArray(r.inputs)){hold(batch,id,'input-shape',`${group}/${r.id}`);continue}const needed=tokens(st.text,steps),missing=needed.filter(t=>!r.inputs.includes(t)&&!r.inputs.includes(`step ${t}`));
   if(missing.some(t=>/^[FAL]/.test(t)?!s.facts.has(t):!steps.has(t)||s.steps.indexOf(steps.get(t))>=s.steps.indexOf(st))){hold(batch,id,'unsupported-explicit-input',step);continue}
   if(missing.length)op(cf,`/contracts/${esc(id)}/${group}/${i}/inputs`,r.inputs,[...r.inputs,...missing.map(t=>/^[FAL]/.test(t)?t:`step ${t}`)],id,'Add only actual native explicit tokens to authenticated same-current-paragraph row; preserve ID/classification/claim/existing inputs/scores')
  }
  for(const {r}of records)if(!steps.has(r.step))hold(batch,id,'obsolete-step-record',`${r.id}: ${r.step}; retain until owner dispositions it`);
  const pairs=[...s.facts].flatMap(([fact,f])=>[...new Set(f.links)].map(source=>({fact,source}))),citations=c.citations??[],pairkey=x=>JSON.stringify([x.fact,x.source]);
  const citationPairSetSound=Array.isArray(citations)&&pairs.every(p=>citations.filter(c=>pairkey(c)===pairkey(p)).length===1)&&citations.every(c=>pairs.some(p=>pairkey(c)===pairkey(p)));
  if(!citationPairSetSound){hold(batch,id,'citation-pair-set','Missing/duplicate/stale native pair; retain complete array for owner review');continue}
  for(const [i,cite]of citations.entries()){const supplier=source(cite.source),section=sourceSectionText(supplier.body,cite.source_section),valid=SOURCE_SECTIONS.has(cite.source_section)&&typeof cite.quote==='string'&&norm(cite.quote)&&norm(section).includes(norm(cite.quote));
   if(!valid){hold(batch,id,'citation-local-excerpt',{fact:cite.fact,supplier:cite.source,source_section:cite.source_section,quote:cite.quote,reason:'Keep original local excerpt. Missing/changed/unsupported section needs focused owner disposition; never fall back to whole Proof or Statement.'});continue}
   const declared=[...s.fm.deps??[],...s.fm.justified_by??[],...s.fm.forward_refs??[]];if(!declared.includes(cite.source)){hold(batch,id,'citation-undeclared',cite.source);continue}
   retained.push({batch,id,fact:cite.fact,supplier:cite.source,source_section:cite.source_section,quote:'preserved verbatim'});
   const uses=s.steps.filter(st=>tokens(st.text,steps).includes(cite.fact)).map(st=>st.id);if(!uses.length){hold(batch,id,'citation-no-current-use',cite.fact);continue}
   if(!eq([...(cite.uses??[])].sort(),[...uses].sort()))op(cf,`/contracts/${esc(id)}/citations/${i}/uses`,cite.uses??null,uses,id,'Native explicit fact-token use membership only; preserve quote/section/reviewed and all other citation fields')
  }
 }
}
// An item with any unresolved coordinate gets NO proposed automatic operation.
const heldIds=new Set(holds.map(x=>x.id)),safe=operations.filter(o=>!heldIds.has(o.id)),heldOperations=operations.filter(o=>heldIds.has(o.id));
for(const [f,raw]of bound)must(fs.readFileSync(f,'utf8')===raw,'Input drift during preview: '+f);
fs.mkdirSync(dest,{recursive:true});for(const [f,raw]of bound){const p=path.join(dest,'inputs',f);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,raw,{flag:'wx'})}
fs.writeFileSync(path.join(dest,'proposal.json'),JSON.stringify({run,kind:'Step3 root-only no-apply coordinate preview',writer_drain_attestation:'Root supplied --writers-drained; preview does not establish actual engine drain',batches:bs,operations:safe,held_operations:heldOperations,holds,retained_local_excerpts:retained,guard:'Every read raw input under inputs/ must still equal live bytes before ROOT stages/applies a separately reviewed minimal patch. No operation may alter any other JSON field.',continuity:'Screen each changed item against existing accepted_repair obligations before root application. Preview creates no acceptance continuity or evidence hashes.',not_performed:['canonical writes','native checks/gates','hashes/levels/stamps','acceptance/continuity creation','reconciler execution','source changes'],execution_status:'preview only; not validation or mathematical acceptance'},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({proposal:path.join(dest,'proposal.json'),operations:safe.length,holds:holds.length,canonical_writes:0}));
