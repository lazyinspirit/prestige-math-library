#!/usr/bin/env node
// Read-only mechanical comparison. Does not establish math soundness or acceptance.
import fs from 'node:fs';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {splitFrontmatter,factParagraphs,numberedProofSteps,sourceSectionText} from '../../tools/facts-block.mjs';
import {frontmatterList} from '../../tools/frontmatter-list.mjs';
const base=path.dirname(fileURLToPath(import.meta.url));
const cfg=JSON.parse(fs.readFileSync(path.join(base,'metadata-mirror-config.json')));
const proposed=process.argv.includes('--proposed');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const manifest=read(proposed?path.join(base,'metadata-proposed-pages.json'):cfg.manifest);
const contracts=read(proposed?path.join(base,'metadata-proposed-contracts.json'):cfg.contracts);
const errors=[];let citations=0,stepsChecked=0;
const same=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const check=(ok,msg)=>{if(!ok)errors.push(msg);};
const source=id=>splitFrontmatter(fs.readFileSync(`items/${id}.md`,'utf8'));
for(const g of cfg.source_guards)check(crypto.createHash('sha256').update(fs.readFileSync(g.path)).digest('hex')===g.raw_sha256,`raw source drift: ${g.path}`);
const manifestIds=manifest.flatMap(page=>page.items.map(row=>row.id));
check(same(manifestIds,contracts.scope),'manifest/contract scope order mismatch');
for(const page of manifest)for(const row of page.items){
 const {fm,body}=source(row.id),entry=contracts.contracts[row.id];
 check(same(row.deps,frontmatterList(fm,'deps')),`${row.id}: deps differ from source frontmatter`);
 const facts=factParagraphs(body),steps=numberedProofSteps(body);
 const pairs=[...facts.values()].flatMap(f=>f.links.map(source=>`${f.label}\0${source}`));
 check(same(pairs,(entry.citations??[]).map(r=>`${r.fact}\0${r.source}`)),`${row.id}: citation/fact link coverage mismatch`);
 for(const r of entry.citations??[]){
  citations++;
  check(r.quote===sourceSectionText(source(r.source).body,r.source_section)?.trim(),`${row.id}: ${r.fact} supplier quote is not its entire exact source section`);
  const actualUses=steps.filter(s=>[...s.text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].some(m=>m[2]===r.fact)).map(s=>s.id);
  check(same(actualUses,r.uses),`${row.id}: ${r.fact} proof uses differ`);
 }
 const classified=[...(entry.derivations??[]),...(entry.routine_steps??[])];
 check(classified.length===steps.length&&new Set(classified.map(r=>r.step)).size===steps.length,`${row.id}: proof classification coverage mismatch`);
 for(const step of steps){
  stepsChecked++;const record=classified.find(r=>r.step===step.id);
  check(record?.claim===step.claim,`${row.id}: ${step.id} full proof paragraph differs`);
  check(same(record?.inputs,step.inputs),`${row.id}: ${step.id} trailing input tags differ`);
 }
 for(const r of entry.supplier_excerpts??[])check(r.quote===sourceSectionText(source(r.source).body,r.source_section)?.trim(),`${row.id}: contextual supplier quote differs`);
}
// Outside46 row specifically connected to original consumer closure: already exact; no write.
const outside=read('research/numerical-optimization-dynamics-2026-10-16-batch-46.proof-contracts.json').contracts['lem-naive-all-pairs-collision-search-has-quadratic-work'].citations.find(r=>r.source==='alg-event-driven-frictionless-sphere-contact-with-certified-events');
check(Boolean(outside)&&outside.quote===sourceSectionText(source(outside.source).body,outside.source_section)?.trim(),'outside46: sphere algorithm full Definition quote differs');
console.log(JSON.stringify({status:errors.length?'mismatch':'source-exact',target:proposed?'proposed':'canonical',items:manifestIds.length,citations,proof_steps:stepsChecked,source_guards:cfg.source_guards.length,outside46_quote:'checked-no-write',errors,acceptance:false},null,2));
process.exitCode=errors.length?1:0;
