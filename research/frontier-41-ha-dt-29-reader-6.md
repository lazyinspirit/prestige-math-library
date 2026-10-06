# Reader 6 — batch 6, frontier-41-ha-dt-29

The review opened both assigned pages and all 28 current item bodies. Sixteen items received local mathematical repairs. Seven core proof obligations remain open; the page cannot be treated as established. Claims proposed for further repair or, if they cannot be supplied, withdrawal remain present for the Step 5b lead. No publication, judgment, acceptance stamp, plan edit, other-batch edit, or B-page prose edit was performed.

## Pages and current-item inventory

- `library/differential-topology/morse-homology-continuation-and-comparison.md` — **HOLD**. Continuation compactness/gluing, coherent orientations, parameterized gluing, relative unstable cells and comparison compatibility remain unproved.

- `library/differential-topology/morse-homology-continuation-and-comparison-examples.md` — **HOLD**. The finite circle, single-handle and blow-up computations have been checked/repaired. Their stated continuation/cellular identifications still consume the unresolved A-page machinery. Current B-page prose accurately describes the one-dimensional finite-time blow-up example and was not edited.

| Assigned item | Reader disposition |
| --- | --- |
| `def-morse-homology-of-a-morse-smale-pair` | Local repair described below; no independent acceptance stamp. |
| `def-regular-continuation-datum-between-morse-smale-pairs` | Local repair described below; no independent acceptance stamp. |
| `lem-continuation-solutions-have-critical-limits` | Critical-limit/exponential-decay argument checked against the actual-metric stable-disk proof. |
| `lem-continuation-energy-identity` | Local repair described below; no independent acceptance stamp. |
| `def-broken-continuation-trajectory` | Local repair described below; no independent acceptance stamp. |
| `thm-continuation-trajectories-are-compact-up-to-breaking` | Open proof obligation below; claim retained. |
| `lem-gluing-continuation-solutions-gives-collar-ends` | Open proof obligation below; claim retained. |
| `lem-orientation-lines-orient-continuation-moduli-spaces` | Open proof obligation below; claim retained. |
| `def-continuation-chain-map` | Local repair described below; no independent acceptance stamp. |
| `thm-continuation-count-is-a-chain-map` | The algebraic deduction is conditional on the unresolved cited continuation/CW/orientation machinery. |
| `def-two-parameter-continuation-homotopy` | Local repair described below; no independent acceptance stamp. |
| `thm-homotopic-continuation-data-give-chain-homotopic-maps` | Open proof obligation below; claim retained. |
| `lem-continuation-map-of-constant-data-is-the-identity` | Local repair described below; no independent acceptance stamp. |
| `thm-continuation-composition-law-on-homology` | Open proof obligation below; claim retained. |
| `thm-reverse-continuation-is-an-inverse-on-morse-homology` | The algebraic deduction is conditional on the unresolved cited continuation/CW/orientation machinery. |
| `def-canonical-morse-homology-of-a-closed-manifold` | Local repair described below; no independent acceptance stamp. |
| `lem-compactified-unstable-manifolds-give-a-cw-decomposition` | Open proof obligation below; claim retained. |
| `lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count` | Local repair described below; no independent acceptance stamp. |
| `prop-relative-morse-complex-for-an-adapted-cobordism` | Local repair described below; no independent acceptance stamp. |
| `thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex` | The algebraic deduction is conditional on the unresolved cited continuation/CW/orientation machinery. |
| `thm-morse-homology-is-naturally-isomorphic-to-singular-homology` | Open proof obligation below; claim retained. |
| `cor-morse-homology-recovers-the-morse-inequalities` | Local repair described below; no independent acceptance stamp. |
| `rem-noncompact-morse-homology-needs-properness-completeness-and-compactness-control` | Scope remark checked; no positive noncompact theorem asserted. |
| `ex-continuation-across-a-birth-death-adds-an-acyclic-pair` | Local repair described below; no independent acceptance stamp. |
| `ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology` | Local repair described below; no independent acceptance stamp. |
| `ex-relative-morse-homology-of-a-single-handle-cobordism` | Local repair described below; no independent acceptance stamp. |
| `ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation` | Local repair described below; no independent acceptance stamp. |
| `cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity` | Local repair described below; no independent acceptance stamp. |

## Repairs and their evidence

