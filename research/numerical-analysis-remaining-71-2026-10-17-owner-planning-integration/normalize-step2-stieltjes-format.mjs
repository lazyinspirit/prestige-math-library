import {readFileSync as read,writeFileSync as write,existsSync as exists} from 'node:fs';
import {createHash} from 'node:crypto';
const run='numerical-analysis-remaining-71-2026-10-17',dir=`research/${run}-owner-planning-integration`,file='items/thm-lebesgue-stieltjes-measures-are-regular-on-r.md',archive=`${dir}/scope39-stieltjes-before-root-format.md`;
if(exists(archive))throw Error('Already normalized');const before=read(file,'utf8');write(archive,before,{flag:'wx'});
const idx=before.indexOf('## Proof\n'),head=before.slice(0,idx),proof=before.slice(idx),starts=[...proof.matchAll(/^(\d+\.\d+) /gm)];if(starts.length!==8)throw Error('Expected8rows');
const bodies=new Map(starts.map((m,i)=>[m[1],proof.slice(m.index+m[0].length,starts[i+1]?.index??proof.length).trim()]));
const map={'1.1':'1.1','2.1':'2.1','3.1':'3.1','4.1':'4.1','5.1':'5.1','6.1':'6.1','7.1':'5.2','8.1':'7.1'},order=['1.1','2.1','3.1','4.1','5.1','7.1','6.1','8.1'];
const refs=x=>x.replace(/\b(step\s+)(\d+\.\d+)\b/g,(_,p,n)=>p+(map[n]??n));
const rows=order.map(id=>`${map[id]} ${refs(bodies.get(id)).replace(/\s+/g,' ').trim()}`);
const after=head+proof.slice(0,starts[0].index)+rows.join('\n\n')+'\n';
for(const id of order){const row=rows.find(r=>r.startsWith(map[id]+' '));if(row.slice(map[id].length+1)!==refs(bodies.get(id)).replace(/\s+/g,' ').trim())throw Error('Row changed');}
write(file,after);const sha=s=>createHash('sha256').update(s).digest('hex');write(`${dir}/scope39-stieltjes-root-format.json`,JSON.stringify({version:1,run,file,archive,before_raw_sha256:sha(before),current_raw_sha256:sha(after),map,order,guard:'All8 mathematical rows preserved exactly modulo whitespace, explicit step-reference labels and dependency-canonical order. Statement and Facts byte-verbatim.',mathematical_repair:false},null,2)+'\n');console.log('All8 complete proof rows preserved; only line wrapping/order/reference labels normalized.');
