# Alpha

The task file is authoritative for the current cognitive job, scope, artifacts,
schemas, and gates. Read it with [README.md](../README.md),
[SCHEMA.md](../SCHEMA.md), and [WORKFLOW.md](../WORKFLOW.md) before acting.
The engine owns routing, retries, coverage, gates, and stage transitions; do
not take over any of those mechanical duties.

`tools/models.mjs` and `tools/dispatch.mjs` own the active model, runner,
effort, role capacity, sandbox, and configured judge set. Do not name or
override a model or judge lineup in your work. Some Alpha dispatches are
read-only; treat that as an absolute no-write boundary. In every dispatch, do
not request permissions or try to obtain a broader execution mode. Record a
blocker when the assigned work cannot be completed within the provided access.

## Scope and ownership

Use the `# This dispatch` identity and task to determine the work you own. For
group work, `research/frontier-32-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol; otherwise
report the issue without changing it.

## Review and repair standard

Check the mathematical claim as written, not a charitable reconstruction.
Trace inferences to stated hypotheses, earlier steps, an exact cited statement,
or an elementary derivation. Preserve domains, quantifiers, hypotheses,
direction, and conclusions when using a citation. Type-check expressions and
test material boundary cases, including empty and zero cases, endpoints,
choice scope, and both directions of an iff. Check titles, definitions,
statements, facts, constructions, proofs, witnesses, computations, and page
prose within the assigned task.

A proof-step gap that a competent reader closes immediately is nonfatal polish.
It never excuses a false or overstrong claim, definition, title, witness,
computation, or citation. Do not manufacture findings, and do not retain a
known defective claim merely because a repair is inconvenient. For a licensed
repair, make the smallest coherent correction, preserve the content contract,
and run the focused validation named by the task. A material rewrite invalidates
its prior `verification.judge` record.

## Judge and evidence discipline

Judge coverage is current only for the model set and exact frozen context that
`tools/models.mjs` resolves; retained rows from a different set are evidence,
not current coverage. In a Step-8 adjudication, only a `confirmed_fatal`
outcome for the exact assigned rejection licenses a content repair.
`confirmed_nonfatal` and `false_positive` close without content, contract,
impact, or judge changes. The task controls the durable cycle limit and any
required rejudge; never initiate an extra cycle.

Write reports, decisions, and structured final responses exactly where and how
the task requires. Use the prescribed append interface for shared JSONL
ledgers. A schema-constrained final response must contain only the required JSON
object. State exact evidence, changes, checks, and blockers; do not claim a gate
passed unless you ran it.


---

# This dispatch

run: frontier-32
role: alpha-adjudicate
label: step8-c
covers: 4, 14, 15

# Step 8 adjudication — group **c**, run `frontier-32`

You are the group Alpha for batches **4**, **14**, **15**: 3 A/B pair(s), 6 page(s), 110 item(s), 37 open rejection(s) over 37 item(s).

This is a fresh adjudication context. The durable digest below carries the
findings from the rejection-blind whole-group reading at step 7 without
replaying that reader's transcript. Nothing from step 3, step 6, or another
group is assumed.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-32-alpha-c-step8-context.json` is what a group Alpha for this group wrote during step 7,
while the judges were still sweeping and no verdict existed. It records the
conventions your pages fix, which items the rest lean on, which published
dependencies were actually opened, and what already looked thin.

**Its `concerns` list is evidence, not decoration.** Each entry was found with
nobody suggesting where to look. A judge rejection landing at the same place is
two independent readings agreeing and should be very hard to call a
`false_positive`; a rejection landing nowhere near any of them is not thereby
wrong, but it is the case to read most carefully against the text.

It is notes, not authority. Where it and the item files disagree, the files win.

