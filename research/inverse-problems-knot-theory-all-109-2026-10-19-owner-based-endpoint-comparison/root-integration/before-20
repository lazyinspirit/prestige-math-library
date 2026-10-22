---
id: cex-knot-kt-38-boundary-case
kind: counterexample
title: "The s-invariant is not twice the knot Floer tau invariant"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - ex-knot-kt-38-worked-cases
  - def-rasmussen-s-invariant
  - def-countable-choice
forward_refs:
  - def-knot-floer-filtration-and-tau
dependency_level: 12
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "AC_omega is inherited from the s and tau definitions; the numerical contradiction is finite arithmetic."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Matthew Hedden and Philip Ording, The Ozsváth–Szabó and Rasmussen concordance invariants are not equal, arXiv:math/0512348v1"
      url: https://arxiv.org/pdf/math/0512348v1
      locator: "Theorem 1.1, printed p. 2"
    - title: "Jacob Rasmussen, Khovanov homology and the slice genus, arXiv:math/0402131v1"
      url: https://arxiv.org/pdf/math/0402131v1
      locator: "§1, printed pp. 1–2"
---

## Statement refuted

Assume the Axiom of Countable Choice. The universal identity $s(K)=2\tau(K)$ for every oriented knot $K$ is false. The positive-clasped Whitehead double of the right-handed trefoil with two full twists in the clasp has $s=2$ and $\tau=0$ in the stated convention, so its two sides are unequal.

## Statement references

[[def-rasmussen-s-invariant|Rasmussen's s-invariant]]

[[def-knot-floer-filtration-and-tau|Knot Floer tau invariant]]

[Hedden–Ording, *The Ozsváth–Szabó and Rasmussen concordance invariants are not equal* (2005), Theorem 1.1](https://arxiv.org/pdf/math/0512348v1)

[Rasmussen, *Khovanov homology and the slice genus* (2004), §1](https://arxiv.org/pdf/math/0402131v1)

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the universal identity and the knot $D_+(T_{2,3},2)$.

[F1] The worked example records the values $s(D_+(T_{2,3},2))=2$ and $\tau(D_+(T_{2,3},2))=0$ in the Hedden–Ording twist convention ([[ex-knot-kt-38-worked-cases]]).

[A1] $\mathrm{AC}_\omega$ is the axiom branch inherited from the knot-invariant definitions and the worked example ([[def-countable-choice]]).

[L1] Those two input values are source-reported but not locally recomputed in [[ex-knot-kt-38-worked-cases]]; its exact Khovanov and knot Floer calculation gaps are recorded there.

## Proof

**Given:** The candidate identity is asserted for every knot.

1.1 Under [A1], substitute the knot $D_+(T_{2,3},2)$ into the proposed identity. By [F1], its left side is $2$, while twice its $\tau$ value is $2\cdot0=0$. Since $2\ne0$, this knot refutes the universal identity, conditional on the two numerical values. [A1, F1, algebra]

2.1 The arithmetic implication in step 1.1 is complete, but the example's local finite calculations remain unresolved by [L1]. Therefore the counterexample statement is preserved and the item is escalated rather than marked ready. [L1, step 1.1] ∎