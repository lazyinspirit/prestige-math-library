// Private root-only guarded adoption; never invoked by the scientific owner.
import { readFileSync,writeFileSync,statSync,mkdirSync,renameSync,existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { resolve,dirname,join } from 'node:path';
const cwd=process.cwd(); const indexArg=process.argv.indexOf('--index');
if(indexArg<0||!process.argv.includes('--apply'))throw Error('root invocation requires --index PATH --apply');
const indexPath=resolve(cwd,process.argv[indexArg+1]);const packet=JSON.parse(readFileSync(indexPath,'utf8'));
if(packet.released!==true||packet.round!==1||packet.source_edits!==false)throw Error('not released metadata-only round1');
const digest=b=>createHash('sha256').update(b).digest('hex');const snapshot=p=>{p=resolve(cwd,p);const raw=readFileSync(p),s=statSync(p);return {p,raw,sha:digest(raw),size:s.size,mtime:s.mtimeMs,ino:s.ino};};
const guards=[]; const errors=[];const planned=[]; const providers=new Map();
for(const g of [...packet.source_guards,...packet.evidence_guards]){const s=snapshot(g.path);guards.push(s);if(s.sha!==g.sha256)errors.push('guard '+g.path);}
const allowed=new Set(['citations','derivations','boundaries','risk_review']);
for(const [path,proposal] of Object.entries(packet.by_path)){const s=snapshot(path);guards.push(s);if(s.sha!==proposal.before_sha256){errors.push('target guard '+path);continue;}const doc=JSON.parse(s.raw);for(const [id,fields] of Object.entries(proposal.contracts)){if(!doc.contracts?.[id]){errors.push('missing '+id);continue;}for(const [key,value] of Object.entries(fields)){if(!allowed.has(key)){errors.push('unapproved field '+key);continue;}if(key==='citations')for(const c of value){const provider=resolve(cwd,'physics/items/'+c.source+'.md');if(!providers.has(provider)){const ps=snapshot(provider);providers.set(provider,ps);guards.push(ps);}const raw=providers.get(provider).raw.toString('utf8');const h=c.source_section;const escaped=h.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');const m=raw.match(new RegExp('^## '+escaped+'\\s*\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))','m'));if(!m||!m[1].includes(c.quote))errors.push('quote '+id+'/'+c.fact);}doc.contracts[id][key]=value;}}planned.push({s,after:Buffer.from(JSON.stringify(doc,null,2)+'\n')});}
const out=join(dirname(indexPath),'root-executions',new Date().toISOString().replaceAll(':','-'));mkdirSync(out,{recursive:true});
if(errors.length){writeFileSync(join(out,'refusal.json'),JSON.stringify({applied:false,errors},null,2)+'\n');throw Error(errors.join('\n'));}
for(const s of guards){const now=statSync(s.p);if(now.ino!==s.ino||now.size!==s.size||now.mtimeMs!==s.mtime)throw Error('concurrent change '+s.p);}
for(const {s} of planned)writeFileSync(join(out,s.p.split('/').at(-1)+'.before'),s.raw);
const written=[];try{for(const {s,after} of planned){const tmp=s.p+'.owner-tmp';writeFileSync(tmp,after);renameSync(tmp,s.p);written.push(s);}}catch(e){for(const s of written)writeFileSync(s.p,s.raw);throw e;}
writeFileSync(join(out,'receipt.json'),JSON.stringify({run:packet.run,round:1,applied:true,index_path:indexPath,index_sha256:digest(readFileSync(indexPath)),writes:planned.map(({s,after})=>({path:s.p,before_sha256:s.sha,after_sha256:digest(after)})),source_edits:false,preserved_unproposed_fields:true},null,2)+'\n');
console.log(join(out,'receipt.json'));
