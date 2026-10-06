# F41 batch 24: DT-32 prerequisite and source audit

Read-only audit, 2026-10-05. The assigned write scope is this research memo only. No pages, coverage, dependency ledgers, receipts, gates, or controller state were changed. CLAUDE.md and README.md were read first. Batch 24 currently has two empty item inventories; this is an audit of the planned interfaces, not certification of proofs which have not yet been written.

## Outcome

Every predecessor named by the current batch-24 A-page `requires` is available in the published library or this run. The finite Milnor construction and modulo-seven detection can be built from these suppliers with explicit local bridge lemmas. Supplier availability does **not** close the missing clutching normalization, relative form/evaluation, gluing comparison, or group-definition justification. The full order-28 calculation and the general stable-parallelizability theorem still use external mathematical inputs absent from this run; the plan expressly retains these as non-load-bearing `not-supplied` statements. The added AT/MO detection pair does not supply Bott periodicity, stable sphere stems, the image of J, or the Kervaire–Milnor arithmetic.

The targeted homology-seven-sphere claims are sound after these bridges are proved. A plan-level generalization of the invariant needs correction: use **integral cohomology** vanishing `H^3(M;Z)=H^4(M;Z)=0`, as Milnor does, to get a unique integral relative lift. Merely writing `H_3(M;Z)=H_4(M;Z)=0` does not suffice: torsion in `H_2` can contribute `Ext(H_2,Z)` to `H^3`. For an integral homology seven-sphere both cohomology groups vanish, so the intended exotic-sphere examples are unaffected.

## Sources actually checked

1. John Milnor, *On Manifolds Homeomorphic to the 7-Sphere*, Annals 64 (1956), pp.399–405, full paper: <https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf>. Downloaded the eight-page scan; it has no usable text layer. Visually inspected all seven mathematical pages, pp.399–405. The cover adds one PDF page. Exact locators below use printed pages.
2. J. Francis, notes by Y. Shen, Northwestern Math 465 Lecture 18, *Milnor's Construction of Exotic 7-Spheres, Second Part*, all three pages: <https://sites.math.northwestern.edu/jnf960/classes/mflds/18exotic7spheres2.pdf>. Downloaded and read the full extracted text. Its indexed convention differs from Milnor's. Several shortcuts/errors are recorded below rather than adopted.
3. Kervaire–Milnor, *Groups of Homotopy Spheres: I*, Annals 77 (1963), pp.504–537, complete 34-page scan: <https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf>. The plan's Rochester URL timed out on two attempts, so this full primary-source mirror was fetched. Visually inspected pp.504–515, covering §§1–4 and the beginning of §5. Later §§7–8 were **not** read in this audit, and their complete proof is not certified here. In particular p.512 is checked as a statement/table locator, not a local derivation of the order 28.
4. Milnor, *Lectures on the h-Cobordism Theorem*, complete 121-page scan: <https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf>. Downloaded; checked the OCR text of §9 Proposition B and its corollary, printed pp.109–110, including the two-disk/twisted-sphere/Alexander argument. The current batch-15 supplier statement was separately read.

Lück and the other plan sources were not fetched or read during this audit. They are not claimed as independent evidence here. Temporary downloads/renderings are under `/tmp/f41-dt32-*`; they are not controller artifacts.

## Current supplier availability

| Required A page | Availability checked on disk | Relevant interface |
| --- | --- | --- |
| `intersection-pairings-self-intersection-and-euler-classes` | Same-run batch 2, 17 A items | Zero-section normal bundle and self-intersection equals Euler number, assuming AC; boundaryless ambient can be the disk-bundle interior. The closed-ambient cup-pairing theorem does not directly cover a compact manifold with boundary. |
| `the-hirzebruch-signature-theorem` | Same-run batch 12, 28 A items | Closed oriented eight-manifold formula `45σ=7p₂−p₁²`, assuming AC. Its closed-manifold restriction is essential. |
| `the-smooth-h-cobordism-theorem` | Same-run batch 15, 20 A items | Connected smooth h-cobordism of dimension at least six, simply connected closed boundary manifolds of dimension at least five, assuming ACω; product relative to incoming face. |
| `smooth-cobordism-relations-groups-and-rings` | Published library page | Smooth oriented gluing and cobordism operations. |
| `thom-spaces-normal-data-and-collapse-maps` | Published library page | Thom/normal conventions; no full sphere-stem/J calculation. |
| `fibrations-fiber-bundles-and-homotopy-exact-sequences` | Published library page | Sphere bundle is a fibration and long exact homotopy sequence. |
| `hurewicz-whitehead-freudenthal-and-cw-approximation` | Published library page | Hurewicz, Whitehead, finite-CW homology-equivalence bridge. |
| `topological-vector-bundles-and-grassmannian-classification` | Published library page | Clutching construction/classification. Upper-to-lower transition convention is explicit. |
| `leray-hirsch-thom-isomorphism-and-gysin-sequences` | Published library page | Integral Thom/Euler/Gysin interfaces; AC is inherited. |
| `stiefel-whitney-and-euler-classes-by-universal-constructions` | Published library page | Euler class orientation sign, naturality, Whitney law. |
| `chern-and-pontryagin-classes-by-splitting-and-complexification` | Published library page | `p_i(E)=(-1)^i c_{2i}(E_C)`, complex conjugation, top Chern equals complex-oriented Euler; AC is inherited. |