- **`def-regular-continuation-datum-between-morse-smale-pairs`**: Replaced unspecified weighted spaces by the exact C^1_0/C^0_0 operator setup; derived the index and regularity from finite-time endpoint fibre products and the whole-line operator lemma. Added the smooth-disk bootstrap and a finite-function-perturbation transversality argument. Fixed genericity: metrics alone cannot regularize a constant solution of negative index. On S^1 a scalar interpolation from a function with a minimum at p to one with a maximum at p keeps p critical at every time, leaving such an obstruction for every metric. AC_omega is inherited for smooth bundles; AC is explicit for generic existence.

- **`def-broken-continuation-trajectory`**: Required a regular datum before using m>=0. Allowed a constant middle solution. Geometric convergence now leaves the middle time coordinate fixed, sends autonomous-tail shifts to the appropriate infinities, and records their temporal separation; compact-time/transversal topology replaces the undefined “topology generated by convergences”. Evidence: the actual continuation equation and Ritter Lecture 20; Fowdar p.53 explicitly shifts only the autonomous component.

- **`def-morse-homology-of-a-morse-smale-pair`**: Carried AC in both branches from the moduli finiteness and squaring-to-zero inputs. Removed the false mod-two choice-free assertion while retaining orientation-free mod-two counts and choice-free formation of homology from a supplied finite complex.

- **`def-continuation-chain-map`**: Carried AC for compactness in both branches. Corrected the false unequal-index emptiness claim: only negative difference forces emptiness; positive-dimensional spaces are simply not counted.

- **`def-two-parameter-continuation-homotopy`**: Defined regularity for the actual augmented derivative, not “after a perturbation”. Added one uniform tail cutoff and endpoint regularity. Removed the unsupported finite-exception assertion: Sard gives a null set, not finiteness. Separated augmented dimension from the still-required parameter-dependent compactness, gluing and orientation arguments.

- **`def-canonical-morse-homology-of-a-closed-manifold`**: Corrected the final choice ledger: continuation comparisons and finiteness use AC for both coefficient rings; taking homology of a supplied complex introduces no new choice.

- **`ex-relative-morse-homology-of-a-single-handle-cobordism`**: Replaced the product-handle corners model by a rounded single-handle cobordism with disjoint closed faces and supplied adapted one-critical-point data. For 0<k<n the old attaching and belt regions intersect along S^(k-1) x S^(n-k-1), so they are not the faces of the declared triad. Collar excision gives equality of relative homology with the standard handle pair; the whole pair (W,M0) is not asserted homotopy equivalent to a disk pair. The one-generator computation is independent of the general CW comparison.

- **`lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count`**: Other boundary strata can meet other cells of the same dimension; the incidence collapse kills those cells rather than requiring them to lie in a lower skeleton. Made the product of dimension signs finite. Added the separate degree-one endpoint calculation, including independently reversed zero-dimensional vertex orientations, and qualified the published unsigned-vertex convention. The remaining general relative disk prerequisite is unresolved at its supplier.

- **`cor-morse-homology-recovers-the-morse-inequalities`**: Fixed Proof 2.2: sum r_k t^k=tQ and sum r_(k+1)t^k=Q. Explicitly supplied arbitrary-field coefficients by mapping the signed integral matrix to the field and using cellular chains with the constant local system. This fills the mismatch between an arbitrary field in the statement and only Z/Z2 in the original comparison supplier.

- **`cex-a-nonproper-noncompact-morse-function-can-lose-continuation-trajectories-at-infinity`**: Reviewed the current one-dimensional example rather than the different manifest scaffold. Corrected F to be the negative gradient of f+, proved q>1/2 from x^3+x-1, and proved the right interpolation bound using the lower barrier q and a uniform integral bound. On the cubic plateau, backwards evolution x(τ)=x(1)/(1-x(1)τ) blows up before τ=2. Refuted the noncompact invariance statement itself, removing the unrelated assertion that every index-matched pair must be nonempty (false even for closed constant data).

- **`ex-continuation-across-a-birth-death-adds-an-acyclic-pair`**: Carried AC, fixed Morse–Smale metrics as part of the data, and specified compatible old unstable orientations for the direct-sum claim. Preserved the essential isolated-trajectory hypothesis and the genuine circle basis-change caveat. The finite contraction and polynomial calculation are sound; the continuation identification remains conditional on the core continuation results.

- **`ex-two-morse-functions-on-the-circle-have-isomorphic-morse-homology`**: Carried AC and corrected the dimension/citation for the two rigid arcs: the unparametrized moduli are zero-dimensional and their signs are the flow-orientation comparison. Checked the unimodular basis change P=p+c, C=c, Q=q1, B=q2-q1, giving dP=0, dC=B and the contraction B->C.

