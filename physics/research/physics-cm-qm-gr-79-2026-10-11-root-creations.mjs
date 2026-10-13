import {readFileSync,writeFileSync,mkdirSync,readdirSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {itemHashGuard,itemHashJudge} from '../tools/physics-support/item-hash.mjs';
import {recordOwnerCreation} from '../tools/physics-support/auditor-created-items.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',root=process.cwd(),dir=`research/${run}-root-creations`;
mkdirSync(dir,{recursive:true});
const read=p=>JSON.parse(readFileSync(p,'utf8')),sha=x=>createHash('sha256').update(x).digest('hex');
const canonical=v=>Array.isArray(v)?v.map(canonical):v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,canonical(v[k])])):v;
const hash=v=>sha(JSON.stringify(canonical(v)));
const baseline=read(`research/${run}-step3-auditor-baseline.json`);
const entries=[
 {id:'lem-gr-tensor-bundle-coordinate-construction',batch:'66',author:'/root/physics_gr_supplier_owner',obligation:'reader:66:1',auth:`research/${run}-owner-escalation-investigations/gr-tensor-source-authorship.json`,escalation:`research/${run}-owner-escalation-investigations/gr-tensor-alpha66-decisions-before-amendment.json`},
 {id:'lem-gr-past-corresponding-boundary-restart',batch:'79',author:'/root/physics_alpha17_affine_owner',obligation:'reader:79:1',auth:`research/${run}-owner-escalation-investigations/alpha79-past-restart/authorship.json`,escalation:`research/${run}-owner-escalation-investigations/alpha79-past-restart/closure-before/${run}-alpha-batch-79-3a-decisions.json`},
];
for(const entry of entries){
 const pages=read(`research/${run}-batch-${entry.batch}.pages.json`),page=pages.find(p=>p.items.some(i=>i.id===entry.id)),item=page.items.find(i=>i.id===entry.id);
 const text=readFileSync(`items/${entry.id}.md`,'utf8'),contract=read(`research/${run}-batch-${entry.batch}.proof-contracts.json`).contracts[entry.id];
 const manifest=canonical({...item,__step4_page_id:String(page.id)});
 const carrier={item_sha256:sha(text),contract_sha256:hash(contract),manifest_sha256:hash(manifest)};
 const carriers={guard_sha256:itemHashGuard(text),judge_sha256:itemHashJudge(text),item_file_sha256:carrier.item_sha256,manifest_sha256:carrier.manifest_sha256,contract_sha256:carrier.contract_sha256,step3_subject_sha256:hash(carrier)};
 const assignment=`${dir}/${entry.id}-assignment.json`;
 writeFileSync(assignment,JSON.stringify({run,id:entry.id,author_identity:entry.author,owner_identity:'/root',owner_held_escalation:entry.obligation,assignment:'Root delegated the held supplier prerequisite and required a full local proof preserving the existing consumer claim',recorded_at:new Date().toISOString(),timeline:'Retrospective truthful assignment attestation; no original start timestamp invented'},null,2)+'\n');
 const sources=[{role:'assignment',path:assignment},{role:'escalation',path:entry.escalation},{role:'authorship',path:entry.auth}].map(s=>({...s,sha256:sha(readFileSync(s.path))}));
 const receipt={version:1,policy:'owner-spawned-step3-creation-v1',evidence_class:'owner-spawned-creation',run,step:3,id:entry.id,owner:true,owner_identity:'/root',author:{identity:entry.author,timeline:read(entry.auth).timeline},attested_at:new Date().toISOString(),reason:'Owner-spawned local prerequisite supplies the independently checked held consumer construction',owner_held_escalation:entry.obligation,baseline_sha256:sha(JSON.stringify(baseline)),page:page.id,batch:entry.batch,carriers,sources};
 const evidence=`${dir}/${entry.id}-receipt.json`;writeFileSync(evidence,JSON.stringify(receipt,null,2)+'\n');
 console.log(recordOwnerCreation(root,run,3,entry.id,evidence));
}
