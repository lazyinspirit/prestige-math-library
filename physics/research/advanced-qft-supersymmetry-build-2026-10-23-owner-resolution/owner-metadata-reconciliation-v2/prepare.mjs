import fs from 'node:fs';
import path from 'node:path';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual as eq} from 'node:util';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
import {splitFrontmatter,sectionText} from '../../../tools/physics-support/facts-block.mjs';
const run='advanced-qft-supersymmetry-build-2026-10-23';
const owner=`research/${run}-owner-resolution`;
const out=`${owner}/owner-metadata-reconciliation-v2`;
const sha=b=>createHash('sha256').update(b).digest('hex');
const specs=[
['def-aqft-operator-basis-physical-data','sources.references','Source precise narrowed CPV locator agrees with batch25 notes; do not widen historical reading to equations3.8/pp19.'],
['def-equivariant-elliptic-complex-index','sources.references','Source frontmatter omits manifest-only locators. Their historical reading extents remain preserved in archived manifest and actual10 notes/coverage; removal from mirror is not withdrawal of source treatment or reading evidence.'],
['def-finite-dimensional-q-exact-localization-data','sources.references','Source frontmatter has bibliography-only entries. Preserve actual11 notes/coverage full-text reading history, all scientific analytical admissibility hypotheses and scraped field.'],
['def-qftx-adjoint-higgs-monopole-sector','sources.references','Only an extra conjunction and changes the first locator; all equations, page ranges, conventions and Harvey entry are identical. Mirror exact source text.'],
['prop-aqft-quartic-contact-jet-matching','sources.references','Source gives explicit equations2.2–2.8 and one-versus-multiple-EOM boundary; preserve source refinement and its local finite polynomial proof.'],
['ex-aqft-fusion-z2-twisted-associator','sources.references','Only omega versus Greek omega spelling differs in locator; exact source glyph retained, no cocycle/associator/interface edit.'],
['ex-aqft-operator-basis-reduction','sources.references','Source titles are actual bibliography titles, while manifest embeds Burgess/Neubert locators in titles. Exact local Example references and batch16 history continue to retain locators.'],
['thm-finite-dimensional-q-exact-deformation-invariance','sources.references','Source frontmatter has bibliography-only entries; actual11 source-locator/read history preserved separately. No deletion of Q-square, boundary, domination, finite-parameter or finite-dimensional restrictions.'],
['ex-aqft-anomaly-inflow-example','physical_scope','Stale manifest odd-index hypothesis is superseded by current explicitly proved round index-one geometry. Source Example/F5/F6 and Verification1.1 retain exact suppliers and limited central test; copy source scope, never revert repaired scientific source.'],
['ex-qftx-clay-finite-one-plaquette-regulator','physical_scope','Remove manifest null key: source omits it and is explicitly mathematics. Finite regulator limitation remains in actual Example, Proof3.1 and Remarks.'],
['ex-qftx-clay-two-global-forms-same-algebra','physical_scope','Remove manifest null key: source omits it and is explicitly mathematics. Actual global-group quantifier and contextual open-problem boundary remain intact.'],
['op-qftx-clay-4d-yang-mills-existence-mass-gap','physical_scope','Remove manifest null key: source omits it and is mathematics/open-problem. Full Open problem and Status, universal group scope and unsolved classification remain unchanged.'],
['def-qftx-character-localization','statement','Populate empty actual statement with full exact current Definition; no populated alternate definition field exists. Canonical parser used, including AC/rank0/fraction relation/coefficients/right-action conventions.'],
['lem-qftx-rank-one-regular-adhm-and-ordinary-asd-boundary','provenance','Add absent provenance with exact source ai-altered/ai-altered tags. This is a metadata mirror, not external attribution or a new acceptance/readiness claim.']
];
const diagnosticPath=`${owner}/private-preparation/authored-step1-owner-helper-v4-metadata-diagnostic.json`;
const diagnostic=JSON.parse(fs.readFileSync(diagnosticPath));
for(const p of diagnostic.problems){
 const field=p.category.includes('sources.references mismatch')?'sources.references':p.category.includes('provenance.')?'provenance':null;
 if(field&&!specs.some(([id,f])=>id===p.id&&f===field))specs.push([p.id,field,
 field==='provenance'?'Exact source provenance tags, retained by actual scientific repairs; replace empty/absent manifest provenance without inventing external attribution or acceptance.':
 p.id.includes('internal-positivity')?'Manifest still attributes a matrix/Laplacian/Stokes reconstruction to Verdier, but actual repaired source explicitly proves inverse-Gram Laplacian/minimum principle and uses Verdier only as comparison context. Preserve exact repaired attribution.':
 p.id.includes('stable-adhm')?'Mirror exact source author names and source locators; preserve positive-FI stable core, dual-framing tangent characters and explicit absence of any ASD/sheaf/integration claim.':
 p.id.includes('rank-one')?'Missing source reference parent object: add exact source references, whose locators explicitly disclaim a new source theorem or new reading; actual rank-one argument is locally proved.':
 'Mirror bibliography-only actual source entries; richer historical manifest locators/read extents remain archived and in batch64 notes/coverage, not newly attributed to this reviewer.']);
}
for(const id of ['ex-qftx-clay-finite-one-plaquette-regulator','ex-qftx-clay-two-global-forms-same-algebra','op-qftx-clay-4d-yang-mills-existence-mass-gap'])specs.push([id,'statement','Populate empty mirror from exact canonical current Example/Open problem section, retaining full finite-regulator/open-problem/global-group limitations. No source or claim changed.']);
fs.mkdirSync(`${out}/preimages`,{recursive:true});
const inputs=new Map(), changes=[];
function capture(p){if(!inputs.has(p)){let b=fs.readFileSync(p); const a=`${out}/preimages/${p}`;fs.mkdirSync(path.dirname(a),{recursive:true});fs.writeFileSync(a,b);inputs.set(p,{path:p,sha256:sha(b),archive:a});}return inputs.get(p);}
const manifests=fs.readdirSync('research').filter(n=>new RegExp(`^${run}-batch-\\d+\\.pages\\.json$`).test(n)).map(n=>`research/${n}`);
for(const [id,field,reason] of specs){
 const hits=[]; for(const f of manifests){const rows=JSON.parse(fs.readFileSync(f));rows.forEach((p,pi)=>p.items?.forEach((it,ii)=>{if(it.id===id)hits.push({f,pi,ii,it});}));}if(hits.length!==1)throw Error(id+': count '+hits.length);
 const {f,pi,ii,it}=hits[0],source=`items/${id}.md`,sourceGuard=capture(source),manifestGuard=capture(f);
 const raw=fs.readFileSync(source,'utf8'),{fm,body}=splitFrontmatter(raw),md=yaml().parse(fm),parts=(field==='sources.references'&&!it.sources)?['sources']:field.split('.');
 let parent=it; for(const k of parts.slice(0,-1))parent=parent[k];const key=parts.at(-1),exists=Object.hasOwn(parent,key),before=parent[key];
 let value;if(field==='statement')value=sectionText(body,md.kind==='definition'?'Definition':md.kind==='example'?'Example':'Open problem').trim();else{value=md;for(const k of parts)value=value?.[k];}
 const afterExists=value!==undefined;
 if(exists===afterExists&&eq(before,value))throw Error(id+': no delta');
 const pointer=`/${pi}/items/${ii}/${parts.join('/')}`;
 const op=afterExists?{op:exists?'replace':'add',path:pointer,value}:{op:'remove',path:pointer};
 const patch=[{op:'test',path:`/${pi}/items/${ii}/id`,value:id}];if(exists)patch.push({op:'test',path:pointer,value:before});patch.push(op);
 changes.push({id,field,manifest:f,item_pointer:`/${pi}/items/${ii}`,manifest_observed_sha256:manifestGuard.sha256,source_guard:{path:source,sha256:sourceGuard.sha256},field_guard:{path:pointer,expected_exists:exists,...(exists?{value:before}:{})},patch,reason,...(field==='statement'?{source_section:md.kind==='definition'?'Definition':md.kind==='example'?'Example':'Open problem',source_section_sha256:sha(value),alternate_fields:Object.fromEntries(Object.entries(it).filter(([k])=>/definition|statement/.test(k)))}:{})});
}
const history=[diagnosticPath,`${owner}/root-local-flatness-review/review.json`,`${owner}/root-normal-form-positivity-review/review.json`,`${owner}/batch66-cohomology-repair/consumer59-review.json`,`${owner}/private-preparation/drained-integration-checklist.md`,`${owner}/private-preparation/step1-owner-review-12ee3f67-5d72-4db4-910f-2da820452d98-actual-v1/checks.json`,`${owner}/root-rank-one-review/review.json`,`${owner}/rank-one-ordinary-dictionary-repair/report.md`,`${owner}/rank-one-ordinary-dictionary-repair/guarded-metadata-proposal.json`,`${owner}/index-heat-kernel-repair.md`];
for(const n of [10,11,15,16,23,25,52,64])history.push(`research/${run}-batch-${n}.notes.md`);
history.push(`research/${run}-batch-18-notes.md`);
for(const p of history)capture(p);
const checks=[];
for(const f of [...new Set(changes.map(c=>c.manifest))]){
 const original=JSON.parse(fs.readFileSync(f)),candidate=structuredClone(original),cs=changes.filter(c=>c.manifest===f);
 for(const c of cs){let par=candidate;const ps=c.field_guard.path.slice(1).split('/');for(const k of ps.slice(0,-1))par=par[k];const k=ps.at(-1);if(Object.hasOwn(par,k)!==c.field_guard.expected_exists||c.field_guard.expected_exists&&!eq(par[k],c.field_guard.value))throw Error('guard failed');const op=c.patch.at(-1);if(op.op==='remove')delete par[k];else par[k]=structuredClone(op.value);}
 for(const c of cs){const op=c.patch.at(-1);let par=candidate;for(const k of op.path.slice(1).split('/').slice(0,-1))par=par[k];const k=op.path.split('/').at(-1);if(op.op==='remove'?Object.hasOwn(par,k):!eq(par[k],op.value))throw Error('postcondition failed');}
 // Reverse exact operations to prove no other manifest field is changed.
 const restored=structuredClone(candidate);for(const c of cs){let par=restored;const ps=c.field_guard.path.slice(1).split('/');for(const k of ps.slice(0,-1))par=par[k];const k=ps.at(-1);if(c.field_guard.expected_exists)par[k]=c.field_guard.value;else delete par[k];}if(!eq(restored,original))throw Error('unscoped delta');
 checks.push({manifest:f,fields:cs.length,field_guards_pass:true,postconditions_pass:true,reverse_reconstruction_exact:true});
}
for(const g of inputs.values())if(sha(fs.readFileSync(g.path))!==g.sha256)throw Error('input changed '+g.path);
const proposal={version:1,status:'PRIVATE_UNAPPLIED_ROOT_REVIEW_REQUIRED',run,scope:'20 assigned items; 28 field patches; metadata only; no scientific-interface/source edits',application_requirements:['Recheck exact source guards and item id at each pointer.','Verify each field expected_exists and exact deep value immediately before mutation; absent-key provenance guard is mandatory.','Observed whole manifest hash is archival, not a blanket application guard; field guards permit disjoint concurrent owner patches. If an assigned field/source changes, reprepare a fresh version; do not relax guards.','Apply only the listed JSON patch operations, preserving every other field. Root owns production application, subsequent input/readiness/snapshot renewal and actual owner/native checks.'],changes,reading_limits:'Current twenty local source carriers were read (including mathematical body where relevant); notes/report excerpts establish provenance only. No new external PDF retrieval, full-text paper reading, scientific acceptance or independent audit claimed. This reconciliation preserves existing source repairs and historical source-reading limitations.'};
fs.writeFileSync(`${out}/field-patch-list.json`,JSON.stringify(changes.map(c=>({manifest_path:c.manifest,item:c.id,field:c.field,before:c.field_guard.expected_exists?c.field_guard.value:{__absent__:true},after:c.patch.at(-1).op==='remove'?{__absent__:true}:c.patch.at(-1).value,actual_json_pointer:c.field_guard.path,baseline_manifest_sha256:c.manifest_observed_sha256,source_guard:c.source_guard,rationale:c.reason,patch:c.patch})),null,2)+'\n');
fs.writeFileSync(`${out}/guarded-field-patches.json`,JSON.stringify(proposal,null,2)+'\n');
fs.writeFileSync(`${out}/input-archives.json`,JSON.stringify([...inputs.values()],null,2)+'\n');
fs.writeFileSync(`${out}/private-validation.json`,JSON.stringify({status:'private simulation only; not native owner gate',items:changes.length,manifests:checks.length,checks,all_input_hashes_rechecked:true},null,2)+'\n');
console.log(JSON.stringify({proposal_sha256:sha(fs.readFileSync(`${out}/guarded-field-patches.json`)),changes:changes.length,manifests:checks.length,production_writes:0}));
