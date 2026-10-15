import fs from 'node:fs';import crypto from 'node:crypto';
const run='physics-td-qft-rpm-62-2026-10-14',base=`research/${run}-owner-stage3-native-battery-rpm-routing-round2`;
if(!process.argv.includes('--apply'))throw Error('root --apply required');
const cache=new Map(),sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const canon=x=>Array.isArray(x)?x.map(canon):x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,canon(x[k])])):x,hv=x=>sha(JSON.stringify(canon(x)));
function bytes(p){if(!cache.has(p)){const s=fs.statSync(p),b=fs.readFileSync(p);cache.set(p,{s,b});}return cache.get(p).b;}
const read=p=>JSON.parse(bytes(p)),sameBytes=(p,a)=>{if(!bytes(p).equals(bytes(a)))throw Error('changed preimage '+p);};
const proposal=read(base+'/decision-partials.proposal.json');if(proposal.run!==run||proposal.round!==2||proposal.patches.length!==4||proposal.source_edits.length||proposal.ledger_appends.length)throw Error('wrong proposal');
sameBytes(proposal.target,proposal.before_byte_archive);
const d=read(proposal.target),contractPath=`research/${run}-batch-25.proof-contracts.json`,manifestPath=`research/${run}-batch-25.pages.json`;
sameBytes(contractPath,base+'/batch-25.proof-contracts.json.current.json');sameBytes(manifestPath,base+'/batch-25.pages.json.current.json');
const prePath=`research/${run}-step3-hash-25-pre.json`,postPath=`research/${run}-step3-hash-25-post.json`;sameBytes(prePath,base+'/pre.immutable.json');sameBytes(postPath,base+'/post.immutable.json');
const pre=read(prePath),post=read(postPath),contracts=read(contractPath).contracts,pages=read(manifestPath),bindings=[];
for(const e of proposal.evidence){const p=`items/${e.id}.md`;sameBytes(p,e.source_byte_guard);sameBytes(p,e.same_bytes_as_frozen_round1_source_archive);
 const pg=pages.find(x=>x.items.some(y=>y.id===e.id)),mf=pg?.items.find(x=>x.id===e.id);if(!mf)throw Error('manifest subject missing');
 const carrier={item_sha256:sha(bytes(p)),contract_sha256:hv(contracts[e.id]??null),manifest_sha256:hv({...mf,__step4_page_id:pg.id})},current=hv(carrier);
 if(hv(pre.hashes[e.id])!==hv(e.pre_carrier)||hv(post.hashes[e.id])!==hv(e.post_carrier)||[hv(pre.hashes[e.id]),hv(post.hashes[e.id])].includes(current))throw Error('amendment not established '+e.id);
 const row=d.decisions.find(x=>x.obligation===e.obligation);if(row.subject_sha256!==current||current!==e.current_decision_subject_sha256_cached_root_value||hv(row.defect_ids)!==hv(e.fixed_defect_ids_preserved)||row.repair_confidence!==1)throw Error('current ownership changed');bindings.push({id:e.id,carrier,current_sha256:current,pre_sha256:hv(pre.hashes[e.id]),post_sha256:hv(post.hashes[e.id])});
}
for(const op of proposal.patches){const m=/^\/decisions\/(\d+)\/(verdict|evidence)$/.exec(op.pointer);if(!m)throw Error('unapproved field');const row=d.decisions[Number(m[1])];if(row[m[2]]!==op.before||!proposal.evidence.some(e=>e.id===row.id))throw Error('patch preimage differs');row[m[2]]=op.after;}
const state=read(`.physics-autopilot/${run}/state.json`);if(Object.values(state.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('writers live');
for(const [p,{s,b}] of cache){const n=fs.statSync(p);if(n.ino!==s.ino||n.size!==s.size||n.mtimeMs!==s.mtimeMs||!fs.readFileSync(p).equals(b))throw Error('currency changed '+p);}
const before=bytes(proposal.target),after=Buffer.from(JSON.stringify(d,null,2)+'\n'),out=base+'/root-adoption';fs.mkdirSync(out,{recursive:true});fs.writeFileSync(out+'/decision.before.json',before);
const tmp=proposal.target+'.root-round2-tmp';fs.writeFileSync(tmp,after);if(!fs.readFileSync(proposal.target).equals(before))throw Error('target changed before rename');fs.renameSync(tmp,proposal.target);
fs.writeFileSync(out+'/receipt.json',JSON.stringify({run,applied:true,at:new Date().toISOString(),source_edits:false,ledger_appends:false,writes:[{path:proposal.target,before_sha256:sha(before),after_sha256:sha(after)}],bindings},null,2)+'\n');console.log(out+'/receipt.json');
