import {readFileSync,writeFileSync} from 'node:fs';
import {SOURCE_SECTIONS,factParagraphs,numberedProofSteps,sourceSectionText,splitFrontmatter} from '../../../tools/facts-block.mjs';
const base='research/frontier-44-special-representation-examples-28-owner-step3-degenerate-ariki-bindings-round1/parallel-sign-final2-format';
const id='prop-sign-duality-and-ringel-duality-match-fock-space-involutions';
const doc=JSON.parse(readFileSync('research/frontier-44-special-representation-examples-28-batch-18.proof-contracts.json','utf8'));
const body=splitFrontmatter(readFileSync(`${base}/${id}.md`,'utf8')).body;
const steps=numberedProofSteps(body);
const citations=[];
for(const fact of factParagraphs(body).values()) for(const source of new Set(fact.links)) {
 const supplier=splitFrontmatter(readFileSync(`items/${source}.md`,'utf8')).body;
 for(const section of SOURCE_SECTIONS) {
  const quote=sourceSectionText(supplier,section)?.trim();
  if(quote){citations.push({fact:fact.label,source,source_section:section,quote,uses:steps.filter(s=>s.inputs.includes(fact.label)||s.claim.includes(`[${fact.label}]`)).map(s=>s.id)});break;}
 }
}
doc.contracts[id]={...doc.contracts[id],citations,derivations:steps.map(s=>({id:`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs:s.inputs}))};
writeFileSync(`${base}/proposed-complete-native18.proof-contracts.json`,JSON.stringify(doc,null,2)+'\n');
console.log(`${steps.length} derivations, ${citations.length} current actual supplier quotations; predecessor boundaries retained for parent examination`);
