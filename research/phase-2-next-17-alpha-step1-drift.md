# phase-2-next-17 — Alpha prerequisite-drift review

I reviewed the A-page scope in `research/phase-2-next-17-scope-ledger.json` in its
declared order, all eleven `research/phase-2-next-17-batch-*.pages.json`
manifests, the prose designs named by
`research/phase-2-next-17-planning-notes.md`, the owner decisions in
`research/phase-2-next-17-prerequisite-audit.md`, and the current transitive
closures in `research/plan-spec.json`. Item dependencies were resolved to their
owning plan pages; local item dependencies and the authorized earlier-in-run
AT-7 -> AT-8 -> DG-17 and RL-13 -> RL-15 chains were treated as available.

For the unfamiliar arguments I read the complete relevant portions of the
authoritative sources: Durrett, *Probability: Theory and Examples*, Theorem
3.4.10 and its proof (pp. 155–156),
<https://math.duke.edu/~rtd/PTE/PTE5_011119.pdf>; Stacks Project, Cartan–Eilenberg
resolutions, especially Lemmas 13.21.2–13.21.3,
<https://stacks.math.columbia.edu/tag/015G>; Stacks Project, Grothendieck spectral
sequence, Lemma 13.22.2, <https://stacks.math.columbia.edu/tag/015N>; and Arora–Barak,
PSPACE completeness, Theorem 4.11 and its proof,
<https://theory.cs.princeton.edu/complexity/spacechap.pdf>.

### affine-lie-algebras-and-loop-central-extensions

The RL-13 prose and the owner prerequisite audit reduce the construction to
`kac-moody-algebras-from-generalized-cartan-matrices (order 510.023)` and
`finite-weyl-invariants-bruhat-and-kostant-harmonics (order 510.0002)`; the
highest-root calculation is deliberately local. Both backward edges are in the
plan. The empty pre-materialization item list leaves no contrary item edge, and
the audit explicitly authorized this pair. Remaining uncertainty: none at the
prerequisite level; item materialization is still mechanical stage work.

VERDICT: no-drift

### brauers-first-main-theorem

The RG-16 design and batch-9 items use the Brauer homomorphism/block page, Green
correspondence, modular projective covers, and Brauer characters. Those are
exactly `blocks-defect-groups-and-the-brauer-homomorphism (order 510.057)`,
`vertices-sources-and-the-green-correspondence (order 510.059)`,
`modular-representations-and-projective-covers (order 150.001)`, and
`brauer-characters-and-decomposition-matrices (order 150.003)`, all already in
the declared closure. No item dependency resolves outside that closure.
Remaining uncertainty: none.

VERDICT: no-drift

### central-limit-theorems

Owner reconciliation replaced the logarithm-based near-one factor lemma with
`lem-product-of-near-one-characteristic-factors`. Its exponential-series
quadratic estimate and finite telescoping product proof use only the published
complex-exponential interfaces; no contour or principal-logarithm page is
needed. Five redundant forward weak-choice dependencies were also removed
while the items retain their explicit full-AC hypothesis through
`def-axiom-of-choice`. The repaired dependency closure is complete. Remaining
uncertainty: none.

VERDICT: no-drift

### condensation-gch-and-diamond-in-l

The batch-11 hull, condensation, cardinality, GCH-in-L, diamond, Suslin-tree,
and formal-consistency items resolve through
`the-constructible-hierarchy-and-inner-models (order 675)`,
`set-theoretic-trees-delta-systems-and-diamond (order 671)`, and
`arithmetization-incompleteness-and-relative-consistency (order 659)`, all in
the plan closure. The constructions use the canonical definable well-order of
L rather than an undeclared choice principle, and no path enters the deferred
“Set Theory Beyond Choice” catalogue. Remaining uncertainty: none.

VERDICT: no-drift

### cup-cap-cross-products-and-cohomology-rings

The AT-7 products, Eilenberg–Zilber/Alexander–Whitney comparison, diagonal,
cap-product, and ring calculations use the published CW/cellular and singular
cohomology interfaces already supplied by
`cw-complexes-and-cellular-homology (order 366.007)` and
`singular-cohomology-and-coefficient-theorems (order 366.011)`. No later smooth
page is required. Remaining uncertainty: none.

VERDICT: no-drift

### distributions-test-functions-and-differentiation

Owner reconciliation avoided the boundary-unsafe norming-page edge. The local
structure item now proves exactly its required norm-preserving extension from
published `thm-zorn`: chain unions give maximal partial extensions, the usual
one-dimensional interval argument forces the full real domain, and
realification recovers the complex extension. Its consumers inherit only the
explicit AC hypothesis. The backward page edge is therefore the foundationally
safe `order-zorn-and-the-axiom-of-choice (order 10)`, and the remaining
distribution, Stokes, Fubini, density, and localization interfaces all resolve
through the declared closure. Remaining uncertainty: none.

VERDICT: no-drift

### geodesics-the-exponential-map-completeness-and-hopf-rinow

The DG-20 design and batch-7 geodesic-equation, exponential-map, Gauss lemma,
normal-neighborhood, minimizing-geodesic, completeness, and Hopf–Rinow items
resolve through the declared ODE, flow, Riemannian metric, Levi–Civita,
compactness, and metric-completeness pages. No later curvature, Jacobi-field,
or topology page is used by the A scaffold. Remaining uncertainty: none.

VERDICT: no-drift

### grothendieck-spectral-sequences-and-computations

Owner reconciliation added the published backward `derived-categories` page
edge for the homotopically-injective interface. The Cartan–Eilenberg existence
item now uses the earlier published `def-dependent-choice` rather than a later
duplicate definition. The LHS five-term item defines inflation, restriction,
transgression, and the relevant edge maps directly from its spectral sequence,
so it no longer imports the later group-homology comparison page. All remaining
owners resolve through the corrected closure. Remaining uncertainty: none.

