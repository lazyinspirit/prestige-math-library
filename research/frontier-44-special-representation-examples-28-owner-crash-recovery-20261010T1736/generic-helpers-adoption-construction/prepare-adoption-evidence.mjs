import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { yamlCandidates } from '../../../tools/paths.mjs';
const require = createRequire(import.meta.url);
let YAML; for (const p of yamlCandidates()) { try { YAML = require(p); break; } catch {} }
if (!YAML) throw Error('Renderer YAML unavailable');
const base = 'research/frontier-44-special-representation-examples-28-owner-crash-recovery-20261010T1736/generic-helpers-adoption-construction';
const run = 'frontier-44-special-representation-examples-28';
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const read = path => readFileSync(path, 'utf8');
const seal = path => ({ path, sha256: sha(readFileSync(path)) });
const start = JSON.parse(read(`${base}/adoption-start.json`));
const history = 'research/frontier-44-special-representation-examples-28-owner-step3-degenerate-ariki-bindings-round1';
const original = [
 ['/root/construct_qg8_bindings',`${history}/parallel-generic-e-zero-bridge/support-prerequisite-and-exact-remaining-generic-bridge-hold.json`],
 ['/root/construct_generic_dg_tables',`${history}/parallel-generic-dg-tables/construction-and-final-check-evidence.json`],
 ['/root/construct_generic_ng_tables',`${history}/parallel-generic-ng-tables/final2/handoff.json`],
 ['/root/construct_generic_tower',`${history}/parallel-generic-tower/tower-conditional-proof-and-current-hold.json`],
 ['/root/construct_generic_specht_dictionary',`${history}/parallel-generic-specht-dictionary/consumer-requirement-and-conditional-specht-dictionary.json`]
];
const baselinePath = `research/${run}-step3-auditor-baseline.json`;
const baseline = JSON.parse(read(baselinePath));
const manifestPaths = [25,18].map(n=>`research/${run}-batch-${n}.pages.json`);
const manifests = Object.fromEntries(manifestPaths.map(p=>[p,JSON.parse(read(p))]));
const entries=[]; const authored=[]; const dependencies=new Set();
for (let i=0;i<start.items.length;i++) {
 const row=start.items[i], text=read(row.draft_path), fm=YAML.parse(text.match(/^---\n([\s\S]*?)\n---/)[1]);
 const source=read(row.source.path);
 if (sha(source)!==row.source.sha256) throw Error('stale source '+row.id);
 if (existsSync(row.canonical_path)) throw Error('canonical appeared '+row.id);
 if (baseline.items.some(x=>x.id===row.id)||baseline.existing_item_files.includes(row.id)) throw Error('baseline ID exists '+row.id);
 const batch=i===4?'18':'25', manifest=`research/${run}-batch-${batch}.pages.json`;
 const page=manifests[manifest].find(x=>x.kind==='A');
 if (page.items.some(x=>x.id===row.id)) throw Error('already manifest '+row.id);
 const statement=text.split('\n## Statement\n')[1].split('\n## Facts & Assumptions\n')[0].trim();
 const strategy=text.split('\n## Facts & Assumptions\n')[1].split('\n## Remarks\n')[0].trim();
 const item={id:fm.id,kind:fm.kind,title:fm.title,deps:fm.deps,statement,strategy:'## Facts & Assumptions\n\n'+strategy,provenance:fm.provenance,sources:fm.sources,axiom_use:i===4?'AC inherited only through declared degenerate categorical suppliers; exact proof use is character injectivity through supplied categorical identifications':'No choice: local finite algebra and formal series arguments'};
 const claim={...Object.fromEntries(['id','kind','title','statement'].map(k=>[k,item[k]??null])),source_claim:text.split(/^## /m).filter(s=>/^(Statement|Definition)\b/.test(s)).map(s=>s.trim())};
 const claim_sha256=sha(JSON.stringify(claim));
 const proposal={version:1,run,page:page.id,batch,category:page.category,canonical_manifest:manifest,canonical_manifest_before_sha256:sha(readFileSync(manifest)),action:'insert-complete-local-draft-at-existing-home',item,claim_sha256,draft_path:row.draft_path,draft_raw_sha256:sha(text),canonical_path:row.canonical_path,canonical_absent:true,manifest_applied:false,new_pairs:false,placement_constraint:i===4?'Late A18 dictionary after its actual degenerate highest/standard and A25 Murphy suppliers; do not place at A25 because A25 must not consume the late A18 based theorem':'Existing A25; topologically order support/DG/NG before tower and consumers; root derives current dependency levels'};
 entries.push(proposal);
 authored.push({id:row.id,run,owner:'/root',author:'/root/generic_helpers_adoption_constructor',page:page.id,batch,claim_sha256,item_file_sha256:sha(text),draft_path:row.draft_path,canonical_path:row.canonical_path,source_draft:row.source,preserved_historical_copy:seal(`${base}/historical-source/${row.id}.md`),prior_construction_author:original[i][0],prior_construction_evidence:seal(original[i][1]),original_statement_preserved:statement===source.split('\n## Statement\n')[1].split('\n## Facts & Assumptions\n')[0].trim(),original_proof_preserved:text.split('\n## Proof\n')[1].split('\n## Remarks')[0]===source.split('\n## Proof\n')[1].split('\n## Remarks')[0],adoption_edits:row.edits});
 for (const id of fm.deps) dependencies.add(id);
}
const sourceEvidence=original.map(([author,path])=>({author,...seal(path),reading_credit:'Original constructor evidence; this adopter read the evidence and complete proposal, but claims no new external full-text retrieval'}));
const boundary={...seal(baselinePath),parsed_sha256:sha(JSON.stringify(baseline)),at:baseline.at,ids_absent:true};
const suppliers=[...dependencies].filter(id=>!authored.some(x=>x.id===id)).map(id=>seal(`items/${id}.md`));
const ended_at=new Date().toISOString();
const auth={version:1,run,action:'actual-current-adoption-authorship-evidence',owner:'/root',author:{identity:'/root/generic_helpers_adoption_constructor',timeline:{mode:'known',started_at:start.started_at,ended_at}},baseline:boundary,items:authored,prior_original_construction_evidence:sourceEvidence,source_reading_scope:'Complete five source proposals and construction evidence read; focused final2 receipt read; no adopter full-external-source reading or independent mathematical audit claimed',mathematical_acceptance:false,full_generic_based_bridge_accepted:false,held_suppliers:['thm-the-degenerate-cyclotomic-hecke-projective-k-zero-is-the-highest-weight-module','thm-schur-functor-images-of-standard-simple-projective-and-tilting-objects','thm-degenerate-ariki-categorification'],canonical_or_engine_writes:false};
writeFileSync(`${base}/manifest-entries-proposal.json`,JSON.stringify({version:1,run,author:'/root/generic_helpers_adoption_constructor',entries,applied:false,new_pairs:false},null,2)+'\n');
writeFileSync(`${base}/authorship-source-evidence.json`,JSON.stringify(auth,null,2)+'\n');
writeFileSync(`${base}/guarded-inputs.json`,JSON.stringify({version:1,run,final2_sufficiency_receipt:start.sufficiency_receipt,original_drafts:start.items.map(x=>x.source),baseline:boundary,manifests:manifestPaths.map(seal),current_canonical_suppliers:suppliers,canonical_creation_targets:authored.map(x=>({path:x.canonical_path,sha256:null,must_remain_absent_until_root_integration:true})),sources:sourceEvidence,history_preserved:true,ng_third_correction:false},null,2)+'\n');
console.log(JSON.stringify({ended_at,items:authored.map(({id,claim_sha256,item_file_sha256,page,batch})=>({id,claim_sha256,item_file_sha256,page,batch}))},null,2));
