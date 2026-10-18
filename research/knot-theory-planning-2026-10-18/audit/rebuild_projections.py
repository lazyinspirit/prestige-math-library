from pathlib import Path
import sys
sys.dont_write_bytecode=True
import json,re,hashlib,collections,heapq
from module_contracts import CONTRACTS
from example_contracts import B
ROOT=Path(__file__).resolve().parents[3]; BASE=ROOT/'research/knot-theory-planning-2026-10-18'; PLAN=ROOT/'research/plan-knot-theory-track.md'
SNAP=ROOT/'.autopilot/knot-theory-planning-2026-10-18/author-snapshot/research/knot-theory-planning-2026-10-18'
old=json.loads((SNAP/'proposed-registration-delta.json').read_text())
s=PLAN.read_text()
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def replace(a,b):
 global s
 if a not in s:raise ValueError(a)
 s=s.replace(a,b)
replace('research proposal for 51 ordered A/B pairs (102 candidate pages)', 'research proposal for 54 ordered A/B pairs (108 candidate pages)')
replace('`op-jones-polynomial-detects-the-unknot`','`rem-jones-polynomial-unknot-detection-status`')
replace('the mathematical question is terminal', 'the mathematical question is terminal') if 'the mathematical question is terminal' in s else None
replace('The mathematical question is terminal and not a logical supplier.', 'This nonlogical research-status remark preserves the precise historical question and claimed solution without asserting either proof acceptance or a definitive current open classification. It is terminal and not a logical supplier.')
replace('every `op-` item', 'every `op-` item') if 'every `op-` item' in s else None
replace('`def-reduced-khovanov-cohomology-of-a-knot` is owned by KT-37', '`def-reduced-khovanov-cohomology-of-a-knot` is owned by KT-37')
replace('p$ (even, $p\ge4$ in the cited convention), the root $q$, the', 'p$ (even, $p\ge4$), A a primitive 2p-th root, q=A², r=p/2, simple labels 0,…,r−2, and the')
replace('invariant.', 'invariant.') # no-op sanity anchor
s=s.replace('`def-(p,q)-torus-knot`','`def-coprime-torus-knot`')
s=s.replace('K\\#\\overline K','K\\#(-K)')
s=s.replace('The terminal items `op-ordinary', 'The terminal items `op-ordinary')
s=s.replace('`op-two-boundary-slopes-for-fibered-knots`','`op-a-polynomial-newton-parallelogram-characterizes-torus-knots`')
s=s.replace('records their separately\nformulated Questions 1.5, 1.6 and 1.8;', 'records their separately\nformulated Questions 1.5, 1.6 and 1.8;')
# The following are part of the actual mathematical prose, not hidden metadata fixes.
insertions={
 'KT-20':'**Exact source-status correction:** Baldwin–Sivek Question1.6 asks whether the Newton polygon of the ordinary A-polynomial is a parallelogram iff K is a nontrivial torus knot. The distinct terminal `op-two-boundary-slopes-characterize-torus-knots` records the folklore question whether nontrivial torus knots are exactly S3 knots with two boundary slopes; the paper explains the implication from Question1.6. Its Theorem1.7 applies to every nontrivial fibered non-torus knot: either a connected separating incompressible slope-zero surface exists or there are at least three boundary slopes. Question1.8 explicitly asks, for K⊂Y with irreducible exterior, whether thin enhanced-A or infinitely many SL2(C)-abelian surgeries is equivalent to an exterior Seifert-fibered over the disk with at most two singular fibers. These are distinct formulations, with the dated bounded status review disclosed.',
 'KT-21':'**PL boundary:** `def-locally-flat-pl-knot-concordance` separately fixes a proper locally-flat PL annulus in the standard PL S3×I, with PL product collars and local pair charts(R4,R2)/(R4_+,R2_+). Arbitrary PL surfaces with cone singularities are excluded. No smooth/PL/locally-flat-topological concordance groups are identified by the three-dimensional knot-approximation theorem; any four-dimensional smoothing equivalence needs its own exact relative smoothing theorem.',
 'KT-32':'**Anomaly and parameter contract:** `def-extended-skein-cobordism-anomaly-data` fixes A primitive2p root for even p≥4, r=p/2, q=A², δ=−A²−A^−2 and labels0,…,r−2. With quantum integers [n]=(q^n−q^−n)/(q−q^−1) (and the defined small-root limits), projectors f0,…,f_(r−1) exist, f_(r−1) has zero quantum trace and is killed; constructing f_r would divide by [r]=0. State spaces live in the extended weighted/Lagrangian-surface cobordism category with the explicit signature/Maslov anomaly correction κ from the nonzero Gauss sums. The ordinary oriented cobordism construction is projective unless that anomaly is explicitly removed; no strict ordinary-oriented TQFT is silently asserted.',
 'KT-36':'**Generic/reduced/root boundary:** Construct J_N(K;q) as the generic reduced Laurent invariant first, with J_N(unknot;q)=1, proving the generic quantum-dimension quotient is a Laurent polynomial in the chosen variable. Only then evaluate that polynomial at q=exp(2πi/N). Never divide by the vanishing quantum dimension at that root. The N-dimensional generic color used in the Kashaev evaluation is not a surviving color of the level(N−2) semisimplified modular category; its negligible color is not an alternate way to compute this reduced root evaluation.',
 'KT-38':'**Modern local-equivalence branch:** `def-odd-khovanov-barnatan-and-leo-triple` fixes R=Z[X,h]/(X²−Xh), the odd Kh complex C overZ[X]/X², the Bar–Natan complex D overR, and a bigraded F2[X]/X² chain-homotopy equivalence f:C⊗F2→D⊗R/(2,h). Both complexes are finite free; h^−1D is homotopy equivalent to a rank-one free h^−1R module in homological degree0 and odd quantum degrees. Local maps are module chain maps(α,β) whose β localizes to an equivalence and whose mod2 square commutes up to module homotopy; local equivalence means maps both ways. `lem-odd-khovanov-and-barnatan-localization-foundations` owns odd exterior-cube sign/invariance, Bar–Natan h-localization, their mod2 comparison and the pointed connected-sum/Kunneth interface, with original foundations recovered before acceptance. `thm-leo-local-equivalence-group-and-concordance-map` proves tensor product and dual give an abelian group of LEO local-equivalence classes and knot complexes define a smooth-concordance homomorphism (Dunfield–Lipshitz–Schütz v3, Theorem1.1/3.8). `rem-leo-refined-s-current-computations` records their2025 computational cohort:890 of17,991 then-mystery prime knots through19crossings obstructed, at least832 topologically slice; these are source-reported finite results, not a current complete census. Reduced and mod2 variants/the total-order refinement require their separately stated Definitions3.10 and Theorem1.2 before any generalization.',
 'KT-42':'**Modern grid comparison:** `thm-grid-upsilon-equals-oss-upsilon` proves Kubota arXiv:2412.08146v1: the grid-defined Upsilon agrees with the original OSS filtered-complex invariant after all U_i are identified and the exact W/stabilization factors are accounted for. Its proof passes a filtered chain-homotopy equivalence to t-modified complexes and non-torsion normalized generators; it claims no improvement on the n! grid state bound.',
 'KT-53':'**Additional explicit suppliers:** `thm-stallings-integral-lower-central-isomorphism` states H1-isomorphism and H2-surjectivity for a group map imply all finite lower-central quotient isomorphisms, with a central-extension five-term proof. `lem-string-link-exterior-homology-and-meridian-maps` proves both punctured-end inclusions have these homology properties by relative Alexander duality. `lem-magnus-commutator-degree-and-truncation` proves E(Γ_qF)⊂1+(X)^q and truncated word arithmetic. `lem-milnor-basing-indeterminacy-and-self-crossing-scope` tracks conjugation and self-crossing changes to produce exactly the closed-link Δ_I indeterminacy and nonrepeating-index link-homotopy scope. These are distinct owned lemmas, not unnamed uses of Stallings or Magnus theory.'}
for qid,text in insertions.items():
 h=re.search(r'^### '+qid+r' —',s,re.M);nxt=re.search(r'^### KT-\d+ —',s[h.end():],re.M)
 end=h.end()+nxt.start() if nxt else len(s)
 s=s[:end].rstrip()+'\n\n'+text+'\n\n'+s[end:]