VERDICT: no-drift

### hurewicz-whitehead-freudenthal-and-cw-approximation

The AT design and batch-6 Hurewicz, Whitehead, cellular approximation,
Freudenthal, and CW-approximation dependencies resolve through
`relative-homology-excision-and-mayer-vietoris (order 366.005)`,
`cw-complexes-and-cellular-homology (order 366.007)`,
`higher-homotopy-groups-and-cofiber-sequences (order 366.019)`, and
`fibrations-fiber-bundles-and-homotopy-exact-sequences (order 366.021)`.
No external item owner escapes their transitive closure. Remaining uncertainty:
none.

VERDICT: no-drift

### measure-preserving-transformations-and-poincare-recurrence

The MT-22 and batch-1 recurrence, invariant-set, conservativity, finite-measure,
and locally compact Radon variants resolve through the declared ergodic,
measure/integration, topological, and sequence foundations. In particular the
current plan already carries `radon-measures-and-the-riesz-markov-kakutani-theorem
(order 288.039)`, which closes the locally compact Radon recurrence branch.
No item requires a later ergodic theorem. Remaining uncertainty: none.

VERDICT: no-drift

### nondeterministic-recursive-padding-and-time-separation

The batch-10 nondeterministic recursion theorem, padding, clocking, and time
separation arguments resolve through
`effective-numberings-reductions-resources-and-randomness (order 612.2)`,
`resource-bounds-and-machine-invariance (order 617)`, and
`robust-machine-models-and-universal-computation (order 599)`, already declared.
No SAT/TQBF theorem is used as a prerequisite. Remaining uncertainty: none.

VERDICT: no-drift

### orientations-poincare-lefschetz-and-alexander-duality

The AT-8 design uses only published relative homology/excision plus the earlier
in-run product page: `relative-homology-excision-and-mayer-vietoris (order
366.005)` and `cup-cap-cross-products-and-cohomology-rings (order 366.013)`.
The owner prerequisite audit explicitly authorized this in-run edge and found no
later smooth dependency; the detailed prose supplies the presently
pre-materialization item structure. Remaining uncertainty: none at the
prerequisite level.

VERDICT: no-drift

### sat-tableaux-and-quantified-space-completeness

The batch-10 definition of PSPACE/NPSPACE explicitly depends on DSPACE/NSPACE,
worst-case space complexity, and asymptotic machine invariance, and the TQBF
proof then uses the resulting configuration bound. Arora–Barak's complete
Theorem 4.11 proof likewise begins by defining and bounding reusable polynomial
space before proving TQBF membership and hardness. The owning page was absent
from the declared closure. I added the backward edge
`resource-bounds-and-machine-invariance (order 617)` to this page at order
620.2; owner reconciliation verified and retained that correction. Remaining
uncertainty: none.

VERDICT: no-drift

### the-de-rham-theorem-and-degree

The DG-17 design and batch-7 comparison, integration, de Rham isomorphism,
compact support, degree, and duality items are covered by the declared smooth,
singular, homological-algebra, and free-module prerequisites. The only same-run
inputs are the explicitly authorized earlier AT-7 and AT-8 pages,
`cup-cap-cross-products-and-cohomology-rings (order 366.013)` and
`orientations-poincare-lefschetz-and-alexander-duality (order 366.015)`.
No forward in-run edge remains. Remaining uncertainty: none.

VERDICT: no-drift

### the-forcing-theorem-and-formal-consistency-transfer

The batch-11 atomic/formula forcing recursion, truth lemma, ZF/ZFC preservation,
ordinal preservation, Boolean completion, CTM semantic theorem, and formal
finite-fragment transfer resolve through
`forcing-orders-names-and-generic-extensions (order 679)` and
`arithmetization-incompleteness-and-relative-consistency (order 659)` and their
published closures. The formal result does not infer a CTM from consistency,
and no dependency enters the deferred “Set Theory Beyond Choice” catalogue.
Remaining uncertainty: none.

VERDICT: no-drift

### the-weyl-kac-character-formula

The RL-15 design needs generalized Cartan/Kac–Moody foundations, integrable
highest-weight modules, and the affine specialization from the earlier in-run
RL-13 page. The canonical plan already records
`affine-lie-algebras-and-loop-central-extensions (order 510.025)` between
`kac-moody-algebras-from-generalized-cartan-matrices (order 510.023)` and this
page at order 510.029, as explicitly authorized by the owner prerequisite audit.
The pre-materialization batch manifest's shorter page-level list is therefore
stale relative to, but not a gap in, the canonical plan closure. Remaining
uncertainty: none at the prerequisite level.

VERDICT: no-drift

### weak-and-weak-star-topologies

The FA-8 weak/weak-star topology, convergence, lower-semicontinuity,
annihilator, transpose, metrizability, and non-first-countability items resolve
through `locally-convex-spaces-and-continuous-separation (order 288.0603)`,
`nets-and-filters (order 259)`, and their transitive Hahn–Banach, topology, and
choice interfaces. The item-owner audit found no supplier outside that closure.
Remaining uncertainty: none.

VERDICT: no-drift

## Validation and owner closure

After owner reconciliation, the final mandated invocation
`node tools/validate-plan.mjs research/plan-spec.json` exits 0 with the plan
acyclic, consistent, and free of forbidden Foundations boundary paths.
`manifest-deps.mjs` reports 455 items and zero dependency errors. The
manifest-only content-policy pass reports only the eight intentional missing
items on the two newly admitted candidate scaffolds (AT-8 and RL-13), which are
the engine's materialization work rather than Step-1 drift. No prerequisite
decision remains blocked; the engine remains responsible for materialization.
