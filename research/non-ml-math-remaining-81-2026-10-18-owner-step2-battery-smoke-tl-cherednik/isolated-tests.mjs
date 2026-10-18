import assert from 'node:assert/strict';
import {readFileSync,writeFileSync} from 'node:fs';
import {frontier81TLCherednikChecks as checks} from './finite-smoke-frontier81-tl-cherednik.mjs';
const here=new URL('.',import.meta.url);
const patches=JSON.parse(readFileSync(new URL('row-patches.json',here),'utf8')).patches;
const normal=s=>s.replace(/\r?\n/g,' ').replace(/\s+/g,' ').trim();
const outcomes=[];
for(const p of patches){const s=p.replacement.finite_smoke[0], source=readFileSync(p.source,'utf8');assert(normal(source).includes(normal(s.asserts)));const outcome=checks[s.check](s);assert.equal(outcome.ok,true,`${p.id}: ${outcome.summary}`);outcomes.push({id:p.id,check:s.check,...outcome});}
const rejectionCases=[['parenthesis-enumeration-n0-through-n3',{max_n:0}],['normal-form-index-sets-n0-through-n3',{max_n:2}],['rank-zero-through-three-basis-and-product-table',{max_n:4}],['rank-three-normal-form-enumeration',{n:2}],['rank-two-loop-zero-boundary',{delta:1}],['rank-one-boundary-recurrence',{c:0}],['weyl-commutator-on-monomials',{max_degree:0}],['rank-one-dunkl-values',{c:-0.5}],['extension-obstruction-matrix',{mu:1}],['rank-one-repeated-root',{e:3}],['rank-one-low-degree-reduction',{max_degree:1}]];
for(const [name,s] of rejectionCases)assert.equal(checks[name](s).ok,false,name);
// Mutate mathematical kernels/claimed table, not the result flag. Each change
// must create a disagreement with the independently constructed fixture.
const raw=readFileSync(new URL('finite-smoke-frontier81-tl-cherednik.mjs',here),'utf8');
const mutations=[
 {name:'loop-count',from:'if(!ext.length)loops++;',to:'if(!ext.length)loops+=2;',check:'rank-two-loop-zero-boundary'},
 {name:'table-entry',from:'[[0,1],[1,1],[0,3],[1,3],[0,1]]',to:'[[0,1],[0,1],[0,3],[1,3],[0,1]]',check:'rank-zero-through-three-basis-and-product-table'},
 {name:'dunkl-sign',from:'return sub(derivative(p),scale(diff.slice(1),c));',to:'return sub(derivative(p),scale(diff.slice(1),-c));',check:'rank-one-dunkl-values'},
 {name:'derivative-normalization',from:'v*(i+1)',to:'v*(i+2)',check:'weyl-commutator-on-monomials'},
 {name:'drop-meridian-endpoint',from:'return (-1)**(j-r);',to:'return (-1)**(-r);',check:'rank-one-repeated-root'},
 {name:'commutator-sign',from:'a+=1-2*c*((-1)**k)',to:'a+=1+2*c*((-1)**k)',check:'rank-one-boundary-recurrence'},
];
const mutationOutcomes=[];
for(const m of mutations){assert(raw.includes(m.from),m.name);const altered=raw.replace(m.from,m.to);const mod=await import(`data:text/javascript;base64,${Buffer.from(altered).toString('base64')}`);const outcome=mod.frontier81TLCherednikChecks[m.check]({});assert.equal(outcome.ok,false,m.name);mutationOutcomes.push({mutation:m.name,check:m.check,detected:true,summary:outcome.summary});}
const report={kind:'isolated module and source-projection tests only; no native gates/registry self-test',ok:true,positive_cases:outcomes,invalid_selector_rejections:rejectionCases.length,mathematical_mutations:mutationOutcomes};
writeFileSync(new URL('isolated-test-results.json',here),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify(report,null,2));
