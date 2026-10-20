// ROOT ONLY. Review packet/source.diff/report before invoking --apply-reviewed.
// No metadata, engine, hashing, binding, readiness or gate operations.
import fs from 'node:fs';import path from 'node:path';
const B='research/machine-learning-all-101-2026-10-19-owner-actorcritic84-escalation/your-proposal';
if(process.argv.length!==3||process.argv[2]!=='--apply-reviewed')throw Error('Root review required; pass --apply-reviewed only after reviewing the concrete packet.');
const packet=JSON.parse(fs.readFileSync(`${B}/packet.json`));
function walk(d){return fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);}
function guards(){for(const file of walk(`${B}/context`)){const target=file.slice(`${B}/context/`.length);if(!fs.readFileSync(target).equals(fs.readFileSync(file)))throw Error(`Context changed: ${target}`);}for(const op of packet.operations){if(!fs.readFileSync(op.target).equals(fs.readFileSync(op.before_path)))throw Error(`Exact before changed: ${op.target}`);let expected=fs.readFileSync(op.before_path,'utf8');for(const edit of op.unique_substrings){if(expected.split(edit.before).length!==2)throw Error('Nonunique operation');expected=expected.replace(edit.before,edit.after);}if(expected!==fs.readFileSync(op.candidate_path,'utf8'))throw Error('Candidate differs from reviewed exact operations');}}
guards();const staged=[];try{for(const op of packet.operations){const tmp=`${op.target}.actorcritic84-root-${process.pid}.tmp`;fs.writeFileSync(tmp,fs.readFileSync(op.candidate_path),{flag:'wx',mode:fs.statSync(op.target).mode});staged.push({op,tmp});}guards();for(const {op,tmp} of staged){if(!fs.readFileSync(op.target).equals(fs.readFileSync(op.before_path)))throw Error('Concurrent target change');fs.renameSync(tmp,op.target);}}finally{for(const {tmp}of staged)if(fs.existsSync(tmp))fs.unlinkSync(tmp);}
console.log('Applied one reviewed source; root metadata registration and bindings remain required.');
