import fs from 'node:fs';
import path from 'node:path';
import {frontmatterList} from '../../../tools/frontmatter-list.mjs';
import {statementRuntime,inspectStatement} from '../../../tools/statement-first.mjs';
import {splitFrontmatter,sectionText} from '../../../tools/facts-block.mjs';
const B='research/machine-learning-all-101-2026-10-19-owner-actorcritic84-escalation/your-proposal';
const packet=JSON.parse(fs.readFileSync(`${B}/packet.json`));
const {yaml}=await statementRuntime(), rows=[],unrelatedParseObservations=[];
for(const file of fs.readdirSync('items').filter(x=>x.endsWith('.md'))){
 const target=`items/${file}`,raw=fs.readFileSync(target,'utf8'),parts=splitFrontmatter(raw);
 let fm;try{fm=yaml.parse(parts.frontmatter??raw.match(/^---\n([\s\S]*?)\n---/)[1]);}catch(e){unrelatedParseObservations.push({target,error:e.message});fm={id:file.slice(0,-3),deps:frontmatterList(raw,'deps'),justified_by:frontmatterList(raw,'justified_by'),aliases:frontmatterList(raw,'aliases')};}
 rows.push({target,raw,fm});
}
const id='alg-one-step-actor-critic',own=rows.find(x=>x.fm.id===id);if(!own)throw Error('Missing algorithm');
const aliases=own.fm.aliases??[],names=new Set([id,...aliases]),canonical=new Map();
for(const r of rows){canonical.set(r.fm.id,r.fm.id);for(const a of r.fm.aliases??[])canonical.set(a,r.fm.id);}
const reachable=new Set([id]),edges=[];let changed=true;
while(changed){changed=false;for(const r of rows){for(const field of ['deps','justified_by'])for(const x of r.fm[field]??[]){const target=canonical.get(x)??x;if(reachable.has(target)&&r.fm.id!==id){if(!edges.some(e=>e.consumer===r.fm.id&&e.supplier===target&&e.field===field))edges.push({consumer:r.fm.id,supplier:target,field});if(!reachable.has(r.fm.id)){reachable.add(r.fm.id);changed=true;}}}}}
const links=rows.filter(r=>r.fm.id!==id&&[...names].some(n=>r.raw.includes(n))).map(r=>({id:r.fm.id,path:r.target}));
const pageHits=[];function walk(d){for(const e of fs.readdirSync(d,{withFileTypes:true})){let p=path.join(d,e.name);if(e.isDirectory())walk(p);else if(p.endsWith('.md')){const t=fs.readFileSync(p,'utf8');if([...names].some(n=>t.includes(n)))pageHits.push(p);}}}walk('library');
const errors=[];for(const r of unrelatedParseObservations)if(reachable.has(path.basename(r.target,'.md')))errors.push(`Reached malformed source: ${r.target}`);
for(const op of packet.operations){const old=fs.readFileSync(op.before_path,'utf8'),candidate=fs.readFileSync(op.candidate_path,'utf8');let reconstructed=old;for(const edit of op.unique_substrings){if(reconstructed.split(edit.before).length!==2)errors.push('Nonunique operation');reconstructed=reconstructed.replace(edit.before,edit.after);}if(reconstructed!==candidate)errors.push('Candidate is not exact operation result');if(fs.readFileSync(op.target,'utf8')!==old)errors.push('Actual target drift');
 const a=splitFrontmatter(old),b=splitFrontmatter(candidate),aDef=sectionText(a.body,'Definition'),bDef=sectionText(b.body,'Definition');
 const getInstructions=t=>t.slice(t.indexOf('Set $(\\theta,w)'),t.indexOf('The critic uses'));
 if(getInstructions(aDef)!==getInstructions(bDef))errors.push('Adaptive instructions changed');
 errors.push(...await inspectStatement(id,'algorithm',b.body));
}
fs.writeFileSync(`${B}/consumer-discovery.json`,JSON.stringify({aliases,logical_edges:edges,transitive_consumers:[...reachable].filter(x=>x!==id),all_actual_item_id_mentions:links,page_mentions:pageHits,scanned_item_count:rows.length,unrelated_parse_observations:unrelatedParseObservations,discovery_method:'Full YAML where valid; narrow declared ID-list parser for unrelated malformed carriers; reached malformed carriers fail checks'},null,2)+'\n');
fs.writeFileSync(`${B}/preservation-and-statement-check.json`,JSON.stringify({errors,unique_operations_reconstruct_exact_candidate:true,adaptive_instructions_byte_identical:true,statement_first:errors.length?'failed':'pass',actual_source_unchanged:!errors.includes('Actual target drift'),hashing:false,native_acceptance:false},null,2)+'\n');
const context=new Set([...own.fm.deps,'thm-ionescu-tulcea-construction-of-a-markov-chain',...reachable]);for(const name of context){const r=rows.find(x=>x.fm.id===name);if(r){const p=`${B}/context/${r.target}`;fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,r.raw,{flag:'wx'});}}
for(const target of pageHits){const p=`${B}/context/${target}`;fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,fs.readFileSync(target),{flag:'wx'});}
console.log(JSON.stringify({errors,logical_edges:edges,page_mentions:pageHits}));if(errors.length)process.exitCode=1;
