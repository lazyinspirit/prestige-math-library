import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {frontier81QuantumChecks as checks} from './finite-smoke-frontier81-quantum.mjs';
const base=new URL('.',import.meta.url);
const patches=JSON.parse(readFileSync(new URL('row-patches.json',base),'utf8')).patches;
const outcomes=[];
for(const patch of patches){
 const row=patch.after[0],check=checks[row.check];assert.equal(typeof check,'function');
 const source=readFileSync(patch.source,'utf8');assert.ok(source.includes(row.asserts));
 const current=JSON.parse(readFileSync(patch.contract,'utf8')).contracts[patch.id].finite_smoke;
 assert.deepEqual(current,patch.before);
 const result=check(row);assert.equal(result.ok,true,`${patch.id}: ${result.summary}`);
 outcomes.push({id:patch.id,check:row.check,...result});
 for(const invalid of [{...row,fixture:'unsupported'},{...row,fixture:undefined},{...row,L:4}])assert.equal(check(invalid).ok,false);
 assert.equal(check(null).ok,false);
}
assert.equal(Object.keys(checks).length,27);
const moduleSource=readFileSync(new URL('finite-smoke-frontier81-quantum.mjs',base),'utf8');
// Change independent computations, leaving expected invariants and assertions intact.
// The corresponding check must detect every injected defect.
const mutations=[
 ['gentle','Math.sqrt(lambda)*rho*Math.sqrt(lambda)','2*Math.sqrt(lambda)*rho*Math.sqrt(lambda)'],
 ['sqrt-order','sb=Math.sqrt(B)','sb=0'],
 ['hayashi-nagaoka','x===0?0:1/Math.sqrt(x)','x===0?1:2/Math.sqrt(x)'],
 ['entropy-zero','x===0?0:x*Math.log(x)','x===0?1:x*Math.log(x)'],
 ['packing-one','j===m?0:d/D','j===m?d/D:0'],
 ['schmidt-pure','const eig=[1,0,0]','const eig=[1/2,1/2,0]'],
 ['typical-pure','const probs=[1]','const probs=[1/2,1/2]'],
 ['schumacher-pure','M=rank+1','M=rank+2'],
 ['hsw-single','chi=entropy(average)-p[0]*entropy(eig)','chi=entropy(average)+p[0]*entropy(eig)'],
 ['qubit-rates','S/Math.LN2','S*Math.LN2'],
 ['fixed-povm','0.5*v.reduce','0.6*v.reduce'],
 ['binary-pure','avg=outer(v)','avg=scale(outer(v),2)'],
 ['toric-inventory','v(i+1,j),h(i,j+1)','v(i+1,j),h(i,j)'],
 ['toric-ranks','return piv.size','return piv.size+1'],
 ['toric-commutation','v(i+1,j),h(i,j+1)','v(i+1,j),h(i,j)'],
 ['toric-dimension','const r=rank(t.stars)+rank(t.faces)','const r=rank(t.stars)+rank(t.faces)+1'],
 ['toric-loops','h(0,0),h(0,1),h(0,2)','h(0,0),h(1,0),h(2,0)'],
 ['toric-gap','2*je*pop(a)+2*jm*pop(b)','je*pop(a)+jm*pop(b)'],
 ['toric-worked','support^=1<<t.h(k,0)','support^=1<<t.h(k,1)'],
 ['planar-toric','if(j<d&&i>0&&i<d)','if(j<d&&i>=0&&i<d)'],
 ['fusion-measurement','i===a?x:0','i===a?2*x:0'],
 ['controlled-phase','[1,1,-1,-1]','[1,1,1,1]'],
 ['b6-identity','target[4][4]=1/det','target[4][4]=-1/det'],
 ['sk-budget','numerator=12*denominator+3*numerator','numerator=10*denominator+3*numerator'],
 ['multiplicity-two','[...surrounding,mu]','[...surrounding,0]'],
 ['ising-periodic',"a==='D'?b!=='D':b==='D'","a==='D'?b==='D':b!=='D'"],
 ['fib-projector','F=[[u,v],[v,-u]]','F=[[u,v],[v,u]]'],
];
const mutationOutcomes=[];
for(const [name,from,to]of mutations){
 assert.ok(moduleSource.includes(from),`missing mutation target ${name}`);
 const modified=moduleSource.replace(from,to);
 const imported=await import('data:text/javascript;base64,'+Buffer.from(modified).toString('base64'));
 const key=`frontier81-quantum-${name}`,result=imported.frontier81QuantumChecks[key]({fixture:key+'-v1'});
 assert.equal(result.ok,false,`undetected computation mutation ${name}`);
 mutationOutcomes.push({check:key,injected:from+' -> '+to,detected:true,summary:result.summary});
}
const report={ok:true,scope:'isolated new module functions only; no production registry or native validator invoked',positive:outcomes.length,negativeFixtureAndShape:patches.length*4,sourceAssertionAndRowGuards:patches.length,computationMutations:mutationOutcomes.length,outcomes,mutationOutcomes};
writeFileSync(new URL('isolated-results.json',base),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({ok:report.ok,positive:report.positive,negativeFixtureAndShape:report.negativeFixtureAndShape,sourceAssertionAndRowGuards:report.sourceAssertionAndRowGuards,computationMutations:report.computationMutations}));
