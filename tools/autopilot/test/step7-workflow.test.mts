import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync,mkdirSync,writeFileSync,readFileSync,rmSync,existsSync,appendFileSync} from 'node:fs';
import {join} from 'node:path';
import {tmpdir} from 'node:os';
import { initialize,prepareAdjudication,prepareImpact,validateReports,collect,certify,judge,checkWorkflow,verifyCertification,workflowDir,workerReport,workerLabel,digest,advanceImpact,impactPasses,reviewContextHashes,reviewMatchesCurrent } from '../../step7-workflow.mjs';
import {itemHashGuard,itemHashJudge} from '../../item-hash.mjs';
import {MODELS} from '../../models.mjs';
import {recoverStep7Impact} from '../../step7-impact-recovery.mjs';
import {writeAuditorCreatedBaseline,certifyAuditorCreatedItems} from '../../auditor-created-items.mjs';

const run='fixture', reason='The proof and its supplier hypotheses were checked for logical validity.', h='a'.repeat(64);
const evidence={reason,uncertain:false,source_urls:[],familiar:true};
const json=(path:string,value:any)=>writeFileSync(path,JSON.stringify(value,null,2)+'\n');

test('new adjudication packs require an explicit fatal category before collection',()=>{
  const f=fixture();try{
    const pack=prepareAdjudication(f.root,run,'initial',1);
    assert.equal(pack.adjudicationSchemaVersion,1);
    item(f.root,'thm-item-0','Corrected proof.');reports(f.root,pack,{},['thm-published-consumer']);
    const path=workerReport(f.root,run,'initial',1,'1'),report=JSON.parse(readFileSync(path,'utf8'));
    delete report.decisions[0].defect_type;json(path,report);
    assert.throws(()=>collect(f.root,run,'initial',1),/missing or invalid fatal defect_type/);
    report.decisions[0].defect_type='logic';json(path,report);
    assert.equal(collect(f.root,run,'initial',1).errors.length,0);
  }finally{f.cleanup();}
});

test('recovered gate base excludes obsolete assignments through closure and certification',()=>{
  const f=fixture();try{
    initialize(f.root,run);
    const pack=prepareImpact(f.root,run,'gate',1,{failures:{id:'precheck',output:'FAIL thm-item-0: repair required'}});
    // Simulate the historical overbroad planner before recovery.
    pack.assignments['2']=['thm-item-20'];pack.seeds=['thm-item-0'];
    json(join(workflowDir(f.root,run),'gate-1.json'),pack);
    const stateDir=join(f.root,'.autopilot',run);mkdirSync(stateDir,{recursive:true});
    json(join(stateDir,'state.json'),{run,paused:true,stage:'7.9-repair',stages:{},dispatches:{}});
    const recovered=recoverStep7Impact({repo:f.root,run,stateDir,reason:'Fix obsolete speculative gate assignments and preserve evidence.'});
    assert.deepEqual(Object.values(recovered.pack.assignments).flat(),['thm-item-0']);
    reports(f.root,recovered.pack);
    assert.equal(advanceImpact(f.root,run,'gate',1).complete,true);
    const cert=certify(f.root,run,'gate',1,{contextHasher:contexts});
    assert.deepEqual(cert.items.map((row:any)=>row.id),['thm-item-0']);
    assert.equal(advanceImpact(f.root,run,'gate',1).complete,true);
    assert.deepEqual(certify(f.root,run,'gate',1,{contextHasher:contexts}),cert);
  }finally{f.cleanup();}
});

test('legacy context reuse requires exact historical binding and unchanged typed context',()=>{
  const items=[
    {id:'consumer',deps:['supplier'],references:['remark'],body_links:['remark']},
    {id:'supplier',deps:[],references:[],body_links:[]},
    {id:'remark',deps:[],references:['orientation'],body_links:['orientation']},
    {id:'orientation',deps:[],references:[],body_links:[]},
  ];
  const snapshot={consumer:'c',supplier:'s',remark:'r',orientation:'o'};
  const row={id:'consumer',post_sha256:'c',review_context_sha256:digest(Object.entries(snapshot).sort(([a],[b])=>a.localeCompare(b)))};
  assert.equal(reviewMatchesCurrent(items,snapshot,row,snapshot),true);
  assert.equal(reviewMatchesCurrent(items,{...snapshot,orientation:'changed'},row,snapshot),true);
  assert.equal(reviewMatchesCurrent(items,{...snapshot,supplier:'changed'},row,snapshot),false);
  assert.equal(reviewMatchesCurrent(items,{...snapshot,remark:'changed'},row,snapshot),false);
  assert.equal(reviewMatchesCurrent(items,{...snapshot,consumer:'changed'},row,snapshot),false);
  assert.equal(reviewMatchesCurrent(items,snapshot,{...row,review_context_sha256:h},snapshot),false);
  assert.equal(reviewMatchesCurrent(items,{...snapshot,orientation:'changed'},row,undefined),false);
  // A reference not covered by the old graph cannot inherit a legacy review.
  const expanded=items.map(item=>item.id==='consumer'?{...item,references:['remark','new-source']}:item);
  assert.equal(reviewMatchesCurrent(expanded,{...snapshot,'new-source':'n'},row,snapshot),false);
});

