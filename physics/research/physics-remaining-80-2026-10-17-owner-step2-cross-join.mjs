// Join already-reviewed supplier uses; absent declarations are historical, not live edges.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {join,dirname} from 'node:path';
import {createHash} from 'node:crypto';
import {collect,refresh} from '../../tools/physics-support/frontier-dependency-ledger.mjs';
const root=fileURLToPath(new URL('../',import.meta.url)),run='physics-remaining-80-2026-10-17',out=join(root,'research',run+'-owner-step2-cross-join');
const sha=x=>createHash('sha256').update(x).digest('hex'),read=p=>readFileSync(join(root,p),'utf8');
if(existsSync(join(out,'completion.json')))throw Error('Preserve completed join');
const state=JSON.parse(read('.physics-autopilot/'+run+'/state.json'));
if(state.stage!=='2-scope-review'||Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Native writer active');
const evidenceByBatch={
 '7':['owner-step2-batch7-8-classical-final.json','Local C1 Maxwell stress uses only the finite coordinate connection conventions; no smooth-field or Einstein premise is imported.'],
 '8':['owner-step2-batch7-8-classical-final.json','The finite C3 metric/C2 field development meets the local C1 stress identity hypotheses in L2 and the subsidiary chain.'],
 '12':['owner-step2-batch11-12-classical-final.json','The explicit C3/C2 classical domain and relative compact first variations supply the postulate and evolution theorem, including the finite branch.'],
 '17':['owner-step2-batch20-cycle1/final-report.json','The positive-root derivative is applied at a strictly positive radicand in F4; the original quantitative and matrix repairs are retained.'],
 '19':['owner-step2-batch16-19-local-potential-cycle1/resolution.json','Closed smooth fields admit the supplied star-shaped local radial primitive. Only short chart-local action segments are used; no global exactness assumption.'],
 '20':['owner-step2-batch20-cycle1/final-report.json','The positive constants and H>0 give the declared square root/reciprocal domain, and the exact conformastatic connection supplies the current calculation.'],
 '21':['owner-step2-batch21-current-use-addendum/report.json','Clause (e) fixes the nondegenerate coordinate vocabulary used in the invariant/curvature statements. The reviewed formulas and their domain are retained.'],
 '23':['owner-step2-batch23-current-forms-round1.json','F5 is applied after choosing j=-div(F)/mu0; the field is closed and the nonzero divergence is the stated witness.'],
 '24':['owner-step2-charge-sign-kn-definition/report.json','The full-sphere exterior supplies the smooth electric seed and global one-form used in F8. The independent finite-shell/Stokes flux proof is retained.'],
 '27':['owner-step2-csm27-consumers/resolution.json','The postulate adopts the phase-reference normalization and species factor explicitly, with dimensionless reference and separate vacuum convention.'],
 '34':['owner-step2-held34-cycle1/report.json','The physical counting premise supplies the indistinguishable one-species labelled lift and the uniformly selected particle interpretation; it is adopted, not deduced.'],
 '43':[null,'Read current consumer F4 and Verification 3.1 against the actual quasi-local Definition: norm completion makes local observables dense. Countable Choice is carried by A1; bounded products and state continuity extend cyclicity. This is a scoped use check, not supplier proof approval.'],
 '49':['owner-step2-qsm47-49-cycle1/report.json','The GKSL sufficient theorem supplies density-state evolution on the mathematical continuation. Physical applicability remains restricted to the finite resolved interval.'],
};
const d=collect(root,run),missing=d.edges.filter(x=>!x.reviews.length);
if(missing.length!==19)throw Error('Unexpected missing-edge scope');
const files=new Map(),changes=[],reports=[];
for(const edge of missing){
 const cfg=evidenceByBatch[edge.consumer_batch];if(!cfg)throw Error('Missing scientific evidence '+edge.consumer_batch);
 const evidence=cfg[0]?'research/'+run+'-'+cfg[0]:null;
 if(evidence){if(!existsSync(join(root,evidence)))throw Error('Missing report '+evidence);reports.push({path:evidence,sha256:sha(read(evidence))});}
 const path='research/'+run+'-batch-'+edge.consumer_batch+'.cross-batch-dependencies.json';
 if(!files.has(path)){const before=read(path);files.set(path,{before,rows:JSON.parse(before)});}
 files.get(path).rows.push({kind:edge.kind,consumer:edge.consumer,supplier:edge.supplier,status:'verified',evidence:cfg[1]+(evidence?' Actual scientific disposition: '+evidence+'.':'')+' Current declaration joined by owner; draft status and independent review obligations remain.'});
}
// Preserve old edge rows, but explicitly distinguish removed declarations from live obligations.
let removed=0;
for(const edge of d.edges.filter(x=>!x.declarations.length)){
 const path='research/'+run+'-batch-'+edge.consumer_batch+'.cross-batch-dependencies.json';
 if(!files.has(path)){const before=read(path);files.set(path,{before,rows:JSON.parse(before)});}
 const row=files.get(path).rows.find(r=>r.kind===edge.kind&&r.consumer===edge.consumer&&r.supplier===edge.supplier);
 if(!row)throw Error('Missing historical row');if(row.status==='removed')continue;
 row.evidence='Owner declaration reconciliation: this historical edge is absent from BOTH current manifest and source deps/justified_by/forward_refs (or page requires). It is removed as a declared obligation; this does not certify or suppress contextual uses. Previous '+row.status+' disposition: '+row.evidence;
 row.status='removed';removed++;
}
const current=collect(root,run);if(JSON.stringify(current)!==JSON.stringify(d))throw Error('Concurrent declaration/review mutation');
mkdirSync(join(out,'before'),{recursive:true});
for(const [path,{before,rows}] of files){if(read(path)!==before)throw Error('Concurrent review mutation '+path);const archive=join(out,'before',path);mkdirSync(dirname(archive),{recursive:true});writeFileSync(archive,before,{flag:'wx'});const after=JSON.stringify(rows,null,2)+'\n';writeFileSync(join(root,path),after);changes.push({path,before_sha256:sha(before),after_sha256:sha(after)});}
const ledger='research/'+run+'-cross-batch-dependencies.json';writeFileSync(join(out,'ledger.before.json'),read(ledger));refresh(root,run,true);
writeFileSync(join(out,'completion.json'),JSON.stringify({run,at:new Date().toISOString(),qualification:'Exact reviewed-use and declaration bookkeeping; no blanket verification or proof approval. Open conditional-use rows remain open.',added_use_rows:missing.length,removed_declarations:removed,files:changes,reports:[...new Map(reports.map(r=>[r.path,r])).values()],ledger_sha256:sha(read(ledger))},null,2)+'\n');
console.log(JSON.stringify({added_use_rows:missing.length,removed_declarations:removed,changed_files:changes.length}));
