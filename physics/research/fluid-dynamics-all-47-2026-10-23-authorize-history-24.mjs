import {readFileSync as rf,writeFileSync as wf,existsSync,renameSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {isDeepStrictEqual as same} from 'node:util';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}`,dir=`${base}-owner-step3-escalations/history24`,sha=b=>createHash('sha256').update(b).digest('hex'),read=p=>JSON.parse(rf(p));
const authPath=`${base}-step3-observed-current-history-24.json`;
if(existsSync(authPath))throw Error('Authority exists; preserve its history');
const state=read(`.physics-autopilot/${run}/state.json`);
if(Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt&&d.role!=='refuter'&&(d.covers??[]).map(String).includes('22')))throw Error('Producer22 source writer active');
const reportPath=`${base}-reader-findings-24.json`,nativePath=`${base}-dispatch/reader-reader-24.result.json`,report=read(reportPath),native=read(nativePath),oldPath=`${dir}/observed-prop-fd-bounded-evolving-pressure.md`,old=rf(oldPath,'utf8');
if(!same(JSON.parse(native.tail),report)||report.findings.length!==2||report.findings.some(f=>f.id!=='prop-fd-bounded-evolving-pressure'||f.observed_source.snapshot!=='current'||f.observed_source.item_sha256!==sha(old)))throw Error('Original native observations differ from reviewed evidence');
const archive=(from,to)=>{wf(to,rf(from),{flag:'wx'});return to;};
const reportArchive=archive(reportPath,`${dir}/original-reader-findings-24.json`),nativeArchive=archive(nativePath,`${dir}/original-native-reader-receipt-24.json`),currentArchive=archive('items/prop-fd-bounded-evolving-pressure.md',`${dir}/current-producer-at-split.md`);
const stem=`${base}-dispatch/reader-reader-24.attempt-${native.attempt}`,log=rf(stem+'.log','utf8');
const inputs={},ref=path=>{const sha256=sha(rf(path));inputs[path]=sha256;return{path,sha256};};
const oldRef=ref(oldPath),currentRef=ref(currentArchive),lines=old.split('\n');
const excerpts=[lines.find(l=>l.startsWith('The map $R$ is applied at each time.')),lines.find(l=>l.startsWith('3.1 If $\\pi_1'))];
if(excerpts.some(e=>!e||!log.includes(e)))throw Error('Missing actual logged proof excerpts');
const auth={version:1,run,batch:'24',kind:'observed-current-history',authorized_by:'/root',mathematical_acceptance:false,edit_permission:false,original_obligation_owed:true,reason:'Root independently recovered exact once-current producer bytes from native reader24 numbered output and verified the complete logged raw digest. Producer22 changed during concurrent review. Retain both exact original findings and observed_source unchanged; independently refute/adjudicate current producer and consumer before closure.',original_report:ref(reportArchive),native_receipt:ref(nativePath),native_receipt_archive:ref(nativeArchive),original_last_message:ref(stem+'.last-message.json'),native_log:ref(stem+'.log'),findings:report.findings.map((original_finding,index)=>({finding_index:index+1,producer_batch:'22',original_finding,observed_source:oldRef,current_source_at_split:currentRef,logged_excerpts:[excerpts[index]]})),inputs};
// Bind the real reconstruction provenance and original prefix without claiming
// either was the reader's complete source output.
ref(`${dir}/reconstruction-evidence.json`);ref(`${dir}/reconstruction-prefix-current.md`);
const tmp=authPath+'.root-tmp';wf(tmp,JSON.stringify(auth,null,2)+'\n',{flag:'wx'});renameSync(tmp,authPath);
console.log(JSON.stringify({original_findings_preserved:2,observed_sha256:oldRef.sha256,current_source_sha256:currentRef.sha256,source_writes:0,content_accepted:false}));
