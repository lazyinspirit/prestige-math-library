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
group work, `research/frontier-33-alpha-groups.json` is the assignment: it permits at
most nine groups of at most three batches, and a group writes only its own
artifacts and in-flight content. Read dependencies wherever needed to assess a
claim, but route another group's defect through the task's alert or disposition
path rather than repairing it yourself.

Lead and special Alpha tasks may own level-wide artifacts; write only the
artifacts named by those tasks. Never rename an established item id. Do not
write judge verdicts or stamps. Published content, scope changes, deletion,
and reading-order changes require the exact task-authorised protocol. Step-8
adjudicators may add fully proved missing-dependency lemmas and register them
on their owned pages under the Step-8 task's explicit exception; otherwise
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

run: frontier-33
role: alpha-group-read
label: d
covers: d

# Step 7 whole-group reading — group **d**, run `frontier-33`

You are the group Alpha for batches **8**, **13**, **16**: 3 A/B pair(s), 6 page(s), 138 item(s).

Read every owned item and every listed seam before returning the compact
schema-constrained digest. That file, not this conversation, is the handoff
to a fresh Step-8 adjudicator. No judge verdict is supplied here.
In the digest, `pages_read` is exactly the ids under **Your pages** and
`items_read` exactly the ids under **Your content**. External items you
open belong only in `published_dependencies`; never add them to those inventories.
Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## Read scope

**Read the entire assigned group and anything it cites.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything an owned item touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**This dispatch is read-only.** Record concerns about owned items and alerts
about other groups in the returned digest; do not repair anything.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 8 | `homology-axioms-degree-and-classical-applications` | A | algebraic-topology | 366.009 | `cw-complexes-and-cellular-homology-examples` |
| 8 | `homology-axioms-degree-and-classical-applications-examples` | B | algebraic-topology | 366.01 | `homology-axioms-degree-and-classical-applications` |
| 13 | `integration-of-forms-and-the-general-stokes-theorem` | A | differential-geometry | 469 | `smooth-partitions-of-unity-and-exhaustions`, `rank-theorems-and-embedded-submanifolds`, `tensor-fields-exterior-algebra-and-differential-forms`, `the-exterior-derivative-and-cartan-calculus`, `manifolds-with-boundary-collars-and-orientations`, `the-divergence-theorem-and-classical-stokes` |
| 13 | `integration-of-forms-and-the-general-stokes-theorem-examples` | B | differential-geometry | 470 | `integration-of-forms-and-the-general-stokes-theorem` |
| 16 | `sublevel-deformation-and-the-handle-attachment-theorem` | A | differential-topology | 525 | `stable-unstable-manifolds-and-morse-smale-transversality-examples`, `cw-complexes-and-cellular-homology` |
| 16 | `sublevel-deformation-and-the-handle-attachment-theorem-examples` | B | differential-topology | 526 | `sublevel-deformation-and-the-handle-attachment-theorem` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `homology-axioms-degree-and-classical-applications` — Homology Axioms Degree and Classical Applications (44 item(s))