test('review contexts bind direct supplier statements, not indirect proof dependencies',()=>{
  const f=fixture();try{
    item(f.root,'thm-item-0','See [[thm-item-1]].');
    item(f.root,'thm-item-1','See [[thm-item-2]].',['thm-item-3']);
    const before=reviewContextHashes(f.root,['thm-item-0'])['thm-item-0'];
    item(f.root,'thm-item-2','Changed explanatory reference behind another reference.');
    assert.deepEqual(reviewContextHashes(f.root,['thm-item-0'])['thm-item-0'],before);
    item(f.root,'thm-item-3','Changed actual prerequisite of referenced supplier.');
    assert.equal(reviewContextHashes(f.root,['thm-item-0'])['thm-item-0'].review_context_sha256,before.review_context_sha256);
    item(f.root,'thm-item-1','Restated direct supplier.',['thm-item-3']);
    assert.notEqual(reviewContextHashes(f.root,['thm-item-0'])['thm-item-0'].review_context_sha256,before.review_context_sha256);
  }finally{f.cleanup();}
});

test('a reference candidate closes unchanged, or propagates after necessary repair before certification',()=>{
  for(const repair of [false,true]){
    const f=fixture();try{
      item(f.root,'thm-reference','Orientation [[thm-item-0]].',[],true);
      item(f.root,'thm-reference-consumer','Uses reference result.',['thm-reference'],true);
      const adjudicate=prepareAdjudication(f.root,run,'initial',1);
      item(f.root,'thm-item-0','Repaired root.');reports(f.root,adjudicate,{},['thm-published-consumer','thm-reference']);
      const owners=prepareImpact(f.root,run,'impact-initial',1);
      assert.ok(Object.values(owners.assignments).flat().includes('thm-reference'));
      assert.equal(Object.values(owners.assignments).flat().includes('thm-reference-consumer'),false);
      if(repair)item(f.root,'thm-reference','Corrected orientation [[thm-item-0]].',[],true);
      reports(f.root,owners);
      const next=advanceImpact(f.root,run,'impact-initial',1);
      if(repair){
        assert.equal(next.complete,false);
        assert.deepEqual(Object.values(next.pack.assignments).flat(),['thm-reference-consumer']);
        assert.throws(()=>certify(f.root,run,'impact-initial',1,{contextHasher:contexts}),/continuation/);
        reports(f.root,next.pack);
      }else assert.equal(next.complete,true);
      certify(f.root,run,'impact-initial',1,{contextHasher:contexts});
    }finally{f.cleanup();}
  }
});
function item(root:string,id:string,body='Original proof.',deps:string[]=[],published=false,kind='theorem') {
  const content=body.startsWith('## ')?body:`## ${kind==='definition'?'Definition':'Statement'}\n${body}`;
  writeFileSync(join(root,'items',`${id}.md`),`---\nid: ${id}\nkind: ${kind}\nstatus: ${published?'published':'draft'}\ndeps: [${deps.join(', ')}]\n---\n${content}\n`);
}
function guard(root:string,id:string){return itemHashGuard(readFileSync(join(root,'items',`${id}.md`),'utf8'));}
function contexts(root:string,ids:string[]){return new Map(ids.map(id=>[id,{item_sha256:itemHashJudge(readFileSync(join(root,'items',`${id}.md`),'utf8')),context_sha256:h}]));}
function fixture() {
  const root=mkdtempSync(join(tmpdir(),'step7-workflow-'));
  mkdirSync(join(root,'items'));mkdirSync(join(root,'research'));
  const ids=Array.from({length:21},(_,i)=>`thm-item-${i}`);
  for(const id of ids)item(root,id);
  item(root,'thm-published-consumer','Uses root.',[ids[0]],true);
  item(root,'thm-unrelated-consumer');
  json(join(root,'research',`${run}-batch-1.pages.json`),[{id:'page',items:ids.map(id=>({id}))}]);
  writeFileSync(join(root,'research',`${run}-judge.jsonl`),ids.map((id,i)=>JSON.stringify({id,model:MODELS.terra.id,context_sha256:h,item_sha256:contexts(root,[id]).get(id).item_sha256,keep:i!==0})).join('\n')+'\n');
  return {root,ids,cleanup:()=>rmSync(root,{recursive:true,force:true})};
}
function reports(root:string,pack:any,outcomes:any={},downstream:string[]=[]) {
  mkdirSync(join(root,'research',`${run}-dispatch`),{recursive:true});
  for(const unit of pack.units) {
    const assigned=pack.assignments[unit], ids=[...new Set(assigned.map((r:any)=>typeof r==='string'?r:r.id))] as string[];
    json(workerReport(root,run,pack.phase,pack.round,unit),{run,phase:pack.phase,round:pack.round,unit,input_sha256:digest(pack),
      decisions:pack.rejected?assigned.map((r:any)=>({...r,outcome:outcomes[r.id]??'confirmed_fatal',defect_type:'logic',...evidence})):[],
      reviews:ids.map(id=>({id,disposition:guard(root,id)===pack.before[id]?'unaffected':'repaired',...reviewContextHashes(root,[id])[id],...evidence})),created_items:[],downstream,
      gate_resolutions:(pack.gateAssignments?.[unit]??[]).map((r:any)=>({index:r.index,...evidence}))});
    const role=pack.rejected?'alpha-adjudicate':'alpha-repair';
    json(join(root,'research',`${run}-dispatch`,`${role}-${workerLabel(pack.phase,pack.round,unit)}.result.json`),{run,role,label:workerLabel(pack.phase,pack.round,unit),covers:[unit],started_at:'2026-09-21T00:00:00Z',ended_at:'2026-09-21T23:59:59Z',ok:true,model:MODELS.sol.id,provider_effort:'xhigh'});
  }
}
function initial(root:string,ids:string[]) {
  const pack=prepareAdjudication(root,run,'initial',1);
  item(root,ids[0],'Repaired root proof.');reports(root,pack,{},['thm-published-consumer']);
  return prepareImpact(root,run,'impact-initial',1);
}
function registerCreated(root:string,id:string,kind:string) {
  const manifest=join(root,'research',`${run}-batch-1.pages.json`),pages=JSON.parse(readFileSync(manifest,'utf8'));
  pages[0].items.push({id});json(manifest,pages);
  json(join(root,'research',`${run}-batch-1.proof-contracts.json`),{contracts:{[id]:{risk:'medium',kind}}});
}

