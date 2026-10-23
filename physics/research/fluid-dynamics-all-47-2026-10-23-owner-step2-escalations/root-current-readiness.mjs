import {readFileSync as rf,writeFileSync as wf,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {loadStep1Record} from '../../tools/physics-support/frontier-snapshot.mjs';
import {recordStep1Batch,step1Decision,checkStep1} from '../../tools/physics-support/step1-decisions.mjs';
import {runPages,orderedItems} from '../../tools/physics-support/item-dependency-levels.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,out=`${base}/current-readiness-integration.json`,read=p=>JSON.parse(rf(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(out))throw Error('Already integrated');
for(const p of ['root-contract-adoption.json','current-boundary-integration.json','fact-attribution-metadata-integration.json','final-current-precheck.json'])if(!existsSync(`${base}/${p}`))throw Error('Missing completion evidence');
const state=read(`.physics-autopilot/${run}/state.json`);if(!state.paused||Object.values(state.dispatches).some(d=>d.startedAt&&!d.endedAt))throw Error('Native writers not drained');
const s=loadStep1Record(process.cwd(),run),subjects=[],retained=[],archive=`${base}/before-current-readiness`;mkdirSync(archive,{recursive:false});
for(const entry of orderedItems(runPages(process.cwd(),run))){
 const d=step1Decision(s,entry.id);if(d.closed){retained.push(entry.id);continue;}
 if(d.row?.decision!=='ready'&&entry.id!=='cor-fd-uq-observable-budget-guarantees')throw Error('Unresolved prior authoring disposition '+entry.id);
 const path=`research/${run}-step1-${entry.id}.json`;let previous=null;
 if(existsSync(path)){const bytes=rf(path),target=`${archive}/${path.replaceAll('/','__')}`;wf(target,bytes,{flag:'wx'});previous={path:target,sha256:sha(bytes)};}
 subjects.push({entry,previous,dependencies:[...new Set([...(d.row?.dependencies??[]),...entry.item.deps??[]])],prior_reason:d.row?.reason??null});
}
const records=recordStep1Batch(process.cwd(),{run,owner:true,records:subjects.map(({entry,previous,dependencies})=>({item:entry.id,decision:'ready',dependencies,reason:entry.id==='cor-fd-uq-observable-budget-guarantees'?`Root records completed current draft authoring of the six-step direct corollary, truthfully AI-generated statement/proof, with no incoming logical dependency or algorithm discharge use. Actual same-scientist guarantee worksheet, classification supplement, current eight boundary cases and current source/contract transcription are in ${base}. Exact conditional callback, finite IID, bias/variance, oracle and optional-AC Gaussian hypotheses are retained. This is authoring readiness only; independent proof review, gates and publication are not asserted.`:`Root retains the prior genuine authoring-ready disposition archived at ${previous.path} and binds current source and prerequisite inputs after the completed native Step2 repairs and same-scientist supplier/consumer resolutions in ${base}. Exact dependency/public mirrors, source classifications, full proof/Fact worksheets and actual individualized boundary reviews have been integrated. Canonical formatting preserves complete arguments, including the explicit positivity and Fact attributions. Native scope review and this root readiness do not substitute for later independent proof review, physical empirical validation, final gates or publication.`}))});
const fresh=loadStep1Record(process.cwd(),run),status=checkStep1(fresh);wf(out,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),subjects:subjects.map(({entry,previous,dependencies,prior_reason})=>({id:entry.id,level:entry.level,previous,dependencies,prior_reason})),retained,records:records.map(r=>({id:r.item,sha256:r.sha256})),step1:status,complete:status.closed,gates_attempted:0},null,2)+'\n',{flag:'wx'});
if(!status.closed)throw Error('Current readiness still open');console.log(JSON.stringify({rebound:records.length,retained:retained.length,items:status.items,ready:status.ready,closed:status.closed}));
