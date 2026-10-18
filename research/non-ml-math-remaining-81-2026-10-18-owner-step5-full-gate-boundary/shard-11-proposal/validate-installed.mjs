import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {splitFrontmatter} from '../../../tools/step6-lib.mjs';
import {frontmatterList} from '../../../tools/frontmatter-list.mjs';
import {itemHashGuard} from '../../../tools/item-hash.mjs';
const base='research/non-ml-math-remaining-81-2026-10-18-owner-step5-full-gate-boundary/shard-11-proposal';
const root='research/non-ml-math-remaining-81-2026-10-18-owner-step5-full-battery-root-integration';
const applicationPath=root+'/actual-application/application.json';
const application=JSON.parse(fs.readFileSync(applicationPath));
const proposal=JSON.parse(fs.readFileSync(base+'/p1-repair-proposal.json'));
const checks=JSON.parse(fs.readFileSync(base+'/post-install-focused-checks.json'));
const ids=[proposal.source_operations[0].id,...proposal.consumers.map(x=>x.id)];
const sha=x=>createHash('sha256').update(x).digest('hex');
const assert=(x,m)=>{if(!x)throw Error(m)};
const sources=Object.fromEntries(ids.map(id=>[id,fs.readFileSync('items/'+id+'.md','utf8')]));
assert(sources[ids[0]]===proposal.source_operations[0].after,'P1 differs from proposed exact source');
const old=proposal.source_operations[0].before;
const statement=t=>t.split('## Statement\n\n')[1].split('\n## ')[0].trim();
const prefix='Assume the Axiom of Choice, inherited from sheaf cohomology.\n\n';
assert(statement(sources[ids[0]])===prefix+statement(old),'Original Statement scope/formulas changed');
assert(sources[ids[0]].split('## Proof\n')[1]===old.split('## Proof\n')[1],'Original proof changed');
const fileRows=ids.map(id=>{
 const path='items/'+id+'.md',raw=sources[id];const row=application.current_vectors.find(x=>x.path===path);assert(row,'Application vector missing '+id);
 assert(row.after_sha256===sha(raw),'Current raw differs from application '+id);
 assert(row.guard_sha256===itemHashGuard(raw),'Current guard differs from application '+id);
 if(id!==ids[0])assert(row.before_sha256===row.after_sha256,'Consumer source changed '+id);
 return{id,path,raw_sha256:sha(raw),item_sha256:itemHashGuard(raw),before_raw_sha256:row.before_sha256,actual_application_snapshot:row.after_archive,unchanged_source:id!==ids[0]};
});
const manifestPath=proposal.manifest_operations[0].path;const manifest=JSON.parse(fs.readFileSync(manifestPath));const manifestRow=manifest.flatMap(x=>x.items).find(x=>x.id===ids[0]);
assert(JSON.stringify(manifestRow)===JSON.stringify(proposal.manifest_operations[0].after),'Manifest mirror differs');
const contractPath=proposal.contract_operations[0].path;const contract=JSON.parse(fs.readFileSync(contractPath));
const expectedRows=JSON.parse(fs.readFileSync(base+'/p1-post-repair-operations.json'));
for(const o of expectedRows){const actual=contract.contracts[o.id].boundaries.find(b=>b.case===o.case);assert(JSON.stringify(actual)===JSON.stringify(o.after),'Installed boundary mismatch '+o.case)}
const citationOp=proposal.contract_operations[1];const citation=contract.contracts[citationOp.id].citations[3];assert(JSON.stringify(citation)===JSON.stringify(citationOp.after),'Consumer citation mirror differs');assert(statement(sources[ids[0]])===citation.quote,'Citation not exact Statement');
assert(checks.checks.length===4&&checks.checks.every(x=>x.exit_code===0),'Focused checks did not all pass');
// Context seals below are explicitly local dependency-source snapshots, not native certification contexts.
const parsed=new Map();const get=id=>{if(!parsed.has(id)){const raw=fs.readFileSync('items/'+id+'.md','utf8');const {frontmatter}=splitFrontmatter(raw);const data={deps:frontmatterList(frontmatter,'deps'),justified_by:frontmatterList(frontmatter,'justified_by')};parsed.set(id,{raw,data})}return parsed.get(id)};
const contexts=[];
for(const id of ids){const reached=new Set();const visit=x=>{if(reached.has(x))return;reached.add(x);const node=get(x);for(const dep of [...(node.data.deps??[]),...(node.data.justified_by??[])])visit(dep)};visit(id);const rows=[...reached].sort().map(x=>({id:x,item_sha256:itemHashGuard(get(x).raw)}));contexts.push({id,context_kind:'local-transitive-deps-and-justified_by-guard-vector-not-native-certification',supplier_count:rows.length-1,local_context_sha256:sha(JSON.stringify(rows)),rows})}
fs.writeFileSync(base+'/post-install-contexts.json',JSON.stringify(contexts,null,2)+'\n');
const receipt={version:1,run:proposal.run,reviewer:'/root/math81_boundary_gate_11',reviewed_at:new Date().toISOString(),cycle:1,kind:'same-reviewer-focused-post-install-validation',verdict:'resolved-current',application:{path:applicationPath,raw_sha256:sha(fs.readFileSync(applicationPath)),applied_at:application.applied_at},source_scope:fileRows,claim_preservation:{exact_proposed_source:true,original_statement_after_removing_inherited_ac_prefix_unchanged:true,original_proof_byte_identical:true,all_integer_degree_ranges_dimensions_global_sections_and_laurent_bases_preserved:true},actual_resolution:'Current P1 Statement, Given, F1, axiom_use and dependency list explicitly provide inherited full AC required by the fixed derived-cohomology definition and affine-cover comparison. The previous non-applicability row is now checked with concrete inherited-choice evidence and current guard.',consumer_dispositions:proposal.consumers.map(c=>({...c,actual_post_install_check:'Current source raw hash equals the unchanged before/after application vector. Re-read actual current Statement/Facts supplier interface; existing inherited AC convention and preserved vanishing inputs suffice. No consumer source edit required.'})),metadata:{manifest:{path:manifestPath,raw_sha256:sha(fs.readFileSync(manifestPath)),p1_row_matches_proposal:true},contract:{path:contractPath,raw_sha256:sha(fs.readFileSync(contractPath)),six_assigned_p1_boundaries_match_current_candidate:true,relative_consumer_statement_quote_exact:true}},checks,local_contexts:{path:base+'/post-install-contexts.json',raw_sha256:sha(fs.readFileSync(base+'/post-install-contexts.json')),meaning:'Local source currency seals only, not native execution/judgment/certification contexts.'},aborted_probe:{command:'node tools/rendercheck.mjs --help',outcome:'Interrupted with SIGINT before completion after discovering this checker has no help option; read-only default scan supplied no check result, gate pass or write.',exit_code:130},writes_by_this_validation:'Only these research receipt/context/script files; no canonical source, manifest, contract, runtime state, index or HEAD writes.',native_execution_coverage_granted:false,native_judgment_or_certification_claimed:false,full_native_battery_attempted:false,remaining_owner_obligations:'Root certificate-history and canonical-ledger linkage, plus genuine fresh native current source/consumer review and full gate preparation/battery remain owed.'};
fs.writeFileSync(base+'/post-install-current-validation.json',JSON.stringify(receipt,null,2)+'\n');
console.log(JSON.stringify({verdict:receipt.verdict,scope:fileRows.map(({id,item_sha256})=>({id,item_sha256})),checks:checks.checks.map(x=>({command:x.command,exit_code:x.exit_code})),contexts:contexts.map(({id,supplier_count,local_context_sha256})=>({id,supplier_count,local_context_sha256}))}));
