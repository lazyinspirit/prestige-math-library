import fs from 'node:fs';import {createHash} from 'node:crypto';
const base='research/machine-learning-all-101-2026-10-19-owner-native-smoke-';
const configs=[
 ['policy-cpo','candidates/tools/finite-smoke-policy-cpo.mjs','policyCPOMLChecks','contract-array-cas.json'],
 ['verifier-group','candidates/finite-smoke-verifier-group-ml.mjs','verifierGroupMLChecks','finite-smoke-operations.json'],
 ['deep-wasserstein','proposed/tools/finite-smoke-deep-wasserstein-ml.mjs','deepWassersteinMLChecks','root-integration-operations.json']];
const normalize=s=>s.replace(/\s+/g,' ').trim(),results=[],bindings=[];
for(const[tag,file,exp,packet]of configs){const p=base+tag+'/your-proposal/',modulePath=p+file,reg=(await import('../../'+modulePath))[exp],d=JSON.parse(fs.readFileSync(p+packet)),ops=Array.isArray(d)?d:d.operations??d.finite_smoke_array_field_CAS;
 for(const op of ops){const id=op.id??op.consumer??op.path[1],src=fs.readFileSync('items/'+id+'.md','utf8');for(const row of op.after??op.new??op.replacement){const valid=reg[row.check](row),rejects=[null,[],{...row,fixture:'bad-fixture'},{...row,unknown_parameter:NaN},{...row,horizon:999}].map(x=>reg[row.check](x));const present=normalize(src).includes(normalize(row.asserts));if(!valid.ok||!present||rejects.some(r=>r.ok!==false))throw Error('focused fail '+row.check);results.push({group:tag,id,check:row.check,assertion_present:present,positive:valid,invalid_probes_rejected:rejects.length});}}
 bindings.push({path:modulePath,sha256:createHash('sha256').update(fs.readFileSync(modulePath)).digest('hex')});
}
fs.writeFileSync(new URL('./three-more-results.json',import.meta.url),JSON.stringify({native_gate:false,whole_registry_selftest:false,bindings,results},null,2)+'\n');console.log(JSON.stringify({rows:results.length,groups:configs.map(x=>x[0]),native_gate:false}));
