// Bind the actual reviewed additive prerequisite repair, preserving native history.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {validateDriftOwnerResolutions} from '../../tools/physics-support/drift-owner-resolutions.mjs';
import {split,yaml} from '../../tools/physics-support/pathway-lib.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17';
const out=join(root,'research',run+'-owner-gate52-drift-54'),read=p=>readFileSync(join(root,p)),json=p=>JSON.parse(read(p)),sha=x=>createHash('sha256').update(x).digest('hex');
if(existsSync(join(out,'completion.json')))throw Error('Preserve completed amendment');
const adoptionPath='research/'+run+'-owner-structural-gate52-adoption/completion.json',adoption=json(adoptionPath);
const receiptPath='research/'+run+'-drift-owner-resolutions.json',beforeReceipt=read(receiptPath),receipt=JSON.parse(beforeReceipt);
const planRow=adoption.changed_files.find(r=>r.path==='research/plan-spec.json');if(!planRow)throw Error('Missing actual plan repair');
const oldRaw=read(planRow.before_archive),currentRaw=read('research/plan-spec.json');
if(sha(oldRaw)!==planRow.before_sha256||receipt.plan_sha256!==planRow.before_sha256||sha(currentRaw)!==planRow.after_sha256)throw Error('Broken approved-plan binding chain');
const oldPlan=JSON.parse(oldRaw),plan=JSON.parse(currentRaw),pages=new Map(plan.pages.map(p=>[p.id,p]));
let added=0,changedPages=0;
const projected=structuredClone(plan);
if(oldPlan.pages.length!==plan.pages.length)throw Error('Page scope changed');
for(let i=0;i<oldPlan.pages.length;i++){
 const old=oldPlan.pages[i],current=projected.pages[i];if(old.id!==current.id)throw Error('Plan reordered');
 const a=old.requires??[],b=current.requires??[];
 if(a.some((id,j)=>b[j]!==id))throw Error('Prerequisite removed or reordered');
 if(b.length>a.length){if(old.kind!=='A')throw Error('Unapproved example-plan repair');changedPages++;added+=b.length-a.length;}
 if(old.requires===undefined)delete current.requires;else current.requires=old.requires;
}
if(JSON.stringify(oldPlan)!==JSON.stringify(projected)||added!==20||changedPages!==16)throw Error('Not the exact additive-only approved repair');
const changedInputs=[];
for(const [path,before] of Object.entries(receipt.inputs)){
 const after=sha(read(path));if(before===after)continue;
 if(path!=='research/plan-spec.json')throw Error('Unreviewed changed drift input '+path);
 changedInputs.push({path,before,after});
}
if(changedInputs.length!==1)throw Error('Unexpected drift change scope');
const obligations=[];
for(const row of receipt.resolutions){
 const page=pages.get(row.page);if(!page||page.kind!=='A')throw Error('Unknown original drift subject');
 const owners=[];for(let b=1;b<=80;b++)owners.push(...json('research/'+run+'-batch-'+b+'.pages.json').filter(p=>p.id===row.page));
 if(owners.length!==1||JSON.stringify(owners[0].requires)!==JSON.stringify(page.requires))throw Error('Canonical/manifest mismatch');
 const path='library/'+page.category+'/'+page.id+'.md',carrier=yaml().parse(split(read(path).toString()).fm);
 if(carrier.requires!==undefined&&JSON.stringify(carrier.requires)!==JSON.stringify(page.requires))throw Error('Carrier prerequisite mismatch');
 if(row.requires.some(id=>!page.requires.includes(id)))throw Error('Prior obligation removed');
 for(const id of page.requires)if(!pages.has(id)||!(Number(pages.get(id).order)<Number(page.order)))throw Error('Invalid prerequisite order');
 obligations.push({page:row.page,previous_requires:row.requires,current_requires:page.requires,carrier_requires:carrier.requires??null,carrier_binding:{path,sha256:sha(read(path))}});row.requires=page.requires;
}
const at=new Date().toISOString(),amendmentPath='research/'+run+'-owner-gate52-current-drift-obligations.json';
const amendment={run,at,qualification:'Owner current planning obligation reconciliation after actual native validate-plan errors and independently checked metadata-only prerequisite repair. Original native observations and prior resolutions preserved; no new scientific review or acceptance invented.',adoption:{path:adoptionPath,sha256:sha(read(adoptionPath))},approved_plan_transition:{before:planRow.before_sha256,after:planRow.after_sha256,additive_edges:20,changed_A_pages:16,all_other_plan_content_preserved:true},changed_inputs:changedInputs,current_obligations:obligations};
if(!read(receiptPath).equals(beforeReceipt)||sha(read('research/plan-spec.json'))!==planRow.after_sha256)throw Error('Concurrent planning mutation');
mkdirSync(out,{recursive:true});writeFileSync(join(out,'drift-owner-resolutions.before.json'),beforeReceipt);
writeFileSync(join(root,amendmentPath),JSON.stringify(amendment,null,2)+'\n');
receipt.inputs['research/plan-spec.json']=planRow.after_sha256;receipt.inputs[adoptionPath]=sha(read(adoptionPath));receipt.inputs[amendmentPath]=sha(read(amendmentPath));receipt.plan_sha256=planRow.after_sha256;receipt.recorded_at=at;
for(const row of receipt.resolutions){row.evidence.push(amendmentPath);row.reason+=' Current metadata-only prerequisite repair and current exact canonical/manifest/carrier obligations are reconciled in '+amendmentPath+'.';}
writeFileSync(join(root,receiptPath),JSON.stringify(receipt,null,2)+'\n');
const validation=validateDriftOwnerResolutions(root,run);if(validation.resolved.size!==4)throw Error('Original four resolutions not current');
const completion={run,at,original_subjects:4,scope_pairs:80,scope_pages:160,plan_sha256:planRow.after_sha256,changed_planning_inputs:1,metadata_only:true,native_observations_unchanged:true,gate_attempt:false};
writeFileSync(join(out,'completion.json'),JSON.stringify(completion,null,2)+'\n');console.log(JSON.stringify(completion));
