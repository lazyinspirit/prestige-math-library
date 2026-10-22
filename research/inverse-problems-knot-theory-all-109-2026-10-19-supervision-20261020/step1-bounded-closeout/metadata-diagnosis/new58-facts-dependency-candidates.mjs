#!/usr/bin/env node
// Metadata candidates only: Facts and declared source sections, NEVER Proof.
// No validators, hashes/currency, readiness or canonical writes.
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const root=process.cwd();
const RUN='inverse-problems-knot-theory-all-109-2026-10-19';
const base=`research/${RUN}-supervision-20261020/step1-bounded-closeout`;
const out=`${base}/metadata-diagnosis`;
const {yaml}=await import(pathToFileURL(path.join(root,'tools/pathway-lib.mjs')).href);
const {splitFrontmatter,factsSectionText,sourceSectionText,SOURCE_SECTIONS,wikilinks}=
  await import(pathToFileURL(path.join(root,'tools/facts-block.mjs')).href);
const bindings=fs.readdirSync(path.join(root,base,'root-source-binding-inputs'),{withFileTypes:true})
  .filter(e=>e.isDirectory()).map(e=>`${base}/root-source-binding-inputs/${e.name}/root-input-binding.json`)
  .filter(file=>fs.existsSync(file));
const targets=new Map();
for(const file of bindings)for(const row of JSON.parse(fs.readFileSync(file,'utf8')).inputs??[])
  if(row.mode==='new-source-qualified-original')targets.set(row.id,{id:row.id,binding:file});
if(targets.size!==58)throw Error(`Expected exact NEW58 binding cohort, got ${targets.size}`);
const rows=[];
for(const {id,binding} of targets.values()) {
  const file=`items/${id}.md`;
  const {fm,body}=splitFrontmatter(fs.readFileSync(file,'utf8'));
  const meta=yaml().parse(fm);if(meta?.id!==id)throw Error('Invalid canonical FM '+id);
  const declared=new Set([...(meta.deps??[]),...(meta.justified_by??[]),...(meta.forward_refs??[])]);
  const locations=new Map();
  function add(text,section){
    for(const provider of wikilinks(text)) {
      if(provider===id||declared.has(provider))continue;
      if(!locations.has(provider))locations.set(provider,[]);
      const record={section};
      if(section==='Facts & Assumptions') {
        const paragraph=text.split(/\n\s*\n/).find(p=>wikilinks(p).includes(provider));
        const label=paragraph?.match(/^\s*\[([FLA]\d+)\]/)?.[1];
        if(label)record.fact_label=label;
      }
      if(!locations.get(provider).some(x=>JSON.stringify(x)===JSON.stringify(record)))
        locations.get(provider).push(record);
    }
  }
  // Do not use the Verification-preamble fallback: scope is actual Facts only.
  if(/^##\s+Facts[^\n]*\r?\n/m.test(body))add(factsSectionText(body),'Facts & Assumptions');
  for(const section of SOURCE_SECTIONS)add(sourceSectionText(body,section)??'',section);
  const candidates=[...locations].sort(([a],[b])=>a.localeCompare(b)).map(([provider,where])=>({
    provider,locations:where,provider_file_exists:fs.existsSync(`items/${provider}.md`),
    disposition:'ROOT DECISION REQUIRED: logical supplier vs contextual/source/alias reference not decided by token scan'}));
  rows.push({id,file,cohort_binding:binding,
    declared_metadata:{deps:meta.deps??[],justified_by:meta.justified_by??[],forward_refs:meta.forward_refs??[]},
    candidate_ids_not_declared:candidates,
    argument_review:false,source_URLs_not_dependencies:true});
}
rows.sort((a,b)=>a.id.localeCompare(b.id));
const affected=rows.filter(x=>x.candidate_ids_not_declared.length);
const report={version:1,run:RUN,recorded_at:new Date().toISOString(),
  scope:'Exactly58 new-source-qualified-original IDs from root source-binding inputs; CURRENT canonical Facts and declared source sections only, no Proof/Verification/Refutation/Counterexample body review.',
  counts:{targets:rows.length,targets_with_candidates:affected.length,
    candidate_consumer_provider_pairs:rows.reduce((n,x)=>n+x.candidate_ids_not_declared.length,0)},
  rows,limits:['These are token candidates, NOT approved dependency edges or mathematical findings.',
    'Source URLs and imported external citations are not wiki dependencies.',
    'Already declared deps/justified_by/forward_refs and self-links are excluded; alias equivalence is not silently assumed.',
    'Root chooses exact deps/refs/import metadata through explicit canonical_metadata_overrides; no automatic union of wikilinks.',
    'No hash/currency, gate, readiness or canonical mutation.']};
fs.writeFileSync(`${out}/new58-facts-dependency-candidates.json`,JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report.counts));
for(const row of affected)console.log(JSON.stringify({id:row.id,candidates:row.candidate_ids_not_declared.map(x=>x.provider)}));