# Replace redundant proposed theorem carriers by a single owning contract.
MERGE={
'lem-knot-exterior-homology-and-zero-longitude':'thm-knot-exterior-homology-and-longitude',
'lem-blackboard-push-off-self-linking-writhe':'thm-blackboard-framing-self-linking-is-writhe',
'lem-seifert-surface-euler-characteristic-and-genus-bound':'thm-seifert-algorithm-boundary-euler-and-genus',
'thm-schubert-prime-decomposition-knot-uniqueness-proof':'thm-schubert-prime-decomposition-for-knots',
'thm-knot-genus-additivity-under-connected-sum-proof':'thm-knot-genus-additive-under-connected-sum',
'lem-seifert-determinant-equals-existing-alexander-polynomial':'thm-seifert-determinant-is-the-knot-alexander-polynomial',
'lem-levine-tristram-signature-s-equivalence-invariance':'lem-seifert-stabilization-preserves-levine-tristram-signature',
'lem-knot-surgery-first-homology':'lem-knot-surgery-first-homology-mayer-vietoris',
'lem-framed-knot-surgery-trace-boundary-and-sign':'thm-framed-knot-surgery-trace-boundary',
'lem-framed-link-surgery-presentation':'thm-lickorish-wallace-framed-link-presentation',
'thm-kirby-move-equivalence-proof':'thm-kirby-moves-classify-framed-link-presentations',
'thm-gordon-luecke-meridian-slope-and-complement-rigidity':'thm-gordon-luecke-knot-complement-determines-knot',
'lem-torus-knot-seifert-fibration-and-group-presentation':'thm-torus-knot-group-presentation',
'lem-satellite-pattern-torus-essentiality':'lem-satellite-torus-is-essential',
'thm-jsj-existence-uniqueness-for-knot-exteriors':'thm-jsj-decomposition-of-knot-exteriors',
'lem-jsj-decomposition-identifies-satellite-companion':'cor-satellite-companion-is-detected-by-jsj',
'thm-atoroidal-knot-exterior-hyperbolization-module':'thm-thurston-hyperbolization-for-atoroidal-knot-exteriors',
'lem-mostow-prasad-knot-volume-rigidity':'thm-mostow-prasad-rigidity-and-knot-volume',
'lem-knot-concordance-group-operations-and-inverses':'thm-knot-concordance-is-an-abelian-group',
'lem-slice-disk-seifert-metabolizer':'lem-slice-disk-induces-seifert-metabolizer',
'lem-slice-knot-seifert-matrix-fox-milnor-factorization':'thm-locally-flat-slice-implies-fox-milnor-factorization',
'thm-casson-gordon-signature-obstruction-proof':'thm-casson-gordon-slice-obstruction',
'thm-alexander-one-knot-topologically-slice-proof':'thm-alexander-polynomial-one-implies-topologically-slice',
'thm-donaldson-definite-diagonalization-local-proof':'thm-donaldson-definite-diagonalization',
'lem-slice-double-cover-definite-lattice-construction':'lem-slice-branched-cover-produces-definite-four-manifold',
'thm-cdr-strong-winding-injectivity-category-split':'thm-cochran-davis-ray-strong-winding-injectivity',
'thm-skein-module-s3-empty-link-basis-proof':'thm-skein-module-of-s-three-is-rank-one',
'thm-skein-module-solid-torus-multicurve-basis-proof':'thm-skein-module-of-solid-torus-has-core-multicurve-basis',
'thm-grid-combinatorial-complex-equals-knot-floer':'thm-grid-homology-independent-of-grid-and-equals-knot-floer',
'thm-tau-smooth-four-ball-genus-and-concordance-bound':'thm-tau-is-concordance-invariant-and-four-ball-genus-bound',
'thm-knot-floer-top-alexander-grading-equals-genus':'thm-knot-floer-detects-seifert-genus',
'thm-ni-top-knot-floer-rank-detects-fiberedness':'thm-rank-one-top-knot-floer-detects-fiberedness',
'thm-reduced-khovanov-unknot-detection-rank-argument':'thm-kronheimer-mrowka-reduced-khovanov-detects-unknot',
'thm-double-cover-d-invariant-smooth-slice-obstruction':'cor-double-cover-d-invariant-obstructs-smooth-slice',
'thm-tait-flyping-theorem-proof-modules':'thm-tait-flyping-theorem',
'lem-hec-ke-bracket-trace-dictionary-and-local-descent':'lem-hecke-bracket-trace-dictionary-and-local-descent',
'thm-weight-system-integration-is-not-assumed':'rem-weight-system-integration-proof-boundary',
'op-independent-audit-of-carmi-cohen-2026-jones-detection-claim':'rem-jones-polynomial-unknot-detection-status',
'op-two-boundary-slopes-for-fibered-knots':'op-a-polynomial-newton-parallelogram-characterizes-torus-knots',
'thm-unknot-normal-disk-np-certificate-verifier':'thm-unknot-recognition-has-np-certificate',
'lem-kz-infinitesimal-braid-relations-and-flatness':'lem-kz-connection-flatness-and-braid-relations',
}
for a,b in MERGE.items():s=s.replace('`'+a+'`','`'+b+'`')
renamed={MERGE.get(k,k):v for k,v in CONTRACTS.items()}
# Exact amenable-signature primary-source interface, selected-passage checked.
renamed['thm-amenable-signature-vanishing-for-solvable-bordisms']['statement']='Let n≥0 and R=Q or F_p. If G∈D(R), G^(n+1)=1, W is an integral(n+1/2)-solution for zero-surgery M(K), φ:π1M(K)→G extends over W and sends the meridian to infinite order, then ρ^(2)(M(K),φ)=0 (Cha–Kim Theorem3.1 citing Cha13 Theorem1.3).'
renamed['thm-amenable-signature-vanishing-for-solvable-bordisms']['proof_design']='Define D(R): every map of projective RG-modules whose R⊗_(RG) map is injective is itself injective; derived G^(n+1)=1 makes G solvable and amenable. Prove the dimension-flatness/metabolic L² intersection calculation and ordinary signature cancellation using the exact integral half-step Lagrangian/dual data. Complete Cha13 foundational source recovery remains required; Cha–Kim cites rather than proves this theorem.'

