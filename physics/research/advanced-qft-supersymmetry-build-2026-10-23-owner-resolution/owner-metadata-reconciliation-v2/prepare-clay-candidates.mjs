import fs from 'node:fs';import path from 'node:path';import {createHash} from 'node:crypto';
import {inspectStatement} from '../../../tools/statement-first.mjs';
import {splitFrontmatter,sectionText} from '../../../tools/physics-support/facts-block.mjs';
import {yaml} from '../../../tools/physics-support/pathway-lib.mjs';
const out='research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/owner-metadata-reconciliation-v2';
const sha=b=>createHash('sha256').update(b).digest('hex');
const target='op-qftx-clay-4d-yang-mills-existence-mass-gap', targetPath=`items/${target}.md`,t=fs.readFileSync(targetPath),title=yaml().parse(splitFrontmatter(t.toString()).fm).title;
const rows=[];
for(const id of ['ex-qftx-clay-finite-one-plaquette-regulator','ex-qftx-clay-two-global-forms-same-algebra']){
 const file=`items/${id}.md`,before=fs.readFileSync(file,'utf8'),parts=splitFrontmatter(before),remarks=sectionText(parts.body,'Remarks'),old=`[[${target}]]`;
 if(remarks.split(old).length!==2)throw Error('nonunique inline');
 const refs=sectionText(parts.body,'Remarks references');if((refs.match(/\[\[/g)||[]).length!==1||!refs.includes(`[[${target}|Clay existence and mass-gap problem]]`))throw Error('unexpected existing references');
 const after=before.replace(remarks,remarks.replace(old,title));
 if(sectionText(splitFrontmatter(after).body,'Example')!==sectionText(parts.body,'Example'))throw Error('Example changed');
 if(after.replace(title,old)!==before)throw Error('not exact single hunk');
 const candidate=`${out}/source-candidates/${file}`;fs.mkdirSync(path.dirname(candidate),{recursive:true});fs.writeFileSync(candidate,after);
 const errors=await inspectStatement(id,'example',splitFrontmatter(after).body);if(errors.length)throw Error(JSON.stringify(errors));
 rows.push({id,path:file,before_sha256:sha(before),candidate,candidate_sha256:sha(after),exact_replace:{before:remarks,after:remarks.replace(old,title)},public_Example_unchanged:true,frontmatter_unchanged:true,existing_single_reference_preserved:true,target_guard:{path:targetPath,sha256:sha(t),title},focused_statement_policy_errors:errors,reason:'Remove duplicate inline hyperlink from complete Remarks prose. The formerly implicit rendered target title is written as plain text; the already-existing immediately following Remarks references entry preserves the same target exactly once. No Example, proof, qualification, metadata or reference label changes.'});
}
fs.writeFileSync(`${out}/clay-source-candidates.json`,JSON.stringify({status:'PRIVATE_UNAPPLIED',rows,guard_order:'Verify all metadata proposal source guards against current baseline before any mutation. Apply these separately declared exact source transitions only afterward; their Example mirrors and metadata are unchanged. Root owns fresh post-application source/readiness/snapshot binding.'},null,2)+'\n');
console.log(JSON.stringify(rows.map(({id,before_sha256,candidate_sha256})=>({id,before_sha256,candidate_sha256}))));
