import fs from 'node:fs';
import crypto from 'node:crypto';
const run='physics-td-qft-rpm-62-2026-10-14',dir=`research/${run}-owner-step5-prospective-handoff-metadata-round1`;
const read=p=>JSON.parse(fs.readFileSync(p)),sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const sources=process.argv.length>2?process.argv.slice(2):[`${dir}/definition-citation-quote-proposals.json`,`${dir}/td-metadata-operations.json`],packets=sources.map(read);
const s=read(`.physics-autopilot/${run}/state.json`);
if(!s.paused||Object.values(s.dispatches).some(x=>x.startedAt&&!x.endedAt))throw Error('Requires paused drained native join');
const guards=packets.flatMap(p=>p.file_guards),sourceGuards=packets.flatMap(p=>p.current_sources??[p.current_source]);
const before=new Map(),objects=new Map();
for(const g of [...guards,...sourceGuards]){
 const b=fs.readFileSync(g.path);if(sha(b)!==g.raw_sha256)throw Error('Guard changed: '+g.path);
 if(g.equals_released_candidate&&!b.equals(fs.readFileSync(g.equals_released_candidate)))throw Error('Candidate changed');
 if(!g.path.startsWith('items/')){before.set(g.path,b);objects.set(g.path,JSON.parse(b));}
}
const operations=packets.flatMap(p=>p.quote_updates??p.operations);
for(const op of operations){
 const object=objects.get(op.file);if(!object)throw Error('Unbound metadata file');
 const keys=op.pointer.slice(1).split('/').map(x=>x.replace(/~1/g,'/').replace(/~0/g,'~'));
 let parent=object;for(const k of keys.slice(0,-1)){if(!(k in parent))throw Error('Missing pointer');parent=parent[k];}
 const key=keys.at(-1);if(JSON.stringify(parent[key])!==JSON.stringify(op.current_value))throw Error('Field changed: '+op.pointer);
 if(op.proposed_value===undefined)throw Error('Missing explicit replacement');
 if(op.pointer.endsWith('/risk_review/notes')&&(!op.proposed_value.startsWith(op.current_value)))throw Error('Historical review notes must remain');
 if(op.pointer.endsWith('/case_scope/current_raw_sha256')&&!sourceGuards.some(g=>g.raw_sha256===op.proposed_value))throw Error('Invented current source guard');
 parent[key]=op.proposed_value;
}
const archive=`research/${run}-owner-three-handoff-metadata-${Date.now()}`;fs.mkdirSync(archive);
for(const [file,b]of before){if(!fs.readFileSync(file).equals(b))throw Error('Metadata changed before adoption');fs.writeFileSync(`${archive}/${file.split('/').at(-1)}.before`,b);}
for(const g of sourceGuards)if(sha(fs.readFileSync(g.path))!==g.raw_sha256)throw Error('Source changed before adoption');
for(const [file,object]of objects)fs.writeFileSync(file,JSON.stringify(object,null,2)+'\n');
for(const g of sourceGuards)if(sha(fs.readFileSync(g.path))!==g.raw_sha256)throw Error('Source unexpectedly changed');
const receipt={run,at:new Date().toISOString(),operations:operations.length,metadata_files:[...before].map(([path,b])=>({path,before_raw_sha256:sha(b),after_raw_sha256:sha(fs.readFileSync(path))})),proposal_refs:sources.map(path=>({path,sha256:sha(fs.readFileSync(path))})),sources_unchanged:sourceGuards,scientific_review:false,native_transition:false,recertification:false};
fs.writeFileSync(`${archive}/receipt.json`,JSON.stringify(receipt,null,2)+'\n');console.log(JSON.stringify({archive,operations:operations.length,metadata_files:objects.size,sources_unchanged:true}));
