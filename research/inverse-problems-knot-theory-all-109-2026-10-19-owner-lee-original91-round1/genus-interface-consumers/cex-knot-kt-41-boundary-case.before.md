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

[[lem-knot-kt41-whitehead-double-values|The source-reported values for this Whitehead double]]

[Hedden and Ording, *The Ozsvath-Szabo and Rasmussen concordance invariants are not equal*, Theorem 1.1](https://arxiv.org/pdf/math/0512348v1)

[Rasmussen, *Khovanov homology and the slice genus*, §§3–4](https://arxiv.org/pdf/math/0402131v1)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, the universal implication, and the specified Whitehead double with the source's positive-clasp and two-twist conventions.

[A1] [[def-countable-choice]] is the axiom branch inherited by the knot invariants and smooth genus.

[L1] [[lem-knot-kt41-whitehead-double-values]] states $\tau=0$ and $s=2$ for the specified knot, but its current proof does not reproduce the finite Khovanov/Lee and knot Floer computations.

[L2] [[thm-rasmussen-s-bounds-smooth-four-ball-genus]] states $|s(K)|\le2g_4^{\mathrm{sm}}(K)$, but its current proof is escalated on the Lee cobordism filtration supplier.

[L3] [[lem-lee-cobordism-filtration-genus-bound]] is the exact supplier required by [L2]; its current proof has unresolved map, movie, and local filtration checks.

## Proof

1.1 If the values in [L1] are locally established, [L2] gives $2=|s(D_+(T_{2,3},2))|\le2g_4^{\mathrm{sm}}(D_+(T_{2,3},2))$, hence the genus is at least one and the knot is not smoothly slice. Its tau value is then zero by [L1], contradicting the proposed implication. [L1, L2, given, algebra]

2.1 The finite computation supporting [L1] is not present in its current carrier, and the proof of [L2] is escalated because [L3] remains unresolved. Thus the logical contradiction is complete conditional on those numerical and genus-bound inputs, but this item remains escalated and does not claim their local verification. [A1, L1, L2, L3, step 1.1, given]
