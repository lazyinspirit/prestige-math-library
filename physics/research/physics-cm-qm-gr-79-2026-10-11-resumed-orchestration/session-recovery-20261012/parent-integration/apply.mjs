// Parent-only explicit apply; does nothing without both explicit flags and a successful guarded proposal.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const args=process.argv.slice(2),root=process.cwd();
const assert=(ok,msg)=>{if(!ok)throw Error(msg);};
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const hash=p=>fs.existsSync(p)?sha(fs.readFileSync(p)):null;
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const i=args.indexOf('--proposal');assert(args.includes('--apply-after-drain')&&i>=0&&args[i+1],'Parent must explicitly supply --apply-after-drain --proposal PATH');
const file=path.resolve(args[i+1]),proposal=read(file),dest=path.dirname(file);
assert(dest.startsWith(root+path.sep+'research'+path.sep)&&proposal.mode==='metadata-currency-only-parent-apply'&&proposal.production_writes_performed===false,'Wrong proposal authority/location');
const safe=f=>{assert(!path.isAbsolute(f)&&!f.split(path.sep).includes('..'),'Unsafe relative path');return path.join(root,f);};
assert(hash(proposal.drain_receipt)===proposal.drain_raw_sha256&&hash(proposal.iid_confirmation)===proposal.iid_confirmation_raw_sha256,'Parent confirmations changed since preparation');
const drain=read(proposal.drain_receipt);assert(drain.run===proposal.run&&drain.confirmedByParent===true&&(drain.writersDrained===true||drain.production_writer_drained===true),'Writer drain not confirmed');
const history=safe(`.physics-autopilot/${proposal.run}/owner-gate-history/${proposal.baseline_attempt}.json`);assert(hash(history)===proposal.baseline_history_raw_sha256,'Consumed baseline history changed');
const state=read(safe(`.physics-autopilot/${proposal.run}/state.json`));assert(Object.values(state.dispatches??{}).filter(d=>d.startedAt&&!d.endedAt).every(d=>String(d.role??'').includes('reviewer')||String(d.label??'').includes('scope-reviewer')),'Native writer is active');
for(const g of proposal.current_input_guards)assert(hash(safe(g.path))===g.raw_sha256,'Current input changed; reprepare instead of applying: '+g.path);
for(const m of proposal.mutations){assert(hash(safe(m.path))===m.before_raw_sha256,'Mutation preimage changed: '+m.path);assert(hash(safe(m.proposed_file))===m.after_raw_sha256,'Proposed bytes changed: '+m.path);}
const archive=path.join(dest,'applied-before');assert(!fs.existsSync(path.join(dest,'applied-receipt.json')),'Proposal already applied');
for(const m of proposal.mutations){
 const target=safe(m.path),stored=path.join(archive,m.path);fs.mkdirSync(path.dirname(stored),{recursive:true});
 if(m.before_raw_sha256!==null){assert(!fs.existsSync(stored),'Existing apply preimage');fs.copyFileSync(target,stored);assert(hash(stored)===m.before_raw_sha256,'Failed archive copy');}
 const bytes=fs.readFileSync(safe(m.proposed_file));const temporary=target+'.parent-integration-tmp';assert(!fs.existsSync(temporary),'Temporary file collision');fs.writeFileSync(temporary,bytes);fs.renameSync(temporary,target);
}
fs.writeFileSync(path.join(dest,'applied-receipt.json'),JSON.stringify({version:1,run:proposal.run,applied_at:new Date().toISOString(),proposal_file:path.relative(root,file),proposal_raw_sha256:hash(file),metadata_only:true,baseline_attempt:proposal.baseline_attempt,mutations:proposal.mutations.map(m=>({path:m.path,before_raw_sha256:m.before_raw_sha256,current_raw_sha256:hash(safe(m.path)),before_file:m.before_raw_sha256===null?null:path.relative(root,path.join(archive,m.path))})),native_history_modified:false,new_acceptance_or_audit_claimed:false},null,2)+'\n');
console.log(JSON.stringify({applied:proposal.mutations.length,receipt:path.relative(root,path.join(dest,'applied-receipt.json'))}));
