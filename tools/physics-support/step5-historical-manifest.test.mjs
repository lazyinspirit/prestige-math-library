import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync,mkdirSync,readFileSync,writeFileSync,rmSync } from 'node:fs';
import { join,relative } from 'node:path';
import { tmpdir } from 'node:os';
import { createHash } from 'node:crypto';
import { historicalManifestEvidence,validateCurrentHistoricalManifestGate } from './step5-historical-manifest.mjs';
import { certify,collect,verifyCertification,verifyWave,checkWorkflow,reviewContextHashes } from './step5-workflow.mjs';
import { freezeFrontier } from './step5-rounds.mjs';
import { itemHashGuard,itemHashJudge } from './item-hash.mjs';
import { MODELS } from './models.mjs';
const hash=value=>createHash('sha256').update(value).digest('hex');
const digest=value=>hash(JSON.stringify(value));
const science={reason:'Actually checked the current consumer claim and its exact supplier hypotheses after the necessary owning statement mirror repair.',uncertain:false,familiar:true,source_urls:[]};
function fixture(t,{continuation=false}={}){
  const root=mkdtempSync(join(tmpdir(),'historical-manifest-'));t.after(()=>rmSync(root,{recursive:true,force:true}));
  const run='demo',dir=join(root,'research',run+'-step5-v2'),archive=join(root,'research',run+'-archives'),stateDir=join(root,'.physics-autopilot',run);
  for(const path of [dir,archive,join(root,'items'),join(root,'library','test'),join(root,'research',run+'-dispatch'),join(stateDir,'owner-gate-history')])mkdirSync(path,{recursive:true});
  const save=(path,value)=>writeFileSync(path,JSON.stringify(value,null,2)+'\n'),read=path=>JSON.parse(readFileSync(path,'utf8'));
  const ref=path=>({path:relative(root,path),sha256:hash(readFileSync(path))});
  const ids=['thm-context','ex-consumer'],subject=ids[1],manifest=join(root,'research',run+'-batch-43.pages.json');
  const carrier=(id,claim)=>`---\nid: ${id}\nkind: ${id.startsWith('ex-')?'example':'theorem'}\nstatus: draft\ndeps: []\n---\n## ${id.startsWith('ex-')?'Example':'Statement'}\n\n${claim}\n\n## Proof\nA complete familiar argument.\n`;
  writeFileSync(join(root,'items',ids[0]+'.md'),carrier(ids[0],'A fixed context claim.'));
  writeFileSync(join(root,'items',subject+'.md'),carrier(subject,'The original example claim.'));
  const guards=()=>Object.fromEntries(ids.map(id=>[id,itemHashGuard(readFileSync(join(root,'items',id+'.md'),'utf8'))]));
  const baseline=guards();save(join(dir,'baseline.json'),baseline);save(join(dir,'step4-verdicts.json'),[]);
  save(join(dir,'frontier.json'),freezeFrontier({run,batches:[{id:'43',items:ids}]}));
  const pages=[{id:'page-a',category:'test',items:[{id:ids[0],statement:'A fixed context claim.'}]},{id:'page-b',category:'test',items:[{id:subject,statement:'The original example claim.'}]}];save(manifest,pages);
  const oldManifest=join(archive,'manifest-old.json'),oldSource=join(archive,'source-old.md');writeFileSync(oldManifest,readFileSync(manifest));writeFileSync(oldSource,readFileSync(join(root,'items',subject+'.md')));
  const pageFile=join(root,'library','test','page-a.md');writeFileSync(pageFile,'---\npage: page-a\nstatus: draft\n---\nA qualified sound page summary.\n');
  const finding={run,subject:'page-a',defect_id:'page-finding',disposition:'open',caught_by_role:'owner'};
  const findingPath=join(archive,'finding.json');save(findingPath,finding);writeFileSync(join(root,'research','defect-ledger.jsonl'),JSON.stringify(finding)+'\n');
  const pageRequestPath=join(dir,'owner-page-correction-original.json');save(pageRequestPath,{version:1,run,subject:'page-a',batch:'43',root_finding:{defect_id:finding.defect_id,record:ref(findingPath)}});
  const pageRequest={path:pageRequestPath,sha256:hash(readFileSync(pageRequestPath))};
  const pageReview={id:'page-a',path:relative(root,pageFile),post_sha256:hash(readFileSync(pageFile)),review_context_sha256:'c'.repeat(64)};
  const resolution={defect_id:finding.defect_id,status:'fixed',subjects:['page-a'],...science};
  const pagePackPath=join(dir,'page-correction-initial-1.json'),pagePack={version:1,run,phase:'page-correction-initial',round:1,subject:'page-a',page_path:relative(root,pageFile),request:pageRequest,
    payload:read(pageRequestPath),expected_page_sha256:pageReview.post_sha256,before_sources:{['items/'+subject+'.md']:ref(oldSource).sha256}};save(pagePackPath,pagePack);
  const pageReportPath=join(dir,'step5-v2-page-correction-initial-r1-u1.json');save(pageReportPath,{run,phase:'page-correction-initial',round:1,unit:'1',input_sha256:digest(pagePack),
    supporting_evidence:{[relative(root,manifest)]:ref(oldManifest).sha256}});
  const pagePath=join(dir,'page-correction-initial-1-collected.json'),pageEvidence={[manifest]:ref(oldManifest).sha256,[pagePackPath]:ref(pagePackPath).sha256,[pageReportPath]:ref(pageReportPath).sha256,
    [pageRequestPath]:pageRequest.sha256,[findingPath]:ref(findingPath).sha256};
  save(pagePath,{version:1,run,phase:'page-correction-initial',round:1,request:pageRequest,subject:'page-a',page_path:relative(root,pageFile),page_review:pageReview,root_finding_resolution:resolution,
    post_raw_sha256:pageReview.post_sha256,evidence:pageEvidence});
  const parentPath=join(dir,'initial-1-collected.json');
  const reviews=ids.map(id=>({id,disposition:'unaffected',...reviewContextHashes(root,[id])[id],...science}));
  save(parentPath,{version:2,run,phase:'initial',round:1,reviews,created_items:[],decisions:[],changed:[],restated:[],statement_events:[],post:baseline,downstream:[],
    native_page_correction:{request:pageRequest,subject:'page-a',page_path:relative(root,pageFile),page_review:pageReview,root_finding_resolution:resolution},
    evidence:{...pageEvidence,[pagePath]:ref(pagePath).sha256}});
  const contextHasher=(root,scoped)=>new Map(scoped.map(id=>[id,{item_sha256:itemHashJudge(readFileSync(join(root,'items',id+'.md'),'utf8')),context_sha256:'a'.repeat(64)}]));
  let sequence=0,lastManifest=oldManifest,lastSource=oldSource;
  function wave(phase,claim,{pass=false,other=false}={}){
    sequence++;const before=guards(),beforeManifest=lastManifest,beforeSource=lastSource;
    if(other){const path=join(root,'items',ids[0]+'.md');writeFileSync(path,readFileSync(path,'utf8').replace('A complete familiar argument.','A complete familiar argument with an authorized proof-only correction.'));}
    else{writeFileSync(join(root,'items',subject+'.md'),carrier(subject,claim));const current=read(manifest);current[1].items[0].statement=claim;save(manifest,current);}
    const afterManifest=join(archive,'manifest-'+sequence+'.json'),afterSource=join(archive,'source-'+sequence+'.md');
    writeFileSync(afterManifest,readFileSync(manifest));writeFileSync(afterSource,readFileSync(join(root,'items',subject+'.md')));
    const target=other?ids[0]:subject,post=guards(),phases=[phase,...(pass?[phase+'-pass-2']:[])],evidenceMap={},nativeRefs=[];let finalReview;
    for(const [index,currentPhase]of phases.entries()){
      const packPath=join(dir,currentPhase+'-1.json'),pack={version:2,run,phase:currentPhase,round:1,repair_scope:'frontier',frontier_ids:ids,units:['1','2','3'],assignments:{'1':[],'2':[target],'3':[]},before:index?post:before,seeds:[],home_pages:{'43':['page-a','page-b']}};save(packPath,pack);
      const label='step5-v2-'+currentPhase+'-r1-u2',taskPath=join(dir,label+'.task.md'),reportPath=join(dir,label+'.json'),dispatchPath=join(root,'research',run+'-dispatch','alpha-repair-'+label+'.result.json');
      writeFileSync(taskPath,'Frozen inputs: '+packPath+'\n');
      finalReview={id:target,disposition:index?'unaffected':'repaired',...reviewContextHashes(root,[target])[target],...science};
      save(reportPath,{run,phase:currentPhase,round:1,unit:'2',input_sha256:digest(pack),reviews:[finalReview],repair_notes:{metadata_updates:[{id:target,changes:['owning Example mirror']} ]}});
      save(dispatchPath,{ok:true,run,role:'alpha-repair',label,model:MODELS.sol61.id,provider_effort:'high',covers:[index?currentPhase+':2':'2'],ended_at:'2026-10-17T00:00:00Z'});
      for(const path of [packPath,reportPath,dispatchPath])evidenceMap[path]=ref(path).sha256;
      nativeRefs.push({pack:ref(packPath),task:ref(taskPath),report:ref(reportPath),dispatch:ref(dispatchPath)});
    }
    const closedPath=join(dir,phase+'-1-closed.json');save(closedPath,{version:2,run,phase,round:1,errors:[],reviews:[finalReview],created_items:[],changed:[target],restated:[],post,evidence:evidenceMap,downstream:[]});
    const progressPath=join(dir,phase+'-1-progress.json');save(progressPath,{version:2,run,phase,round:1,passes:phases,activePhase:phases.at(-1),complete:true,closed_receipt:{path:closedPath,sha256:ref(closedPath).sha256}});
    if(phase==='impact-repeat')save(join(dir,'repeat-1-collected.json'),{version:2,run,phase:'repeat',round:1,reviews:[],decisions:[],created_items:[],evidence:{}});
    const stage=phase==='impact-initial'?'5.2-impact':'5.6-impact',certStage=phase==='impact-initial'?'5.3-certify':'5.7-certify';
    const now=Date.now(),time=n=>new Date(now+n).toISOString(),attempt='gate-'+sequence;
    const body={run,repo:root,stages:[stage],scopeKind:'items',recertificationScope:'formatting-metadata-only',items:ids.map(id=>({id,carrierSha256:hash(readFileSync(join(root,'items',id+'.md'))),manifestSha256:null})),
      inputs:[manifest,...ids.map(id=>join(root,'items',id+'.md'))].map(path=>({path,sha256:hash(readFileSync(path))}))};
    const gate={request:{version:2,attempt,createdAt:time(-9000),consumedAt:time(-2000),snapshot:{...body,sha256:digest(body)}},receipt:{version:2,attempt,snapshotSha256:digest(body),reviewer:'/root',recertificationScope:'formatting-metadata-only',writersDrained:true,writerScopes:[],reviewStartedAt:time(-8000),reviewedAt:time(-3000),
      items:body.items.map(item=>({...item,verdict:'format-metadata-pass',formatting:{verdict:'pass',evidence:'Current proof/heading format checked.'},metadata:{verdict:'pass',evidence:'Current identity, inventory and dependency metadata checked.'}}))}};
    const gatePath=join(stateDir,'owner-gate-history',attempt+'.json');save(gatePath,gate);save(join(stateDir,'state.json'),{run,stage:certStage,stages:{[stage]:{enteredAt:time(-10000),gatesPassedAt:time(-1000)}},dispatches:{}});
    lastManifest=afterManifest;lastSource=afterSource;
    return {phase,round:1,before_manifest:ref(beforeManifest),after_manifest:ref(afterManifest),before_source:ref(beforeSource),after_source:ref(afterSource),repair:nativeRefs[0],final_review:nativeRefs.at(-1),impact_progress:ref(progressPath),impact_closed:ref(closedPath),owner_gate:ref(gatePath)};
  }
  const transition=wave('impact-initial','The repaired example with precise conventions.',{pass:continuation});
  const request={version:1,run,reviewer:'/root',manifest_path:relative(root,manifest),batch:'43',subject,json_pointer:'/1/items/0/statement',initial_parent:ref(parentPath),page_receipt:ref(pagePath),page_report:ref(pageReportPath),transitions:[transition]};
  let requestPath=join(dir,'owner-historical-manifest-first.json');
  const bind=()=>{save(requestPath,request);save(join(dir,'owner-historical-manifest-request.json'),{version:1,run,request:ref(requestPath)});};bind();
  const evolve=()=>{const previous=ref(requestPath),next=wave('impact-repeat','The further repaired example with fully explicit conventions.',{pass:true});request.previous_binding=previous;request.transitions.push(next);requestPath=join(dir,'owner-historical-manifest-next.json');bind();return next;};
  return {root,run,dir,ids,subject,manifest,parentPath,pagePath,pagePackPath,pageReportPath,oldManifest,oldSource,transition,request,read,save,ref,bind,wave,evolve,contextHasher,
    history:()=>historicalManifestEvidence(root,run,read(parentPath).evidence),certify:phase=>certify(root,run,phase,1,{contextHasher})};
}

