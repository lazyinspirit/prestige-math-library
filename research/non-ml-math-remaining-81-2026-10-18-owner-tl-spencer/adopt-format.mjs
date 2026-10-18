// Scoped owner format adoption; no levels, stamps, readiness, gates or history.
import {readFileSync,writeFileSync} from 'node:fs';
const base='research/non-ml-math-remaining-81-2026-10-18-owner-tl-spencer';
const data=JSON.parse(readFileSync(base+'/precheck-initial.json','utf8'));
const steps=text=>[...text.matchAll(/^(\d+\.\d+) ([\s\S]*?)(?=^\d+\.\d+ |\Z)/gm)];
// JavaScript has no \Z assertion; split using explicit next-step positions.
function rows(text){const starts=[...text.matchAll(/^(\d+\.\d+) /gm)];return starts.map((m,i)=>({label:m[1],text:text.slice(m.index+m[0].length,starts[i+1]?.index??text.length).trim()}));}
const normalized=text=>text.replace(/\[[^\[\]]+\]\s*(?:∎)?$/,'').replace(/\b\d+\.\d+\b/g,'STEP').replace(/\s+/g,' ').trim();
const maps={};
for(const row of data.results){
 const source=readFileSync(row.file,'utf8'); const marker='## Proof\n';const [prefix,proof]=source.split(marker);const original=rows(proof),canonical=rows(row.proposed_proof);const map={};const order=[];
 for(const target of canonical){const matches=original.filter(old=>normalized(old.text)===normalized(target.text));if(matches.length!==1)throw Error('ambiguous format paragraph '+row.item_id+'/'+target.label);map[matches[0].label]=target.label;order.push(matches[0]);}
 const beforeSteps=proof.slice(0,proof.search(/^\d+\.\d+ /m));
 const updated=order.map(old=>map[old.label]+' '+old.text.replace(/\b\d+\.\d+\b/g,label=>map[label]??label)).join('\n\n')+'\n';
 writeFileSync(row.file,prefix+marker+beforeSteps+updated);maps[row.item_id]=map;
}
writeFileSync(base+'/format-step-maps.json',JSON.stringify(maps,null,2)+'\n');
