# Step 7 adjudication — group **h**, run `frontier-37-owner-30`

You are the group Alpha for batches **6**, **17**, **25**: 3 A/B pair(s), 6 page(s), 93 item(s), 0 open rejection(s) over 0 item(s).

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
| 6 | `smooth-proper-curves-divisors-genus-and-ramification` | A | scheme-theory | 366.085 | `finite-proper-and-projective-morphisms`, `kahler-differentials-conormal-sequences-and-infinitesimal-lifting`, `flat-smooth-and-etale-morphisms`, `quasi-coherent-and-coherent-sheaves-and-vector-bundles`, `proj-projective-schemes-twisting-sheaves-and-ampleness`, `cartier-and-weil-divisors-line-bundles-and-picard-groups`, `sheaf-cohomology-cech-cohomology-and-comparison`, `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`, `normalization-finiteness-for-affine-domains` |
| 6 | `smooth-proper-curves-divisors-genus-and-ramification-examples` | B | scheme-theory | 366.086 | `smooth-proper-curves-divisors-genus-and-ramification` |
| 17 | `approximation-algorithms-and-gap-reductions` | A | computability-theory | 651 | `alphabet-reduction-and-the-pcp-theorem`, `classical-np-completeness-reductions`, `finite-counting-and-binomial-coefficients`, `graphs-walks-and-connectivity`, `trees-forests-and-spanning-trees`, `eulerian-and-hamiltonian-graphs` |
| 17 | `approximation-algorithms-and-gap-reductions-examples` | B | computability-theory | 652 | `approximation-algorithms-and-gap-reductions` |
| 25 | `harmonic-hardy-classes-and-fatou-boundary-limits` | A | complex-analysis | 835 | `harmonic-functions-and-the-poisson-integral`, `complex-lp-spaces-and-test-function-conventions`, `the-duality-of-lp-and-lq`, `density-separability-and-convolution-in-lp`, `the-maximal-function-and-lebesgue-differentiation`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `banach-alaoglu-goldstine-and-krein-milman`, `reflexivity-and-eberlein-smulian`, `green-functions-harmonic-measure-and-conformal-invariance`, `measure-preserving-transformations-and-poincare-recurrence`, `trigonometric-and-oscillatory-examples-in-one-variable` |
| 25 | `harmonic-hardy-classes-and-fatou-boundary-limits-examples` | B | complex-analysis | 836 | `harmonic-hardy-classes-and-fatou-boundary-limits` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `smooth-proper-curves-divisors-genus-and-ramification` — Smooth Proper Curves Divisors Genus and Ramification (40 item(s))

- `def-algebraic-curve-over-field` · definition — Curves over a field
- `thm-normalization-glues-integral-finite-type-curves` · theorem — Normalization of an integral finite-type curve by gluing affine integral closures
- `def-rational-map-integral-schemes` · definition — Rational maps of integral finite-type schemes
- `lem-rational-map-smooth-curve-to-proper-scheme-extends` · lemma — Rational maps from a smooth curve to a proper scheme are morphisms
- `thm-curves-function-fields-equivalence` · theorem — Smooth proper curves, dominant morphisms and function fields
- `cor-birational-smooth-proper-curves-isomorphic` · corollary — Birational smooth proper curves are isomorphic
- `thm-local-ring-smooth-curve-dvr` · theorem — Local rings of a smooth curve are discrete valuation rings
- `def-divisor-smooth-proper-curve` · definition — Divisors on a smooth proper curve
- `thm-cartier-weil-divisors-curves-agree` · theorem — Cartier and Weil divisors agree on a smooth curve
- `def-riemann-roch-space-of-divisor` · definition — The space L(D)
- `lem-effective-divisors-sections-mod-scalars` · lemma — Effective divisors linearly equivalent to D are sections modulo scalars
- `def-complete-linear-system` · definition — Complete linear system
- `def-base-point-linear-system` · definition — Base points and base-point-free linear systems
- `thm-base-point-free-linear-system-morphism` · theorem — A base-point-free linear system defines a morphism to projective space
- `thm-h0-structure-sheaf-proper-curve` · theorem — Functions on a proper curve
- `def-arithmetic-genus-proper-curve` · definition — Genus and arithmetic genus of a curve
- `def-canonical-line-bundle-curve` · definition — Canonical bundle and canonical divisors
- `lem-rational-differential-divisor-well-defined-class` · lemma — Divisors of rational differentials form one linear equivalence class
- `thm-nonconstant-morphism-proper-curves-finite-surjective` · theorem — Nonconstant morphisms of proper curves are finite and surjective
- `def-nonconstant-morphism-curves-degree` · definition — Degree of a nonconstant morphism of curves
- `def-ramification-index-curve-map` · definition — Ramification index of a morphism of curves
- `lem-curve-different-local-support-and-index-bound` · lemma — Local support and index bound for the different of a curve map
- `lem-fibre-degree-sum-ramification-residue` · lemma — Fibre degree sum with ramification and residue degrees
- `def-ramification-and-branch-points` · definition — Ramification points, branch points and unramifiedness
- `def-different-divisor-curve-map` · definition — The different divisor of a generically separable morphism
- `lem-torsion-quotient-invertible-sheaves-effective-divisor` · lemma — An invertible quotient of an invertible subsheaf by a torsion sheaf is a twist by an effective divisor
- `thm-canonical-bundle-ramification-formula` · theorem — Canonical bundle formula with the different
- `lem-degree-effective-divisor-nonnegative` · lemma — Effective divisors have nonnegative degree
- `thm-degree-positive-line-bundle-sections-zero-bound` · theorem — Negative-degree line bundles have no nonzero sections
- `lem-function-with-poles-defines-map-p1` · lemma — A nonconstant rational function defines a finite map to the projective line
- `def-gonality-curve` · definition — Gonality
- `def-geometric-genus-singular-curve` · definition — Geometric genus of a singular curve
- `def-delta-invariant-curve-singularity` · definition — Delta invariant of a curve singularity
- `lem-normalization-lowers-arithmetic-genus-delta` · lemma — Arithmetic genus, geometric genus and delta invariants
- `thm-plane-curve-arithmetic-genus` · theorem — Arithmetic genus of a plane curve
- `cor-plane-curve-geometric-genus-delta-correction` · corollary — Geometric genus of a plane curve by delta invariants
- `lem-composite-finite-proper-morphism-proper` · lemma — Composite of a finite morphism and a proper morphism is proper
- `lem-projective-line-curve-and-divisor-basics` · lemma — Projective-line curve and divisor basics
- `lem-projective-line-twisting-sheaf-ample` · lemma — The projective-line twisting sheaf is ample
- `lem-two-affine-double-cover-cohomology` · lemma — Cohomology of a two-chart double cover

