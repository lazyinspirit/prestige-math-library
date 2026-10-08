# Frontier 42: bounded invariant-spectrum repair audit

Scope: four batch-20 items and their own manifest/contract objects only. Read CLAUDE.md, README.md and SCHEMA.md in full. Latest matching native dispatch result `alpha-high-step3b-pair-finite-coxeter-invariants-and-coinvariant-gradings-cd0f31ebd7788dac.result.json` reports task_completed true, artifact check 15/15, process_exit_code=exit_code=0; no matching scoped writer appeared in process inspection. Git HEAD at inspection was e59630424. No state, receipts, gates, control or native certifications were edited. This is independent bounded mathematical review and local repair evidence, not whole-frontier acceptance.

## Findings and focused corrections

- Complexification: reviewed faithfulness, finite image, all reflection hyperplanes and essentiality independently. Positive-definite real Gram matrix remains invertible over C; invariant forms vanish because simple normals change sign. The published CST supplier explicitly covers finite complex reflection groups under AC, including noncrystallographic groups; native already corrected the invalid supplier link. Added explicit axiom_use and corrected the basis type from e_s tensor 1 to 1 tensor e_s. No hypothesis or mathematical assertion changed.
- Classical spectra: supplier normalization conjugates the canonical representation to classical coordinates. Native already supplied restricted-A primitive-root order, signed B orbit, D parity/multiplicity and faithful complex order. Added invertibility of the simple-root basis map, the missing highest-even endpoint in the A cycle when n is odd, and an explicit invariant direct-sum argument for the restricted A spectrum. Statements preserved.
- Exceptional spectra: exact reconstruction independently matches all six displayed matrices and trace lists. Corrected the false intermediate identity I-tM=sum(-tM)^k in the Newton derivation (the adjugate identity alone yields the recurrence). Made faithful matrix-order to group-order transfer explicit. Corrected Casselman locator: p11 contains E6/E7/E8/F4 but neither H3 nor H4; H3 is on p5, and no exponent table is claimed from p11. Statements preserved.
- E6/H3 example: native already repaired the circular order inference by exact primitive-root plus finite-order diagonalizability. Made fixed root-calculation integers H=12,10 explicit before identifying the unknown group order. Native deps/contract already include the actual derivative/adjugate suppliers; no new unused edge was added. Statement preserved.

## Frozen batch19 reconciliation — 2026-10-08

Current status supersedes the initial holds below: all four scoped subjects are READY in this bounded mathematical scope, including classical/exceptional spectra and the E6/H3 matrix, order, root-count, degree-transfer and group-size assertions. The final regular-degree reconciliation is recorded below. Root reported genuine native19 success/drain and the supplier owner independently reviewed the stable core without changing its Definition/Statement. I re-read the frozen Definition and Steinberg supplier's exact consumed clauses and confirmed their guard hashes:

- def-cg-bipartite-coxeter-element-and-root-recursion: 51cb69410558762d430b42c5fa3ed07cd8c19e0ad5fc70e54af466a65cbdfa50.
- lem-cg-steinberg-bipartite-root-enumeration: 2dd7fcf44e80cd4e50d5c25810ff745ea45e28b7c275b9f3f91d879fc6918e3e.

Classical F3 and example F2 use Definition(1): the diagram's color classes give commuting involution products a,b, c=ab, and h=ord(c). The recorded application order applies the first class then the second, hence its matrix represents ba. Since a²=1, ba=a⁻¹(ab)a, so characteristic polynomial and exact group order agree with the defined c. Internal class order is immaterial. This resolves the convention hold without new item edits.

Exceptional F2 uses Steinberg(2) for the plane and angle 2pi/h, Steinberg(3) for the prefix-root enumeration and |Phi+|=nh/2, and Steinberg(4) for C-I invertibility. All six exceptional diagrams are irreducible with rank>=3, so the supplier's irreducible rank>=2 hypotheses apply; no invalid global reducible count is used. Combining the already independently established orders12,18,30,12,10,30 with ranks6,7,8,4,3,4 gives exactly36,63,120,24,15,60 positive roots, agreeing with the independently checked residue sums. The example's F5 transports the established E6/H3 root counts36 and15 from exceptional steps5.1–5.2. The active19 hold for all these exact uses is therefore closed.

