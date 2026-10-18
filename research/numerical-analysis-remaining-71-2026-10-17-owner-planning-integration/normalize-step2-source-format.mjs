// Root source formatting only: retain complete mathematical rows, never splice
// the checker's possibly truncated whole-proof reconstruction into an item.
import{readFileSync as read,writeFileSync as write,existsSync as exists,mkdirSync,openSync,closeSync}from'node:fs';
import{spawnSync}from'node:child_process';
import{createHash}from'node:crypto';
import{numberedProofSteps,splitFrontmatter}from'../../tools/facts-block.mjs';
const run='numerical-analysis-remaining-71-2026-10-17',base=`research/${run}-owner-planning-integration`,archive=`${base}/step2-format-before`,receipt=`${base}/step2-source-format-normalization.json`;
if(exists(receipt))throw Error('Already normalized');
const pc=JSON.parse(read(`${base}/step2-initial-precheck-inspection.json`)),rc=JSON.parse(read(`${base}/step2-initial-render-inspection.json`));
const selected=pc.results.filter(x=>!['pass','not-applicable'].includes(x.status)),paths=new Set([...selected.map(x=>x.file),...rc.errors.map(x=>x.file)]),before=new Map(),rowMaps=new Map();
const sha=x=>createHash('sha256').update(x).digest('hex');
for(const path of paths){if(!path.startsWith('items/')&&!path.startsWith('library/'))throw Error('Outside scope');const raw=read(path,'utf8'),dest=`${archive}/${path}`;mkdirSync(dest.slice(0,dest.lastIndexOf('/')),{recursive:true});if(!exists(dest))write(dest,raw,{flag:'wx'});before.set(path,read(dest,'utf8'));}
const whitespace=x=>x.replace(/\s+/g,' ').trim();
for(const path of paths){const raw=read(path,'utf8');let text=raw;
 if(path.startsWith('items/'))text=text.replace(/(^\d+\.\d+ [\s\S]*?)(?=\n\d+\.\d+ |\n## |(?![\s\S]))/gm,block=>block.trim().split(/\r?\n/).map(x=>x.trim()).join(' ')+'\n\n');
 text=text.replace(/\$\$([\s\S]*?)\$\$/g,(full,math)=>{if(/(?<!\\)%/.test(math))throw Error('TeX comment '+path);return '$$'+math.split(/\r?\n/).join(' ').trim()+'$$';});
 if(text.replace(/\s+/g,'')!==raw.replace(/\s+/g,''))throw Error('Non-whitespace change '+path);
 if(path==='items/ex-pe18-spherical-monopole-exterior-field.md'){if(!text.includes('steps 1.1–2.1')&&!text.includes('step 1.1, step 2.1'))throw Error('Range guard');text=text.replace('steps 1.1–2.1','step 1.1, step 2.1');}
 if(path==='items/thm-three-dimensional-delaunay-output-size-quadratic.md'){if(!text.includes('step 1.1 preserves its sign')&&!text.includes('the preceding sign specialization preserves its sign'))throw Error('Self reference guard');text=text.replace('step 1.1 preserves its sign','the preceding sign specialization preserves its sign');}
 write(path,text);
}
function precheck(label,files){const path=`${base}/${label}.json`,fd=openSync(path,'w'),err=openSync(path+'.stderr','w');const result=spawnSync('node',['tools/tsx-run.mjs','tools/precheck.mts','--json',...files],{stdio:['ignore',fd,err]});closeSync(fd);closeSync(err);const report=JSON.parse(read(path));return{result,report};}
let {report}=precheck('step2-after-row-join-precheck',selected.map(x=>x.file));
const failures=report.results.filter(x=>x.status==='fail');if(failures.length)throw Error('Focused manual formatting needed '+JSON.stringify(failures));
const refPattern=/\b[Ss]teps?\s+\d+\.\d+(?:(?:\s*(?:,|and|–|-|to)\s*)(?:step\s+)?\d+\.\d+)*/g; const normRefs=(text,map)=>text.replace(refPattern,part=>part.replace(/\d+\.\d+/g,id=>map[id]??id));
for(const row of report.results.filter(x=>x.status==='repair')){
 const raw=read(row.file,'utf8'),old=numberedProofSteps(splitFrontmatter(raw).body),proposed=numberedProofSteps('## Proof\n'+row.proposed_proof);
 if(old.length!==proposed.length)throw Error('Proposed formatter loses/creates rows '+row.file);
 const key=s=>s.replace(refPattern,part=>part.replace(/\d+\.\d+/g,'#')).replace(/\s+/g,'');
 const used=new Set(),matches=old.map(s=>{const ids=proposed.map((p,i)=>i).filter(i=>!used.has(i)&&key(proposed[i].claim)===key(s.claim));if(ids.length!==1)throw Error('Missing/ambiguous complete mathematical row '+row.file+' '+s.id);used.add(ids[0]);return ids[0];});
 const map=Object.fromEntries(old.map((s,i)=>[s.id,proposed[matches[i]].id]));if(new Set(Object.values(map)).size!==old.length)throw Error('Duplicate row labels');
 // The normative proposal can leave prose ranges stale. Retain each complete
 // original mathematical claim and map its actual original targets ourselves.
 let index=0;let next=raw.replace(/(^\d+\.\d+ [\s\S]*?)(?=\n\d+\.\d+ |\n## |(?![\s\S]))/gm,()=>{const n=index++,s=proposed[n],original=old[matches.indexOf(n)];if(!s||!original)throw Error('Unexpected row');const qed=/∎\s*$/.test(s.text)?' ∎':'';return `${s.id} ${normRefs(original.claim,map)} [${s.inputs.join(', ')}]${qed}\n\n`;});if(index!==old.length)throw Error('Incomplete source replacement');
 // References outside numbered rows (e.g. a fact pointing to a later proof)
 // retain their mathematical target after the depth-label normalization.
 const regions=next.split(/(^\d+\.\d+ [\s\S]*?)(?=\n\d+\.\d+ |\n## |(?![\s\S]))/gm);next=regions.map((part,i)=>i%2?part:normRefs(part,map)).join('');
 write(row.file,next);rowMaps.set(row.item_id,map);
}
const final=precheck('step2-final-normalized-precheck',selected.map(x=>x.file));if(final.report.summary.failed)throw Error('Current final format failures '+JSON.stringify(final.report.results.filter(x=>!['pass','not-applicable'].includes(x.status)).map(({proposed_proof,...x})=>x)));
const items=[...paths].filter(p=>p.startsWith('items/')).map(path=>{
 const original=numberedProofSteps(splitFrontmatter(before.get(path)).body),current=numberedProofSteps(splitFrontmatter(read(path,'utf8')).body);
 const key=s=>s.replace('step 1.1 preserves its sign','the preceding sign specialization preserves its sign').replace(refPattern,part=>part.replace(/\d+\.\d+/g,'#')).replace(/\s+/g,'');
 if(original.length!==current.length)throw Error('Final original row count '+path);const used=new Set(),map={};
 for(const old of original){const match=current.map((p,i)=>i).filter(i=>!used.has(i)&&key(current[i].claim)===key(old.claim));if(match.length!==1)throw Error('Final original complete row mismatch '+path+' '+old.id);used.add(match[0]);map[old.id]=current[match[0]].id;}
 return{id:path.slice(6,-3),path,step_map:map,before_raw_sha256:sha(before.get(path)),after_raw_sha256:sha(read(path)),complete_row_preservation:true};
});
write(receipt,JSON.stringify({version:1,run,at:new Date().toISOString(),archive,items,pages:[...paths].filter(p=>p.startsWith('library/')),exact_editorial_repairs:['spherical example range tag expanded to individual existing steps','Delaunay same-step reference replaced by preceding sign-specialization description'],mathematical_claim_changes:false,native_gate_credit:false},null,2)+'\n',{flag:'wx'});
console.log(JSON.stringify({items:items.length,pages:paths.size-items.length,canonical_row_label_maps:rowMaps.size,final_focused_precheck:final.report.summary}));
