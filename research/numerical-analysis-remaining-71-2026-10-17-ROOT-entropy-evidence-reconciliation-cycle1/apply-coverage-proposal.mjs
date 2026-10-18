// Draft owner action; this file has NOT been executed.
import {readFileSync,writeFileSync} from 'node:fs';
const proposal=JSON.parse(readFileSync(new URL('./coverage-additions.proposal.json',import.meta.url),'utf8'));
const doc=JSON.parse(readFileSync(proposal.target,'utf8'));
for(const p of proposal.patch){const parts=p.path.split('/').slice(1);let at=doc;for(const key of parts.slice(0,-1))at=at[key];const key=parts.at(-1);if(Object.hasOwn(at,key))throw Error('Refuse overwrite '+p.path);at[key]=p.value;}
writeFileSync(proposal.target,JSON.stringify(doc,null,2)+'\n');