test('proof-only initial and gate repairs create no downstream assignments and still certify repairs',()=>{
  for(const phase of ['initial','gate']){
    const f=fixture();try{
      item(f.root,'thm-item-0','## Statement\nUnchanged result.\n## Proof\nBroken proof.');
      initialize(f.root,run);
      const pack=phase==='initial'?prepareAdjudication(f.root,run,'initial',1):prepareImpact(f.root,run,'gate',1,{failures:{id:'precheck',output:'FAIL thm-item-0: invalid proof'}});
      const before=reviewContextHashes(f.root,['thm-published-consumer'])['thm-published-consumer'];
      item(f.root,'thm-item-0','## Statement\nUnchanged result.\n## Proof\nRepaired proof.', ['thm-item-1']);
      assert.deepEqual(reviewContextHashes(f.root,['thm-published-consumer'])['thm-published-consumer'],before);
      reports(f.root,pack,{},['thm-published-consumer']);
      if(phase==='initial'){
        const owners=prepareImpact(f.root,run,'impact-initial',1);
        assert.deepEqual(Object.values(owners.assignments).flat(),[]);
        reports(f.root,owners);
      }
      const ownerPhase=phase==='initial'?'impact-initial':'gate';
      assert.equal(advanceImpact(f.root,run,ownerPhase,1).complete,true);
      const certificate=certify(f.root,run,ownerPhase,1,{contextHasher:contexts});
      assert.ok(certificate.changed.includes('thm-item-0'));
      assert.equal(certificate.items.some((row:any)=>row.id==='thm-published-consumer'),false);
    }finally{f.cleanup();}
  }
});

test('a proof-only owner repair preserves a parallel consumer review and starts no further wave',()=>{
  const f=fixture();try{
    item(f.root,'thm-published-consumer','## Statement\nStable interface.\n## Proof\nOld proof.',['thm-item-0'],true);
    item(f.root,'thm-leaf','Uses published supplier.',['thm-published-consumer'],true);
    const adjudicate=prepareAdjudication(f.root,run,'initial',1);
    item(f.root,'thm-item-0','Restated root.');reports(f.root,adjudicate,{},['thm-published-consumer','thm-leaf']);
    const owners=prepareImpact(f.root,run,'impact-initial',1);
    const before=reviewContextHashes(f.root,['thm-leaf'])['thm-leaf'];
    item(f.root,'thm-published-consumer','## Statement\nStable interface.\n## Proof\nRepaired proof.',['thm-item-0'],true);
    reports(f.root,owners);
    assert.deepEqual(reviewContextHashes(f.root,['thm-leaf'])['thm-leaf'],before);
    assert.equal(advanceImpact(f.root,run,'impact-initial',1).complete,true);
  }finally{f.cleanup();}
});

