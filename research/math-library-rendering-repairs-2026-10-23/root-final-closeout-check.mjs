import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { createRequire } from 'node:module';
import { isDeepStrictEqual } from 'node:util';
import { recordedPublishedRepair } from '../../tools/published-repair-policy.mjs';
import { itemHashGuard } from '../../tools/item-hash.mjs';
import { beforeMetadataWithApprovedRecovery } from './frontmatter-recovery.mjs';
const D='research/math-library-rendering-repairs-2026-10-23';
const yaml=createRequire(path.resolve('../prestige-intelligence/web/package.json'))('yaml');
const q=JSON.parse(fs.readFileSync(D+'/queue.json')).entries;
const v=JSON.parse(fs.readFileSync(D+'/visual-confirmations.json'));
const prior=JSON.parse(fs.readFileSync(D+'/root-final-receipt-visual-integrity-20261024.json'));
const previous=new Map(prior.rows.map(r=>[r.id,r]));
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const parse=s=>yaml.parse(s.match(/^---\n([\s\S]*?)\n---\n/)[1]);
const errors=[],statusChanges=[],metadataViolations=[],exceptions=[],recoveries=[],policyFailures=[],visualFailures=[],reportFailures=[],rows=[];
let reused=0,fresh=0;
for(const e of q){
 try {
  const before=fs.readFileSync(e.before_file,'utf8'),current=fs.readFileSync(e.source,'utf8');
  if(!isDeepStrictEqual(before.match(/^status:.*$/gm),current.match(/^status:.*$/gm)))statusChanges.push(e.id);
  const rr=beforeMetadataWithApprovedRecovery(process.cwd(),D,'math-library-rendering-repairs-2026-10-23',e,before,parse),b=rr.metadata,c=parse(current);
  if(rr.recovery)recoveries.push(e.id);
  for(const k of new Set([...Object.keys(b),...Object.keys(c)])){
   if(['title','verification'].includes(k)||isDeepStrictEqual(b[k],c[k]))continue;
   const a=D+'/mathematical-acceptances/'+e.id+'.json';
   if(e.id==='lem-blowing-up-a-regular-point-is-a-contraction'&&k==='deps'&&fs.existsSync(a))exceptions.push({id:e.id,key:k,acceptance:a});
   else metadataViolations.push({id:e.id,key:k});
  }
  const report=JSON.parse(fs.readFileSync(D+'/adjudications/'+e.id+'.json'));
  if(!report.findings?.length||report.findings.some(f=>!f.defect_type||!f.verdict))reportFailures.push(e.id);
  if(!e.changed)continue;
  const rp=D+'/receipts/'+e.id+'.json',rt=fs.readFileSync(rp,'utf8'),old=previous.get(e.id);
  let policy;
  if(old?.ok&&old.source_raw_sha256===sha(current)&&old.receipt_raw_sha256===sha(rt)){policy={ok:true,method:'prior full policy validation plus exact current source/receipt hashes'};reused++;}
  else{policy={...recordedPublishedRepair(process.cwd(),e.id,current,rp),method:'fresh actual policy call'};fresh++;}
  if(!policy.ok)policyFailures.push({id:e.id,...policy});
  const vis=v[e.id],ps=vis?.viewed_tiles?.length?vis.viewed_tiles:vis?.screenshots;
  let visualOk=!!vis&&vis.content_sha256===itemHashGuard(current)&&!!vis.reviewer&&!!vis.checked_at&&!!vis.scope&&!!ps?.length;
  for(const p of ps??[])if(!fs.existsSync(p.startsWith('research/')?p:'research/'+p))visualOk=false;
  if(vis?.quality_evidence&&!fs.existsSync(vis.quality_evidence))visualOk=false;
  if(!visualOk)visualFailures.push(e.id);
  rows.push({id:e.id,policy,visualOk,source_raw_sha256:sha(current),receipt_raw_sha256:sha(rt)});
 }catch(x){errors.push({id:e.id,error:x.message});}
}
const out={checked_at:new Date().toISOString(),scope:'Final complete1853 inventory: raw publication status and protected parsed metadata against frozen originals, canonical defect-type/verdict presence, all changed receipt policy and compatible content-bound visual review records. 1670 prior actual policy validations reused only when current raw source AND receipt hashes match; otherwise fresh actual policy call. No new image/proof/source-text review claimed by this script.',queue_counts:q.reduce((a,e)=>(a[e.status]=(a[e.status]||0)+1,a),{}),total:q.length,changed:rows.length,unchanged:q.filter(e=>!e.changed).length,policy_reused_exact_hashes:reused,policy_fresh_actual_calls:fresh,visual_confirmation_count:Object.keys(v).length,statusChanges,metadataViolations,exceptions,syntax_recovery_comparisons:recoveries,policyFailures,visualFailures,reportFailures,errors,rows};
fs.writeFileSync(D+'/root-final-1853-closeout-integrity-20261024.json',JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify({...out,rows:undefined,syntax_recovery_comparisons:recoveries.length}));
