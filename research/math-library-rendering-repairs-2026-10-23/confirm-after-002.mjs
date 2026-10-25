import fs from 'node:fs';import crypto from 'node:crypto';import {itemHashGuard} from '../../tools/item-hash.mjs';
const base='research/math-library-rendering-repairs-2026-10-23',dir=base+'/previews/after-002',m=JSON.parse(fs.readFileSync(dir+'/manifest.json','utf8')),p=base+'/visual-confirmations.json',v=JSON.parse(fs.readFileSync(p,'utf8'));const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
for(const e of m.items){
 const raw=fs.readFileSync(dir+'/'+e.snapshot),receipt=JSON.parse(fs.readFileSync(base+'/receipts/'+e.id+'.json','utf8'));
 if(sha(raw)!==e.source_sha256||itemHashGuard(raw.toString())!==receipt.content_sha256||itemHashGuard(fs.readFileSync(e.source,'utf8'))!==receipt.content_sha256)throw Error('Stale capture: '+e.id);
 const body=e.id==='ex-negative-sobolev-order-containing-a-dirac-mass'||e.id==='ex-riesz-transform-as-a-standard-calderon-zygmund-operator',n=body?m.captures.find(x=>x.id===e.id).tile_count:1;
 const screenshots=Array.from({length:n},(_,i)=>dir.replace(/^research\//,'')+'/screenshots/'+e.id+'--'+String(i+1).padStart(2,'0')+'.png');
 if(v[e.id])throw Error('Existing confirmation '+e.id);
 v[e.id]={reviewer:'/root/rendering_repair_coordinator',checked_at:new Date().toISOString(),scope:body?(e.id.startsWith('ex-negative')?'Changed proof-technique banner only: readable P-series label with no leaked dollars. All four tiles actually viewed at original resolution to locate the banner; not a whole-item audit.':'Changed explicit polar-coordinates reference label only: exponent renders as mathematics. Both tiles actually viewed at original resolution; not a whole-item audit.'):'Changed title only: intended exponent/subscript visibly typeset correctly. First tile actually viewed at original resolution; not a whole-item audit.',content_sha256:receipt.content_sha256,source_sha256:e.source_sha256,screenshots,viewed_tiles:screenshots,preview_manifest:dir+'/manifest.json'};
}
fs.writeFileSync(p+'.tmp',JSON.stringify(v,null,2)+'\n');fs.renameSync(p+'.tmp',p);console.log('Confirmed 10 changed regions; preserved previous '+(Object.keys(v).length-10)+' entries.');