Supplier statements and all three consumer statements are unchanged in this reconciliation. No proof correction or carrier mutation was necessary. The earlier independent exact matrices, traces, characteristic polynomials, root factorizations and orders remain intact and were not broadly re-audited. Consumer guard hashes remain the three hashes recorded below. Fresh focused checks: precheck3/3 PASS; rendercheck3 PASS with0 errors/warnings; layout3 items/18 rows/0 defects; strict selected batch20 contracts3 PASS with0 errors/warnings. No native receipts, certifications, state or gates were touched. The algebra owner has been asked for the regular-degree theorem's final READY hash before closing the last example clauses.

## Final E6/H3 degree-transfer reconciliation — 2026-10-08

The algebra owner supplied explicit final READY for the regular-degree theorem after its frozen19 reconciliation and bounded argument review. I verified its exact unchanged guard hash on disk: `thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees` = 99ec504ea0eb5875f0325dc77031b0bb85b3472159d0587b90ee49e277141695. Its clauses(1)–(2) give equality of the spectral-residue and basic-exponent multisets, then d=e+1 and product(d)=|W|, for an irreducible finite-type system under AC with the bipartite conventions and established N=nh/2. Both E6 and H3 meet these exact hypotheses, and the example explicitly assumes AC and declares the inherited use.

The example's F6 and final step4.1 therefore consume these supplier clauses correctly. E6 residues(1,4,5,7,8,11) yield degrees(2,5,6,8,9,12), with exact product51840. H3 residues(1,5,9) yield degrees(2,6,10), with exact product120. This closes the final held degree and group-size assertions. No statements, item text, manifest objects or contracts changed during this final reconciliation, so the preceding fresh focused3 checks/hashes remain current. All four initially scoped subjects are READY; no pending mathematical supplier use remains in this bounded task. Whole-run acceptance/certification belongs to root, and no such record was written here.

## Exact finite evidence and reading limits

Reconstructed reflection matrices from only the labelled edges and application orders, then compared with every displayed matrix, computed characteristic polynomials/power traces, checked M^h=I and M^d!=I for every proper divisor d of h, and checked exact characteristic-polynomial divisibility into X^h-1. All six cases pass over Q(sqrt2) and Q(sqrt5); no floating point. Orders: E6=12,E7=18,E8=30,F4=12,H3=10,H4=30. Residue arithmetic sums independently checked: 36,63,120,24,15,60. The H4 inverse-pair trig factorization was also checked algebraically as written. Classical coordinate finite smoke checked all A ranks1–14, B2–14, D4–14 characteristic polynomials and exact orders. These finite cases support the general signed-orbit proof; they do not replace it. The reproducible audit code is retained below; it uses existing /tmp/hh12-sympy via PYTHONPATH, SymPy1.14.0.

Downloaded and read all 12 pages of Casselman Element.pdf using PyMuPDF. Full text confirms theorem3.11 p9, H3 example p5 and p11 table contents; it explicitly says p1 that root-count and invariant-eigenvalue formulas are outside this essay. No reading of Etingof/Ripoll/Swanson full PDFs is claimed in this audit; their existing provenance remains documentary and the actual local suppliers govern the proof.

## Initial held supplier boundary and exact consumer map (historical)

Complexification is READY for the algebra owner, with no substantive Statement change. Three spectrum/example carriers consume active batch19; whole-claim validity remains PENDING its writer drain and root bounded review, even though explicit matrix/order conclusions are independently established here. Do not treat native self-verification of batch19 as proof authority. No edits to active19,21,29,30 or their objects occurred.

Exact consumed active19 facts:

lem-cg-classical-coxeter-spectra-from-reflection-models:

[F3] For an irreducible finite type system the diagram $\Gamma$ is one of the standard trees in the finite classification, and its bipartition $J\sqcup K$ gives commuting color-class products $a=\prod_{s\in J}s$ and $b=\prod_{s\in K}s$; $c=ab$ and $h=\operatorname{ord}(c)$ are well defined, and reversing the classes replaces $c$ by a conjugate since $ba=a^{-1}(ab)a$ ([[def-cg-bipartite-coxeter-element-and-root-recursion]] (1), [[def-cg-coxeter-diagram-components-and-finite-type]] (2), [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1)).

