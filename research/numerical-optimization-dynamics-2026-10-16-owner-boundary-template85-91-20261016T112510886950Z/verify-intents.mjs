#!/usr/bin/env node
// Read-only intent/preimage/source-anchor verification. No boundary gate or apply.
import {readFileSync} from 'node:fs';
import {dirname,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {sectionText,numberedProofSteps,splitFrontmatter} from '../../tools/facts-block.mjs';
const base=dirname(fileURLToPath(import.meta.url)),root=resolve(base,'../..');
const read=p=>readFileSync(resolve(root,p),'utf8');
const local=p=>JSON.parse(readFileSync(resolve(base,p),'utf8'));
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const assert=(yes,msg)=>{if(!yes)throw Error(msg)};
const ops=local('operations.json'),guards=local('source-guards.json'),held=local('held.json');
const forbidden=new Set(held.map(x=>`${x.batch}/${x.id}/${x.case}`));
const seen=new Set(),docs=new Map();let proofAnchors=0;
for(const [path,text] of Object.entries(guards))assert(read(path)===text,'Source drift '+path);
for(const op of ops){
 const key=`${op.batch}/${op.id}/${op.case}`;assert(!seen.has(key),'Duplicate '+key);seen.add(key);assert(!forbidden.has(key),'Owner overlap '+key);
 if(!docs.has(op.file))docs.set(op.file,JSON.parse(read(op.file)));
 const rows=docs.get(op.file).contracts[op.id].boundaries,index=op.path.at(-1);
 assert(equal(rows[index],op.before),'Row preimage drift '+key);
 assert(op.before.case===op.after.case&&op.before.status===op.after.status,'Classification changed '+key);
 const old={...op.before},next={...op.after};for(const x of ['reason','evidence']){delete old[x];delete next[x];}
 assert(equal(old,next),'Non-narrative field changed '+key);
 const {body}=splitFrontmatter(guards[`items/${op.id}.md`]),e=op.source_evidence;
 assert(sectionText(body,e.claim_section).trim()===e.fullclaim,'Full claim differs '+key);
 assert(e.root_confirmed===false,'Invented confirmation '+key);
 const steps=numberedProofSteps(body),byStep=new Map(steps.map(x=>[x.id,x]));
 for(const paragraph of e.proofparagraphs??[]){
   const actual=byStep.get(paragraph.step);
   assert(actual&&actual.text.trim()===paragraph.text.trim(),'Proof witness differs '+key+'/'+paragraph.step);proofAnchors++;
 }
 assert(e.fullclaim.includes(e.case_anchor)||steps.some(x=>x.text.trim()===e.case_anchor.trim()),'Case quotation absent '+key);
 const narration=op.after.reason??op.after.evidence??'';
 for(const match of narration.matchAll(/\bsteps?\s+(\d+\.\d+)\b/gi))assert(byStep.has(match[1]),'Nonexistent credited step '+key+'/'+match[1]);
 rows[index]=op.after;
}
for(const [file,doc] of docs)assert(equal(doc,local('proposed/'+file)),'Proposed snapshot differs '+file);
assert(ops.length===920&&held.length===25,'Unexpected intent/exclusion count');
console.log(JSON.stringify({mode:'read-only candidate verification, not mathematical uphold',row_intents:ops.length,excluded_other_owner_rows:held.length,classification_changes:0,proof_paragraph_anchors:proofAnchors,canonical_writes:0},null,2));
