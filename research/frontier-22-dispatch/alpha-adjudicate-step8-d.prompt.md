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
group work, `research/frontier-22-alpha-groups.json` is the assignment: it permits at
most four groups of at most three batches, and a group writes only its own
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

run: frontier-22
role: alpha-adjudicate
label: step8-d
covers: 6, 7

# Step 8 — group **d**, run `frontier-22`

You are the group Alpha for batches **6**, **7**: 3 A/B pair(s), 6 page(s), 99 item(s), 64 open rejection(s) over 64 item(s).

The engine resumes the read-only conversation you began for this group at
step 7 whenever its exact session record is available; otherwise this file is
the complete fallback for a fresh dispatch. Nothing from step 3, step 6, or
another group is assumed. Everything below is
derived from disk by `tools/step8-scope.mjs`; no line of it is a judgement
about mathematics.

## What you recorded at step 7

`research/frontier-22-alpha-d-step8-context.json` is what a group Alpha for this group wrote during step 7,
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

**You may read the entire library.** `items/` holds every published item and
every item this run has built, and your sandbox is the repository root. Open
anything a rejection touches — a published dependency, another group's page,
a definition three levels down. Adjudicating a citation objection without
opening the cited item is exactly what the refuter rule forbids.

**You may write only inside your own group.** A `confirmed_fatal` licenses a
repair to an item in the batches listed above. If a rejection's real defect
lies in an item owned by another group, do not repair it: record the finding
in `research/frontier-22-step8-cross-group.jsonl` as
`{from_group, item, owning_group, finding, severity, source_rejection:{id,model,context_sha256}}`
and adjudicate your own rejection on what is true. The source tuple is
provenance only; it cannot license a repair to the target. The gate routes a
stable alert to the owning group, and a finding nobody answers fails the stage.

## Your pages

| batch | page | kind | category | order | requires |
|---|---|---|---|---|---|
| 6 | `the-riemann-sphere-and-mobius-transformations` | A | complex-analysis | 323 | `the-argument-principle-and-rouche`, `compactness`, `the-topology-of-euclidean-space` |
| 6 | `the-riemann-sphere-and-mobius-transformations-examples` | B | complex-analysis | 324 | `the-riemann-sphere-and-mobius-transformations` |
| 6 | `normal-families-and-montels-theorem` | A | complex-analysis | 331 | `harmonic-functions-and-the-poisson-integral`, `the-riemann-sphere-and-mobius-transformations`, `the-argument-principle-and-rouche`, `approximation-and-compactness-in-ck`, `ascoli-arzela` |
| 6 | `normal-families-and-montels-theorem-examples` | B | complex-analysis | 332 | `normal-families-and-montels-theorem` |
| 7 | `holomorphic-inverse-and-weierstrass-preparation` | A | complex-analysis | 353 | `holomorphic-functions-of-several-variables`, `inverse-and-implicit-function-theorems`, `the-argument-principle-and-rouche`, `euclidean-domains-pids-and-unique-factorisation`, `the-field-of-fractions-and-localisation`, `constant-rank-submersions-and-regular-level-sets` |
| 7 | `holomorphic-inverse-and-weierstrass-preparation-examples` | B | complex-analysis | 354 | `holomorphic-inverse-and-weierstrass-preparation` |

## Your content, in full

Every item you own. This is the inventory, not the mathematics — open the
files under `items/` for that.

### `the-riemann-sphere-and-mobius-transformations` — The Riemann Sphere and Möbius Transformations (22 item(s))