for(const continuation of [false,true])test(`genuine historical manifest archive permits certification and immutable parent/page replay${continuation?' with a continuation final owner':''}`,t=>{
  const f=fixture(t,{continuation}),parentBefore=readFileSync(f.parentPath),pageBefore=readFileSync(f.pagePath);
  const binding=f.history();assert.equal(binding.transitions.length,1);assert.equal(binding.evidence[f.manifest],f.transition.after_manifest.sha256);
  const mixed=historicalManifestEvidence(f.root,f.run,{[relative(f.root,f.manifest)]:f.transition.before_manifest.sha256,[f.manifest]:f.transition.before_manifest.sha256});
  assert.equal(mixed.evidence[f.manifest],f.transition.after_manifest.sha256);
  const cert=f.certify('impact-initial');assert.equal(cert.evidence[f.manifest],f.transition.after_manifest.sha256);
  assert.ok(cert.evidence_transitions.some(row=>row.kind==='historical-page-manifest'));
  assert.deepEqual(verifyCertification(f.root,f.run),cert);assert.deepEqual(verifyWave(f.root,f.run,{contextHasher:f.contextHasher}),cert);
  assert.equal(collect(f.root,f.run,'initial',1).run,f.run);
  assert.deepEqual(readFileSync(f.parentPath),parentBefore);assert.deepEqual(readFileSync(f.pagePath),pageBefore);
  assert.equal(f.read(f.parentPath).evidence[f.manifest],f.transition.before_manifest.sha256);
});

