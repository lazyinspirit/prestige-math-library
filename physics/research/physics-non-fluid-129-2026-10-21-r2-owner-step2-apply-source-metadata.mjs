// Root-only explicit metadata transaction. No inferred scientific dispositions.
import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {resolve,dirname} from 'node:path';
import {yamlCandidates} from '../tools/physics-support/paths.mjs';
import {splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',root=process.cwd();
const read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
const option=f=>{const n=process.argv.indexOf(f);return n<0?null:process.argv[n+1];};
const configPath=option('--config');if(!configPath)throw Error('Require exact reviewed --config');
const config=read(configPath),apply=process.argv.includes('--apply');
if(config.run!==run||!Array.isArray(config.operations)||!config.operations.length)throw Error('Empty/wrong transaction');
const require_=createRequire(import.meta.url);let YAML;
for(const p of yamlCandidates()){try{YAML=require_(p);break;}catch{}}
if(!YAML?.parseDocument)throw Error('Normative YAML parser unavailable');
const imported=new Set(read('research/math-imports.json').files.map(r=>resolve(r.path)));
const allowed=new Set(['deps','dependency_roles','physical_scope','sources','verification','dependency_level']);
const rows=[],seen=new Set();
for(const op of config.operations){
 if(!op.id||seen.has(op.id))throw Error('Missing/duplicate subject');seen.add(op.id);
 const path=`items/${op.id}.md`;
 if(imported.has(resolve(path)))throw Error('Imported snapshots are not source-metadata subjects: '+path);
 const before=readFileSync(path),parts=splitFrontmatter(before.toString());
 if(!parts.fm||sha(before)!==op.before_sha256)throw Error('Source preimage differs '+path);
 const doc=YAML.parseDocument(parts.fm);if(doc.errors.length)throw Error('Invalid source YAML '+path);
 const old=doc.toJS();if(old.id!==op.id)throw Error('Identity differs '+path);
 for(const[k,v]of Object.entries(op.fields??{})){
  if(!allowed.has(k))throw Error('Unapproved metadata field '+k);
  doc.set(k,v);
 }
 const after=Buffer.from(`---\n${doc.toString().trimEnd()}\n---\n${parts.body}`),next=splitFrontmatter(after.toString()),parsed=YAML.parse(next.fm);
 if(next.body!==parts.body)throw Error('Body changed '+path);
 for(const k of new Set([...Object.keys(old),...Object.keys(parsed)])){
  if(!Object.hasOwn(op.fields,k)&&JSON.stringify(old[k])!==JSON.stringify(parsed[k]))throw Error('Unrequested metadata changed '+path+' '+k);
 }
 rows.push({path,before,after,fields:Object.keys(op.fields),body_sha256:sha(parts.body),reason:op.reason,evidence:op.evidence});
}
const guards=[...(config.guards??[]),{path:configPath,sha256:sha(readFileSync(configPath))}];
function verify(){
 if(existsSync(`.physics-autopilot/${run}/controller.lock`)||Object.values(read(`.physics-autopilot/${run}/state.json`).dispatches).some(d=>!d.endedAt))throw Error('Native controller/workers active');
 for(const g of guards)if(sha(readFileSync(g.path))!==g.sha256)throw Error('Evidence/input guard differs '+g.path);
 for(const row of rows)if(!readFileSync(row.path).equals(row.before))throw Error('Source changed '+row.path);
}
verify();
const summary={at:new Date().toISOString(),run,source_bodies_unchanged:true,scientific_acceptance:false,native_gate:false,changes:rows.filter(r=>!r.before.equals(r.after)).map(({path,before,after,...r})=>({path,before_sha256:sha(before),after_sha256:sha(after),...r}))};
if(apply){
 if(!process.argv.includes('--outside-writers-drained'))throw Error('Root must verify actual outside-writer release');
 const out=option('--out');if(!out||existsSync(out))throw Error('Require fresh --out archive');
 mkdirSync(out,{recursive:true});writeFileSync(`${out}/config.json`,readFileSync(configPath));
 for(const row of rows){const p=`${out}/before/${row.path}`;mkdirSync(dirname(p),{recursive:true});writeFileSync(p,row.before);}
 verify();for(const row of rows)if(!row.before.equals(row.after))writeFileSync(row.path,row.after);
 writeFileSync(`${out}/receipt.json`,JSON.stringify({...summary,guards},null,2)+'\n');
}
console.log(JSON.stringify({...summary,applied:apply},null,2));