EXTRA={}
def extra(pair,ident,statement,route,deps=()):EXTRA[ident]={'pair':f'KT-{pair:02d}','statement':statement,'proof_design':route,'deps':list(deps)}
extra(16,'def-coprime-torus-knot','For coprime nonzero integers p,q, define the oriented primitive(p,q) curve on a standard unknotted Heegaard torus in S3, fixing meridian/longitude, orientation reversal and mirror. |p|=1 or|q|=1 gives unknot; noncoprime parameters define a link.','Fix the standard embedding and show independence of its choices by the torus ambient-isotopy model.')
extra(20,'op-two-boundary-slopes-characterize-torus-knots','Are the nontrivial torus knots exactly the knots in S3 with two boundary slopes?','Terminal folklore question described immediately after Baldwin–Sivek Question1.6; dated accepted2025/published2026 source only. No logical consumers.')
extra(53,'thm-stallings-integral-lower-central-isomorphism','If f:G→H induces an isomorphism H1(−;Z) and a surjection H2(−;Z), then G/Γ_qG→H/Γ_qH is an isomorphism for every finite q≥1.','Use the five-term homology exact sequence for central extensions and induction to identify Γ_q/Γ_(q+1); supply the group homology construction and exact sequence locally or via exact accepted suppliers.')
extra(53,'lem-string-link-exterior-homology-and-meridian-maps','Each inclusion of the punctured disk end into an r-string-link exterior induces H1≅Z^r with meridian basis and H2=0 on both sides.','Use excision/relative Alexander duality for r proper arcs in a ball and verify each oriented meridian generator; hence the hypotheses of the integral Stallings theorem hold.')
extra(53,'lem-magnus-commutator-degree-and-truncation','The Magnus homomorphism E:F_r→Z⟪X⟫× maps Γ_qF into1+(X)^q; words equal moduloΓ_q have identical coefficients below degreeq.','Expand [1+u,1+v]=1+uv−vu+terms of higher total degree and induct on commutator weight; prove inverse/geometric-series truncations terminate in each finite degree.', ['def-lower-central-series-and-magnus-expansion-for-links'])
extra(53,'lem-milnor-basing-indeterminacy-and-self-crossing-scope','Changing closed-link basings/closure gives precisely the lower-index/cyclic-subsequence gcd indeterminacy Δ_I; nonrepeating coefficients are unchanged under component self-crossing changes.','Track longitude conjugation, preferred-meridian correction and closure basing word moves in Magnus coefficients degree by degree; derive the generated ideal and prove repeated-index exclusions. Complete Milnor source recovery remains a prerequisite to acceptance.', ['lem-magnus-commutator-degree-and-truncation','thm-string-link-nilpotent-peripheral-identifications'])
extra(1,'thm-wirtinger-code-scan-terminates','For a finite valid code the presentation scan terminates with exactly one meridian per under-arc and one relation per crossing; zero crossings return ⟨m: ⟩.','Count finite traversals and write the crossing-free branch.', ['alg-knot-wirtinger-presentation-from-code'])
extra(38,'def-odd-khovanov-barnatan-and-leo-triple','LetR=Z[X,h]/(X²−Xh). A LEO triple is finite free bigradedC overZ[X]/X², finite free bigradedD overR and a module chain-homotopy equivalencef:C⊗F2→D⊗R/(2,h), withh^−1D homotopy equivalent to rank-one freeh^−1R in homological degree0 and odd quantum degrees. Local maps(α,β) preserve bigrading/module data, β localizes to equivalence and the mod2 square commutes up to module homotopy.','State h degree−2 and the odd exterior-cube/Bar–Natan algebra conventions fromDLS Definitions3.1/3.2; reduced/mod2 variants are separate.')
extra(38,'lem-odd-khovanov-and-barnatan-localization-foundations','Odd Kh and the Bar–Natan deformation provide the finite-free complexes/mod2 comparison of a knot LEO triple; their pointed tensor/Kunneth and cobordism maps satisfy the declared local-equivalence hypotheses.','Construct the odd exterior-algebra cube with valid edge-sign assignments and all R homotopies; localize the Bar–Natan X(X−h) algebra and prove the generator/cobordism maps, then the connected-sum interface. DLS cites original odd/Putyra foundations; recover them or prove locally.', ['def-odd-khovanov-barnatan-and-leo-triple','def-khovanov-frobenius-algebra-and-cube-of-resolutions'])
extra(38,'thm-leo-local-equivalence-group-and-concordance-map','Tensor product and dual make the local-equivalence classes of LEO triples an abelian group, andK↦LEO(K) gives a smooth-concordance homomorphism (DLS Theorem1.1/3.8).','Prove reflexive/symmetric/transitive local equivalence, tensor compatibility, unit and evaluation/coevaluation dual cancellation after localization; apply the proved pointed Kunneth/cobordism maps.', ['def-odd-khovanov-barnatan-and-leo-triple','lem-odd-khovanov-and-barnatan-localization-foundations'])
extra(38,'rem-leo-refined-s-current-computations','DLS arXiv:2312.09114v3(2025-11-13) reports refined integer obstructions for890 of17,991 prime knots through19crossings whose smooth sliceness was unknown inApril2023; at least832 are topologically slice. This is the cited finite cohort, not a complete2026classification.','Nonlogical source/report context only; no computational table has been independently recomputed here.')
extra(42,'thm-grid-upsilon-equals-oss-upsilon','After identifying all gridU_i and accounting for the precise W factors, Kubota gridUpsilon equals original OSSUpsilon (arXiv:2412.08146v1).','Use the proved filtered grid/CFK equivalence, pass through t-modification and show the normalized non-torsion generator grading is unchanged by the stated factors; retain coefficients/filtration and no improved complexity claim.', ['def-upsilon-function-from-filtered-complex','thm-grid-homology-independent-of-grid-and-equals-knot-floer'])
extra(2,'def-oriented-slope-and-knot-dehn-filling','For a marked compact exterior with basis(μ,λ), a slope is primitive pμ+qλ modulo simultaneous sign; p/q filling glues a solid torus meridian to that slope.','Define gluing orientation and prove independence of the longitude choice of the gluing map by extension over the solid torus.')
extra(4,'thm-seifert-zero-framing-and-framing-integer','For a fixed oriented knot, homotopy framing classes form a Z-torsor; any oriented Seifert surface selects self-linking-zero framing.','Trivialize the normal bundle, lift a relative angle to R and identify its integer winding; compare Seifert push-off with surface intersection.', ['def-oriented-seifert-surface-and-knot-genus','def-framed-knot-self-linking-and-seifert-framing'])
extra(8,'def-rack-fundamental-quandle-and-adjoint-group','A rack has bijective R_b:a↦a*b and(a*b)*c=(a*c)*(b*c); a quandle also satisfies a*a=a. The presented fundamental quandle has under-arc generators/crossing relations; Adj(Q) has generators e_a and e_(a*b)=e_b^−1 e_a e_b.','Fix positive crossing/basing conventions; this defines algebraic objects, not a completeness claim.')
extra(8,'thm-fundamental-quandle-and-adjoint-group-from-wirtinger','The diagram quandle is invariant under local quandle presentation moves, and its adjoint presentation is the knot Wirtinger group.','Check all R extensions/inverses, apply the adjoint relations to each crossing and compare generators with KT01.', ['def-rack-fundamental-quandle-and-adjoint-group','thm-knot-wirtinger-presentation-correctness','thm-quandle-colorings-are-reidemeister-invariant'])
extra(8,'thm-rack-colorings-are-framed-invariants','Rack colorings are invariant under R2/R3 and the declared framing-compensated diagram moves; forgetting framing requires the idempotency relation.','Check right inverses and self-distributivity; track the kink bijection and framing integer.', ['def-rack-fundamental-quandle-and-adjoint-group','thm-blackboard-framing-self-linking-is-writhe'])
extra(8,'alg-finite-rack-quandle-coloring-from-table','Input a finite m×m operation table and a based oriented a-arc diagram; reject any failed rack/quandle axiom; enumerate m^a assignments and retain exactly the crossing solutions.','Exact loops over table entries, triples and assignments; invalid inputs have a specific witness.', ['def-rack-fundamental-quandle-and-adjoint-group'])
extra(8,'thm-finite-table-coloring-termination-and-correctness','The table algorithm terminates; its axiom checks take O(m³) table operations and assignment test takes O(c m^a); accepted assignments are precisely colorings.','Count loops and use the exact crossing equation.', ['alg-finite-rack-quandle-coloring-from-table'])
extra(12,'def-seifert-s-equivalence-and-conway-normalization','S-equivalence is generated by integral unimodular congruence and elementary Seifert hyperbolic enlargements/reductions; ∇ is normalized by unknot1 and∇_+−∇_−=z∇_0 with symmetric Δ(t)=∇(sqrt(t)−1/sqrt(t)).','Specify each enlargement matrix and the z,t convention before Arf.', ['def-knot-seifert-pairing-and-matrix'])
extra(12,'thm-seifert-s-equivalence-and-conway-arf-bridge','The normalized Conway coefficient a2 mod2 equals the Seifert quadratic Arf invariant and is independent of surface.','Use common surface stabilization and a symplectic determinant expansion in z.', ['def-seifert-s-equivalence-and-conway-normalization','lem-seifert-matrix-s-equivalence-under-isotopy','lem-arf-quadratic-enhancement-from-seifert-form'])
extra(15,'def-instanton-surgery-triangle-data','Define oriented surgery triples, their admissible SO3 bundles with w2 pairing nontrivially with a surface, perturbed Chern–Simons functional, relative spectral-flow grading and finite-energy ASD trajectory/cobordism moduli.','Fix determinant/bundle/perturbation and orientation data; separate ordinary admissible instanton theory from the later knot-singularity version.')
extra(17,'def-incompressibility-seifert-fibration-and-jsj-system','A proper two-sided surface is incompressible when no essential boundary of a compressing disk exists; irreducible means every embedded S2 bounds a ball; atoroidal means every incompressible torus is boundary parallel. A Seifert-fibered piece has the stated local solid-torus(p,q) fiber charts; a minimal JSJ system has incompressible tori and Seifert/atoroidal complementary pieces.','Define boundary incompressibility, product regions, exceptional fibers and isotopy/minimality before invoking characteristic-submanifold arguments.')
extra(18,'def-pared-hyperbolic-structures-and-volume','Define a pared pair(M,P), where P comprises marked peripheral incompressible tori/annuli and the stated abelian/annulus peripheral conditions; define developing map/holonomy, completeness, cusp horoballs, curvature−1 metric and volume integral.','Record manifold/torus-end conditions and smooth orientation; these are construction data, not a hyperbolization proof.')
extra(20,'def-adjoint-twisted-homology-and-culler-shalen-data','Adρ acts on sl2(C) by conjugation; twisted cellular chains use this local system. An ideal point is a point of the smooth projective completion outside the affine character curve; its valuation gives an action on a Bruhat–Tits tree and an essential surface via a transverse equivariant map.','Define character component, admissible boundary kernel line, Newton polygon and the reciprocal slope conventions; separate construction from the surface existence theorem.')
extra(21,'def-locally-flat-proper-surface-and-concordance-collars','A proper surface is locally flat if each interior pair chart is(R4,R2) and each boundary chart is(R4_+,R2_+), with product collars on its link boundary; wild disks are excluded. Smooth concordance is a proper embedded annulus in fixed S3×I, not an abstract bordism.','State orientations and incoming−K0/outgoingK1 conventions.', ['def-oriented-link-in-s-three-and-ambient-isotopy'])
extra(21,'def-locally-flat-pl-knot-concordance','PL concordance is an oriented proper locally-flat PL annulus in the standard PL S3×I with product collars and PL pair charts(R4,R2)/(R4_+,R2_+). PL surfaces with cone singularities and arbitrary wild topological embeddings are excluded.','Keep this relation separate from smooth and locally-flat topological concordance. The3-dimensional smooth/PL knot bridge does not by itself prove any4-dimensional smoothing equivalence.')
extra(22,'def-integral-witt-and-seifert-isometric-structures','A Seifert lattice is a finite free abelian module with bilinear V and unimodular V−V^T; a metabolizer is a primitive half-rank summand with V identically zero. Witt equivalence uses metabolic direct-sum differences; rational isometric structures include the nonsingular form and its preserving automorphism.','Do not reuse the unrelated Witt Lie algebra. Define number-field involutions, primary decomposition and local Witt invariants in the classification proof, with exact domain before use.')
extra(24,'def-torsion-linking-form-and-casson-gordon-bordism','On an oriented rational homology3-sphere, λ(x,y)=(C·y)/n modZ for∂C=nx. A metabolizer L satisfies L=L^perp and|L|²=|H1|. The branch-lift zero-surgery and a Z_p×Z character define twisted C(t) forms; bounding multiplicities remove finite bordism obstructions.','Fix involution conj(t)=t^−1, quotient radicals and signature-average convention; distinguish Witt τ from arbitraryρ defects.')
extra(27,'def-integral-half-solutions-strebel-and-l2-signatures','An integral n-solution W has H1(M(K))→H1(W)≅Z and a half-rank hyperbolic Lagrangian with duals overZ[π/π^(n)] mapping to an integral basis of H2(W)/tors. A(n+1/2)-solution additionally lifts its Lagrangian toπ/π^(n+1) with vanishing equivariant intersections while retaining the n-duals. D(R) means projective RG maps that become injective afterR⊗RG were already injective. Define N(G), its trace/dimension andρ^(2)=σ^(2)(W,φ)−σ(W) with independence proved separately.','Match the precise Cha13 integral convention (no silent spin assumption); state n≥0, R=Q orF_p, G^(n+1)=1, extendingφ and infinite-order meridian before applying vanishing.')
extra(32,'def-extended-skein-cobordism-anomaly-data','Fix A primitive2p root, p even≥4, r=p/2, q=A², δ=−A²−A^−2, labels0,…,r−2 and the nonzero quantum integers used. Surfaces carry a Lagrangian in H1(Σ;R); cobordisms carry an integer weight whose composition adds the corresponding Maslov-index correction.','Define the Maslov index as the signature of the three-Lagrangian form and fix the Gauss-sum anomalyκ; alternatively use a fully specified p1/framed category. The projective ordinary-oriented action is not silently a strict ordinary-oriented TQFT.')
extra(35,'def-completed-chord-kz-and-morse-knot-data','Define the graded rational chord/Jacobi-diagram quotient with4T and optionally1T, degreewise product completion, infinitesimal braid generators tij, ordered configuration spaces, tangential basepoints, parenthesized braids and Morse long knots with a fixed height.','Specify which framed target and hump normalization is used before integrals and associator identities.')
extra(37,'def-reduced-khovanov-cohomology-of-a-knot','At a basepoint away from crossings, use the stated integral reduced Frobenius subcomplex/quotient convention and quantum shift so the reduced unknot is Z in normalized bidegree(0,0).','Fix subcomplex versus quotient and duality once, and prove the basepoint transport equivalence.', ['def-khovanov-frobenius-algebra-and-cube-of-resolutions'])
extra(37,'thm-reduced-khovanov-basepoint-and-reidemeister-invariance','The integral reduced complex is invariant under based R moves and basepoint transport along a knot with the fixed shift.','Restrict the unreduced chain homotopies and prove the crossing-passing basepoint maps/homotopies.', ['def-reduced-khovanov-cohomology-of-a-knot','lem-khovanov-reidemeister-chain-homotopies'])
extra(39,'def-admissible-pointed-heegaard-floer-data','A pointed Heegaard diagram(Σ,α,β,w,z) has transverse product tori inSym^gΣ, a knot from its pointed arc data, relativeSpin^c structures and Maslov/Alexander domains. Weak/strong admissibility imposes the exact signed periodic-domain condition needed for finite disk counts; choose version, coefficients and almost complex data.','Define full filtered CFK∞ overF2[U,U^−1], hat/minus/associated-graded variants, relative c1 grading and basepoint multiplicities before analytic moduli or grid identification.')
extra(40,'def-decorated-link-cobordism-and-floer-target','A decorated cobordism(W,S,A) includes an oriented proper link surface, boundary w/z basepoints and a properly embedded dividing1-manifoldA splitting S into w/z regions with the stated alternation. Specify Spin^c label, coefficient ring and minus/hat target and any sums.','Use the complete recovered Zemke theorem before acceptance; downloaded but unread Zemke is not a verified source. Define the data now and keep all functoriality proofs explicitly future obligations.')
extra(43,'def-balanced-taut-sutured-manifold-and-product-region','A sutured manifold(M,γ) has oriented annular/toroidal sutures separatingR_±; balanced requires no closed components, equalχ(R_+)=χ(R_−) and every boundary component meetingγ. Taut means irreducible andR_± norm-minimizing; a product isF×I with its standard sutures.','Define product disks/annuli, horizontal decompositions, foliations and characteristic product region in the exact Ni proof setting before rank-to-product arguments.')
extra(44,'def-singular-instanton-knot-and-sutured-closure-data','Define the reduced singular knot constructionI^natural using a meridional earring/arc and prescribed singular bundle holonomy; define KHI via a balanced-sutured closure with an admissible bundle and the stated eigenvalue summand.','Fix field/integral coefficients, orbifold/singular local model, gauge group and spectral-flow grading; closure independence/excision are theorem obligations. I^natural is not simply the ordinary framed instanton group.')
extra(46,'def-heegaard-floer-plus-infinity-absolute-grading','HF−,HF∞,HF+ are the statedU-complex variants related by exact sequence; torsionSpin^c rational-homology-sphere groups carry the absoluteQ grading with cobordism degree(c1²−2χ−3σ)/4.','Define tower image and normalizedS3 generator before d; hatHFK/grid output is insufficient.')
extra(49,'thm-haken-normal-essential-disk-existence','If a compact triangulated knot exterior contains an essential disk, it has a fundamental normal essential disk.','Minimize weight among essential disks, normalize rel essential boundary, analyze normal sums and remove sphere/boundary-parallel summands without losing essentiality. HLP cites Haken/Schubert rather than proves this.', ['def-normal-surface-coordinate-box','lem-meridian-disk-criterion-for-unknot-exterior'])
extra(49,'thm-jaco-tollefson-normal-essential-disk-vertex-existence','An essential disk in a compact triangulated3-manifold with nonempty boundary has an essential normal vertex disk in the exact JT theorem scope.','Prove the least-weight disk face argument and exchange-annulus analysis; bound ray solutions after existence. Recover complete JT Corollary6.4 proof before acceptance.', ['def-normal-surface-coordinate-box'])
extra(50,'def-flype-crossing-ball-and-alternating-tangle-data','A flype rotates a2-tangle through an adjacent crossing with the indicated boundary identification; Menasco crossing balls replace crossings by upper/lower hemispheres, and standard-position Conway spheres meet the projection in the prescribed normal arcs.','Define primeness/compositeness, checkerboard surfaces, visible/hidden Conway spheres and the geometric complexity before invoking flyping reduction.')