lem-cg-exceptional-coxeter-spectra-from-exact-certificates:

[F2] The Coxeter diagram of an irreducible finite type is a tree with bipartition $J\sqcup K$; the colour-class products $a,b$, their product $c=ab$ and $h=\operatorname{ord}(c)$ are well defined and listing the classes in the other order replaces $c$ by a conjugate element, so order and characteristic polynomial are unaffected; the Coxeter plane $P=\operatorname{span}(u,v)$ is $\rho(c)$-invariant with $\rho(c)|_P$ a rotation by $2\pi/h$; the prefix roots $\rho_i$ enumerate $\Phi_+$ with $|\Phi_+|=nh/2$, and $c-\mathrm{id}$ is invertible ([[def-cg-bipartite-coxeter-element-and-root-recursion]] (1)-(4), [[lem-cg-steinberg-bipartite-root-enumeration]] (2)-(4)).

ex-cg-e6-and-h3-spectra-from-exact-matrices:

[F2] The diagrams are finite type; the bipartite element is the product of the two commuting color-class products, and reversing class order gives a conjugate. The diagram lists, finite group property and Coxeter conventions are as stated in the classification ([[def-cg-bipartite-coxeter-element-and-root-recursion]], [[def-cg-coxeter-diagram-components-and-finite-type]], [[thm-cg-finite-coxeter-classification-including-h-and-dihedral]] (1)).

The exceptional fact F2 root count |Phi+|=nh/2 and prefix-root enumeration remain pending active19. Classical F3 and example F2 require the active19 color-class/product convention. Independently confirmed color-class commuting and ba=a^{-1}(ab)a follow directly from the diagram and involutions, but this does not accept all batch19 claims. Example degree transfer/group-size conclusions remain pending the algebra owner's regular-degree theorem review; spectrum calculations do not assert its acceptance.

Direct actual complexification deps consumers (retained despite the harmless typed-basis correction):
- lem-cg-formal-rational-differentials-and-invariant-jacobian
- lem-cg-basic-degrees-independent-and-coinvariant-series
- thm-cg-regular-coxeter-eigenvectors-determine-basic-degrees
- thm-cg-coinvariant-top-degree-and-discriminant
- ex-cg-i2m-invariants-and-coinvariant-hilbert-series
- lem-cg-exceptional-coxeter-spectra-from-exact-certificates
- def-cg-coxeter-basic-degrees-and-graded-coinvariants
- lem-cg-classical-coxeter-spectra-from-reflection-models
- ex-cg-e6-and-h3-spectra-from-exact-matrices

No mathematical supplier Statement change triggers downstream reconciliation. Algebra owner was notified of the exact notation correction and of pending active19 validity; no consumer mathematics relies on the mistyped tensor order. Root retains the active-writer guard and pending downstream map.

## Local checks on final text

All four explicit items: precheck PASS 4/4; rendercheck PASS 4 checked, zero errors/warnings; proof-layout PASS 4 items/24 rows/0 defects; strict selected batch20 proof contracts PASS 4 checked, zero errors/warnings. The first check found contract-use mappings missing for the newly explicit F2/F7 order transfer, fixed only in exceptional object's citation uses and derivation inputs. Precheck also required avoiding a same-phase direct-strategy tag; final proof retained the explicit repeated order reasoning. Final statements synchronized to the four own latest-loaded manifest objects; unrelated object/Requires edits preserved. Full native pair report remains 11 items/56 rows; this bounded selection is four items/24 rows, and native coverage20 is current rather than the older 'not covered' report.

Canonical content hashes (itemHashGuard, verification excluded):
- lem-cg-complexification-satisfies-reflection-invariant-hypotheses: e768c147b5e77d557e0aa5344e20f5e075329c2573547fd3f5d243c8fae2fdc2
- lem-cg-classical-coxeter-spectra-from-reflection-models: 5c77d7f21c8e4954b296621aeb3249969099ccfe47d00fbb0f815e753737085d
- lem-cg-exceptional-coxeter-spectra-from-exact-certificates: 27f12a79f601ca699b64989230d13b26c3d17c41233136e2a1a2d8a20163a84e
- ex-cg-e6-and-h3-spectra-from-exact-matrices: 115bf25c58fe0e9d7b986832647ba8c9ce4af243158baece36d5f68d9b303f24

