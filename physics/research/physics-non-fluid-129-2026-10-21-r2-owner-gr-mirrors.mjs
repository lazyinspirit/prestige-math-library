import {readFileSync,writeFileSync,mkdirSync,existsSync} from 'node:fs';
import {createHash} from 'node:crypto';
import {sourceSectionText,splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-boundary-gr-emg`,out=`${base}/root-mirror-application`,read=p=>JSON.parse(readFileSync(p)),sha=b=>createHash('sha256').update(b).digest('hex');
if(existsSync(out)||existsSync(`.physics-autopilot/${run}/controller.lock`))throw Error('Archive exists/controller active');
const originals=new Map(),docs=new Map(),sourceChanges=read(`${base}/source-changes.json`),changes=[];
for(const row of read(`${base}/root-owned-claim-mirrors.json`)){
 const source=readFileSync(`items/${row.id}.md`),oldSource=readFileSync(`${base}/before/items/${row.id}.md`),binding=sourceChanges.find(r=>r.id===row.id);
 if(sha(source)!==row.source_raw_sha256||sha(source)!==binding.after||sha(oldSource)!==binding.before)throw Error('Source/preimage changed '+row.id);
 if(!docs.has(row.manifest)){const before=readFileSync(row.manifest);originals.set(row.manifest,before);docs.set(row.manifest,JSON.parse(before));}
 const item=docs.get(row.manifest).flatMap(p=>p.items).find(i=>i.id===row.id),heading=row.id.startsWith('def-')?'Definition':row.id.startsWith('ex-')?'Example':'Statement';
 const oldPublic=sourceSectionText(splitFrontmatter(oldSource.toString()).body,heading),newPublic=sourceSectionText(splitFrontmatter(source.toString()).body,heading);
 if(item.statement.trim()!==oldPublic.trim()||row.statement.trim()!==newPublic.trim())throw Error('Exact old/new public mirror differs '+row.id);
 changes.push({item:row.id,path:row.manifest,old_public_sha256:sha(item.statement),new_public_sha256:sha(row.statement),source_sha256:sha(source)});item.statement=row.statement;
}
mkdirSync(`${out}/before`,{recursive:true});const files=[];
for(const[path,doc]of docs){const before=originals.get(path);if(!readFileSync(path).equals(before))throw Error('Manifest writer overlap');const after=Buffer.from(JSON.stringify(doc,null,2)+'\n');writeFileSync(`${out}/before/${path.split('/').at(-1)}`,before);writeFileSync(path,after);files.push({path,before_sha256:sha(before),after_sha256:sha(after)});}
writeFileSync(`${out}/receipt.json`,JSON.stringify({at:new Date().toISOString(),changes,files,source_edits:false},null,2)+'\n');console.log(JSON.stringify({files:files.length,public_interfaces:changes.length}));