# Read current sections (the ledger is a projection, not a second prose author).
heads=list(re.finditer(r'^### (KT-\d+) — (.+)$',s,re.M)); sections={}
for i,h in enumerate(heads):sections[h[1]]={'title':h[2],'prose':s[h.start():heads[i+1].start() if i+1<len(heads) else len(s)]}
assert len(sections)==54
pair_by_id={q['id']:q for q in old['pairs']}
for n in (52,53,54):
 qid=f'KT-{n}';sec=sections[qid];pages=re.search(r'\*\*Pages:\*\* `([^`]+)` / `([^`]+)`',sec['prose'])
 pair_by_id[qid]={'id':qid,'a_page':pages[1],'b_page':pages[2],'a_title':sec['title'],'a_heading':sec['title'],'b_title':sec['title']+' — Examples and Counterexamples','requires':[],'external_context_pages':[],'source_refs':['Explicit local derivation; complete classical source recovery required for the stated deep theorem.'],'a_items':[],'module_items':[],'b_items':[]}
pair_by_id['KT-38']['source_refs']+=['Dunfield–Lipshitz–Schütz arXiv:2312.09114v3, Definitions3.1/3.2 and Theorem3.8; reader-6 full read, auditor selected decisive passages.']
pair_by_id['KT-42']['source_refs']+=['Ozsváth–Stipsicz–Szabó arXiv:1407.1795v3 and Kubota arXiv:2412.08146v1; reader-6 complete readings.']
pair_by_id['KT-54']['source_refs']=['Piccirillo arXiv:1808.02923v1, Lemma1.3, Proposition1.4, Theorem3.1, §4/Table1 and Figures2–4; reader-5 full read; auditor selected decisive prose passages.','Rasmussen arXiv:math/0402131v1, reader-6 full read; exact Lee/s and trace proof prerequisites local.']
for qid,sec in sections.items():
 n=int(qid[3:]);m=re.search(r'\*\*B leaves:\*\*(.*?)(?=\*\*Sources:\*\*)',sec['prose'],re.S)
 if m:
  precise='**B leaves:** '+B[n][0]+' '+B[n][1]+' '
  sec['prose']=sec['prose'][:m.start()]+precise+sec['prose'][m.end():]

items={};owner={}
K={'def':'definition','alg':'algorithm','lem':'lemma','thm':'theorem','prop':'proposition','cor':'corollary','rem':'remark','op':'open-problem','ex':'example','cex':'counterexample'}
for it in old['proposed_items']:
 ident=MERGE.get(it['id'],it['id'])
 if ident in items:continue
 n=dict(it);n['id']=ident;n['kind']=K[ident.split('-')[0]];n['deps']=[];n['justified_by']=[];n['aliases']=[]
 n['source_refs']=pair_by_id[n['pair']]['source_refs'];n.pop('status',None)
 items[ident]=n
# Move contracts to genuine prerequisite owners rather than introducing reverse page edges.
for ident,qid in [('lem-nontrivial-knot-exterior-irreducible-boundary-incompressible','KT-02'),('def-oriented-slope-and-knot-dehn-filling','KT-02'),('def-reduced-khovanov-cohomology-of-a-knot','KT-37')]:
 if ident in items:items[ident]['pair']=qid
for ident,x in EXTRA.items():
 items[ident]={'id':ident,'kind':K[ident.split('-')[0]],'pair':x['pair'],'deps':[],'justified_by':[],'aliases':[],'ownership':'explicit prerequisite definition or result'}

# New A items get their complete prose contract by extraction.
idpat=r'`((?:def|alg|lem|thm|prop|cor|rem|op|ex|cex)-[a-z0-9-]+)`'
for qid,sec in sections.items():
 if qid not in ('KT-52','KT-53','KT-54'):continue
 for ident in dict.fromkeys(re.findall(idpat,sec['prose'].split('**B item IDs:**')[0])):
  items.setdefault(ident,{'id':ident,'kind':K[ident.split('-')[0]],'pair':qid,'deps':[],'justified_by':[],'aliases':[],'ownership':'A item'})
 for ident in re.findall(idpat,sec['prose'].split('**B item IDs:**')[1].split('**B leaves:**')[0]):
  items[ident]={'id':ident,'kind':K[ident.split('-')[0]],'pair':qid,'deps':[],'justified_by':[],'aliases':[],'ownership':'B nonlogical leaf'}

# Canonical source-specific statements replace the opaque named-module boilerplate.
for ident,it in items.items():
 q=pair_by_id[it['pair']];sec=sections[it['pair']]['prose']
 it['home_page']=q['b_page'] if it['kind'] in ('example','counterexample') else q['a_page']
 it['status']='proposed-unbuilt'
 if ident in EXTRA:it.update({k:EXTRA[ident][k] for k in ('statement','proof_design')})
 elif ident in renamed:it.update(renamed[ident])
 else:
  m=re.search(re.escape('`'+ident+'`')+r'([^`]+)',sec)
  it['statement']=re.sub(r'\s+',' ',m[1] if m else sec.split('**A items:**')[-1].split('**Proof design')[0]).strip()
  it['proof_design']=sec.split('**Proof design and prerequisites:**')[-1].split('**B item IDs:**')[0].strip()
 if it['kind'] in ('example','counterexample'):
  it['statement']=B[int(it['pair'][3:])][0 if it['kind']=='example' else 1]
  it['proof_design']='Verify the explicitly stated finite calculation/diagram, with all hypotheses from its A-page prerequisites; name exact matrices, code or local move sequence in future item authoring. No diagram alone is a proof.'
  it['logical_leaf']=True
 it['statement']=it['statement'].replace('\t'+'au','\\tau')
 it['statement']=re.split(r'\*\*(?:Proof design|Local prerequisite|B item|B leaves|Sources|Additional|Exact|Necessary|Anomaly|Generic)',it['statement'])[0].strip()
 it['source_refs']=q['source_refs']
 it['statement']=re.sub(r'https?://\S+','(source in source_refs)',it['statement'])
 it['provenance_design']={'statement':'literature-derived' if it['kind'] not in ('example','counterexample','remark') else 'ai-altered','proof':'not-applicable' if it['kind'] in ('definition','algorithm','remark','open-problem') else 'future-local-proof-required'}

# Distinct statements/proof identities: keep supporting contracts within one carrier.
for a,b in MERGE.items():
 if a in CONTRACTS and b in items:
  items[b]['consolidated_design_ids']=items[b].get('consolidated_design_ids',[])+[a]

# Pair prerequisites name actual upstream interfaces; no serial chain across unrelated modules.
PD={1:[],2:[],3:[],4:[3],5:[2,4],6:[2,3,4],7:[6],8:[1,3],9:[1,2],10:[1,2,9],11:[2,6,7],12:[6,7],13:[2,3],14:[13],15:[1,2,13,44],16:[2,5,7],17:[2,5,16],18:[2,17],19:[13,18],20:[1,2,10,17,19,44],21:[4,5],22:[6,7,21],23:[7,12,21,22],24:[11,12,21,22],25:[7,21,23],26:[11,13,21],27:[10,17,21,22,23,25],28:[21],29:[3],30:[3,29],31:[29],32:[14,31],33:[29,30],34:[3],35:[34],36:[18,33],37:[29],38:[21,37],39:[4],40:[21,37,39],41:[21,39,40],42:[39,41],43:[17,39],44:[2,37],45:[11,37,39],46:[11,21,39],47:[1,3],48:[8,29,47],49:[2,47],50:[3,29],51:[20,29,34],52:[1,3,5,12],53:[1,2,3,9]}
PD[54]=[13,14,25,38]
# Only domain interfaces are consumed, not every theorem or open leaf on a prerequisite page.
ANCHOR={1:['thm-knot-wirtinger-presentation-correctness'],2:['def-knot-exterior','def-knot-meridian-and-preferred-longitude','thm-knot-exterior-homology-and-longitude','lem-nontrivial-knot-exterior-irreducible-boundary-incompressible'],3:['def-oriented-crossing-sign-writhe-and-blackboard-framing','thm-linking-number-is-invariant-and-writhe-is-not'],4:['def-oriented-seifert-surface-and-knot-genus','thm-seifert-algorithm-boundary-euler-and-genus'],5:['def-knot-connected-sum-and-prime-knot'],6:['def-knot-seifert-pairing-and-matrix','thm-seifert-matrix-presents-knot-alexander-module','lem-seifert-matrix-s-equivalence-under-isotopy'],7:['thm-seifert-determinant-is-the-knot-alexander-polynomial'],8:['def-quandle-and-knot-coloring','thm-quandle-colorings-are-reidemeister-invariant'],9:['def-maximal-abelian-cover-alexander-module','thm-abelian-cover-chain-model-computes-alexander-module'],10:['def-knot-twisted-chain-complex-and-reidemeister-torsion','lem-twisted-fox-jacobian-is-cellular-boundary'],11:['def-cyclic-branched-cover-of-a-knot','lem-cyclic-cover-linking-form-inverse-matrix'],12:['def-levine-tristram-hermitian-form-and-signature','lem-seifert-stabilization-preserves-levine-tristram-signature'],13:['def-oriented-slope-and-knot-dehn-filling','thm-framed-knot-surgery-trace-boundary'],14:['thm-kirby-moves-classify-framed-link-presentations'],16:['thm-torus-knot-group-presentation'],17:['def-incompressibility-seifert-fibration-and-jsj-system','thm-jsj-decomposition-of-knot-exteriors','def-satellite-pattern-companion-and-winding-number'],18:['def-finite-volume-hyperbolic-knot-exterior','thm-mostow-prasad-rigidity-and-knot-volume'],19:['thm-thurston-hyperbolic-dehn-filling'],20:['def-knot-a-polynomial','def-enhanced-a-polynomial'],21:['def-locally-flat-proper-surface-and-concordance-collars','def-smooth-knot-concordance','def-locally-flat-topological-knot-concordance','def-smooth-and-topological-slice-genus','thm-knot-concordance-is-an-abelian-group'],22:['def-metabolic-seifert-form-and-algebraic-knot-concordance','lem-slice-disk-induces-seifert-metabolizer'],23:['thm-locally-flat-slice-implies-fox-milnor-factorization'],25:['thm-alexander-polynomial-one-implies-topologically-slice'],29:['def-kauffman-bracket-smoothing-and-loop-value','thm-normalized-bracket-is-an-oriented-link-invariant'],30:['def-kauffman-regular-isotopy-and-dubrovnik-conventions'],31:['def-kauffman-bracket-skein-module-of-a-three-manifold'],33:['def-colored-framed-knot-evaluation-from-ribbon-category'],34:['def-singular-knot-and-vassiliev-derivative','def-framed-chord-diagram-and-four-term-relations'],37:['def-khovanov-frobenius-algebra-and-cube-of-resolutions','def-reduced-khovanov-cohomology-of-a-knot','thm-khovanov-homology-is-an-oriented-link-invariant'],39:['def-admissible-pointed-heegaard-floer-data','def-grid-diagram-for-an-oriented-knot','thm-grid-homology-independent-of-grid-and-equals-knot-floer','lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing'],40:['def-decorated-link-cobordism-and-floer-target','lem-knot-floer-cobordism-naturality-and-movie-invariance'],41:['def-knot-floer-filtration-and-tau','lem-tau-connected-sum-filtered-tensor-product'],44:['def-singular-instanton-knot-and-sutured-closure-data','lem-instanton-knot-complex-asd-analytic-foundations','thm-sutured-instanton-khi-rank-detects-unknot'],47:['def-planar-diagram-gauss-and-dowker-codes','thm-valid-code-reconstructs-the-declared-link-diagram']}