test('initialization freezes real batch shape and initial reports bind exact rejection inputs',()=>{
  const f=fixture();try {
    const frontier=initialize(f.root,run);assert.equal(frontier.ids.length,21);assert.deepEqual(frontier.batches[0].items,f.ids.sort());
    const pack=prepareAdjudication(f.root,run,'initial',1);assert.equal(pack.rejected.length,1);assert.equal(pack.units.length,1);
    item(f.root,'thm-item-0','Repair.');reports(f.root,pack,{},['thm-published-consumer']);
    const path=workerReport(f.root,run,'initial',1,'1'),report=JSON.parse(readFileSync(path,'utf8'));
    report.input_sha256='b'.repeat(64);
    assert.match(validateReports(pack,[report],{...pack.before,'thm-item-0':guard(f.root,'thm-item-0')}).errors.join('\n'),/mismatched/);
    collect(f.root,run,'initial',1);collect(f.root,run,'initial',1);
    assert.equal(readFileSync(join(f.root,'research',`${run}-judge-adjudications.jsonl`),'utf8').trim().split('\n').length,1);
  }finally{f.cleanup();}
});

test('an adjudicator may author a registered load-bearing prerequisite before owner closure and certification',()=>{
  const f=fixture();try{
    writeAuditorCreatedBaseline(f.root,run,7);
    const pack=prepareAdjudication(f.root,run,'initial',1),created='lem-created-prerequisite';
    item(f.root,created,'A complete proof of the missing prerequisite.',[],false,'lemma');registerCreated(f.root,created,'lemma');
    item(f.root,f.ids[0],'Repaired proof using the new prerequisite.',[created]);
    reports(f.root,pack,{},[f.ids[0],'thm-published-consumer']);
    const path=workerReport(f.root,run,'initial',1,'1'),report=JSON.parse(readFileSync(path,'utf8'));
    report.created_items=[{id:created,kind:'lemma',home_page:'page',batch:'1',consumers:[f.ids[0]],...evidence}];
    report.reviews.push({id:created,disposition:'authored',...reviewContextHashes(f.root,[created])[created],...evidence});json(path,report);
    const receipt=collect(f.root,run,'initial',1);assert.deepEqual(receipt.created_items.map((row:any)=>row.id),[created]);
    const owners=prepareImpact(f.root,run,'impact-initial',1);assert.ok(Object.values(owners.assignments).flat().includes(f.ids[0]));
    reports(f.root,owners);const cert=certify(f.root,run,'impact-initial',1,{contextHasher:contexts});
    assert.ok(cert.items.some((row:any)=>row.id===created));assert.equal(cert.creations[0].id,created);
    assert.deepEqual(certifyAuditorCreatedItems(f.root,run,7).items.map((row:any)=>row.id),[created]);
    assert.equal(JSON.parse(readFileSync(join(workflowDir(f.root,run),'frontier.json'),'utf8')).ids.length,21);
  }finally{f.cleanup();}
});

test('an owner may author a missing definition and the next Terra wave includes it',()=>{
  const f=fixture();try{
    writeAuditorCreatedBaseline(f.root,run,7);
    const pack=initial(f.root,f.ids),created='def-created-prerequisite';
    item(f.root,created,'The exact missing definition used below.',[],false,'definition');registerCreated(f.root,created,'definition');
    item(f.root,'thm-published-consumer','Repaired published proof using the definition.',[f.ids[0],created],true);
    reports(f.root,pack,{},['thm-published-consumer']);
    const unit=pack.units.find((value:string)=>pack.assignments[value].includes('thm-published-consumer'));
    const path=workerReport(f.root,run,pack.phase,1,unit),report=JSON.parse(readFileSync(path,'utf8'));
    report.created_items=[{id:created,kind:'definition',home_page:'page',batch:'1',consumers:['thm-published-consumer'],...evidence}];
    report.reviews.push({id:created,disposition:'authored',...reviewContextHashes(f.root,[created])[created],...evidence});json(path,report);
    const cert=certify(f.root,run,'impact-initial',1,{contextHasher:contexts});assert.ok(cert.creations.some((row:any)=>row.id===created));
    assert.deepEqual(certifyAuditorCreatedItems(f.root,run,7).items.map((row:any)=>row.id),[created]);
    const judged=judge(f.root,run,1,{contextHasher:contexts,runSweep:({ids,ledger}:any)=>{
      for(const id of ids){const current=contexts(f.root,[id]).get(id);appendFileSync(ledger,JSON.stringify({id,model:MODELS.terra.id,...current,keep:true})+'\n');}
      return {status:0};
    }});
    assert.ok(judged.items.includes(created));
  }finally{f.cleanup();}
});

