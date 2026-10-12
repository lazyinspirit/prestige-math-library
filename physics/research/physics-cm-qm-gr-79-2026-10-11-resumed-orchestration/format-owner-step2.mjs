// Apply canonical numbering to whole proof blocks, retaining continuation lines.
import fs from 'node:fs';
import { sectionText } from '../../../tools/physics-support/facts-block.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',base=`research/${run}-resumed-orchestration`;
const report=JSON.parse(fs.readFileSync(`${base}/owner-step2-format-metadata.json`,'utf8'));
const changed=[],held=[];
for(const row of report.failures.filter(r=>r.errors.length===1&&r.errors[0]==='phase format requires canonical repair')){
  const file=`items/${row.id}.md`,raw=fs.readFileSync(file,'utf8');
  const heading=['Proof','Verification','Refutation','Counterexample'].find(h=>sectionText(raw,h));
  if(!heading){held.push({id:row.id,reason:'no proof section'});continue;}
  const text=sectionText(raw,heading),starts=[...text.matchAll(/^\s*(\d+\.\d+)\b[^\n]*/gm)];
  const levels=new Map(),blocks=starts.map((m,i)=>({old:m[1],index:i,first:m[0].trim(),text:text.slice(m.index,starts[i+1]?.index??text.length)}));
  let unsafe=false;
  for(const b of blocks){
    const refs=[...b.first.matchAll(/step\s+(\d+\.\d+)/gi)].map(m=>m[1]);
    if(refs.some(r=>!levels.has(r))){unsafe=true;break;}
    b.level=Math.max(1,...refs.map(r=>levels.get(r)+1));levels.set(b.old,b.level);
  }
  if(unsafe){held.push({id:row.id,reason:'opening-line forward reference'});continue;}
  const terminal=blocks.filter(b=>/∎|■|□|\\blacksquare|\\square|\\qedsymbol|\\qed|\\halmos|\bQ\.?E\.?D\.?\b/i.test(b.first)||/\[discharge-/i.test(b.first)).at(-1);
  if(terminal)terminal.level=Math.max(...blocks.filter(b=>b!==terminal).map(b=>b.level))+1;
  const ordered=[...blocks].sort((a,b)=>a.level-b.level||a.index-b.index),counts=new Map(),labels=new Map();
  for(const b of ordered){counts.set(b.level,(counts.get(b.level)??0)+1);labels.set(b.old,`${b.level}.${counts.get(b.level)}`);}
  // Refuse a block move that would strand an explicit continuation-line dependency.
  const seen=new Set();
  for(const b of ordered){
    const refs=[...b.text.matchAll(/step\s+(\d+\.\d+)/gi)].map(m=>m[1]);
    if(refs.some(r=>labels.has(r)&&r!==b.old&&!seen.has(r)))unsafe=true;
    seen.add(b.old);
  }
  if(unsafe){held.push({id:row.id,reason:'continuation-line dependency needs focused ordering'});continue;}
  const relabel=s=>s.replace(/(steps?\s+)((?:\d+\.\d+)(?:(?:\s*,\s*|\s+and\s+|\s*&\s*)\d+\.\d+)*)/gi,(_,head,ids)=>head+ids.replace(/\d+\.\d+/g,n=>labels.get(n)??n));
  const rebuilt=text.slice(0,starts[0].index)+ordered.map(b=>relabel(b.text.replace(/^(\s*)(\d+\.\d+)/,(_,space,n)=>space+labels.get(n)))).join('');
  let next=raw.replace(text,rebuilt);
  const remarks=sectionText(next,'Remarks');if(remarks)next=next.replace(remarks,relabel(remarks));
  if(next!==raw){fs.writeFileSync(file,next);changed.push(row.id);}
}
fs.writeFileSync(`${base}/owner-step2-format-changes.json`,JSON.stringify({run,changed,held},null,2)+'\n');
console.log(JSON.stringify({changed:changed.length,held}));
