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
label: step8-close-c-2

# Exact Step-8 repair envelope — 8-close, round 2

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
complete relevant diagnostic records, exact current rejection tuples, and explicit run/published ownership.
The full_evidence file retains the original untruncated battery output and all ownership assignments.
Read its relevant sections if a diagnostic is ambiguous; do not infer absence from this scoped view.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-32",
  "stage": "8-close",
  "round": 2,
  "mode": "close",
  "group": "c",
  "full_evidence": "research/frontier-32-8-close-repair-evidence-2-e99fd7ad2b7d38c8035eb3fe22b3b95379e9e794b607e40ef0a7f3018436b1cd.json",
  "full_evidence_sha256": "e99fd7ad2b7d38c8035eb3fe22b3b95379e9e794b607e40ef0a7f3018436b1cd",
  "failures": [
    {
      "id": "boundary-audit",
      "stage": "8-close",
      "why": "Every line above is a candidate for a human read, not a verdict.",
      "output": "boundary-audit: 3832 rows over 1 contract file(s); 3121 marked not_applicable\n\nTEMPLATE REUSE — 9 cluster(s) at or above 3 members.\nA rationale shared across many items is not a determination about any of them.\n\n  7 rows · axes: degenerate, empty, iff-forward, iff-reverse, nonempty-choice, one, zero\n    \"Step 1.1 uses only nonempty irreducible closed subsets and identifies singleton points. Steps 2.1–4.1 construct both inverse functors and prove finite-type, irr…\"\n    items: thm-classical-varieties-equivalent-integral-separated-finite-type-schemes\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 1.1–2.1 prove C is nonzero and Z nonempty; nonzero a_1 a_prime_1 is a function nonzero at some x. Step 3.1 handles a point factor. Empty varieties are exc…\"\n    items: thm-affine-variety-product-coordinate-ring\n\n  6 rows · axes: degenerate, empty, endpoints, nonempty-choice, one, zero\n    \"Steps 1.1–3.1 use the point test object, allow an empty fibre (unit ideal/zero ring), and take radicals so nonreduced scheme fibres are not asserted.\"\n    items: lem-fibre-as-base-change-to-point-classical\n\n  6 rows · axes: iff-forward, iff-reverse\n    \"This is a counterexample, not an equivalence.\"\n    items: lem-baire-diagonal-passage-from-finite-regularity-to-smooth-metrics, ex-a-morse-smale-height-function-on-a-tilted-torus, cex-symmetric-torus-height-flow-is-not-morse-smale\n\n  5 rows · axes: degenerate, endpoints, nonempty-choice, one, zero\n    \"Steps 2.1–3.1 handle unequal and zero bidegrees, d=0 constants and P^0 factors. A nonzero z_pq makes the balancing multiplier nonzero and the tuples cover the p…\"\n    items: thm-multihomogeneous-map-to-projective-space\n\n  4 rows · axes: degenerate, empty, nonempty-choice, zero\n    \"Step 2.1 proves maximal sequence existence from the finite dimension bound, includes the empty sequence in dimension zero, and uses the nonzero localization hyp…\"\n    items: lem-depth-at-a-prime-bounded-by-local-dimension\n\n  4 rows · axes: degenerate, endpoints, nonempty-choice, one\n    \"Step 3.1 covers a=1 or b=1 and P^0 factors; nonzero x_i,y_j give a nonzero monomial x_i^a y_j^b.\"\n    items: cor-segre-veronese-embedding\n\n  3 rows · axes: degenerate, empty, zero\n    \"In statement and step 1.1, for d=0 the parameter tuple is empty, M remains nonzero, and the inequalities give depth=0. The zero module is explicitly excluded.\"\n    items: cor-one-regular-system-of-parameters-implies-cohen-macaulay\n\n  3 rows · axes: degenerate, endpoints, zero\n    \"Step 1.1 handles r=0 and r=n, including n=0, as a single point of dimension zero.\"\n    items: cor-grassmannian-smooth-irreducible-dimension\n\nCONTRADICTED DISPOSITIONS — 4 candidate(s).\nEach is a not_applicable row on an axis the item's own text exhibits. Read the item.\n\nUPHELD BY REVIEW — 8 row(s) an Alpha read and kept, with reasons on the record:\n  lem-radial-mollification-fixes-local-mean-value-functions  [empty]  by step8-preflight-review-1: Although the statement names a mollifier family, the conclusion fixes one positive epsilon and does not quantify over an\nEvery line above is a candidate for a human read, not a verdict.\n",
      "named_ids": [
        "lem-radial-mollification-fixes-local-mean-value-functions"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "lem-radial-mollification-fixes-local-mean-value-functions",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "lem-radial-mollification-fixes-local-mean-value-functions",
      "scope": "run",
      "owner": "c"
    }
  ],
  "fatal_repair_licences": [],
  "live_tuples": []
}
```

---

# Step 8 adjudication — group **c**, run `frontier-32`

You are the group Alpha for batches **4**, **14**, **15**: 3 A/B pair(s), 6 page(s), 110 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-32-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — frozen integrity close, `frontier-32`

The final judge boundary is closed. The generated repair envelope above is
authoritative: review only its exact `assigned_items` and `live_tuples`, with
their explicit run or published scope; use a focused check when supported.

Resolve all assigned documentary findings in this pass. A serial reviewer must
establish ownership before editing an ambiguous record. Report detector or
authority defects explicitly; unchanged retries stop.

Do not alter mathematical items, start a judge cycle, or change another group's
records. You may correct a contract or receipt only when it exactly describes
the current item and cannot conceal a defect. A mathematical correction is a
blocker for the supervising session.

Return the gate, ids, non-item records changed, focused checks, and blockers.


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
