import fs from 'node:fs';import {createHash} from 'node:crypto';
const p='research/machine-learning-all-101-2026-10-19-owner-native-smoke-optimization/your-proposal/';
const file=p+'finite-smoke-optimization-ml.mjs',moduleSHA=createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const {optimizationMLChecks:reg}=await import('../../'+file),d=JSON.parse(fs.readFileSync(p+'packet.json')),results=[];
const norm=s=>s.replace(/\s+/g,' ').trim();
for(const op of d.contract_array_operations){for(const row of op.after){const valid=reg[row.check](row),src=fs.readFileSync(op.source_guard.target,'utf8'),present=norm(src).includes(norm(row.asserts));
 const cases=[['null',null],['array',[]],['missing-selectors',{}],['wrong-fixture',{...row,selectors:{...row.selectors,fixture:'wrong'}}],['unknown-nested',{...row,selectors:{...row.selectors,unknown:1}}],['unknown-top',{...row,unknown_parameter:NaN}],['wrong-check',{...row,check:'unregistered-wrong'}]];
 for(const[k,v]of Object.entries(row.selectors))if(typeof v==='number')cases.push(['NaN-'+k,{...row,selectors:{...row.selectors,[k]:NaN}}]);
 const probes=cases.map(([name,input])=>({name,rejected:reg[row.check](input).ok===false}));
 if(!valid.ok||!present)throw Error('positive/assertion failed '+row.check);
 results.push({id:op.path[1],check:row.check,positive:valid,actual_assertion_excerpt_present:present,probes});
}}
const record={native_gate:false,whole_registry_selftest:false,module:{path:file,sha256:moduleSHA},rows:results.length,results};
const target=new URL('./optimization-review-'+moduleSHA+'.json',import.meta.url);fs.writeFileSync(target,JSON.stringify(record,null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({rows:results.length,moduleSHA,unrejected:results.flatMap(r=>r.probes.filter(x=>!x.rejected).map(x=>({check:r.check,probe:x.name})))}));
