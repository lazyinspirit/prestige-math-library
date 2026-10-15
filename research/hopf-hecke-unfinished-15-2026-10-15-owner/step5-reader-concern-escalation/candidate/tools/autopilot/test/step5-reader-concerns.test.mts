import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,existsSync,appendFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {prepareAdjudication,closeEmptyAdjudication,collect,prepareImpact,advanceImpact,certify,judge,
  workerLabel,workerReport,workflowDir,reviewContextHashes,digest,readerConcernSession} from '../../step5-workflow.mjs';
import {loadReaderConcerns,readerConcernPath} from '../../step5-reader-concerns.mjs';
import {itemHashGuard,itemHashJudge} from '../../item-hash.mjs';
import {MODELS} from '../../models.mjs';
import {step5Stages} from '../stages/mathlib.step5.mts';
const run='reader-fixture',reason='The current item has a concrete rank/level naming defect in its Given, while its claim and derivation remain correct.';
const json=(p:string,value:any)=>writeFileSync(p,JSON.stringify(value,null,2)+'\n');
const read=(p:string)=>JSON.parse(readFileSync(p,'utf8'));
const contextHasher=(root:string,ids:string[])=>new Map(ids.map(id=>[id,{item_sha256:itemHashJudge(readFileSync(join(root,'items',`${id}.md`),'utf8')),context_sha256:'a'.repeat(64)}]));
function fixture(){
  const root=mkdtempSync(join(tmpdir(),'reader-concern-'));
  const dir=workflowDir(root,run),dispatch=join(root,'research',`${run}-dispatch`),stateDir=join(root,'.autopilot',run);
  for(const path of [join(root,'items'),dir,dispatch,stateDir])mkdirSync(path,{recursive:true});
  const ids=['thm-reviewed-a','thm-reviewed-b','thm-consumer'];
  for(const id of ids)writeFileSync(join(root,'items',`${id}.md`),`---\nid: ${id}\nkind: theorem\nstatus: draft\ndeps: [${id==='thm-consumer'?'thm-reviewed-a':''}]\n---\n\n## Statement\nA correct claim.\n\n## Proof\n**Given:** The rank-two, one-box content sequences.\n\n1.1 Correct derivation. [given]\n\n2.1 Correct conclusion. [step 1.1] ∎\n`);
  const manifest=join(root,'research',`${run}-batch-1.pages.json`);
  json(manifest,[{id:'page',items:ids.map(id=>({id,deps:id==='thm-consumer'?['thm-reviewed-a']:[]}))}]);
  const ledger=join(root,'research',`${run}-judge.jsonl`);
  writeFileSync(ledger,ids.map(id=>JSON.stringify({id,model:MODELS.luna.id,...contextHasher(root,[id]).get(id),keep:true})).join('\n')+'\n');
  const initial=prepareAdjudication(root,run,'initial',1),initialPath=join(dir,'initial-1.json');
  const zero=closeEmptyAdjudication(root,run,'initial',1,'1',digest(initial));
  const zeroPath=workerReport(root,run,'initial',1,'1');
  const zeroResult=join(dispatch,'tool-step5-v2-empty-initial-r1-u1.result.json');
  json(zeroResult,{run,role:'tool',label:'step5-v2-empty-initial-r1-u1',covers:['1'],ok:true,written_by:'autopilot',ended_at:'2026-10-15T10:00:00Z'});
  json(join(stateDir,'state.json'),{run,stage:'5.1-adjudicate',paused:true,dispatches:{}});
  const document={batches:['1'],items_read:ids,concerns:ids.slice(0,2).map(id=>({id,concern:reason,severity:'presentation'}))};
  const digestPath=join(root,'research',`${run}-batch-1-step5-context.json`),readerPath=join(dispatch,'alpha-batch-read-1.result.json');
  json(digestPath,document);
  const reader={run,role:'alpha-batch-read',label:'1',covers:['1'],model:MODELS.sol61.id,provider_effort:'medium',attempt:1,evidence_tag:'.attempt-1',ok:true,ended_at:'2026-10-15T09:00:00Z'};
  json(readerPath,reader);json(join(dispatch,'alpha-batch-read-1.attempt-1.result.json'),reader);
  json(join(dispatch,'alpha-batch-read-1.attempt-1.last-message.json'),document);
  const ownerFile=join(root,'research','root-review.md');writeFileSync(ownerFile,reason+' The Example has r=2,n=1 and both proof steps use these parameters; no statement change is needed.');
  const entries=ids.slice(0,2).map((id,index)=>({id,batch:'1',concern_index:index,concern:document.concerns[index],before_guard_sha256:initial.before[id],owner_review:{reviewed_by:'root',confirmed_defect:true,reviewed_at:'2026-10-15T10:01:00Z',reason,source_excerpt:'The rank-two, one-box content sequences',proposed_replacement:'The level-two, rank-one, one-box content sequences',evidence_file:ownerFile}}));
  const bindings=Object.fromEntries([manifest,initialPath,zeroPath,zeroResult,digestPath,readerPath,join(dispatch,'alpha-batch-read-1.attempt-1.result.json'),join(dispatch,'alpha-batch-read-1.attempt-1.last-message.json'),ownerFile,...['frontier.json','baseline.json','step4-verdicts.json'].map(name=>join(dir,name))].map(path=>[path,digest(readFileSync(path,'utf8'))]));
  const admission={version:1,kind:'owner-confirmed-step4-reader-concerns',run,authorized_by:'owner',owner_identity:'/root',original_count:3,recorded_at:'2026-10-15T10:02:00Z',native_coverage_adopted:false,entries,bindings};
  json(readerConcernPath(root,run),admission);
  return {root,dir,dispatch,ids,initial,initialPath,zero,zeroPath,admission,close:()=>rmSync(root,{recursive:true,force:true})};
}
function report(f:any,pack:any){
  for(const unit of pack.units){
    const ids=pack.assignments[unit];
    json(workerReport(f.root,run,pack.phase,1,unit),{run,phase:pack.phase,round:1,unit,input_sha256:digest(pack),decisions:[],reviews:ids.map((id:string)=>({id,disposition:itemHashGuard(readFileSync(join(f.root,'items',`${id}.md`),'utf8'))===pack.before[id]?'unaffected':'repaired',...reviewContextHashes(f.root,[id])[id],reason,uncertain:false,source_urls:[],familiar:true})),created_items:[],downstream:[]});
    const session=readerConcernSession(f.root,run,pack.phase,1,unit);
    json(join(f.dispatch,`alpha-repair-${workerLabel(pack.phase,1,unit)}.result.json`),{run,role:'alpha-repair',label:workerLabel(pack.phase,1,unit),covers:[unit],ok:true,model:MODELS.sol61.id,provider_effort:'high',...(session.sessionHome?{session_home:session.sessionHome,session_id:session.resumeSession??`genuine-fixture-session-u${unit}`}:{})});
  }
}
test('accepted reader concerns pass genuine initial zero-work, owner review, certification and current Sol judging',()=>{
  const f=fixture();try{
    const initialBytes=readFileSync(f.initialPath,'utf8'),zeroBytes=readFileSync(f.zeroPath,'utf8');
    assert.equal(loadReaderConcerns(f.root,run,{requireCollection:false})?.entries.length,2);
    assert.ok(!existsSync(join(f.dir,'certification.json')));
    assert.throws(()=>loadReaderConcerns(f.root,run),/ENOENT/);
    const first=collect(f.root,run,'initial',1);
    assert.deepEqual(first.reviews,[]);assert.deepEqual(first.decisions,[]);
    const pack=prepareImpact(f.root,run,'impact-initial',1);
    assert.deepEqual(Object.values(pack.assignments).flat().sort(),f.ids.slice(0,2));
    assert.deepEqual(pack.seeds,[]);assert.deepEqual(pack.impacts,[]);assert.equal(pack.reader_concerns.length,2);
    assert.ok(readFileSync(workerReport(f.root,run,pack.phase,1,'1').replace(/\.json$/,'.task.md'),'utf8').includes('not judge rejections'));
    assert.throws(()=>certify(f.root,run,'impact-initial',1,{contextHasher}),/ENOENT|finish before certification/);
    for(const id of f.ids.slice(0,2)){
      const path=join(f.root,'items',`${id}.md`);writeFileSync(path,readFileSync(path,'utf8').replace('rank-two','level-two, rank-one'));
    }
    report(f,pack);
    const result=collect(f.root,run,'impact-initial',1);
    assert.deepEqual(result.restated,[]);assert.deepEqual(result.downstream,[]);
    assert.deepEqual(result.decisions,[]);assert.equal(result.reviews.length,2);
    assert.equal(advanceImpact(f.root,run,'impact-initial',1).complete,true);
    const certificate=certify(f.root,run,'impact-initial',1,{contextHasher});
    assert.deepEqual(certificate.changed,f.ids.slice(0,2));
    let judged:string[]=[];
    const judgedRound=judge(f.root,run,1,{contextHasher,runSweep:({ids,ledger}:any)=>{
      judged=ids;
      for(const id of ids)appendFileSync(ledger,JSON.stringify({id,model:MODELS.sol61.id,...contextHasher(f.root,[id]).get(id),keep:true})+'\n');
      return {status:0};
    }});
    assert.deepEqual(judged,f.ids.slice(0,2));assert.equal(judgedRound.verdicts.length,2);
    assert.equal(readFileSync(f.initialPath,'utf8'),initialBytes);assert.equal(readFileSync(f.zeroPath,'utf8'),zeroBytes);
    assert.deepEqual(read(join(f.dir,'frontier.json')).ids,f.ids.slice().sort());
    assert.ok(read(join(f.dir,'step4-verdicts.json')).every((row:any)=>row.model===MODELS.luna.id&&row.keep));
    assert.equal(prepareImpact(f.root,run,'impact-initial',1).input_evidence[readerConcernPath(f.root,run)],digest(readFileSync(readerConcernPath(f.root,run),'utf8')));
  }finally{f.close();}
});
test('a real owner statement repair alone schedules the actual direct consumer',()=>{
  const f=fixture();try{
    collect(f.root,run,'initial',1);const pack=prepareImpact(f.root,run,'impact-initial',1);
    const path=join(f.root,'items','thm-reviewed-a.md');writeFileSync(path,readFileSync(path,'utf8').replace('A correct claim.','A corrected claim.'));
    report(f,pack);
    const next=advanceImpact(f.root,run,'impact-initial',1);
    assert.equal(next.complete,false);assert.deepEqual(Object.values(next.pack.assignments).flat(),['thm-consumer']);
    const sourceUnit=pack.units.find((unit:string)=>pack.assignments[unit].includes('thm-reviewed-a'));
    assert.ok(next.pack.assignments[sourceUnit].includes('thm-consumer'));
    const gate=(id:string,argv:string[])=>({id,argv});
    const stage=step5Stages({gate,repoWide:()=>[],contractGates:()=>[],ledgerGate:()=>({}),closureGate:()=>({})}).find((row:any)=>row.id==='5.2-impact');
    const ctx={repo:f.root,run,stageRounds:{'5.2-impact':1}};
    const job=stage.plan(ctx,[`${next.pack.phase}:${sourceUnit}`])[0];
    assert.equal(job.sessionHome,join(f.root,'.autopilot',run,'step5-reader-owner-sessions',`u${sourceUnit}`));
    assert.equal(job.resumeSession,`genuine-fixture-session-u${sourceUnit}`);
    assert.equal(job.profile,'gpt-6.1-sol-high');
    report(f,next.pack);assert.equal(advanceImpact(f.root,run,'impact-initial',1).complete,true);
  }finally{f.close();}
});
test('owner admission fails closed for authority, stale native originals, foreign subjects and individual review omissions',()=>{
  const cases=[
    (f:any)=>{f.admission.authorized_by='worker';},
    (f:any)=>{f.admission.owner_identity='/other';},
    (f:any)=>{f.admission.native_coverage_adopted=true;},
    (f:any)=>{f.admission.entries.push(f.admission.entries[0]);},
    (f:any)=>{f.admission.entries[0].id='thm-foreign';},
    (f:any)=>{f.admission.entries[0].batch='2';},
    (f:any)=>{f.admission.entries[0].concern_index=1;},
    (f:any)=>{f.admission.entries[0].concern.concern='Invented finding';},
    (f:any)=>{f.admission.entries[0].owner_review.confirmed_defect=false;},
    (f:any)=>{f.admission.entries[1].owner_review.reviewed_by='worker';},
    (f:any)=>{f.admission.entries[0].owner_review.source_excerpt='Not present';},
    (f:any)=>{f.admission.entries[0].owner_review.evidence_file='research/missing.md';},
    (f:any)=>{f.admission.entries[0].before_guard_sha256='b'.repeat(64);},
    (f:any)=>{f.admission.original_count=2;},
    (f:any)=>{delete f.admission.bindings[f.zeroPath];},
    (f:any)=>{appendFileSync(join(f.dispatch,'alpha-batch-read-1.attempt-1.last-message.json'),' ');},
    (f:any)=>{const p=join(f.root,'items','thm-reviewed-a.md');appendFileSync(p,'Changed');},
    (f:any)=>{const p=join(f.root,'items','thm-reviewed-a.md');writeFileSync(p,readFileSync(p,'utf8').replace('draft','published'));},
    (f:any)=>{json(join(f.root,'.autopilot',run,'state.json'),{run,stage:'5.1-adjudicate',paused:true,dispatches:{active:{startedAt:'now'}}});},
    (f:any)=>{writeFileSync(join(f.dispatch,'alpha-repair-step5-v2-impact-initial-r1-u1.attempt-1.prompt.md'),'already executing');},
  ];
  for(const change of cases){const f=fixture();try{change(f);json(readerConcernPath(f.root,run),f.admission);assert.throws(()=>loadReaderConcerns(f.root,run,{requireCollection:false}));assert.ok(!existsSync(join(f.dir,'impact-initial-1.json')));}finally{f.close();}}
});
test('admission cannot be inserted or replaced after the first owner pack freezes',()=>{
  const f=fixture();try{
    collect(f.root,run,'initial',1);prepareImpact(f.root,run,'impact-initial',1);
    assert.throws(()=>loadReaderConcerns(f.root,run,{requireCollection:false}),/already frozen/);
    f.admission.entries.pop();json(readerConcernPath(f.root,run),f.admission);
    assert.throws(()=>prepareImpact(f.root,run,'impact-initial',1),/after impact pack freeze/);
  }finally{f.close();}
  const g=fixture();try{
    const admission=readFileSync(readerConcernPath(g.root,run),'utf8');rmSync(readerConcernPath(g.root,run));
    collect(g.root,run,'initial',1);const pack=prepareImpact(g.root,run,'impact-initial',1);assert.deepEqual(Object.values(pack.assignments).flat(),[]);
    writeFileSync(readerConcernPath(g.root,run),admission);
    assert.throws(()=>prepareImpact(g.root,run,'impact-initial',1),/after impact pack freeze/);
  }finally{g.close();}
});

