# Step 7 adjudication — group **d**, run `frontier-37-owner-30`

You are the group Alpha for batches **13**, **18**, **19**: 3 A/B pair(s), 6 page(s), 89 item(s), 0 open rejection(s) over 0 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 6 without
replaying that reader's transcript. Nothing from step 3, step 5, or another
group is assumed.
Everything below is
derived from disk by `tools/step7-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 6

**No step-6 digest exists for this group.** The reading half did not run or did
not produce one, so you are meeting this mathematics for the first time with the
rejections already in front of you. Read the pages before the verdicts anyway —
the order matters more than where the notes came from.

## Read scope, write scope

**Audit and repair one item at a time. Inspect related items first only when necessary.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-37-owner-30-step7-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 13 | `riemannian-comparison-theorems` | A | differential-geometry | 487 | `riemannian-metrics-length-distance-and-volume`, `connections-levi-civita-and-parallel-transport`, `geodesics-the-exponential-map-completeness-and-hopf-rinow`, `riemann-curvature-and-riemannian-submanifolds`, `jacobi-fields-conjugate-points-and-the-cut-locus`, `covering-spaces-and-lifting`, `product-measures-and-the-fubini-tonelli-theorems`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `simply-connected-plane-domains` |
| 13 | `riemannian-comparison-theorems-examples` | B | differential-geometry | 488 | `riemannian-comparison-theorems` |
| 18 | `perfect-complexes-and-triangulated-grothendieck-groups` | A | homological-algebra | 723 | `grothendieck-groups-and-graded-cartan-pairings`, `bounded-bimodule-complexes-and-derived-tensor` |
| 18 | `perfect-complexes-and-triangulated-grothendieck-groups-examples` | B | homological-algebra | 724 | `perfect-complexes-and-triangulated-grothendieck-groups` |
| 19 | `hochschild-hyperhomology-and-cyclic-tensor-invariance` | A | homological-algebra | 727 | `hochschild-homology-and-diagonal-koszul-resolutions`, `bounded-bimodule-complexes-and-derived-tensor`, `double-complexes-exact-couples-and-convergence` |
| 19 | `hochschild-hyperhomology-and-cyclic-tensor-invariance-examples` | B | homological-algebra | 728 | `hochschild-hyperhomology-and-cyclic-tensor-invariance` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `riemannian-comparison-theorems` — Riemannian Comparison Theorems (54 item(s))

- `def-comparison-sine-cosine-and-cotangent-functions` · definition — Comparison sine cosine and cotangent functions
- `prop-model-functions-solve-the-constant-curvature-jacobi-equation` · proposition — Model functions solve the constant curvature jacobi equation
- `def-radial-jacobi-tensor` · definition — Radial jacobi tensor
- `lem-radial-jacobi-tensor-is-invertible-before-the-first-conjugate-point` · lemma — Radial jacobi tensor is invertible before the first conjugate point
- `def-radial-riccati-operator` · definition — Radial riccati operator
- `thm-radial-riccati-equation` · theorem — Radial riccati equation
- `lem-trace-riccati-inequality` · lemma — Trace riccati inequality
- `thm-sturm-comparison-for-scalar-jacobi-equations` · theorem — Sturm comparison for scalar jacobi equations
- `thm-rauch-comparison-theorem-first-form` · theorem — Rauch comparison theorem first form
- `lem-riccati-comparison-for-scalar-initial-shape` · lemma — Riccati comparison for scalar initial shape
- `thm-rauch-comparison-theorem-second-form` · theorem — Rauch comparison theorem second form
- `prop-rigidity-in-rauch-comparison` · proposition — Rigidity in rauch comparison
- `cor-upper-sectional-curvature-bounds-delay-conjugate-points` · corollary — Upper sectional curvature bounds delay conjugate points
- `cor-lower-positive-sectional-curvature-forces-conjugate-points` · corollary — Lower positive sectional curvature forces conjugate points
- `def-laplace-beltrami-operator-as-trace-of-the-hessian` · definition — Laplace beltrami operator as trace of the hessian
- `thm-hessian-comparison-for-distance-under-sectional-curvature-bounds` · theorem — Hessian comparison for distance under sectional curvature bounds
- `thm-laplacian-comparison-for-distance-under-a-ricci-lower-bound` · theorem — Laplacian comparison for distance under a ricci lower bound
- `rem-weak-laplacian-comparison-at-the-cut-locus` · remark — Weak laplacian comparison at the cut locus
- `thm-no-conjugate-points-under-nonpositive-sectional-curvature` · theorem — No conjugate points under nonpositive sectional curvature
- `thm-a-complete-local-isometry-is-a-covering-map` · theorem — A complete local isometry is a covering map
- `thm-cartan-hadamard` · theorem — Cartan hadamard
- `cor-simply-connected-complete-nonpositively-curved-manifolds-have-unique-geodesics-between-points` · corollary — Simply connected complete nonpositively curved manifolds have unique geodesics between points
- `cor-squared-distance-is-strictly-convex-along-geodesics-in-a-hadamard-manifold` · corollary — Squared distance is strictly convex along geodesics in a hadamard manifold
- `thm-bonnet-conjugate-radius-theorem` · theorem — Bonnet conjugate radius theorem
- `thm-bonnet-myers` · theorem — Bonnet myers
- `lem-pullback-metric-on-a-cover-of-a-complete-manifold-is-complete` · lemma — Pullback metric on a cover of a complete manifold is complete
- `cor-bonnet-myers-fundamental-group-is-finite` · corollary — Bonnet myers fundamental group is finite
- `prop-round-sphere-model-geometry` · proposition — Round sphere model geometry
- `prop-half-space-model-geometry` · proposition — Upper half-space model geometry
- `prop-flat-torus-model-geometry` · proposition — Flat torus model geometry
- `def-model-space-radial-area-and-ball-volume` · definition — Model space radial area and ball volume
- `def-radial-volume-jacobian` · definition — Radial volume jacobian
- `lem-logarithmic-derivative-of-the-radial-volume-jacobian-is-the-distance-laplacian` · lemma — Logarithmic derivative of the radial volume jacobian is the distance laplacian
- `thm-relative-volume-density-comparison` · theorem — Relative volume density comparison
- `thm-bishop-gromov-volume-comparison` · theorem — Bishop gromov volume comparison
- `thm-cheng-maximal-diameter-rigidity` · theorem — Cheng maximal diameter rigidity
- `cor-bishop-volume-upper-bound` · corollary — Bishop volume upper bound
- `cor-volume-doubling-under-a-nonnegative-ricci-lower-bound` · corollary — Volume doubling under a nonnegative ricci lower bound
- `prop-rigidity-in-bishop-gromov-on-an-interval` · proposition — Rigidity in bishop gromov on an interval
- `cor-complete-noncompact-manifolds-with-nonnegative-ricci-curvature-have-at-most-euclidean-volume-growth` · corollary — Complete noncompact manifolds with nonnegative ricci curvature have at most euclidean volume growth
- `def-comparison-triangle-in-the-two-dimensional-space-form` · definition — Comparison triangle in the two dimensional space form
- `lem-first-variation-hinge-derivative-formula` · lemma — First variation hinge derivative formula
- `lem-toponogov-distance-support-inequality` · lemma — Toponogov distance support inequality
- `thm-toponogov-hinge-comparison` · theorem — Toponogov hinge comparison
- `thm-toponogov-triangle-comparison` · theorem — Toponogov triangle comparison
- `prop-distance-between-corresponding-side-points-in-toponogov-comparison` · proposition — Distance between corresponding side points in toponogov comparison
- `cor-diameter-rigidity-from-toponogov-under-a-sectional-lower-bound` · corollary — Diameter rigidity from toponogov under a sectional lower bound
- `rem-alexandrov-and-differentiable-sphere-theorems` · remark — Alexandrov and differentiable sphere theorems
- `fs-higher-sectional-curvature-makes-jacobi-fields-spread-faster` · false-statement — Higher sectional curvature makes jacobi fields spread faster
- `fs-cartan-hadamard-says-exp-p-is-injective-without-simple-connectedness` · false-statement — Cartan hadamard says exp p is injective without simple connectedness
- `fs-positive-ricci-curvature-without-a-uniform-lower-bound-implies-compactness` · false-statement — Positive ricci curvature without a uniform lower bound implies compactness
- `fs-bishop-gromov-volume-ratio-is-nondecreasing-under-a-ricci-lower-bound` · false-statement — Bishop gromov volume ratio is nondecreasing under a ricci lower bound
- `fs-a-section-curvature-lower-bound-makes-triangles-thinner-than-the-model` · false-statement — A section curvature lower bound makes triangles thinner than the model
- `fs-the-laplace-beltrami-definition-licenses-the-use-of-all-euclidean-harmonic-function-theory-on-manifolds` · false-statement — The laplace beltrami definition licenses the use of all euclidean harmonic function theory on manifolds

### `riemannian-comparison-theorems-examples` — Riemannian Comparison Theorems — Examples (12 item(s))

- `ex-model-jacobi-fields-in-positive-zero-and-negative-curvature` · example — Model jacobi fields in positive zero and negative curvature
- `ex-rauch-comparison-between-euclidean-and-spherical-geodesics` · example — Rauch comparison between euclidean and spherical geodesics
- `ex-distance-hessian-and-laplacian-in-space-forms` · example — Distance hessian and laplacian in space forms
- `ex-cartan-hadamard-for-hyperbolic-space` · example — Cartan hadamard for hyperbolic space
- `ex-a-flat-torus-showing-simple-connectedness-is-needed-for-global-exp-injectivity` · example — A flat torus showing simple connectedness is needed for global exp injectivity
- `ex-bonnet-myers-for-the-round-sphere` · example — Bonnet myers for the round sphere
- `ex-bishop-gromov-ratio-is-constant-in-the-model-space` · example — Bishop gromov ratio is constant in the model space
- `ex-volume-growth-in-euclidean-and-hyperbolic-space` · example — Volume growth in euclidean and hyperbolic space
- `ex-toponogov-comparison-on-a-round-sphere` · example — Toponogov comparison on a round sphere
- `cex-positive-sectional-curvature-with-no-fixed-lower-bound-on-a-noncompact-manifold` · counterexample — Positive sectional curvature with no fixed lower bound on a noncompact manifold
- `cex-ricci-lower-bound-does-not-control-every-sectional-curvature-in-dimension-at-least-three` · counterexample — Ricci lower bound does not control every sectional curvature in dimension at least three
- `ex-equality-cases-as-diagnostics-for-all-comparison-signs` · example — Equality cases as diagnostics for all comparison signs

### `perfect-complexes-and-triangulated-grothendieck-groups` — Perfect Complexes and Triangulated Grothendieck Groups (9 item(s))

- `def-perfect-complex-over-a-ring` · definition — Perfect complexes over a ring and its graded version
- `lem-perfect-complexes-form-a-triangulated-subcategory` · lemma — Perfect complexes form an essentially small triangulated subcategory
- `def-triangulated-grothendieck-group` · definition — Grothendieck group of an essentially small triangulated category
- `lem-triangulated-k-zero-shifts-and-exact-functors` · lemma — Shift signs and exact-functor maps on triangulated K0
- `lem-euler-class-of-a-bounded-projective-complex-is-homotopy-invariant` · lemma — Euler class of a bounded projective complex is derived invariant and triangle additive
- `thm-perfect-complex-k-zero-agrees-with-projective-k-zero` · theorem — Triangle K0 of perfect complexes equals split K0 of finite projectives
- `thm-abelian-k-zero-agrees-with-bounded-derived-k-zero` · theorem — G0 of an abelian category equals triangle K0 of its bounded derived category
- `thm-finite-projective-resolution-hypotheses-identify-perfect-and-bounded-derived-categories` · theorem — Finite left global dimension identifies perfect and bounded finite-module derived categories
- `thm-graded-tensor-equivalences-induce-laurent-linear-k-zero-actions` · theorem — Graded derived tensor equivalences induce Laurent-linear K0 and G0 maps

### `perfect-complexes-and-triangulated-grothendieck-groups-examples` — Perfect Complexes and Triangulated Grothendieck Groups — Examples (3 item(s))

- `ex-homological-and-internal-shifts-on-k-zero` · example — Independent homological and internal shifts on graded K0
- `ex-dual-numbers-simple-is-not-perfect` · example — The simple module over dual numbers is not perfect
- `ex-euler-class-of-a-two-term-cone` · example — Euler class of a two-term mapping cone

### `hochschild-hyperhomology-and-cyclic-tensor-invariance` — Hochschild Hyperhomology and Cyclic Tensor Invariance (8 item(s))

- `def-hochschild-hyperhomology-of-a-bimodule-complex` · definition — Hochschild hyperhomology of a bounded bimodule complex
- `thm-hochschild-hyperhomology-is-resolution-independent` · theorem — Hochschild hyperhomology is independent of a projective resolution
- `def-termwise-hochschild-homology-complex-and-iterated-homology` · definition — Termwise Hochschild homology and iterated homology
- `thm-termwise-hochschild-homology-respects-bimodule-chain-homotopies` · theorem — Termwise Hochschild homology respects bimodule chain homotopies
- `thm-termwise-hochschild-spectral-sequence-for-a-bounded-bimodule-complex` · theorem — Termwise Hochschild spectral sequence of a bounded bimodule complex
- `lem-double-bar-comparison-for-cyclic-bimodule-tensor-products` · lemma — Double bar comparison for cyclic bimodule tensor products
- `thm-derived-cyclicity-of-hochschild-hyperhomology` · theorem — Derived cyclicity of Hochschild hyperhomology
- `thm-termwise-hochschild-cyclicity-for-bounded-projective-bimodule-complexes` · theorem — Termwise Hochschild cyclicity for bounded projective bimodule complexes

### `hochschild-hyperhomology-and-cyclic-tensor-invariance-examples` — Hochschild Hyperhomology and Cyclic Tensor Invariance — Examples (3 item(s))

- `ex-hochschild-bicomplex-total-and-separate-degrees` · example — Total and separate Hochschild degrees for a two-term complex
- `ex-cyclic-tensor-coinvariants-of-matrix-bimodules` · example — Matrix-unit rotation for a k–Mat_n(k) Morita pair
- `ex-double-bar-rotation-sign-in-two-complex-degrees` · example — A minus sign when rotating two odd cochain factors

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-6 reader warnings

None. No Step-6 reader warning targets an item you own.

## Your rejections

**None open at render time.** That is a real outcome, not an error: Sol
may have passed every item you own. Verify it against
`research/frontier-37-owner-30-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 7 batch adjudication, `frontier-37-owner-30`

- Follow `briefs/step7-adjudicator.md` and the engine-generated, round-bound task. It supplies the batch, exact rejections, ownership, evidence paths, and structured result schema. Do not reconstruct them from an old group task.
- Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.
- Decide by logical validity and repair every confirmed defect, including nonfatal defects. Identify relevant downstream consumers, including published items; escalate uncertainty and potentially defective published consumers to the owner.
- The engine routes downstream repairs to three Sol 6.1 high owners and certifies once all writers drain. Sol rejudgment and adjudication/repair/certification repeat under `WORKFLOW.md`; new downstream work continues in the repair phase until complete. Fatal classification controls only the threshold.
- Historical terminal receipts cannot close current rounds.
- You may create and fully author new items only to meet genuine unsatisfied prerequisites of assigned repairs. Follow the dedicated briefs for evidence, unique IDs, registry/index and metadata inclusion, downstream repair closure, central certification, and gates. The frozen original scope never grows.
