import json,pathlib,difflib
D=pathlib.Path('research/numerical-optimization-dynamics-2026-10-16-owner-final-ledger-page-closure');a=json.loads((D/'analysis.json').read_text());R=a['run'];C='ex-finite-basis-projector-optimization-on-grassmann'
evidence={
'def-stiefel-grassmann-optimization-conventions':'The supplier Definition fixes REAL frames, orthogonal quotient and transpose/Frobenius conventions. The current consumer Example, Facts F3–F5 and Proof 1.1–3.1 instead explicitly use COMPLEX frames, unitary equivalence and adjoints, through the separately declared complex conventions. This retained real-conventions dependency is background only; no real-to-complex theorem transfer or real frame hypothesis is used in the complex projector argument.',
'thm-stiefel-grassmann-tangent-projections':'The supplier Statement concerns real X^T X=I and real horizontal projection (I-XX^T)G. Consumer F3 and Proof 2.1 explicitly consume the separate COMPLEX tangent-projection theorem with X*Z=0 and (I-XX*)G. The real theorem remains a redundant contextual declaration; it is not applied to complex frames and no real-only hypothesis is asserted to hold there.',
'prop-stiefel-grassmann-riemannian-gradient-formulas':'The supplier Statement assumes a smooth real ambient F and right orthogonal invariance. Consumer F2/F4 and Proof 2.1 obtain the C2 complex Hermitian-energy gradient from the separately named finite-projector and complex-projector propositions. The real smooth-gradient proposition is retained context only; the consumer does not infer infinite smoothness or a complex gradient formula from that real Statement.',
'alg-riemannian-trust-region':'Supplier Definition explicitly allows complex Grassmann with real Frobenius tangent metric and C2 objectives. Consumer Example chooses parameters in its ranges, a finite cap, B_x=0 and an immediately failing finite inner routine. Definition step 3 then uses its Cauchy fallback, and its M_B=0 threshold is +infinity, so this branch is selected at every positive radius. Definition steps 4–5 evaluate the complex polar trial and retain x on rejection, exactly as used by consumer Proof 2.2/F6; no bound on inner operations is imported.',
'thm-stiefel-retractions-are-first-order':'Supplier Statement proves REAL QR/polar first-order retractions on full-column-rank domains, without a second-order claim. Consumer F5 and Proof 2.2/3.1 instead invoke the separately declared complex polar definition and first-order theorem. This retained real-retraction edge is contextual; no real QR representative or second-order property is used for the complex algorithm.',
'def-complex-stiefel-grassmann-optimization-conventions':'Supplier Definition identifies complex orthonormal frames modulo U(r), with real Frobenius pairing Re tr(U*V), and horizontal X*Z=0. Consumer Example and Proof 1.1 use X*X=I, P=XX* and unitary frame changes; Proof 2.1 explicitly uses the REAL derivative of a Hermitian-matrix energy. Consumer 1<=r<n meets the supplier 1<=r<=n domain; no complex-bilinear metric is substituted.',
'thm-complex-stiefel-grassmann-tangent-projections':'Supplier Statement gives the horizontal representative X*Z=0 and projection (I-XX*)G in the real Frobenius metric. Consumer F3 and Proof 2.1 use exactly this horizontal identification together with the projector-energy derivative. Consumer frames satisfy X*X=I and 1<=r<n, meeting the supplier typed hypotheses; the real-transpose projection is not used.',
'prop-complex-stiefel-grassmann-are-compact':'Supplier Statement gives nonempty compact complex Stiefel and its continuous surjective Grassmann quotient for 1<=r<=n. Consumer F5 and Proof 3.1 use the compact complex geometry with its stricter 1<=r<n range. The stronger bounded tangent-disk compactness needed for a uniform Hessian maximum is separately established there as a closed bounded subset of finite real coordinates using F8, rather than inferred solely from base compactness.',
'prop-complex-grassmann-projector-energy-gradient':'Supplier Statement requires a real C1 energy on an OPEN Hermitian-matrix neighborhood containing rank-r projectors, with Hermitian real Frobenius gradient K(P), and concludes 2(I-XX*)K(P)X. Consumer F1/F2 gives the finite-basis C2 ambient energy and Hermitian F(P); F4 and Proof 2.1 substitute K=F to get exactly 2(I-P)F(P)X. P=XX* and unitary invariance are proved in 1.1, with full projector parameterization in 2.2.',
'def-complex-grassmann-polar-retraction':'Supplier Definition takes X*X=I and horizontal X*eta=0; its Gram matrix is I+eta*eta positive definite for EVERY horizontal eta. Consumer Example selects this complex polar map; F5 and Proof 2.2 use its orthonormal output and unitary-equivariant range to preserve Hermitian idempotent rank-r projectors at every trial. Hence bounded trust radii introduce no unmentioned retraction-domain restriction.',
'thm-complex-grassmann-polar-retraction-is-first-order':'Supplier Statement gives smoothness on the horizontal tangent bundle, orthonormal output, unitary equivariance, and D R_X(0)[eta]=eta. Consumer F5 and Proof 2.2/3.1 use orthonormal constraint preservation and smooth pullbacks; Proof 3.1 derives uniform pullback-gradient Lipschitzness by a continuous fiber Hessian maximum on its separately proved compact bounded tangent disk. No second-order retraction property or global Hessian bound is attributed to this first-order theorem.',
'thm-riemannian-trust-region-first-order-complexity':'Supplier Statement explicitly includes compact COMPLEX Grassmann, C2 f, available model/objective evaluations, uniform L_R on trial balls, and self-adjoint real-linear B with norm <=M_B, under the stated eta/gamma/theta/radius and 0<epsilon<=1 ranges. Consumer Example selects these ranges and B=0; Proof 3.1 proves the uniform pullback bound on each fixed bounded tangent disk, while F1/F2 supplies the C2 finite-basis formula. Its cap is chosen at least the supplier total-trial bound. Consumer claims O(epsilon^-2) accepted AND rejected outer trials, matching the supplier and making no inner-subproblem work or continuum-physics claim.'}
rows=[]
for e in a['missingLedgerRows']:
 s=e['supplier'];rows.append({'kind':'item','consumer':C,'supplier':s,'status':'verified','evidence':evidence[s],'basis':'new-focused-current-interface-check','inspected_paths':['items/'+C+'.md','items/'+s+'.md'],'root_confirmed':False})