- **`ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation`**: Carried AC. Replaced the index-two trajectory-boundary citation for a saddle-to-minimum sign cancellation by the unstable interval and flow-orientation comparison. The specific “other sphere” counts are supported by Audin–Damian Figure 4.8 and Example 4.9.5(2), not merely by the critical-point counts.

- **`lem-continuation-energy-identity`**: Replaced the choice-dependent exponential-decay invocation in F3 by the supplied limits and compact support. Finite-interval identities directly give a finite limit of the nonnegative energy integrals. AC_omega remains for the datum’s bundle setup, not for a new decay argument.

- **`lem-continuation-map-of-constant-data-is-the-identity`**: Added AC inherited from the count definition and proved constant-solution regularity: d/ds+H has complementary decaying eigenspaces and is onto by the exact whole-line operator lemma.

- **`prop-relative-morse-complex-for-an-adapted-cobordism`**: Corrected the assertion that trajectories avoid arbitrary fixed critical-point-free collars. They avoid the boundary and collars shrunk by continuity/compactness so their f-values avoid the critical-value range. Its general CW/handle identification in F3–F4 and Proof 3.1–4.1 still depends on the unresolved unstable-disk construction; that part is not represented as repaired.

All 16 affected entries in `research/frontier-41-ha-dt-29-batch-6.proof-contracts.json` were updated: current cited clauses, fact-use maps, numbered derivations and changed boundary/choice qualifications. No review/judge acceptance was added. Any stale `verification.judge` was removed from edited items. Contracts of the seven open core carriers were deliberately not changed: they are evidence of their assumptions, not independent proofs. Their quotations of changed supplier definitions will need refresh during lead repair; otherwise their byte identities would incorrectly route these open findings as reader repairs.

## Unrepaired findings and required closures

### 1. `thm-continuation-trajectories-are-compact-up-to-breaking` — fatal / unlicensed-inference

**Location:** Facts F3, F5, F7; Proof 3.1–4.1, 6.1–7.1 (lines 83–127, 139–147).

The autonomous compactness supplier concerns full trajectories with fixed critical endpoints, whereas the tails cut at ±S have varying noncritical endpoints. Extraction of the intervening critical chain is not proved. Step 6.1 asserts a continuous height-path encoding without defining its domains or proving an inverse; the middle solution is not height-monotone, and declaring the broken locus closed does not follow from the stated extraction. F7 incorrectly treats compactly supported perturbations and separate half-line right inverses as giving surjectivity and uniform whole-line inverse bounds. Supply variable-endpoint tail compactness, a valid topological encoding, and uniform multi-neck gluing estimates. The current batch-5 compactness supplier also restricts to normalized gradient-like fields, while this item permits arbitrary metric-gradient ends.

### 2. `lem-gluing-continuation-solutions-gives-collar-ends` — fatal / unlicensed-inference

**Location:** Facts F2–F4; Proof 1.1–5.1 (lines 67–87, 109–117).

Local evolution and individual half-line right inverses do not prove a uniformly bounded inverse for the neck-dependent whole-line operator. An open-condition argument at each fixed operator does not provide a uniform bound as neck length diverges. The invoked implicit-function theorem requires an exact zero and an invertible partial derivative; the approximate curve is not a zero, and the index-one operator has a kernel. A complement/slice, quantitative contraction estimate, and nonlinear derivative control are missing. Uniqueness on that slice cannot establish injectivity and eventual containment until a neck coordinate and nearby-solution decomposition are proved. Supply that gluing argument, keeping the time-dependent middle solution unshifted, and smooth collars sufficient for the later smooth boundary-count suppliers.

### 3. `lem-orientation-lines-orient-continuation-moduli-spaces` — fatal / unlicensed-inference

**Location:** Statement 1, 3; Facts F2–F4; Proof 1.1, 3.1–4.1 (lines 44–79, 94–123, 130–136).

Surjectivity alone does not orient a determinant-line bundle. F2 assumes the desired canonical asymptotic identification, and F3 assumes the determinant-line gluing isomorphism; the finite-dimensional determinant definition and the topological collar lemma establish neither. Separate one-sided collars do not represent the negative and positive ends of one common interval, so the claimed relative boundary signs do not follow from the interval convention. Supply a transverse endpoint exact-sequence orientation and an actual negative-tail versus positive-tail tangent/determinant comparison, or a complete coherent-orientation gluing theorem with these conventions. Step 4.1 additionally falsely says that real determinant lines have a unique trivialization over mod-two coefficients; dropping counting signs does not trivialize those real lines.

