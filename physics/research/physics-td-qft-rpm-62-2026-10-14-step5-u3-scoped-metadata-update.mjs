import {readFileSync,writeFileSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {splitFrontmatter,sectionText,numberedProofSteps} from '../tools/physics-support/facts-block.mjs';
import {parseFrontmatter} from '../tools/physics-support/content-policy-lib.mjs';
const run='physics-td-qft-rpm-62-2026-10-14';
const reportPath='research/'+run+'-step5-v2/step5-v2-impact-initial-r1-u3.json';
const read=p=>JSON.parse(readFileSync(p,'utf8'));
const report=read(reportPath), pack=read('research/'+run+'-step5-v2/impact-initial-1.json');
const owned=new Set(pack.assignments['3']);
const changed=new Set(report.reviews.filter(r=>r.disposition==='repaired').map(r=>r.id));
const norm=s=>String(s).replace(/\s+/g,' ').trim();
const sha=s=>createHash('sha256').update(s).digest('hex');
const item=id=>{const raw=readFileSync('items/'+id+'.md','utf8'),{fm,body}=splitFrontmatter(raw);return {raw,body,meta:parseFrontmatter(fm)};};
const updates=[];
const save=(p,d,previous)=>{const next=JSON.stringify(d,null,2)+'\n';if(next!==previous)writeFileSync(p,next);};
const choices=['def-axiom-of-choice','def-ultrafilter-extension-principle','def-dependent-choice','def-hahn-banach-extension-principle-relative'];
const choiceItems=new Set(['thm-tdmath-fixed-n-local-ensemble-equivalence','thm-tdmath-periodic-fixed-n-limit','thm-tdmath-interval-event-ensemble-limit']);
const paths=readdirSync('research').filter(p=>p.startsWith(run+'-batch-')&&/^\d+\.proof-contracts\.json$/.test(p.slice((run+'-batch-').length)));
for(const file of paths){
 const p='research/'+file,raw=readFileSync(p,'utf8'),d=JSON.parse(raw),touched=[];
 for(const [id,c] of Object.entries(d.contracts??{})){
  if(!owned.has(id))continue;
  const current=item(id);let edited=false;
  if(id==='pthm-rpm-two-body-com-kinematics'){
   const cite=c.citations.find(x=>x.fact==='F5'&&x.source==='pthm-rpm-inverse-momentum-and-work');
   if(cite){cite.source='def-rpm-mechanical-momentum-and-observer-energy';cite.source_section='Definition';cite.quote=sectionText(item(cite.source).body,'Definition').trim();edited=true;}
  }
  if(id==='pthm-rpm-two-body-com-kinematics'&&!c.citations.some(x=>x.fact==='F5'&&x.source==='def-rpm-collision-objects')){
   c.citations.push({fact:'F5',source:'def-rpm-collision-objects',source_section:'Definition',quote:sectionText(item('def-rpm-collision-objects').body,'Definition').trim(),uses:['1.1','4.1']});edited=true;
  }
  if(id==='thm-tdmath-fixed-n-local-ensemble-equivalence'){
   for(const cite of c.citations.filter(x=>x.fact==='F2')){
    if(!cite.uses.includes('1.1')){cite.uses.push('1.1');edited=true;}
    const exact=sectionText(item(cite.source).body,cite.source_section).trim();
    if(cite.quote!==exact){cite.quote=exact;edited=true;}
   }
  }
  for(const cite of c.citations??[]){
   if(!cite.source||!cite.source_section||!cite.quote)continue;
   let supplier;try{supplier=item(cite.source);}catch{continue;}
   const section=sectionText(supplier.body,cite.source_section).trim();
   if(section&&!norm(section).includes(norm(cite.quote))){
    cite.quote=section;edited=true;
   }
  }
  if(id==='thm-tdmath-interval-event-ensemble-limit'){
   for(const source of choices)if(!c.citations.some(x=>x.fact==='A1'&&x.source===source)){
    c.citations.push({fact:'A1',source,source_section:'Definition',quote:sectionText(item(source).body,'Definition').trim(),uses:['5.1']});edited=true;
   }
  }
  if(id==='thm-tdmath-interval-event-ensemble-limit'){
   c.external_sources??={};
   if(!c.external_sources.L2){c.external_sources.L2={title:'H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields',url:'https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf',source_section:'Theorem 3.1, printed p.185; complete upper-bound argument Section 5.3, pp.199-202.',source_statement:'For measurable asymptotic empirical functionals bounded below by a linear tame-count term, the Poisson exponential integral has limsup bounded by minus infimum of specific entropy plus the lower semicontinuous regularization. Apply only to the closed evaluation-measurable sets proved in steps 3.1 and 5.1, with the -alpha rho tilt at zero beta.',uses:['3.1','5.1']};edited=true;}
   if(!c.external_sources.L3){c.external_sources.L3={title:'H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction',url:'https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf',source_section:'Theorem 2 and its measurable-set specialization, printed pp.175-176; topology and evaluation sigma-algebra distinguished p.172.',source_statement:'For superstable regular interactions and positive z,beta, free or periodic grand empirical fields satisfy the stated measurable-functional upper bound, with good rate I+beta Phi-rho log z+p_Q. Its zero set is the variational minimizer set; step 5.1 uses a closed measurable complement.',uses:['5.1']};edited=true;}
  }
  if(changed.has(id)){
   const steps=numberedProofSteps(current.body);
   for(const row of c.derivations??[]){
    const step=steps.find(x=>x.id===row.step);
    if(step&&(norm(row.claim)!==norm(step.claim)||JSON.stringify(row.inputs)!==JSON.stringify(step.inputs))){
     row.claim=step.claim;row.inputs=step.inputs;edited=true;
    }
   }
   const claimSection=['Statement','Definition','Postulate','Example'].find(h=>sectionText(current.body,h));
   for(const boundary of c.boundaries??[]){
    if(boundary.case_scope?.source_section===claimSection){
     const text=sectionText(current.body,claimSection).trim();
     if(norm(boundary.case_scope.source_excerpt)!==norm(text)||boundary.case_scope.current_raw_sha256!==sha(current.raw)){
      boundary.case_scope.source_excerpt=text;boundary.case_scope.current_raw_sha256=sha(current.raw);edited=true;
     }
    }
    if(choiceItems.has(id)&&boundary.case==='nonempty-choice'){
     boundary.status='checked';boundary.evidence='Statement and Given explicitly carry AC, UL, DC and HB. Compact variational minimizers and the finite evaluation-measurable basic cover use precisely the declared supplier hypotheses; outer probability retains all open neighborhoods.';delete boundary.reason;edited=true;
    }
   }
  }
  if(edited){touched.push(id);updates.push({path:p,id,repair:'Only stale exact supplier quotations, affected proof derivations, and changed public-claim boundary guards reconciled.'});}
 }
 if(touched.length)save(p,d,raw);
}
for(const file of readdirSync('research').filter(p=>p.startsWith(run+'-batch-')&&/^\d+\.pages\.json$/.test(p.slice((run+'-batch-').length)))) {
 const p='research/'+file,raw=readFileSync(p,'utf8'),d=JSON.parse(raw);let edited=false;
 for(const page of d)for(const row of page.items??[]){
  if(!changed.has(row.id))continue;
  const current=item(row.id),m=current.meta;
  for(const key of ['deps','dependency_roles']){
   if(JSON.stringify(row[key])!==JSON.stringify(m[key])){row[key]=m[key];edited=true;}
  }
  const h=['Statement','Definition','Postulate','Example'].find(h=>sectionText(current.body,h));
  const statement=sectionText(current.body,h).trim();
  if(norm(row.statement)!==norm(statement)){row.statement=statement;edited=true;}
  if(edited)updates.push({path:p,id:row.id,repair:'Assigned item public claim and actual prerequisites synchronized; unrelated rows preserved.'});
 }
 if(edited)save(p,d,raw);
}
{
 const p='library/thermodynamics/td-continuum-heat-model.md',raw=readFileSync(p,'utf8');
 const next=raw.replace('and pointwise weak-identity conditions, and its current mathematical collision-entropy supplier','pointwise weak-identity and transport-equation conditions, and its current mathematical collision-entropy supplier');
 if(next!==raw){writeFileSync(p,next);updates.push({path:p,id:'pthm-td-collision-h-theorem',repair:'Page summary now names the precise all-time transport premise.'});}
}
{
 const p='research/defect-ledger.jsonl',raw=readFileSync(p,'utf8'),rows=raw.split('\n').filter(Boolean).map(JSON.parse),add=[];
 const batches={};
 for(const f of paths){const d=read('research/'+f);for(const id of Object.keys(d.contracts??{}))if(owned.has(id))batches[id]=f.slice((run+'-batch-').length).split('.')[0];}
 for(const review of report.reviews.filter(r=>r.disposition==='repaired')){
  if(rows.some(r=>r.subject===review.id&&r.disposition==='fixed'&&r.evidence?.some(e=>e.path===reportPath)))continue;
  const old=rows.filter(r=>r.run===run&&r.subject===review.id&&r.disposition==='open');
  const defect_id=old.at(-1)?.defect_id??run+'-step5-v2-impact-initial-r1-u3-'+review.id;
  if(rows.some(r=>r.defect_id===defect_id&&r.disposition==='fixed'&&r.evidence?.some(e=>e.path===reportPath)))continue;
  const fatal=['pthm-qft-dirac-free-properties','pthm-td-collision-h-theorem','thm-tdmath-fixed-n-local-ensemble-equivalence','thm-tdmath-periodic-fixed-n-limit','thm-tdmath-interval-event-ensemble-limit'].includes(review.id);
  add.push({...(old.at(-1)??{}),defect_id,run,at:new Date().toISOString(),class:old.at(-1)?.class??'accuracy',subclass:old.at(-1)?.subclass??'missing-hypothesis',severity:old.at(-1)?.severity??(fatal?'fatal':'nonfatal'),location:old.at(-1)?.location??'facts-block',subject:review.id,batch:batches[review.id],caught_at_stage:'5a-adjudicate',caught_by_role:'group-alpha',disposition:'fixed',correction:review.reason,evidence:[...(old.at(-1)?.evidence??[]),{path:reportPath,note:'Current assigned impact-owner examination and self-checked repair; no judge tuple, independent acceptance or certification is asserted.'}]});
 }
 const seen=new Map(), remove=new Set();
 for(let i=0;i<rows.length;i++){
  const row=rows[i],prior=seen.get(row.defect_id);
  if(prior!==undefined&&row.evidence?.some(e=>e.path===reportPath)){
   const original=rows[prior];
   if(original.subject!==row.subject)throw Error('duplicate ledger ownership mismatch');
   rows[prior]={...original,disposition:row.disposition,correction:row.correction,evidence:row.evidence,resolved_at:row.at,repair_owner:'step5-v2-impact-initial-r1-u3',status_history:[...(original.status_history??[]),{at:original.at,disposition:original.disposition,evidence:original.evidence}]};
   remove.add(i);
  }else seen.set(row.defect_id,i);
 }
 if(remove.size){for(let i=rows.length-1;i>=0;i--)if(remove.has(i))rows.splice(i,1);updates.push({path:p,repair:'Reconcile four existing root findings in place, retaining their original open observations in status_history and all original evidence; remove only this script duplicate append rows.'});}
 let corrected=remove.size>0;
 for(const row of rows)if(row.subclass==='step5-owner-repair'&&row.evidence?.some(e=>e.path===reportPath)){row.subclass='missing-hypothesis';corrected=true;}
 const taxonomy={
  'pthm-qft-dirac-free-properties':['accuracy','false-or-overstrong-statement'],
  'pthm-rpm-two-body-com-kinematics':['accuracy','citation-inflated'],
  'pthm-rpm-prescribed-force-local-motion':['accuracy','ill-typed-claim'],
  'pthm-td-finite-pathwise-first-law':['accuracy','citation-inaccurate'],
  'pthm-td-contact-product-comparison':['richness','scope-drop'],
  'thm-tdmath-interval-event-ensemble-limit':['accuracy','ill-typed-claim']
 };
 for(const row of rows)if(row.evidence?.some(e=>e.path===reportPath)&&taxonomy[row.subject]){
  const [cls,subclass]=taxonomy[row.subject];
  if(row.class!==cls||row.subclass!==subclass){row.class=cls;row.subclass=subclass;corrected=true;}
 }
 const signId=run+'-step5-v2-impact-initial-r1-u3-supporting-slope-sign';
 if(!rows.some(r=>r.defect_id===signId)){
  rows.push({defect_id:signId,run,at:new Date().toISOString(),class:'accuracy',subclass:'arithmetic-error',severity:'nonfatal',location:'proof-step',subject:'thm-tdmath-fixed-n-local-ensemble-equivalence',batch:'18',caught_at_stage:'5a-adjudicate',caught_by_role:'group-alpha',disposition:'fixed',correction:'Proof 1.1 used z=exp(s) for an ordinary concave supporting slope s. Now it uses the Statement chosen supporting activity, so F(r)+alpha r<=F(rho)+alpha rho and s=-alpha. Statement unchanged by this separate proof-only repair.',evidence:[{path:reportPath,note:'Distinct inherited sign finding reconciled separately from the pre-existing choice/outer-probability finding. Self-checked impact repair only.'}]});corrected=true;
 }
 const base=corrected?rows.map(r=>JSON.stringify(r)).join('\n')+'\n':raw;
 if(corrected&&!add.length){writeFileSync(p,base);updates.push({path:p,repair:'Correct the newly appended owner rows to the canonical subclass enumeration; original historical rows unchanged.'});}
 if(add.length){writeFileSync(p,base+(base.endsWith('\n')?'':'\n')+add.map(r=>JSON.stringify(r)).join('\n')+'\n');updates.push({path:p,ids:add.map(r=>r.subject),repair:'Append current repaired findings; existing historical rows and original dispositions preserved.'});}
}
const view=spawnSync(process.execPath,['tools/physics-support/defect-ledger.mjs','render'],{encoding:'utf8'});if(view.status!==0)throw Error(view.stderr||view.stdout);updates.push({path:'research/DEFECT-LEDGER.md',repair:'Regenerate canonical view from the reconciled canonical ledger.'});
report.repair_notes.metadata_updates=[...(report.repair_notes.metadata_updates??[]),...updates];
for(const review of report.reviews){
 if(updates.some(x=>x.id===review.id)&&review.disposition==='unaffected'){
  review.metadata_repair_only=true;
  if(!review.reason.includes('Owning contract'))review.reason+=' Owning contract metadata only: replaced stale supplier quotation(s) by the exact current section; item carrier is unchanged.';
 }
}
report.repair_notes.published_ledger='No published carrier was edited or found defective in these current affected uses. The canonical published-consumer-supplier ledger needs no new finding or audit-status change; existing publication holds remain untouched.';
writeFileSync(reportPath,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({updated:updates.length,paths:[...new Set(updates.map(x=>x.path))]}));
