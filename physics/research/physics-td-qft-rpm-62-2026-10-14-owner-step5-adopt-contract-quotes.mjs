// Guarded current quotation repair only. Preserves source and review history.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {splitFrontmatter,sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',owner=`root-${run}-contract-quote-adoption`;
if(JSON.parse(fs.readFileSync('.physics-autopilot/step5-shared-write.lock/owner.json')).owner!==owner)throw Error('Exact lock required');
const state=JSON.parse(fs.readFileSync(`.physics-autopilot/${run}/state.json`));
if(Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Writers must drain');
const sha=b=>crypto.createHash('sha256').update(b).digest('hex'),normal=s=>String(s).replace(/\s+/g,' ').trim();
const paths=[`research/${run}-owner-step4-td-math-definitions-round1/native-supplement-04-batch18-contract-quotes/partial-citation-updates.json`,`research/${run}-owner-step4-rpm-round1/supplement-13-batch26-contract-quotes/partial-citation-updates.json`];
const documents=new Map(),changes=[],sourceGuards=new Map();
const load=path=>{if(!documents.has(path)){const raw=fs.readFileSync(path);documents.set(path,{raw,doc:JSON.parse(raw)});}return documents.get(path).doc;};
const replace=(path,id,fact,quote,expected)=>{
  const doc=load(path),row=doc.contracts[id]?.citations?.find(x=>x.fact===fact);
  if(!row||expected&&JSON.stringify(row)!==JSON.stringify(expected))throw Error('Citation changed '+id+'/'+fact);
  const sourcePath=`items/${row.source}.md`,raw=fs.readFileSync(sourcePath);
  const actual=sourceSectionText(splitFrontmatter(raw.toString()).body,row.source_section);
  if(!normal(actual).includes(normal(quote)))throw Error('Quote is not current source text');
  sourceGuards.set(sourcePath,sha(raw));changes.push({path,id,fact,before:row.quote,after:quote});row.quote=quote;
};
for(const path of paths){const part=JSON.parse(fs.readFileSync(path));for(const row of part.replacements){
  const keys=Object.keys(row.replacement_citation);
  if(keys.some(k=>k!=='quote'&&JSON.stringify(row.replacement_citation[k])!==JSON.stringify(row.expected_original_citation[k])))throw Error('Nonquote repair requested');
  replace(part.contract_path,row.consumer,row.fact,row.replacement_citation.quote,row.expected_original_citation);
}}
const conditioning=JSON.parse(fs.readFileSync(`research/${run}-owner-step5-conditioning-contract-seams-round1/conditioning-citations.partial.json`));
for(const[id,entry]of Object.entries(conditioning.contracts))for(const row of entry.citations){
  const path=`research/${run}-batch-18.proof-contracts.json`,current=load(path).contracts[id].citations.find(x=>x.fact===row.fact);
  if(current.source!==row.source||current.source_section!==row.source_section)throw Error('Conditioning source changed');
  replace(path,id,row.fact,row.quote);
}
if(changes.length!==16)throw Error('Expected exactly16 quotation repairs');
for(const[path,guard]of sourceGuards)if(sha(fs.readFileSync(path))!==guard)throw Error('Source changed before adoption');
const dir=`research/${run}-owner-step5-contract-quote-adoption-${Date.now()}`;fs.mkdirSync(dir);
for(const[path,{raw,doc}]of documents){if(!fs.readFileSync(path).equals(raw))throw Error('Contract changed');fs.writeFileSync(`${dir}/${path.split('/').at(-1)}.before`,raw);fs.writeFileSync(path,JSON.stringify(doc,null,2)+'\n');}
const receipt={run,at:new Date().toISOString(),source_changes:false,scientific_acceptance:false,changes,sourceGuards:Object.fromEntries(sourceGuards),conditioning_consumer_source_repairs_still_pending:true};
fs.writeFileSync(`${dir}/receipt.json`,JSON.stringify(receipt,null,2)+'\n');console.log(JSON.stringify({receipt:`${dir}/receipt.json`,quotes:changes.length}));
