---
id: lem-knot-kt41-whitehead-double-values
kind: lemma
title: "The two-twisted positive Whitehead double has tau zero and s two"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-is-independent-of-heegaard-grid
  - def-rasmussen-s-invariant
  - def-lee-deformed-khovanov-complex
  - alg-khovanov-chain-complex-from-diagram
  - def-grid-diagram-for-an-oriented-knot
  - alg-grid-knot-floer-complex
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-smooth-and-topological-slice-genus
  - lem-smooth-and-topological-slice-genus-minima-exist
  - lem-lee-cobordism-filtration-genus-bound
  - thm-rasmussen-s-bounds-smooth-four-ball-genus
  - def-countable-choice
  - lem-two-twisted-positive-whitehead-trefoil-double-has-s-two
  - lem-explicit-two-twisted-whitehead-double-has-sixteen-crossing-code
  - lem-positive-whitehead-clasp-band-gives-genus-one-surface
  - lem-lee-filtered-spectral-sequence-and-two-orientation-classes
  - lem-khovanov-cube-differential-squares-to-zero
dependency_level: 11
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is inherited from the invariant and smooth-genus definitions and the finite diagram choices. No full Axiom of Choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Matthew Hedden and Philip Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Theorem 1.1 and §§2.1–2.2, printed pp.2–10; the two-twisted positive Whitehead double, Lee filtration and the 25-generator knot Floer computation"
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus"
      url: "https://arxiv.org/pdf/math/0402131v1"
      locator: "§§3–4, printed pp.6–12; the s invariant and the cobordism filtration bound"
    - title: "Jennifer Hom, A survey on Heegaard Floer homology and concordance"
      url: "https://arxiv.org/pdf/1512.00383v3"
      locator: "§§3.1 and 5; tau and the comparison with Rasmussen's invariant"
---

## Statement

Assume the Axiom of Countable Choice. Let $D_+(T_{2,3},2)$ be the positive-clasped Whitehead double of the right-handed trefoil with two full twists in the clasp, using the twist convention of Hedden and Ording. The normalized knot Floer threshold and Rasmussen invariant satisfy
$$\tau(D_+(T_{2,3},2))=0,\qquad s(D_+(T_{2,3},2))=2.$$

## Statement references

[[def-knot-floer-filtration-and-tau|The normalized tau threshold]]

[[def-rasmussen-s-invariant|Rasmussen's s invariant and filtration convention]]

[Hedden and Ording, *The Ozsvath-Szabo and Rasmussen concordance invariants are not equal*, Theorem 1.1 and §§2.1–2.2](https://arxiv.org/pdf/math/0512348v1)

[Rasmussen, *Khovanov homology and the slice genus*, §§3–4](https://arxiv.org/pdf/math/0402131v1)

[Hom, *A survey on Heegaard Floer homology and concordance*, §§3.1 and 5](https://arxiv.org/pdf/1512.00383v3)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the specified positive-clasped two-twisted Whitehead double, and the source's twist convention.

[A1] [[def-countable-choice]] is the axiom branch used by the knot invariant, the finite diagrams, and the smooth four-ball genus.

[F1] [[def-knot-floer-filtration-and-tau]] defines tau by the first Alexander filtration level mapping nontrivially to total hat homology.

[F2] [[def-rasmussen-s-invariant]] defines $s$ from the filtration levels of the two Lee homology generators.

[L1] [[thm-grid-homology-independent-of-grid-and-equals-knot-floer]] is the declared grid-to-analytic comparison needed to turn a finite knot Floer calculation into the normalized tau value. Its current Step-1 decision is escalated, and it does not provide the specific 25-generator differential computation.

[L2] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]] states the smooth genus bound used in the source to choose the value $s=2$ from the Khovanov calculation's alternatives, for actual embedded smooth surfaces; the bound alone does not compute the finite Khovanov groups, whose calculation is now supplied by [F3].

[L3] [[lem-lee-cobordism-filtration-genus-bound]] is the exact Lee-cobordism input required by [L2]; its smooth surface is required to be properly embedded in $S^3\times[0,1]$ with product collars.

[F3] [[lem-two-twisted-positive-whitehead-trefoil-double-has-s-two]] proves $s(D_+(T_{2,3},2))=2$ from the admitted code, its exact finite Khovanov matrices, the Lee spectral sequence and the actual embedded genus-one bound.

## Proof

**Given:** Countable Choice and the knot in the Statement. The independent knot Floer equality remains unresolved below.

1.1 The knot in [F3] is the same positive-clasped Whitehead double of the right-handed trefoil with the Hedden–Ording framing convention fixed in the Statement. Thus the supplied $s$ calculation applies to the actual knot named here, with the same normalized Rasmussen invariant [F2]. [A1, F2, F3, given]

2.1 Applying [F3] gives $s(D_+(T_{2,3},2))=2$, proving the Rasmussen component of the full Statement. This application uses no knot Floer computation and supplies no conclusion about the independent $\tau$ component, which remains unresolved below. [A1, F2, F3, step 1.1, algebra] ∎

## Remarks

### Unresolved Floer obligation

The knot Floer equality $\tau=0$ still requires the actual finite filtered Floer complex and its geometric admission. Neither the finite Khovanov calculation in [F3] nor the grid-to-analytic comparison [L1] supplies that computation. Thus the independent $\tau$ equality in the full Statement remains unresolved; this joint carrier does not claim full proof completion.