test('a second genuine native manifest evolution preserves the first binding and supports final checks',t=>{
  const f=fixture(t);const first=f.certify('impact-initial');const original=readFileSync(f.parentPath);
  f.evolve();assert.equal(f.history().evidence[f.manifest],f.request.transitions[1].after_manifest.sha256);
  const cert=f.certify('impact-repeat');assert.equal(cert.evidence[f.manifest],f.request.transitions[1].after_manifest.sha256);
  assert.deepEqual(verifyWave(f.root,f.run,{contextHasher:f.contextHasher}),cert);
  assert.deepEqual(checkWorkflow(f.root,f.run,{contextHasher:f.contextHasher}),cert);
  assert.equal(collect(f.root,f.run,'initial',1).run,f.run);assert.deepEqual(readFileSync(f.parentPath),original);
  assert.equal(f.read(join(f.dir,'certification-impact-initial-1.json')).sha256,first.sha256);
});

test('unrelated later native repair does not freeze history to the old gate and current certification remains strict',t=>{
  const f=fixture(t);f.certify('impact-initial');
  const path=join(f.root,'items',f.ids[0]+'.md'),old=readFileSync(path,'utf8');writeFileSync(path,old.replace('A complete familiar argument.','An unreviewed changed argument.'));
  assert.equal(f.history().transitions.length,1);assert.equal(collect(f.root,f.run,'initial',1).run,f.run);
  assert.throws(()=>verifyWave(f.root,f.run,{contextHasher:f.contextHasher}),/stale Step 5 certification/);
  assert.throws(()=>validateCurrentHistoricalManifestGate(f.root,f.run,'impact-initial',1),/current gated item\/check changed/);
  writeFileSync(path,old);f.wave('impact-repeat',null,{other:true});
  const cert=f.certify('impact-repeat');assert.deepEqual(verifyWave(f.root,f.run,{contextHasher:f.contextHasher}),cert);
  assert.equal(collect(f.root,f.run,'initial',1).run,f.run);
});