(D/'new-edge-evidence.json').write_text(json.dumps({'run':R,'scope':'All 12 genuinely absent current native ledger keys after 83-to-92 rehome; focused actual interface inspection, including truthful nonlogical real-background declarations. No source changes or independent native approval.','reviews':rows},indent=2)+'\n')
for sub in ['before','proposed']:(D/sub).mkdir(exist_ok=True)
ls={};guards=[]
for b in range(1,108):
 p=pathlib.Path(f'research/{R}-batch-{b}.cross-batch-dependencies.json');ls[str(b)]=json.loads(p.read_text())
 for suffix in ['cross-batch-dependencies','pages']:
  p=pathlib.Path(f'research/{R}-batch-{b}.{suffix}.json');arc=D/'before'/p.name;arc.write_bytes(p.read_bytes());guards.append({'path':str(p),'before':str(arc)})
plan=pathlib.Path('research/plan-spec.json');(D/'before'/plan.name).write_bytes(plan.read_bytes());guards.append({'path':str(plan),'before':str(D/'before'/plan.name)})
for r in a['ownershipRelocations']:
 ls[r['from']].remove(r['row']);assert r['row'] not in ls[r['to']];ls[r['to']].append(r['row'])
for r in rows:ls['92'].append({k:r[k] for k in ['kind','consumer','supplier','status','evidence']})
writes=[];diff=[]
for b in ['83','92']:
 p=f'research/{R}-batch-{b}.cross-batch-dependencies.json';text=json.dumps(ls[b],indent=2,ensure_ascii=False)+'\n';pp=D/'proposed'/pathlib.Path(p).name;pp.write_text(text);writes.append({'path':p,'before':str(D/'before'/pathlib.Path(p).name),'proposed':str(pp)});diff.extend(difflib.unified_diff(pathlib.Path(p).read_text().splitlines(True),text.splitlines(True),fromfile=p,tofile=str(pp)))
(D/'ledger-only.patch').write_text(''.join(diff))
for id in [C]+[r['supplier'] for r in rows]:
 p=pathlib.Path('items/'+id+'.md');arc=D/'before'/p.name;arc.write_bytes(p.read_bytes());guards.append({'path':str(p),'before':str(arc)})