test('multi-edit and bound patch instructions admit only reviewed originals',()=>{
  for(const mode of ['array','patch']){
    const f=fixture();try{
      const review:any=f.admission.entries[0].owner_review;
      if(mode==='array')review.proposed_edits=[{source_excerpt:review.source_excerpt,proposed_replacement:review.proposed_replacement},{source_excerpt:'Correct conclusion.',proposed_replacement:'Precisely the same correct conclusion.'}];
      else{
        const patch=join(f.root,'research','candidate.diff');writeFileSync(patch,'--- source\n+++ candidate\n@@\n-A correct claim.\n+A corrected claim.\n');
        review.candidate_patch_file=patch;f.admission.bindings[patch]=digest(readFileSync(patch,'utf8'));
      }
      delete review.source_excerpt;delete review.proposed_replacement;json(readerConcernPath(f.root,run),f.admission);
      assert.doesNotThrow(()=>loadReaderConcerns(f.root,run,{requireCollection:false}));
    }finally{f.close();}
  }
});
test('changed mutable manifest keeps an exact archived admission preimage for legitimate owner reconciliation',()=>{
  const f=fixture();try{
    collect(f.root,run,'initial',1);const pack=prepareImpact(f.root,run,'impact-initial',1);
    const manifest=join(f.root,'research',`${run}-batch-1.pages.json`);
    assert.equal(pack.input_evidence[manifest],undefined);
    assert.ok(Object.keys(pack.input_evidence).some(path=>path.includes('supporting-metadata')));
    const data=read(manifest);data[0].note='Owner metadata reconciliation';json(manifest,data);
    report(f,pack);assert.doesNotThrow(()=>collect(f.root,run,'impact-initial',1));
  }finally{f.close();}
});
test('missing persistent reviewer or conflicting reviewer suppliers blocks continuation',()=>{
  for(const conflict of [false,true]){
    const f=fixture();try{
      collect(f.root,run,'initial',1);const pack=prepareImpact(f.root,run,'impact-initial',1);
      for(const id of conflict?f.ids.slice(0,2):f.ids.slice(0,1)){
        const path=join(f.root,'items',`${id}.md`);let text=readFileSync(path,'utf8').replace('A correct claim.','A corrected claim.');
        if(conflict&&id==='thm-reviewed-b')text=text.replace('deps: []','deps: [thm-reviewed-a]');
        writeFileSync(path,text);
      }
      report(f,pack);
      if(!conflict){
        const unit=pack.units.find((unit:string)=>pack.assignments[unit].includes('thm-reviewed-a'));
        const path=join(f.dispatch,`alpha-repair-${workerLabel(pack.phase,1,unit)}.result.json`),receipt=read(path);delete receipt.session_home;json(path,receipt);
      }
      assert.throws(()=>advanceImpact(f.root,run,'impact-initial',1),conflict?/conflicting reviewer/:/persistent reviewer/);
      assert.ok(!existsSync(join(f.dir,'impact-initial-pass-2-1.json')));
    }finally{f.close();}
  }
});
