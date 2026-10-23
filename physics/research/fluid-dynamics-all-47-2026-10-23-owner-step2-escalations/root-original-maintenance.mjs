import {readFileSync as rf,writeFileSync as wf,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual as same} from 'node:util';
import {yaml} from '../../tools/physics-support/pathway-lib.mjs';
import {numberedProofSteps,sectionText} from '../../tools/physics-support/facts-block.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,authorityPath=`research/${run}-original-maintenance.json`,out=`${base}/original-maintenance-integration.json`,archive=`${base}/before-original-maintenance.json`;
if(existsSync(out)||existsSync(archive))throw Error('Already integrated');
const sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(rf(p));
const authority=read(authorityPath),reviewPath=`${base}/statistic-maintenance-current-consumer-review.json`,review=read(reviewPath),phasePath=`${base}/canonical-phase-integration.json`,phase=read(phasePath),controlled=[];
const parse=raw=>{const m=raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);if(!m)throw Error('Missing metadata');return {data:yaml().parse(m[1]),body:m[2]};};
const refs=/\b([Ss]teps?)\s+(\d+\.\d+(?:\s*(?:,|and|–|-|through|to)\s*(?:step\s+)?\d+\.\d+)*)/g;
const normal=(s,map={})=>s.replace(refs,(m,w,n)=>w+' '+n.replace(/\d+\.\d+/g,x=>map[x]??x)).replace(/\s+/g,'').replaceAll('∎','');
for(const e of authority.entries){
 for(const p of [e.path,e.original_path])if(sha(rf(p))!==(p===e.path?e.pinned_sha256:e.original_sha256))throw Error('Original or pin changed');
 if(!same([...e.consumers.map(c=>c.id)].sort(),[...review.inventory_authority.consumer_inventory_exact].sort()))throw Error('Consumer inventory mismatch');
 for(const c of e.consumers){
  const p=`items/${c.id}.md`,prior=review.exact_current_preimages[p],current=rf(p,'utf8');
  if(!prior||sha(prior.full_utf8_preimage)!==prior.raw_sha256_diagnostic_only)throw Error('Missing actual scientific preimage '+p);
  const a=parse(prior.full_utf8_preimage),b=parse(current),ad=structuredClone(a.data),bd=structuredClone(b.data);delete ad.dependency_level;delete bd.dependency_level;
  if(!same(ad,bd))throw Error('Unreviewed metadata change '+p);
  let proofMap=null;
  if(a.body!==b.body){
   proofMap=phase.step_maps[c.id];if(!proofMap)throw Error('Unreviewed body change '+p);
   const old=numberedProofSteps(prior.full_utf8_preimage),next=numberedProofSteps(current);if(old.length!==next.length)throw Error('Changed proof inventory');
   for(const step of old)if(normal(step.claim,proofMap)!==normal(next.find(x=>x.id===proofMap[step.id])?.claim??''))throw Error('Changed proof argument '+p);
   if(a.body.replace(sectionText(a.body,'Proof'),'')!==b.body.replace(sectionText(b.body,'Proof'),''))throw Error('Changed nonproof body '+p);
  }
  const fresh=review.eight_current_consumer_reviews.find(x=>x.id===c.id);if(!fresh||!fresh.decision.startsWith('compatible'))throw Error('Unresolved use');
  c.reason=fresh.current_use+' '+fresh.compatibility;
  controlled.push({id:c.id,scientific_preimage_sha256:prior.raw_sha256_diagnostic_only,current_sha256:sha(current),metadata_only_dependency_level:a.data.dependency_level!==b.data.dependency_level,proof_step_map:proofMap,argument_tokens_preserved:true});
 }
}
wf(archive,rf(authorityPath),{flag:'wx'});
wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),scope:'Refresh exact original-maintenance authority after same-scientist actual eight-consumer reread and controlled root metadata/formatting. No mathematical interface, imported bytes or original bytes changed.',old_authority:{path:archive,sha256:sha(rf(archive))},scientific_review:{path:reviewPath,sha256:sha(rf(reviewPath))},canonical_evidence:{path:phasePath,sha256:sha(rf(phasePath))},controlled_consumer_changes:controlled,complete:true,gates_attempted:0},null,2)+'\n',{flag:'wx'});
for(const p of Object.keys(authority.frontier)){const h=sha(rf(p));authority.frontier[p]=h;authority.inputs[p]=h;}
for(const e of authority.entries){for(const c of e.consumers){const p=`items/${c.id}.md`,h=sha(rf(p));e.consumer_sha256[c.id]=h;authority.inputs[p]=h;}for(const p of [reviewPath,phasePath,out]){const h=sha(rf(p));e.evidence.push({path:p,sha256:h});authority.inputs[p]=h;}}
authority.reason+=' Current Step 2 consumer compatibility is recorded by the same scientific reviewer, with exact final root-controlled formatting and dependency-level comparison; prior evidence and authority bytes are archived.';
wf(authorityPath,JSON.stringify(authority,null,2)+'\n');
console.log(JSON.stringify({consumers:controlled.length,originals_changed:0,pins_changed:0,controlled_phase_maps:controlled.filter(x=>x.proof_step_map).length}));