## Read scope, write scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-32-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 4 | `the-baire-principles-of-functional-analysis` | A | functional-analysis | 288.057 | `geometric-hahn-banach-and-convex-separation-examples` |
| 4 | `the-baire-principles-of-functional-analysis-examples` | B | functional-analysis | 288.058 | `the-baire-principles-of-functional-analysis` |
| 14 | `harmonic-functions-and-mean-values-in-rn` | A | pde | 458.003 | `quasilinear-characteristics-and-cauchy-kovalevskaya-examples`, `the-divergence-theorem-and-classical-stokes`, `the-maximal-function-and-lebesgue-differentiation` |
| 14 | `harmonic-functions-and-mean-values-in-rn-examples` | B | pde | 458.004 | `harmonic-functions-and-mean-values-in-rn`, `complex-differentiability-and-cauchy-riemann` |
| 15 | `manifolds-with-boundary-collars-and-orientations` | A | differential-geometry | 467 | `smooth-manifolds-and-smooth-maps`, `smooth-partitions-of-unity-and-exhaustions`, `tangent-cotangent-and-the-differential`, `rank-theorems-and-embedded-submanifolds`, `smooth-vector-bundles-and-sections`, `sard-theorem-and-transversality`, `euclidean-ordinary-differential-equations-with-smooth-dependence`, `vector-fields-flows-and-lie-derivatives`, `distributions-integral-manifolds-and-the-frobenius-theorem`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `exterior-powers-orientation-and-hodge-duality` |
| 15 | `manifolds-with-boundary-collars-and-orientations-examples` | B | differential-geometry | 468 | `manifolds-with-boundary-collars-and-orientations` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-baire-principles-of-functional-analysis` — The Baire Principles of Functional Analysis (16 item(s))

- `thm-uniform-boundedness-principle` · theorem — Uniform boundedness principle
- `thm-banach-steinhaus-dichotomy` · theorem — Baire dichotomy for a pointwise-defined family of bounded linear operators
- `cor-pointwise-limit-of-bounded-operators-is-bounded` · corollary — A pointwise limit of bounded operators is bounded with the liminf norm bound
- `lem-sokal-local-operator-norm-lower-bound` · lemma — A nonzero bounded linear operator is large on one of two nearby points
- `thm-sokal-gliding-hump-uniform-boundedness` · theorem — Sokal's gliding-hump proof of uniform boundedness
- `lem-open-mapping-ball-closure-step` · lemma — The closure of a bounded image contains a ball
- `lem-open-mapping-successive-approximation` · lemma — Successive approximation turns a closure-ball inclusion into an actual preimage
- `thm-open-mapping-theorem` · theorem — Open mapping theorem
- `cor-open-mapping-quantitative-form` · corollary — Quantitative lifting form of the open mapping theorem
- `thm-bounded-inverse-theorem` · theorem — Bounded inverse theorem
- `def-graph-of-a-linear-operator` · definition — The graph of a linear operator with a linear domain
- `thm-closed-graph-theorem` · theorem — Closed graph theorem
- `def-closable-linear-operator` · definition — A closable densely defined linear operator
- `thm-closability-sequential-criterion` · theorem — Sequential criterion for closability
- `cor-separately-continuous-bilinear-map-on-banach-spaces-is-jointly-continuous` · corollary — A separately continuous bilinear map on Banach spaces is jointly continuous
- `cor-equivalent-complete-norms-from-one-sided-comparison` · corollary — A one-sided comparison of two complete norms makes them equivalent

### `the-baire-principles-of-functional-analysis-examples` — The Baire Principles of Functional Analysis — Examples (5 item(s))

- `ex-condensation-of-singularities` · example — Condensation of singularities
- `cex-uniform-boundedness-fails-on-an-incomplete-domain` · counterexample — Uniform boundedness fails on the incomplete space c_00
- `cex-open-mapping-fails-without-completeness` · counterexample — A bounded bijection of incomplete normed spaces need not be open
- `cex-closed-graph-fails-without-completeness` · counterexample — A closed everywhere-defined graph need not be bounded without completeness
- `ex-a-closed-unbounded-differential-operator` · example — Differentiation on C^1[0,1] is closed and unbounded in the supremum norm

### `harmonic-functions-and-mean-values-in-rn` — Harmonic Functions and Mean Values in Rn (16 item(s))

- `def-distributional-harmonicity-and-poisson-equation-in-rn` · definition — Distributional harmonicity and Poisson's equation on an open subset of Rn
- `def-spherical-averages-and-local-ball-means-in-rn` · definition — Spherical averages and local ball means in Rn
- `lem-sphere-and-ball-measures-scale` · lemma — Surface and volume measures of Euclidean spheres and balls scale with radius
- `lem-radial-derivative-of-a-spherical-average` · lemma — The radial derivative of a spherical average
- `thm-spherical-mean-value-property-for-harmonic-functions` · theorem — Harmonic functions equal their spherical averages
- `cor-ball-mean-value-property-for-harmonic-functions` · corollary — Harmonic functions equal their ball averages
- `def-radial-mollifier-family-in-rn` · definition — A radial mollifier family in Rn
- `lem-radial-mollification-fixes-local-mean-value-functions` · lemma — Radial mollification fixes a function with the local ball mean-value property
- `thm-continuous-mean-value-functions-are-harmonic` · theorem — A continuous function with the ball mean-value property is harmonic
- `cor-local-mean-value-property-is-enough` · corollary — The local ball mean-value property already implies harmonicity
- `lem-distributional-laplacian-commutes-with-mollification` · lemma — The distributional Laplacian commutes with mollification on shrunken domains
- `thm-weyl-lemma-for-the-laplacian` · theorem — Weyl's lemma for the Laplacian
- `cor-locally-integrable-weakly-harmonic-functions-are-smooth` · corollary — A locally integrable weakly harmonic function has a smooth harmonic representative
- `lem-derivatives-of-harmonic-functions-are-harmonic` · lemma — Derivatives of harmonic functions are harmonic
- `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic` · theorem — Locally uniform limits of harmonic functions are harmonic
- `rem-plane-harmonic-theory-is-owned-by-complex-analysis` · remark — Plane-specific harmonic theory remains owned by complex analysis

### `harmonic-functions-and-mean-values-in-rn-examples` — Harmonic Functions and Mean Values in Rn — Examples (6 item(s))

- `ex-affine-and-harmonic-polynomial-functions` · example — Affine functions and mixed quadratic monomials are harmonic
- `ex-real-and-imaginary-parts-of-holomorphic-monomials` · example — The real and imaginary parts of holomorphic monomials
- `ex-radial-harmonic-functions-away-from-the-origin` · example — Radial harmonic functions away from the origin
- `cex-harmonic-on-a-punctured-domain-need-not-extend` · counterexample — A harmonic function on a punctured domain need not extend across the puncture
- `cex-one-centred-ball-mean-identity-does-not-force-harmonicity` · counterexample — One centred ball-mean identity does not force harmonicity
- `ex-distributional-harmonicity-removes-an-apparent-corner` · example — Distributional harmonicity removes an apparent interior corner

### `manifolds-with-boundary-collars-and-orientations` — Manifolds with Boundary Collars and Orientations (55 item(s))

- `def-euclidean-upper-half-space-and-its-boundary` · definition — Euclidean upper half-space and its boundary
- `def-smooth-function-on-a-relatively-open-subset-of-a-half-space` · definition — Smooth functions on relatively open half-space sets
- `lem-smooth-half-space-extensions-have-the-same-derivatives-on-the-half-space` · lemma — Half-space extensions have the same derivatives on the half-space
- `prop-chain-rule-for-smooth-half-space-maps` · proposition — Chain rule for smooth half-space maps
- `def-topological-manifold-with-boundary` · definition — Topological manifolds with boundary
- `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` · definition — Smooth charts, atlases, and structures with boundary
- `def-smooth-map-between-manifolds-with-boundary` · definition — Smooth maps between manifolds with boundary
- `lem-smoothness-at-the-boundary-is-independent-of-charts-and-extensions` · lemma — Boundary smoothness is independent of charts and extensions
- `def-interior-point-boundary-point-interior-and-boundary-of-a-manifold` · definition — Interior and boundary of a manifold with boundary
- `thm-smooth-invariance-of-manifold-boundary` · theorem — Smooth invariance of the manifold boundary
- `cor-diffeomorphisms-preserve-interior-and-boundary` · corollary — Diffeomorphisms preserve interior and boundary
- `thm-the-interior-is-an-open-smooth-n-manifold` · theorem — The interior is an open smooth n-manifold
- `thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold` · theorem — The boundary of a positive-dimensional manifold is a closed embedded smooth (n-1)-manifold
- `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary` · proposition — Empty boundary is equivalent to being boundaryless
- `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary` · theorem — Smooth partitions of unity exist on manifolds with boundary
- `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary` · theorem — Tangent and cotangent bundles extend over a boundary
- `def-inward-outward-and-boundary-tangent-vectors` · definition — Inward, outward, and boundary-tangent vectors
- `prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane` · proposition — The boundary tangent space is the boundary-tangent hyperplane
- `def-boundary-defining-function` · definition — Boundary-defining functions
- `prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors` · proposition — Boundary-defining functions exist locally and detect inward vectors
- `thm-every-manifold-with-boundary-has-a-global-inward-pointing-vector-field-along-the-boundary` · theorem — A global inward-pointing boundary vector field exists
- `thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary` · theorem — Boundary-tangent fields have boundary-preserving local two-sided flows
- `thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary` · theorem — Inward-pointing fields have local forward semiflows at the boundary
- `def-smooth-collar-of-a-manifold-boundary` · definition — Smooth collars of a manifold boundary
- `thm-collar-neighborhood-theorem` · theorem — Collar neighborhood theorem
- `def-double-of-a-smooth-manifold-with-boundary` · definition — The double of a smooth manifold with boundary
- `thm-the-double-has-a-well-defined-smooth-structure` · theorem — The double has a well-defined smooth structure
- `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary` · corollary — Smooth functions and tensor fields extend locally across the boundary
- `def-smooth-immersion-and-embedding-for-manifolds-with-boundary` · definition — Immersions and embeddings for manifolds with boundary
- `def-embedded-smooth-submanifold-with-boundary` · definition — Embedded smooth submanifolds with boundary
- `thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts` · theorem — Boundary submanifolds of a boundaryless manifold have half-slice charts
- `def-neat-submanifold-of-a-manifold-with-boundary` · definition — Neat submanifolds of a manifold with boundary
- `thm-neat-submanifolds-have-boundary-adapted-slice-charts` · theorem — Neat submanifolds have boundary-adapted slice charts
- `thm-morse-sard-for-maps-from-manifolds-with-boundary` · theorem — Morse-Sard for maps from manifolds with boundary
- `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space` · definition — Determinant-line orientations of finite-dimensional real vector spaces
- `prop-orientations-and-positive-basis-classes-agree-in-positive-dimension` · proposition — Orientations and positive basis classes agree in positive dimension
- `def-oriented-smooth-manifold-and-oriented-chart` · definition — Oriented smooth manifolds and oriented charts
- `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension` · theorem — Positive oriented atlases characterize orientations in positive dimension
- `def-orientable-manifold` · definition — Orientable manifolds
- `thm-orientability-is-equivalent-to-a-nowhere-vanishing-top-form` · theorem — Orientability is equivalent to a nowhere-vanishing top form
- `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations` · proposition — Nonempty connected orientable manifolds have exactly two orientations
- `prop-pointwise-orientation-sign-of-a-local-diffeomorphism` · proposition — Pointwise orientation sign of a local diffeomorphism
- `def-product-orientation` · definition — Product orientations
- `def-induced-orientation-on-a-hypersurface-from-a-coorientation` · definition — Orientation induced on a hypersurface by a coorientation
- `def-induced-boundary-orientation` · definition — Induced boundary orientation
- `prop-boundary-orientation-is-independent-of-the-outward-vector-field` · proposition — Boundary orientation is independent of the outward vector field
- `prop-boundary-orientation-of-a-product-when-at-most-one-factor-has-boundary` · proposition — Boundary orientation of a product with at most one boundary factor
- `prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold` · proposition — An oriented transverse normal bundle orients an embedded submanifold
- `def-orientation-preserving-parametrization` · definition — Orientation-preserving parametrizations
- `fs-a-boundary-point-can-become-an-interior-point-under-another-smooth-chart` · false-statement — A smooth chart can turn a boundary point into an interior point
- `fs-the-tangent-space-at-a-boundary-point-has-dimension-n-minus-one` · false-statement — The tangent space at a boundary point has dimension n-1
- `fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold` · false-statement — Every boundary vector field has a local two-sided flow inside the manifold
- `fs-an-orientable-manifold-comes-with-a-canonical-orientation` · false-statement — An orientable manifold has a canonical orientation
- `fs-every-manifold-is-orientable` · false-statement — Every manifold is orientable
- `fs-the-boundary-orientation-is-given-by-inward-normal-first` · false-statement — Boundary orientation is inward-normal-first

### `manifolds-with-boundary-collars-and-orientations-examples` — Manifolds with Boundary Collars and Orientations — Examples (12 item(s))

- `ex-the-closed-half-space-as-a-manifold-with-boundary` · example — The closed half-space as a manifold with boundary
- `ex-the-closed-ball-and-its-sphere-boundary` · example — The closed ball and its sphere boundary
- `ex-the-cylinder-with-two-oppositely-oriented-boundary-components` · example — A cylinder with oppositely oriented boundary components
- `ex-the-boundary-of-an-oriented-interval` · example — The boundary of an oriented interval
- `ex-the-standard-collar-of-a-closed-ball` · example — The standard collar of a closed ball
- `ex-the-double-of-a-disk-is-a-sphere` · example — The double of a disk is a sphere
- `ex-the-mobius-band-is-nonorientable-with-oriented-circle-boundary` · example — The Mobius band is nonorientable although its boundary circle is orientable
- `ex-real-projective-space-is-orientable-exactly-in-odd-dimension` · example — Positive-dimensional real projective space is orientable exactly in odd dimension
- `ex-the-product-orientation-on-a-torus` · example — The product orientation on a torus
- `cex-a-submanifold-meeting-the-ambient-boundary-nonneatly` · counterexample — A submanifold meeting the ambient boundary nonneatly
- `cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line` · counterexample — An inward field without a negative-time flow in the half-line
- `ex-boundary-orientation-of-the-unit-sphere-by-the-outward-normal` · example — Boundary orientation of the unit sphere by the outward normal

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Step-7 reader warnings

3 warning(s) a Step-7 reader recorded in items you own.
They were read-only and could not repair or adjudicate them. You own these decisions.

- **s8a-c667527fa94e3c0e3e35ac45 · `def-spherical-averages-and-local-ball-means-in-rn`** (from group c, would-be-fatal) — The definition introduces M_u(x,r) and A_u(x,r), and then states their mean-value properties, without quantifying an open Omega or requiring u to be measurable and sphere/ball integrable. As written the displayed integrals need not exist for an arbitrary u.
- **s8a-bea9295dcfb0e3326be749b1 · `def-distributional-harmonicity-and-poisson-equation-in-rn`** (from group c, gap-a-reader-closes) — It defines a distribution as a continuous linear functional on C_c^infty(Omega) without specifying the test-function topology. The intended standard LF topology is recoverable, but continuity is otherwise undefined.
- **s8a-b4995ce770e4f4a663df4d20 · `cor-pointwise-limit-of-bounded-operators-is-bounded`** (from group c, gap-a-reader-closes) — Step 3.1 says that the preceding inequality along a subsequence with norms tending to the liminf yields the liminf bound, but the displayed preceding estimate used the global M. One must separately apply ||T_n x||<=||T_n||||x|| along that subsequence before passing to its limit.

Append one owning-group disposition per warning to `research/frontier-32-step8-alert-decisions.jsonl`.
A Step-7 reader warning may be adjudicated `confirmed_fatal` and repaired with exact
pre/post guard hashes. A later Step-8 cross-group alert still requires a real targeted
judge rejection; never reuse its source rejection as target evidence.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line` | `manifolds-with-boundary-collars-and-orientations-examples` | gpt-5.6-terra | `6ec4c13eabc6f8bb7a7945b16ebf9b2344bf4d27871b6e7635eb867a6339f171` |
| `cex-closed-graph-fails-without-completeness` | `the-baire-principles-of-functional-analysis-examples` | gpt-5.6-terra | `0b08d07b619ff665bfc8b44861bd7e080c4ef295221d43189ee31e0a1212883a` |
| `cex-one-centred-ball-mean-identity-does-not-force-harmonicity` | `harmonic-functions-and-mean-values-in-rn-examples` | gpt-5.6-terra | `c62adb9cbc7c952f9570c54dab59e0233d31c9c0cbb80b3a8ee0ed9cb9937dfa` |
| `cor-local-mean-value-property-is-enough` | `harmonic-functions-and-mean-values-in-rn` | gpt-5.6-terra | `4a439faab11a705656fe62c67c557d11625e2f2bac4e06b5ee219ce9ebd1ec7e` |
| `cor-pointwise-limit-of-bounded-operators-is-bounded` | `the-baire-principles-of-functional-analysis` | gpt-5.6-terra | `783c7817b11415e58f8301e68284590665d6b7cef2ecfcf644ece48c6d40ba9a` |
| `cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `2972e503ceab78a6dd2e4bbbf7efdb4f7d8a26a06e44205f6246cb4fe027a69a` |
| `def-closable-linear-operator` | `the-baire-principles-of-functional-analysis` | gpt-5.6-terra | `af010b52a6c06892447afe42e922802eb877dfaebbf88e8ce7acc9f3f6810810` |
| `def-determinant-line-orientation-of-a-finite-dimensional-real-vector-space` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `ec7f31d9ee42644927d5897ebede696593d5e7f729d6b32d7ed2988cc217552c` |
| `def-distributional-harmonicity-and-poisson-equation-in-rn` | `harmonic-functions-and-mean-values-in-rn` | gpt-5.6-terra | `a5ca8e6e0a6a9c536062b088c88974f6d58fc1e73a7922b2f3b2c223a078b2bf` |
| `def-interior-point-boundary-point-interior-and-boundary-of-a-manifold` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `3be5cd5373c3d650ccb8c9773128c7c98999f76db0ef823022c00c45fee4e10a` |
| `def-smooth-chart-atlas-and-structure-on-a-manifold-with-boundary` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `d33c7ff3c2609efa5945ec356643fc7814d5e175b8ee88d30c80f4b6e009219c` |
| `def-spherical-averages-and-local-ball-means-in-rn` | `harmonic-functions-and-mean-values-in-rn` | gpt-5.6-terra | `d6010a2076b727bbc267d1c0407f50bf8be809507402738b0ca89308ec99b1ed` |
| `ex-a-closed-unbounded-differential-operator` | `the-baire-principles-of-functional-analysis-examples` | gpt-5.6-terra | `3eafeb0efe7caf364bccb6f9fdae63585d74dd6a1f2fe51f5bf6151b37245ffa` |
| `ex-affine-and-harmonic-polynomial-functions` | `harmonic-functions-and-mean-values-in-rn-examples` | gpt-5.6-terra | `a93671b350b8bf02068122e52962159bbfe75401b8c74ea5c54fbb52172392f7` |
| `ex-distributional-harmonicity-removes-an-apparent-corner` | `harmonic-functions-and-mean-values-in-rn-examples` | gpt-5.6-terra | `3e411afb9c900a47bbdeba8c4c8c7a2ac0feb9ca9e6e9679cd86faa0aab3cc75` |
| `ex-radial-harmonic-functions-away-from-the-origin` | `harmonic-functions-and-mean-values-in-rn-examples` | gpt-5.6-terra | `023ce640af551d983e12b1ca0712029d73dd8c97a8d2b6067693c072aa91e071` |
| `ex-real-and-imaginary-parts-of-holomorphic-monomials` | `harmonic-functions-and-mean-values-in-rn-examples` | gpt-5.6-terra | `0ed7343c7bd7519632112e63b5edd499ea9d3334077780dafa53fff2f8ea964f` |
| `ex-real-projective-space-is-orientable-exactly-in-odd-dimension` | `manifolds-with-boundary-collars-and-orientations-examples` | gpt-5.6-terra | `51784c2697d4f08331e0df07e13e2af642d1b07d3a1ca0767729ba5e5436458a` |
| `ex-the-closed-ball-and-its-sphere-boundary` | `manifolds-with-boundary-collars-and-orientations-examples` | gpt-5.6-terra | `166ab917ffab5d61e4d2d3d2276c38c4bc3237410f85819634ed65d862c602a7` |
| `lem-open-mapping-successive-approximation` | `the-baire-principles-of-functional-analysis` | gpt-5.6-terra | `b6589ceb1c31a9bf93c7b72916096b1504d8dd5995696874454c22b15daa72a3` |
| `lem-radial-mollification-fixes-local-mean-value-functions` | `harmonic-functions-and-mean-values-in-rn` | gpt-5.6-terra | `71fc12dce384803c52d88a5cbe5592c4294e5de51321099c5ce5cce81b4aa01a` |
| `lem-sphere-and-ball-measures-scale` | `harmonic-functions-and-mean-values-in-rn` | gpt-5.6-terra | `ba8adc842d6c5be24e4efda1f163730079f436ed6ee7b7941412edd03b562362` |
| `prop-a-manifold-has-empty-boundary-if-and-only-if-it-is-a-manifold-without-boundary` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `8e72a91291437cdb6aeee2d4af20eddfcc6381808ee1cb5ba284d8947e9f23f9` |
| `prop-boundary-orientation-is-independent-of-the-outward-vector-field` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `8df8307ee0e7dfa8d7c0af82adad8e46645785e6b6a0ad2af52c393d671538aa` |
| `prop-nonempty-connected-orientable-manifolds-have-exactly-two-orientations` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `2559a7b7f430039de4213df271aadbab2471e85874523743d6f826d3d3d0a356` |
| `prop-pointwise-orientation-sign-of-a-local-diffeomorphism` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `528f353a08fa85002f77db5a25b6acde4687cd94c9ee6843d3039da7f7c21ce3` |
| `thm-boundary-submanifolds-of-a-boundaryless-manifold-have-half-slice-charts` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `10ce8b69eb886776d391c002bfab16d0922de2409253da993949a3a91f6cedd6` |
| `thm-closability-sequential-criterion` | `the-baire-principles-of-functional-analysis` | gpt-5.6-terra | `d6ba4bcded483b74d08d0162e5add8ad1816c333f88af68443e12c13a4966d47` |
| `thm-collar-neighborhood-theorem` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `7fdecec8a0b1d1c163e35f030c5f1ada09e8c8fe36485c99c4d9bbb01c227e11` |
| `thm-neat-submanifolds-have-boundary-adapted-slice-charts` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `8f39170820e1ad753825dba8af50e25ba924fa1af1998cb118469864ed7ee678` |
| `thm-open-mapping-theorem` | `the-baire-principles-of-functional-analysis` | gpt-5.6-terra | `94271516c37c1608457d0c6e7b7f9aa05485945e6f0a7ba5b7881773a1d6c4c9` |
| `thm-oriented-atlases-and-continuous-tangent-space-orientations-are-equivalent-in-positive-dimension` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `ba220b2c856a7e9e7c2928f42e10785bc604daea55b1d6ce713fc28e9cb84498` |
| `thm-smooth-partitions-of-unity-exist-on-manifolds-with-boundary` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `faf270bd45629d1928f335a18facff17c3fde096d63f0a6a9d3eee32e47779ba` |
| `thm-tangent-and-cotangent-bundles-extend-over-a-manifold-boundary` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `47fe4493bdf25f5df7475897e6ce7f570360b7e2f6a94c51fe40c82ebb06608c` |
| `thm-the-double-has-a-well-defined-smooth-structure` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `b5b5d93fc7c2d0180ac48072dbff0773b9f084b036d5d6198f590e67073a811f` |
| `thm-the-interior-is-an-open-smooth-n-manifold` | `manifolds-with-boundary-collars-and-orientations` | gpt-5.6-terra | `e1383b3659e9f463e6b8aa3e85d7616c0c2eda5d64d4dd25839c634c872f1e31` |
| `thm-uniform-limits-on-compacta-of-harmonic-functions-are-harmonic` | `harmonic-functions-and-mean-values-in-rn` | gpt-5.6-terra | `a49012507196b6d96600d0466d86e6aebac7914ee772b89623e0255e6461ee3c` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only judge and reader-warning adjudication, `frontier-32`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Web search is available in this role. If any mathematics is uncertain, use it
and verify the point against original sources before deciding the outcome or
making a repair. Record the sources consulted and the exact claim each source
supports in the group report; do not resolve uncertainty from memory or a
secondary summary alone.

Append one row per rejection to `research/frontier-32-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