test('all three owners review published downstreams before single stable, idempotent certification',()=>{
  const f=fixture();try {
    const pack=initial(f.root,f.ids);assert.equal(pack.units.length,3);assert.ok(Object.values(pack.assignments).flat().includes('thm-published-consumer'));
    const task=readFileSync(join(workflowDir(f.root,run),`${workerLabel(pack.phase,pack.round,'1')}.task.md`),'utf8');
    assert.match(task,/Assignment requires impact review, not an edit/);
    assert.match(task,/smallest logically sufficient change/);
    item(f.root,'thm-published-consumer','Updated published proof.',['thm-item-0'],true);reports(f.root,pack);
    const cert=certify(f.root,run,'impact-initial',1,{contextHasher:contexts});
    assert.ok(cert.changed.includes('thm-published-consumer'));assert.equal(cert.items.length,2);
    assert.deepEqual(certify(f.root,run,'impact-initial',1,{contextHasher:contexts}),cert);
    assert.equal(verifyCertification(f.root,run).sha256,cert.sha256);
    assert.throws(()=>checkWorkflow(f.root,run,{contextHasher:contexts}),/not completed/);
  }finally{f.cleanup();}
});

test('worker-reported consumers without graph edges require owner coverage before certification',()=>{
  for(const reporter of ['adjudicator','owner']){
    const f=fixture();try{
      const target='thm-unrelated-consumer';
      let pack;
      if(reporter==='adjudicator'){
        const initialPack=prepareAdjudication(f.root,run,'initial',1);
        item(f.root,f.ids[0],'Repaired root proof.');
        reports(f.root,initialPack,{},['thm-published-consumer',target]);
        pack=prepareImpact(f.root,run,'impact-initial',1);
        assert.ok(Object.values(pack.assignments).flat().includes(target));
        reports(f.root,pack);
      }else{
        pack=initial(f.root,f.ids);reports(f.root,pack,{},[target]);
        assert.throws(()=>certify(f.root,run,'impact-initial',1,{contextHasher:contexts}),/continuation/);
        assert.equal(existsSync(join(workflowDir(f.root,run),'certification.json')),false);
        const next=advanceImpact(f.root,run,'impact-initial',1);
        assert.deepEqual(Object.values(next.pack.assignments).flat(),[target]);
        reports(f.root,next.pack);
      }
      const before=readFileSync(join(f.root,'items',`${target}.md`),'utf8');
      const cert=certify(f.root,run,'impact-initial',1,{contextHasher:contexts});
      assert.ok(cert.items.some((row:any)=>row.id===target));
      assert.equal(cert.changed.includes(target),false);
      assert.equal(readFileSync(join(f.root,'items',`${target}.md`),'utf8'),before);
    }finally{f.cleanup();}
  }
});

test('owner handoffs distinguish item repairs from metadata edits and require exact identity and honest sources',()=>{
  const f=fixture();try{
    const pack=initial(f.root,f.ids);reports(f.root,pack);
    const rows=pack.units.map((unit:string)=>JSON.parse(readFileSync(workerReport(f.root,run,pack.phase,1,unit),'utf8')));
    const owner=rows.find((report:any)=>report.reviews.length),review=owner.reviews[0];
    const now=Object.fromEntries(Object.keys(pack.before).map(id=>[id,guard(f.root,id)]));
    review.metadata_repair_only=true;
    review.reason='The unchanged mathematical item remains sound; only its stale contract quotation required correction.';
    assert.deepEqual(validateReports(pack,rows,now,{root:f.root}).errors,[]);
    review.disposition='repaired';
    assert.match(validateReports(pack,rows,now,{root:f.root}).errors.join('\n'),/claimed repair or authorship without change/);
    review.disposition='unaffected';owner.phase='repeat';
    assert.match(validateReports(pack,rows,now,{root:f.root}).errors.join('\n'),/missing or mismatched report/);
    owner.phase=pack.phase;review.familiar=false;review.source_urls=[];
    assert.match(validateReports(pack,rows,now,{root:f.root}).errors.join('\n'),/invalid review/);
    const task=readFileSync(workerReport(f.root,run,pack.phase,1,pack.units[0]).replace(/\.json$/,'.task.md'),'utf8');
    assert.ok(task.includes(`phase:"${pack.phase}"`));
    assert.match(task,/metadata_repair_only:true/);
    assert.match(task,/never switch it to true merely to pass validation/);
  }finally{f.cleanup();}
});

