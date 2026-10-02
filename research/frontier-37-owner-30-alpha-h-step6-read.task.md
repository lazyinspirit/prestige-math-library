# Step 6 Alpha group reader — read-only digest — group **h**, run `frontier-37-owner-30`

- You are the read-only Step 6 Alpha group reader for batches **6**, **17**, **25**: 3 A/B pair(s), 6 page(s), 93 item(s).

- Read every owned item and every listed seam before returning the compact
  schema-constrained digest. That file, not this conversation, is the handoff
  to a fresh Step-7 adjudicator. No judge verdict is supplied here.
- Read items in dependency order across the group: suppliers before their
  direct and indirect consumers, including prerequisites outside the group.
- In the digest, `pages_read` is exactly the ids under **Your pages** and
  `items_read` exactly the ids under **Your content**. External items you
  open belong only in `published_dependencies`; never add them to those inventories.
- Everything below is derived from disk by `tools/step7-scope.mjs`; no line
  of it is a judgement about mathematics.

## Read scope

- **Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

- **This dispatch is read-only.** Record concerns about owned items and alerts
  about other groups in the returned digest; do not repair anything.

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

---

# Step 6 Alpha group reader — read-only digest, `frontier-37-owner-30`

- **Role and scope:** You are the Step 6 Alpha group reader for the assigned group in the generated group header. Read every assigned page and item, its cited published dependencies, and every listed cross-group seam.
- **Dependency order:** Read items in the correct dependency order across the entire assigned group: suppliers before their direct and indirect consumers. Review each cited prerequisite before the consuming claim, including prerequisites outside the group.
- **Read-only work:** Record concerns and alerts without repairing anything.
- **Return only the supplied Step-7 context JSON.** Its `pages_read`, `items_read`, and `seams_checked` must be exact inventories of the generated scope. Include the group's conventions, load-bearing items, opened published dependencies, and concrete concerns. Empty `concerns` and `alerts` arrays are valid.
- **Escape JSON strings correctly:** Every backslash is an escape, so write a LaTeX command with a doubled backslash (`\\perp`, `\\omega`), never a single backslash (`\perp`). An invalid escape invalidates the whole digest. Prefer plain text or Unicode (⊥, ω, ≤, ∈) when suitable.
- **Keep inventories exact:** `pages_read` must contain exactly the IDs under **Your pages**, and `items_read` exactly the IDs under **Your content**, with no extras. Opening a published dependency does not expand either inventory; record it only under `published_dependencies`.
- **Route other-group findings correctly:** Put a finding about another group's item in `alerts`, not `concerns`; the scope tool routes it to that item's owning group before adjudication.
