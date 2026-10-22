// Derive exact content-preserving maps from real normative formatting proposals.
import {readFileSync,writeFileSync} from 'node:fs';import {numberedProofSteps,splitFrontmatter} from '../tools/physics-support/facts-block.mjs';
const run='physics-non-fluid-129-2026-10-21-r2',base=`research/${run}-owner-step2-root-adoption`,scan=JSON.parse(readFileSync(`${base}/format-scan.json`)),rows=[];
const norm=s=>s.replace(/\d+\.\d+/g,'<step-or-decimal>').replace(/\s+/g,' ').trim();
for(const r of scan.rows){const raw=readFileSync(r.path,'utf8'),old=numberedProofSteps(splitFrontmatter(raw).body),next=numberedProofSteps('## Proof\n'+r.proof.split('∎')[0]+'∎'),mapping={},errors=[];if(old.length!==next.length)errors.push('Numbered block count differs '+old.length+' '+next.length);
 for(const step of old){const matches=next.filter(s=>norm(s.claim)===norm(step.claim));if(matches.length!==1){errors.push('Nonunique exact normalized paragraph '+step.id);continue;}mapping[step.id]=matches[0].id;}
 // Numeric masking is for locating a paragraph only. Every literal claim is then
 // compared after just its explicit own-step references are simultaneously mapped.
 const refs=(s)=>s.replace(/\bsteps?\s+\d+\.\d+(?:(?:\s*[,;–—-]\s*|\s+(?:and|through|to)\s+)\d+\.\d+)*/gi,c=>c.replace(/\d+\.\d+/g,n=>mapping[n]??n));
 for(const step of old){const target=next.find(s=>s.id===mapping[step.id]);if(target&&refs(step.claim).replace(/\s+/g,' ').trim()!==target.claim.replace(/\s+/g,' ').trim())errors.push('Non-reference literal claim differs '+step.id);}
 rows.push({id:r.id,path:r.path,sha256:r.sha256,mapping,proposed_order:next.map(s=>s.id),errors});}
writeFileSync(`${base}/numbering-proposal.json`,JSON.stringify({at:new Date().toISOString(),rows},null,2)+'\n');console.log(JSON.stringify(rows.map(r=>({id:r.id,mapping:r.mapping,errors:r.errors})),null,2));
