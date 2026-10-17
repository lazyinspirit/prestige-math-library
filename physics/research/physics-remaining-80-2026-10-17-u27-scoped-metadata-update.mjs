import {readFileSync, writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {factParagraphs, numberedProofSteps, sourceSectionText, SOURCE_SECTIONS, splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
import {parseFrontmatter} from '../tools/physics-support/content-policy-lib.mjs';

// This short command runs only inside the Step-5 shared metadata lock.
const run='physics-remaining-80-2026-10-17';
const read=path=>JSON.parse(readFileSync(path,'utf8'));
const report=read(`research/${run}-step5-v2/step5-v2-initial-r1-u27.json`);
const assigned=read(`research/${run}-step5-v2/initial-1.json`).assignments['27'].map(row=>row.id);
if(report.reviews.length!==assigned.length || report.decisions.length!==assigned.length) throw Error('Incomplete u27 reviews');
const ids=assigned.filter(id=>report.reviews.find(row=>row.id===id)?.disposition==='repaired');
const contractPath=`research/${run}-batch-27.proof-contracts.json`;
const manifestPath=`research/${run}-batch-27.pages.json`;
// Reread the current owning files after acquisition; preserve every other row.
const contracts=read(contractPath), manifest=read(manifestPath);
for(const id of ids){
  const raw=readFileSync(`items/${id}.md`,'utf8');
  const {fm,body}=splitFrontmatter(raw), meta=parseFrontmatter(fm);
  if(meta.status!=='draft')throw Error(`Outside draft scope: ${id}`);
  const row=manifest.flatMap(page=>[...(page.items??[]),...(page.examples??[])]).find(row=>row.id===id);
  if(!row || !contracts.contracts[id])throw Error(`Missing unique owning row: ${id}`);
  for(const key of ['title','deps','dependency_roles','dependency_level','physical_scope'])if(meta[key]!==undefined)row[key]=meta[key];
  const heading=meta.kind==='definition'?'Definition':meta.kind==='example'?'Example':'Statement';
  row.statement=sourceSectionText(body,heading).trim();
  const entry=contracts.contracts[id], steps=numberedProofSteps(body);
  if(steps.length){
    const citations=[];
    for(const fact of factParagraphs(raw).values()){
      const uses=steps.filter(step=>new RegExp(`\\b${fact.label}\\b`).test(step.text)).map(step=>step.id);
      for(const source of new Set(fact.links)){
        const sourceBody=splitFrontmatter(readFileSync(`items/${source}.md`,'utf8')).body;
        const section=[...SOURCE_SECTIONS].find(heading=>sourceSectionText(sourceBody,heading)?.trim());
        if(!section || !uses.length)throw Error(`Missing source section or actual use: ${id}/${fact.label}/${source}`);
        citations.push({fact:fact.label,source,source_section:section,quote:sourceSectionText(sourceBody,section).trim(),uses});
      }
    }
    entry.citations=citations;
    entry.derivations=steps.map(step=>({id:`step-${step.id.replace('.','-')}`,claim:step.claim,step:step.id,inputs:[...new Set([...step.inputs,...[...step.text.matchAll(/\b([FAL]\d+)\b/g)].map(match=>match[1]),...[...step.text.matchAll(/\bstep\s+(\d+\.\d+)\b/g)].map(match=>'step '+match[1])])]}));
    entry.routine_steps=[];
  }
  entry.risk_review={status:'complete',reviewer:'step5-v2-initial-r1-u27 author repair check',notes:report.reviews.find(row=>row.id===id).reason+' This checks the repair and is not independent approval.'};
  if(id==='lem-csm-peierls-energy-injection'){
    const zero=entry.boundaries.find(row=>row.case==='zero');
    zero.evidence='Step 1.1: for n=0, the only possible disagreement cycle is the four-edge dual square about the lone negative spin. Its parity-inside is {0}, so the same flip/injection proof applies. Zero field remains essential to the 2J|gamma| energy drop; J=0 is excluded.';
  }
  if(id==='ex-csm-high-low-temperature-regimes'){
    const degenerate=entry.boundaries.find(row=>row.case==='degenerate');
    degenerate.evidence='Statement, steps 1.1 and 2.1: the high-temperature strict row-sum condition holds at arbitrary constant finite field energy. The sufficient coexistence branch additionally requires h=0, J>0 and K>=2; it is not asserted for nonzero field or infinite coupling.';
  }
}
writeFileSync(contractPath,JSON.stringify(contracts,null,2)+'\n');
writeFileSync(manifestPath,JSON.stringify(manifest,null,2)+'\n');
// A selected structural check is short and reads the just-written carriers.
const command=['tools/physics-support/proof-contract.mjs',contractPath,'--strict','--items',ids.join(',')];
const checked=spawnSync(process.execPath,command,{encoding:'utf8',maxBuffer:4*1024*1024});
process.stdout.write(checked.stdout??'');process.stderr.write(checked.stderr??'');
if(checked.status!==0)process.exitCode=checked.status??1;
console.log(JSON.stringify({updated_items:ids,contract:contractPath,manifest:manifestPath,check_exit_code:checked.status}));
