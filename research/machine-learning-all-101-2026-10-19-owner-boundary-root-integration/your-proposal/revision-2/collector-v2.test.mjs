import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {mergeBoundary,rowHash,sha,apply,replaceBoundarySpans,boundarySchemaErrors,boundaryArraySchemaErrors,STANDARD_BOUNDARIES,RUN} from './collect-v2.mjs';
const before={case:'empty',status:'not_applicable',reason:'old',foreign:{retain:[1,2,3]}};
const after=mergeBoundary(before,{case:'empty',status:'checked',evidence:'The Definition explicitly addresses the empty case.'});
assert.deepEqual(after.foreign,before.foreign);
assert.equal(Object.hasOwn(after,'reason'),false);
assert.throws(()=>mergeBoundary(before,{...before,case:'zero'}),/Axis change/);
assert.throws(()=>mergeBoundary(before,{...before,foreign:{lost:true}}),/unknown boundary field/);
assert.equal(rowHash({case:'empty',status:'checked',reason:'reason wins',evidence:'unused'}),sha(JSON.stringify({case:'empty',status:'checked',text:'reason wins'})));
const nativeText=fs.readFileSync(new URL('../../../../tools/proof-contract.mjs',import.meta.url),'utf8');
const nativeFunction=nativeText.slice(nativeText.indexOf('function validateBoundaries('),nativeText.indexOf('function loadItem('));
const actualSteps=new Map([['1.1',{id:'1.1'}],['2.1',{id:'2.1'}]]);
const parityFixtures=[
 {case:'empty',status:'checked'},
 {case:'empty',status:'checked',evidence:'   '},
 {case:'empty',status:'checked',evidence:'Concrete result without an anchor.'},
 {case:'empty',status:'checked',evidence:'The Definition handles this case.'},
 {case:'empty',status:'checked',evidence:'The Statement excludes this value.'},
 {case:'empty',status:'checked',evidence:'The Example gives this value.'},
 {case:'empty',status:'checked',evidence:'The Counterexample gives this value.'},
 {case:'empty',status:'checked',evidence:'step 1.1 resolves the case.'},
 {case:'empty',status:'checked',evidence:'steps 9.9 are required.'},
 {case:'empty',status:'checked',evidence:'1.1 resolves the case.'},
 {case:'empty',status:'checked',evidence:'The numerical bound is 9.9.'},
 {case:'empty',status:'checked',evidence:'The Definition bound is 9.9.'},
 {case:'empty',status:'not_applicable',evidence:'Evidence cannot substitute for a required reason.'},
 {case:'empty',status:'not_applicable',reason:'  '},
 {case:'empty',status:'not_applicable',reason:'An explicit rationale.'},
];
const source='---\ntitle: parser fixture\n---\n## Proof\n\n1.1 First native proof step.\n\n2.1 Second native proof step.\n';
for(const row of parityFixtures){const nativeErrors=[];const nativeValidator=new Function('STANDARD_BOUNDARIES','error',`return (${nativeFunction});`)(STANDARD_BOUNDARIES,(code,message)=>nativeErrors.push({code,message}));const rest=STANDARD_BOUNDARIES.slice(1).map(c=>({case:c,status:'not_applicable',reason:'Synthetic explicit rationale.'}));nativeValidator('synthetic',[row,...rest],actualSteps);assert.deepEqual(boundarySchemaErrors(row,source),nativeErrors);}
assert.equal(boundarySchemaErrors({case:'empty',status:'checked',evidence:'step 1.1 resolves this.'},'## Example\n\n1.1 Not a native proof section.\n')[0].code,'boundary-evidence-step-missing');
assert.equal(boundarySchemaErrors({case:'empty',status:'checked',evidence:'step 1.1 resolves this.'},'## Facts & Assumptions\n\n1.1 Not a native proof section.\n')[0].code,'boundary-evidence-step-missing');
assert(boundaryArraySchemaErrors([{case:'empty',status:'not_applicable',reason:'fixture'}],source).some(e=>e.code==='boundary-missing'));
for(const rows of [null,[],[null],[{case:'unknown',status:'bad'}],[...STANDARD_BOUNDARIES.map(c=>({case:c,status:'not_applicable',reason:'Fixture rationale.'})),{case:'empty',status:'not_applicable',reason:'Duplicate fixture.'}]]){const nativeErrors=[];const nativeValidator=new Function('STANDARD_BOUNDARIES','error',`return (${nativeFunction});`)(STANDARD_BOUNDARIES,(code,message)=>nativeErrors.push({code,message}));nativeValidator('synthetic',rows,actualSteps);assert.deepEqual(boundaryArraySchemaErrors(rows,source),nativeErrors);}
const repo=fs.mkdtempSync(path.join(os.tmpdir(),'boundary-collector-synthetic-'));
try {
 const invPath=`research/${RUN}-owner-boundary-audit-diagnosis/affected-by-batch.json`, file='research/contracts.json';
 const put=(p,x)=>{fs.mkdirSync(path.dirname(path.join(repo,p)),{recursive:true});fs.writeFileSync(path.join(repo,p),x);};
 put('items/mock.md','## Definition\n\nSynthetic source fixture only.\n');put('archive/mock.md','## Definition\n\nSynthetic source fixture only.\n');
 const ids=Array.from({length:910},(_,i)=>`mock-${i}`);
 const inv=[{batch:1,contract:file,items:ids.map(id=>({id,source:'items/mock.md',template_rows:[{case:'empty'}],contradicted:[]}))}];put(invPath,JSON.stringify(inv));
 const doc={foreign_top:{stable:true},contracts:Object.fromEntries(ids.map(id=>[id,{boundaries:[before,...STANDARD_BOUNDARIES.slice(1).map(c=>({case:c,status:'not_applicable',reason:'Synthetic explicit nonapplicability fixture.'}))],finite_smoke:[{id:'foreign-callback',selector:{whole:['array','preserved']},literal:'a',numeric:1}],unknown:{keep:42}}]))};const rawDoc=JSON.stringify(doc).replaceAll('"literal":"a","numeric":1','"literal":"\\u0061","numeric":1.00');put(file,rawDoc);
 const original=fs.readFileSync(path.join(repo,file));
 const seal={collector_revision:2,sealed_for_root_apply:true,ready:true,expected_items:910,covered_items:910,expected_axes:910,inputs:[{file:invPath,sha256:sha(fs.readFileSync(path.join(repo,invPath)))}],contracts:[{file,raw_sha256:sha(original)}],operations:ids.map(id=>({batch:1,id,axis:'empty',contract:file,index:0,before,after,source:'items/mock.md',snapshot:'archive/mock.md',source_raw_sha256:sha('## Definition\n\nSynthetic source fixture only.\n')}))};
 const bytes=Buffer.from(JSON.stringify(seal)), auth={actor:'/root',run:RUN,action:'apply-boundary-field-cas',seal_sha256:sha(bytes)};
 assert.throws(()=>apply(repo,{...seal,prospective_only:true},auth,bytes,path.join(repo,'bad-prospective')),/final root seal/);
 assert.equal(fs.existsSync(path.join(repo,'bad-prospective')),false);
 assert.throws(()=>apply(repo,seal,{...auth,actor:'/someone-else'},bytes,path.join(repo,'bad-auth')),/authorization/);
 assert.equal(fs.existsSync(path.join(repo,'bad-auth')),false);
 const duplicate=structuredClone(seal);duplicate.operations[1]=duplicate.operations[0];const dupBytes=Buffer.from(JSON.stringify(duplicate));
 assert.throws(()=>apply(repo,duplicate,{...auth,seal_sha256:sha(dupBytes)},dupBytes,path.join(repo,'bad-duplicate')),/coverage/);
 assert.equal(fs.existsSync(path.join(repo,'bad-duplicate')),false);
 put('items/mock.md','changed');assert.throws(()=>apply(repo,seal,auth,bytes,path.join(repo,'bad-source')),/Source CAS/);assert.equal(fs.existsSync(path.join(repo,'bad-source')),false);put('items/mock.md','## Definition\n\nSynthetic source fixture only.\n');
 put(file,original+' ');assert.throws(()=>apply(repo,seal,auth,bytes,path.join(repo,'bad-contract')),/Input changed/);assert.equal(fs.existsSync(path.join(repo,'bad-contract')),false);put(file,original);
 apply(repo,seal,auth,bytes,path.join(repo,'applied'));
 const actualRaw=fs.readFileSync(path.join(repo,file),'utf8'), actual=JSON.parse(actualRaw);
 assert.equal(actualRaw.split('"literal":"\\u0061","numeric":1.00').length-1,910);
 assert.throws(()=>replaceBoundarySpans('{"duplicate":1,"duplicate":2}',[]),/Duplicate JSON/);
 assert.deepEqual(actual.foreign_top,doc.foreign_top);
 for(const id of ids){assert.deepEqual(actual.contracts[id].finite_smoke,doc.contracts[id].finite_smoke);assert.deepEqual(actual.contracts[id].unknown,doc.contracts[id].unknown);assert.deepEqual(actual.contracts[id].boundaries,[after,...doc.contracts[id].boundaries.slice(1)]);}
 assert.deepEqual(fs.readFileSync(path.join(repo,'applied/before',file)),original);
 assert.throws(()=>apply(repo,seal,auth,bytes,path.join(repo,'applied')),/Input changed|already exists/);
 console.log(JSON.stringify({synthetic_only:true,items:910,checks:['native checked/NA validator exact parity15 row fixtures plus5 array fixtures','native proof-section parsing exclusions','full-array missing-axis rejection','unknown boundary preservation','owned reason removal','unknown-field mutation rejection','axis change rejection','exact row hash semantics','prospective-plan apply rejection','root authorization','duplicate axis rejection','source CAS before writes','contract CAS before writes','foreign whole finite_smoke semantic and exact byte preservation','duplicate JSON key rejection','foreign top/entry preservation','exclusive before archive','atomic per-file replacement'],ok:true}));
} finally {fs.rmSync(repo,{recursive:true,force:true});}