test('handoff supporting evidence is hash-bound and later tampering blocks collection reuse',()=>{
  const f=fixture();try{
    const pack=initial(f.root,f.ids);reports(f.root,pack);
    const supplement=join(f.root,'research','owner-review-supplement.json');json(supplement,{by:'owner-authorized reviewer',reason});
    const path=workerReport(f.root,run,pack.phase,1,pack.units[0]),report=JSON.parse(readFileSync(path,'utf8'));
    report.supporting_evidence={repaired_claim:'Narrative belongs in repair_notes, not in the hash-bound evidence map.'};json(path,report);
    assert.throws(()=>collect(f.root,run,'impact-initial',1),/invalid supporting evidence path or hash/);
    report.repair_notes=report.supporting_evidence;
    report.supporting_evidence={[supplement]:digest(readFileSync(supplement,'utf8'))};json(path,report);
    const receipt=collect(f.root,run,pack.phase,1,{deferImpactClosure:true});
    assert.equal(receipt.evidence[supplement],report.supporting_evidence[supplement]);
    json(supplement,{by:'changed'});
    assert.throws(()=>collect(f.root,run,pack.phase,1,{deferImpactClosure:true}),/evidence changed/);
  }finally{f.cleanup();}
});

test('stale downstream review and newly introduced downstream edge prevent any certification',()=>{
  for(const mode of ['stale','new-edge']){
    const f=fixture();try{
      const pack=initial(f.root,f.ids);reports(f.root,pack);
      if(mode==='stale') item(f.root,'thm-published-consumer','A late writer changed this.',['thm-item-0'],true);
      else item(f.root,'thm-unrelated-consumer','Newly linked consumer.',['thm-item-0']);
      assert.throws(()=>certify(f.root,run,'impact-initial',1,{contextHasher:contexts}),/invalid review|unlicensed|downstream|continuation/);
      assert.equal(existsSync(join(workflowDir(f.root,run),'certification.json')),false);
    }finally{f.cleanup();}
  }
});

test('owner continuation requeues stale suppliers and unchanged consumers, preserves receipts, then certifies once',()=>{
  const f=fixture();try{
    item(f.root,'thm-leaf','Uses published supplier.',['thm-published-consumer'],true);
    const adjudicate=prepareAdjudication(f.root,run,'initial',1);
    item(f.root,'thm-item-0','Repaired root.');reports(f.root,adjudicate,{},['thm-published-consumer','thm-leaf']);
    const pack=prepareImpact(f.root,run,'impact-initial',1);reports(f.root,pack);
    // The supplier's final carrier differs from what its first report reviewed.
    item(f.root,'thm-published-consumer','A late completed repair.',['thm-item-0'],true);
    const next=advanceImpact(f.root,run,'impact-initial',1);
    assert.equal(next.complete,false);
    assert.deepEqual(Object.values(next.pack.assignments).flat().sort(),['thm-leaf','thm-published-consumer']);
    assert.deepEqual(impactPasses(f.root,run,'impact-initial',1),['impact-initial','impact-initial-pass-2']);
    assert.equal(advanceImpact(f.root,run,'impact-initial',1).pack.phase,next.pack.phase);
    assert.equal(existsSync(join(workflowDir(f.root,run),'certification.json')),false);
    const firstReceipt=readFileSync(join(workflowDir(f.root,run),'impact-initial-1-collected.json'),'utf8');
    reports(f.root,next.pack);
    assert.equal(advanceImpact(f.root,run,'impact-initial',1).complete,true);
    const cert=certify(f.root,run,'impact-initial',1,{contextHasher:contexts});
    assert.ok(cert.items.some((row:any)=>row.id==='thm-leaf'));
    assert.equal(readFileSync(join(workflowDir(f.root,run),'impact-initial-1-collected.json'),'utf8'),firstReceipt);
  }finally{f.cleanup();}
});

test('new alias-resolved downstream consumers automatically receive an additional owner pass',()=>{
  const f=fixture();try{
    item(f.root,'thm-unrelated-consumer','Uses an alias requiring impact reconciliation.',['new-published-alias'],true);
    const pack=initial(f.root,f.ids);
    const supplier=join(f.root,'items','thm-published-consumer.md');
    writeFileSync(supplier,readFileSync(supplier,'utf8').replace('status: published','status: published\naliases: [new-published-alias]'));
    reports(f.root,pack,{},['thm-unrelated-consumer']);
    const next=advanceImpact(f.root,run,'impact-initial',1);
    assert.equal(next.complete,false);
    assert.deepEqual(Object.values(next.pack.assignments).flat(),['thm-unrelated-consumer']);
    reports(f.root,next.pack);
    assert.equal(advanceImpact(f.root,run,'impact-initial',1).complete,true);
    assert.ok(certify(f.root,run,'impact-initial',1,{contextHasher:contexts}).items.some((row:any)=>row.id==='thm-unrelated-consumer'));
  }finally{f.cleanup();}
});

