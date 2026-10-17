// ROOT-REVIEWED EXECUTION ONLY after all numerical families/contracts integrate.
// This calls only the run's15new numerical families with unsupported inputs;
// it never invokes a whole-registry self-test or imports quantum callbacks.
import fs from 'node:fs';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
const run='numerical-optimization-dynamics-2026-10-16';
if(!process.argv.includes('--execute-root-reviewed'))throw Error('Requires explicit --execute-root-reviewed after root code review/integration.');
const expected=[
 'numerical-particles-fixture','numerical-sparse-fixture','numerical-polynomial-quadrature-fixture',
 'numerical-multistep-fixture','numerical-periodic-grid-fixture','numerical-implicit-rk-fixture',
 'numerical-quasi-newton-fixture','numerical-rosenbrock-fixture','numerical-time-parallel-fixture',
 'numerical-population-fixture','numerical-gauss-fixture','numerical-inverse-problem-fixture',
 'numerical-elliptic-control-fixture','numerical-multirate-fixture','numerical-sensitivity-fixture',
];
const registryPath='tools/finite-smoke-numerical.mjs';
const {numericalChecks}=await import(pathToFileURL(path.resolve(registryPath)));
const contractPath=`research/${run}-proof-contracts.json`,document=JSON.parse(fs.readFileSync(contractPath,'utf8'));
if(document.version!==1||!Array.isArray(document.scope)||!document.scope.length)throw Error('Missing actual nonempty run merged contracts.');
const samples=new Map();
for(const id of document.scope)for(const entry of document.contracts[id]?.finite_smoke??[])if(expected.includes(entry.check)&&!samples.has(entry.check))samples.set(entry.check,{id,entry});
if(samples.size!==15||expected.some(k=>typeof numericalChecks[k]!=='function'||!samples.has(k)))throw Error('All15numerical families and actual scoped entry selectors must be installed first.');
function selector(entry){
 if(Object.hasOwn(entry,'fixture'))return['fixture'];
 if(entry.parameters&&Object.hasOwn(entry.parameters,'fixture'))return['parameters','fixture'];
 if(entry.parameters&&Object.hasOwn(entry.parameters,'variant'))return['parameters','variant'];
 throw Error('Prepared contract has no explicit fixture/variant selector.');
}
function put(object,keys,value){const clone=structuredClone(object);let target=clone;for(const k of keys.slice(0,-1))target=target[k];target[keys.at(-1)]=value;return clone;}
const results=[];
for(const key of expected){
 const {id,entry}=samples.get(key),where=selector(entry),tests=[
  ['unknown-selector',put(entry,where,'__unsupported_fixture__')],
  ['empty-selector',put(entry,where,'')],
  ['null-selector',put(entry,where,null)],
  ['object-selector',put(entry,where,{unexpected:true})],
  ['null-parameters',{...structuredClone(entry),parameters:null}],
  ['array-parameters',{...structuredClone(entry),parameters:[]}],
  ['unknown-numeric-parameter',{...structuredClone(entry),parameters:{__unsupported_numeric_parameter__:true}}],
  ['null-obligation',null],
 ];
 for(const [name,input]of tests){
  let result;
  try{result=numericalChecks[key](input);}catch(error){result={ok:null,summary:`UNCAUGHT ${error.message}`};}
  results.push({key,id,test:name,expected_ok:false,result,passed:result?.ok===false});
 }
}
const errors=results.filter(x=>!x.passed);
process.stdout.write(JSON.stringify({run,by:'root-reviewed-invariant-harness',at:new Date().toISOString(),registry:registryPath,contracts:contractPath,families:15,unsupported_input_cases:results.length,errors:errors.length,results,limitations:'Unsupported-input rejection only. No general numerical theorem, positive fixture suite, quantum registry, native gate or source mutation is covered.'},null,2)+'\n');
if(errors.length)process.exitCode=1;