### 4. `thm-homotopic-continuation-data-give-chain-homotopic-maps` — fatal / unlicensed-inference

**Location:** Facts F1 and F3; Statement K; Proof 1.1–3.1 (lines 39–54, 61–93, 107–113).

The cited compactness and collar theorems require a regular fixed continuation datum; a rogue trajectory has vertical index -1 and its fixed-datum linearization cannot be surjective. Those theorems therefore cannot establish compactness, finiteness, collars or orientations for the augmented (lambda,u) problem. The repaired two-parameter definition supplies augmented regularity and dimension, not these further assertions. Supply uniform parameter-dependent compactness, augmented gluing (allowing lambda to change), and its oriented boundary formula, including endpoint signs, before counting K and deriving the integral chain-homotopy identity. F3 only names product signs and does not establish the displayed minus signs in the boundary sum. Its final consequence also calls the chain-map supplier an isomorphism theorem, although that supplier establishes only a homomorphism; invertibility is proved later and must not be attributed to it.

### 5. `thm-continuation-composition-law-on-homology` — fatal / unlicensed-inference

**Location:** Fact F2; Proof 2.1 (lines 62–66, 86).

The cited collar lemma glues one autonomous Morse tail to one continuation solution at total index drop one. Here two rigid continuation solutions are glued at total index difference zero while the spliced datum itself changes with neck length. No such bijection, regularity of all resulting rigid solutions, exhaustion of solutions as the neck diverges, or signed compatibility is supplied. Counting a bijection without orientation compatibility also does not give the integral composite. Supply a continuation–continuation gluing theorem and its signs (the distinct case described in Fowdar Theorem 6.11, rather than the autonomous-tail case), plus control of any small perturbation before asserting chain-level equality.

### 6. `lem-compactified-unstable-manifolds-give-a-cw-decomposition` — fatal / unlicensed-inference

**Location:** Facts F2–F3, F5; Proof 1.1, 2.1–2.2, 3.1 (lines 107–148, 166–174).

The fixed-end trajectory compactness and index-two collars do not construct compactified unstable disks in all dimensions or prove the relative boundary-exit extension. Audin–Damian Section 4.9 proves the closed case by a separate variable-endpoint construction, not by iterating index-two collars; its relative extension is not supplied here. Step 2.2 wrongly declares the unbroken exit stratum closed: exit trajectories may converge to a critical break followed by exit. Step 3.1 falsely identifies value filtration with index filtration; an excellent Morse function need not order critical values by index. The handle supplier gives only a relative CW homotopy model and explicitly does not assert a global unstable closure. Supply the relative unstable-disk construction and its comparison with handles; do not identify these filtrations without a rearrangement argument.

### 7. `thm-morse-homology-is-naturally-isomorphic-to-singular-homology` — fatal / unlicensed-inference

**Location:** Statement choice-independence; Proof 3.1–4.1 (lines 42–53, 96–98).

The proof produces an isomorphism for a fixed pair but does not prove theta_(f1,X1) composed with the continuation map equals theta_(f0,X0). Existence, inverse and composition laws for continuation isomorphisms do not imply this compatibility with independently constructed cellular comparisons. Step 3.1 also asserts without a construction that all CW auxiliary changes give an isomorphism through which Theta factors. Supply the comparison-versus-continuation commutative diagram via a parametrized unstable-chain/cellular homotopy, and its orientation normalization; an abstract isomorphism of groups alone does not establish the stated choice-independence.

### 8. `def-mod-two-morse-differential` — fatal / false-claim

**Location:** Pre-reader Definition, paragraph beginning “The objects entering”, final assertion that the sum may be over all critical points.

The observed definition claimed that nonpositive index-drop emptiness permits counting all critical points, omitting positive-dimensional moduli for larger positive drop. Such moduli can be nonempty (a sphere maximum-to-minimum space already supplies an example), and their cardinality is not a finite differential coefficient. Restrict counts to drop one. The producer has since corrected this clause; this finding records only the exact pre-reader bytes observed.

**Assigned consumer:** `def-morse-homology-of-a-morse-smale-pair`.

