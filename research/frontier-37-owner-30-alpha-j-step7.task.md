# Step 7 adjudication — group **j**, run `frontier-37-owner-30`

You are the group Alpha for batches **24**, **28**, **30**: 3 A/B pair(s), 6 page(s), 90 item(s), 0 open rejection(s) over 0 item(s).

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
| 24 | `logarithmic-potential-capacity-and-riesz-decomposition` | A | complex-analysis | 833 | `subharmonic-functions-and-the-dirichlet-problem`, `product-measures-and-the-fubini-tonelli-theorems`, `radon-measures-and-the-riesz-markov-kakutani-theorem`, `banach-alaoglu-goldstine-and-krein-milman`, `distributions-test-functions-and-differentiation`, `fundamental-solutions-newtonian-potentials-and-green-functions`, `green-functions-harmonic-measure-and-conformal-invariance`, `weak-derivatives-and-sobolev-spaces`, `weak-convergence-tightness-and-representation` |
| 24 | `logarithmic-potential-capacity-and-riesz-decomposition-examples` | B | complex-analysis | 834 | `logarithmic-potential-capacity-and-riesz-decomposition`, `infinite-products-and-weierstrass-factorisation`, `hausdorff-measure-and-hausdorff-dimension` |
| 28 | `hyperbolic-riemann-surfaces-and-uniformization` | A | complex-analysis | 857 | `conformal-mapping-branches-and-the-schwarz-lemma`, `the-riemann-mapping-theorem`, `covering-spaces-and-lifting`, `classification-of-covering-spaces`, `harmonic-functions-and-mean-values-in-rn`, `riemann-surfaces-branched-maps-and-differentials`, `green-functions-harmonic-measure-and-conformal-invariance`, `sublevel-deformation-and-the-handle-attachment-theorem`, `weak-derivatives-and-sobolev-spaces`, `dirichlets-unit-theorem-regulators-and-s-units` |
| 28 | `hyperbolic-riemann-surfaces-and-uniformization-examples` | B | complex-analysis | 858 | `hyperbolic-riemann-surfaces-and-uniformization` |
| 30 | `analytic-hypersurfaces-and-local-parametrisation` | A | complex-analysis | 869 | `holomorphic-inverse-and-weierstrass-preparation`, `modules-and-module-homomorphisms`, `noetherian-rings-and-hilbert-basis`, `localisation-of-modules-and-support`, `krull-dimension-and-height-theorems`, `the-dbar-complex-and-integral-solutions`, `fundamental-solutions-newtonian-potentials-and-green-functions` |
| 30 | `analytic-hypersurfaces-and-local-parametrisation-examples` | B | complex-analysis | 870 | `analytic-hypersurfaces-and-local-parametrisation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `logarithmic-potential-capacity-and-riesz-decomposition` — Logarithmic Potential, Capacity, and Riesz Decomposition (24 item(s))

- `def-support-of-a-borel-measure` · definition — Support of a finite Borel measure on the plane
- `def-logarithmic-potential-and-energy` · definition — Logarithmic potential and energy of a positive compactly supported measure
- `def-logarithmic-capacity-compact-set` · definition — Robin constant and logarithmic capacity of a compact set
- `thm-logarithmic-energy-well-defined-and-lower-semicontinuous` · theorem — Lower semicontinuity of logarithmic potential and energy
- `lem-logarithmic-energy-strict-positivity-for-zero-mass-charges` · lemma — Strict positivity of logarithmic energy for a zero-mass signed charge
- `thm-equilibrium-measure-existence-and-uniqueness` · theorem — Existence and uniqueness of the equilibrium measure
- `def-polar-set-and-quasi-everywhere` · definition — Capacity-polar sets, quasi-everywhere, and subharmonic polar sets
- `lem-logarithmic-potential-maximum-principle` · lemma — Maximum principle for a compact logarithmic potential
- `thm-frostman-equilibrium-theorem` · theorem — Frostman inequalities and quasi-everywhere equilibrium equality
- `prop-reciprocity-inequality-for-logarithmic-potential` · proposition — Reciprocity inequality for logarithmic potentials
- `def-chebyshev-constant-compact-set` · definition — Chebyshev constant of a compact planar set
- `lem-chebyshev-constant-is-submultiplicative-root-limit` · lemma — The Chebyshev constant is the root limit of monic extremal norms
- `lem-monic-polynomial-capacity-lower-bound` · lemma — Monic polynomial lower bounds for the Chebyshev constant and capacity
- `def-riesz-measure-subharmonic-function` · definition — Distributional Riesz measure of a plane subharmonic function
- `thm-riesz-measure-is-positive-radon` · theorem — The distributional Laplacian of a subharmonic function is a positive Radon measure
- `lem-logarithmic-potential-distributional-laplacian` · lemma — Distributional Laplacian of a compact logarithmic potential
- `thm-riesz-decomposition-subharmonic-plane` · theorem — Local Riesz decomposition of a plane subharmonic function
- `lem-compact-polar-sets-and-subharmonic-minus-infinity-loci` · lemma — Compact capacity-zero sets and subharmonic polar loci
- `thm-principle-of-descent-and-domination` · theorem — Principle of descent and the logarithmic domination principle
- `def-green-function-with-pole-at-infinity` · definition — Green function with a pole at infinity
- `thm-green-function-from-equilibrium-potential` · theorem — Green function at infinity from the equilibrium potential
- `def-fekete-points-and-transfinite-diameter` · definition — Fekete points and the transfinite diameter of a compact set
- `lem-fekete-diameters-decrease` · lemma — Monotonicity of normalized Fekete diameters
- `thm-logarithmic-capacity-equals-transfinite-diameter` · theorem — Fekete–Szegő equality of logarithmic capacity, transfinite diameter, and Chebyshev constant

### `logarithmic-potential-capacity-and-riesz-decomposition-examples` — Logarithmic Potential, Capacity, and Riesz Decomposition: Examples and Counterexamples (8 item(s))

- `ex-logarithmic-capacity-of-disc-and-equilibrium-circle` · example — Capacity of a disc and its circular equilibrium measure
- `ex-logarithmic-capacity-of-a-real-interval` · example — Arcsine equilibrium measure and capacity of a segment
- `ex-chebyshev-extremal-polynomials-and-capacity` · example — Chebyshev extremals and the exact disk Fekete polynomial
- `ex-chebyshev-extremal-nodes-and-arcsine-measure` · example — Chebyshev extremal nodes converge to the arcsine equilibrium measure
- `ex-finite-and-countable-sets-are-logarithmically-polar` · example — Finite and countable planar sets have zero logarithmic capacity
- `ex-cantor-sets-with-positive-and-zero-logarithmic-capacity` · example — Two Cantor sets with different logarithmic capacities
- `ex-riesz-measure-of-log-modulus-is-zero-divisor` · example — Riesz measure of a log modulus records the holomorphic zeros
- `ex-green-function-of-a-circular-conductor` · example — Infinity-pole Green function recovered from a circular conductor

### `hyperbolic-riemann-surfaces-and-uniformization` — Hyperbolic Riemann Surfaces and Uniformization (24 item(s))

- `def-properly-discontinuous-group-action` · definition — Free and properly discontinuous group actions
- `lem-holomorphic-structure-lifts-to-covering-surface` · lemma — A universal covering of a Riemann surface inherits a unique holomorphic atlas
- `lem-biholomorphic-invariance-of-plane-subharmonicity` · lemma — Plane subharmonicity is invariant under biholomorphic change of coordinate
- `def-harmonic-and-subharmonic-riemann-surface-functions` · definition — Chartwise harmonic and subharmonic functions on a Riemann surface
- `lem-locality-of-subharmonicity` · lemma — Locality of subharmonicity in the plane and on Riemann surfaces
- `lem-harmonic-conjugates-and-log-pole-monodromy-on-surfaces` · lemma — Harmonic conjugates and integral logarithmic-pole monodromy on surfaces
- `lem-regular-exhaustion-and-dirichlet-on-riemann-surfaces` · lemma — Regular exhaustion and Dirichlet solutions on relatively compact surface domains
- `def-canonical-green-kernel-riemann-surface` · definition — Canonical Green kernel on a Riemann surface
- `lem-green-envelope-dichotomy-and-logarithmic-pole` · lemma — Green envelope dichotomy, pole and leastness on a Riemann surface
- `lem-green-kernel-exists-after-removing-a-chart-disc` · lemma — Removing a compact chart disc gives a Greenian surface
- `lem-surface-green-identity-on-smooth-bordered-domain` · lemma — Green second identity on a smooth bordered Riemann-surface domain
- `lem-green-kernel-symmetry-on-riemann-surfaces` · lemma — Symmetry of the canonical surface Green kernel
- `lem-weak-harmonic-limits-on-riemann-surfaces` · lemma — Locally bounded harmonic families have harmonic subsequential limits
- `lem-green-function-uniformizes-simply-connected-surface` · lemma — A simply connected Greenian Riemann surface is a disc
- `lem-dipole-green-function-on-riemann-surface` · lemma — A dipole Green function exists on a Riemann surface
- `lem-nongreen-simply-connected-surface-is-plane-or-sphere` · lemma — A simply connected surface without a Green kernel is plane or sphere
- `lem-three-simply-connected-models-are-inequivalent` · lemma — The sphere, plane and disc are pairwise biholomorphically distinct
- `thm-uniformization-simply-connected-riemann-surfaces` · theorem — Uniformization of simply connected Riemann surfaces
- `def-universal-covering-type-riemann-surface` · definition — Spherical, parabolic and hyperbolic universal-covering types
- `cor-universal-cover-classification-riemann-surfaces` · corollary — Every Riemann surface is a quotient of a simply connected model
- `def-poincare-metric-hyperbolic-riemann-surface` · definition — Poincaré metric on a hyperbolic Riemann surface
- `thm-deck-transformations-are-hyperbolic-isometries` · theorem — Deck transformations preserve the hyperbolic metric
- `lem-cocompact-free-affine-plane-action-is-a-lattice` · lemma — A compact free affine plane quotient comes from a rank-two lattice
- `cor-compact-genus-determines-uniformization-type` · corollary — Compact genus determines universal-covering type

### `hyperbolic-riemann-surfaces-and-uniformization-examples` — Hyperbolic Riemann Surfaces and Uniformization: Examples and Counterexamples (5 item(s))

- `ex-hyperbolic-disc-and-half-plane-geodesics` · example — Hyperbolic distances and geodesics in disc and half-plane
- `ex-annulus-and-punctured-disc-hyperbolic-covers` · example — Annulus and punctured disc have hyperbolic universal covers
- `ex-complex-torus-parabolic-deck-lattice` · example — A complex torus has a lattice of parabolic deck translations
- `ex-genus-two-cocompact-fuchsian-quotient` · example — A genus-two compact surface gives a cocompact Fuchsian group
- `ex-three-uniformization-models-are-distinct` · example — Compactness and Liouville distinguish the three models

### `analytic-hypersurfaces-and-local-parametrisation` — Analytic Hypersurfaces and Local Parametrisation (21 item(s))

- `def-reduced-holomorphic-germ-for-hypersurface` · definition — Reduced holomorphic germ for a hypersurface
- `lem-square-free-reduction-of-holomorphic-germ` · lemma — Square-free reduction of a holomorphic equation
- `lem-reduced-prepared-polynomial-has-nonzero-discriminant` · lemma — Reduced preparation has nonzero discriminant
- `thm-weierstrass-finite-projection-hypersurface-germ` · theorem — Finite local projection of a reduced hypersurface germ
- `def-discriminant-and-branch-locus-weierstrass-hypersurface` · definition — Discriminant and branch set of a fixed Weierstrass projection
- `lem-reduced-prepared-hypersurface-remains-reduced-near-germ` · lemma — A reduced prepared hypersurface stays reduced nearby
- `lem-vanishing-ideal-of-a-reduced-hypersurface-germ` · lemma — The vanishing ideal of a reduced hypersurface germ is principal
- `def-complex-analytic-hypersurface-germ-and-reduced-equation` · definition — Complex-analytic hypersurface germ and its reduced equation
- `def-irreducible-hypersurface-germ` · definition — Irreducible hypersurface germs and their components
- `def-regular-singular-point-analytic-hypersurface` · definition — Regular and singular points of an analytic hypersurface
- `lem-irreducible-holomorphic-germ-is-prime` · lemma — Irreducible holomorphic germs are prime
- `thm-local-irreducible-decomposition-hypersurface-germ` · theorem — Finite unique irreducible components of a hypersurface germ
- `lem-dimension-of-holomorphic-germ-ring` · lemma — Krull dimension of the holomorphic germ ring
- `def-local-dimension-hypersurface-germ` · definition — Local Krull dimension of a hypersurface germ
- `thm-hypersurface-germs-have-pure-codimension-one` · theorem — Reduced hypersurface germs have pure codimension one
- `thm-singular-locus-reduced-hypersurface` · theorem — Singular locus of a reduced analytic hypersurface
- `lem-connected-cover-of-punctured-disc-for-irreducible-plane-curve` · lemma — Irreducible plane curve gives a connected punctured covering
- `thm-puiseux-parametrisation-plane-curve-germ` · theorem — Convergent Puiseux parametrisation of an irreducible plane branch
- `def-total-quotient-ring-and-normalisation-of-reduced-plane-curve-germ` · definition — Total quotient ring and normalisation of a reduced plane curve germ
- `lem-total-fractions-split-over-hypersurface-branches` · lemma — Total fractions split over the branches of a reduced hypersurface
- `cor-normalisation-plane-curve-germ` · corollary — Puiseux discs normalise a reduced plane curve germ

### `analytic-hypersurfaces-and-local-parametrisation-examples` — Analytic Hypersurfaces and Local Parametrisation: Examples and Counterexamples (8 item(s))

- `ex-regular-hyperplane-hypersurface-germ` · example — A regular hyperplane has a one-sheeted projection
- `ex-ordinary-node-plane-curve-germ` · example — An ordinary node has two smooth branches
- `ex-cusp-puiseux-y-two-equals-x-three` · example — The cusp y²=x³ has Puiseux parameter (t²,t³)
- `ex-crossing-coordinate-axes-hypersurface` · example — The coordinate axes form a reduced crossing
- `ex-nonreduced-equation-same-hypersurface-germ` · example — A nonreduced equation can hide a smooth hypersurface
- `cex-projection-branch-locus-is-not-singular-locus` · counterexample — A branched projection of a smooth hypersurface
- `ex-cusp-puiseux-y-two-equals-x-five` · example — The plane branch y²=x⁵ has Puiseux parameter (t²,t⁵)
- `rem-general-analytic-sets-need-more-than-hypersurface-arguments` · remark — The single-equation proof does not cover arbitrary analytic sets

## Your seams

Your pages depend on another group's:

- `hyperbolic-riemann-surfaces-and-uniformization` requires `dirichlets-unit-theorem-regulators-and-s-units` (group a, batch 3)

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
