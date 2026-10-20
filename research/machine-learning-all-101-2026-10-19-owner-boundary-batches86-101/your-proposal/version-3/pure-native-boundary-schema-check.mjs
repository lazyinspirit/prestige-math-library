// Pure schema call: extract the actual native validator without running its CLI.
// No gate, source/contract write, hash, or mathematical certification.
import {readFileSync,writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
const repo=process.cwd();
const {numberedProofSteps,splitFrontmatter}=await import(pathToFileURL(resolve(repo,'tools/facts-block.mjs')).href);
const native=readFileSync(resolve(repo,'tools/proof-contract.mjs'),'utf8');
const functionText=native.match(/^function validateBoundaries\(id, boundaries, steps\) \{[\s\S]*?^\}/m)?.[0];
const axisText=native.match(/const STANDARD_BOUNDARIES = (\[[\s\S]*?\]);/)?.[1];
if(!functionText||!axisText)throw Error('native schema extraction failed');
const STANDARD_BOUNDARIES=Function(`return ${axisText}`)();
const errors=[];
const validate=Function('STANDARD_BOUNDARIES','error',`${functionText}; return validateBoundaries;`)(STANDARD_BOUNDARIES,(code,message,id)=>errors.push({code,message,id}));
const base=new URL('./',import.meta.url),index=JSON.parse(readFileSync(new URL('index.json',base),'utf8'));
let afterObjects=0,fullRows=0,items=0;const targeted=new Set();
for(const batch of index.batches){
 const packetUrl=new URL(batch.operations,base),packet=JSON.parse(readFileSync(packetUrl,'utf8'));
 const contracts=JSON.parse(readFileSync(resolve(repo,packet.operations[0].target),'utf8')).contracts;
 const byId=new Map();
 for(const op of packet.operations){const id=op.path[1],i=op.path.at(-1);if(!byId.has(id))byId.set(id,structuredClone(contracts[id].boundaries));
  if(JSON.stringify(contracts[id].boundaries[i])!==JSON.stringify(op.old))throw Error(`current before mismatch ${id}:${op.old.case}`);
  byId.get(id)[i]=op.new;targeted.add(`${id}:${op.new.case}`);afterObjects++;
 }
 for(const[id,boundaries]of byId){const source=readFileSync(resolve(repo,'items',id+'.md'),'utf8');
  const archived=readFileSync(new URL(`before/items/${id}.md`,packetUrl),'utf8');if(source!==archived)throw Error(`source guard mismatch ${id}`);
  const steps=new Map(numberedProofSteps(splitFrontmatter(source).body).map(step=>[step.id,step]));validate(id,boundaries,steps);items++;fullRows+=boundaries.length;
 }
}
const result={kind:'pure-extracted-native-boundary-schema-check',native_gate:false,mathematical_review:false,after_objects:afterObjects,complete_current_item_worksheets:items,complete_boundary_rows_checked:fullRows,errors};
writeFileSync(new URL('pure-native-boundary-schema-results.json',base),JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