**Observed source:** exact actually-read producer pre bytes, raw SHA-256 `b70e21e921cd2e60ddf4f7bd87ee24b77638d3132b8fbc1e26f1f683295f3561`, matching the immutable batch-5 pre fingerprint. The later corrected current source was inspected separately and was not relabeled as the old observation.

### 9. `def-geometric-convergence-to-a-broken-morse-trajectory` — fatal / ill-formed

**Location:** Pre-reader Definition, first paragraph’s transversal neighbourhood basis and its later explanation.

The observed neighbourhood prescription only chose charts at intermediate critical points. A length-one trajectory has no intermediate points, so the prescribed data do not distinguish nearby unbroken orbit classes or supply the claimed quotient topology. Include endpoint transversals and prove the shift/topology equivalence. The producer has since supplied a height topology and endpoint tests; this is the historical pre-source defect, not an allegation about those corrected bytes.

**Assigned consumer:** `def-broken-continuation-trajectory`.

**Observed source:** exact actually-read producer pre bytes, raw SHA-256 `ec8aa2c589457bcf9f6e83c7f8243f2c6b17df6c5ef7c0cc1c02329f5348f272`, matching the immutable batch-5 pre fingerprint. The later corrected current source was inspected separately and was not relabeled as the old observation.

### 10. `thm-morse-trajectory-compactness-up-to-breaking` — fatal / unlicensed-inference

**Location:** Pre-reader Proof 2.1, fixed critical-string extraction and passage to the height ODE.

The observed proof passed to a constant string of already present break points and then passed the height ODE on each entire intervening interval. An unbroken sequence has no already present intermediate points but may acquire a new critical break in its limit; at such a point df(X)=0, so division by df(X) and the proposed interval ODE argument are invalid. Split at every critical point actually met by the limiting height graph. The producer has since replaced this proof; the pre hash binds the old argument actually read.

**Assigned consumer:** `thm-continuation-trajectories-are-compact-up-to-breaking`.

**Observed source:** exact actually-read producer pre bytes, raw SHA-256 `30709d443bbaf719197cc3817c4bd4bab611d357a1b31819e048a4f9c335bcd9`, matching the immutable batch-5 pre fingerprint. The later corrected current source was inspected separately and was not relabeled as the old observation.

### 11. `lem-gluing-broken-index-two-trajectories-gives-collar-ends` — fatal / unlicensed-inference

**Location:** Pre-reader Proof 1.1–3.1, short neck, glued inverse and implicit-function claims.

The observed proof described a neck of length s tending to zero with an error exponentially small in s, without the diverging passage-time/vanishing-radius relation. It then asserted a glued right inverse without uniform estimates or a kernel slice, and applied the zero-based implicit-function theorem at an approximate nonzero curve. Supply a quantitative gluing argument or the explicit normalized-coordinate finite-dimensional collar construction. The producer has since installed such a different finite-dimensional construction; this finding concerns the exact old bytes observed.

**Assigned consumer:** `lem-gluing-continuation-solutions-gives-collar-ends`.

**Observed source:** exact actually-read producer pre bytes, raw SHA-256 `89b8848f53a2d1db3179a3af108f6d5bee3d2706d2bb4d8caf36cdfb00ab347a`, matching the immutable batch-5 pre fingerprint. The later corrected current source was inspected separately and was not relabeled as the old observation.

### 12. `thm-cellular-boundary-is-the-incidence-degree-matrix` — fatal / missing-hypothesis

**Location:** Statement “chosen cell orientations”, degree n=1; Proof 3.1 (lines 23–25, 38).

The degree-one incidence definition uses terminal-minus-initial in canonical positive vertex generators, while this theorem permits chosen cell orientations and the determinant/orientation-line definitions allow either ray in dimension zero. For an interval with initial vertex generator e_a=-[a] and terminal e_b=[b], the actual boundary is e_b+e_a, but the displayed unsigned-vertex incidence matrix gives e_b-e_a. Require canonical positive vertex generators in degree zero or include their orientation signs in degree-one incidence coefficients. The assigned consumer now explicitly handles this case locally; the published theorem was not edited.

**Assigned consumer:** `lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count`.

### 13. `def-parametrized-morse-trajectory-space` — fatal / ill-formed

**Location:** Definition, first displayed equation (line 26), between the two limit conditions.

The raw displayed equation contains “=p,qquad” rather than “=p,\qquad”. KaTeX treats qquad as literal mathematical letters rather than the intended spacing command, corrupting the displayed endpoint definition. Restore the missing backslash; the intended endpoint conditions themselves are unambiguous. This published item is outside the reader’s edit scope.