ANCHOR[25]=['thm-alexander-polynomial-one-implies-topologically-slice']
ANCHOR[38]=['def-rasmussen-s-invariant','thm-rasmussen-s-bounds-smooth-four-ball-genus']
# Explicit within-page proof edges: definitions → procedure/modules → analyzed results.
MD={
1:[('lem-wirtinger-local-meridian-conjugacy',['lem-wirtinger-crossing-ball-cover'])],
2:[('thm-knot-exterior-homology-and-longitude',['lem-knot-normal-circle-bundle-trivialization']),('lem-nontrivial-knot-exterior-irreducible-boundary-incompressible',['thm-knot-exterior-homology-and-longitude'])],
3:[('thm-blackboard-framing-self-linking-is-writhe',['lem-linking-number-even-sum-and-reidemeister-invariance'])],
4:[('thm-seifert-algorithm-boundary-euler-and-genus',['lem-seifert-bands-embedded-orientable-boundary-correct'])],
6:[('lem-seifert-matrix-s-equivalence-under-isotopy',['lem-seifert-cut-open-cover-alexander-module-presentation'])],
7:[('thm-seifert-determinant-is-the-knot-alexander-polynomial',['lem-square-seifert-presentation-and-alexander-normalization'])],
10:[('lem-twisted-acyclicity-from-torsion-module',['lem-twisted-fox-jacobian-is-cellular-boundary']),('thm-wada-deleted-minor-equals-twisted-reidemeister-torsion',['lem-twisted-fox-jacobian-is-cellular-boundary','lem-twisted-acyclicity-from-torsion-module']),('thm-twisted-burau-axis-torsion-product',['thm-wada-deleted-minor-equals-twisted-reidemeister-torsion'])],
11:[('lem-cyclic-cover-order-root-product-and-rational-sphere-test',['lem-cyclic-branched-cover-seifert-block-matrix']),('lem-cyclic-cover-linking-form-inverse-matrix',['lem-branched-cover-surgery-presentation-from-seifert-surface'])],
24:[('lem-casson-gordon-signature-defect-and-vanishing',['lem-casson-gordon-characters-and-linking-metabolizers']),('thm-casson-gordon-slice-obstruction',['lem-casson-gordon-signature-defect-and-vanishing'])],
25:[('thm-freedman-disk-embedding-theorem-proof-modules',['lem-freedman-casson-handle-skyscraper-and-surgery-modules']),('thm-alexander-polynomial-one-implies-topologically-slice',['thm-freedman-disk-embedding-theorem-proof-modules'])],
26:[('lem-asd-regularity-perturbation-and-orientability',['def-asd-moduli-fredholm-index-and-lattice-setup']),('lem-taubes-positive-definite-instanton-existence',['lem-asd-regularity-perturbation-and-orientability']),('lem-donaldson-reducible-ends-and-one-instanton-compactification',['lem-uhlenbeck-compactness-and-removable-singularities','lem-taubes-positive-definite-instanton-existence']),('thm-donaldson-definite-diagonalization',['lem-donaldson-reducible-ends-and-one-instanton-compactification']),('lem-slice-branched-cover-produces-definite-four-manifold',['thm-donaldson-definite-diagonalization'])],
27:[('lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction',['lem-cdr-zero-surgery-pattern-homology-cobordism']),('thm-cochran-davis-ray-strong-winding-injectivity',['lem-cdr-weak-injectivity-and-auxiliary-pattern-reduction']),('lem-cha-kim-higher-order-rho-bound-and-coprime-separation',['lem-cha-kim-integral-solvability-and-blanchfield-bordism','thm-amenable-signature-vanishing-for-solvable-bordisms'])],
29:[('lem-kauffman-bracket-curl-and-writhe-correction',['lem-kauffman-bracket-r2-r3-identities']),('lem-hecke-bracket-trace-dictionary-and-local-descent',['lem-kauffman-bracket-curl-and-writhe-correction'])],
30:[('lem-bmw-descending-tangle-spanning',['lem-bmw-relations-dubrovnik-parameter-dictionary']),('lem-bmw-closure-pairing-independence',['lem-bmw-descending-tangle-spanning']),('lem-bmw-markov-trace-stabilization',['lem-bmw-closure-pairing-independence']),('lem-kauffman-dubrovnik-writhe-component-conversion',['lem-bmw-relations-dubrovnik-parameter-dictionary'])],
32:[('lem-root-fusion-rules-and-simple-object-completeness',['lem-root-jones-wenzl-recursion-and-negligible-ideal']),('lem-root-handlebody-spine-state-space-finite-generation',['lem-root-fusion-rules-and-simple-object-completeness']),('lem-root-handlebody-pairing-nondegeneracy-and-gluing',['lem-root-handlebody-spine-state-space-finite-generation']),('lem-root-skein-surgery-kirby-color-invariance',['lem-root-handlebody-pairing-nondegeneracy-and-gluing'])],
35:[('lem-kontsevich-configuration-integral-convergence-needle-estimates',['lem-kontsevich-configuration-space-compactification-faces']),('lem-kontsevich-critical-point-normalization-and-associator',['lem-kz-infinitesimal-braid-relations-and-flatness','lem-kontsevich-configuration-integral-convergence-needle-estimates']),('lem-kontsevich-braid-and-knot-isotopy-invariance',['lem-kontsevich-critical-point-normalization-and-associator']),('thm-kontsevich-universal-associated-graded-proof',['lem-kontsevich-braid-and-knot-isotopy-invariance'])],
37:[('lem-khovanov-reidemeister-chain-homotopies',['lem-khovanov-cube-differential-squares-to-zero'])],
39:[('thm-grid-commutation-stabilization-invariance-proof',['lem-grid-rectangle-boundary-square-zero-and-filtration']),('thm-grid-homology-independent-of-grid-and-equals-knot-floer',['thm-grid-commutation-stabilization-invariance-proof','lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing'])],
40:[('lem-knot-floer-cobordism-naturality-and-movie-invariance',['lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing']),('thm-khovanov-and-knot-floer-cobordism-map-scope',['lem-knot-floer-cobordism-naturality-and-movie-invariance','lem-barnatan-carter-saito-movie-moves-up-to-sign'])],
43:[('lem-ni-fiberedness-sutured-floer-and-gabai-inputs',['lem-ni-holomorphic-disk-and-jsj-analytic-inputs']),('thm-rank-one-top-knot-floer-detects-fiberedness',['lem-ni-fiberedness-sutured-floer-and-gabai-inputs'])],
44:[('lem-kh-to-instanton-resolution-spectral-sequence',['lem-instanton-knot-complex-asd-analytic-foundations']),('thm-sutured-instanton-khi-rank-detects-unknot',['lem-instanton-knot-complex-asd-analytic-foundations']),('thm-kronheimer-mrowka-reduced-khovanov-detects-unknot',['lem-kh-to-instanton-resolution-spectral-sequence','thm-sutured-instanton-khi-rank-detects-unknot'])],
45:[('lem-os-first-differential-is-reduced-khovanov',['lem-os-link-surgery-filtered-complex-and-triangle']),('lem-os-filtered-convergence-and-invariance-scope',['lem-os-first-differential-is-reduced-khovanov'])],
46:[('lem-rational-ball-spin-c-cobordism-map-inequality',['lem-heegaard-floer-correction-term-heegaard-invariance']),('cor-double-cover-d-invariant-obstructs-smooth-slice',['lem-rational-ball-spin-c-cobordism-map-inequality'])],
49:[('lem-good-linear-size-exterior-triangulation-from-diagram',['lem-smooth-to-pl-knot-exterior-ambient-isotopy']),('thm-haken-finite-box-search-correctness',['lem-normal-coordinate-matching-equations-and-finite-bounds','lem-meridian-disk-criterion-for-unknot-exterior','thm-haken-normal-essential-disk-existence']),('thm-jaco-tollefson-vertex-search-correctness',['lem-normal-coordinate-matching-equations-and-finite-bounds','lem-meridian-disk-criterion-for-unknot-exterior','thm-jaco-tollefson-normal-essential-disk-vertex-existence']),('thm-unknot-normal-disk-np-certificate-verifier',['thm-jaco-tollefson-vertex-search-correctness'])]}

EXT={1:['def-oriented-link-in-s-three-and-ambient-isotopy','def-regular-oriented-link-diagram','thm-seifert-van-kampen'],2:['def-framing-of-a-normal-bundle','def-oriented-link-in-s-three-and-ambient-isotopy'],3:['thm-oriented-reidemeister-equivalence-theorem','def-elementary-geometric-half-twist'],4:['def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram','lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups'],6:['def-one-variable-alexander-module-of-an-oriented-link'],7:['def-alexander-polynomial-from-the-first-elementary-ideal','thm-the-alexander-polynomial-is-an-oriented-link-invariant'],8:['thm-oriented-reidemeister-equivalence-theorem'],9:['lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold'],29:['def-temperley-lieb-quotient-and-jones-specialization','def-the-homflypt-coefficient-ring','thm-the-homflypt-skein-relation','thm-the-hecke-trace-construction-is-an-oriented-link-invariant'],33:['thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor','thm-ribbon-evaluation-is-an-invariant-of-framed-colored-links','thm-writhe-normalized-ribbon-trace-is-an-unframed-link-invariant'],37:['def-chain-complex-in-an-abelian-category','thm-chain-homotopic-maps-induce-the-same-map-on-homology'],38:['def-filtered-chain-complex','thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology'],45:['def-filtered-chain-complex','thm-a-filtered-complex-produces-an-exact-couple','thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology'],46:['lem-double-cover-branched-over-a-slice-disk-is-a-rational-homology-ball']}

# Build real interfaces rather than preserving the author's blanket serial-edge chain.
module_ids=set(renamed)|set(EXTRA)
for qid,q in pair_by_id.items():
 n=int(qid[3:]);loc=[x for x in items.values() if x['pair']==qid and not x.get('logical_leaf')]
 defs=[x['id'] for x in loc if x['kind']=='definition']
 algs=[x['id'] for x in loc if x['kind']=='algorithm']
 mods=[x['id'] for x in loc if x['id'] in renamed and x['kind'] not in ('definition','algorithm','open-problem','remark')]
 upstream=list(dict.fromkeys(d for k in PD[n] for d in ANCHOR.get(k,[])))
 # Definition prerequisites are definition interfaces. Results subsequently carry theorem use.
 upstream_defs=[d for d in upstream if d.startswith('def-')]
 for i,x in enumerate([z for z in loc if z['kind']=='definition']):
  x['deps']=list(dict.fromkeys(upstream_defs+EXT.get(n,[])+defs[:i]))
 for x in loc:
  if x['kind']=='definition':continue
  if x['kind'] in ('remark','open-problem'):
   x['deps']=upstream_defs+defs
   continue
  x['deps']=list(dict.fromkeys(upstream+EXT.get(n,[])+defs))
  if x['kind']=='algorithm':continue
  if x['id'] not in module_ids:x['deps']+=mods+algs
  if x['id']=='lem-khovanov-cube-differential-squares-to-zero':x['deps']=[d for d in x['deps'] if d not in mods]
 for ident,deps in MD.get(n,[]):
  ident=MERGE.get(ident,ident)
  if ident in items:items[ident]['deps']+=deps
 for ident,x in EXTRA.items():
  if x['pair']==qid:items[ident]['deps']+=x['deps']