- `rem-riemann-sphere-one-point-compactification` · remark — The Riemann sphere is the published one-point compactification of the complex plane
- `def-riemann-sphere-holomorphic-charts` · definition — The standard holomorphic charts on the Riemann sphere, with holomorphy and poles at infinity
- `thm-stereographic-projection-riemann-sphere-homeomorphism` · theorem — Stereographic projection identifies the Riemann sphere with the unit two-sphere
- `def-chordal-metric-riemann-sphere` · definition — The chordal metric on the Riemann sphere
- `thm-chordal-metric-induces-sphere-topology` · theorem — The chordal metric induces the standard topology of the Riemann sphere
- `def-meromorphic-function-riemann-sphere` · definition — Meromorphic functions on the Riemann sphere
- `def-mobius-transformation` · definition — Möbius transformations of the Riemann sphere
- `def-cross-ratio-riemann-sphere` · definition — The cross-ratio of an ordered quadruple of sphere points
- `def-circline-and-reflection` · definition — Circlines and their reflections on the Riemann sphere
- `thm-mobius-group-and-projective-linear-identification` · theorem — Möbius transformations form a group and identify with the projective linear quotient of GL_2(C)
- `thm-mobius-transformations-biholomorphic-sphere` · theorem — Every Möbius transformation is a biholomorphism of the Riemann sphere
- `thm-three-point-transitivity-mobius-transformations` · theorem — A unique Möbius transformation carries any ordered triple of distinct sphere points to any other
- `thm-cross-ratio-mobius-invariant` · theorem — The cross-ratio is invariant under Möbius transformations
- `thm-real-cross-ratio-circline-characterization` · theorem — Four distinct sphere points lie on one circline exactly when their cross-ratio is real
- `thm-mobius-preserves-circlines-and-reflections` · theorem — Möbius transformations preserve circlines and conjugate their reflections
- `thm-meromorphic-functions-riemann-sphere-are-rational` · theorem — Meromorphic functions on the Riemann sphere are exactly the rational functions
- `def-degree-rational-map-riemann-sphere` · definition — The degree of a rational self-map of the Riemann sphere
- `thm-rational-map-fibre-count-degree` · theorem — A nonconstant rational map has total fibre multiplicity equal to its degree
- `thm-biholomorphic-self-maps-riemann-sphere-are-mobius` · theorem — Every biholomorphic self-map of the Riemann sphere is Möbius
- `cor-entire-biholomorphisms-are-affine` · corollary — Every biholomorphic self-map of the complex plane is affine
- `thm-automorphisms-punctured-plane` · theorem — Every biholomorphic self-map of the punctured plane is of the form az or a/z
- `thm-classification-mobius-transformations` · theorem — Nonidentity Möbius transformations are parabolic or conjugate to a dilation, with the projective trace invariant

### `the-riemann-sphere-and-mobius-transformations-examples` — The Riemann Sphere and Möbius Transformations — Examples (12 item(s))

- `ex-cayley-transform-biholomorphism-upper-half-plane-to-disc` · example — The Cayley transform carries the upper half-plane biholomorphically onto the unit disc
- `ex-mobius-transformation-from-three-point-correspondence` · example — A Möbius transformation is recovered from three point correspondences
- `ex-classification-of-z-plus-one-two-z-and-one-over-z` · example — The maps z+1, 2z, and 1/z realize the parabolic, hyperbolic, and elliptic branches of the classification
- `ex-stereographic-projection-formulas-on-the-unit-sphere` · example — Stereographic projection and its inverse are explicit in coordinates
- `ex-chordal-distance-formula-from-complex-coordinates` · example — The chordal distance has the standard coordinate formula on the finite plane
- `cex-e-to-z-is-meromorphic-on-c-but-not-on-the-riemann-sphere` · counterexample — The exponential function is meromorphic on C but not meromorphic on the Riemann sphere
- `cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism` · counterexample — The exponential map is a holomorphic surjection C to C^× that is not an automorphism
- `cex-complex-conjugation-is-a-sphere-homeomorphism-not-holomorphic` · counterexample — Complex conjugation is a homeomorphism of the Riemann sphere that is not holomorphic
- `fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism` · false-statement — FALSE: every Möbius self-map of the Riemann sphere restricts to an entire biholomorphism of the complex plane
- `fs-a-mobius-map-with-three-fixed-points-may-be-nonidentity` · false-statement — FALSE: a Möbius transformation with three fixed points can be nonidentity
- `fs-the-cross-ratio-is-preserved-by-every-sphere-homeomorphism` · false-statement — FALSE: every self-homeomorphism of the Riemann sphere preserves the cross-ratio
- `fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane` · false-statement — FALSE: the Riemann sphere is homeomorphic to the complex plane

