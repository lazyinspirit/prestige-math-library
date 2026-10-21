// Root-only application proposal. Never executed by the preparing reviewer.
import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {splitFrontmatter, factParagraphs, numberedProofSteps, sourceSectionText} from '../../../../tools/facts-block.mjs';
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const HERE=path.dirname(fileURLToPath(import.meta.url));
const ROOT=path.resolve(HERE,'../../../..');
const argv=process.argv.slice(2);
assert.equal(argv.length,2,'Usage: node root-integrate-proposal.mjs --decisions ROOT_JSON');
assert.equal(argv[0],'--decisions');
const decision=JSON.parse(fs.readFileSync(path.resolve(ROOT,argv[1]),'utf8'));
assert.equal(decision.run,RUN);assert.equal(decision.authorized_by,'/root');
assert.equal(decision.all_writers_drained,true);
assert.equal(decision.no_new_math_acceptance,true);
assert(Array.isArray(decision.approved_tool_files));assert(Array.isArray(decision.approved_contract_ids));
assert(decision.approved_tool_files.length+decision.approved_contract_ids.length>0);
const allowedTools={'tools/proof-contract.mjs':'proof-contract','tools/regen-contract-entries.mjs':'regen-contract-entries'};
const plans=[];
for(const file of decision.approved_tool_files){
 const stem=allowedTools[file];assert(stem,`Unassigned tool ${file}`);
 const before=fs.readFileSync(path.join(HERE,`${stem}-before.mjs`),'utf8'),after=fs.readFileSync(path.join(HERE,`${stem}-after.mjs`),'utf8');
 assert.equal(fs.readFileSync(path.join(ROOT,file),'utf8'),before,`Current tool differs from exact proposal preimage: ${file}`);
 plans.push({file,before,after});
}
const proposal=JSON.parse(fs.readFileSync(path.join(HERE,'no-proof-citation-proposal.json'),'utf8'));
const docs=new Map();
for(const id of decision.approved_contract_ids){
 const row=proposal.changes.find(c=>c.id===id);assert(row,`Unassigned contract ${id}`);
 if(!docs.has(row.file)){const before=fs.readFileSync(path.join(ROOT,row.file),'utf8');docs.set(row.file,{before,doc:JSON.parse(before)});}
 const {doc}=docs.get(row.file);assert.deepEqual(doc.contracts[id],row.before,`Contract entry drift: ${id}`);
 const body=splitFrontmatter(fs.readFileSync(path.join(ROOT,`items/${id}.md`),'utf8')).body;
 assert.equal(numberedProofSteps(body).length,0,`New proof rows need a new actual proposal: ${id}`);
 const facts=factParagraphs(body);
 for(const citation of row.added){
  assert(facts.get(citation.fact)?.links.includes(citation.source));
  const source=splitFrontmatter(fs.readFileSync(path.join(ROOT,`items/${citation.source}.md`),'utf8')).body;
  assert.equal(sourceSectionText(source,citation.source_section)?.trim(),citation.quote,`Source quote drift: ${citation.source}`);
  assert.deepEqual(citation.uses,[]);
 }
 doc.contracts[id]=row.after;
}
for(const [file,{before,doc}]of docs)plans.push({file,before,after:JSON.stringify(doc,null,2)+'\n'});
assert.equal(new Set(plans.map(p=>p.file)).size,plans.length);
const archive=path.resolve(ROOT,decision.archive_dir);assert(archive.startsWith(HERE+path.sep));
assert(!fs.existsSync(archive),'Use a fresh archive directory');
fs.mkdirSync(archive,{recursive:true});
for(const plan of plans){const dest=path.join(archive,plan.file);fs.mkdirSync(path.dirname(dest),{recursive:true});fs.writeFileSync(dest,plan.before,{flag:'wx'});}
for(const plan of plans)assert.equal(fs.readFileSync(path.join(ROOT,plan.file),'utf8'),plan.before,`Input changed during preparation: ${plan.file}`);
for(const plan of plans)fs.writeFileSync(path.join(ROOT,plan.file),plan.after);
fs.writeFileSync(path.join(archive,'root-integration-record.json'),JSON.stringify({run:RUN,authorized_by:'/root',decision_file:argv[1],files:plans.map(p=>p.file),new_math_acceptance:false,source_claims_changed:false,gates_run:false,rehash:'Separate root duty after all repair lanes integrate'},null,2)+'\n');
console.log(`Root integrated ${plans.length} exact guarded files; no gate or rehash execution.`);
