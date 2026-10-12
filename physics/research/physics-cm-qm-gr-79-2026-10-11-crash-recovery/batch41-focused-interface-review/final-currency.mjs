import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
import { loadStep3,itemHash } from '../../../tools/physics-support/frontier-snapshot.mjs';
import {step1Decision} from '../../../tools/physics-support/step1-decisions.mjs';
const root=process.cwd(),run='physics-cm-qm-gr-79-2026-10-11',dir=path.join('research',run+'-crash-recovery/batch41-focused-interface-review');
const s=loadStep3(root,run),ids=JSON.parse(fs.readFileSync(path.join(dir,'changed-items.json'))),rows=[];
for(const [id,x] of s.items)if([39,40,41].includes(Number(x.page.batch))){const r=step1Decision(s,id);rows.push({item:id,batch:Number(x.page.batch),closed:r.closed,decision:r.row?.decision,receiptHash:r.row?.sha256,currentHash:itemHash(s,id,x.item.deps??[])});}
fs.writeFileSync(path.join(dir,'native-currency.json'),JSON.stringify({rows,ready:rows.filter(r=>r.closed).length,held:rows.filter(r=>!r.closed)},null,2)+'\n');
const citations=[];
const section=(text,name)=>text.match(new RegExp('^## '+name+'\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))','m'))?.[1]?.trim();
for(const b of [39,40,41]){const doc=JSON.parse(fs.readFileSync('research/'+run+'-batch-'+b+'.proof-contracts.json'));
for(const [id,c]of Object.entries(doc.contracts))for(const q of c.citations??[])if(ids.includes(q.source)){
const text=fs.readFileSync('items/'+q.source+'.md','utf8');const normalize=x=>(x??'').replace(/\s+/g,' ').trim(); const match=normalize(section(text,q.source_section)).includes(normalize(q.quote)) && Boolean(q.quote?.trim());citations.push({consumer:id,supplier:q.source,section:q.source_section,exactCurrentQuote:match});}}
fs.writeFileSync(path.join(dir,'consumer-quote-currency.json'),JSON.stringify({checked:citations.length,stale:citations.filter(x=>!x.exactCurrentQuote),citations},null,2)+'\n');
console.log(JSON.stringify({ready:rows.filter(r=>r.closed).length,held:rows.filter(r=>!r.closed).length,quotes:citations.length,stale:citations.filter(x=>!x.exactCurrentQuote)}));