# Contract-level corrections needed to avoid mutual source/consumer cycles.
# Definitions with theorem well-definedness discharges do not depend on those theorems.
for it in items.values():it['deps']=list(dict.fromkeys(MERGE.get(d,d) for d in it['deps'] if MERGE.get(d,d)!=it['id']))
manual={
'thm-string-link-nilpotent-peripheral-identifications':['def-based-string-link-and-labeled-link-peripheral-system','def-lower-central-series-and-magnus-expansion-for-links','lem-string-link-exterior-homology-and-meridian-maps','thm-stallings-integral-lower-central-isomorphism'],
'thm-stallings-integral-lower-central-isomorphism':['def-lower-central-series-and-magnus-expansion-for-links'],
'lem-string-link-exterior-homology-and-meridian-maps':['def-based-string-link-and-labeled-link-peripheral-system'],
'thm-milnor-invariants-isotopy-and-link-homotopy-scope':['def-milnor-integer-and-residue-invariants','thm-string-link-nilpotent-peripheral-identifications','lem-milnor-basing-indeterminacy-and-self-crossing-scope'],
'thm-truncated-milnor-computation-terminates-and-is-correct':['alg-truncated-milnor-invariants-from-based-diagram','lem-magnus-commutator-degree-and-truncation','thm-string-link-nilpotent-peripheral-identifications','lem-milnor-basing-indeterminacy-and-self-crossing-scope'],
'thm-schubert-bridge-connected-sum':['def-knot-bridge-position-and-unknotting-number','def-knot-connected-sum-and-prime-knot','lem-knot-decomposing-sphere-realizes-connected-sum'],
'thm-descending-diagram-is-unknot-and-finite-bounds':['alg-descending-diagram-unknotting-sequence','thm-knot-wirtinger-presentation-correctness'],
'thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance':['def-extended-skein-cobordism-anomaly-data','def-skein-tqft-state-space-and-handlebody-pairing','lem-root-handlebody-pairing-nondegeneracy-and-gluing','lem-root-skein-surgery-kirby-color-invariance','thm-kirby-moves-classify-framed-link-presentations'],
'thm-reduced-alternating-diagram-minimizes-crossings':['def-reduced-alternating-link-diagram','lem-alternating-state-adequacy-and-jones-span'],
'cor-jones-span-detects-crossing-number-for-reduced-alternating-knots':['def-reduced-alternating-link-diagram','lem-alternating-state-adequacy-and-jones-span'],
'thm-normal-surface-unknot-algorithm-terminates-and-is-correct':['alg-haken-jaco-tollefson-unknot-recognition','thm-haken-finite-box-search-correctness','thm-jaco-tollefson-vertex-search-correctness'],
'thm-tait-flyping-theorem':['def-reduced-alternating-link-diagram','def-flype-crossing-ball-and-alternating-tangle-data'],
}
for i,deps in manual.items():items[i]['deps']=deps
# Do not make newly cohomological basic definitions depend on their downstream theory.
for ident in ['def-oriented-slope-and-knot-dehn-filling','def-admissible-pointed-heegaard-floer-data','def-integral-half-solutions-strebel-and-l2-signatures','def-locally-flat-proper-surface-and-concordance-collars','def-singular-instanton-knot-and-sutured-closure-data']:
 if ident in items:items[ident]['deps']=[d for d in items[ident]['deps'] if d not in items or items[d]['pair']!=items[ident]['pair']]

# Analyze every procedure in a separate ordinary result with input/output conditions.
for alg in list(items.values()):
 if alg['kind']!='algorithm':continue
 ident='thm-'+alg['id'][4:]+'-procedure-properties'
 items[ident]={'id':ident,'kind':'theorem','pair':alg['pair'],'home_page':alg['home_page'],'deps':[alg['id']]+alg['deps'],'justified_by':[],'aliases':[],'ownership':'algorithm termination/output verification','status':'proposed-unbuilt','statement':'For exactly the admissible encoded inputs of '+alg['id']+', execution terminates, rejects precisely the stated syntactic failures and returns the prescribed finite output. Any identification with a topological invariant, recognition completeness, or asymptotic complexity is only the separately proved domain result, not inferred from finite execution.','proof_design':'Use the explicit finite loop/state/word or bounded search measure in the procedure; prove each branch preserves the stated output representation and all arithmetic is effective. Cite the domain correctness and completeness modules separately when claiming invariant/recognition meaning.','source_refs':alg['source_refs']}
 alg['justified_by']=[ident]

# Exact open formulations/status and terminal nonlogical claim record.
OPEN={
'op-ordinary-a-polynomial-detects-torus-knots':('Does the ordinary A-polynomial distinguish torus knots from all non-torus S3 knots?','Baldwin–Sivek Question1.5, accepted2025v2/published2026; bounded review, no exhaustive later-resolution audit.'),
'op-two-boundary-slopes-for-fibered-knots':('Are the nontrivial torus knots exactly the S3 knots with two boundary slopes? The fibered non-torus alternative is a partial theorem, not the full question.','Baldwin–Sivek Question1.6 with Theorem1.7 partial result, accepted2025v2/published2026.'),
'op-a-polynomial-for-knots-in-other-three-manifolds':('Which precise extensions of the torus-knot/enhanced-A or SL2-abelian-surgery characterization hold for knots in the other3-manifold classes posed in Baldwin–Sivek Question1.8? Future item must reproduce that source class verbatim in its mathematical formulation before acceptance.','Question1.8 source locator verified by reader4; full exact general-ambient formulation remains a source-bound authoring requirement, not a blanket theorem for arbitrary3-manifolds.'),
'op-cha-kim-smooth-graded-quotients-for-topologically-slice-images':('For a nonconstant winding-zero satellite map on smooth concordance with entirely topologically slice image, does every ⟨P^n(C_sm)⟩/⟨P^(n+1)(C_sm)⟩ have infinite rank?','Cha–Kim Remark1.1 retained in2025final; targeted2026-10-18 search found no later resolution, not exhaustive.'),
'op-slice-ribbon-conjecture':('Does every smoothly slice classical knot in standard S3 bound a ribbon disk in the stated smooth category?','Historical Livingston2004source; no exhaustive2026status search in this dossier. A fresh authoritative status review is required before an active op carrier is accepted.'),
'op-kashaev-volume-conjecture-for-hyperbolic-knots':('For a hyperbolic S3 knot and reduced J_N(unknot;q)=1, is lim_(N→∞)(2π/N)log|J_N(K;exp(2πi/N))|=Vol(S3−K), with exact q/color convention transported from the quantum definition?','Kauffman2022context; no complete2026status review. Complex-volume refinements are separately formulated and not silently included.')}
OPEN.pop('op-two-boundary-slopes-for-fibered-knots')
OPEN['op-a-polynomial-newton-parallelogram-characterizes-torus-knots']=('For K⊂S3, is K a nontrivial torus knot iff the ordinary A-polynomial Newton polygon is a parallelogram?','Baldwin–Sivek arXiv:2405.19197v2 accepted2025-11-28, PDFp3 Question1.6; published2026. Corrected by direct auditor source inspection, not the misnumbered reader4 summary.')
OPEN['op-two-boundary-slopes-characterize-torus-knots']=('Are nontrivial torus knots exactly the S3 knots with two boundary slopes?','Distinct folklore conjecture in Baldwin–Sivek v2 PDFp3 immediately after Question1.6; Theorem1.7 is a partial fibered-knot alternative. Bounded dated review only.')
OPEN['op-a-polynomial-for-knots-in-other-three-manifolds']=('Let K lie in a closed connected oriented3-manifold Y with irreducible torus-boundary exterior. Is enhanced-A thinness equivalent to the exterior being Seifert-fibered over a disk with at most two singular fibers? Is the existence of infinitely many rational SL2(C)-abelian filling slopes equivalent to the same condition, with peripheral coordinates fixed?','Baldwin–Sivek arXiv:2405.19197v2, PDFp3 Question1.8 and its explicit subsequent example, checked directly by auditor. No S3 conclusion is transferred as a theorem.')
for ident,(form,status) in OPEN.items():
 if ident in items:
  items[ident]['statement']=form;items[ident]['status_review']={'as_of':'2026-10-18','status':status,'classification':'terminal question; current-source review required before active publication where noted'}
  items[ident]['open_problem_review']={k:{'verdict':'design-recorded-not-publication-certified','evidence':form if k=='formulation' else status} for k in ('formulation','status','sources')}
  items[ident]['proof_design']='No claimed proof. Formulation/source/status review is distinct from proof acceptance.'
