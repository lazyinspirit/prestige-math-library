// Read-only exact mirrors, using the repository's actual parser independently of Python generators.
import {readFileSync,writeFileSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {numberedProofSteps,splitFrontmatter,sourceSectionText} from '../../tools/facts-block.mjs';
const packagePath=dirname(fileURLToPath(import.meta.url));
const root=resolve(packagePath,'../..');
const manifest=JSON.parse(readFileSync(resolve(packagePath,'proposal.json'),'utf8'));
const contracts=JSON.parse(readFileSync(resolve(packagePath,'proposed/research',manifest.run+'-batch-86.proof-contracts.json'),'utf8')).contracts;
const mismatches=[];let stepCount=0,quoteCount=0;
for(const [id,contract] of Object.entries(contracts)){
 const body=splitFrontmatter(readFileSync(resolve(root,'items',id+'.md'),'utf8')).body;
 const actual=numberedProofSteps(body);
 const mirrored=[...(contract.derivations??[]),...(contract.routine_steps??[])];
 if(actual.length!==mirrored.length)mismatches.push({id,kind:'cardinality'});
 for(const step of actual){
  stepCount++;
  const row=mirrored.find(row=>row.step===step.id);
  if(!row||row.claim!==step.claim)mismatches.push({id,step:step.id,kind:'exact-whole-claim'});
  if(!row||JSON.stringify(row.inputs)!==JSON.stringify(step.inputs))mismatches.push({id,step:step.id,kind:'final-inputs'});
 }
 for(const citation of contract.citations??[]){
  quoteCount++;
  const supplier=splitFrontmatter(readFileSync(resolve(root,'items',citation.source+'.md'),'utf8')).body;
  const section=sourceSectionText(supplier,citation.source_section);
  if(section===null||citation.quote!==section.trim())mismatches.push({id,source:citation.source,kind:'entire-actual-supplier-section'});
  const uses=actual.filter(step=>step.inputs.includes(citation.fact)).map(step=>step.id);
  if(JSON.stringify(citation.uses)!==JSON.stringify(uses))mismatches.push({id,fact:citation.fact,kind:'actual-uses'});
 }
}
const report={read_only:true,repository_parser:'tools/facts-block.mjs numberedProofSteps/sourceSectionText',subjects:Object.keys(contracts).length,full_steps:stepCount,entire_supplier_quotes:quoteCount,exact_mismatch_count:mismatches.length,mismatches};
writeFileSync(resolve(packagePath,'repository-parser-verification.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report));
if(mismatches.length)process.exitCode=1;
