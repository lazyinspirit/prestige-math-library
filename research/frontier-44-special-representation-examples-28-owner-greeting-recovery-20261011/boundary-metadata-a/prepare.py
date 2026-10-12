import json,glob,hashlib,pathlib
run='frontier-44-special-representation-examples-28'
out=pathlib.Path('research/'+run+'-owner-greeting-recovery-20261011/boundary-metadata-a')
sha=lambda b:hashlib.sha256(b).hexdigest()
ids=json.load(open('.autopilot/'+run+'/greeting-recovery/boundary-unassigned-scopes.json'))['scopes']['boundary_a']
ev=[
'Step 3.2 explicitly sets C_0=1 and B_L(1,1)=1. Its rank-one product and the divided-power products in steps 4.1 and 5.1 have value 1 at n=0; the height-zero word recursion terminates at that unit, so the empty word/product is included.',
'Definition: finite-dimensional V may be zero. Then the spanning submodule and both full chart lattices are zero, E_Z and the residue quotient are zero, and the canonical map is the unique zero-space isomorphism; a basis of this component is the empty family. This is direct evaluation of the defined map, not a new freeness theorem.',
'Definition: Q_+ contains degree 0, so the indexing set of the completion is never empty. For nu=0 the convolution has exactly the pair (0,0), giving its normalized unit; on a zero tensor vector every component acts as zero and the finite action is the empty sum. No evaluation on unsupported infinite tails is permitted.',
'Definition: the integral residue subgroup in each component is the direct sum over the crystal classes of that degree. If that label set is empty the subgroup is zero; the balanced component map is an isomorphism, so its intersection is zero and there are no lifts to select. Empty component bases extend by the same direct-sum rule; G(0) remains undefined.',
'Statement sets Theta outside Q_+ equal to zero and normalizes Theta_0=1. Steps 2.1 and 2.2 include the degree-zero case: the latter coproduct sum at n=0 has just (0,0) and unit factorials. The inverse recursion starts at 1; sums in nonexistent root degrees are empty and zero, not an omitted tensor evaluation.',
'Definition: all form-duals and inverse Gram systems are componentwise on finite spaces. A component with empty lower basis is zero, its restricted dual and both dual charts are zero, and the inverse Gram system has no equations or vectors. Thus the unique homogeneous upper family in that component is empty; no infinite product dual is substituted.',
'Step 1.1 uses the finite basis G_lambda(B(lambda)_mu) for each weight component. If B(lambda)_mu is empty that component is the free zero A-module; every source basis element in that degree is killed by F1, and the kernel span includes all of them. This follows from the actual based-projection rule and does not define G(0).',
'Definition includes R(0) through its KLR presentation supplier, where R(0)=k. At n=0 there is one empty-word idempotent of degree 0, no dot or crossing generator, and no indexed dot/crossing relation to verify. Step 4.1 therefore transfers the grading to k concentrated in degree 0; the empty straight diagram is the identity.',
'Statement applies the r>0 tail claims only when such a tail exists; they do not apply at beta=0. For the height induction of step 3.1 and triangular words of step 4.1 the actual KLR Definition gives R(0)=k, whose unique simple and projective shift orbit is k: its word is empty and its Hom diagonal is 1. This supplies the stated height-zero termination with no positive tail selected.',
'Step 1.1 explicitly uses [R(0)]=[k] as the induction unit and weight-zero restriction as counit. Statement (ii) fixes [P_i,0]=1; empty divided words in step 4.1 therefore map to that same unit and coproduct. Empty blocks are included rather than excluded by a nonempty-word restriction.',
'Steps 1.2 and 2.1 explicitly reduce the comparison to the same value at 1. At weight 0 the empty divided word maps to [k] over R(0)=k and the tensor Hom has graded dimension 1; C_0=1. Step 3.1 at n=0 gives the empty product 1, so the induction base and rank-zero divided block are included.',
'Step 1.1 expresses every projective class by divided words, including the empty word at beta=0; the unital homomorphism supplier maps 1 to [R(0)]=[k]. This is the rank-one A-basis of K_0(k), while the degree-zero source has basis 1. Steps 2.1 and 3.1 apply to this component with the form value 1.',
'Step 6.1 explicitly starts the sign induction with the unit/vacuum. At beta=0 the KLR Definition gives R(0)=k; its finite simple k is self-dual and its normalized projective cover is k, fixed by #, with Hom degree zero equal to k. There is no positive first block r>0, and the empty divided word is the positive unit.',
None,
'Step 3.1 treats all-downward boundaries as a KLR PBW corner tensored with the positive bubble polynomial ring. At the empty boundary the KLR corner is R(0)=k, with the unique empty matching and empty dot monomial; bubble monomials still remain. Step 2.1 straightens closed components alone, and step 4.1 separates a finite bubble polynomial using framing variables, so the empty matching is included.',
'Statement inherits the root-system Definition, which explicitly allows Phi empty on E=0 with W={1}. In steps 1.1 and 1.4 the determinant and invariant product are then empty products 1; the degree sum is the empty sum 0. Step 2.1 has no reflections and no positive roots, and steps 3.1 and 4.1 compare zero coefficients of u^1. Step 5.1 gives the degree-zero coinvariant k and top degree 0.'
]
contracts={}
for p in glob.glob('research/'+run+'-batch-*.proof-contracts.json'):
 j=json.load(open(p))
 for id in ids:
  if id in j['contracts']: contracts[id]=(p,j['contracts'][id])
auditp='research/'+run+'-owner-one-time-exhausted-exception-20261011/levelone_metadata_preparer/boundary-audit-routing/boundary-audit-full.json'
audit=json.load(open(auditp));ops=[]
for id,e in zip(ids,ev):
 p,c=contracts[id];b=c['boundaries'];i=next(i for i,x in enumerate(b) if x['case']=='empty')
 if e is not None:
  ops.append({'id':id,'case':'empty','contract_path':p,'contract_raw_sha256':sha(pathlib.Path(p).read_bytes()),'item_path':'items/'+id+'.md','item_raw_sha256':sha(pathlib.Path('items/'+id+'.md').read_bytes()),'json_pointer':'/contracts/'+id+'/boundaries/'+str(i),'expected_value':b[i],'replacement_value':{'case':'empty','status':'checked','evidence':e},'assessment_by':'/root/boundary_metadata_a','assessment_scope':'boundary-specific metadata assessment only; preserve original mathematical risk/history/reviewer attribution','original_failed_candidate':[x for x in audit['contradicted'] if x['id']==id and x['case']=='empty']})
json.dump({'version':1,'run':run,'round':'FIRST1 round1; no counter reset','original_boundary_audit':{'path':auditp,'raw_sha256':sha(pathlib.Path(auditp).read_bytes())},'operations':ops,'holds':[{'id':ids[13],'case':'empty','reason':'Original proof uses negative-height R(n-1) at n=0 without a separate vacuum calculation. Base-case proof proposal accompanies this packet; do not mark current canonical proof checked before integrating it.'}]},open(out/'operations.json','w'),indent=2)
