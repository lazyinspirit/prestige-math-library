import {readFileSync as rf,writeFileSync as wf} from 'node:fs';
import {createHash} from 'node:crypto';
import {readItem} from '../../tools/physics-support/physics-content.mjs';
import {numberedProofSteps,sourceSectionText} from '../../tools/physics-support/facts-block.mjs';
const run='fluid-dynamics-all-47-2026-10-23',base=`research/${run}-owner-step2-escalations`,path='items/texp-fd-bgk-preparation.md',before=rf(path,'utf8'),ids=['pthm-fd-bgk-equilibration','thm-fd-homogeneous-bgk-limit','prop-fd-bgk-entropy-rate'];
const at=before.indexOf('## Remarks\n');if(at<0)throw Error('Missing exact Remarks');
const old=before.slice(at),replacements=ids.map(id=>({id,title:readItem(`items/${id}.md`).title}));let section=old;
for(const {id,title}of replacements){if(section.split(`[[${id}]]`).length!==2)throw Error('Unexpected link count');section=section.replace(`[[${id}]]`,title);}
const after=before.slice(0,at)+section.trimEnd()+'\n\n## Remarks references\n\n'+ids.map(id=>`[[${id}]]`).join('\n\n')+'\n';
if(sourceSectionText(before,'Statement')!==sourceSectionText(after,'Statement')||JSON.stringify(numberedProofSteps(before))!==JSON.stringify(numberedProofSteps(after)))throw Error('Scientific argument changed');
const archive=`${base}/before-bgk-reference-layout.md`;wf(archive,before,{flag:'wx'});wf(path,after);const sha=b=>createHash('sha256').update(b).digest('hex');
wf(`${base}/bgk-reference-layout-integration.json`,JSON.stringify({run,owner:'/root',at:new Date().toISOString(),path,before:{path:archive,sha256:sha(before)},after_sha256:sha(after),operation:'Exact source-title substitution and relocation of the same three wiki targets after complete Remarks; all status qualifications, Statement, Facts and proof arguments retained.',replacements,statement_and_numbered_proof_unchanged:true,body_change_scope:'editorial reference placement only',complete:true,gates_attempted:0},null,2)+'\n',{flag:'wx'});
console.log('Moved three BGK context links to Remarks references; claims and proof unchanged.');
