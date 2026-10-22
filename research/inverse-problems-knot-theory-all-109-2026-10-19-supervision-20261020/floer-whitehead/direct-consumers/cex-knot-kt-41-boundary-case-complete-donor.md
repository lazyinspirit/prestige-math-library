---
id: cex-knot-kt-41-boundary-case
kind: counterexample
title: "Vanishing tau does not imply smooth sliceness"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-knot-floer-filtration-and-tau
  - lem-tau-is-independent-of-heegaard-grid
  - def-rasmussen-s-invariant
  - thm-rasmussen-s-bounds-smooth-four-ball-genus
  - lem-lee-cobordism-filtration-genus-bound
  - def-smooth-and-topological-slice-genus
  - lem-knot-kt41-whitehead-double-values
  - def-countable-choice
dependency_level: 12
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is inherited from the knot invariant and smooth genus definitions; the final contradiction is finite arithmetic."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Matthew Hedden and Philip Ording, The Ozsvath-Szabo and Rasmussen concordance invariants are not equal"
      url: "https://arxiv.org/pdf/math/0512348v1"
      locator: "Theorem 1.1, printed p.2; §§2.1–2.2 for the knot and invariant computations"
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus"
      url: "https://arxiv.org/pdf/math/0402131v1"
      locator: "§§3–4; the s invariant and its smooth four-ball genus bound"
---

## Statement refuted

Assume the Axiom of Countable Choice. The universal implication that a knot with $\tau(K)=0$ is smoothly slice is false. In the twist convention of Hedden and Ording, the positive-clasped two-twisted Whitehead double $D_+(T_{2,3},2)$ has $\tau=0$ and $s=2$, so its smooth four-ball genus is at least one and it is not smoothly slice.

## Statement references

[[def-knot-floer-filtration-and-tau|The tau invariant]]

[[def-rasmussen-s-invariant|Rasmussen's s invariant]]

[[thm-rasmussen-s-bounds-smooth-four-ball-genus|The smooth genus bound for s]]

[[lem-knot-kt41-whitehead-double-values|The proved values for this Whitehead double]]

[Hedden and Ording, *The Ozsvath-Szabo and Rasmussen concordance invariants are not equal*, Theorem 1.1](https://arxiv.org/pdf/math/0512348v1)

[Rasmussen, *Khovanov homology and the slice genus*, §§3–4](https://arxiv.org/pdf/math/0402131v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the universal implication, and the specified Whitehead double with the source's positive-clasp and two-twist conventions.

[A1] [[def-countable-choice]] is the axiom branch inherited by the knot invariants and smooth genus.

[L1] [[lem-knot-kt41-whitehead-double-values]] proves $\tau=0$ and $s=2$ for the specified positive-clasped two-full-twist knot, using its actual finite Lee and normalized full grid computations.

[L2] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]] states $|s(K)|\le2g_4^{\mathrm{sm}}(K)$, for an actual smooth spanning surface.

[L3] [[lem-lee-cobordism-filtration-genus-bound]] is the exact supplier required by [L2]; its hypothesis is a smoothly properly embedded surface in $S^3\times[0,1]$ with product collars, not an abstract oriented surface with knot labels.

## Proof

**Given:** Countable Choice, the proposed implication, and the actual Whitehead double in the Statement.

1.1 The joint value lemma [L1] gives $\tau(D_+(T_{2,3},2))=0$ and $s(D_+(T_{2,3},2))=2$ in precisely the stated convention. Apply the smooth embedded-surface bound [L2], with its geometric supplier [L3]. It gives $2\le2g_4^{\mathrm{sm}}(D_+(T_{2,3},2))$, so this genus is at least one. [A1, L1, L2, L3, given, algebra]

2.1 A smoothly slice knot bounds a smooth properly embedded disk in the four-ball and therefore has smooth four-ball genus zero. This contradicts the lower bound in step 1.1 for the displayed knot. It is consequently not smoothly slice even though its tau value is zero, giving the required counterexample to the universal implication. [step 1.1, algebra] ∎