- `def-unreduced-homology-theory-on-cw-pairs` · definition — Unreduced homology theory on cw pairs
- `thm-singular-homology-satisfies-homotopy-exactness-and-excision` · theorem — Singular homology satisfies homotopy exactness and excision
- `thm-singular-homology-satisfies-dimension-and-arbitrary-additivity` · theorem — Singular homology satisfies dimension and arbitrary additivity
- `def-reduced-homology-theory-and-augmentation` · definition — Reduced homology theory and augmentation
- `prop-unreduced-pair-and-reduced-quotient-axioms-are-equivalent-on-cw-pairs` · proposition — Unreduced pair and reduced quotient axioms are equivalent on cw pairs
- `def-coefficient-normalized-morphism-of-ordinary-homology-theories` · definition — Coefficient normalized morphism of ordinary homology theories
- `lem-any-homology-theory-computes-relative-cell-groups-from-its-coefficient-group` · lemma — Any homology theory computes relative cell groups from its coefficient group
- `lem-any-homology-theory-has-a-cellular-chain-complex-on-a-cw-pair` · lemma — Any homology theory has a cellular chain complex on a cw pair
- `lem-finite-dimensional-skeletal-exactness-computes-axiomatic-homology` · lemma — Finite dimensional skeletal exactness computes axiomatic homology
- `lem-oriented-simplex-comparison-for-an-ordinary-homology-theory` · lemma — Oriented simplex comparison for an ordinary homology theory
- `lem-finite-simplicial-approximation-for-homology-comparison` · lemma — Finite simplicial approximation for homology comparison
- `lem-subdivision-compatible-continuous-polyhedral-homology-comparison` · lemma — Subdivision compatible continuous polyhedral homology comparison
- `lem-cw-homotopy-equivalence-inclusions-are-strong-deformation-retracts` · lemma — Cw homotopy equivalence inclusions are strong deformation retracts
- `lem-finite-cw-pairs-admit-finite-simplicial-homotopy-models` · lemma — Finite cw pairs admit finite simplicial homotopy models
- `lem-coefficient-comparison-on-finite-cw-pairs` · lemma — Coefficient comparison on finite cw pairs
- `lem-sphere-endomorphisms-act-by-the-same-integer-in-every-ordinary-theory` · lemma — Sphere endomorphisms act by the same integer in every ordinary theory
- `lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients` · lemma — Axiomatic cellular boundaries are integral incidence matrices with coefficients
- `lem-finite-dimensional-axiomatic-homology-has-finite-subcomplex-support` · lemma — Finite dimensional axiomatic homology has finite subcomplex support
- `lem-comparison-maps-between-homology-theories-extend-over-one-skeleton-stage` · lemma — Comparison maps between homology theories extend over one skeleton stage
- `thm-eilenberg-steenrod-uniqueness-on-finite-dimensional-cw-pairs` · theorem — Eilenberg steenrod uniqueness on finite dimensional cw pairs
- `prop-ordinary-homology-theories-have-mayer-vietoris-for-cw-covers` · proposition — Ordinary homology theories have mayer vietoris for cw covers
- `def-skeletal-mapping-telescope-of-a-cw-pair` · definition — Skeletal mapping telescope of a cw pair
- `lem-the-skeletal-telescope-projects-by-a-homotopy-equivalence-of-pairs` · lemma — The skeletal telescope projects by a homotopy equivalence of pairs
- `lem-a-sequential-abelian-colimit-is-the-cokernel-of-one-minus-shift` · lemma — A sequential abelian colimit is the cokernel of one minus shift
- `lem-additivity-and-compact-cell-support-control-the-infinite-cw-colimit` · lemma — Additivity and compact cell support control the infinite cw colimit
- `thm-eilenberg-steenrod-uniqueness-on-all-cw-pairs` · theorem — Eilenberg steenrod uniqueness on all cw pairs
- `def-degree-of-a-self-map-of-an-oriented-sphere` · definition — Degree of a self map of an oriented sphere
- `prop-degree-is-homotopy-invariant-and-multiplicative-under-composition` · proposition — Degree is homotopy invariant and multiplicative under composition
- `prop-suspension-preserves-sphere-map-degree` · proposition — Suspension preserves sphere map degree
- `prop-degree-of-identity-constant-reflection-and-antipodal-sphere-maps` · proposition — Degree of identity constant reflection and antipodal sphere maps
- `lem-a-map-of-nonzero-degree-between-spheres-is-surjective` · lemma — A map of nonzero degree between spheres is surjective
- `def-local-degree-at-an-isolated-preimage` · definition — Local degree at an isolated preimage
- `lem-local-sphere-orientations-and-finite-puncture-excision` · lemma — Local sphere orientations and finite puncture excision
- `thm-global-sphere-degree-is-the-sum-of-local-degrees` · theorem — Global sphere degree is the sum of local degrees
- `prop-every-integer-occurs-as-the-degree-of-a-sphere-map` · proposition — Every integer occurs as the degree of a sphere map
- `thm-no-retraction-from-a-disk-onto-its-boundary` · theorem — No retraction from a disk onto its boundary
- `lem-a-fixed-point-free-ball-map-produces-a-boundary-retraction` · lemma — A fixed point free ball map produces a boundary retraction
- `thm-brouwer-fixed-point-theorem` · theorem — Brouwer fixed point theorem
- `thm-no-nowhere-zero-tangent-vector-field-on-an-even-sphere` · theorem — No nowhere zero tangent vector field on an even sphere
- `prop-an-odd-sphere-admits-a-nowhere-zero-tangent-vector-field` · proposition — An odd sphere admits a nowhere zero tangent vector field
- `thm-a-sphere-has-a-nowhere-zero-tangent-vector-field-iff-its-dimension-is-odd` · theorem — A sphere has a nowhere zero tangent vector field iff its dimension is odd
- `cor-a-fixed-point-free-sphere-map-has-antipodal-degree` · corollary — A fixed point free sphere map has antipodal degree
- `cor-a-group-acting-freely-on-a-positive-even-sphere-has-at-most-two-elements` · corollary — A group acting freely on a positive even sphere has at most two elements
- `thm-invariance-of-dimension-for-euclidean-spaces` · theorem — Invariance of dimension for euclidean spaces

