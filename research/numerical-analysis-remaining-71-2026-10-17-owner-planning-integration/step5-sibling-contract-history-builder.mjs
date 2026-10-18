// Root-only concrete receipt preparation/recording. Not executed by its author.
import {readFileSync,writeFileSync,existsSync,mkdirSync} from 'node:fs';
import {resolve,join,relative} from 'node:path';
import {createHash} from 'node:crypto';
import {recordSiblingContractHistory,validateSiblingContractHistory} from '../../tools/step5-sibling-contract-history.mjs';
const root=process.cwd(),run='numerical-analysis-remaining-71-2026-10-17';
const D=`research/${run}-owner-planning-integration`,base=`${D}/step5-sibling-history-archives`;
const sha=b=>createHash('sha256').update(typeof b==='string'?b:JSON.stringify(b)).digest('hex');
const need=(v,m)=>{if(!v)throw Error(m);};
const mode=process.argv[2];need(['--prepare','--record'].includes(mode),'Root must choose --prepare or --record at paused drained own5.9.');
const bytes=p=>readFileSync(resolve(root,p),'utf8'),read=p=>JSON.parse(bytes(p));
const statePath=`.autopilot/${run}/state.json`,stateBytes=bytes(statePath),state=JSON.parse(stateBytes);
need(state.run===run&&state.stage==='5.9-repair'&&state.paused===true
 &&Object.values(state.dispatches??{}).every(r=>!r.startedAt||Boolean(r.endedAt)),'Not paused/drained own5.9');
const carrierPath=`research/${run}-batch-11.proof-contracts.json`;
const oldPath=`${D}/step5-gate-u3-batch11-contracts-recovered.json`;
const oldBytes=bytes(oldPath),currentBytes=bytes(carrierPath);
need(sha(oldBytes)==='bd6d8465591230285e7e84adeb91c06520764eb10652dd9e558e5f5746fae84b','Recovered native u3 hash changed');
need(sha(currentBytes)==='4d4ee4481add3ff2f32679f5e17d4ec9e44bb1f039e94006eae27953592297a4','Actual native u2 endpoint changed; investigate rather than refresh');
const packPath=`research/${run}-step5-v2/gate-1.json`,pack=read(packPath),bindings={};
const bind=p=>{bindings[p]=sha(bytes(p));return p;};
const save=(p,b)=>{mkdirSync(resolve(root,base),{recursive:true});if(existsSync(resolve(root,p)))need(bytes(p)===b,'Immutable archive conflict '+p);else writeFileSync(resolve(root,p),b,{flag:'wx'});return bind(p);};
const creation=save(`${base}/creation-state-${sha(stateBytes)}.json`,stateBytes);
const currentArchive=save(`${base}/batch11-${sha(currentBytes)}.json`,currentBytes);bind(oldPath);bind(packPath);
for(const unit of ['3','2']){
 const label=`step5-v2-gate-r1-u${unit}`,stem=`research/${run}-dispatch/alpha-repair-${label}`;
 bind(`research/${run}-step5-v2/${label}.json`);
 const result=read(bind(`${stem}.result.json`));
 for(const suffix of ['result.json','log','prompt.md'])bind(`${stem}.attempt-${result.attempt}.${suffix}`);
}
const id='lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence',sourceArchives={};
for(const subject of [...pack.assignments['3'],id])sourceArchives[subject]=save(`${base}/${subject}.md`,bytes(`items/${subject}.md`));
const payload={version:1,kind:'owner-native-sibling-contract-history',run,phase:'gate',round:1,
 origin_repo_root:root,authorized_by:'owner',owner_identity:'/root',historical_only:true,current_review_granted:false,native_execution_coverage_adopted:false,
 recorded_at:new Date().toISOString(),reason:'Exact native u3 batch11 supporting bytes precede native u2 completion in the same gate wave. Recovered full old bytes match the original pin. Only the disjoint assigned Gaussian boundary evidence and missing risk review changed; both native metadata-only reports and source guards remain authentic. No mathematical review or current acceptance is added.',
 creation_state:creation,bindings,carriers:[{path:carrierPath,archive:oldPath,original_sha256:sha(oldBytes),current_archive:currentArchive,current_sha256:sha(currentBytes),origin_unit:'3',successor_unit:'2',source_archives:sourceArchives,
 metadata_deltas:[{id,field:'risk_review'},{id,field:'boundaries/0/evidence'}]}]};
validateSiblingContractHistory(root,run,{...payload,sha256:sha(payload)});
need(bytes(statePath)===stateBytes&&bytes(carrierPath)===currentBytes,'Native recording boundary changed');
const request=`${D}/step5-sibling-contract-history-root-request-${sha(payload)}.json`;
if(!existsSync(resolve(root,request)))writeFileSync(resolve(root,request),JSON.stringify(payload,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify(mode==='--record'?recordSiblingContractHistory(root,run,payload):{request,prepared_only:true,native_receipt_written:false},null,2));