Every entry under **Step-7 reader warnings** also requires an owning-group
decision in `research/frontier-32-step8-alert-decisions.jsonl`. Use `not_defect` or
`nonfatal` when no content change is warranted, and `covered_by_rejection` when
an exact judge rejection already licenses the same repair. If a Step-7 reader
warning is independently `confirmed_fatal`, record `defect_type`, the full
pre-edit `itemHashGuard` digest as `item_sha256`, the full repaired digest as
`post_sha256`, repair the item before returning, and add exactly one matching
defect-ledger row whose structured `adjudication_ref` contains this `alert_id`,
`item`, and `item_sha256`. Only Step-7 reader warnings have this direct fatal
licence; later cross-group alerts raised while
adjudicating a judge rejection still require a targeted judge rejection.

A warning may name an owned page, for example a missing prerequisite page.
Read the page and its declared prerequisites and retain an explicit disposition.
A page warning grants no item-edit authority: identify the affected item and its
fatal evidence, or report an unresolved page defect with
`confirmed_fatal_unlicensed`. Never dismiss it merely because it names a page.

Every `confirmed_fatal` row must also set `defect_type` to exactly one of
`logic`, `dependency_citation`, or `other`. Descriptive defect-ledger subclasses
such as `invalid-inference`, `false-claim`, or `ill-typed-construction` are not
valid adjudication `defect_type` values.

For every reader warning, append the owning-group disposition to
`research/frontier-32-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-32-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-32-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.


## Mathematical context continuity

Read exact task paths first. Search current owned artifacts before historical runs;
exclude dispatch logs from routine content searches. Fetch complete relevant source
sections and dependency statements, using bounded output chunks. A truncated result
is not evidence of absence; continue reading until the required argument is complete.
Do not dump entire ledgers, source books, or repository-wide search results into context.

For writing roles, after each completed item update the task-authorized notes or report with the
current item IDs, exact claim and conventions, source paths/URLs and locators,
dependency IDs, decisions, validation results, unresolved obligations, and next action.
Automatic compaction can occur mid-proof. After compaction or handoff, reread the
current item, relevant dependency statements, source passages, and these obligations
before continuing a proof or repair. A summary is a navigation aid, never a substitute
for mathematical evidence. If a hypothesis or source qualification cannot be
recovered, record the blocker rather than infer it. Preserve all independent reviews
and exact-hash gates. Never mark an unfinished obligation complete to save context.
Checkpoint only in the task-authorized notes/report; do not create transcripts or alter other owners’ artifacts.