### `homology-axioms-degree-and-classical-applications-examples` — Homology Axioms Degree and Classical Applications — Examples (8 item(s))

- `ex-degree-of-the-circle-power-map` · example — Degree of the circle power map
- `ex-degree-of-a-coordinate-reflection-on-a-sphere` · example — Degree of a coordinate reflection on a sphere
- `ex-degree-of-the-antipodal-map-in-low-dimensions` · example — Degree of the antipodal map in low dimensions
- `ex-local-degrees-of-a-polynomial-map-on-the-riemann-sphere` · example — Local degrees of a polynomial map on the riemann sphere
- `ex-two-homology-theories-with-different-coefficient-groups` · example — Two homology theories with different coefficient groups
- `cex-degree-zero-does-not-imply-a-sphere-map-is-constant` · counterexample — Degree zero does not imply a sphere map is constant
- `cex-degree-is-not-defined-by-top-homology-for-self-maps-of-s-zero` · counterexample — Degree is not defined by top homology for self maps of s zero
- `cex-finite-additivity-alone-does-not-prove-infinite-cw-uniqueness` · counterexample — Finite additivity alone does not prove infinite cw uniqueness

### `integration-of-forms-and-the-general-stokes-theorem` — Integration of Forms and the General Stokes Theorem (47 item(s))

