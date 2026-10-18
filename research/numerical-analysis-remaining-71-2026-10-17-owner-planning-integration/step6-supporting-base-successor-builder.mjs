// Root-only request preparation and explicit policy CAS. Not executed by author.
import {readFileSync,writeFileSync,existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {execFileSync} from 'node:child_process';
import {createHash} from 'node:crypto';
const root=process.cwd(),run='numerical-analysis-remaining-71-2026-10-17',D=`research/${run}-owner-planning-integration`;
const evidence=`${D}/step6-workflow-base-successor-evidence`,policyPath=`research/${run}-closeout-scope.json`;
const requestPath=`${D}/step6-supporting-base-successor-root-request.json`;
const workflow='tools/step5-workflow.mjs',guard='tools/autopilot/src/step6-cutover.mts',doc='tools/autopilot/STEP6-CUTOVER.md';
const workflowOwner=`${D}/step6-workflow-support-ownership-successor.json`,guardOwner=`${D}/step6-support-refresh-code-ownership.json`;
const sha=b=>createHash('sha256').update(typeof b==='string'||Buffer.isBuffer(b)?b:JSON.stringify(b)).digest('hex');
const bytes=p=>readFileSync(resolve(root,p)),read=p=>JSON.parse(bytes(p));
const ref=p=>({path:p,sha256:sha(bytes(p))}),need=(v,m)=>{if(!v)throw Error(m);};
const git=(...args)=>execFileSync('git',['--literal-pathspecs',...args],{cwd:root,env:{...process.env,LC_ALL:'C'},maxBuffer:256*1024*1024});
const expectedHead='fcda45a1e4cb069eb08521b2aadd5f7b80dcb4df',oldHead='0705ab1801aaa59cf2579154c9562efa31d879a6';
const commits=['4d0fb7b53d','c3dfd3f00b','fcda45a1e4'].map(c=>git('rev-parse',c).toString().trim());
const oldPolicyPath=`${evidence}/prior-closeout-policy.json`;
const oldPolicyBytes=bytes(oldPolicyPath),oldPolicy=JSON.parse(oldPolicyBytes),statePath=`.autopilot/${run}/state.json`;
const policyBefore=sha(bytes(policyPath));
const assertBase=()=>{
 need(git('rev-parse','HEAD').toString().trim()===expectedHead,'HEAD advanced; investigate rather than refresh proof');
 need(git('rev-parse',':'+workflow).toString().trim()==='0f92d93df92c983e99b1b9035c86438d248ca1ea','Workflow index is not exact committed foreign base');
 need(sha(bytes(workflow))==='81bd64606e1fa9219fb63647a0e8ae21581581f3174c095dcf9492565d51ec7a','Workflow own working patch changed');
 need(git('rev-list','--reverse',`${oldHead}..HEAD`).toString().trim().split('\n').join('\n')===commits.join('\n'),'Intervening history changed');
 const state=read(statePath);need(state.run===run&&state.stage==='6-finalize-v3'&&state.paused===true
  &&Object.values(state.dispatches??{}).every(d=>!d.startedAt||Boolean(d.endedAt)),'Requires paused/drained own failed6finalizer');
};
const patch=(a,b)=>{
 let diff;try{diff=git('diff','--no-ext-diff','--no-textconv','--no-renames','--no-index','--unified=0','--',resolve(root,a),resolve(root,b));}
 catch(e){if(e.status!==1||!Buffer.isBuffer(e.stdout))throw e;diff=e.stdout;}
 const lines=diff.toString().split('\n'),start=lines.findIndex(l=>l.startsWith('@@ '));need(start>=0,'Missing exact owned text patch');
 return lines.slice(start).map(l=>l.replace(/^@@ -\d+(?:,\d+)? \+\d+(?:,\d+)? @@/,'@@')).join('\n');
};
const mode=process.argv[2];need(['--prepare','--apply'].includes(mode),'Root must choose --prepare, review request, then --apply');
assertBase();
if(mode==='--prepare'){
 need(policyBefore===sha(oldPolicyBytes)&&oldPolicy.additional_paths.length===22,'Not the authentic original22policy; no blind replacement');
 const prepared=read(`.autopilot/${run}/step6-prepared.json`);
 need(prepared.source.tree[policyPath]===sha(Buffer.concat([Buffer.from('file\0'),oldPolicyBytes])),'Previous policy not pinned by actual native preparation');
 const previousRow=oldPolicy.additional_paths.find(r=>r.path===workflow),oldOwner=bytes(previousRow.ownership_evidence);
 need(prepared.source.tree[previousRow.ownership_evidence]===sha(Buffer.concat([Buffer.from('file\0'),oldOwner])),'Original ownership not native-preparation pinned');
 need(git('show',oldHead+':'+workflow).equals(bytes(`${evidence}/old-head.mjs`))
   &&git('show','HEAD:'+workflow).equals(bytes(`${evidence}/new-head.mjs`)),'Git base archives differ');
 need(sha(bytes(`${evidence}/old-owned-working.mjs`))===previousRow.sha256,'Old work not exact original ownership');
 const beforePatch=patch(`${evidence}/old-head.mjs`,`${evidence}/old-owned-working.mjs`);
 need(beforePatch===patch(`${evidence}/new-head.mjs`,workflow),'Owned patch changed relative to committed base');
 const owned=[workflow,guard,doc].map(path=>({path,sha256:sha(bytes(path))}));
 const proof={path:workflow,original_head:oldHead,current_head:expectedHead,checked_descendant_commits:commits,
  previous_policy:ref(oldPolicyPath),previous_working:ref(`${evidence}/old-owned-working.mjs`),original_base:ref(`${evidence}/old-head.mjs`),current_base:ref(`${evidence}/new-head.mjs`),
  unchanged_patch_sha256:sha(beforePatch),coverage_created:false,
  reason:'Only the exact original three sibling-history integration hunks remain uncommitted over the foreign committed created-prerequisite base. Actual old working bytes match the retained original owner receipt and native prepared policy; current HEAD and index include the independent foreign commit. No foreign working edits or old gate coverage are adopted.'};
 const receipts=[{path:workflowOwner,payload:{version:1,kind:'owner-reviewed-supporting-git-base-successor',run,authorized_by:'owner',owner_identity:'/root',recorded_at:new Date().toISOString(),coverage_created:false,owned_paths:[owned[0]],supporting_git_base_successors:[proof]}},
  {path:guardOwner,payload:{version:1,kind:'owner-step6-refresh-supporting-code-ownership',run,authorized_by:'owner',owner_identity:'/root',recorded_at:new Date().toISOString(),coverage_created:false,owned_paths:owned.slice(1),reason:'Focused native pre-ref supporting refusal and committed tooling-base successor proof; root authorizes exact new source/doc bytes after independent static review. Fresh native preparation and complete battery remain required.'}}];
 const policy=structuredClone(oldPolicy);policy.additional_paths=policy.additional_paths.map(r=>r.path===workflow?{...r,sha256:owned[0].sha256,ownership_evidence:workflowOwner}:r);
 for(const row of owned.slice(1))policy.additional_paths.push({...row,ownership_evidence:guardOwner,reason:'Native guarded failed-finalizer refresh support-only committed-base compatibility and exact documentation; no old battery reuse.'});
 need(policy.additional_paths.length===24,'Not exact24support policy');
 const request={version:1,run,kind:'unexecuted-root-supporting-base-successor-request',expected_head:expectedHead,expected_previous_policy_raw_sha256:policyBefore,owned_paths:owned,receipts,proposed_policy:policy,coverage_created:false};
 need(!existsSync(resolve(root,requestPath)),'Existing request; preserve/review rather than overwrite');writeFileSync(resolve(root,requestPath),JSON.stringify(request,null,2)+'\n',{flag:'wx'});
 console.log(JSON.stringify({request:requestPath,installed:false,unchanged_patch_sha256:proof.unchanged_patch_sha256},null,2));
}else{
 const request=read(requestPath);need(request.run===run&&request.expected_head===expectedHead&&request.expected_previous_policy_raw_sha256===policyBefore,'Root request/policy CAS differs');
 need(JSON.stringify(request.owned_paths.map(r=>r.path))===JSON.stringify([workflow,guard,doc])
  &&request.owned_paths.every(r=>sha(bytes(r.path))===r.sha256),'Reviewed source/doc bytes changed');
 need(JSON.stringify(request.receipts.map(r=>r.path))===JSON.stringify([workflowOwner,guardOwner])
  &&JSON.stringify(request.receipts[0].payload.owned_paths)===JSON.stringify(request.owned_paths.slice(0,1))
  &&JSON.stringify(request.receipts[1].payload.owned_paths)===JSON.stringify(request.owned_paths.slice(1)),'Request ownership scope changed');
 const currentPolicy=read(policyPath),expected=structuredClone(currentPolicy);
 expected.additional_paths=expected.additional_paths.map(r=>r.path===workflow?{...r,sha256:request.owned_paths[0].sha256,ownership_evidence:workflowOwner}:r);
 const additions=request.proposed_policy.additional_paths.slice(-2);
 need(additions.every((r,i)=>r.path===request.owned_paths[i+1].path&&r.sha256===request.owned_paths[i+1].sha256&&r.ownership_evidence===guardOwner),'New support entries changed');
 expected.additional_paths.push(...additions);
 need(expected.additional_paths.length===24&&JSON.stringify(expected)===JSON.stringify(request.proposed_policy),'Unrelated policy/shared bindings changed');
 need(request.receipts.length===2&&request.receipts.every(r=>!existsSync(resolve(root,r.path))),'Ownership receipt exists; preserve separate history');
 assertBase();need(sha(bytes(policyPath))===policyBefore,'Policy changed during CAS');
 for(const r of request.receipts)writeFileSync(resolve(root,r.path),JSON.stringify(r.payload,null,2)+'\n',{flag:'wx'});
 need(sha(bytes(policyPath))===policyBefore,'Policy changed before write; new immutable receipts retained');
 writeFileSync(resolve(root,policyPath),JSON.stringify(request.proposed_policy,null,2)+'\n');
 console.log(JSON.stringify({applied:true,supporting_paths:24,native_refresh_executed:false,fresh_preparation_and_battery_required:true},null,2));
}
