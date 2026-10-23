import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {sourceSectionText,splitFrontmatter} from '../../../tools/physics-support/facts-block.mjs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
const dir='research/fluid-dynamics-all-47-2026-10-23-owner-step3-escalations/root-metadata/', run='fluid-dynamics-all-47-2026-10-23';
const q=JSON.parse(fs.readFileSync(dir+'plan.json')),n=JSON.parse(fs.readFileSync(dir+'new-item-proposal.json'));
const sha=x=>createHash('sha256').update(x).digest('hex'),norm=x=>String(x??'').replace(/\s+/g,' ').trim(),Y=yaml();
const staged=new Map(q.operations.filter(o=>o.kind==='source-frontmatter').map(o=>[o.path,o.after]));
for(const o of n.operations)if(o.kind==='new-source-frontmatter-deps-roles-only')staged.set(o.path,o.after);
const source=id=>staged.get(`items/${id}.md`)??fs.readFileSync(`items/${id}.md`,'utf8');
const checked=[];
function citation(row,consumer){
 const text=source(row.source??row.supplier),section=row.source_section,quote=row.quote??row.exact_statement;
 assert.ok(section&&quote,`Missing exact citation ${consumer}`);
 assert.notEqual(section,'Facts & Assumptions');
 const actual=sourceSectionText(splitFrontmatter(text).body,section);
 assert.ok(actual&&norm(actual).includes(norm(quote)),`Not exact ${consumer}/${row.fact??''}/${row.source??row.supplier}/${section}`);
 checked.push({consumer,source:row.source??row.supplier,section,quote_sha256:sha(quote)});
}
for(const o of q.operations){
 if(o.kind==='source-frontmatter'){
  assert.equal(splitFrontmatter(o.before).body,splitFrontmatter(o.after).body);
  const d=Y.parse(splitFrontmatter(o.after).fm);assert.equal(d.status,'draft');
  assert.deepEqual([...new Set(d.deps)].sort(),Object.keys(d.dependency_roles).sort());
 }
 if(o.kind==='json-field'&&['citations','supplier_excerpts'].includes(o.pointer[2]))for(const r of o.after)citation(r,o.pointer[1]);
 if(o.kind==='json-field'&&o.pointer.at(-1)==='statement'){
  const doc=JSON.parse(fs.readFileSync(o.path));let row=doc;for(const k of o.pointer.slice(0,-1))row=row[k];
  const body=splitFrontmatter(source(row.id)).body;
  assert.ok(['Definition','Statement','Statement refuted','Postulate','Example','Counterexample','Remark','Observations'].some(h=>sourceSectionText(body,h)?.trim()===o.after),`Public mirror ${row.id}`);
 }
}
for(const r of n.operations.find(o=>o.kind==='add-authored-contract').after.citations)citation(r,n.id);
const report={version:1,run,owner:'/root',at:new Date().toISOString(),plan_before_approval_sha256:sha(fs.readFileSync(dir+'plan.json')),new_item_before_approval_sha256:sha(fs.readFileSync(dir+'new-item-proposal.json')),operations:q.operations.length,new_item_operations:n.operations.length,checks:{all_changed_public_mirrors_exact:true,source_bodies_preserved:true,current_changed_citations_and_excerpts:checked.length,logical_dependency_role_keys_exact:true},checked_citations:checked,explicit_six_stale_quote_review:{operations:['metadata-op-183','metadata-op-184','metadata-op-189','metadata-op-193','metadata-op-194','metadata-op-195'],reason:'Root compared actual supplier Definition and six before/after rows. Earlier scalar-field target definitions, cross-product formula, I3 definition, barotropic naming and exterior-limit clarifications explain preexisting stale bytes. F1 restatements retain the same pointwise derivative/PDE interfaces used by x04/x05/x09 and x07/x10/x11. Adopt literal current public text; no new consumer proof or logical premise is inferred from the longer quotation. Streamline endpoint repair is independently supported by the same-owner58-consumer review.'},logical_edge_removal:'Only unused Newtonian-model dependency for local momentum; exact authoring context retained, actual transport/Jordan dependencies added. All page requires preserved.',limits:'No gate, current scientific stamp or independent-review coverage asserted. Actual owner creation/certification remains separate.'};
fs.writeFileSync(dir+'root-review.json',JSON.stringify(report,null,2)+'\n',{flag:'wx'});
q.approved_operation_ids=q.operations.map(o=>o.id);n.approved_by_root=true;
fs.writeFileSync(dir+'plan.json',JSON.stringify(q,null,2)+'\n');fs.writeFileSync(dir+'new-item-proposal.json',JSON.stringify(n,null,2)+'\n');
console.log(JSON.stringify({approved:q.approved_operation_ids.length,new_item:n.approved_by_root,citations:checked.length}));
