// Root-executed only. This helper never invokes a validator, gate or ledger refresh.
import { readFileSync, writeFileSync, mkdirSync, renameSync, lstatSync, realpathSync } from 'node:fs';
import { dirname, resolve, relative, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createHash, randomUUID } from 'node:crypto';
import { isDeepStrictEqual as same } from 'node:util';
const here=dirname(fileURLToPath(import.meta.url)),root=resolve(here,'../../..'),run='fluid-dynamics-all-47-2026-10-23';
const {yaml,split}=await import(pathToFileURL(join(root,'tools/physics-support/pathway-lib.mjs'))),Y=yaml();
const args=process.argv.slice(2),apply=args.includes('--apply'),check=(ok,why)=>{if(!ok)throw Error(why);};
check(args.includes('--stage')!==apply,'Use --stage OR --apply --root-reviewed --writers-drained');
if(apply)for(const flag of ['--root-reviewed','--writers-drained'])check(args.includes(flag),`Missing ${flag}`);
const proposal=JSON.parse(readFileSync(join(here,'proposal.json'))),hash=bytes=>createHash('sha256').update(bytes).digest('hex');
check(proposal.version===1&&proposal.run===run&&proposal.operations.length===11,'Wrong reviewed prerequisite proposal');
function guarded(path){const full=resolve(root,path);check(!relative(root,full).startsWith('..')&&lstatSync(full).isFile()&&realpathSync(full)===full,`Not regular/local: ${path}`);const bytes=readFileSync(full);check(hash(bytes)===proposal.preimage_guards[path],`Stale exact input ${path}; Root must reconcile before applying`);return bytes;}
for(const path of Object.keys(proposal.preimage_guards))guarded(path);
const before=new Map(),staged=new Map(),pages=new Map([
 ['fd-f01',{batch:'3',path:'library/fluid-dynamics/fd-f01.md'}],
 ['fd-mf02',{batch:'8',path:'library/fluid-dynamics-mathematics/fd-mf02.md'}],
 ['fd-s01',{batch:'17',path:'library/fluid-dynamics-mathematics/fd-s01.md'}],
]);
const allowedReviewAdds=new Set([
 'post-fd-ideal-gas-numerical-model\0def-fd-conservative-weak-form',
 'pthm-fd-local-momentum-balance-from-continuum\0lem-fd-transport-and-density',
 'pthm-fd-local-momentum-balance-from-continuum\0lem-fd-c1-domain-jordan-integrals',
]);
const key=row=>`${row.consumer}\0${row.supplier}`;
let requirementFields=0,reviewInputs=0,addedReviewRows=0,retiredReviewRows=0;
for(const op of proposal.operations){
 if(!before.has(op.path)){const bytes=guarded(op.path).toString();before.set(op.path,bytes);staged.set(op.path,bytes);}
 const text=staged.get(op.path);
 if(op.kind==='requires-field-append'){
  const home=pages.get(op.page);check(home,'Outside the exact three reviewed pages');
  check(op.path===`research/${run}-batch-${home.batch}.pages.json`||op.path==='research/plan-spec.json','Requires outside selected manifest/plan');
  check(op.pointer.at(-1)==='requires','Only requires may change');
  const doc=JSON.parse(text);let owner=doc;for(const part of op.pointer.slice(0,-1))owner=owner[part];
  check(owner.id===op.page&&same(owner.requires,op.before),'Requires/page preimage changed');
  check(Array.isArray(op.after)&&same(op.after.slice(0,op.before.length),op.before)
    &&same(op.after.slice(op.before.length),op.append)&&new Set(op.after).size===op.after.length,'Existing approved requires/order changed');
  const approved=proposal.minimal_page_edges.filter(row=>row.page===op.page).map(row=>row.require);
  check(same(op.append,approved),'Requires additions differ from the reviewed fifteen homes');
  owner.requires=structuredClone(op.after);staged.set(op.path,JSON.stringify(doc,null,2)+'\n');requirementFields++;
 }else if(op.kind==='page-frontmatter-requires-only'){
  const home=pages.get(op.page);check(home&&op.path===home.path&&text===op.before,'Page/raw preimage changed');
  const b=split(op.before),a=split(op.after),bm=Y.parse(b.fm),am=Y.parse(a.fm);
  check(b.body===a.body&&bm.page===op.page&&am.page===op.page,'Page identity/body changed');
  for(const field of new Set([...Object.keys(bm),...Object.keys(am)]))if(field!=='requires')check(same(bm[field],am[field]),`Unlicensed page field ${field}`);
  const approved=proposal.minimal_page_edges.filter(row=>row.page===op.page).map(row=>row.require);
  check(same(am.requires,[...bm.requires,...approved]),'Only exact appended prerequisite homes allowed');
  staged.set(op.path,op.after);requirementFields++;
 }else{
  check(op.kind==='consumer-batch-review-input'&&['21','31'].some(batch=>op.path===`research/${run}-batch-${batch}.cross-batch-dependencies.json`),'No other ledger/state/native artifact write permitted');
  check(same(JSON.parse(text),op.before)&&Array.isArray(op.after),'Review input preimage changed');
  check(op.after.length>=op.before.length,'Existing reviews removed');
  for(let i=0;i<op.before.length;i++){
   const b=op.before[i],a=op.after[i];
   if(same(a,b))continue;
   check(b.kind==='item'&&key(b)==='pthm-fd-local-momentum-balance-from-continuum\0def-fd-incompressible-newtonian-model'
    &&a.kind===b.kind&&key(a)===key(b)&&a.status==='removed'&&typeof a.evidence==='string'&&a.evidence.length>40,'Only the expressly retired logical review may change');
   for(const field of new Set([...Object.keys(b),...Object.keys(a)]))if(!['status','evidence'].includes(field))check(same(b[field],a[field]),'Original review identity/history field changed');
   retiredReviewRows++;
  }
  for(const row of op.after.slice(op.before.length)){
   check(row.kind==='item'&&row.status==='verified'&&allowedReviewAdds.has(key(row))&&typeof row.evidence==='string'&&row.evidence.length>40,'Unreviewed/arbitrary new frontier dependency');
   allowedReviewAdds.delete(key(row));addedReviewRows++;
  }
  staged.set(op.path,JSON.stringify(op.after,null,2)+'\n');reviewInputs++;
 }
}
check(requirementFields===9&&reviewInputs===2&&addedReviewRows===3&&retiredReviewRows===1&&allowedReviewAdds.size===0,'Exact reviewed change set incomplete');
const changed=[...staged].filter(([path,text])=>text!==before.get(path));
console.log(JSON.stringify({root_execution_only:true,apply,requires_additions:15,requires_fields:requirementFields,review_rows_added:addedReviewRows,logical_review_rows_removed:retiredReviewRows,changed_files:changed.map(([path])=>path),native_refresh_or_gate_invoked:false},null,2));
if(apply){
 const archive=join(here,'before-root-apply-'+randomUUID());mkdirSync(archive);
 for(const[path]of changed){const target=join(archive,path);mkdirSync(dirname(target),{recursive:true});writeFileSync(target,guarded(path),{flag:'wx'});}
 for(const path of Object.keys(proposal.preimage_guards))guarded(path);
 for(const[path,text]of changed){guarded(path);const target=resolve(root,path),temp=target+'.root-prerequisites-'+randomUUID();writeFileSync(temp,text,{flag:'wx'});renameSync(temp,target);}
 console.log(`Reviewed prerequisite fields/review inputs applied; raw preimages: ${archive}. Root separately owns native aggregate-ledger refresh and recertification.`);
}
