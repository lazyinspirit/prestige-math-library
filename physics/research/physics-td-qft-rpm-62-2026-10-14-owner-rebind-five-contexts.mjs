import fs from 'node:fs';import crypto from 'node:crypto';
import {itemHashGuard} from '../../tools/physics-support/item-hash.mjs';
import {externalContextReceipt,step3Escalations} from '../../tools/physics-support/step3-escalations.mjs';
const run='physics-td-qft-rpm-62-2026-10-14',base=`research/${run}`,cp=`${base}-step3-owner-external-context.json`,dp=`${base}-alpha-batch-15-3a-decisions.json`,pp=`${base}-owner-step4-td-round1/native-observation-02-published-context-five-uses/root-adoption-proposal.json`,sha=x=>crypto.createHash('sha256').update(x).digest('hex'),read=p=>JSON.parse(fs.readFileSync(p)),eq=(a,b)=>JSON.stringify(a)===JSON.stringify(b);
const p=read(pp),craw=fs.readFileSync(cp),draw=fs.readFileSync(dp),c=JSON.parse(craw),d=JSON.parse(draw),archive=`${base}-owner-five-context-adoption-${Date.now()}`;
if(!p.released||p.run!==run||p.scientific_owner!=='/root/resolve_step4_td'||sha(craw)!==p.observed_original_context_receipt.sha256)throw Error('Released evidence/current receipt mismatch');
if(Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Writers not drained');
const verifyRef=ref=>{if(sha(fs.readFileSync(ref.path))!==ref.sha256)throw Error('Evidence changed '+ref.path);};
verifyRef(p.current_scoped_review);verifyRef(p.genuine_original_receipt);verifyRef(p.observed_original_selected_entries);verifyRef(p.exact_consumer_diff);
for(const [ob,x] of Object.entries(p.entries)){
 if(!/^reader:15:(7|8|9|10|11)$/.test(ob))throw Error('Unexpected obligation');const old=c.contexts.find(z=>z.obligation===ob),next=x.proposed_context_entry;
 for(const k of ['obligation','supplier_id','consumer_id','group','used_clause','maintenance','finding_sha256'])if(!eq(old[k],next[k]))throw Error('Protected field '+k);
 for(const who of ['supplier','consumer']){const raw=fs.readFileSync(`items/${next[who+'_id']}.md`);if(sha(raw)!==x[who+'_raw_sha256']||itemHashGuard(raw.toString())!==x[who+'_itemHashGuard_sha256']||next[who+'_math_sha256']!==x[who+'_itemHashGuard_sha256'])throw Error('Source changed '+who);}
 for(const ref of next.review.evidence_refs)verifyRef(ref);
 c.contexts[c.contexts.indexOf(old)]=next;
}
if(Object.keys(p.entries).length!==5)throw Error('Expected five uses');
c.inputs[p.current_scoped_review.path]=p.current_scoped_review.sha256;c.inputs[pp]=sha(fs.readFileSync(pp));
fs.mkdirSync(archive);fs.writeFileSync(`${archive}/context.before.json`,craw);fs.writeFileSync(`${archive}/decisions.before.json`,draw);
const newRaw=JSON.stringify(c,null,2)+'\n',newHash=sha(newRaw);
try{
 fs.writeFileSync(cp+'.root-tmp',newRaw);if(!fs.readFileSync(cp).equals(craw)||!fs.readFileSync(dp).equals(draw))throw Error('Shared input changed');fs.renameSync(cp+'.root-tmp',cp);
 for(const row of d.decisions.filter(z=>z.verdict==='context_accepted'))row.context_receipt_sha256=newHash;
 // The native helper verifies the exact on-disk owner row before deriving its seal.
 fs.writeFileSync(dp,JSON.stringify(d,null,2)+'\n');
 for(const row of d.decisions.filter(z=>z.verdict==='context_accepted')){const out=externalContextReceipt(process.cwd(),run,row,null,d.group);if(!out.valid)throw Error(out.error);row.context_evidence=out.seal;}
 fs.writeFileSync(dp,JSON.stringify(d,null,2)+'\n');
 const holds=step3Escalations(process.cwd(),run);if(holds.length)throw Error(holds.join('\n'));
 for(let i=0;i<d.decisions.length;i++)for(const key of ['observed_sha256','subject_sha256','obligation','id','defect_ids','verdict'])if(!eq(d.decisions[i][key],JSON.parse(draw).decisions[i][key]))throw Error('Protected decision '+key);
 fs.writeFileSync(`${archive}/receipt.json`,JSON.stringify({run,at:new Date().toISOString(),scientific_owner:p.scientific_owner,evidence:pp,evidence_sha256:sha(fs.readFileSync(pp)),updated_uses:Object.keys(p.entries),global_seals_rebound:8,remaining_step3_holds:holds,source_edits:false,published_maintenance_closed:false,context_receipt_sha256:newHash},null,2)+'\n');console.log(JSON.stringify({adopted:true,archive,uses:5,seals:8,step3_holds:0}));
}catch(e){fs.writeFileSync(cp,craw);fs.writeFileSync(dp,draw);throw e;}
