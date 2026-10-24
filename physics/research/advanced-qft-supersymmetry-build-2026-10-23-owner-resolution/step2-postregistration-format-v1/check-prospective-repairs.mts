// Root metadata-format diagnostic of proposed outputs; never native coverage.
import fs from 'node:fs';import{pathToFileURL}from'node:url';
import{sources}from'./propose-repairs.mjs';
import{precheckSource}from'../../../../tools/physics-support/paths.mjs';
import{checkableText}from'../../../../tools/physics-support/precheck-text.mjs';
import{splitFrontmatter}from'../../../../tools/physics-support/facts-block.mjs';
import{yaml}from'../../../../tools/physics-support/pathway-lib.mjs';
import{loadPhysicsRepository,validatePhysicsContent}from'../../../../tools/physics-support/physics-content.mjs';
const{proposedPrecheck}=await import(pathToFileURL(precheckSource()).href),run='advanced-qft-supersymmetry-build-2026-10-23',checks=[];
const repo=loadPhysicsRepository(process.cwd(),null,new Set());
for(const[id,row]of sources){const{fm,body}=splitFrontmatter(row.after),metadata=yaml().parse(fm),text=checkableText(row.after),r=text===null||metadata.kind==='open-problem'?null:proposedPrecheck(text,metadata.proof_strategy);checks.push({id,before_sha256:row.before_sha256,proposed_sha256:row.after_sha256,canonical_format:r===null?'not-applicable':r.err?'fail':r.repaired?'repair-required':'pass',error:r?.err??null});const index=repo.items.findIndex(i=>i.id===id);if(index<0)throw Error('Missing actual item');repo.items[index]={...metadata,body,raw:row.after,file:repo.items[index].file};}
const errors=validatePhysicsContent({...repo,requireBodies:true,selectedItems:new Set(sources.keys()),selectedPages:new Set()});
const report={run,kind:'prospective source metadata and canonical-format diagnostic; no source writes, current-source acceptance or native gates',checks,errors};fs.writeFileSync(`research/${run}-owner-resolution/step2-postregistration-format-v1/prospective-format-diagnostic.json`,JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify({items:checks.length,format_failures:checks.filter(r=>['fail','repair-required'].includes(r.canonical_format)),schema_errors:errors}));
