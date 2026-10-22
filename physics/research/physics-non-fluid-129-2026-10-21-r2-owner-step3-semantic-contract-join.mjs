// Research-only guarded semantic successor proposal. No production writes.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-step3-root-adoption/contracts`;
const sha=x=>createHash('sha256').update(x).digest('hex'),read=p=>JSON.parse(readFileSync(p)),guards=[];
const evidence=p=>{const b=readFileSync(p);guards.push({path:p,sha256:sha(b)});return JSON.parse(b);};
const doc=evidence(`${base}/merged.proposal.json`),batches=new Map();
for(let n=1;n<=129;n++)batches.set(n,evidence(`${base}/batch-${n}.proposal.json`));
const equal=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
function currentSource(g){
 const h=g.sha256??g.raw_sha256,path=g.path,bytes=readFileSync(path);
 if(sha(bytes)!==h){
  const candidates=['source-metadata','levels'].map(dir=>`research/${run}-owner-step3-root-adoption/${dir}/before/${path}`);
  const old=candidates.filter(existsSync).map(p=>({path:p,bytes:readFileSync(p)})).find(x=>sha(x.bytes)===h);
  if(!old||splitFrontmatter(old.bytes.toString()).body!==splitFrontmatter(bytes.toString()).body)throw Error('Scientific body differs from reviewed source '+path);
  guards.push({path:old.path,sha256:h});
 }
 guards.push({path,sha256:sha(bytes)});
}
function contractGuard(g){if(sha(readFileSync(g.path))!==(g.sha256??g.raw_sha256))throw Error('Native contract changed '+g.path);guards.push({path:g.path,sha256:g.sha256??g.raw_sha256});}
const semantic=evidence(`research/${run}-owner-step3-root-adoption/boundary-semantic-proposals-adopted.json`);
for(const x of semantic.changes){
 currentSource(x.source_guard);contractGuard(x.contract_guard);
 const original=read(x.contract_guard.path).contracts[x.id].boundaries.find(b=>b.case===x.before.case);
 if(!equal(original,x.before))throw Error('Original boundary differs '+x.id);
 const entry=doc.contracts[x.id],index=entry.boundaries.findIndex(b=>b.case===x.before.case);
 if(index<0)throw Error('Missing current boundary '+x.id);
 entry.boundaries[index]=structuredClone(x.after);
}
const generator=evidence(`research/${run}-owner-step3-csm-generator89-context/boundary-proposal/proposal.json`);
for(const g of generator.guards){if(g.path.startsWith('items/'))currentSource(g);else contractGuard(g);}
const generatorEntry=doc.contracts[generator.id];
if(!equal(read(`research/${run}-batch-85.proof-contracts.json`).contracts[generator.id].boundaries,generator.before_boundaries))throw Error('Generator worksheet differs');
generatorEntry.historical_boundary_worksheet_before_step3_owner=generator.before_boundaries;
generatorEntry.boundaries=structuredClone(generator.after_semantic_boundaries);
const packet=evidence(`research/${run}-owner-step3-tgr120-outgoing/contract-semantic-proposal.json`);
currentSource({path:packet.source_path,sha256:packet.source_sha256_guard});contractGuard({path:packet.contract_path,sha256:packet.contract_sha256_guard});
const packetEntry=doc.contracts[packet.id],native=read(packet.contract_path).contracts[packet.id];
for(const key of ['formulation','sources']){
 if(!equal(native.physics_review[key],packet.before_rows[`physics_review.${key}`]))throw Error('Packet review differs');
 packetEntry.physics_review[key]=structuredClone(packet.after_rows[`physics_review.${key}`]);
}
if(!equal(native.risk_review,packet.before_rows.risk_review))throw Error('Packet native risk evidence differs');
packetEntry.prior_step3_native_risk_review=structuredClone(native.risk_review);
packetEntry.risk_review=structuredClone(packet.after_rows.risk_review);
packetEntry.risk_review.reviewer='/root adopting /root/supplier_cycle current-source review';
packetEntry.risk_review.notes+=' Root current adoption: the original native reviewer metadata is preserved in prior_step3_native_risk_review. The completed final eleven-consumer join, including both changed batch129 carriers actually reread after native completion, is recorded in research/'+run+'-owner-step3-tgr120-outgoing/final-consumer-join.json. No consumer source repair was needed. The earlier provisional note is historical.';
evidence(`research/${run}-owner-step3-tgr120-outgoing/final-consumer-join.json`);
for(const[n,b]of batches){for(const id of Object.keys(b.contracts))b.contracts[id]=doc.contracts[id];writeFileSync(`${base}/batch-${n}.semantic-proposal.json`,JSON.stringify(b,null,2)+'\n');}
writeFileSync(`${base}/merged.semantic-proposal.json`,JSON.stringify(doc,null,2)+'\n');
writeFileSync(`${base}/semantic-join.json`,JSON.stringify({run,at:new Date().toISOString(),status:'Research-only current-source worksheet proposal; production application, native certification and gates remain pending.',nine_evidence_successors:semantic.changes.length,generator_cases:generatorEntry.boundaries.length,packet_review_attribution:'Current source owner and root, preserving native historical review; no invented native reread.',guards},null,2)+'\n');
console.log(JSON.stringify({scope:doc.scope.length,boundary_successors:semantic.changes.length,generator_cases:generatorEntry.boundaries.length,packet_review:true,production_edits:false}));
