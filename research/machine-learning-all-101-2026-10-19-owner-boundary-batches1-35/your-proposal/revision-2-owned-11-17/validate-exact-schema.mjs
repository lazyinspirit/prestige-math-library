import {readFileSync,writeFileSync} from 'node:fs';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
const h=x=>createHash('sha256').update(x).digest('hex'), tool=readFileSync('tools/proof-contract.mjs','utf8');
const fn=tool.slice(tool.indexOf('function validateBoundaries('),tool.indexOf('\nfunction loadItem(',tool.indexOf('function validateBoundaries(')));
const declaration=tool.match(/const STANDARD_BOUNDARIES = \[[\s\S]*?\];/)[0];
const errors=[],ctx=vm.createContext({error:(code,message,id)=>errors.push({code,message,id})});vm.runInContext(declaration+'\n'+fn+'\nthis.validate=validateBoundaries;',ctx);
const index=JSON.parse(readFileSync(new URL('./supplement-index.json',import.meta.url),'utf8')),rows=[];
for(const x of index.packets){const packet=JSON.parse(readFileSync(x.authoritative_packet,'utf8')),r=packet.rows.find(r=>r.id===x.id&&r.axis===x.axis),text=readFileSync(r.source,'utf8'),steps=new Set([...text.matchAll(/^\s*(\d+\.\d+)\s/gm)].map(m=>m[1]));if(h(readFileSync(r.source))!==r.source_raw_sha256)throw Error('source guard stale');
const c=JSON.parse(readFileSync(r.contract,'utf8')).contracts[r.id],boundaries=structuredClone(c.boundaries);for(const replacement of packet.rows.filter(r=>r.id===x.id)){const at=boundaries.findIndex(b=>b.case===replacement.axis);if(JSON.stringify(boundaries[at])!==JSON.stringify(replacement.from))throw Error('boundary CAS stale');boundaries[at]=replacement.to;}
const start=errors.length;ctx.validate(r.id,boundaries,steps);const itemErrors=errors.slice(start);if(itemErrors.length)throw Error(JSON.stringify(itemErrors));
const anchor=x.batch===13?'If an intercept is included':x.batch===17?'If $d=d_{\\max}$ or the candidate set is empty':'2.1 Hence every feasible objective';if(!text.includes(anchor))throw Error('actual cited source clause missing');rows.push({id:r.id,axis:r.axis,packet:x.authoritative_packet,source_raw_sha256:r.source_raw_sha256,errors:[],anchor_literal_verified:anchor});}
writeFileSync(new URL('./schema-validation.json',import.meta.url),JSON.stringify({kind:'pure-exact-native-boundary-schema-helper-validation',at:new Date().toISOString(),tool_path:'tools/proof-contract.mjs',tool_raw_sha256:h(tool),helper_raw_sha256:h(fn),rows,gate:false,new_review_credit:false},null,2)+'\n');console.log(JSON.stringify({ok:true,rows:rows.length,gate:false}));