### `normal-families-and-montels-theorem` — Normal Families and Montel's Theorem (18 item(s))

- `lem-canonical-compact-exhaustion-of-a-plane-domain` · lemma — Every plane domain has the canonical nested compact exhaustion by distance and radius cutoffs
- `rem-local-uniform-convergence-dictionary-on-plane-domains` · remark — Locally uniform convergence on a plane domain is the already-published compact-convergence notion
- `def-compact-exhaustion-metric-on-function-space` · definition — The exhaustion metric on a function space over a plane domain
- `thm-compact-exhaustion-metric-characterizes-local-uniform-convergence` · theorem — The exhaustion metric induces exactly the topology of locally uniform convergence
- `cor-compact-open-topology-is-independent-of-exhaustion` · corollary — The compact-open topology on C(Ω,C) is independent of the chosen compact exhaustion
- `thm-completeness-of-continuous-functions-for-local-uniform-convergence` · theorem — Continuous complex-valued functions on a plane domain are complete for an exhaustion metric
- `cor-holomorphic-functions-are-closed-for-local-uniform-convergence` · corollary — Holomorphic functions form a closed subspace for locally uniform convergence
- `def-normal-family-of-holomorphic-functions` · definition — Normal families of holomorphic functions on a plane domain
- `def-locally-bounded-family-on-a-plane-domain` · definition — Locally bounded families of functions on a plane domain
- `def-locally-equicontinuous-family-on-a-plane-domain` · definition — Locally equicontinuous families of functions on a plane domain
- `lem-locally-bounded-holomorphic-families-are-locally-equicontinuous` · lemma — Locally bounded holomorphic families are locally equicontinuous
- `thm-montel-theorem-for-holomorphic-functions` · theorem — Montel's theorem: every locally bounded holomorphic family is normal
- `thm-normal-holomorphic-families-are-locally-bounded` · theorem — Normal holomorphic families are locally bounded
- `thm-vitali-porter-convergence-theorem` · theorem — Vitali-Porter convergence theorem for holomorphic functions
- `cor-derivative-operators-are-continuous-for-local-uniform-convergence` · corollary — Every derivative operator is continuous for locally uniform convergence on holomorphic functions
- `def-chordal-local-uniform-convergence-and-meromorphic-normality` · definition — Chordal local uniform convergence and meromorphic normality
- `thm-chordal-limit-theorem-for-meromorphic-functions` · theorem — A chordally locally uniform meromorphic limit is meromorphic or identically infinity
- `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families` · theorem — Local chordal equicontinuity is equivalent to meromorphic normality on compact exhaustions

### `normal-families-and-montels-theorem-examples` — Normal Families and Montel's Theorem — Examples (9 item(s))

- `ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane` · example — The family z^n is normal on the unit disc and not normal on the complex plane
- `ex-the-unit-ball-family-is-normal-on-any-domain` · example — The family of holomorphic functions bounded by one is normal on every plane domain
- `ex-diagonal-extraction-on-a-disc-for-montels-theorem` · example — Montel's diagonal extraction can be written out concretely on a disc
- `ex-the-exhaustion-metric-on-the-unit-disc` · example — The exhaustion metric is explicit on the unit disc
- `cex-n-times-z-is-not-normal-near-zero` · counterexample — The family nz is not normal on any domain containing zero
- `cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane` · counterexample — The family e^(nz) converges chordally to infinity on the right half-plane without being holomorphically normal there
- `fs-normality-means-sequential-limits-stay-inside-the-family` · false-statement — FALSE: a normal family contains every locally uniform sequential limit of its own sequences
- `fs-arzela-ascoli-alone-proves-montel` · false-statement — FALSE: Arzelà-Ascoli alone proves Montel's theorem
- `fs-a-chordal-limit-of-holomorphic-functions-cannot-be-identically-infinity` · false-statement — FALSE: a chordally locally uniform limit of holomorphic functions can never be identically infinity

