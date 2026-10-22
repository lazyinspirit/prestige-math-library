import fs from 'node:fs';
import crypto from 'node:crypto';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
const root='research/physics-non-fluid-129-2026-10-21-r2-owner-em-nrqm-boundary',p=JSON.parse(fs.readFileSync(`${root}/em-research.json`)),sha=t=>crypto.createHash('sha256').update(t).digest('hex');
if(fs.existsSync('.physics-autopilot/physics-non-fluid-129-2026-10-21-r2/controller.lock'))throw Error('native controller lock exists');
fs.mkdirSync(`${root}/em-preimages`,{recursive:true});
for(const c of p.contracts){const t=fs.readFileSync(c.path,'utf8');if(sha(t)!==c.raw_sha256)throw Error(`contract drift ${c.path}`);}
for(const c of p.coverage){if(itemHashGuard(fs.readFileSync(`items/${c.id}.md`,'utf8'))!==c.item_sha256)throw Error(`source drift ${c.id}`);}
const applied=[];
for(const s of p.source_patches){const path=`items/${s.id}.md`,t=fs.readFileSync(path,'utf8');if(t.split(s.find).length!==2)throw Error('source patch not unique '+s.id);fs.writeFileSync(`${root}/em-preimages/${s.id}.md`,t);const updated=t.replace(s.find,s.replace);fs.writeFileSync(path,updated);applied.push({path,before_raw_sha256:sha(t),after_raw_sha256:sha(updated),before_item_sha256:itemHashGuard(t),after_item_sha256:itemHashGuard(updated)});}
for(const c of p.contracts){const old=fs.readFileSync(c.path,'utf8'),d=JSON.parse(fs.readFileSync(`${root}/em-staged/batch-${c.batch}.json`));fs.writeFileSync(`${root}/em-preimages/batch-${c.batch}.json`,old);
 if(c.batch===4){const s=p.source_patches[0];for(const r of d.contracts[s.id].derivations??[])if(r.step==='2.1'){if(!r.claim.includes(s.find))throw Error('missing mirror');r.claim=r.claim.replace(s.find,s.replace);}}
 for(const [id,e]of Object.entries(d.contracts))for(const r of e.boundaries??[])if(r.template_review)r.template_review.item_sha256=itemHashGuard(fs.readFileSync(`items/${id}.md`,'utf8'));
 const next=JSON.stringify(d,null,2)+'\n';fs.writeFileSync(c.path,next);applied.push({path:c.path,before_raw_sha256:sha(old),after_raw_sha256:sha(next)});
}
const mirror={path:'research/physics-non-fluid-129-2026-10-21-r2-batch-5.pages.json',id:'pthm-emx-drude-plasma-response',field:'statement',find:p.source_patches[1].find,replace:p.source_patches[1].replace,production_edited:false,owner:'root concurrent metadata owner'};
fs.writeFileSync(`${root}/em-applied.json`,JSON.stringify({version:1,run:p.run,reviewer:p.reviewer,native_lock_absent:true,applied,mirror_proposals:[mirror],aggregate_contract:'Parent/root must merge corrected batch4 step2.1 derivation and all corrected boundary rows; aggregate untouched.'},null,2)+'\n');
console.log(JSON.stringify({applied:applied.length,mirror}));
