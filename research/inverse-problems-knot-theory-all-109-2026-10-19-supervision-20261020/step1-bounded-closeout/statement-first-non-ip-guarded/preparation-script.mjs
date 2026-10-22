import fs from 'node:fs';
import path from 'node:path';
import {inspectStatement,statementRuntime} from '/home/lazyinspirit/Projects/prestige-math-library/tools/statement-first.mjs';
const root='/home/lazyinspirit/Projects/prestige-math-library';
const base=path.join(root,'research/inverse-problems-knot-theory-all-109-2026-10-19-supervision-20261020/step1-bounded-closeout/statement-first-non-ip-guarded');
const {yaml}=await statementRuntime();
const errors=JSON.parse(fs.readFileSync('/tmp/prestige-non-ip-statement-errors.json','utf8'));
for (const sub of ['preimages','proposed']) fs.mkdirSync(path.join(base,sub),{recursive:true});
const packet=[], unchanged=[],remaining=[];
function parse(t){const m=t.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);if(!m)throw Error('FM');return {meta:yaml.parse(m[1]),prefix:m[0],body:t.slice(m[0].length)};}
function title(id){return parse(fs.readFileSync(path.join(root,'items',id+'.md'),'utf8')).meta.title;}
for (const [id,es] of Object.entries(errors)){
 const canonical='items/'+id+'.md'; const pre=fs.readFileSync(path.join(root,canonical),'utf8');let out=pre;const ops=[];
 if (es.includes('exactly one Statement refuted section is required')){out=out.replace(/^## Statement$/m,'## Statement refuted');ops.push('Rename existing complete Statement heading to Statement refuted; body unchanged.');}
 if (es.includes('exactly one Example section is required')){out=out.replace(/^## Statement$/m,'## Example').replace(/^## Statement references$/m,'## Example references');ops.push('Rename existing complete example description and its reference heading; body unchanged.');}
 for(const e of es){const m=e.match(/^(.* references) must immediately follow/);if(!m)continue;
  if(m[1]==='Definition references'&&id==='def-singular-instanton-knot-and-sutured-closure-data'){
   const start=out.indexOf('## Definition references');const block=out.slice(start).trimEnd();out=out.slice(0,start).trimEnd()+'\n';const at=out.indexOf('## Facts & Assumptions');out=out.slice(0,at)+block+'\n\n'+out.slice(at);ops.push('Relocate existing Definition references immediately after complete Definition, before Facts & Assumptions.');
  }else if(m[1]==='Statement refuted references') {out=out.replace(/^## Statement refuted references$/m,'## Statement references');ops.push('Use required Statement references heading after Statement refuted.');}
  else{const old='## '+m[1];out=out.replace(old,'## Sources');ops.push('Rename '+m[1]+' to Sources without changing text or position.');}
 }
 if(id==='cex-knot-kt-44-boundary-case'){out=out.replace(/^## Statement references$/m,'## Source notes');ops.push('Rename prose-only no-external-statement note to Source notes; no citation removed.');}
 // Move hyperlinks from only the claim sections reported by the gate.
 const sections=out.split(/(?=^## )/m);
 for(let i=0;i<sections.length;i++){
  const h=sections[i].match(/^## (.+)\n/);if(!h||!es.some(e=>e.startsWith(h[1]+' contains hyperlinks;')))continue;
  const links=[];let content=sections[i];
  content=content.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g,(all,target,alias)=>{links.push(all);return alias??title(target.trim());});
  content=content.replace(/(?<!!)\[([^\]\n]+)\]\(([^\n]+?)\)/g,(all,label,target)=>{links.push(all);return label;});
  sections[i]=content;
  const wanted=h[1]==='Statement refuted'?'Statement references':h[1]+' references';
  if(sections[i+1]?.startsWith('## '+wanted+'\n')){
   const existing=sections[i+1];const added=links.filter(x=>!existing.includes(x));
   if(added.length)sections[i+1]=existing.trimEnd()+'\n\n'+added.join('\n\n')+'\n\n';
  }else sections[i]=content.trimEnd()+'\n\n## '+wanted+'\n\n'+links.join('\n\n')+'\n\n';
  ops.push('Relocate '+links.length+' hyperlink(s) after complete '+h[1]+'; retain alias or canonical rendered title as plain text, preserve original link expression in references.');
 }
 out=sections.join('');
 if(out===pre){unchanged.push(id);continue;}
 fs.writeFileSync(path.join(base,'preimages',id+'.md'),pre);fs.writeFileSync(path.join(base,'proposed',id+'.md'),out);
 const parsed=parse(out);const left=await inspectStatement(id,parsed.meta.kind,parsed.body); if(left.length)remaining.push({id,errors:left});
 packet.push({id,canonical,preimage:path.relative(root,path.join(base,'preimages',id+'.md')),proposed:path.relative(root,path.join(base,'proposed',id+'.md')),operations:ops,tempFormattingErrors:left});
}
fs.writeFileSync(path.join(base,'guarded-apply-packet.json'),JSON.stringify({scope:'Formatting-only non-IP proposals; canonical files untouched. Mathematical wiki aliases unchanged; parser-fix owner handles false positives.',guard:'Before root application, compare current canonical bytes with exact preimage bytes. Refuse entire batch if any differs. No hashes.',items:packet,unchangedFlaggedIds:unchanged,remainingTempFormattingErrors:remaining},null,2)+'\n');
console.log(JSON.stringify({changed:packet.length,unchanged:unchanged.length,remaining},null,2));
