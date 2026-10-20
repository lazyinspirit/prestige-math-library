import {readFileSync as read,writeFileSync as write,existsSync as exists,mkdirSync as mkdir,copyFileSync as copy,symlinkSync as symlink} from 'node:fs';
import {resolve,join} from 'node:path';
import {splitFrontmatter,factParagraphs,numberedProofSteps,sourceSectionText,SOURCE_SECTIONS} from '../../tools/facts-block.mjs';
const base=resolve('research/machine-learning-all-101-2026-10-19-calibration-surrogate-proposal');
const name='machine-learning-all-101-2026-10-19-batch-8.proof-contracts.json';
const old=JSON.parse(read(join(base,'before',name),'utf8'));
const manifest=JSON.parse(read(join(base,'proposed/machine-learning-all-101-2026-10-19-batch-8.pages.json'),'utf8'));
const scope=manifest.flatMap(p=>p.items.map(i=>i.id));
const sourcePath=id=>exists(join(base,'proposed/items',id+'.md'))?join(base,'proposed/items',id+'.md'):resolve('items',id+'.md');
const norm=t=>t.replace(/\s+/g,' ').trim();
const tokens=(text,steps)=>[...new Set([...text.matchAll(/\b(?:[Ss]teps?\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].flatMap(m=>m[2]?[m[2]]:/^steps?\s/i.test(m[0])||steps.some(s=>s.id===m[1])?['step '+m[1]]:[]))];
const contracts={};const suppliers=new Set();
for(const id of scope){
 const raw=read(sourcePath(id),'utf8'),body=splitFrontmatter(raw).body,steps=numberedProofSteps(body),facts=factParagraphs(body);
 let entry=old.contracts[id]?structuredClone(old.contracts[id]):{citations:[],derivations:[],routine_steps:[],finite_smoke:[],boundaries:[]};
 entry.citations=[];
 for(const fact of facts.values())for(const source of fact.links){
  suppliers.add(source);const body=splitFrontmatter(read(sourcePath(source),'utf8')).body;
  const section=[...SOURCE_SECTIONS].find(s=>sourceSectionText(body,s)?.trim());if(!section)throw Error(source+' has no permitted source section');
  entry.citations.push({fact:fact.label,source,source_section:section,quote:norm(sourceSectionText(body,section)),uses:steps.filter(s=>tokens(s.text,steps).includes(fact.label)).map(s=>s.id)});
 }
 entry.derivations=steps.map(s=>({id:'step-'+s.id.replace('.','-'),step:s.id,claim:norm(s.text.replace(/\s*\[[^\[\]]*\]\s*(?:∎\s*)?$/,'')),inputs:[...new Set([...tokens(s.text,steps),...([...s.text.matchAll(/\[([^\[\]]+)\]/g)].at(-1)?.[1].split(',').map(s=>s.trim())??[])])]}));entry.routine_steps=[];
 if(id==='fs-unadjusted-surrogate-regret-bound'){
  entry.finite_smoke=[{case:'scale witness',result:'Step 1.1: premise1/4=(1/4)*1; excess1 and claimed squared upper bound3/8<1.'},{case:'tie witness',result:'Step 2.1: eta1/2,h0 gives classification excess1/2 and surrogate excess0.'}];
  entry.boundaries=[{case:'empty',status:'not_applicable',reason:'Both counterexamples use a one-point nonempty probability feature space and two labels.'},{case:'zero',status:'checked',evidence:'Step 2.1 uses zero score and zero surrogate excess.'},{case:'one',status:'checked',evidence:'Step 1.1 has deterministic Y=+1 and a one-point feature space.'},{case:'degenerate',status:'checked',evidence:'Step 1.1 uses a point-mass label law; step 2.1 uses a fair binary label law.'},{case:'endpoints',status:'checked',evidence:'Step 1.1 uses eta=1 and a finite conditional minimizer1, rather than an extended endpoint.'},{case:'nonempty-choice',status:'not_applicable',reason:'Every score/minimizer is explicitly constant; no selection axiom is used.'},{case:'iff-forward',status:'not_applicable',reason:'The Statement refutes an implication, not a biconditional.'},{case:'iff-reverse',status:'not_applicable',reason:'The Statement refutes an implication, not a biconditional.'}];
 }
 if(id==='thm-surrogate-regret-controls-classification-regret'){
  entry.boundaries.find(x=>x.case==='zero').evidence='Steps 4.1 and 7.1 cover eta=1/2 and arbitrary zero scores: the zero-is-error bound retains its explicit correction; the +1-at-zero classifier obeys the clean bound.';
  entry.boundaries.find(x=>x.case==='endpoints').evidence='Steps 3.1 and 4.1 handle measurable extended minimizers with truncated zero-times-infinity terms, and step 7.1 proves the no-zero/source-decision specializations.';
 }
 contracts[id]=entry;
}
const result={version:1,scope,contracts};write(join(base,'proposed',name),JSON.stringify(result,null,2)+'\n');
// Exact unchanged native checker, relocated only to select a staged item root.
// This previews strict contracts; it supplies no actual-run gate evidence.
const preview=join(base,'strict-preview');mkdir(join(preview,'tools'),{recursive:true});mkdir(join(preview,'items'),{recursive:true});
for(const file of ['proof-contract.mjs','facts-block.mjs','frontmatter-list.mjs'])copy(resolve('tools',file),join(preview,'tools',file));
for(const id of new Set([...scope,...suppliers])){const target=join(preview,'items',id+'.md');if(!exists(target))symlink(sourcePath(id),target);}
write(join(base,'strict-preview-description.json'),JSON.stringify({kind:'isolated-staged-strict-contract-preview',actual_run_gate:false,checker_copies_unchanged:true,selection:scope,supplier_paths:[...suppliers].map(id=>({id,path:sourcePath(id)}))},null,2)+'\n');
console.log('generated17 complete contracts and isolated strict preview');
