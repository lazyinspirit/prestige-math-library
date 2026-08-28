# Exact Step-8 repair envelope — 8-rejudge, round 1

The JSON envelope below is the authority for this dispatch. It contains every failing gate from the battery,
the full untruncated output, exact current rejection tuples, and explicit run/published ownership.
Act only on `assigned_items` and `live_tuples`; do not substitute the latest event-log row.

```json
{
  "version": 1,
  "run": "frontier-22",
  "stage": "8-rejudge",
  "round": 1,
  "mode": "rejudge-adjudication",
  "group": "d",
  "failures": [
    {
      "id": "judge-closure",
      "stage": "8-rejudge",
      "why": "ERROR judge-adjudication-missing [cor-dominated-convergence-is-a-vitali-corollary]: cor-dominated-convergence-is-a-vitali-corollary: current gpt-5.6-terra rejection has no exact Alpha outcome for context 32d16d277d33e43066d7f5e3a2b024b4f072",
      "output": "level-coverage --judge-only: 425/425 current configured-judge verdict set(s); 0 terminal manual resolution(s), 0 need rejudge, 17 unadjudicated, 0 open fatal, 170 adjudicated rejection(s) closed nonfatally; legacy gate counter 425/425 current pairs (one per-item configured verdict set, including singleton lineups)\nERROR judge-adjudication-missing [cor-dominated-convergence-is-a-vitali-corollary]: cor-dominated-convergence-is-a-vitali-corollary: current gpt-5.6-terra rejection has no exact Alpha outcome for context 32d16d277d33e43066d7f5e3a2b024b4f072c4ef38e6b31de6a76828e44e8812\nERROR judge-adjudication-missing [def-algebraic-connectivity-of-a-graph]: def-algebraic-connectivity-of-a-graph: current gpt-5.6-terra rejection has no exact Alpha outcome for context 0bed17ddc01711e56e2a6dc625038609a5b8cccf7d5e01c7b6915e197e3ccdb4\nERROR judge-adjudication-missing [def-the-axioms-ab5-and-ab5-star]: def-the-axioms-ab5-and-ab5-star: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2f21fdb1fb542f7610d96c287699e061d92d96e7375497bbdcd02dc29c993974\nERROR judge-adjudication-missing [ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval]: ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval: current gpt-5.6-terra rejection has no exact Alpha outcome for context 33328bbbf66ddbd92689abbbc3c3d76877ff0b653018bd23a9787e5594f944af\nERROR judge-adjudication-missing [ex-redundant-primary-component-deletion]: ex-redundant-primary-component-deletion: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4398256c6a4a627d2e0cc0cbb69aff5414f8c0a1e655a99e3dcd50d7cd96af86\nERROR judge-adjudication-missing [ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise]: ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise: current gpt-5.6-terra rejection has no exact Alpha outcome for context 97822e44048f55f36e410280a79f0e758eb9c19ca30846086a22a171f14412d9\nERROR judge-adjudication-missing [fs-arzela-ascoli-alone-proves-montel]: fs-arzela-ascoli-alone-proves-montel: current gpt-5.6-terra rejection has no exact Alpha outcome for context 83d2d9b15db08597988e16227838c2a1cbe06bed11c202ea4362fef4e6773925\nERROR judge-adjudication-missing [fs-convergence-in-measure-implies-almost-everywhere-convergence]: fs-convergence-in-measure-implies-almost-everywhere-convergence: current gpt-5.6-terra rejection has no exact Alpha outcome for context 001d2cad733cb586e16b3f944ad3405f10a260d76964afcbb820c5ea0a492fe0\nERROR judge-adjudication-missing [lem-basic-bull-free-hole-with-a-complete-outside-vertex]: lem-basic-bull-free-hole-with-a-complete-outside-vertex: current gpt-5.6-terra rejection has no exact Alpha outcome for context 3ec50aefeca6fb186b8213fef98d46605170e18e9f02cfa27a35a084606d2549\nERROR judge-adjudication-missing [lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy]: lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy: current gpt-5.6-terra rejection has no exact Alpha outcome for context 4f96b56f8c391cc4a78ece4c02aa7a1a27313c51e114a8e34ec4d73a98f3c7e1\nERROR judge-adjudication-missing [rem-finite-measure-implication-table-for-the-main-modes-of-convergence]: rem-finite-measure-implication-table-for-the-main-modes-of-convergence: current gpt-5.6-terra rejection has no exact Alpha outcome for context 7a2e5ff21195734e733b02cdde43e2bd393073a44a59d0d3bc09e2035186726d\nERROR judge-adjudication-missing [thm-binet-cauchy-formula]: thm-binet-cauchy-formula: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2870dad27d26aae477bc954fb7de8a55abe6ba7d5a527f66e03628ee9b76581c\nERROR judge-adjudication-missing [thm-hnn-normal-form-theorem]: thm-hnn-normal-form-theorem: current gpt-5.6-terra rejection has no exact Alpha outcome for context 6c2113c42c1da70c72463df10e5008de5045351f5a0ed79eac35f3b3dc4367a3\nERROR judge-adjudication-missing [thm-lasker-noether-primary-decomposition]: thm-lasker-noether-primary-decomposition: current gpt-5.6-terra rejection has no exact Alpha outcome for context adc871af5a08fd4077c21d2534641fb256c2aa8678b96ae1a19d03f5d53ee052\nERROR judge-adjudication-missing [thm-mobius-preserves-circlines-and-reflections]: thm-mobius-preserves-circlines-and-reflections: current gpt-5.6-terra rejection has no exact Alpha outcome for context 160101f1d2c3fa7fd3b758792aef98f17b0325434c06ddd5aeafbf905a9effa6\nERROR judge-adjudication-missing [thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module]: thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module: current gpt-5.6-terra rejection has no exact Alpha outcome for context 2f895f99cdbe1cd3be404498f7039dad8e33c77bbdee666d750a6be22ccdaf26\nERROR judge-adjudication-missing [thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations]: thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations: current gpt-5.6-terra rejection has no exact Alpha outcome for context 5c720cb569130dd9d3ccb1cfe9df86200aff206ac585248484a1b71b8fd8baba\n",
      "named_ids": [
        "cor-dominated-convergence-is-a-vitali-corollary",
        "def-algebraic-connectivity-of-a-graph",
        "def-the-axioms-ab5-and-ab5-star",
        "ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval",
        "ex-redundant-primary-component-deletion",
        "ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise",
        "fs-arzela-ascoli-alone-proves-montel",
        "fs-convergence-in-measure-implies-almost-everywhere-convergence",
        "lem-basic-bull-free-hole-with-a-complete-outside-vertex",
        "lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy",
        "rem-finite-measure-implication-table-for-the-main-modes-of-convergence",
        "thm-binet-cauchy-formula",
        "thm-hnn-normal-form-theorem",
        "thm-lasker-noether-primary-decomposition",
        "thm-mobius-preserves-circlines-and-reflections",
        "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
        "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations"
      ]
    }
  ],
  "mechanical_residue": "",
  "live_items": [
    {
      "id": "cor-dominated-convergence-is-a-vitali-corollary",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "def-algebraic-connectivity-of-a-graph",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "def-the-axioms-ab5-and-ab5-star",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "ex-lusin-for-the-indicator-of-the-rationals-in-the-unit-interval",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-redundant-primary-component-deletion",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "ex-the-typewriter-sequence-converges-in-measure-and-in-l-one-but-nowhere-pointwise",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "fs-arzela-ascoli-alone-proves-montel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "fs-convergence-in-measure-implies-almost-everywhere-convergence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "lem-basic-bull-free-hole-with-a-complete-outside-vertex",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "lem-conjugacy-of-cyclically-britton-reduced-hnn-words-reduces-to-associated-subgroup-conjugacy",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "rem-finite-measure-implication-table-for-the-main-modes-of-convergence",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-binet-cauchy-formula",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-hnn-normal-form-theorem",
      "scope": "run",
      "owner": "a"
    },
    {
      "id": "thm-lasker-noether-primary-decomposition",
      "scope": "run",
      "owner": "b"
    },
    {
      "id": "thm-mobius-preserves-circlines-and-reflections",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-split-set-with-complete-and-anticomplete-outsiders-yields-a-module",
      "scope": "run",
      "owner": "c"
    },
    {
      "id": "thm-the-erdos-hajnal-property-is-equivalent-to-the-cograph-perfect-and-kappa-formulations",
      "scope": "run",
      "owner": "c"
    }
  ],
  "assigned_items": [
    {
      "id": "fs-arzela-ascoli-alone-proves-montel",
      "scope": "run",
      "owner": "d"
    },
    {
      "id": "thm-mobius-preserves-circlines-and-reflections",
      "scope": "run",
      "owner": "d"
    }
  ],
  "live_tuples": [
    {
      "id": "fs-arzela-ascoli-alone-proves-montel",
      "model": "gpt-5.6-terra",
      "context_sha256": "83d2d9b15db08597988e16227838c2a1cbe06bed11c202ea4362fef4e6773925",
      "scope": "run",
      "status": "unadjudicated"
    },
    {
      "id": "thm-mobius-preserves-circlines-and-reflections",
      "model": "gpt-5.6-terra",
      "context_sha256": "160101f1d2c3fa7fd3b758792aef98f17b0325434c06ddd5aeafbf905a9effa6",
      "scope": "run",
      "status": "unadjudicated"
    }
  ]
}
```

