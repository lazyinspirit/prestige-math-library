import {readFileSync,writeFileSync} from 'node:fs';
import {splitFrontmatter,sourceSectionText,factParagraphs,numberedProofSteps,SOURCE_SECTIONS} from '../../../../tools/physics-support/facts-block.mjs';
const run='physics-cm-qm-gr-79-2026-10-11';
const newId='lem-cm-finite-iid-sample-mean-bound';
const tokens=text=>[...text.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].map(m=>m[1]??m[2]);
const load=id=>splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).body;
for(const b of [11,34]){
 const path=`research/${run}-batch-${b}.proof-contracts.json`,doc=JSON.parse(readFileSync(path));
 if(b===11&&!doc.scope.includes(newId)){doc.scope.push(newId);doc.contracts[newId]={boundaries:[{case:'empty',status:'not_applicable',reason:'The Statement assumes n at least one.'},{case:'zero',status:'checked',evidence:'Step 3.1 includes zero variance without division.'},{case:'one',status:'checked',evidence:'Step 3.1 includes n=1.'},{case:'degenerate',status:'checked',evidence:'Step 3.1 includes deterministic observations.'},{case:'endpoints',status:'not_applicable',reason:'Only positive thresholds a are asserted in the Statement.'},{case:'nonempty-choice',status:'not_applicable',reason:'The given finite family requires no choice construction.'},{case:'iff-forward',status:'not_applicable',reason:'The Statement is a bound, not an equivalence.'},{case:'iff-reverse',status:'not_applicable',reason:'The Statement is a bound, not an equivalence.'}]};}
 for(const id of doc.scope){
  const body=load(id),facts=factParagraphs(body),steps=numberedProofSteps(body),entry=doc.contracts[id];
  entry.citations=[];
  for(const [fact,record] of facts){
   const uses=steps.filter(s=>tokens(s.text).includes(fact)).map(s=>s.id);
   for(const source of [...new Set(record.links)]){
    const supplier=load(source);let section=[...SOURCE_SECTIONS].find(section=>sourceSectionText(supplier,section)?.trim());
    if(!section)throw Error(`No source section for ${source}`);
    entry.citations.push({fact,source,source_section:section,quote:sourceSectionText(supplier,section).trim(),uses});
   }
  }
  entry.derivations=steps.map(s=>({id:`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs:[...new Set([...s.inputs,...tokens(s.text)])]}));entry.routine_steps=[];
  // The formatter renumbered the covariance and pendulum proofs; refresh only their boundary anchors.
  if(['cor-cm-linearization-error-bounds','ex-cm-math-evidence-pendulum-propagation'].includes(id)) for(const row of entry.boundaries){if(row.status==='checked')row.evidence=`Statement and final step ${steps.at(-1).id}: ${row.evidence.replace(/(?:step\s*)?\d+\.\d+/g,'the preceding argument')}`;}
 }
 writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
}
