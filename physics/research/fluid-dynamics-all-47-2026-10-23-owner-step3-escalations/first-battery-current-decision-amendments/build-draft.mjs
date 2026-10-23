// Read-only current comparison. Writes only this unique research draft/proposal/report.
import fs from 'node:fs';import {dirname,resolve,join,relative} from 'node:path';import {fileURLToPath} from 'node:url';import {createHash} from 'node:crypto';import assert from 'node:assert/strict';
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,'../../..'),run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step3-escalations`,integration=`${base}/first-battery-integration`;
const sha=x=>createHash('sha256').update(x).digest('hex'),C=x=>Array.isArray(x)?x.map(C):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,C(x[k])])):x,H=x=>sha(JSON.stringify(C(x))),guards={};
function raw(path,bind=true){const full=resolve(root,path);assert.ok(!relative(root,full).startsWith('..')&&fs.lstatSync(full).isFile()&&fs.realpathSync(full)===full,path);const bytes=fs.readFileSync(full);if(bind)guards[path]=sha(bytes);return bytes;}
const read=(path,bind=true)=>JSON.parse(raw(path,bind));
const accepted=read(`${integration}/root-boundary-review-integration.json`),integrationPlan=read(`${integration}/plan.json`),boundaries=integrationPlan.root_only_boundary_review_proposals;
assert.equal(accepted.owner,'/root');assert.equal(accepted.changes.length,143);
const candidates=[],exempt=[],unchanged=[],alreadyAmended=[];
for(let b=1;b<=47;b++){
 const path=`research/${run}-alpha-batch-${b}-3a-decisions.json`,d=read(path,false),pagesPath=`research/${run}-batch-${b}.pages.json`,pages=read(pagesPath,false),contractPath=`research/${run}-batch-${b}.proof-contracts.json`,contracts=read(contractPath,false).contracts,postPath=`research/${run}-step3-hash-${b}-post.json`,post=read(postPath,false),prePath=`research/${run}-step3-hash-${b}-pre.json`,pre=read(prePath,false);
 for(let index=0;index<d.decisions.length;index++){
  const x=d.decisions[index];if(!x.obligation.startsWith('touched:'))continue;
  if(x.verdict==='amended_repair'){alreadyAmended.push({id:x.id,batch:b,obligation:x.obligation});continue;}
  if(x.verdict!=='accepted_repair')continue;
  const page=pages.find(p=>p.items.some(i=>i.id===x.id));assert.ok(page,x.id);const row=page.items.find(i=>i.id===x.id),sourcePath=`items/${x.id}.md`,current={item_sha256:sha(raw(sourcePath,false)),manifest_sha256:H({...row,__step4_page_id:page.id}),contract_sha256:H(contracts[x.id]??null)},reader=post.hashes[x.id];assert.ok(reader,x.id);
  if(H(current)===H(reader)){unchanged.push(x.id);continue;}
  const {risk_review,...without}=contracts[x.id]??{};
  if(Object.hasOwn(contracts[x.id]??{},'risk_review')&&reader.item_sha256===current.item_sha256&&reader.manifest_sha256===current.manifest_sha256&&H(without)===reader.contract_sha256){exempt.push({id:x.id,batch:b,obligation:x.obligation,reason:'Exact native riskReviewOnlyDelta exemption: current contract minus risk_review equals immutable reader contract; item and manifest identical.'});continue;}
  for(const input of [path,pagesPath,contractPath,postPath,prePath,sourcePath,`research/${run}-step3-scope-${b}.json`])raw(input);
  assert.notEqual(H(current),H(pre.hashes[x.id]),`${x.id}: amended carrier must differ from pre-reader carrier`);
  const sourceChanged=reader.item_sha256!==current.item_sha256,manifestChanged=reader.manifest_sha256!==current.manifest_sha256;
  // No source/manifest amendment is inferred or silently authorized by a contract-only packet.
  assert.equal(sourceChanged,false,`${x.id}: new source change needs explicit scientific routing`);assert.equal(manifestChanged,false,`${x.id}: unexpected manifest amendment`);
  const archives=[`${integration}/before-root-current-boundary-stamps`,...fs.readdirSync(resolve(root,integration)).filter(n=>n.startsWith('before-root-apply-')).map(n=>`${integration}/${n}/research`)];
  let baseline;
  for(const ar of archives){const p=`${ar}/${run}-batch-${b}.proof-contracts.json`;if(!fs.existsSync(resolve(root,p)))continue;const c=read(p,false).contracts[x.id];if(!c)continue;const{risk_review,...withoutRisk}=c;if(H(c)===reader.contract_sha256||H(withoutRisk)===reader.contract_sha256){baseline={path:p,entry:H(c)===reader.contract_sha256?c:withoutRisk,normalization:H(c)===reader.contract_sha256?'none':'Remove later risk_review only; normalized entry exactly authenticates against immutable reader contract hash.'};raw(p);break;}}
  assert.ok(baseline,`${x.id}: no hash-authenticated original worksheet bytes`);
  const a={...contracts[x.id]},z={...baseline.entry};delete a.risk_review;delete z.risk_review;const citationDeltas=[];
  assert.equal(a.citations.length,z.citations.length);
  for(let i=0;i<a.citations.length;i++)if(H(a.citations[i])!==H(z.citations[i])){
   const op=integrationPlan.operations.find(o=>o.kind==='citation-quote'&&o.item===x.id&&H(o.before)===H(z.citations[i])&&H(o.after)===H(a.citations[i]));assert.ok(op,`${x.id}: unreviewed citation delta`);raw(op.authority);
   const supplier=`items/${op.after.source}.md`,text=raw(supplier).toString();assert.ok(text.includes(op.after.quote),'Current literal quotation missing');citationDeltas.push({index:i,before:op.before,after:op.after,scientific_authority:op.authority,adopted_operation:`${integration}/plan.json`});
  }
  const oldRows=z.boundaries,newRows=a.boundaries;delete a.boundaries;delete z.boundaries;delete a.citations;delete z.citations;assert.deepEqual(a,z,`${x.id}: unreviewed nonboundary/noncitation contract delta`);assert.equal(oldRows.length,newRows.length);
  const individual=[];
  for(let i=0;i<oldRows.length;i++)if(H(oldRows[i])!==H(newRows[i])){
   assert.equal(oldRows[i].case,newRows[i].case);const match=accepted.changes.find(r=>r.id===x.id&&r.case===newRows[i].case);assert.ok(match,`${x.id}: missing actual root adoption for ${newRows[i].case}`);
   const scientific=read(match.scientific_review.path);assert.equal(guards[match.scientific_review.path],match.scientific_review.sha256,'Scientific report changed after root adoption');
   const proposal=boundaries.find(r=>r.item===x.id&&r.case===newRows[i].case);assert.ok(proposal);
   individual.push({case:newRows[i].case,before:oldRows[i],after:newRows[i],root_acceptance:`${integration}/root-boundary-review-integration.json`,scientific_review:match.scientific_review,scientific_reason:proposal.scientific_reason});
  }
  assert.ok(individual.length);
  const next=structuredClone(x);next.verdict='amended_repair';
  next.owner_resolution=[next.owner_resolution,`FIRST-BATTERY ROOT ADOPTION PROPOSAL for ${x.id}: retain the already accepted native reader repair. Actual current source raw SHA and manifest entry hash both equal the immutable reader-post carrier; there is no additional source, public-interface, dependency or proof change in this amendment. Only the author worksheet differs, through the ${citationDeltas.length?'already reviewed literal supplier-quotation refresh and ':''}individually reviewed boundary dispositions/current review records adopted by /root in ${integration}/root-boundary-review-integration.json. Exact cases: ${individual.map(r=>r.case).join(', ')}. Each current scientific judgment and its original report is enumerated in ${base}/first-battery-current-decision-amendments/proposal.json. Historical independent findings, reader pre/post snapshots, reports, receipts and earlier amendment history remain unchanged. Current comparison carrier: ${JSON.stringify(current)}. This proposal does not assert that the independent reader produced the later root worksheet; root separately owns actual adoption and native subject-hash sealing.`].filter(Boolean).join('\n\n');
  next.evidence=[next.evidence,`First-battery current worksheet amendment proposal only; ${base}/first-battery-current-decision-amendments/proposal.json preserves exact reader/current comparison and actual individual scientific adoption. Source and manifest are byte/hash-identical to reader-post.`].filter(Boolean).join('\n');
  assert.equal(next.subject_sha256,x.subject_sha256,'No subject stamp may be proposed by this draft');
  candidates.push({path,pointer:`/decisions/${index}`,id:x.id,batch:b,obligation:x.obligation,before:x,after_proposal:next,source_changed:sourceChanged,manifest_changed:manifestChanged,contract_changed:true,current_carrier:current,reader_post_carrier:reader,reader_pre_carrier:pre.hashes[x.id],authenticated_reader_contract:baseline,individual_boundary_deltas:individual,citation_deltas:citationDeltas,root_only_followup:'After final routing integration, recheck exact guards, adopt verdict/text and separately seal the actual current subject carrier by the native root protocol. No seal is changed here.'});
 }
}
for(const row of candidates)delete guards[row.path]; // Root routing may append/reorder unrelated decisions; apply guards the exact bound rows instead.
const proposal={version:1,run,status:'DRAFT_ONLY_ROOT_ADOPTION_REQUIRED',changes:candidates,preimage_guards:guards,risk_review_only_exemptions:exempt,unchanged_accepted_repairs:unchanged,already_amended_preserved:alreadyAmended,actual_source_changes:[],actual_manifest_changes:[],scope:'Only six currently accepted touched repairs whose worksheets changed after first-battery boundary adoption. Earlier proposal/integration/live decisions/native snapshots remain untouched.',no_apply:true,no_subject_seals:true};
const report={run,status:proposal.status,amendment_proposals:candidates.length,decision_files:[...new Set(candidates.map(x=>x.path))],ids:candidates.map(x=>x.id),individual_boundary_deltas:candidates.reduce((n,r)=>n+r.individual_boundary_deltas.length,0),citation_deltas:candidates.reduce((n,r)=>n+r.citation_deltas.length,0),actual_source_changes:[],actual_manifest_changes:[],risk_review_only_exemptions:exempt,guard_count:Object.keys(guards).length,unresolved_semantics:[],root_followup:'Root adoption after final routing; stale raw guards require explicit reconciliation. Draft leaves existing subject_sha256 untouched; root native sealing still required.',live_writes:0};
for(const[name,doc]of[['proposal.json',proposal],['report.json',report]])fs.writeFileSync(join(here,name),JSON.stringify(doc,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(report,null,2));
