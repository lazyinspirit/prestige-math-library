import fs from 'node:fs';import crypto from 'node:crypto';import {splitFrontmatter,sectionText,numberedProofSteps} from '../../../tools/facts-block.mjs';
const base='research/machine-learning-all-101-2026-10-19-policy-gradient-cpo-proposal/contract-normalization';const hash=x=>crypto.createHash('sha256').update(x).digest('hex');const rh=x=>hash(JSON.stringify(x));const patch=JSON.parse(fs.readFileSync(`${base}/patch.json`,'utf8'));const sourceRows=[];
fs.mkdirSync(`${base}/sources`,{recursive:true});
for(const finding of patch.unresolved_source_anchors){
 const path=finding.source_path,before=fs.readFileSync(path,'utf8'),paragraph=finding.exact_unused_fact;
 if(hash(before)!==finding.source_sha256)throw Error(`Source changed ${path}`);
 if(before.split(paragraph).length!==2)throw Error(`Nonunique paragraph ${path}`);
 let after=before.replace(paragraph+'\n\n','');
 if(after===before)throw Error('Expected exact paragraph with blank separator');
 if(/^## Remarks$/m.test(after))after=after.replace(/^## Remarks\n/m,`## Remarks\n\n${paragraph}\n`);
 else after=after.replace(/\n*$/,'\n')+`\n## Remarks\n\n${paragraph}\n`;
 const a=splitFrontmatter(before),b=splitFrontmatter(after);
 if(a.fm!==b.fm||sectionText(a.body,'Example')!==sectionText(b.body,'Example')||JSON.stringify(numberedProofSteps(a.body))!==JSON.stringify(numberedProofSteps(b.body)))throw Error('Changed mathematical carrier');
 const staged=`${base}/sources/${path.split('/').at(-1)}`;fs.writeFileSync(staged,after);sourceRows.push({actual_path:path,before_sha256:hash(before),staged_path:staged,after_sha256:hash(after),exact_moved_paragraph:paragraph,frontmatter_and_example_and_all_proof_blocks_identical:true});
 const row=patch.rows.find(r=>r.id===finding.id);row.after.citations=row.after.citations.filter(c=>!(c.fact==='A1'&&c.source==='def-axiom-of-choice'));row.after.boundaries.find(x=>x.case==='nonempty-choice').evidence='Example and Remarks preserve the inherited AC context from the cited general algorithms; the explicit finite verification has no phase step invoking A1, and no operational axiom use is invented.';row.after_key_sha256=rh(row.after);row.proposed_source_sha256=hash(after);
}
patch.source_format_rows=sourceRows;patch.unresolved_source_anchors=[];patch.source_changes_proposed=true;patch.source_change_class='format-only-context-move';patch.mathematical_cycle_reopened=false;
for(const batch of [84,90]){const doc=JSON.parse(fs.readFileSync(`research/machine-learning-all-101-2026-10-19-batch-${batch}.proof-contracts.json`,'utf8'));for(const row of patch.rows.filter(r=>r.batch===batch))doc.contracts[row.id]=row.after;fs.writeFileSync(`${base}/batch-${batch}.proof-contracts.json`,JSON.stringify(doc,null,2)+'\n');}
fs.writeFileSync(`${base}/patch.json`,JSON.stringify(patch,null,2)+'\n');console.log(`Staged ${sourceRows.length} context moves; native proofs/Statements unchanged.`);
