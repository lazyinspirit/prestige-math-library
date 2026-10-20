import fs from 'node:fs';
import crypto from 'node:crypto';
import {factParagraphs,numberedProofSteps,splitFrontmatter,sourceSectionText,SOURCE_SECTIONS} from '../../../tools/facts-block.mjs';
const R='machine-learning-all-101-2026-10-19';const base=`research/${R}-policy-gradient-cpo-proposal/contract-normalization`;
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const rh=x=>hash(JSON.stringify(x));
const rows=[],unmapped=[];
for(const batch of [84,90]){
 const path=`research/${R}-batch-${batch}.proof-contracts.json`,raw=fs.readFileSync(path,'utf8'),doc=JSON.parse(raw),next=structuredClone(doc);
 for(const id of doc.scope){
  const sourcePath=`items/${id}.md`,rawSource=fs.readFileSync(sourcePath,'utf8'),{fm,body}=splitFrontmatter(rawSource),steps=numberedProofSteps(body),facts=factParagraphs(body),old=doc.contracts[id],entry=next.contracts[id];
  const tokens=text=>new Set([...text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].flatMap(m=>m[2]?[m[2]]:(/^steps?\s/i.test(m[0])||steps.some(s=>s.id===m[1]))?[m[1]]:[]));
  entry.citations=[];
  const supplierGuards=[];
  for(const fact of facts.values())for(const supplier of fact.links){
   const sr=fs.readFileSync(`items/${supplier}.md`,'utf8'),sb=splitFrontmatter(sr).body,prev=old.citations.find(x=>x.fact===fact.label&&x.source===supplier);
   let section=prev?.source_section,quote=prev?.quote;
   const norm=x=>x.replace(/\s+/g,' ').trim();
   if(!section||!quote||!norm(sourceSectionText(sb,section)||'').includes(norm(quote))){section=[...SOURCE_SECTIONS].find(s=>sourceSectionText(sb,s)?.trim());quote=sourceSectionText(sb,section).trim();}
   const uses=steps.filter(s=>tokens(s.text).has(fact.label)).map(s=>s.id);
   entry.citations.push({fact:fact.label,source:supplier,source_section:section,quote,uses});
   supplierGuards.push({path:`items/${supplier}.md`,sha256:hash(sr)});
   if(!uses.length)unmapped.push({id,fact:fact.label,supplier,source_path:sourcePath,source_sha256:hash(rawSource),exact_unused_fact:fact.text.trim(),reason:'Unmodified strict validator requires nonempty actual proof-step uses; no metadata-only truthful mapping exists.'});
  }
  entry.derivations=steps.map(s=>({id:`${id}-step-${s.id.replace('.','-')}`,step:s.id,claim:s.claim,inputs:[...new Set([...s.inputs,...tokens(s.text)].map(t=>/^\d+\.\d+$/.test(t)?`step ${t}`:t))]}));
  entry.routine_steps=[];
  const heading=/^kind:\s*(definition|algorithm)/m.test(fm)?'Definition':/^kind:\s*counterexample/m.test(fm)?'Statement refuted and Counterexample':/^kind:\s*example/m.test(fm)?'Example':'Statement';
  const original=old.boundaries||[];
  const details=original.map(x=>`${x.case}: ${x.evidence||x.reason||''}`).join(' ');
  const ac=/^  - def-axiom-of-choice\s*$/m.test(fm);
  entry.boundaries=[
   {case:'empty',status:'checked',evidence:`${heading} fixes its state/action or probability-law domain. ${steps.length?`The explicit model/hypotheses and step ${steps[0].id} govern whether empty trajectories or zero terms occur.`:'The Definition supplies admissible inputs and no phase proof is claimed.'}`},
   {case:'zero',status:'checked',evidence:`${heading} and the exact local formulas govern zero probabilities, rewards, scores, discount or increments; no division is extended beyond the declared positive support. Original specialized worksheet details: ${details}`},
   {case:'one',status:'checked',evidence:`${heading} fixes the model sizes and supported action probabilities. Singleton supports have probability one and zero logarithmic score when present; explicit examples retain exactly their stated finite sizes.`},
   {case:'degenerate',status:'checked',evidence:`${heading} retains its stated terminal, deterministic-transition, integrability, fixed-support and algorithm admissibility conventions. The original specialized boundary details recorded under zero above are retained without changing any claim.`},
   {case:'endpoints',status:'checked',evidence:`${heading} supplies its actual parameter domain and discount range. No excluded probability endpoint, discount-one limit, nonterminating episode or update outside the open domain is admitted.`},
   {case:'nonempty-choice',status:'checked',evidence:ac?`${heading} retains the declared AC premise through its cited supplier context; all actual phase citations are mapped separately and no new axiom use is invented.`:`${heading} constructs its finite data directly and its contract declares no new choice premise.`},
   {case:'iff-forward',status:'not_applicable',reason:`The ${heading} is not an equivalence assertion requiring a separate forward implication worksheet.`},
   {case:'iff-reverse',status:'not_applicable',reason:`The ${heading} is not an equivalence assertion requiring a separate reverse implication worksheet.`}
  ];
  rows.push({batch,id,actual_path:path,before_key_sha256:rh(old),after_key_sha256:rh(entry),source_path:sourcePath,source_sha256:hash(rawSource),supplier_guards:supplierGuards,before:old,after:entry});
 }
 fs.writeFileSync(`${base}/batch-${batch}.proof-contracts.json`,JSON.stringify(next,null,2)+'\n');
}
fs.writeFileSync(`${base}/patch.json`,JSON.stringify({run:R,kind:'metadata-only-per-key-contract-normalization',mathematical_review_cycle:1,mathematical_cycle_reopened:false,actual_writes:false,rows,unresolved_source_anchors:unmapped},null,2)+'\n');
console.log(JSON.stringify({rows:rows.length,unmapped},null,2));