Casselman source raw SHA256: bf5789bbf95b658007d160c1680b8399788157c7acc684e4758a988ebcc810ad

## Reproduction code

```python
import sympy as s, re, hashlib
from pathlib import Path
x=s.symbols('X'); phi=(1+s.sqrt(5))/2
text=Path('items/lem-cg-exceptional-coxeter-spectra-from-exact-certificates.md').read_text()
section=text.split('2.1 (The six matrices.)')[1].split('3.1 (Newton')[0]
matrices=re.findall(r'\\begin\{pmatrix\}(.*?)\\end\{pmatrix\}',section)
types=[('E6',6,[(0,1),(1,2),(2,3),(3,4),(2,5)],[0,2,4,1,3,5],12),('E7',7,[(0,1),(1,2),(2,3),(3,4),(4,5),(2,6)],[0,2,4,1,3,5,6],18),('E8',8,[(0,1),(1,2),(2,3),(3,4),(4,5),(5,6),(2,7)],[0,2,4,6,1,3,5,7],30),('F4',4,[(0,1),(1,2),(2,3)],[0,2,1,3],12),('H3',3,[(0,1),(1,2)],[0,2,1],10),('H4',4,[(0,1),(1,2),(2,3)],[0,2,1,3],30)]
for (name,n,edges,order,h),latex in zip(types,matrices):
 p=s.sqrt(2) if name=='F4' else phi
 G=s.eye(n)
 for i,j in edges:
  q=p if (name=='F4' and (i,j)==(1,2)) or (name.startswith('H') and (i,j)==(0,1)) else s.Integer(1)
  G[i,j]=G[j,i]=-q/2
 M=s.eye(n)
 for t in order:
  R=s.eye(n)
  for j in range(n): R[t,j]-=2*G[j,t]
  M=s.simplify(R*M)
 shown=s.Matrix([[s.sympify(a,locals={'p':p}) for a in row.split('&')] for row in latex.split('\\\\')])
 assert s.simplify(M-shown)==s.zeros(n),name+' displayed matrix'
 cp=s.Poly(s.simplify(M.charpoly(x).as_expr()),x).as_expr()
 assert s.simplify(M**h)==s.eye(n)
 for d in s.divisors(h)[:-1]: assert s.simplify(M**d)!=s.eye(n)
 assert s.rem(x**h-1,cp,x,extension=True)==0
 print(name,'matrix matches; characteristic=',cp,'traces=',[s.simplify(s.trace(M**k)) for k in range(1,n+1)],'exact order=',h)
for typ in 'ABD':
 for n in range(1 if typ=='A' else 2 if typ=='B' else 4,15):
  N=n+1 if typ=='A' else n
  Rs=[]
  for i in range(n):
   R=s.eye(N)
   if i<n-1 or typ=='A':
    R[i,i]=R[i+1,i+1]=0;R[i,i+1]=R[i+1,i]=1
   elif typ=='B': R[n-1,n-1]=-1
   else:
    R[n-2,n-2]=R[n-1,n-1]=0;R[n-2,n-1]=R[n-1,n-2]=-1
   Rs.append(R)
  if typ=='D': J=[i for i in range(n-1) if (i-(n-3))%2==0]; K=[i for i in range(n) if i not in J]
  else: J=list(range(0,n,2)); K=list(range(1,n,2))
  A=B=s.eye(N)
  for i in J:A=A*Rs[i]
  for i in K:B=B*Rs[i]
  M=A*B; cp=M.charpoly(x).as_expr()
  expected=x**(n+1)-1 if typ=='A' else x**n+1 if typ=='B' else (x**(n-1)+1)*(x+1)
  assert s.expand(cp-expected)==0
  h=n+1 if typ=='A' else 2*n if typ=='B' else 2*n-2
  assert M**h==s.eye(N)
  for d in s.divisors(h)[:-1]: assert M**d!=s.eye(N)
 print(typ,'all coordinate matrices, characteristic polynomials and exact orders pass through rank 14')
```