### `holomorphic-inverse-and-weierstrass-preparation` — The Holomorphic Inverse Function Theorem and Weierstrass Preparation (27 item(s))

- `def-biholomorphic-map-several-complex-variables` · definition — Biholomorphic maps between open sets in $\mathbb{C}^m$
- `lem-real-jacobian-determinant-of-a-complex-linear-map` · lemma — The real Jacobian determinant of a complex-linear automorphism is the squared modulus of its complex determinant
- `thm-holomorphic-inverse-function-theorem-several-variables` · theorem — The holomorphic inverse function theorem in several complex variables
- `thm-holomorphic-implicit-function-theorem` · theorem — The holomorphic implicit function theorem
- `thm-holomorphic-constant-rank-theorem` · theorem — The holomorphic constant-rank theorem
- `def-holomorphic-germ-ring-and-its-maximal-ideal` · definition — The ring of holomorphic germs at $0$ and its maximal ideal
- `prop-units-in-the-holomorphic-germ-ring` · proposition — A germ is a unit exactly when its value at $0$ is nonzero, so $\mathcal O_{m,0}$ is local
- `def-regular-holomorphic-germ` · definition — Regular holomorphic germs in the last variable
- `def-weierstrass-polynomial` · definition — Weierstrass polynomials in the last variable
- `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular` · lemma — After a linear coordinate change, every nonzero germ is regular in the last variable
- `lem-stability-of-slice-zero-count-under-holomorphic-parameters` · lemma — Nearby slices of a regular germ have the same zero count
- `lem-holomorphic-power-sums-of-slice-zeros` · lemma — The power sums of the slice zeros vary holomorphically
- `lem-newton-identities-for-slice-roots` · lemma — Finite Newton recurrences for the slice zeros
- `thm-weierstrass-preparation-theorem` · theorem — Weierstrass preparation theorem
- `thm-uniqueness-in-weierstrass-preparation` · theorem — Uniqueness in Weierstrass preparation
- `thm-weierstrass-division-theorem` · theorem — Weierstrass division theorem
- `def-noetherian-ring-and-module` · definition — Noetherian commutative rings and modules
- `lem-finite-modules-over-noetherian-rings-are-noetherian` · lemma — Finite modules over Noetherian rings are Noetherian
- `lem-weierstrass-quotient-is-a-finite-module` · lemma — A quotient by a Weierstrass polynomial is a finite module over the smaller germ ring
- `thm-holomorphic-germ-ring-is-noetherian` · theorem — The ring of holomorphic germs is Noetherian
- `lem-noetherian-domains-are-atomic` · lemma — Noetherian domains are atomic
- `lem-gauss-lemma-over-a-ufd` · lemma — Gauss lemma over a UFD
- `lem-prepared-factorizations-and-irreducibility` · lemma — Prepared factorizations correspond to germ factorizations
- `thm-holomorphic-germ-ring-is-a-ufd` · theorem — The ring of holomorphic germs is a UFD
- `thm-zero-set-has-no-isolated-points-in-several-complex-variables` · theorem — A nonzero holomorphic hypersurface in complex dimension at least two has no isolated points
- `thm-riemann-extension-across-hypersurface-zero-sets` · theorem — Riemann extension across a holomorphic hypersurface zero set
- `cor-locally-bounded-meromorphic-poles-are-removable` · corollary — A locally bounded meromorphic quotient has no genuine pole

### `holomorphic-inverse-and-weierstrass-preparation-examples` — The Holomorphic Inverse Function Theorem and Weierstrass Preparation — Examples (11 item(s))

