#!/usr/bin/env node
// Readable independent verifier: compare Python line-parser projections with the repository source parser.
import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {join,dirname} from 'node:path';
import assert from 'node:assert/strict';
import {numberedProofSteps,sourceSectionText} from '../../tools/facts-block.mjs';
const pkg=dirname(fileURLToPath(import.meta.url));
const root=join(pkg,'..','..');
const run='numerical-optimization-dynamics-2026-10-16';
const metadata=`research/${run}-batch-95`;
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const proposed=path=>read(join(pkg,'proposed',path));
const pages=proposed(metadata+'.pages.json');
const contracts=proposed(metadata+'.proof-contracts.json');
const coverage=proposed(metadata+'.coverage.json');
const ids=pages.flatMap(page=>page.items.map(item=>item.id));
assert.equal(ids.length,25);assert.equal(new Set(ids).size,25);
assert.deepEqual(new Set(contracts.scope),new Set(ids));
let rows=0,citations=0;
for(const id of ids){
  const source=readFileSync(join(root,'items',id+'.md'),'utf8');
  const steps=numberedProofSteps(source);
  const entry=contracts.contracts[id];
  const mapped=[...(entry.derivations??[]),...(entry.routine_steps??[])];
  assert.equal(mapped.length,steps.length,id+' proof-row coverage');
  for(const step of steps){
    const row=mapped.find(row=>row.step===step.id);assert(row,id+' '+step.id);
    assert.equal(row.claim,step.claim,id+' '+step.id+' complete multiline claim');
    assert.deepEqual(row.inputs,step.inputs,id+' '+step.id+' full final inputs');
    rows++;
  }
  for(const citation of entry.citations??[]){
    const supplier=readFileSync(join(root,'items',citation.source+'.md'),'utf8');
    assert.equal(citation.quote,sourceSectionText(supplier,citation.source_section).trim(),id+' full source quote');
    const actualUses=steps.filter(step=>new RegExp(`\\b${citation.fact}\\b`).test(step.text)).map(step=>step.id);
    assert.deepEqual(citation.uses,actualUses,id+' '+citation.fact+' actual uses');citations++;
  }
}
const apage=pages.find(page=>page.kind==='A');
const algorithm=apage.items.find(item=>item.id==='alg-explicit-left-euler-sdc-sweep');
const lemma=apage.items.find(item=>item.id==='lem-sdc-sweep-work-and-storage-bound');
assert(algorithm.justified_by.includes(lemma.id));assert(!algorithm.deps.includes(lemma.id));
assert(lemma.deps.includes(algorithm.id));
assert.equal(lemma.dependency_level,algorithm.dependency_level+1);
const newSteps=contracts.contracts[lemma.id].derivations.map(row=>row.step);
assert.deepEqual(newSteps,['1.1','1.2','2.1','3.1']);
const oldCoverage=read(join(pkg,'before',metadata+'.coverage.json'));
assert.deepEqual(coverage.owner_local_repair,oldCoverage.owner_local_repair,'prior owner history');
for(const oldPage of oldCoverage.pages){
  const current=coverage.pages.find(page=>page.page===oldPage.page);
  assert.equal(current.sources.length,oldPage.sources.length,'no invented source acquisition');
  oldPage.sources.forEach((oldSource,index)=>{
    const newSource=current.sources[index];
    for(const [key,value] of Object.entries(oldSource)){
      if(key==='contents')assert.deepEqual(newSource.contents.slice(0,value.length),value,'preserve old contents prefix');
      else assert.deepEqual(newSource[key],value,'preserve source/read/fetch record '+key);
    }
  });
}
console.log(JSON.stringify({status:'pass',purpose:'source-to-metadata matching only; no mathematical acceptance',items:ids.length,proof_rows:rows,citations,canonical_writes:false}));