---

# Step 8 — group **d**, run `frontier-22`

You are the group Alpha for batches **6**, **7**: 3 A/B pair(s), 6 page(s), 99 item(s), 2 open rejection(s) over 2 item(s).

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
| `fs-arzela-ascoli-alone-proves-montel` | `normal-families-and-montels-theorem-examples` | gpt-5.6-terra | `83d2d9b15db08597988e16227838c2a1cbe06bed11c202ea4362fef4e6773925` |
| `thm-mobius-preserves-circlines-and-reflections` | `the-riemann-sphere-and-mobius-transformations` | gpt-5.6-terra | `160101f1d2c3fa7fd3b758792aef98f17b0325434c06ddd5aeafbf905a9effa6` |

Rendered from the ledger at scope time. **The ledger is the authority** — if
a row appeared since, it is still yours to adjudicate.

---

# Step 8 — exact closure recovery, `frontier-22`

Read `research/frontier-22-judge-closure.json`,
`research/frontier-22-judge.jsonl`,
`research/frontier-22-judge-adjudications.jsonl`, and the generated `by_item`
ownership map in `research/frontier-22-step8-scope.json`. Take only current
unadjudicated `(id, model, context_sha256)` rows owned by this group; leave
other groups' rows untouched. A row owned by no group is a reported blocker,
not a row to discard.

Append one exact adjudication outcome per owned row. Only
`confirmed_fatal` licenses its coherent repair and matching ledger row; update
only records made stale by that repair. Send a concrete other-group finding to
`research/frontier-22-step8-cross-group.jsonl`, never repair that item.

Write `research/frontier-22-alpha-step8-closure-recovery-<group>.md` with the rows
handled, outcomes, licensed repairs, rejudge targets, cross-group alerts, and
blockers. Preserve shared append-only ledgers.