### `smooth-proper-curves-divisors-genus-and-ramification-examples` — Smooth Proper Curves Divisors Genus and Ramification — Examples (12 item(s))

- `ex-projective-line-divisors-linear-systems` · example — Divisors and complete linear systems on the projective line
- `ex-smooth-conic-is-projective-line-with-point` · example — A smooth conic is a projective line once it has a rational point
- `ex-hyperelliptic-curve-double-cover` · example — Ramification of the double cover y^2=f(x)
- `cex-inseparable-map-riemann-hurwitz-naive-fails` · counterexample — The separability hypothesis in the ramification formula is necessary
- `ex-nodal-cubic-normalization-genus` · example — Nodal cubic: arithmetic genus one, delta one, geometric genus zero
- `ex-cuspidal-cubic-normalization-genus` · example — Cuspidal cubic: delta invariant and normalization
- `cex-rational-map-singular-curve-not-extend-uniquely` · counterexample — Smoothness of the source cannot be dropped in the extension of rational maps
- `ex-divisor-degree-over-nonalgebraically-closed-field` · example — Divisor degree with residue degrees over a nonclosed field
- `ex-basepoint-linear-system` · example — A linear system with and without a base point
- `cex-degree-zero-line-bundle-no-section` · counterexample — A nontrivial degree-zero line bundle has no nonzero section
- `ex-ramification-power-map-projective-line` · example — Ramification indices of the power map on the projective line
- `ex-plane-quartic-genus-three-smooth` · example — Smooth plane quartic has genus three

### `approximation-algorithms-and-gap-reductions` — Approximation Algorithms and Gap Reductions (22 item(s))

