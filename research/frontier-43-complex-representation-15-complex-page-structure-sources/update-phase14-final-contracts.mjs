import {readFileSync,writeFileSync} from 'node:fs';
import {factParagraphs,numberedProofSteps,sectionText,splitFrontmatter,SOURCE_SECTIONS} from '../../tools/facts-block.mjs';
const run='frontier-43-complex-representation-15';
const core='lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds';
const inv='lem-inverse-of-a-quasiconformal-map-is-quasiconformal';
const tokens=t=>new Set([...t.matchAll(/\b(?:step\s+)?(\d+\.\d+)\b|\b([FAL]\d+)\b/g)].map(m=>m[1]??m[2]));
for(const batch of [14]) {
 const path=`research/${run}-batch-${batch}.proof-contracts.json`,data=JSON.parse(readFileSync(path,'utf8'));
 for(const id of data.scope) {
  const body=splitFrontmatter(readFileSync(`items/${id}.md`,'utf8')).body;
  const facts=factParagraphs(body),steps=numberedProofSteps(body),citations=[];
  for(const fact of facts.values()) for(const source of [...new Set(fact.links)]) {
   const sourceBody=splitFrontmatter(readFileSync(`items/${source}.md`,'utf8')).body;
   let section=sectionText(sourceBody,'Statement').trim()?'Statement':sectionText(sourceBody,'Definition').trim()?'Definition':sectionText(sourceBody,'Example').trim()?'Example':'Remark';
   if(source===core && /Remark|differentiab|lower.area|chain.rule|barrier|exceptional/i.test(fact.text))section='Remark';
   if(source===inv && /area|null|Remark/i.test(fact.text))section='Remark';
   if(source==='lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality' && /Remark|auxiliary/i.test(fact.text))section='Remark';
   if(!SOURCE_SECTIONS.has(section))throw Error('unsupported source section');
   const quote=sectionText(sourceBody,section).trim();
   const uses=steps.filter(s=>tokens(s.text).has(fact.label)).map(s=>s.id);
   if(!uses.length)throw Error(`Unconsumed linked fact ${id} ${fact.label} ${source}`);
   if(!quote)throw Error(`Missing exact quote ${source} ${section}`);
   citations.push({fact:fact.label,source,source_section:section,quote,uses});
  }
  const prior=data.contracts[id];
  let boundaries=prior?.boundaries;
  const proofChanged=['lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds','lem-inverse-of-a-quasiconformal-map-is-quasiconformal','lem-analytic-quasiconformality-implies-modulus-distortion','thm-geometric-and-analytic-quasiconformality-equivalent','thm-normalized-quasiconformal-compactness','lem-quasiconformal-local-jacobian-energy-bound','lem-zero-length-sets-are-removable-for-continuous-analytic-functions','lem-riemann-maps-of-jordan-domains-extend-homeomorphically','def-conformal-removable-compact-set'].includes(id);
  if(proofChanged) {
   const last=steps.at(-1)?.id;
   boundaries=[
    {case:'empty',status:'not_applicable',reason:'The claim assumes nonempty complex domains or the stated compact exceptional set; it does not claim a map between empty domains.'},
    {case:'zero',status:'checked',evidence:`Statement and step ${last} retain the zero-dilatation or zero-measure specialization when it occurs; nonnegative area arguments also include null exceptional sets.`},
    {case:'one',status:'checked',evidence:`Statement includes its normalized unit case (K=1 in the quasiconformal assertions); step ${last} uses the stated range without division by K-1.`},
    {case:'degenerate',status:'not_applicable',reason:'The map is a homeomorphism and every marked quadrilateral used is a nondegenerate Jordan disk; collapsed target domains are outside the stated hypotheses.'},
    {case:'endpoints',status:'checked',evidence:`Statement and step ${last} include the specified boundary extensions or arc-length endpoint/improper conventions; no boundary value at an omitted target-chart pole is assumed.`},
    {case:'nonempty-choice',status:'checked',evidence:'Statement records AC or Countable Choice, as applicable; the Facts give its exact measure, compact-selection and ACL uses.'},
    {case:'iff-forward',status:'not_applicable',reason:'The main assertion is the indicated bound, existence of extension, removability or compactness; any equivalence explicitly in its Statement is proved in the final proof step.'},
    {case:'iff-reverse',status:'not_applicable',reason:'The main assertion is the indicated bound, existence of extension, removability or compactness; any equivalence explicitly in its Statement is proved in the final proof step.'}
   ];
   if(id==='thm-geometric-and-analytic-quasiconformality-equivalent'||id===inv){for(const x of boundaries.filter(x=>x.case.startsWith('iff-'))){x.status='checked';delete x.reason;x.evidence=`Statement's two directions are proved explicitly; the final step ${last} combines them.`;}}
   if(id==='def-conformal-removable-compact-set') {
    for(const x of boundaries){x.status='not_applicable';delete x.evidence;x.reason='This compares global and neighborhood-local compact-set predicates; no numerical bound or quadrilateral endpoint is claimed.';}
    for(const x of boundaries.filter(x=>x.case.startsWith('iff-'))){x.status='checked';delete x.reason;x.evidence=x.case==='iff-forward'?'Global implies local is proved in steps 1.2–4.1, conditional on AC and the explicitly held MRMT supplier.':'Local implies global is proved in step 1.1.';}
    const choice=boundaries.find(x=>x.case==='nonempty-choice');choice.status='checked';delete choice.reason;choice.evidence='Definition and step 4.1 record that the predicates are choice-free; their equivalence explicitly assumes AC and identifies its extension and MRMT interfaces.';
   }
   if(id.includes('zero-length')) {
    for(const x of boundaries.filter(x=>['one','degenerate','endpoints'].includes(x.case))){x.status='not_applicable';delete x.evidence;x.reason='The Statement concerns a compact finite-Hausdorff-length exceptional set and a continuous sphere-to-plane function; no K parameter, degenerate quadrilateral or separate interval endpoint assertion occurs.';}
   }
   if(id==='lem-riemann-maps-of-jordan-domains-extend-homeomorphically')for(const x of boundaries.filter(x=>['zero','one'].includes(x.case))){x.status='not_applicable';delete x.evidence;x.reason='The Statement concerns nondegenerate Jordan domains and their closure extensions; no zero or unit numerical parameter is asserted.';}
  }
  data.contracts[id]={...prior,citations,derivations:steps.map(s=>({id:`step-${s.id.replace('.','-')}`,claim:s.claim,step:s.id,inputs:[...new Set([...s.inputs,...tokens(s.text)])]})),routine_steps:[],boundaries};
 }
 writeFileSync(path,JSON.stringify(data,null,2)+'\n');
}
console.log('Updated structural citation/input/boundary mirrors only for owned14 contracts; this is not mathematical acceptance.');