A read-only scan of direct item `deps` in batches 2,12,15,30 found no unresolved IDs relative to `items/` plus all current F41 manifests. This is an availability scan, not a proof/status/gate check. Batch-24 B's prerequisite is its own currently empty A manifest. Published pages and same-run pages have distinct readiness; their existence alone does not certify their proofs.

## Per-claim proof interfaces

| Planned claim(s) | Existing supplier coverage | Required local proof or precise limitation |
| --- | --- | --- |
| A1–2, exotic structure and homotopy sphere definitions | Published smooth/topological manifold and homotopy definitions; Milnor p.399 and KM p.504 | State connectedness, closedness and orientation where used. “Homeomorphic” and “diffeomorphic” are different predicates. No assertion that every homotopy sphere is automatically topologically standard in all dimensions. |
| A3, connected sum stays a homotopy sphere | Published van Kampen, MV, Hurewicz/Whitehead; KM pp.505–506 | Prove punctured sphere homology, simple connectivity and degree-one collapse/homology equivalence; supply finite CW models. |
| A4–5, Θ group and h-cobordism/diffeomorphism identification for n≥5 | Batch 15 smooth h-cobordism; KM Theorem 1.1 pp.504,507, Lemmas 2.1–2.4 pp.505–507 | A definition cannot silently prove group axioms. Provide separate connected-sum well-definedness/associativity/commutativity/identity and inverse h-cobordism lemmas. KM Lemma 2.1 imports Cerf/Palais disk-embedding facts and leaves the identity proof to the reader; reconstruct these from local disk charts, isotopy extension and collars. Inverse uses the contractible-bound construction of Lemma 2.4, not an assertion that the complement of a disk in every manifold is contractible. The h-cobordism here has dimension n+1≥6. |
| A6, bP subgroup | Published cobordism/framing definitions; KM §4 p.510 and §2 boundary connected sum pp.507–508 | Prove independence of representative and subgroup closure: extend framings across a boundary connected-sum handle; reverse orientation for inverse. Define parallelizable versus stably parallelizable distinctly. |
| A7, all homotopy spheres are stably parallelizable | KM Theorem 3.1 pp.508–509 | Full proof uses Bott's stable π(SO), Pontryagin obstruction comparison, Adams injectivity of J in residue classes 1,2 mod8. Not supplied by current AT detector. Retain non-load-bearing `not-supplied`; never use it to prove the concrete Milnor construction or group closure. |
| A8–10, quaternion clutching, class formulas, sphere/disk bundle definitions | Published clutching/Euler/Chern/Pontryagin items; Milnor §3 pp.402–403 | Specify `g_hj(u)v=u^h v u^j`, upper-to-lower transition, fiber orientation `(1,i,j,k)`, oriented base generator, and disk/sphere metric. Prove smooth cocycle gluing and norm preservation; negative powers are smooth on unit quaternions. Prove exact `e=(h+j)u`, `p₁=2(h−j)u` under a single reconciled convention. Neither source's `±` is a proof of a fixed sign. See calibration below. |
| A11–13, Euler ±1 implies homology/simply-connected/homotopy seven-sphere | Published Gysin, fibration LES, Hurewicz/Whitehead | Gysin computes cohomology; use UCT/duality or homology Gysin to conclude integral homology, including torsion. `S³,S⁴` simply connected implies total space simply connected. Hurewicz gives generator map `S⁷→M`, then finite-CW homology Whitehead. All hypotheses can be locally checked. |
| A14–16, two-disk complement and homeomorphism to S⁷ | Batch 15 plus published excision/van Kampen/finite-CW homology Whitehead; Milnor h-cobordism §9 Prop B pp.109–110 | Removing two disks gives two standard S^(d−1) boundary components. Show each boundary inclusion is an integral homology isomorphism using relative sequences/excision; prove complement simply connected by van Kampen; upgrade to homotopy equivalences using finite CW models. The h-cobordism dimension is d, so this route requires d≥6, not merely d≥5. Prove Alexander extension `rx↦r f(x)` including continuity at 0 and explicit inverse. It is a homeomorphism and need not be smooth at 0. |
| A17, disk-bundle middle form/signature | Batch 2 self-intersection and published PL/Thom duality | Locally define the boundary middle form via relative classes/image quotient; do not apply batch12's closed definition directly. For Euler ε=±1, zero section generates H₄ and has square ε, so σ=ε. If retaining all h,j, when e=0 the form is degenerate and its quotient has signature 0; distinguish this from the nondegenerate ε=±1 case. |
| A18, relative Pontryagin evaluation | Published Pontryagin naturality/stability, relative cup/evaluation, PL/Thom; Milnor p.403 | Prove total-space tangent splitting `TW≅π*(TS⁴⊕ξ)` from vertical exact sequence plus a local splitting/connection, and `TS⁴⊕1≅5`. Thus p₁(W)=2(h−j)x. Under ε=±1, write Thom generator U with j(U)=εx and `<U·x,[W,M]>=1`; then unique lift is `2(h−j)εU` and q=ε·4(h−j)². Prove that orientation normalization, not a bare “relative evaluation” assertion. For general e≠±1, integral lifts need not exist; rational q is a different claim. |
| A19, Milnor λ well-defined modulo 7 | Batch12 closed formula; published integral relative cup, MV and fundamental-class gluing; Milnor Thm1 and Lemma1 pp.399–401 | Use integral cohomology vanishing, supplied oriented W, q from unique relative lift, and λ=2q−σ mod7. Provide gluing lemma showing both signature and relative Pontryagin square evaluate as differences on closed `N=W∪_M(−W')`. Do not use the closed signature theorem on W. Detailed arithmetic below. |
| A20/B1–5, concrete exotic examples and arithmetic | Previous local claims; Milnor Thm3 p.403 | Hopf reference `(1,0)` has e=1, k=1, λ=0; give explicit bundle map to S⁷, rather than merely naming Hopf. `(2,−1)` has e=1, k=3, λ=1 mod7, hence is not diffeomorphic to standard sphere, even allowing orientation reversal since 0 remains 0. Two examples e.g. k=1 and k=3 are distinguished. This invariant does not classify Θ₇. |
| A21–22, Θ₇ cyclic order28 and bP₈=Θ₇ | KM p.504 introduction and p.512 two tables plus surrounding cyclicity statement | Exact sourced statement confirmed. p.512 gives quotient Θ₇/bP₈=0 and cyclic bP₈ of order28. These tables import stable stem/image-J calculations and later §§7–8 arithmetic. No local full proof currently exists. Non-load-bearing `not-supplied`, with precise proof boundary. Do not infer every exotic seven-sphere is one quaternionic sphere bundle merely from bP₈=Θ₇. |
| A23, four-dimensional boundary remark | Batch15 dimension contract | Explain that d=4 two-disk complement has dimension4 and boundary dimension3, outside this h-cobordism theorem. No smooth Poincaré-4 conclusion follows. |

