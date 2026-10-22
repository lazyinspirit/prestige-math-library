from pathlib import Path
import re,json
D=Path('research/physics-non-fluid-129-2026-10-21-r2-owner-step3-qft58-global-calculus')
ids=['lem-qftx-global-microlocal-pullback','lem-qftx-microcausal-contraction-compatibility','thm-qftx-wavefront-product','lem-qftx-microcausal-star-product','prop-qftx-hadamard-wick-change']
boundaries={ids[0]:[
('empty','checked','Step7.1 constructs the unique distribution on an empty source test space. Empty local normal cone is separately handled by V empty in2.2; Fourier nonstationarity then covers every nonzero input frequency.'),
('zero','checked','Zero input has zero Fourier pairing in3.1 and zero pullback globally by7.1. Source or target dimension0 is handled explicitly in7.1: source-point transversality forces local smoothness; target-point scalar pulls back constantly.'),
('one','checked','For a smooth input,3.1 identifies the Fourier formula with the ordinary smooth composition. In particular input1 pulls back to1, using a compact cutoff for each test image, not global integrability of1.'),
('degenerate','checked','Rank-deficient df is allowed:2.2 separates its unit kernel from the actual WF fiber before shrinking bases. If transversality fails the Statement asserts no pullback; it does not assign values to forbidden point restrictions.'),
('endpoints','checked','The only limiting approximation parameter is epsilon down to0. Step2.1 proves common finite-order/regular-cone bounds and test convergence, and3.1/4.1 prove the controlled limit. No pointwise value of a singular input at epsilon0 is assumed.'),
('nonempty-choice','checked','Step6.1 uses finitely many small source/target patches for one compact test, explicit cutoff division and double refinement;7.1 explains that no global chart/partition selection is needed. CC is inherited from the declared exact Fourier/Lebesgue suppliers.'),
('iff-forward','not_applicable','The claimed WF inclusion is one-way. Transversality suffices for this canonical construction; the Statement does not assert necessity of that condition for every individually definable pullback. The uniqueness clause is proved in7.1 by actual controlled approximants.'),
('iff-reverse','not_applicable','No converse to the WF upper bound is asserted: a smooth or zero input can have smaller output WF, and critical points can remove directions. Steps4.1/7.1 prove the stated inclusion and uniqueness, not equality of wavefront sets.')],ids[1]:[
('empty','checked','Step1.1 defines the empty finite-family product as1, and7.1 handles empty matchings as the original tensor/ordinary product; degree0 blocks have no incident edges.'),
('zero','checked','Zero coefficients give zero by7.1. If all Gamma_j are empty,1.1 explicitly uses empty G_j and c1 with a comparable regular factor; it takes no minimum over an empty permitted tuple set. Dimension0 is scalar finite arithmetic.'),
('one','checked','A single-factor subfamily in1.1–3.1 has no nonzero zero-sum tuple; the Fourier construction agrees with that distribution. A one-edge matching is covered by4.1 and the partial/simultaneous identity5.1, with compact projection continuity1.2.'),
('degenerate','checked','An output with no unmatched slots is the scalar total pairing in1.2. Edges are disjoint labelled-slot matchings; repeated removal or singular self-Gamma_W is excluded, with the actual mixed-sign obstruction explained in8.1.'),
('endpoints','checked','Independent smoothing parameters tend to0 in2.1 under one absolute multifrequency majorant. Step5.1 regularizes each original coefficient block and each edge on its own two slots, preserving slot dependence in the Fubini comparison. No arbitrary smoothing path defines a different endpoint.'),
('nonempty-choice','checked','Only finite factors/edges and finite compact chart covers are selected in4.1. A1 carries CC through Fourier/Fubini suppliers; no stronger Choice or density in a test-function topology is assumed.'),
('iff-forward','not_applicable','The theorem is a sufficient construction for the stated singular-cross/smooth-edge class, not an if-and-only-if admissibility characterization. Step4.1 proves full simultaneous noncancellation for those actual inputs.'),
('iff-reverse','not_applicable','No converse is claimed: matchings outside the stated class can sometimes exist on special kernels. Step8.1 explains why unrestricted singular self-contraction cannot be inferred from this result.') ]}
contracts={}
for id in ids:
 t=Path('items',id+'.md').read_text();proof=t.split('## Proof\n',1)[1].split('\n## Remarks',1)[0];pars=re.findall(r'(?ms)^(\d+\.\d+) (.*?)(?=\n\n\d+\.\d+ |\Z)',proof)
 deriv=[]
 for num,body in pars:
  body=body.strip();m=re.search(r'\[([^\[\]]+)\]\s*(?:∎)?$',body);assert m,(id,num)
  inputs=[x.strip()for x in m.group(1).split(',')if x.strip()!='given'];claim=body[:m.start()].strip();deriv.append({'id':'step-'+num.replace('.','-'),'claim':claim,'step':num,'inputs':inputs})
 facts=re.findall(r'(?m)^\[([AF]\d+)\] (.*)$',t.split('## Proof\n')[0]);cites=[]
 for fact,line in facts:
  uses=[x['step'] for x in deriv if fact in x['inputs']]
  for sid in re.findall(r'\[\[([^\]|#]+)(?:[^\]]*)\]\]',line):
   st=Path('items',sid+'.md').read_text();section=re.search(r'(?m)^## (Statement|Definition|Example|Counterexample)\n([\s\S]*?)(?=^## |\Z)',st);assert section,sid
   cites.append({'fact':fact,'source':sid,'source_section':section.group(1),'quote':section.group(2).strip(),'uses':uses,'proposal_note':'Exact supplier public section; use locations are actual final source fact tags. For grouped Facts, the source header states the specific interface component supplied.'})
 c={'citations':cites,'derivations':deriv,'routine_steps':[]}
 if id in boundaries:c['boundaries']=[dict(case=a,status=b,**({'evidence':c}if b=='checked'else{'reason':c}))for a,b,c in boundaries[id]]
 contracts[id]=c
out={'proposalOnly':True,'owner':'/root/qft_green_maps','sourceBindings':'numbering-successor/final-five-source-bindings.json','readingEvidence':'final-supplier-reading-bindings.json and reading-limits.json','acceptance':'No independent acceptance, native review result, currency stamp, or root hash asserted. Root owns production application and any normative schema adaptation.','semanticBoundaries':'Eight item-specific standard boundary cases for each new helper. Existing carrier boundaries preserved for root reconciliation; all five current derivation and citation maps supplied.','contracts':contracts}
(D/'semantic-proof-contract-proposal.json').write_text(json.dumps(out,indent=2,ensure_ascii=False)+'\n')
print({k:{'citations':len(v['citations']),'derivations':len(v['derivations']),'boundaries':len(v.get('boundaries',[]))}for k,v in contracts.items()})
