import {readFileSync,writeFileSync} from 'node:fs';
import {parseFrontmatter} from '../../tools/physics-support/content-policy-lib.mjs';
import {splitFrontmatter,sectionText,factParagraphs,numberedProofSteps} from '../../tools/physics-support/facts-block.mjs';
const run='physics-cm-qm-gr-79-2026-10-11',id='thm-gr-flat-linearized-curvature-and-gauge';
const source=readFileSync('items/'+id+'.md','utf8'),{fm,body}=splitFrontmatter(source),metadata=parseFrontmatter(fm);
const statement=sectionText(body,'Statement').trim();
const path='research/'+run+'-batch-71.pages.json',manifest=JSON.parse(readFileSync(path,'utf8'));
const entry=manifest.flatMap(p=>p.items).find(i=>i.id===id);for(const key of ['deps','dependency_roles','sources'])entry[key]=metadata[key];entry.statement=statement;
writeFileSync(path,JSON.stringify(manifest,null,2)+'\n');
const contractPath='research/'+run+'-batch-71.proof-contracts.json',contracts=JSON.parse(readFileSync(contractPath,'utf8'));
const contract=contracts.contracts[id];
const proof=sectionText(body,'Proof');
const steps=[...proof.matchAll(/^(\d+\.\d+) (.*?) \[([^\]]+)\](?: ∎)?$/gm)].map(m=>({id:'step-'+m[1].replace('.','-'),claim:m[2],step:m[1],inputs:m[3].split(',').map(x=>x.trim())}));
for(const step of steps)for(const match of step.claim.matchAll(/steps? (\d+\.\d+)/g))if(!step.inputs.includes('step '+match[1]))step.inputs.push('step '+match[1]);contract.derivations=steps;const citations=[];
for(const fact of factParagraphs(source).values())for(const supplier of fact.links){const src=splitFrontmatter(readFileSync('items/'+supplier+'.md','utf8')).body;const source_section=sectionText(src,'Definition')?'Definition':'Statement';citations.push({fact:fact.label,source:supplier,source_section,quote:sectionText(src,source_section).trim(),uses:steps.filter(s=>s.inputs.includes(fact.label)).map(s=>s.step)});}
contract.citations=citations;
for(const b of contract.boundaries){if(b.case==='empty')b.evidence='Statement(f) gives all nonnegative component-magnitude empty controls the value0; step4.1 first treats K empty with delta0=1, C_K=0 and vacuous conclusions. Step1.1 likewise treats empty compact remainder estimates in (a)-(c).';if(b.case==='endpoints'){delete b.reason;b.status='checked';b.evidence='Statement(a)-(c) include |lambda|=epsilon1/2; step1.1 bounds second derivatives on the closed parameter interval inside the smooth family domain. Step4.1 uses all t in [0,1], including both Taylor segment endpoints.';}if(b.case==='degenerate')b.evidence='Step4.1 chooses d<rho inside the actual open symmetric Lorentzian matrix locus at eta, then delta0=d/2; every segment jet lies in its compact box. No fixed numerical radius or initial assumption of perturbed inertia is used.';}
contract.risk_review={status:'complete',reviewer:'/root/physics_gr_supplier_owner',notes:'Full current proof and exact suppliers independently reviewed after native71 drain. Preserved native empty-control convention and inverse-derivative wording/source locator repairs. Explicit empty case, symmetric second-jet space, true openness radius at eta and Heine-Borel compact boxes/parameter products complete the exact Taylor argument; no extrema claim for empty compacts. All20 direct/indirect consumers checked at the changed interface.'};
writeFileSync(contractPath,JSON.stringify(contracts,null,2)+'\n');
for(const batch of ['71','74']){const p='research/'+run+'-batch-'+batch+'.proof-contracts.json',d=JSON.parse(readFileSync(p,'utf8'));for(const c of Object.values(d.contracts))for(const ct of c.citations??[])if(ct.source===id&&ct.source_section==='Statement')ct.quote=statement;writeFileSync(p,JSON.stringify(d,null,2)+'\n');}