test('an earlier consumer review cannot inherit a later supplier repair context within the same wave',()=>{
  const f=fixture();try{
    item(f.root,'thm-leaf','Uses published supplier.',['thm-published-consumer'],true);
    const adjudicate=prepareAdjudication(f.root,run,'initial',1);
    item(f.root,'thm-item-0','Repaired root.');reports(f.root,adjudicate,{},['thm-published-consumer','thm-leaf']);
    const pack=prepareImpact(f.root,run,'impact-initial',1);
    const oldLeaf={id:'thm-leaf',disposition:'unaffected',...reviewContextHashes(f.root,['thm-leaf'])['thm-leaf'],...evidence};
    item(f.root,'thm-published-consumer','Supplier repaired after leaf review.',['thm-item-0'],true);
    reports(f.root,pack,{},['thm-leaf']);
    for(const unit of pack.units){
      const path=workerReport(f.root,run,pack.phase,1,unit),report=JSON.parse(readFileSync(path,'utf8'));
      report.reviews=report.reviews.map((row:any)=>row.id==='thm-leaf'?oldLeaf:row);json(path,report);
    }
    const next=advanceImpact(f.root,run,'impact-initial',1);
    assert.equal(next.complete,false);assert.deepEqual(Object.values(next.pack.assignments).flat(),['thm-leaf']);
    const archived=JSON.parse(readFileSync(join(workflowDir(f.root,run),'impact-initial-1-collected.json'),'utf8'));
    assert.equal(archived.reviews.find((row:any)=>row.id==='thm-leaf').review_context_sha256,oldLeaf.review_context_sha256);
    reports(f.root,next.pack);assert.equal(advanceImpact(f.root,run,'impact-initial',1).complete,true);
    certify(f.root,run,'impact-initial',1,{contextHasher:contexts});
  }finally{f.cleanup();}
});

test('confirmed nonfatal findings are repaired while false positives do not license edits',()=>{
  const f=fixture();try{
    const pack=prepareAdjudication(f.root,run,'initial',1);item(f.root,'thm-item-0','Corrected nonfatal exposition.');
    reports(f.root,pack,{'thm-item-0':'confirmed_nonfatal'},['thm-published-consumer']);
    assert.equal(collect(f.root,run,'initial',1).decisions[0].outcome,'confirmed_nonfatal');
    const report=JSON.parse(readFileSync(workerReport(f.root,run,'initial',1,'1'),'utf8'));
    report.decisions[0].outcome='false_positive';
    assert.match(validateReports(pack,[report],{...pack.before,'thm-item-0':guard(f.root,'thm-item-0')}).errors.join('\n'),/without confirmed/);
  }finally{f.cleanup();}
});

test('metadata-only gate failures require explicit assigned resolutions even with no item ids',()=>{
  const f=fixture();try{
    initialize(f.root,run);
    const pack=prepareImpact(f.root,run,'gate',1,{failures:[{check:'contract-index',detail:'Missing shared contract inventory metadata'}]});
    assert.equal(Object.values(pack.assignments).flat().length,0);assert.equal(pack.gateAssignments['1'].length,1);
    reports(f.root,pack);
    const list=pack.units.map((u:string)=>JSON.parse(readFileSync(workerReport(f.root,run,'gate',1,u),'utf8')));
    assert.equal(validateReports(pack,list,pack.before).errors.length,0);
    list[0].gate_resolutions=[];
    assert.match(validateReports(pack,list,pack.before).errors.join('\n'),/missing gate resolution/);
  }finally{f.cleanup();}
});

test('gate planning routes failing subjects and nested diagnostics without speculative downstream expansion',()=>{
  const f=fixture();try{
    initialize(f.root,run);
    const failures={id:'fwdcheck',ok:false,output:'1 ERROR(s):\n  [forward-undeclared] items/thm-item-0.md: wikilink [[thm-item-1]] points forward',
      advisory:[{id:'finite-smoke',ok:false,output:'PASS [thm-item-2] sound\nFAIL [thm-item-3] failed check'},
        {id:'unknown-metadata',ok:false,output:'Global failure mentions thm-item-4, not an item finding'},
        {id:'precheck',ok:true,output:'PASS items/thm-item-5.md'}]};
    const pack=prepareImpact(f.root,run,'gate',1,{failures});
    assert.deepEqual(Object.values(pack.assignments).flat().sort(),['thm-item-0','thm-item-3']);
    assert.deepEqual(pack.seeds,[]);assert.deepEqual(pack.impacts,[]);
    const indices=new Set(Object.values(pack.gateAssignments).flat().map((row:any)=>row.index));
    assert.equal(indices.size,3);
    for(const unit of pack.units)for(const row of pack.gateAssignments[unit])
      assert.ok(row.subjects.every((id:string)=>pack.assignments[unit].includes(id)));
    reports(f.root,pack);
    assert.equal(advanceImpact(f.root,run,'gate',1).complete,true);
  }finally{f.cleanup();}
});