## Exact clutching calibration from existing characteristic suppliers

Milnor p.402 defines the `(h,j)` family and gives `p₁=±2(h−j)ι` and `e=(h+j)ι`; p.403 calibrates the absolute constant by the cited statement that the Hopf disk bundle is HP² minus a disk and `p₁(HP²)=±2` times a generator. That HP² characteristic calculation is **not proved in the paper**. Northwestern p.3 likewise invokes a projective-space formula without proof; moreover its displayed denominator `1+3x` is incompatible with the claimed linear coefficient 2 (the standard denominator is `1+4x`). Neither is a sufficient local normalization proof.

A shorter repair avoids HP² entirely and uses inspected published items:

- `def-clutching-construction-for-bundles-over-a-suspension` fixes `(a,v)_+~(a,g(a)v)_−`; `thm-oriented-clutching-classifies-oriented-bundles-over-spheres` supplies oriented gluing/classification, but not the numerical Euler calibration.
- `thm-top-chern-class-equals-euler-class-of-the-underlying-real-bundle` supplies `c₂(V)=e(V_R)` in the **complex** orientation; `lem-complex-orientation-of-underlying-real-bundles` fixes it.
- `prop-complexification-is-conjugation-invariant` supplies `c_i(bar V)=(-1)^i c_i(V)`; `thm-naturality-normalization-and-whitney-sum-for-chern-classes` supplies multiplication; `def-pontryagin-classes-by-complexification` fixes `p₁=−c₂` of the complexification.