for(const[name,mutate,expected]of[
  ['old raw archive tamper',f=>writeFileSync(join(f.root,f.transition.before_manifest.path),'[]'),/bound evidence changed/],
  ['source archive tamper',f=>writeFileSync(join(f.root,f.transition.before_source.path),'changed'),/bound evidence changed/],
  ['wrong field scope',f=>{f.request.json_pointer='/0/items/0/statement';f.bind();},/exactly the owned statement mirror/],
  ['wrong native identity',f=>{const p=join(f.root,f.transition.repair.dispatch.path),d=f.read(p);d.model=MODELS.luna.id;f.save(p,d);},/bound evidence changed|non-historical evidence changed/],
  ['missing source mirror',f=>{const p=join(f.root,'items',f.subject+'.md');writeFileSync(p,readFileSync(p,'utf8').replace('The repaired example with precise conventions.','A different public claim.'));},/current source mirror/],
  ['unlicensed live manifest field',f=>{const m=f.read(f.manifest);m[0].id='renamed-page';f.save(f.manifest,m);},/live manifest lacks/],
  ['page report tamper',f=>writeFileSync(f.pageReportPath,'{}'),/bound evidence changed/],
  ['scientific input tamper',f=>{const p=join(f.root,'research','demo-archives','science.txt');writeFileSync(p,'before');const parent=f.read(f.parentPath);parent.evidence[p]=hash(readFileSync(p));f.save(f.parentPath,parent);f.request.initial_parent=f.ref(f.parentPath);f.bind();writeFileSync(p,'after');},/non-historical evidence changed/],
])test(`historical manifest binding rejects ${name}`,t=>{const f=fixture(t);mutate(f);assert.throws(f.history,expected);});