test('gate prompts stay bounded while full diagnostic evidence remains on disk',()=>{
  const f=fixture();try{
    initialize(f.root,run);
    const output='UNKNOWN GLOBAL FAILURE '+ 'x'.repeat(1_200_000);
    const pack=prepareImpact(f.root,run,'gate',1,{failures:{id:'unknown',ok:false,output}});
    const path=workerReport(f.root,run,'gate',1,'1').replace(/\.json$/,'.gate-diagnostics.json');
    assert.equal(JSON.parse(readFileSync(path,'utf8'))[0].failure.output,output);
    for(const unit of pack.units){
      const task=readFileSync(workerReport(f.root,run,'gate',1,unit).replace(/\.json$/,'.task.md'),'utf8');
      assert.ok(task.length<64000);assert.equal(task.includes(output),false);
      assert.match(task,/gate-diagnostics\.json/);
    }
    reports(f.root,pack);
    json(path,[]);
    assert.throws(()=>collect(f.root,run,'gate',1,{deferImpactClosure:true}),/diagnostic input changed/);
  }finally{f.cleanup();}
});

test('gate item repairs still trigger downstream review before certification',()=>{
  const f=fixture();try{
    initialize(f.root,run);
    const pack=prepareImpact(f.root,run,'gate',1,{failures:{id:'finite-smoke',ok:false,output:'FAIL [thm-item-0] genuine finding'}});
    item(f.root,'thm-item-0','Necessary repair after gate failure.');reports(f.root,pack);
    const next=advanceImpact(f.root,run,'gate',1);
    assert.equal(next.complete,false);
    assert.deepEqual(Object.values(next.pack.assignments).flat(),['thm-published-consumer']);
    assert.throws(()=>certify(f.root,run,'gate',1,{contextHasher:contexts}),/continuation/);
    reports(f.root,next.pack);
    assert.equal(advanceImpact(f.root,run,'gate',1).complete,true);
    certify(f.root,run,'gate',1,{contextHasher:contexts});
  }finally{f.cleanup();}
});

test('missing paid verdict and a metadata writer during central hashing fail closed',()=>{
  for(const mode of ['missing-verdict','metadata-writer']){
    const f=fixture();try{
      const pack=initial(f.root,f.ids);reports(f.root,pack);
      if(mode==='missing-verdict'){
        certify(f.root,run,'impact-initial',1,{contextHasher:contexts});
        assert.throws(()=>judge(f.root,run,1,{contextHasher:contexts,runSweep:()=>({status:0})}),/missing current Terra verdict/);
        assert.equal(existsSync(join(workflowDir(f.root,run),'judge-1.json')),false);
      }else{
        const contextHasher=(root:string,ids:string[])=>{
          const answer=contexts(root,ids),path=join(root,'items','thm-item-0.md');
          writeFileSync(path,readFileSync(path,'utf8').replace('status: draft','status: draft\nverification:\n  audited: 2026-09-21'));
          return answer;
        };
        assert.throws(()=>certify(f.root,run,'impact-initial',1,{contextHasher}),/writer overlapped/);
        assert.equal(existsSync(join(workflowDir(f.root,run),'certification.json')),false);
      }
    }finally{f.cleanup();}
  }
});

test('Terra rejudges changed published items and current context; complete repeat evidence permits threshold gate',()=>{
  const f=fixture();try{
    const pack=initial(f.root,f.ids);item(f.root,'thm-published-consumer','Updated published proof.',['thm-item-0'],true);reports(f.root,pack);
    certify(f.root,run,'impact-initial',1,{contextHasher:contexts});
    const calls:string[][]=[];
    const runSweep=({ids,ledger}:any)=>{calls.push(ids);for(const id of ids)appendFileSync(ledger,JSON.stringify({id,model:MODELS.terra.id,...contexts(f.root,[id]).get(id),keep:true})+'\n');return {status:0};};
    judge(f.root,run,1,{contextHasher:contexts,runSweep});assert.deepEqual(calls[0],['thm-item-0','thm-published-consumer']);
    const repeat=prepareAdjudication(f.root,run,'repeat',1);assert.equal(repeat.rejected.length,0);reports(f.root,repeat);
    const impact=prepareImpact(f.root,run,'impact-repeat',1);reports(f.root,impact);
    const cert=certify(f.root,run,'impact-repeat',1,{contextHasher:contexts});assert.equal(cert.latest_adjudication_round,1);
    assert.equal(checkWorkflow(f.root,run,{contextHasher:contexts}).sha256,cert.sha256);
    const shifted=(root:string,ids:string[])=>new Map([...contexts(root,ids)].map(([id,row])=>[id,{...row,context_sha256:'b'.repeat(64)}]));
    assert.throws(()=>checkWorkflow(f.root,run,{contextHasher:shifted}),/stale.*context/);
    assert.throws(()=>judge(f.root,run,2,{contextHasher:shifted,runSweep}),/context changed before Terra/);
    judge(f.root,run,2,{contextHasher:contexts,runSweep});assert.equal(calls.length,1);
  }finally{f.cleanup();}
});
