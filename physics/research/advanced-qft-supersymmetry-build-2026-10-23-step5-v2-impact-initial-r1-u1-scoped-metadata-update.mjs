import {readFileSync,writeFileSync} from 'node:fs';
import {parseFrontmatter} from '../tools/physics-support/content-policy-lib.mjs';
const run='advanced-qft-supersymmetry-build-2026-10-23';
if(process.argv.includes('--quotes-only')){
  const targets=[[1,'thm-qftx-n-extended-central-charge-bounds','F1','def-qftx-super-poincare-algebra-4d'],[1,'lem-qftx-n1-chiral-superspace-identities','F1','def-qftx-n1-chiral-superfield'],[1,'lem-qftx-n1-chiral-superspace-identities','F3','def-qftx-super-poincare-algebra-4d'],[16,'thm-aqft-field-redefinition-observable-equivalence-at-fixed-order','F1','def-aqft-lsz-amplitude-data'],[31,'lem-qftx-n4-adjoint-cubic-gauge-invariance','F1','def-qftx-n1-chiral-superfield'],[31,'lem-qftx-n2-hypermultiplet-gauge-invariant-couplings','F1','def-qftx-n1-chiral-superfield'],[7,'lem-torus-classifying-space-cohomology','F6','def-standard-product-torus-as-a-compact-lie-group']];
  const batches=new Map();for(const [batch,id,fact,supplier]of targets){const path='research/'+run+'-batch-'+batch+'.proof-contracts.json';let doc=batches.get(path);if(!doc){doc=JSON.parse(readFileSync(path,'utf8'));batches.set(path,doc);}const rows=doc.contracts[id].citations.filter(c=>c.fact===fact&&c.source===supplier);if(rows.length!==1)throw Error('unique citation '+id+'/'+fact);const text=readFileSync('items/'+supplier+'.md','utf8');const start=text.indexOf('## Definition\n');if(start<0)throw Error('definition '+supplier);const after=text.slice(start+14);const end=after.indexOf('\n## ');rows[0].quote=(end<0?after:after.slice(0,end)).trim();}
  for(const [path,doc]of batches)writeFileSync(path,JSON.stringify(doc,null,2)+'\n');console.log(JSON.stringify({refreshed_citations:targets,files:[...batches.keys()]}));process.exit(0);
}
const entries=[
[7,'lem-torus-classifying-space-cohomology','Statement','The rank is explicitly a nonnegative integer; finite products, Kunneth iteration and the rank-zero case retain the same proof and full AC.'],
[26,'def-aqft-threshold-matching-map','Definition','The operator-contract instance now uses associated-bundle sections and overlap transitions, and permits the tensor Lorentz group or its SL(2,C) spin cover with the supplied projection and bundle lifts. Matching maps and RG equations are unchanged.'],
[30,'def-qftx-physical-superspace-normalization','Definition','D-to-F transfer is equality of integrated actions for smooth coefficientwise compact support, or absolute integrability and the specified zero boundary flux; densities differ by a spacetime divergence. All bracket and component factors remain fixed.'],
[32,'def-qftx-wilsonian-n1-action-data','Definition','Bare constant Abelian FI coefficients stay fixed real numbers outside unconstrained background promotion. The other independent D coefficients are unconstrained backgrounds. Real linear background couplings are distinct constrained data.'],
[33,'post-qftx-n2-seiberg-witten-effective-solution','Postulate','Corrected the source locator to Seiberg-Witten v1 section 5.7, printed page 33, without changing the Postulate or physical scope.'],
[44,'def-aqft-heavy-chiral-u1-threshold-data','Definition','The source-positive chirality matrix is -i times the upper-index gamma product, equal to +i times the lower-index product in the mostly-plus metric, as read in Bilal section 2.4 Eq. (2.20).'],
[54,'def-qftx-physical-bps-charge-data','Definition','An abstract massive rest supertranslation fiber supplies its closed supercharges, actual adjoints and common invariant product domain, and an independent strongly continuous unitary SU(2) action. No normalizable fixed-momentum restriction of a full-space U is inferred. Saturation, BPS subspace invariance, gap and second-helicity trace remain supplied data.']
];
const outputs=[];
for(const [batch,id,heading,note] of entries){
  // Reread the current owning files only after the caller holds the shared lock.
  const source=readFileSync('items/'+id+'.md','utf8');
  const fm=source.match(/^---\n([\s\S]*?)\n---/);if(!fm)throw Error('frontmatter '+id);
  const meta=parseFrontmatter(fm[1]);if(meta.id!==id||meta.status!=='draft')throw Error('ownership '+id);
  const section=source.match(new RegExp('^## '+heading+'\\s*\\n([\\s\\S]*?)(?=^## |$(?![\\s\\S]))','m'))?.[1]?.trim();if(!section)throw Error('section '+id);
  const manifest=`research/${run}-batch-${batch}.pages.json`,pages=JSON.parse(readFileSync(manifest,'utf8'));
  const rows=pages.flatMap(p=>p.items||[]).filter(x=>x.id===id);if(rows.length!==1)throw Error('unique owner '+id);
  const row=rows[0];row.statement=section;
  if(batch===33){const target=row.sources?.references?.find(x=>x.url==='https://arxiv.org/pdf/hep-th/9407087v1');if(!target)throw Error('source mirror '+id);target.locator=meta.sources.references.find(x=>x.url===target.url).locator;}
  outputs.push([manifest,JSON.stringify(pages,null,2)+'\n']);
  const contractsPath=`research/${run}-batch-${batch}.proof-contracts.json`,contracts=JSON.parse(readFileSync(contractsPath,'utf8')),entry=contracts.contracts[id];if(!entry)throw Error('contract '+id);
  entry.owner_repair={dispatch:'step5-v2-impact-initial-r1-u1',kind:'scoped-current-interface-review',independent_acceptance:false,evidence:note};
  if(batch===44){
    const old='Corrected the upper-index chirality to +i as in Bilal Eq. (2.20), PDF p.10 / printed p.7; lowering gamma0 gives -i.';
    if(!entry.risk_review.notes.includes(old))throw Error('expected historical chirality note');
    entry.risk_review.notes=entry.risk_review.notes.replace(old,'The earlier review recorded upper-index +i and lower-index -i; that source attribution was erroneous. Current owner repair uses upper-index -i and lower-index +i, as in Bilal Eq. (2.20), printed p.7.');
  }
  outputs.push([contractsPath,JSON.stringify(contracts,null,2)+'\n']);
}
for(const [path,content]of outputs){JSON.parse(content);writeFileSync(path,content);}
console.log(JSON.stringify({updated:outputs.map(x=>x[0]),subjects:entries.map(x=>x[1]),manifest_sections_match:true}));
