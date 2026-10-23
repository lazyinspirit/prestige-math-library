import fs from 'node:fs';import {createHash} from 'node:crypto';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step3-escalations`,read=p=>JSON.parse(fs.readFileSync(p)),sha=x=>createHash('sha256').update(x).digest('hex'),C=x=>Array.isArray(x)?x.map(C):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,C(x[k])])):x,H=x=>sha(JSON.stringify(C(x))),changes=[];
for(let b=1;b<=47;b++){
 const path=`research/${run}-alpha-batch-${b}-3a-decisions.json`,d=read(path),s=read(`research/${run}-step3-scope-${b}.json`),pages=read(`research/${run}-batch-${b}.pages.json`),contracts=read(`research/${run}-batch-${b}.proof-contracts.json`).contracts,post=read(`research/${run}-step3-hash-${b}-post.json`);
 for(const x of d.decisions){if(x.verdict!=='accepted_repair'||!x.obligation.startsWith('touched:'))continue;
  const p=pages.find(p=>p.items.some(i=>i.id===x.id)),row=p.items.find(i=>i.id===x.id),current={item_sha256:sha(fs.readFileSync(`items/${x.id}.md`)),manifest_sha256:H({...row,__step4_page_id:p.id}),contract_sha256:H(contracts[x.id]??null)},old=post.hashes[x.id];
  if(H(current)===H(old))continue;
  const {risk_review,...without}=contracts[x.id]??{};if(old.item_sha256===current.item_sha256&&old.manifest_sha256===current.manifest_sha256&&H(without)===old.contract_sha256)continue;
  changes.push({path,id:x.id,obligation:x.obligation,before:x,source_changed:old.item_sha256!==current.item_sha256,manifest_changed:old.manifest_sha256!==current.manifest_sha256,contract_changed:old.contract_sha256!==current.contract_sha256,current_carrier:current,reader_carrier:old});
 }
}
fs.writeFileSync(`${base}/current-decision-amendment-proposal.json`,JSON.stringify({run,mode:'read-only actual currency comparison; no verdict or seal applied',changes},null,2)+'\n');console.log(changes.map(({id,source_changed,manifest_changed,contract_changed})=>({id,source_changed,manifest_changed,contract_changed})));
