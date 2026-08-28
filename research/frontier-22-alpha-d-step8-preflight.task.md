# Step 8 — group **d**, run `frontier-22`

You are the group Alpha for batches **6**, **7**: 3 A/B pair(s), 6 page(s), 99 item(s), 0 open rejection(s) over 0 item(s).

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

**None open at render time.** That is a real outcome, not an error: Terra
may have passed every item you own. Verify it against
`research/frontier-22-judge.jsonl` yourself before reporting nothing to do —
a rejection recorded after this file was rendered is still yours.

---

# Step 8 — targeted repair-integrity review, `frontier-22`

The generated repair envelope above is authoritative. It supplies every failed
gate with full output, the exact live ids and rejection tuples, and each id's
run or published scope. Take only its `assigned_items` and `live_tuples`; rerun
the focused gate where it supports item scope.

Complete a repair already licensed by an exact `confirmed_fatal` adjudication,
or correct a documentary contract/manifest/impact/verification record that must
match the current proof. Do not edit a nonfatal or false-positive item, broaden
the scope, run a judge sweep, or run a workflow transition.

Preserve append-only ledgers and return the gate, ids, licensing rows, changed
files, targeted checks, and blocker. This task applies before `8-rejudge`; a
frozen-cutover dispatch uses the Step-8 close task instead.