- `def-compactly-supported-differential-form` · definition — Compact support of a differential form
- `lem-a-locally-finite-sum-is-finite-near-the-compact-support-of-a-form` · lemma — Local finiteness near compact support
- `lem-chart-supported-coefficients-have-well-defined-riemann-integrable-half-space-extensions` · lemma — Riemann-integrable half-space extensions of chart coefficients
- `def-integral-of-an-oriented-chart-supported-top-form` · definition — Chart integral with its orientation sign
- `lem-half-space-chart-transitions-extend-locally-to-side-preserving-diffeomorphisms` · lemma — Local side-preserving extensions of half-space transitions
- `thm-oriented-chart-integrals-are-coordinate-independent` · theorem — Coordinate independence of chart integrals
- `def-integral-of-a-compactly-supported-top-form-on-an-oriented-manifold` · definition — Integral of a compactly supported top form
- `thm-global-form-integration-is-independent-of-the-atlas-partition-and-refinement` · theorem — Independence of atlas, partition and refinement
- `prop-linearity-and-additivity-of-integration-over-disjoint-oriented-components` · proposition — Linearity and additivity of the form integral
- `prop-reversing-orientation-negates-the-integral` · proposition — Orientation reversal changes the integral sign
- `prop-positive-compactly-supported-top-forms-have-positive-integral` · proposition — Positivity of the oriented integral
- `thm-change-of-variables-for-oriented-manifold-diffeomorphisms` · theorem — Change of variables on oriented manifolds
- `prop-integration-over-an-oriented-embedded-submanifold` · proposition — Integration on an oriented embedded submanifold
- `prop-integration-of-top-forms-by-finite-parametrizations` · proposition — Computing form integrals by finite parametrizations
- `def-one-density-on-a-finite-dimensional-real-vector-space` · definition — A signed one-density on a real vector space
- `prop-one-densities-form-a-one-dimensional-vector-space` · proposition — The density line and its positive cone
- `def-density-bundle-and-smooth-density` · definition — Density bundle and smooth density fields
- `prop-the-absolute-value-of-a-top-form-is-a-density` · proposition — Absolute value of a top form as a density
- `prop-every-smooth-manifold-admits-a-positive-smooth-density` · proposition — Existence of positive smooth densities
- `prop-density-pullback-under-local-diffeomorphisms` · proposition — Pullback of densities by local diffeomorphisms
- `def-integral-of-a-compactly-supported-smooth-density` · definition — Integral of a compactly supported smooth density
- `thm-density-integration-is-defined-without-an-orientation` · theorem — Orientation-free density integration and its properties
- `prop-on-an-oriented-manifold-top-forms-and-signed-densities-correspond` · proposition — Orientation identifies top forms with signed densities
- `rem-lebesgue-extension-of-manifold-density-integration` · remark — The separate measurable extension of density integration
- `lem-exterior-and-cartan-calculus-extend-to-manifolds-with-boundary` · lemma — Form calculus extends locally across a manifold boundary
- `lem-euclidean-stokes-for-a-compactly-supported-form` · lemma — Compact-support Stokes on Euclidean space
- `lem-half-space-stokes-for-a-compactly-supported-form` · lemma — Compact-support Stokes on the upper half-space
- `lem-partition-localization-of-stokes` · lemma — Localization of Stokes by a partition of unity
- `thm-general-stokes-theorem` · theorem — The general Stokes theorem
- `cor-integral-of-an-exact-compactly-supported-top-form-on-a-boundaryless-manifold-is-zero` · corollary — A compactly supported primitive has zero total derivative integral
- `cor-a-closed-oriented-manifold-has-no-top-form-with-nonzero-integral-that-is-exact` · corollary — Nonzero total integral obstructs exactness on a closed manifold
- `cor-closed-compactly-supported-forms-integrate-to-zero-on-boundaries` · corollary — Closed forms have zero boundary integral
- `cor-a-nonzero-period-obstructs-exactness-and-bounding` · corollary — A nonzero period obstructs exactness and bounding
- `cor-fundamental-theorem-of-calculus-from-stokes` · corollary — Stokes agrees with the fundamental theorem of calculus
- `cor-greens-theorem-from-general-stokes` · corollary — General Stokes agrees with both planar Green formulas
- `cor-classical-three-dimensional-stokes-theorem` · corollary — Agreement of general and classical surface Stokes
- `def-volume-form-on-an-oriented-manifold` · definition — Positive volume form on an oriented manifold
- `def-divergence-relative-to-a-volume-form` · definition — Divergence relative to a volume form
- `prop-divergence-is-well-defined-and-has-the-coordinate-formula` · proposition — Coordinate formula and well-definedness of divergence
- `prop-divergence-satisfies-the-product-rule` · proposition — Product rule for volume-form divergence
- `lem-divergence-form-identity` · lemma — Divergence as an exterior derivative
- `thm-divergence-theorem-relative-to-a-volume-form` · theorem — Divergence theorem for a volume form
- `prop-general-stokes-agrees-with-classical-gauss-flux` · proposition — Agreement with classical Gauss flux in Euclidean space
- `fs-the-integral-of-a-top-form-is-defined-without-an-orientation` · false-statement — False: top-form integration needs no orientation
- `fs-the-integral-of-a-form-is-the-sum-over-an-arbitrary-atlas-without-a-partition` · false-statement — False: summing unweighted atlas integrals is valid
- `fs-the-integral-of-every-exact-form-on-every-manifold-is-zero` · false-statement — False: all exact forms integrate to zero everywhere
- `fs-a-smooth-density-is-the-same-thing-as-a-top-form-on-a-nonorientable-manifold` · false-statement — False: densities and top forms coincide on nonorientable manifolds

### `integration-of-forms-and-the-general-stokes-theorem-examples` — Integration of Forms and the General Stokes Theorem — Examples (12 item(s))

- `ex-integrating-a-compactly-supported-form-in-two-overlapping-charts` · example — Partition weights in two overlapping charts
- `ex-orientation-reversal-under-reflection` · example — Reflection reverses the signed form integral
- `ex-integration-of-a-density-on-the-mobius-band` · example — A density integral on the Mobius band
- `ex-stokes-on-an-oriented-interval` · example — Stokes on an interval with both endpoint chart signs
- `ex-greens-theorem-on-a-planar-disk` · example — Green circulation and flux on a disk
- `ex-classical-stokes-on-an-oriented-graph-surface` · example — Surface Stokes on a graph disk
- `ex-divergence-theorem-on-a-euclidean-ball` · example — Volume-form divergence on the Euclidean ball
- `ex-the-angular-form-has-period-two-pi` · example — The angular period and the obstruction to bounding
- `ex-exact-top-form-with-nonzero-integral-on-a-manifold-with-boundary` · example — An exact top form with nonzero integral on a disk
- `cex-a-noncompactly-supported-form-with-divergent-chart-integral` · counterexample — A noncompactly supported form whose integral diverges
- `cex-opposite-boundary-orientation-gives-the-wrong-sign-in-stokes` · counterexample — The wrong boundary sign in the half-space computation
- `ex-change-of-variables-on-the-oriented-circle` · example — Change of variables on an oriented circle