- `ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared` · example — $z_1^2-z_2$ prepares to the Weierstrass polynomial $z_2-z_1^2$
- `cex-z-one-z-two-is-not-regular-in-z-two-at-the-origin` · counterexample — $z_1z_2$ is not regular in $z_2$ at the origin
- `ex-a-shear-makes-z-one-z-two-regular-in-z-two` · example — A linear shear makes $z_1z_2$ regular in $z_2$
- `ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one` · example — Dividing $z_1$ by the Weierstrass polynomial $z_2^2-z_1$
- `ex-the-unit-circle-is-a-holomorphic-graph-near-zero-one` · example — Near $(0,1)$, the equation $z_1^2+z_2^2=1$ is a holomorphic graph
- `cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective` · counterexample — The map $(z_1,z_2)\mapsto(e^{z_1},z_2)$ has invertible complex Jacobian everywhere and is not injective
- `fs-an-everywhere-invertible-complex-jacobian-forces-global-injectivity` · false-statement — FALSE: an everywhere-invertible complex Jacobian forces global injectivity
- `fs-the-holomorphic-inverse-function-theorem-is-global` · false-statement — FALSE: the holomorphic inverse function theorem is global
- `fs-every-germ-is-regular-in-the-last-variable-without-a-coordinate-change` · false-statement — FALSE: every nonzero germ is regular in the last variable without a coordinate change
- `fs-weierstrass-preparation-is-unique-without-the-unit-condition` · false-statement — FALSE: Weierstrass preparation is unique without requiring the nonpolynomial factor to be a unit
- `fs-a-nonconstant-scalar-holomorphic-function-in-dimension-at-least-two-can-have-an-isolated-zero` · false-statement — FALSE: a nonconstant scalar holomorphic function in dimension at least two can have an isolated zero

## Your seams

**No dependency edge crosses your group boundary.** Every `requires` your
pages declare points inside your own batches or at published content. A
cross-group finding is therefore unexpected here; if you record one, say
what made you look.

## Alerts from other groups

None. No other group flagged an item you own.

## Your rejections