ident='rem-jones-polynomial-unknot-detection-status'
items[ident]['statement']='Historical question: for a classical knot in S3, does V_K(t)=1 imply unknot? Carmi–Cohen arXiv:2606.22410v1(21June2026), Theorems6.8–6.9, claims every nontrivial knot has a nonzero Jones–Vassiliev coefficient with2≤q≤3c(K), implying the answer yes. As of this2026-10-18 research review, this proof has not been independently validated here; neither established validity nor a definitive global unresolved status is certified. Missing DOI/journal metadata proves neither. This is a nonlogical status remark, not an op audit task or supplier.'
items[ident]['proof_design']='Selected decisive passages checked: machine conditionsC1–C4, Proposition5.12, Theorems5.10–5.11 and6.8–6.9. Uniform geometry, exceptional collapse and smoothing locality remain independent-verification limitations. No preprint theorem is imported into a proof.'
for ident,statement in {
'thm-root-of-unity-skein-tqft-gluing-and-surgery-invariance':'For the fixed admissible root and normalized Gauss sums, radical-quotient handlebody state spaces and Kirby-color maps form the weighted/Lagrangian extended3-cobordism TQFT with explicit Maslov/signature anomaly correction. Forgetting the extension gives projective ordinary-oriented data unless anomaly removal is separately proved.',
'thm-twisted-burau-determinant-formula-under-extension-hypotheses':'For an encoded colored braid representation extending over the closure, an acyclic twisted exterior complex and admissible nonzero denominator, the axis-decomposition determinant equals the declared torsion up to determinant-image/deck units. Nonacyclic input has declared zero torsion; a zero denominator forbids that quotient column.',
'thm-baldwin-sivek-infinitely-many-abelian-surgeries-characterize-torus-knots':'For K⊂S3, infinitely many rational SL2(C)-abelian surgeries occur iff K is a torus knot, including the source unknot convention. SL2(C)-abelian means every representation of the filled group has abelian image.',
'thm-enhanced-a-polynomial-newton-polygon-detects-torus-knots':'For K⊂S3, the enhanced-A Newton polygon is contained in a line iff K is a torus knot, with the enhanced polynomial defined from the source irreducible representation components (Baldwin–Sivek Theorem1.2).',
'cor-enhanced-a-polynomial-and-alexander-degree-identify-torus-knots':'If(enhanced A-polynomial, degree of symmetrized Alexander polynomial) of K⊂S3 equals that of a specified torus knot T_(a,b), then K is that torus knot in the source orientation/mirror convention (Corollary1.4).',
'thm-baldwin-sivek-two-boundary-slope-alternative':'If K⊂S3 is nontrivial, fibered and not a torus knot, then either E_K contains a connected separating incompressible surface with slope-zero boundary or K has at least three boundary slopes (Theorem1.7). Exactly-two-slopes is its corollary restatement, not an extra hypothesis here.',
'def-instanton-knot-homology-and-canonical-class':'Define reduced singular instanton I^natural(K) using the earring/admissible singular bundle data of def-singular-instanton-knot-and-sutured-closure-data. Any distinguished canonical class requires a separate explicit construction; none is assumed in the rank detector.',
'thm-colored-jones-finite-evaluation':'For integerN≥1, the generic reduced U_q(sl2) color construction yields the stated Laurent invariant J_N(unknot;q)=1 by finite effective matrices. Prove polynomiality and normalize generically before root evaluation; do not divide by a vanishing root quantum dimension.',
'thm-khovanov-homology-is-an-oriented-link-invariant':'For finite regular oriented diagrams of ambient-isotopic smooth S3 links, the normalized integral Frobenius cube complexes are bigraded-chain-homotopy equivalent. Invariance includes crossing-order sign changes and all oriented R1/R2/R3 variants; coefficients, reducedness and grading shifts are as defined, with no cobordism strict-sign claim.',
'thm-valid-code-reconstructs-the-declared-link-diagram':'A valid oriented spherical rotation-system code with overpass data and distinguished outer face reconstructs the declared plane diagram up to orientation-preserving planar isotopy and relabeling. Without an outer face the natural equivalence is spherical, not automatically planar.',
'alg-haken-jaco-tollefson-unknot-recognition':'Input a finite n-crossing planar link code and mode Haken or JT. Reject invalid code; return not-a-knot for multiple components. Build a good marked exterior triangulation with t=O(n+1). Haken: enumerate all0≤v_i≤t2^(7t+2), check matching/quadrilateral conditions and fundamentalness by nonzero proper decompositions. JT: enumerate independent active-constraint sets and their primitive extreme-ray integer vectors; check admissibility. For each connected candidate require boundary nonempty,χ=1 and odd mod2 intersection against the marked original meridian. Return unknot and the vector on success; after complete finite exhaustion return not-unknot. Haken/JT essential-disk existence and bit bounds are separate theorems.',
'alg-grid-knot-floer-complex':'Input an n×n toroidal grid with disjoint X/O markings, exactly one each per row/column, and knot component count1; otherwise return a named invalid/link-input branch. Select mode tilde, associated-graded-minus or full-filtered-minus. Enumerate permutation states and embedded empty-of-state rectangles. Tilde excludes X andO; associated-graded-minus excludesX and weightsO byU_i; full-filtered-minus allowsX, weightsO and records the Alexander filtration drop. Output exactF2 orF2[U_i] differential matrices and Maslov/Alexander data, together with the statedV/free stabilization factors. Do not identify these three versions.',
'alg-ribbon-evaluation-from-colored-braid-word':'Input a signed colored braid word preserving colors on closure components and explicit finite matrices for braidings/inverses, duality and twist over an effective coefficient field. Verify the finitely supplied matrix identities or require an already proved category realization. Multiply in the stated stacking order and close by evaluation/coevaluation to obtainEnd(1), a field scalar only ifEnd(1)=k. Reject color/typing inconsistencies. Abstract arbitrary categories are theorem data, not effective algorithm inputs.',
'alg-colored-jones-from-ribbon-evaluation':'InputN≥1, a signed braid word for a knot and generic effectiveU_q(sl2)N-color matrices. Compute the framed ribbon evaluation, apply the exact twist scalar, reduce by the generic unknot quantum dimension and prove Laurent polynomiality before any specialization. Return the reduced generic Laurent polynomialJ_N(unknot;q)=1. A later root-evaluation routine substitutes into this polynomial; it never performs a root-level0/0 dimension quotient.',
'def-top-alexander-grading-of-knot-floer-homology':'For a null-homologous K in closed oriented connectedY and a chosen Seifert class[F], the relativeSpin^c/c1 convention defines the integral Alexander grading indexed by[F]. Genus detection in this plan is separately stated forS3; Ni retains[Y,K,F] and irreducible-exterior hypotheses.',
}.items():items[ident]['statement']=statement

# Each B item consumes only sound A definitions/results; no status/open node is a supplier.
for it in items.values():
 if it.get('logical_leaf'):
  qid=it['pair'];it['deps']=[x['id'] for x in items.values() if x['pair']==qid and not x.get('logical_leaf') and x['kind'] not in ('open-problem','remark')]
  if qid=='KT-51':it['deps']=['def-kauffman-bracket-smoothing-and-loop-value','def-singular-knot-and-vassiliev-derivative']

# Definition modules never consume themselves through all-defs expansion; remove only actual cycles after detection, not arbitrary graph edges.
def topo(nodes,edges):
 indeg={n:0 for n in nodes};rev=collections.defaultdict(list)
 for n in nodes:
  for d in edges(n):
   if d in indeg:indeg[n]+=1;rev[d].append(n)
 h=[n for n,v in indeg.items() if not v];heapq.heapify(h);out=[]
 while h:
  n=heapq.heappop(h);out.append(n)
  for v in rev[n]:
   indeg[v]-=1
   if indeg[v]==0:heapq.heappush(h,v)
 if len(out)!=len(nodes):raise ValueError('cycles '+str([n for n,v in indeg.items() if v][:35]))
 return out

allids=set(items)
missing={d for it in items.values() for d in it['deps'] if d not in allids and not(ROOT/'items'/f'{d}.md').exists()}
assert not missing,missing
order=topo(items,lambda i:items[i]['deps'])
for ident in order:
 it=items[ident];choice=None
 for d in it['deps']:
  if d in items:c=items[d].get('choice_assumption')
  else:
   raw=(ROOT/'items'/f'{d}.md').read_text();m=re.search(r'^## (?:Statement|Definition)\s*\n(.*?)(?=^## |\Z)',raw,re.M|re.S);v=m[1] if m else ''
   c='AC' if 'Axiom of Choice' in v or 'Assume AC' in v else ('AC_omega' if 'AC}_\\omega' in v or 'countable choice' in v or 'AC}_\omega' in v or 'AC}_' in v else None)
  if c not in ('AC','AC_omega'):c=None
  if c=='AC':choice='AC'
  elif c and choice is None:choice=c
 if choice:
  it['choice_assumption']=choice;it['deps'].append('def-axiom-of-choice' if choice=='AC' else 'def-countable-choice')
 else:it['choice_assumption']='none-required-by-selected-interfaces'
for i in order:
 items[i]['dependency_level']=max((items[d]['dependency_level']+1 for d in items[i]['deps'] if d in items),default=0)
for it in items.values():
 for d in it['deps']:
  assert items.get(d,{}).get('kind') not in ('open-problem','remark'),(it['id'],d)
  assert not items.get(d,{}).get('logical_leaf'),(it['id'],d)

qedges={q:set() for q in pair_by_id}
for it in items.values():
 for d in it['deps']:
  if d in items and items[d]['pair']!=it['pair']:qedges[it['pair']].add(items[d]['pair'])
qorder=topo(pair_by_id,lambda q:qedges[q])

# Attach separate per-item raw hashes, actual paths/status and exact current statement interfaces.
retired_missing_existing_ids=sorted({i for r in old['existing_supplier_records'] for i in r['item_ids'] if not(ROOT/'items'/f'{i}.md').exists()})
existing_ids=sorted({d for it in items.values() for d in it['deps'] if d not in items}|{i for r in old['existing_supplier_records'] for i in r['item_ids'] if(ROOT/'items'/f'{i}.md').exists()})
supplier_records=[]
for ident in existing_ids:
 p=ROOT/'items'/f'{ident}.md';raw=p.read_text();fm=raw.split('---',2)[1]
 status=re.search(r'^status:\s*(\w+)',fm,re.M)[1]
 match=re.search(r'^## (?:Statement|Definition)\s*\n(.*?)(?=^## |\Z)',raw,re.M|re.S)
 interface=re.sub(r'\s+',' ',match[1]).strip() if match else '(No standard statement heading; inspect actual carrier.)'
 supplier_records.append({'id':ident,'path':str(p.relative_to(ROOT)),'status':status,'raw_sha256':sha(p),'interface':interface,'use':'excluded-unproved-or-draft-context' if status!='published' or ident in ['lem-the-deficiency-one-fox-calculus-determinant-rule','thm-the-burau-determinant-formula-for-a-closed-braid-and-its-axis','prop-burau-determinant-recovers-the-alexander-polynomial-of-a-closed-braid'] else 'exact-stated-interface-only','review_scope':'Current carrier bytes and statement/definition interface bound; dossier direct-body reviews and specifically listed auditor body readings are the substantive evidence. No recursive whole-library proof audit claimed.'})
 for r in supplier_records[-1:]:
  if ident=='def-alexander-polynomial-from-the-first-elementary-ideal':r['allowed_interface']='gcd of E0 and knot fraction D=Δ/(1−t) only; quoted square Seifert presentation and Δ(1)=±1 are excluded and rederived in the local modules.'
  if ident=='def-temperley-lieb-quotient-and-jones-specialization':r['allowed_interface']='Hecke quotient/generator and coefficient specialization/Markov normalization only; TL trace descent and quoted Jones identification are not treated as locally proved.'
  if ident=='thm-the-homflypt-skein-relation':r['allowed_interface']='The actual theorem covers braided skein triples; arbitrary diagram skein identification needs the local braid/diagram bridge, not a broader unstated source contract.'

parts=[];page_rows=[];pairs=[];base=old['order_base_snapshot'].get('next_order',3108)
if not isinstance(base,int):base=3108
# DAG-depth pathway parts ensure every actual prerequisite appears no later.
depth={}
for qid in qorder:depth[qid]=max((depth[d]+1 for d in qedges[qid]),default=0)
for dep in sorted(set(depth.values())):
 qs=[q for q in qorder if depth[q]==dep]
 parts.append({'part':dep+1,'title':f'Dependency layer {dep+1}','pairs':qs,'pages':[pair_by_id[q]['a_page'] for q in qs],'brief':'Read these independent A-page interfaces after all preceding prerequisite layers; companion examples remain optional nonlogical leaves. Deep source-recovery and local-proof obligations remain explicit in each contract.'})
for idx,qid in enumerate(qorder):
 q=dict(pair_by_id[qid]);q['prose']=sections[qid]['prose'];q['a_title']=sections[qid]['title'];q['a_heading']=q['a_title'];q['requires']=[pair_by_id[d]['a_page'] for d in qorder if d in qedges[qid]]
 q['a_items']=[i for i in order if items[i]['pair']==qid and not items[i].get('logical_leaf')]
 q['b_items']=[i for i in order if items[i]['pair']==qid and items[i].get('logical_leaf')]
 q['module_items']=[i for i in q['a_items'] if i in module_ids]
 q['part']=depth[qid]+1;q['prose_sha256']=hashlib.sha256(q['prose'].encode()).hexdigest()
 pairs.append(q)
 for off,kind in enumerate(('A','B')):
  p=q['a_page'] if kind=='A' else q['b_page'];row={'id':p,'title':q['a_title'] if kind=='A' else q['b_title'],'kind':kind,'category':'knot-theory','label':qid+'-'+kind,'companion':q['b_page'] if kind=='A' else q['a_page'],'description':'Complete mathematical contracts and local proof obligations: '+q['a_title'] if kind=='A' else 'Concrete computed examples/counterexamples; no logical consumers.','scaffold':'research/plan-knot-theory-track.md','requires':q['requires'] if kind=='A' else[q['a_page']],'items':q['a_items'] if kind=='A' else q['b_items'],'order':base+2*idx+off,'order_is_provisional':True}
  page_rows.append(row)