For left multiplication by u, right multiplication by i is a commuting complex structure. Its complex-oriented real basis is `(1,i,j,−k)`, opposite to the chosen standard quaternion orientation. For right multiplication by u, left multiplication by i is the commuting structure and its basis is `(1,i,j,k)`, agreeing with the standard orientation. Supply the elementary bundle isomorphism `(V_R)_C≅V⊕bar V` by the ±i eigenspace projections of the complexified complex structure. Since H²(S⁴)=0, Whitney/conjugation give `p₁(V_R)=−2c₂(V)`. Consequently the two basic clutchings have `p₁=+2e` and `p₁=−2e`, respectively, in the standard quaternion fiber orientation.

Still required: a local Euler/clutching-degree lemma (construct a constant nonzero section on one hemisphere and compute the equatorial obstruction/zero degree on the other) calibrating each basic e to the same base generator u, and a local characteristic-evaluation additivity lemma under the S⁴ pinch/group sum of clutching maps. Pointwise multiplication in SO(4) gives the homotopy group sum; naturality and the two hemispherical summands give additive evaluation of degree-four characteristic classes. These yield exactly e=(h+j)u and p₁=2(h−j)u. Do not claim these new lemmas are already proved merely because this route is explicit.

Northwestern uses spin indices `(i,j)` with Euler `i−j` and p₁ `±2(i+j)`; translate by `(i,j)=(h,−j_Milnor)`. Mixing its i−j condition with Milnor's h+j condition changes the examples and signs.

## Relative square and gluing arithmetic

For closed oriented M⁷ with `H³(M;Z)=H⁴(M;Z)=0` and supplied compact oriented W⁸ with boundary M, the pair sequence gives an isomorphism `j:H⁴(W,M;Z)→H⁴(W;Z)`. Define `bar p₁=j⁻¹p₁(TW)` and

`q(W)=<bar p₁ cup bar p₁,[W,M]>`.

Both-relative factors are allowed by `def-relative-cup-product` with A=B=M (each is open in its union M). Prove this equals the mixed product evaluation `<bar p₁ cup p₁,[W,M]>`, using the pair maps and the cochain construction; this is the convenient Thom evaluation. This square is not an absolute degree-eight evaluation on a manifold with boundary.

For an orientation-preserving boundary diffeomorphism, collared gluing gives closed oriented N=W∪(−W'). MV and the vanishing middle boundary cohomology give `H⁴(N;Z)≅H⁴(W;Z)⊕H⁴(W';Z)`. A local relative cochain/excision/fundamental-class argument must show the quadratic form is the orthogonal difference and `p₁²[N]=q(W)−q(W')`. Thus `σ(N)=σ(W)−σ(W')`. Tangent bundles restrict canonically across collars. **p₁ itself does not change sign under orientation reversal**; the relative fundamental class and all evaluations do. Northwestern p.2 writes `p₁(−B')=−p₁(B')`, an incorrect shorthand; Milnor's diagram and evaluation proof on pp.400–401 is the reliable route.

Batch12's exact closed formula gives `45σ(N)=7p₂[N]−p₁²[N]`. Modulo7, `45≡3`, hence `q(N)≡−3σ(N)≡4σ(N)` and `2q(N)−σ(N)≡0`. Therefore

`λ(M):=2q(W)−σ(W) mod7`

is independent of the supplied bound; orientation reversal negates λ. For the ε=+1 Milnor bundle, `q=4k²`, `σ=1`, hence λ=`8k²−1≡k²−1`. For ε=−1, `q=−4k²`, `σ=−1`, hence λ=`−k²+1`, consistent with reversing boundary orientation. The standard disk has H⁴=0, q=σ=0. No spin or Eells–Kuiper modulus28 normalization is being substituted.

If the general invariant definition promises every such M bounds, that needs a separately proved oriented-bordism existence statement. Milnor p.399 cites Thom for this and Northwestern Proposition2.1 has an empty proof of Ω₇^SO=0. The concrete bundle case has the explicit bound D(ξ), so no universal bounding theorem is needed for these examples. State the invariant conditional on a supplied bound unless the broader existence theorem is genuinely available locally.

## Build disposition

Preserve the approved full finite construction and modulo-seven detector. Add the local lemmas above before their consumers and explicitly inherit AC where the published characteristic/duality suppliers require it; batch15's ACω is weaker and is already implied by AC. Correct the invariant's general cohomology contract and keep all sphere examples. Preserve the two deep classification context claims as sourced `not-supplied` leaves under the plan's explicit discipline. There is no unavailable page prerequisite for the constructive spine, but its local bridge proofs remain authoring obligations, and no readiness/gate acceptance is asserted here.