proposal={'run':R,'kind':'ROOT-only-current-ownership-relocation-and-append-only-new-keys','status':'Prepared for root review; NOT APPLIED','counts':{**a['counts'],'newRows':12,'finalRows':1499,'existingRowContentChanged':0,'canonicalWritesPerformed':0},'relocations':a['ownershipRelocations'],'newReviews':'new-edge-evidence.json','root_confirmation':'All twelve NEW focused checks require root reading before apply; no claimed independent reviewer acceptance.','planRequires':{'additions':[],'reason':'Every current source/manifest formal dependency home is already in the union requires closure; no missing page edge and no mirror mismatch.'},'guards':guards,'writes':writes,'holds':[],'separateMetadataMismatches':a['depsMismatch'],'historyPolicy':'All original 1487 row objects retained exactly once across current carriers. Move only the two invalid old83 consumer-home rows to92; retain their historical wording verbatim, even though the old page-placement explanation is now historical and the suppliers are same-batch. Root apply archives both complete original carriers before any write. No native session/dispatch/history relabeling.','notPerformed':['canonical writes','native refresh','hashes/readiness','gates','runtime/history/control changes']}
(D/'proposal.json').write_text(json.dumps(proposal,indent=2)+'\n')
print(json.dumps({'newReviews':len(rows),'finalRows':sum(map(len,ls.values())),'writes':len(writes),'guards':len(guards)}))
p=json.loads((D/'proposal.json').read_text());p['graphGuard']='graph-input-guards.json'
changed=[]
for w in p['writes']:
 target=pathlib.Path(w['proposed']);v=json.loads(target.read_text())
 if '-batch-92.' in w['path']:
  for r in v:
   if r['consumer']!=C or r['supplier'] not in ['def-finite-basis-projector-energy-model','prop-finite-projector-energy-reality-and-gradient']:continue
   old=dict(r);r['historical_review']=old
   detail=('The current supplier Definition supplies 1<=r<n, Hermitian h, a real-linear self-adjoint interaction map G, and a real C2 exchange-correlation functional on an open Hermitian neighborhood. Consumer F1 and Proof 1.1/3.1 take exactly this finite projector energy, preserve the rank-r projector parameterization and use the ambient C2 hypothesis for pullbacks.' if r['supplier'].startswith('def-') else 'The current supplier Statement and Proof 1.1–2.1 give a real C2 energy and Hermitian Frobenius gradient F(P)=h+G(P)+grad E_xc(P). Consumer F2/F4 and Proof 2.1 substitute this F into the separately proved complex Grassmann formula 2(I-P)F(P)X; Proof 3.1 uses its ambient C2 regularity.')
   r['evidence']='Historical pre-rehome review is preserved verbatim in historical_review and in the complete archived batch83 carrier. Its old B-page order/forward_refs explanation is historical, not the current route. The current 107 manifests and actual page sources put this example on batch92 B and this supplier on batch92 A; current item frontmatter declares it in deps, with no forward_refs. I actually reread both current supplier and full consuming Example/Facts/Proof after rehome. '+detail
   changed.append({'consumer':C,'supplier':r['supplier'],'before_row':old,'after_row':r})
 target.write_text(json.dumps(v,indent=2,ensure_ascii=False)+'\n')
p['relocatedEvidenceUpdates']=changed;p['counts']['existingRowContentChanged']=2;p['counts']['historicalOriginalRowsPreserved']=1487;p['historyPolicy']='All original 1487 reviews retained:1485 unchanged current row objects and2 exact originals nested in historical_review on their current92 rows; both complete original carriers archived before root apply. Only2 current evidence strings updated truthfully after actual supplier/consumer rereading. No native session/dispatch/history relabeling.'
for id in ['def-finite-basis-projector-energy-model','prop-finite-projector-energy-reality-and-gradient']:
 f=pathlib.Path('items/'+id+'.md');arc=D/'before'/f.name;arc.write_bytes(f.read_bytes());p['guards'].append({'path':str(f),'before':str(arc)})
for page in json.loads(pathlib.Path(f'research/{R}-batch-92.pages.json').read_text()):
 f=pathlib.Path('library')/page['category']/(page['id']+'.md');arc=D/'before'/f.name;arc.write_bytes(f.read_bytes());p['guards'].append({'path':str(f),'before':str(arc)})
(D/'proposal.json').write_text(json.dumps(p,indent=2)+'\n')
diff=[]
for w in p['writes']:diff.extend(difflib.unified_diff(pathlib.Path(w['before']).read_text().splitlines(True),pathlib.Path(w['proposed']).read_text().splitlines(True),fromfile=w['path'],tofile=w['proposed']))
(D/'ledger-only.patch').write_text(''.join(diff))
# Lossless archive compression preserves exact full guards without a 55MB plan carrier.
import gzip
p=json.loads((D/'proposal.json').read_text())
for g in p['guards']:
 if g['path']=='research/plan-spec.json':
  old=pathlib.Path(g['before']);dest=pathlib.Path(str(old)+'.gz');dest.write_bytes(gzip.compress(old.read_bytes(),mtime=0));old.unlink();g['before']=str(dest);g['encoding']='gzip'
graph=D/'graph-input-guards.json';packed=D/'graph-input-guards.json.gz'
if graph.exists():packed.write_bytes(gzip.compress(graph.read_bytes(),mtime=0));graph.unlink()
p['graphGuard']='graph-input-guards.json.gz';(D/'proposal.json').write_text(json.dumps(p,indent=2)+'\n')