- `def-optimization-problem-and-approximation-ratio` · definition — Optimization problems and approximation ratios
- `def-ptas-fptas-and-apx` · definition — PTAS, FPTAS and APX
- `thm-maximal-matching-is-a-two-approximation-for-vertex-cover` · theorem — A maximal matching gives a 2-approximate minimum vertex cover
- `def-greedy-set-cover` · definition — Weighted greedy set cover and element charges
- `def-harmonic-number-for-set-cover-analysis` · definition — Harmonic numbers for set-cover analysis
- `lem-greedy-set-cover-charging-bound` · lemma — The greedy charge on each newly covered element is at most OPT divided by the remaining count
- `thm-greedy-set-cover-is-an-h-n-approximation` · theorem — Weighted greedy set cover has approximation factor H_n
- `thm-random-cut-has-expected-half-the-edges` · theorem — A random cut crosses half the edges in expectation
- `thm-conditional-expectation-derandomizes-max-cut-half-approximation` · theorem — Conditional expectation yields a deterministic half-approximation for Max-Cut
- `def-metric-tsp` · definition — Metric traveling-salesperson problem
- `lem-minimum-spanning-tree-cost-lower-bounds-metric-tsp` · lemma — A minimum spanning tree lower-bounds metric-TSP optimum
- `lem-euler-double-tree-shortcutting-does-not-increase-cost` · lemma — Euler-tour shortcutting of a doubled tree does not increase metric cost
- `thm-doubled-spanning-tree-is-a-two-approximation-for-metric-tsp` · theorem — Double-tree shortcutting is a 2-approximation for metric TSP
- `def-gap-problem-and-gap-preserving-reduction` · definition — Gap promise problems and gap-preserving reductions
- `lem-pcp-verifier-reduces-to-gap-max-three-sat` · lemma — A constant-query PCP verifier yields constant-gap Max-3SAT
- `thm-max-three-sat-has-no-ptas-unless-p-equals-np` · theorem — Max-3SAT has no PTAS unless P=NP
- `lem-gap-three-sat-reduces-to-gap-independent-set` · lemma — Clause-literal consistency graph preserves the Max-3SAT optimum
- `thm-independent-set-has-no-ptas-unless-p-equals-np` · theorem — Maximum independent set has no PTAS unless P=NP
- `def-l-reduction` · definition — L-reductions between optimization problems
- `def-apx-hardness-and-apx-completeness` · definition — APX-hardness and APX-completeness under L-reductions
- `lem-l-reductions-transfer-apx-hardness` · lemma — L-reductions compose and transfer PTAS and APX-hardness
- `fs-exact-np-hardness-implies-no-constant-approximation` · false-statement — Exact NP-hardness does not rule out constant approximation

### `approximation-algorithms-and-gap-reductions-examples` — Approximation Algorithms and Gap Reductions: Examples and Counterexamples (5 item(s))

- `ex-greedy-set-cover-charging-bound` · example — A four-element greedy set-cover charge calculation
- `ex-l-reductions-transfer-apx-hardness` · example — The clause graph is an L-reduction with constants one and one
- `cex-exact-np-hardness-implies-no-constant-approximation` · counterexample — Minimum vertex cover refutes the exact-hardness approximation claim
- `ex-conditional-expectation-for-a-small-max-cut-instance` · example — Conditional expectation derandomizes Max-Cut on a triangle
- `ex-double-tree-shortcutting-for-a-metric-tsp-instance` · example — Double-tree shortcutting on the four-vertex square metric

### `harmonic-hardy-classes-and-fatou-boundary-limits` — Harmonic Hardy Classes and Fatou Boundary Limits (11 item(s))

- `def-poisson-integral-of-finite-boundary-measure` · definition — Poisson integral of a finite complex boundary measure
- `def-harmonic-hardy-class-disc` · definition — Harmonic Hardy classes on the unit disc
- `thm-poisson-extension-lp-contraction-and-norm-limit` · theorem — Poisson extension is an Lp contraction and converges in finite Lp
- `thm-harmonic-hardy-one-measure-representation` · theorem — h1 is isometric to finite regular complex boundary measures
- `thm-harmonic-hardy-representation-p-greater-one` · theorem — h^p is the Poisson image of Lp for 1<p≤∞
- `def-circle-maximal-function-and-nontangential-region` · definition — Circle maximal function and nontangential approach regions
- `lem-circle-maximal-weak-one-one` · lemma — The circle maximal function is weak type one one for finite measures
- `thm-poisson-nontangential-maximal-bound` · theorem — Poisson nontangential maximal function is controlled by circle maximal averages
- `thm-fatou-nontangential-boundary-theorem-harmonic` · theorem — Fatou limits for Poisson extensions of L1 boundary data
- `cor-bounded-harmonic-functions-have-nontangential-limits` · corollary — Bounded harmonic functions have L-infinity Fatou boundary data
- `thm-harnack-convergence-positive-harmonic-functions` · theorem — Positive harmonic boundary measures and compact normalized families

### `harmonic-hardy-classes-and-fatou-boundary-limits-examples` — Harmonic Hardy Classes and Fatou Boundary Limits: Examples and Counterexamples (3 item(s))

- `ex-poisson-extension-of-an-indicator-arc` · example — Poisson extension of an indicator arc
- `ex-poisson-boundary-atom-in-h-one` · example — A boundary atom gives an h1 function without an L1 density
- `cex-radial-boundary-limit-does-not-force-tangential-limit` · counterexample — A radial Poisson limit does not control a tangential path

## Your seams

Your pages depend on another group's:

- `smooth-proper-curves-divisors-genus-and-ramification` requires `cartier-and-weil-divisors-line-bundles-and-picard-groups` (group g, batch 5)

Another group's pages depend on yours:

- `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem` (group c) requires your `smooth-proper-curves-divisors-genus-and-ramification`
- `riemann-roch-for-curves-via-euler-characteristics` (group i) requires your `smooth-proper-curves-divisors-genus-and-ramification`

Both directions are yours to check for citation fidelity: the citing text must
state the cited proposition, not a summary of what it is for, and must not have
changed a domain, quantifier, hypothesis, direction or conclusion.

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