| item | page | model | context_sha256 |
|---|---|---|---|
| `cex-e-to-n-z-converges-chordally-to-infinity-on-the-right-half-plane` | `normal-families-and-montels-theorem-examples` | gpt-5.6-terra | `ddb80fae46a4d9a16e17ef289df8d3b71da18e8e7ee2f54f1fa1365697090647` |
| `cex-exp-z-one-z-two-has-invertible-complex-jacobian-and-is-not-injective` | `holomorphic-inverse-and-weierstrass-preparation-examples` | gpt-5.6-terra | `1139d98e268199a530606bd13e76d958765efa265bc8dae4221fe34cba1cea33` |
| `cex-exponential-is-a-holomorphic-surjection-of-c-onto-c-times-not-an-automorphism` | `the-riemann-sphere-and-mobius-transformations-examples` | gpt-5.6-terra | `4a53c675daba486125a6c0f4572ea12d69220b116c399fdce59fa3a47bfb8d66` |
| `cex-n-times-z-is-not-normal-near-zero` | `normal-families-and-montels-theorem-examples` | gpt-5.6-terra | `272359b2cd1121739834688f43f902c63bd407f465328d361e61a6aafa7af8d0` |
| `cor-compact-open-topology-is-independent-of-exhaustion` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `b96adb026e3998d9ab40c7013803be592c480e3450183ccb9f4080bdcb59375f` |
| `cor-derivative-operators-are-continuous-for-local-uniform-convergence` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `14422ca531ea686a953839b76591b377d17d838f5f6efd20b0f87c211f0e73b9` |
| `cor-entire-biholomorphisms-are-affine` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `9d6875ac5e8707f576c9975ee604a89cab511ce8103f2a2a88741894eb1c586a` |
| `def-chordal-local-uniform-convergence-and-meromorphic-normality` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `92a569b610872ecb90ba0098c4332079e61b8a4266ba4af3fd6042cd08a83717` |
| `def-circline-and-reflection` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `329ae0e04d58e805d9e098185a3c05c529fbae7d05f9836bdae2363a716fd75a` |
| `def-compact-exhaustion-metric-on-function-space` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `b003b3b44245bb0f1580191ec831ecbe56748474d63abaf8f87dcddfa62d2197` |
| `def-degree-rational-map-riemann-sphere` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `0bd06bd21e6ae820036bd32c52b26e5cf42515ac46665770d136f758fe3cd1ca` |
| `def-holomorphic-germ-ring-and-its-maximal-ideal` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `e7c8b28e82cbb5bf5bd8f39fb2e77ffa6ed7a68746b29202f4114c092631aa22` |
| `def-meromorphic-function-riemann-sphere` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `31da1f5b11b10a864efa4e93f46ddfd5989b7ba8fb8d645a2b89782ce9c1af15` |
| `def-noetherian-ring-and-module` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `a5a89fc8545b5090ad5b3006bd1bffc3cf9b7e69bd9378f1de3f2c017e49fe49` |
| `def-regular-holomorphic-germ` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `dc06cf9b86fe0964712918115189afc0715c200d1edc865dcfeede8ee1e5eaad` |
| `def-riemann-sphere-holomorphic-charts` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `74f615cd7ba50aeedc8adcc4aec8cede5acbf047ac7fe26a75ae620a701ade7f` |
| `def-weierstrass-polynomial` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `a7c2b818ccf6484a121422c4e6fab78fedd042b19f006e02ec36b4ee5232dd03` |
| `ex-cayley-transform-biholomorphism-upper-half-plane-to-disc` | `the-riemann-sphere-and-mobius-transformations-examples` | gpt-5.6-terra | `2f77aa8889d8180bc3078c0c959fd662cd3a493c20b8d17fbb87e2417afa23c1` |
| `ex-chordal-distance-formula-from-complex-coordinates` | `the-riemann-sphere-and-mobius-transformations-examples` | gpt-5.6-terra | `a8e8e450feaf67ed538d7476f00e7ded741792b6cf2812278636c8f54a890966` |
| `ex-diagonal-extraction-on-a-disc-for-montels-theorem` | `normal-families-and-montels-theorem-examples` | gpt-5.6-terra | `9c6c74a0601684b4ac846a5709a03b772385116843a6113c2894aab42bfd4282` |
| `ex-mobius-transformation-from-three-point-correspondence` | `the-riemann-sphere-and-mobius-transformations-examples` | gpt-5.6-terra | `6f502fd40a4a417c212d889e1251dd07f7ec2227adfb5e169e59f943cfaee3c5` |
| `ex-the-unit-ball-family-is-normal-on-any-domain` | `normal-families-and-montels-theorem-examples` | gpt-5.6-terra | `3219a23b36fb002de729b2ddb0976604d4327fd7551d16ad2ea161149b6362ec` |
| `ex-weierstrass-division-of-z-one-by-z-two-squared-minus-z-one` | `holomorphic-inverse-and-weierstrass-preparation-examples` | gpt-5.6-terra | `1326b2ccec30366a7232de20dab3ffb1d4f0050754d906b14b3a81a5dd0dceb4` |
| `ex-z-one-squared-minus-z-two-prepares-to-z-two-minus-z-one-squared` | `holomorphic-inverse-and-weierstrass-preparation-examples` | gpt-5.6-terra | `1b844d651d1a63c37904b58b61cd79e0c806dc722d120518d55ed326a5a931da` |
| `ex-z-to-the-n-is-normal-on-the-disc-but-not-on-the-plane` | `normal-families-and-montels-theorem-examples` | gpt-5.6-terra | `3d4079b75ff80511c57ce20780cb170257a76824671e8d3f7afc5295a0a563a0` |
| `fs-arzela-ascoli-alone-proves-montel` | `normal-families-and-montels-theorem-examples` | gpt-5.6-terra | `5ac609a2f2fa5f0f047b69fdab2cf86c28930be719181aeadd69520573ef3ec2` |
| `fs-every-mobius-self-map-restricts-to-an-entire-biholomorphism` | `the-riemann-sphere-and-mobius-transformations-examples` | gpt-5.6-terra | `1a450c8d4af9796e4c7714be7b2fadfe21e5d7c71c540c2bb57c1b0b79788d5d` |
| `fs-normality-means-sequential-limits-stay-inside-the-family` | `normal-families-and-montels-theorem-examples` | gpt-5.6-terra | `28e5feebcbdf54dde5ac8378672d13e2ae79de666db6cd0ba9e0319595cba26a` |
| `fs-the-riemann-sphere-is-homeomorphic-to-the-complex-plane` | `the-riemann-sphere-and-mobius-transformations-examples` | gpt-5.6-terra | `900125e78f54c73c0481fa5fedcf706822edc6b43a0e051b6c0eb1ee1ee5ef30` |
| `fs-weierstrass-preparation-is-unique-without-the-unit-condition` | `holomorphic-inverse-and-weierstrass-preparation-examples` | gpt-5.6-terra | `af8874d5180edf88e6249a0fb98539661153edb0acb1c4c868b2eacb09681e9d` |
| `lem-canonical-compact-exhaustion-of-a-plane-domain` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `d5054b9d3da5d6f02184e8420954b96af88fd9fcd2728545030b0c0b336bd9f2` |
| `lem-gauss-lemma-over-a-ufd` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `42f99da6bb1b589b808e3eb82257f78a7b2172e2e26e823222900136f4844966` |
| `lem-generic-linear-coordinate-makes-a-holomorphic-germ-regular` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `f852c537b1e24a5877584dfeca0ced8f9ebc5057d2d3a4d310b79d08daed8a68` |
| `lem-holomorphic-power-sums-of-slice-zeros` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `cb29477e89134be87cbbcfd11a99edbd1f799c1fb4b9c0da05704b29048a7f2a` |
| `lem-locally-bounded-holomorphic-families-are-locally-equicontinuous` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `8fc56bbe17f29be1c4b003bfaae4ad6715e7c13c68b323cc7ccaf8c56cb518ff` |
| `lem-prepared-factorizations-and-irreducibility` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `b52f9a09b0d43ec5c8d82f45e08229f2c8e3cb38653bfaf2218021c23e7324ee` |
| `lem-real-jacobian-determinant-of-a-complex-linear-map` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `fd2684c5ffaf941c7ba458e98723cdc5fe7afdd5d19ce87c1e1ec009dac8538f` |
| `lem-stability-of-slice-zero-count-under-holomorphic-parameters` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `2e7f8a152d48dae8d73eb6db19b0238cc1505eac58ca28a5fad73c5f3fe99ac3` |
| `lem-weierstrass-quotient-is-a-finite-module` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `07b20cb23473a06dbc1ef2d970006508ebda9f2e5f88bdc78e81c1d5b090e5b0` |
| `rem-riemann-sphere-one-point-compactification` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `8b075754b58a496f55bdf72444c79c7af0a2ce24a0c3ceb04699bb8e90f4eed2` |
| `thm-automorphisms-punctured-plane` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `78180f771703fa32e45f73fc01871e2ec7bb59963375347a8ecbfc81bce4ee0f` |
| `thm-biholomorphic-self-maps-riemann-sphere-are-mobius` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `83f9998bd3ee929df139787fee0904a7f325c7b2c19013c0a0707f24ffb1e5a8` |
| `thm-chordal-arzela-ascoli-criterion-for-meromorphic-families` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `0008acc7d06fcfc22d7a9c6032b65803b043309f875d2fbdc8b97a69c140b1c4` |
| `thm-chordal-limit-theorem-for-meromorphic-functions` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `11f708a6a6c1b183c7b7c9f698222510ccddef2bbdec7334e891f080c29c82a5` |
| `thm-classification-mobius-transformations` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `6aba210de480bcd48ae7921a424d9ecbe20ba5a040fc438bc7e57c20df2e22fa` |
| `thm-compact-exhaustion-metric-characterizes-local-uniform-convergence` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `59f34d1ba255d63dacf1b9c2bb0adc62f6d847c03726094ad8cf68f06f693a8f` |
| `thm-cross-ratio-mobius-invariant` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `b2d1c5e29400fd36412d4d6ba678e78d793fecd71d4caa604636100ad58e1675` |
| `thm-holomorphic-constant-rank-theorem` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `2dd22383b845bd3723dc9ccf780752e607f0ec0f4f26e0329e3a93eaef0507b7` |
| `thm-holomorphic-germ-ring-is-a-ufd` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `3b45031ebe602c707fadcfb87eb06311ae2be5fdfa3e0884407e8a18ef4a9463` |
| `thm-holomorphic-germ-ring-is-noetherian` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `f316da8e2d87c822f0cd18bb051364542f2f878cab09b93c5912e24505bf5a1b` |
| `thm-holomorphic-inverse-function-theorem-several-variables` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `329cb672d415b55eefa5d923b5e1d9c8bad021d08af7b94baeb092dbff91fbd9` |
| `thm-meromorphic-functions-riemann-sphere-are-rational` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `a217e6fb0c3ac781a2920b02223aedf6ec1b0390468bb2c44dfc4b9b758d343e` |
| `thm-mobius-group-and-projective-linear-identification` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `c88e007a18877b9d8d91b9f63ab7c4466928074f20911de28b2fe2afa7b4b771` |
| `thm-mobius-preserves-circlines-and-reflections` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `b6acf2c38a3563d32b2fef6f2425ac3efcf3fe68c54ed4635ba2682e43494511` |
| `thm-montel-theorem-for-holomorphic-functions` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `218fcb1ff0404efd1def5b6d67fdf2051679ad40a89529b2a6566cdca6e3fb3e` |
| `thm-normal-holomorphic-families-are-locally-bounded` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `dd3e8e57303fd1a4f072a07da361632773a71d2410bfa3264440d32affa1ece1` |
| `thm-real-cross-ratio-circline-characterization` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `e713551913536c9ed2cd3ffe9fa8700a93f357d3887053b63bb60b10f5db0a7d` |
| `thm-riemann-extension-across-hypersurface-zero-sets` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `d3e5d4d52f3a9632fa34791cd3eb6b6a54ce4b4d8be070e5adb894fa12c3ca46` |
| `thm-stereographic-projection-riemann-sphere-homeomorphism` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `c84aab636d289c8d23067f12383dd1812df9bf4c2797da829a1fffec91fd8bd1` |
| `thm-three-point-transitivity-mobius-transformations` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `15989fc2f241984dd86bf4522c83723362db9148444b88f0222518f00c7db110` |
| `thm-uniqueness-in-weierstrass-preparation` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `8cb8a2f6c0f687aed2034337c8efc5f5cba25e7ebcde9e80778b371e4c00c92e` |
| `thm-vitali-porter-convergence-theorem` | `normal-families-and-montels-theorem` | gpt-5.6-terra | `3498d4e59d7672f190dcc3238519ad29c8e6eb32a4c76e75b70448f2f1d0eae3` |
| `thm-weierstrass-division-theorem` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `60152d0e4e5d93826626297e8694b6496f7d9a731abef29415e7569dfcdcdf03` |
| `thm-zero-set-has-no-isolated-points-in-several-complex-variables` | `holomorphic-inverse-and-weierstrass-preparation` | gpt-5.6-terra | `b45291510f064f204e3bd8e75b36515c229147529be8ed02e3088090629dce9f` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — fatal-only configured-judge adjudication, `frontier-22`

The generated scope header supplies the owned pages, items, seams, rejections,
and incoming alerts. Read each owned rejection against the current item and its
cited dependencies; the exact `(id, model, context_sha256)` tuple identifies
one adjudication.

Append one row per rejection to `research/frontier-22-judge-adjudications.jsonl`
with the required tuple, pre-edit guard `item_sha256`, and outcome. Only
`confirmed_fatal` licenses a content repair and matching defect-ledger row;
`confirmed_nonfatal` and `false_positive` close the rejection without content,
contract, impact, or judge changes. The engine rejudges exactly changed items
against the configured judge set.

For an incoming alert, append the owning-group disposition to
`research/frontier-22-step8-alert-decisions.jsonl`. A defect in another group is a
`research/frontier-22-step8-cross-group.jsonl` alert, not permission to repair it. Use
`published-repairs.mjs append` with a namespaced temporary row for an obvious
source-grounded published-item repair; a debatable published change is an
escalation.

Do not create a Step-8 baseline or rewrite shared ledgers. Run the Step-8 guard
and scope check, then write `research/frontier-22-alpha-step8-<group>.md` with every
rejection, outcome, repair, alert, and rejudge target for this group.
