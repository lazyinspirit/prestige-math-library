// Root current-source transcription proposal. Does not edit production records or assert proof acceptance.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem,NONPROOF_KINDS} from '../tools/physics-support/physics-content.mjs';
import {numberedProofSteps,factParagraphs,sourceSectionText,SOURCE_SECTIONS} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-step2-root-adoption/contracts`,sha=x=>createHash('sha256').update(x).digest('hex');
const read=p=>JSON.parse(readFileSync(p)),norm=s=>String(s??'').replace(/\s+/g,' ').trim();
mkdirSync(base,{recursive:true});
const guards=new Map(),diagnostics=[],all={version:1,scope:[],contracts:{}},changed=[];
const item=id=>{const p=`items/${id}.md`,s=readItem(p);guards.set(p,sha(s.raw));return s;};
function tokens(s,steps){return [...new Set([...s.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].filter(m=>m[2]||/^step\s/.test(m[0])||steps.has(m[1])).map(m=>m[2]??`step ${m[1]}`))];}
function pub(s,preferred){const headings={definition:'Definition',example:'Example',remark:'Remark',postulate:'Postulate',counterexample:'Statement refuted','false-statement':'Statement refuted'};for(const h of [...new Set([preferred,headings[s.kind]??'Statement',...SOURCE_SECTIONS])]){if(!SOURCE_SECTIONS.has(h))continue;const q=sourceSectionText(s.body,h)?.trim();if(q)return {section:h,quote:q};}throw Error('No public supplier '+s.id);}
const boundaries={
 'def-emg-fx-continuous-compact-top-form-integral':[
 ['empty','checked','Definition and step 1.1 assign integral zero when the compact support is empty.'],
 ['zero','checked','Step 4.1 proves linearity; hence the zero top form has integral zero, independently of its finite localization.'],
 ['one','checked','Steps 2.1 and 3.1 identify the one-chart case with its zero-extended Euclidean integral and preserve it under positively oriented coordinate changes.'],
 ['degenerate','not_applicable','The Definition assumes a smooth oriented four-manifold and ordinary nonsingular coordinate charts; singular spaces and degenerate chart Jacobians are outside these data.'],
 ['endpoints','checked','Steps 1.1 and 2.1 handle the flat cutoff thresholds and zero extension across chart boundaries; the flat-function supplier makes the threshold joins smooth.'],
 ['nonempty-choice','checked','Step 1.1 takes a finite subcover from the family of all admissible coordinate balls and makes only finitely many selections; Countable Choice is retained for the smooth integration supplier in step 5.1.'],
 ['iff-forward','not_applicable','The Definition constructs a continuous compactly supported integral and lists its compatibility properties; it states no biconditional.'],
 ['iff-reverse','not_applicable','Chart independence is proved by a finite double localization in step 4.1; the Definition asserts no converse characterization.']],
 'lem-nrqmx-continuous-simplex-integrals':[
 ['empty','checked','The Statement and step 3.1 use the single empty tuple for n=0 and set I_0(F)=F, including when T=0.'],
 ['zero','checked','Steps 1.1 and 3.1 give zero for the zero integrand and for T=0 when n is positive.'],
 ['one','checked','Step 3.1 reduces n=1 to the ordinary one-dimensional integral on [0,T], with its equal-endpoint zero convention.'],
 ['degenerate','checked','Step 1.1 handles the zero-dimensional vector space; step 3.1 handles the collapsed simplex at T=0.'],
 ['endpoints','checked','Step 3.1 proves continuity at b(y)=0 using the rescaled integral and the norm estimate, including faces and coincident ordered coordinates.'],
 ['nonempty-choice','checked','The Statement supplies a finite basis. Steps 1.1 and 4.1 use only finite coordinate operations, recursive one-dimensional integration and linear maps; no choice axiom or Fubini exchange is introduced.'],
 ['iff-forward','not_applicable','The Statement gives existence, linearity, positivity and a norm bound for a recursively defined integral; it states no equivalence.'],
 ['iff-reverse','not_applicable','Basis independence and commutation with linear maps are direct consequences in step 4.1, not a converse assertion.']],
 'lem-tgrx-locally-finite-relative-chain-model':[
 ['empty','checked','Steps 1.1 and 2.1 allow the zero chain and the empty ambient space; all resulting chain groups and quotient classes then have their zero elements.'],
 ['zero','checked','Step 1.1 defines finite mod-two face sums and proves their double boundary zero; step 2.1 admits the zero witness when the cycle representatives agree.'],
 ['one','checked','Step 1.1 permits one singular simplex as a locally finite finite chain, with its finite boundary; being an individual simplex does not assert that it is a cycle.'],
 ['degenerate','checked','The quotient Definition and step 1.1 give the zero relative chain complex when B equals the ambient space; compact ambient space reduces locally finite chains to finite chains in step 2.1.'],
 ['endpoints','checked','Step 3.1 leaves boundary faces unpaired while cancelling interior faces; step 2.2 imposes the local generator condition only at interior points of Y.'],
 ['nonempty-choice','checked','The Statement supplies the ambient locally finite chain, ordered triangulation and finite local certificates; step 3.1 verifies those data without asserting automatic global existence or a nonproper pushforward.'],
 ['iff-forward','checked','Step 2.1 expands equality of relative homology classes to a chain r whose boundary plus the two cycles is supported in B.'],
 ['iff-reverse','checked','Step 2.1 passes such a supplied ambient witness r to the relative quotient, where its boundary is the difference of the cycle classes.']]
};
const new102=read(`research/${run}-owner-step2-qsm102-clustering/proposed-new-proof-contracts.json`);
for(let batch=1;batch<=129;batch++){
 const p=`research/${run}-batch-${batch}.proof-contracts.json`,raw=readFileSync(p),doc=JSON.parse(raw),manifest=read(`research/${run}-batch-${batch}.pages.json`);
 guards.set(p,sha(raw));
 for(const row of manifest.flatMap(p=>p.items)){
  const s=item(row.id);if(!doc.contracts[s.id]){
   if(new102.contracts[s.id]){doc.scope.push(s.id);doc.contracts[s.id]=structuredClone(new102.contracts[s.id]);}
   else if(boundaries[s.id]){doc.scope.push(s.id);doc.contracts[s.id]={citations:[],derivations:[],routine_steps:[],boundaries:boundaries[s.id].map(([c,status,text])=>({case:c,status,[status==='checked'?'evidence':'reason']:text})),root_worksheet_basis:'Current complete helper proof and exact suppliers read by root; same-owner construction and consumer release retained separately. No independent acceptance or finite computation is invented.'};}
  }
 }
 for(const[id,entry]of Object.entries(doc.contracts)){
  const s=item(id),steps=numberedProofSteps(s.body),byId=new Map(steps.map(s=>[s.id,s]));
  if(id==='alg-csm-frontier-gaussian-block-rg'){const a=read(`research/${run}-owner-step2-contract-source-gr-csm/algorithm-worksheet-proposal.json`);entry.citations=[];entry.derivations=[];entry.routine_steps=[];entry.boundaries=a.boundaries.map(b=>{const c={...b};if(c.evidence)c.evidence=c.evidence.replace(/theorem1\.1 and4\.1/g,'theorem’s empty-retained and determinant clauses').replace(/theorem3\.1/g,'theorem’s empty-product clause').replace(/theorem1\.1/g,'theorem’s Schur-complement clause');return c;});entry.finite_checks=a.finite_checks;entry.supplier_excerpts=(entry.supplier_excerpts??[]).filter(x=>!String(x.supplier).includes('gaussian-lattice'));continue;}
  if(NONPROOF_KINDS.has(s.kind)||s.kind==='open-problem')continue;
  const oldRows=[...(entry.derivations??[]).map(r=>({field:'derivations',r})),...(entry.routine_steps??[]).map(r=>({field:'routine_steps',r}))];
  const exact=new Map(),mapping={};for(const x of oldRows){const matches=steps.filter(s=>norm(s.claim)===norm(x.r.claim));if(matches.length===1){exact.set(matches[0].id,x);mapping[x.r.step]=matches[0].id;}}
  const oldBodyPath=`research/${run}-owner-step2-baseline/items/${id}.md`;const sourceChanged=existsSync(oldBodyPath)&&readItem(oldBodyPath).body!==s.body;
  for(const b of entry.boundaries??[]){if(b.evidence){const refs=[...b.evidence.matchAll(/\b(\d+\.\d+)\b/g)].map(m=>m[1]);const unresolved=refs.filter(n=>!mapping[n]&&oldRows.some(x=>x.r.step===n)&&sourceChanged);if(unresolved.length)diagnostics.push({id,batch,case:b.case,evidence:b.evidence,unresolved_step_references:unresolved});
   b.evidence=b.evidence.replace(/\bsteps?\s+\d+\.\d+(?:(?:\s*[,;–—-]\s*|\s+(?:and|through|to)\s+)\d+\.\d+)*/gi,chunk=>chunk.replace(/\d+\.\d+/g,n=>mapping[n]??n));}
  }
  entry.derivations=[];entry.routine_steps=[];
  for(const step of steps){const match=exact.get(step.id),same=oldRows.find(x=>x.r.step===step.id),inputs=[...new Set([...step.inputs,...tokens(step.text,byId)])];if(!inputs.length)throw Error('Unjustified current step '+id+' '+step.id);
   const row={...(match?.r??{}),id:`step-${step.id.replace('.','-')}`,step:step.id,claim:step.claim,inputs};
   // A changed paragraph is transcribed as a derivation; routine status is retained only for an exact actual claim.
   entry[match?.field??'derivations'].push(row);
  }

  for(const excerpt of entry.supplier_excerpts??[]){
   if(!excerpt.supplier||typeof excerpt.exact_statement!=='string')continue;
   const supplier=item(excerpt.supplier),st=pub(supplier,excerpt.source_section);
   if(!norm(st.quote).includes(norm(excerpt.exact_statement))){
    excerpt.historical_source_interface={source_section:excerpt.source_section,exact_statement:excerpt.exact_statement,status:excerpt.status,supplier_proof_status:excerpt.supplier_proof_status};
    excerpt.source_section=st.section;excerpt.exact_statement=st.quote;
    excerpt.status='Exact current public interface transcribed by root at the drained Step2 join; original substantive source-use review retained in historical_source_interface and native/same-owner reports. No renewed full supplier-proof reading asserted.';
    excerpt.supplier_proof_status=`${supplier.status}; this exact-quote refresh does not grant independent proof acceptance`;
   }
  }
  for(const boundary of entry.boundaries??[]){
   const scope=boundary.case_scope;if(!scope?.source_excerpt)continue;
   if(![...SOURCE_SECTIONS].some(h=>sourceSectionText(s.body,h)?.trim())){boundary.historical_case_scope=scope;delete boundary.case_scope;continue;}
   const st=pub(s,scope.source_section);
   if(!norm(st.quote).includes(norm(scope.source_excerpt))){boundary.historical_case_scope=scope;boundary.case_scope={source_section:st.section,source_excerpt:st.quote};}
  }
  const previous=entry.citations??[];entry.citations=[];
  for(const f of factParagraphs(s.body).values())for(const supplier of new Set(f.links)){
   const old=previous.find(c=>c.fact===f.label&&c.source===supplier),st=pub(item(supplier),old?.source_section);entry.citations.push({...old,fact:f.label,source:supplier,source_section:st.section,quote:old?.quote&&norm(st.quote).includes(norm(old.quote))?old.quote:st.quote,uses:steps.filter(s=>tokens(s.text,byId).includes(f.label)).map(s=>s.id)});
  }
 }
 const after=JSON.stringify(doc,null,2)+'\n';if(after!==raw.toString())changed.push({path:p,before_sha256:sha(raw),after_sha256:sha(after)});
 writeFileSync(`${base}/batch-${batch}.proposal.json`,after);all.scope.push(...doc.scope);Object.assign(all.contracts,doc.contracts);
}
writeFileSync(`${base}/merged.proposal.json`,JSON.stringify(all,null,2)+'\n');writeFileSync(`${base}/diagnosis.json`,JSON.stringify({at:new Date().toISOString(),run,scope:all.scope.length,changed,diagnostics,guards:[...guards].map(([path,sha256])=>({path,sha256})),qualification:'Reviewable current-source worksheet proposal. No production edits, new source-reading claims for unchanged author rows, boundary waivers, readiness or gate acceptance.'},null,2)+'\n');
console.log(JSON.stringify({scope:all.scope.length,changed:changed.length,boundary_reference_review:diagnostics.length}));