**Assigned consumer:** `def-regular-continuation-datum-between-morse-smale-pairs`.

The seven own-core findings were not safely repairable by a short local correction: completing them requires the listed quantitative or geometric prerequisites. Withdrawal or recording a different unproved result would exceed this reader’s decision authority, so the defective carriers remain untouched for lead action. For the touched relative proposition, the unresolved CW/handle implication is explicitly recorded above and travels with the touched-item review, rather than as a finding naming a changed carrier. The chain-map theorem also needs collars/smoothing sufficient for the smooth one-manifold boundary-count suppliers; a merely topological collar conclusion is insufficient as an exact citation. The gluing closure requested above includes this requirement.

## Opened prerequisite inventory and source evidence

The following supplier files were opened for the statements/definitions actually used. Full specialized arguments were read for the critical-limit, stable-disk, whole-line/half-line operator, flow-transversality, universal metric projection, autonomous compactness/collars, orientation transport, one-manifold boundary counts, and selected chain/handle calculations. This inventory does not claim a full proof re-audit of every transitive dependency. Large routine definitions were read only through the relevant clauses; truncated outputs were followed by bounded reads of the required clauses.

- `items/cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points.md`
- `items/cor-equicontinuous-families-into-a-compact-metric-target.md`
- `items/cor-every-compact-smooth-manifold-admits-an-excellent-morse-function.md`
- `items/cor-every-smooth-vector-field-on-a-compact-manifold-is-complete.md`
- `items/cor-index-one-trajectory-moduli-spaces-are-finite.md`
- `items/cor-no-morse-smale-trajectories-for-nonpositive-index-drop.md`
- `items/cor-relative-homology-of-a-single-handle-pair.md`
- `items/cor-unstable-disk-is-the-handle-core.md`
- `items/def-axiom-of-choice.md`
- `items/def-broken-morse-trajectory.md`
- `items/def-cell-attachment-by-a-characteristic-map.md`
- `items/def-cellular-boundary-from-three-consecutive-skeleta.md`
- `items/def-cellular-homology.md`
- `items/def-chain-complex-in-an-abelian-category.md`
- `items/def-chain-homotopy.md`
- `items/def-compact-open-topology-for-topological-domains.md`
- `items/def-compact-space.md`
- `items/def-countable-choice.md`
- `items/def-cw-complex-with-closure-finiteness-and-weak-topology.md`
- `items/def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space.md`
- `items/def-downward-gradient-like-vector-field.md`
- `items/def-euler-characteristic-of-a-finite-cw-complex.md`
- `items/def-first-countable-top.md`
- `items/def-fredholm-maps-and-regular-values-on-countable-banach-manifolds.md`
- `items/def-geometric-convergence-to-a-broken-morse-trajectory.md`
- `items/def-graded-morphism-of-chain-complexes.md`
- `items/def-handle-decomposition-relative-to-the-incoming-boundary.md`
- `items/def-homology-and-cohomology-with-local-coefficients.md`
- `items/def-homology-object-of-a-chain-complex.md`
- `items/def-incidence-number-of-two-cw-cells.md`
- `items/def-induced-boundary-orientation.md`
- `items/def-integers.md`
- `items/def-integers-modulo-n.md`
- `items/def-left-and-right-modules.md`
- `items/def-metrizable-space.md`
- `items/def-mod-two-morse-chain-group.md`
- `items/def-mod-two-morse-differential.md`
- `items/def-morse-function-adapted-to-a-cobordism.md`
- `items/def-morse-function-and-excellent-morse-function.md`
- `items/def-morse-smale-pair.md`
- `items/def-morse-trajectory-from-p-to-q.md`
- `items/def-nondegenerate-critical-point-nullity-index-and-coindex.md`
- `items/def-nowhere-dense-meagre-and-residual-subsets.md`
- `items/def-orientation-line-of-a-morse-critical-point.md`
- `items/def-oriented-cellular-chain-group.md`
- `items/def-parametrized-morse-trajectory-space.md`
- `items/def-product-orientation.md`
- `items/def-proper-smooth-function-and-compact-morse-slab.md`
- `items/def-relative-singular-homology.md`
- `items/def-riemannian-gradient-of-a-smooth-function.md`
- `items/def-second-countable-space.md`
- `items/def-signed-morse-differential-over-the-integers.md`
- `items/def-smooth-cobordism-triad-for-morse-theory.md`
- `items/def-smooth-family-of-maps-and-evaluation-map.md`
- `items/def-stable-and-unstable-sets-of-a-critical-point.md`
- `items/def-time-dependent-vector-field-and-evolution-operator.md`
- `items/def-topological-manifold-with-boundary.md`
- `items/def-topology-of-compact-convergence.md`
- `items/def-unparametrized-morse-trajectory-moduli-space.md`
- `items/lem-a-compact-morse-trajectory-has-single-critical-alpha-and-omega-limits.md`
- `items/lem-a-handle-decomposition-gives-a-relative-cw-complex.md`
- `items/lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse.md`
- `items/lem-boundary-of-a-compact-one-manifold-has-even-cardinality.md`
- `items/lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli.md`
- `items/lem-breaking-length-is-bounded-by-index-drop.md`
- `items/lem-compact-metric-space-has-a-countable-dense-subset.md`
- `items/lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories.md`
- `items/lem-first-order-asymptotically-hyperbolic-operator-is-fredholm.md`
- `items/lem-morse-smale-transversality-is-equivalent-to-surjectivity-of-the-linearized-flow-operator.md`
- `items/lem-gluing-broken-index-two-trajectories-gives-collar-ends.md`
- `items/lem-interior-slab-handle-attachment.md`
- `items/lem-negative-gradient-energy-identity.md`
- `items/lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time.md`
- `items/lem-oriented-boundary-of-a-compact-oriented-one-manifold-has-zero-signed-count.md`
- `items/lem-relative-homology-of-the-standard-handle-pair.md`
- `items/lem-the-interior-of-an-attached-cell-embeds-openly-in-its-closure.md`
- `items/lem-time-translation-acts-freely-on-nonconstant-trajectories.md`
- `items/lem-universal-metric-trajectory-projection-is-fredholm.md`
- `items/lem-unstable-orientations-induce-trajectory-moduli-orientations.md`
- `items/prop-a-chain-isomorphism-is-a-chain-homotopy-equivalence.md`
- `items/prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold.md`
- `items/prop-compact-open-is-uniform-on-a-compact-metric-domain.md`
- `items/prop-cw-skeleta-are-closed-and-cells-form-a-disjoint-partition.md`
- `items/prop-deformation-lemma-for-a-critical-point-free-slab.md`
- `items/prop-every-morse-function-admits-a-complete-gradient-like-field-on-a-closed-manifold.md`
- `items/prop-parametrized-morse-trajectory-space-is-a-manifold.md`
- `items/prop-pointwise-orientation-sign-of-a-local-diffeomorphism.md`
- `items/prop-proper-morse-slabs-give-complete-connecting-trajectories.md`
- `items/rem-compactness-up-to-breaking-needs-closedness-or-a-proper-compactness-package.md`
- `items/rem-noncompact-flow-completeness-is-an-extra-hypothesis.md`
- `items/thm-cellular-boundary-is-the-incidence-degree-matrix.md`
- `items/thm-cellular-chains-compute-homology-with-local-coefficients.md`
- `items/thm-cellular-homology-computes-singular-homology.md`
- `items/thm-chain-homotopic-maps-induce-the-same-map-on-homology.md`
- `items/thm-euler-poincare-formula-for-finite-cw-complexes.md`
- `items/thm-fundamental-theorem-on-flows.md`
- `items/thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces.md`
- `items/thm-implicit-function-theorem-for-banach-spaces.md`
- `items/thm-index-two-compactification-is-a-compact-one-manifold-with-boundary.md`
- `items/thm-integral-morse-differential-squares-to-zero.md`
- `items/thm-local-stable-unstable-manifold-theorem-for-a-morse-critical-point.md`
- `items/thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points.md`
- `items/thm-metric-compactness-equivalences.md`
- `items/thm-mod-two-morse-differential-squares-to-zero.md`
- `items/thm-morse-functions-and-handle-decompositions-correspond.md`
- `items/thm-morse-lemma.md`
- `items/thm-morse-sard-for-smooth-manifolds.md`
- `items/thm-morse-smale-metrics-are-residual-for-a-fixed-morse-function.md`
- `items/thm-morse-trajectory-compactness-up-to-breaking.md`
- `items/thm-one-critical-point-handle-attachment.md`
- `items/thm-parametric-transversality.md`
- `items/thm-regular-interval-diffeomorphism.md`
- `items/thm-sard-smale-residual-regular-values-for-fredholm-maps.md`
- `items/thm-time-dependent-vector-fields-have-local-smooth-evolution-operators.md`
- `items/thm-topological-manifolds-are-metrizable-and-paracompact.md`
- `items/thm-transverse-fibre-product-theorem.md`
- `items/thm-unparametrized-trajectory-space-is-a-smooth-manifold.md`

