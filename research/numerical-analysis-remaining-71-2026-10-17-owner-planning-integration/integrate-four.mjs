import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {planDocument,planForeignResidual} from '../../tools/step6-plan-projection.mjs';
import {sharedWriteLock} from '../../tools/step5-shared-write-lock.mjs';
const run='numerical-analysis-remaining-71-2026-10-17', base=`research/${run}-owner-planning-integration`, pref=`research/${run}-ROOT-`;
const read=p=>readFileSync(p,'utf8'), once=(s,a,b)=>{if(s.split(a).length!==2)throw Error('nonunique/stale exact text: '+a.slice(0,100));return s.replace(a,b);};
const lock=sharedWriteLock(process.cwd(),'acquire',`${run}-root-planning-four`);if(!lock.acquired)throw Error(lock.message);
try {
 const paths=['research/plan-numerical-linear-track.md','research/numerical-analysis-four-category-scaffolds-2026-10-16/linear-audit.md','research/plan-spec.json'];
 const before=new Map(paths.map(p=>[p,read(p)])), out=new Map(before);
 const mutate=(p,fn)=>out.set(p,fn(out.get(p)));
 const pme=JSON.parse(read(pref+'pme-planning-cycle1/guarded-proposals.json'));
 for(const op of pme.operations.filter(x=>!x.description_only_updates)){
  mutate(op.path,whole=>{
   const {start,end}=op.section_guard; const a=whole.indexOf(start),b=whole.indexOf(end,a+start.length);
   if(a<0||b<0||whole.indexOf(start,a+start.length)>=0)throw Error('section guard');
   let section=whole.slice(a,b);for(const r of op.replacements)section=once(section,r.expected_old,r.proposed_new);
   if(op.append_before_next_section)section=section.trimEnd()+'\n'+op.append_before_next_section+'\n';
   whole=whole.slice(0,a)+section+whole.slice(b);
   for(const r of op.document_wide_exact_replacements??[])whole=once(whole,r.expected_old,r.proposed_new);
   if(op.append_at_document_end_if_heading_absent){if(whole.includes('## PC-EWALD local mesh supplier proof development'))throw Error('appendix already exists');whole+=op.append_at_document_end_if_heading_absent;}
   return whole;
  });
 }
 const rbf=JSON.parse(read(pref+'rbf-planning-cycle1/guarded-snippets.json'));
 for(const r of rbf.replacements)mutate(r.file,s=>once(s,r.old,r.new));
 const design=paths[0], sectionAppend=(heading,next,body)=>mutate(design,s=>{
  const a=s.indexOf(heading),b=s.indexOf(next,a+heading.length);if(a<0||b<0)throw Error('section not found');
  return s.slice(0,b).trimEnd()+'\n\n'+body.trim()+'\n\n'+s.slice(b);
 });
 const rational=read(pref+'rational-planning-cycle1/guarded-snippets.md');
 const rate=rational.split('## Replacement APP-RATIONAL rate direction\n\n')[1].split('\n## Dependency and consumer direction')[0].trim();
 sectionAppend('## APP-RATIONAL —','## GEO-DEL —',`### Current owner correction — Floater–Hormann rate (2026-10-17)\n\n${rate}\n\nFull independently checked argument and counterexample: \`${pref}rational-planning-cycle1/proof.md\`. The old C^(d+1)-seminorm-only rate and residual hold in the historical specialist audit are superseded only by this scientific correction. Its original report and source record remain historical evidence. Author the local weight, denominator, divided-difference and simplex/variation suppliers before their within-proof uses. The same reviewer owns the only planned consumer, the B companion; every FH example must use an actual BV or C^(d+2) hypothesis. No item-level review or acceptance exists at this preauthor stage.`);
 const discrepancy=read(pref+'discrepancy-status-cycle1/guarded-snippets.md').split('\n> ').slice(1).map(s=>s.trim()).join('\n\n');
 sectionAppend('## NA-46 —','## APP-RBF —',`### Current owner source/status direction (2026-10-17)\n\n${discrepancy}`);
 sectionAppend('## APP-RBF —','## APP-SPLINE —',`### Current owner local supplier direction (2026-10-17)\n\nRead \`${pref}rbf-planning-cycle1/PROOF.md\` in full, with its REPORT.md foundational-interface table and same-reviewer companion disposition, before authoring. Preserve arbitrary fixed d≥1, ν>0 and a>0 and the restriction-quotient H^(ν+d/2)(Ω) convention. The complete local proof constructs the spectral/native equivalence, cone-domain zeros lemma, fill-distance rate, separation bounds, and RBF-FD consistency. The actual Hilbert/measure/Gamma/Taylor suppliers already lie in the approved prerequisite closure; list their real item deps and carry their stated Choice assumptions (full AC conservatively if retaining the legacy Riesz–Fischer dependency). No additional specialist Fourier theorem is assumed.\n\nThis clarifies the generic “no external canonical item” wording above: no additional specialist supplier page is needed; existing foundational suppliers are consumed explicitly. Author substantial local intermediates on this A page before their logical uses. The report's ordering instruction governs proof readiness and acceptance, while native parallel pair dispatch remains unchanged: continue authoring against declared missing cross-pair interfaces rather than waiting for another author. Only the B companion is a planned consumer; preserve all three examples and use the demonstrated near-duplicate Rayleigh argument for illconditioning.`);
 // The old audit remains attributable; preserve its complete exact pre-integration bytes below.
 mutate(paths[1],s=>s+'\n\n## Root planning integration — 2026-10-17\n\nThe PME and Matérn updates above are current owner amendments based on the complete run-local ROOT proof packets, not new claims by the original scaffold auditor. The exact prior audit is preserved under `research/'+run+'-owner-planning-integration/linear-audit.before.md`. The current controlling design supersedes the historical APP-RATIONAL seminorm-only rate with the proved BV/source-rate correction and counterexample. No amendment grants authored-item, reviewer, or native gate credit.\n');
 let plan=out.get(paths[2]);const doc=planDocument(plan), changes=[];
 const pmeUpdates=pme.operations.flatMap(o=>o.description_only_updates??[]);
 for(const u of pmeUpdates){const row=doc.rows.find(r=>r.id===u.selector.id);if(!row||JSON.stringify(row.value.items)!=='[]'||row.value.description!==u.expected_old)throw Error('PME row stale '+u.selector.id);const token=row.children.find(c=>c.key==='description');changes.push({start:token.start,end:token.end,text:JSON.stringify(u.proposed_new),id:row.id});}
 const oldRate='Define Floater-Hormann rational interpolation on ordered real nodes with degree parameter and prove no real poles under the exact admissible construction; state an error bound with mesh ratio/smoothness constants.';
 const newRate='Define Floater-Hormann interpolation for ordered distinct real nodes and 0<=d<n and prove no real poles. Prove the local C^(d+1) bounded-variation derivative rate and the sharper C^(d+2) parity bounds, including d=0 local mesh ratio, exactly as specified by the current owner correction in research/plan-numerical-linear-track.md. Include the explicit uniform-mesh counterexample refuting the C^(d+1)-seminorm-only rate; preserve all AAA and Pade interfaces.';
 for(const id of ['barycentric-rational-and-aaa-approximation','barycentric-rational-and-aaa-approximation-examples']){
  const row=doc.rows.find(r=>r.id===id);if(!row||JSON.stringify(row.value.items)!=='[]')throw Error('rational row guard');const value=JSON.parse(row.value.description);value.scope=value.scope.map(s=>s===oldRate?newRate:s);if(!value.scope.includes(newRate))throw Error('missing old rate');if(Array.isArray(value.proof_route))value.proof_route=value.proof_route.map(s=>s===oldRate?newRate:s);
  const token=row.children.find(c=>c.key==='description');changes.push({start:token.start,end:token.end,text:JSON.stringify(JSON.stringify(value)),id});
 }
 for(const c of [...changes].sort((a,b)=>b.start-a.start))plan=plan.slice(0,c.start)+c.text+plan.slice(c.end);
 if(planForeignResidual(plan,changes.map(c=>c.id))!==planForeignResidual(before.get(paths[2]),changes.map(c=>c.id)))throw Error('foreign plan bytes changed');
 out.set(paths[2],plan);
 // No file is written until every exact guard and the foreign-byte projection succeeds.
 for(const [p,s] of before)if(read(p)!==s)throw Error('concurrent change '+p);
 for(const [p,s] of before){const name=p===paths[0]?'linear-track.before.md':p===paths[1]?'linear-audit.before.md':'selected-plan-rows.before.json';const backup=base+'/'+name;if(existsSync(backup))throw Error('prior integration evidence exists');writeFileSync(backup,p===paths[2]?JSON.stringify(doc.rows.filter(r=>changes.some(c=>c.id===r.id)).map(r=>({id:r.id,raw:r.raw})),null,2)+'\n':s,{flag:'wx'});}
 for(const [p,s] of out)writeFileSync(p,s);
 writeFileSync(base+'/four-integration.json',JSON.stringify({run,at:new Date().toISOString(),planning_only:true,escalations_resolved:['PC-EWALD','APP-RBF','APP-RATIONAL','NA-46'],remaining:['NA-08 complex Gaussian expected error'],paths,plan_description_rows:changes.map(c=>c.id),foreign_plan_bytes_preserved:true,native_controls_issued:false,item_acceptance_claimed:false},null,2)+'\n',{flag:'wx'});
 console.log('Integrated four proof/status planning repairs; Gaussian hold retained. No gate or resume.');
} finally {sharedWriteLock(process.cwd(),'release',`${run}-root-planning-four`);}
