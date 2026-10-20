import fs from 'node:fs';
import crypto from 'node:crypto';
const base='research/machine-learning-all-101-2026-10-19-policy-gradient-cpo-proposal/contract-normalization';
const patch=JSON.parse(fs.readFileSync(`${base}/patch.json`,'utf8'));
const hash=x=>crypto.createHash('sha256').update(x).digest('hex');
const rowhash=x=>hash(JSON.stringify(x));
if(!process.argv.includes('--root-reviewed-apply'))throw Error('Root-only guarded metadata proposal; delegated agent must not execute.');
if(patch.unresolved_source_anchors.length)throw Error('Unresolved source anchors remain; integration refused.');
for(const row of patch.source_format_rows){if(hash(fs.readFileSync(row.actual_path))!==row.before_sha256)throw Error(`Format source changed: ${row.actual_path}`);if(hash(fs.readFileSync(row.staged_path))!==row.after_sha256)throw Error(`Format proposal changed: ${row.staged_path}`);}
const docs=new Map();
for(const row of patch.rows){
 if(!docs.has(row.actual_path))docs.set(row.actual_path,{raw:fs.readFileSync(row.actual_path,'utf8'),doc:JSON.parse(fs.readFileSync(row.actual_path,'utf8'))});
 const doc=docs.get(row.actual_path).doc;
 if(rowhash(doc.contracts[row.id])!==row.before_key_sha256)throw Error(`Actual contract key changed: ${row.id}`);
 if(hash(fs.readFileSync(row.source_path))!==row.source_sha256)throw Error(`Actual source changed: ${row.id}`);
 for(const guard of row.supplier_guards)if(hash(fs.readFileSync(guard.path))!==guard.sha256)throw Error(`Supplier changed: ${guard.path}`);
 if(rowhash(row.after)!==row.after_key_sha256)throw Error(`Proposed key changed: ${row.id}`);
}
for(const row of patch.rows)docs.get(row.actual_path).doc.contracts[row.id]=row.after;
for(const[path,{raw}]of docs)if(fs.readFileSync(path,'utf8')!==raw)throw Error(`Concurrent metadata change: ${path}`);
for(const row of patch.source_format_rows)if(hash(fs.readFileSync(row.actual_path))!==row.before_sha256)throw Error(`Concurrent source change: ${row.actual_path}`);
for(const row of patch.source_format_rows)fs.writeFileSync(row.actual_path,fs.readFileSync(row.staged_path));
for(const[path,{doc}]of docs)fs.writeFileSync(path,JSON.stringify(doc,null,2)+'\n');
console.log('Applied guarded26contract keys and3format-only contextual paragraph moves. No native gate or readiness transition was run; root owns actual proof-layout and final checks.');