Sources actually inspected:

- [Ritter, Part III Morse Homology](https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf), complete Lecture 20, PDF pp. 91–96 (§6.3). It supports the intended continuation picture, distinguishes unshifted middle solutions and autonomous breaks, and describes the separate two-continuation gluing case. Its generic-metric shorthand does not remove the explicit shared-critical-point obstruction.
- [Fowdar, A Functional Analytic Approach to Morse Homology](https://www.mathematik.hu-berlin.de/~wendl/pub/Fowdar.pdf), §4 pp. 31–34 and complete §6 pp. 43–54. Definition 4.5 requires regularity at persistent critical points; Theorem 4.8 retains that qualification. Lemmas 6.3–6.6 separate uniform inverse estimates, nonlinear estimates and contraction. Theorem 6.10 is autonomous-tail gluing, 6.11 is continuation–continuation gluing, and 6.12 is augmented gluing. Critical technical estimates/embedding arguments are referred to Schwarz, not fully proved there; no claim to have read those deferred arguments is made.
- [Audin–Damian, Morse Theory and Floer Homology](https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf), full relevant §4.9 construction and proof, printed pp. 115–127 / PDF pp. 125–137. Figure 4.8, Examples 4.9.4–5 and Propositions 4.9.6–7 support the sphere model, incidence collapse and the separate closed unstable-disk construction. These passages do not establish the relative boundary-exit extension asserted here.
- [Nicolaescu, An Invitation to Morse Theory](https://www3.nd.edu/~lnicolae/Morse2nd.pdf), Remark 4.5.5, printed pp. 199–200 / PDF pp. 209–210: the canonical resolution and its reference to Qin. This is a distinct theorem, not a deduction merely from one-dimensional collars.
- [Qin, On Moduli Spaces and CW Structures](https://math.stanford.edu/~ralph/morsecourse/LizhenCW.pdf), introduction, PDF pp. 1–5. The local-triviality and lower-bound qualifications of the compactified descending-manifold results were checked. The full disk proof was not read and was not claimed as a completed substitute for the relative construction.
- [Schwarz, Equivalences for Morse Homology](https://www.math.utoronto.ca/mgualt/Morse%20Theory/schwarz_equivalences%20for%20morse%20homology.pdf), introductory/setup pp. 1–4 only. Its oriented-manifold setup and separate pseudocycle comparison route were noted; no integral nonorientable comparison argument was borrowed or claimed complete.

The current batch-5 producer independently changed four suppliers during this review. The original raw hashes were obtained from the files actually opened, then matched against the immutable pre fingerprints. Later relevant corrected sections were inspected; all four historical findings retain pre bindings as required. Other-batch and published files were not edited.

## Validation and handoff limits

- Reflow and precheck: successful for every one of the 16 changed items, repeated only after subsequent mathematical edits to the affected paths.
- Focused strict proof-contract check: **16/16**, **0 errors**, **0 warnings**.
- Renderer check: **18 files** (16 changed items and both pages), exit 0; valid YAML and KaTeX with no delimiter/link defects in that selection.
- After the last item edit and formatter, one final command batched all 16 explicit changed paths through `node tools/proof-layout.mjs`: **48 steps, 0 defects**, exit 0.
- Findings artifact: `research/frontier-41-ha-dt-29-reader-findings-6.json`, batch `6`, 13 unedited-carrier findings. The typo in a published supplier was outside the renderer selection and remains an owner repair.

**Blocker:** supply or adjudicate the seven identified core prerequisites, examine the touched relative proposition’s remaining dependence, reconcile historical producer repairs, and repair the published supplier qualifications. The mathematical review is not a claim that these obligations are closed. No whole-library or whole-transitive-closure audit, source-book reading, or independent mathematical certification is claimed.

The final findings JSON passed `briefs/schemas/reader-findings.json` validation. An exact pre/current scope comparison confirmed 16 changed item carriers, matching the recorded repair list, and no finding names a reader-changed carrier. No changed item retains a judge record.