### `sublevel-deformation-and-the-handle-attachment-theorem` — Sublevel Deformation and the Handle Attachment Theorem (21 item(s))

- `def-closed-sublevel-and-level-set-of-a-smooth-function` · definition — Closed sublevel and level set of a smooth function
- `lem-normalized-gradient-crosses-a-compact-regular-band-in-controlled-time` · lemma — Normalized gradient crosses a compact regular band in controlled time
- `thm-regular-interval-diffeomorphism` · theorem — Regular interval diffeomorphism
- `cor-regular-sublevels-are-diffeomorphic` · corollary — Regular sublevels are diffeomorphic
- `prop-deformation-lemma-for-a-critical-point-free-slab` · proposition — Deformation lemma for a critical point free slab
- `def-k-handle-core-cocore-attaching-region-and-belt-sphere` · definition — K handle core cocore attaching region and belt sphere
- `def-attaching-a-smooth-handle-with-corner-rounding` · definition — Attaching a smooth handle with corner rounding
- `lem-smooth-handle-attachment-is-independent-of-corner-rounding-up-to-diffeomorphism` · lemma — Smooth handle attachment is independent of corner rounding up to diffeomorphism
- `lem-adapted-descending-field-near-a-compact-morse-band` · lemma — Adapted descending field near a compact morse band
- `lem-local-critical-value-lowering-preserves-the-upper-sublevel` · lemma — Local critical-value lowering preserves the upper sublevel
- `lem-local-morse-sublevel-pair-is-a-handle-pair` · lemma — Local morse sublevel pair is a handle pair
- `lem-gradient-flow-identifies-the-local-and-global-attaching-regions` · lemma — Gradient flow identifies the local and global attaching regions
- `thm-one-critical-point-handle-attachment` · theorem — One critical point handle attachment
- `cor-unstable-disk-is-the-handle-core` · corollary — Unstable disk is the handle core
- `cor-one-critical-point-cell-attachment-homotopy-type` · corollary — One critical point cell attachment homotopy type
- `lem-relative-homology-of-the-standard-handle-pair` · lemma — Relative homology of the standard handle pair
- `cor-relative-homology-of-a-single-handle-pair` · corollary — Relative homology of a single handle pair
- `prop-simultaneous-attachment-at-a-morse-critical-value` · proposition — Simultaneous attachment at a morse critical value
- `cor-index-zero-handles-create-components` · corollary — Index zero handles create components
- `cor-index-n-handles-cap-boundary-spheres` · corollary — Index n handles cap boundary spheres
- `rem-compact-critical-band-is-the-local-handle-theorem-hypothesis` · remark — Compact critical band is the local handle theorem hypothesis

### `sublevel-deformation-and-the-handle-attachment-theorem-examples` — Sublevel Deformation and the Handle Attachment Theorem — Examples (6 item(s))

- `ex-sublevels-of-height-on-the-sphere` · example — Sublevels of height on the sphere
- `ex-torus-from-one-handle-of-each-index` · example — Torus from one 0-handle, two 1-handles and one 2-handle
- `ex-a-one-handle-joins-components-or-adds-a-tunnel` · example — A one handle joins components or adds a tunnel
- `ex-simultaneous-handles-at-a-repeated-critical-value` · example — Simultaneous handles at a repeated critical value
- `cex-a-critical-point-free-noncompact-band-need-not-be-a-global-product` · counterexample — A critical point free noncompact band need not be a global product
- `ex-relative-homology-of-a-handle-by-excision` · example — Relative homology of a handle by excision

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

---

# Step 7 — group reading digest, `frontier-33`

Read every page and item in the generated group header, its cited published
dependencies, and every listed cross-group seam. This dispatch is read-only;
record concerns and alerts without repairing them.

Return only the supplied Step-8 context JSON. `pages_read`, `items_read`, and
`seams_checked` must be exact inventories of the generated scope. Record the
group's conventions, load-bearing items, opened published dependencies, and
concrete concerns; an empty concerns or alerts list is valid.

Inventory boundary: `pages_read` must contain exactly the ids under **Your
pages**, and `items_read` exactly the ids under **Your content**, with no extras.
Opening a published dependency does not expand either inventory; record its item
only under `published_dependencies`.

Put a finding about another group's item in `alerts`, not `concerns`; the scope
tool routes it to that item's owning group before adjudication.


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
This role is read-only: do not write checkpoints or extra files. Use the task-provided durable evidence and reread it after compaction; return only the required response format.