# Put prose sections in actual item-induced topological pair order; preserve front matter.
intro=s[:heads[0].start()]
intro=intro.replace('Pair order is topological','Pair order is topological by actual dependency edges (pair identifiers remain stable, so numerical labels need not be consecutive in reading order)')
s=intro+'\n'.join(sections[q]['prose'].strip() for q in qorder)+'\n'
s+='\n## Design registry and proof-source limits\n\nThe complete per-item mathematical contracts, proof routes, canonical kinds, dependencies, ownership and source boundaries are projected into `proposed-registration-delta.json` and `prerequisite-map.md`. Consolidated aliases in the audit record are retired candidate names, not extra duplicated theorems. The six reader dossiers document exactly what was read. New Milnor/bridge, Kirby/Cerf, hyperbolization/rigidity, full analytic gauge/Floer, KZ-convergence and flyping foundations still require the identified complete source recovery and future local proofs. Some exact advanced source interfaces remain explicitly blocked below; this research design is not a proof-closed content frontier and does not certify them as established local suppliers. No active publication/gate acceptance is claimed.\n'
PLAN.write_text(s)

# Registry/prose module projection with every item, not placeholder names.
pr=['# Knot Theory prerequisite and ownership map','', 'Research design only. Every definition/procedure/result has one owner below. The item graph is the logical design, not proof acceptance; source-recovery limitations remain explicit. Existing item interfaces are separate exact current-carrier bindings in the JSON. No B/remark/op item supplies a proof.','', '## Pair order','', '| Pair | Owner A page | Direct earlier A prerequisites |','|---|---|---|']
for q in pairs:pr.append('| '+q['id']+' | `'+q['a_page']+'` | '+(', '.join('`'+x+'`' for x in q['requires']) or '—')+' |')
pr+=['','## Item contracts in topological order','']
for ident in order:
 it=items[ident];pr+=['### `'+ident+'`','', '**Kind:** '+it['kind']+'. **Owner:** `'+it['home_page']+'` ('+it['pair']+').','',it['statement'],'','**Direct prerequisites:** '+(', '.join('`'+d+'`' for d in it['deps']) or 'none')+'.','','**Proof/definition route:** '+it['proof_design'],'','**Source boundary:** '+'; '.join(it['source_refs'])+'. Future content authoring must supply local proofs; no citation-only fallback.','']
(BASE/'prerequisite-map.md').write_text('\n'.join(pr))
cat=['# Knot Theory category and pathway design','','Category `knot-theory`, title **Knot Theory**, '+str(len(pairs))+' A/B pairs / '+str(len(page_rows))+' candidate pages. Orders are provisional rebasing inputs; no registry is changed.','','## Category overview','','Knot Theory studies oriented classical knots and links in the standard three-sphere through diagrams, peripheral topology, surfaces and algebraic invariants. This category reuses the existing smooth link/Reidemeister/braid/Hecke/ribbon interfaces, adds precise classical and computational constructions, and separates an algorithm from the theorem that makes its output invariant. Its pathways lead from Wirtinger groups and Seifert matrices through link nilpotent invariants, geometry of exteriors, concordance and four-dimensional obstructions, skein/quantum/finite-type invariants and categorification. Smooth, PL and locally-flat categories have distinct definitions. Framed, unframed and decorated-cobordism theories retain their own conventions. Deep established theorems with missing local proofs remain explicit future authoring and source-recovery obligations. Dated open questions and the separate Jones claimed-solution status record are terminal nonlogical context. Each A page has a companion of concrete calculations and boundary examples; no companion item is a logical supplier. This is a research scaffold, not a proof-complete or publication-ready library frontier.','','## Pathway data','','Only A pages occur in pathway parts; each is listed exactly once. Part numbers are actual item-induced DAG layers, so all prerequisite pages lie in earlier parts.','']
for part in parts:cat+=['## '+str(part['part']),'',part['title']+'. '+part['brief'],'']+['- `'+p+'`' for p in part['pages']]+['']
(BASE/'category-and-pathway.md').write_text('\n'.join(cat))

coverage=['# Knot Theory coverage and sources','','All six immutable final source dossiers are preserved. Their full-text readings belong to the named readers, not to this auditor. Root source-artifact verification binds downloads/page counts, not mathematical correctness. Auditor selected-passage/body scope is recorded in audit/preparation.md and repair-report.md.','','## Source dossier bindings','', '| File | Current raw SHA-256 |','|---|---|']
source_dossiers=[]
for n in range(1,7):
 for ext in ('md','json'):
  p=BASE/'sources'/f'reader-{n}.{ext}';entry={'path':str(p.relative_to(ROOT)),'raw_sha256':sha(p)};source_dossiers.append(entry);coverage.append('| `'+entry['path']+'` | `'+entry['raw_sha256']+'` |')
coverage+=['','## Current suppliers and exclusions','','Each record below binds the actual item carrier, not only a containing page. Published status does not certify quoted literature premises; excluded/context records are not current proof suppliers.','']
for r in supplier_records:coverage+=['### `'+r['id']+'`','',r['path']+'; status '+r['status']+'; raw SHA-256 `'+r['raw_sha256']+'`. Use: '+r['use']+'.','',r['interface'],'']
coverage+=['## Future full-source and proof obligations','','The selected reader sources do not fully close Schubert bridge/decomposition uniqueness; Milnor/Stallings; Kirby/Cerf; Property P and the precise complement theorem; complete Haken/Jaco–Tollefson normal-disk existence; Mostow/Prasad and hyperbolization; Culler–Shalen and the instanton surgery imports behind Baldwin–Sivek; Freedman standardness/disk embedding; Donaldson analytic imports; Casson–Gordon bordism/character theory; Cha amenable-signature foundations; root-skein anomaly/gluing foundations; Kontsevich analytic estimates; MOST grid invariance; Zemke decorated functoriality; KHI rank detection; d-invariant absolute-grading/cobordism theory; and Menasco–Thistlethwaite flyping. These are established-theorem authoring/source-recovery obligations, not open mathematical problems. The detailed contract ledger preserves each branch and its proof architecture; it does not claim those proofs have been supplied.','','Jones detection is retained as a terminal remark with the precise historical implication and Carmi–Cohen2026v1 claim/status limits; neither validity nor a global refutation is certified. Other open-problem status records explicitly identify dated versus current-source limitations. No unread search lead is theorem evidence.','','## Coverage by pair','']
coverage+=['','## Explicit source-note errata','','Reader4 mapped Question1.6 to the two-boundary-slope folklore conjecture. Direct inspection of Baldwin–Sivek, arXiv:2405.19197v2(accepted2025-11-28), PDFp3, shows Question1.6 instead asks whether the ordinary-A Newton polygon is a parallelogram iff K is a nontrivial torus knot. The two-boundary-slope conjecture follows in the next paragraph as a distinct folklore question. Question1.8 and its concrete irreducible-exterior/Seifert-disk≤2-fibers formulation are also onPDFp3. The corrected mapping here takes precedence; immutable reader dossiers remain historical evidence of what those readers wrote, not silently corrected proof suppliers.','','Kauffman1990 Definition2.4, PDFp7/printed422, hasF=a^(−w)L. The original reader3 corrected its earlier positive exponent with a dated erratum before author freeze. The Lickorish conversion onPDFp51/printed466 has the leading minus: D=−i^(−w)(−1)^cL(ia,−iz), independently visually checked. Zemke v3 remains downloaded-but-unread in reader6, despite the frozen author prose calling it full-read. These corrections change no source bytes/read extents.','']
for q in pairs:coverage+=['- '+q['id']+' '+q['a_title']+': '+', '.join(q['source_refs'])+'.']
(BASE/'coverage-and-sources.md').write_text('\n'.join(coverage)+'\n')

delta={k:v for k,v in old.items() if k not in ['proposed_items','pairs','page_rows','open_problems','existing_supplier_records','validation']}
delta['schema']='knot-theory-proposed-registration-delta/v2';delta['status']='Independently repaired research design; unbuilt, not proof-closed, not a registry splice or publication acceptance.'
delta['category_registration'].update({'page_count':len(page_rows),'pair_count':len(pairs),'pathway_parts':parts})
clean_group_records=[]
for r in old['existing_supplier_records']:
 r=dict(r);r['item_ids']=[i for i in r['item_ids'] if i not in retired_missing_existing_ids]
 p=ROOT/r['path']
 if p.exists():r['sha256']=sha(p)
 if r['item_ids']:clean_group_records.append(r)
delta.update({'source_scaffold_sha256':sha(PLAN),'category_pathway_sha256':sha(BASE/'category-and-pathway.md'),'prerequisite_map_sha256':sha(BASE/'prerequisite-map.md'),'coverage_and_sources':'research/knot-theory-planning-2026-10-18/coverage-and-sources.md','coverage_and_sources_sha256':sha(BASE/'coverage-and-sources.md'),'pairs':pairs,'page_rows':page_rows,'proposed_items':[items[i] for i in order],'existing_supplier_records':old['existing_supplier_records'],'existing_item_supplier_records':supplier_records,'source_dossiers':source_dossiers,'open_problems':[{'id':i['id'],'kind':i['kind'],'owner_page':i['home_page'],'pair':i['pair'],'deps':i['deps'],'terminal':True,'logical_consumers':[],'status_review':i['status_review']} for i in items.values() if i['kind']=='open-problem'],'nonlogical_status_records':[ident for ident,it in items.items() if it['kind']=='remark'],'proof_module_count':len([i for i in items if i in module_ids]),'consolidated_candidate_ids':MERGE,'design_limitations':['This is not an accepted proof-closed content frontier. Exact source recovery and complete local proofs remain mandatory for the deep modules identified in the coverage and contract ledgers.','Some advanced source-exact statements, particularly general-ambient Baldwin–Sivek Q1.8 and complete amenable-signature foundations, remain expressly source-bound/blocked before future active item acceptance.'],'validation':{'method':'Scoped structural audit only; no native gate, test battery or mathematical proof acceptance','item_count':len(items),'pair_count':len(pairs),'page_count':len(page_rows),'item_dag_acyclic':True,'pair_dag_acyclic':True,'canonical_kinds':True,'source_dossiers_unchanged_checked_at_final_validation':False}})
delta['existing_supplier_records']=clean_group_records
delta['retired_missing_context_ids']=retired_missing_existing_ids
delta['design_limitations'][1]='Full-source recovery and local proofs remain required for the listed analytic/topological foundations; source-exact Baldwin–Sivek and amenable-signature theorem formulations have been directly corrected where specified.'
freeze=json.loads((BASE/'author-snapshot.json').read_text())
assert all(sha(ROOT/p)==h for p,h in freeze['reader_dossiers_frozen'].items())
delta['validation']['source_dossiers_unchanged_checked_at_final_validation']=True
(BASE/'proposed-registration-delta.json').write_text(json.dumps(delta,ensure_ascii=False,indent=2)+'\n')
print(json.dumps({'pairs':len(pairs),'pages':len(page_rows),'items':len(items),'modules':delta['proof_module_count'],'open':len(delta['open_problems']),'parts':len(parts)},indent=2))
