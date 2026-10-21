---
id: cex-knot-kt-38-boundary-case
kind: counterexample
title: The s-invariant is not twice the knot Floer tau invariant
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - ex-knot-kt-38-worked-cases
  - lem-knot-kt41-whitehead-double-values
  - def-rasmussen-s-invariant
  - def-countable-choice
  - def-knot-floer-filtration-and-tau
forward_refs: []
dependency_level: 13
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: AC_omega is inherited from the s and tau definitions; the numerical contradiction is finite arithmetic.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: Matthew Hedden and Philip Ording, The Ozsváth–Szabó and Rasmussen concordance invariants are not equal, arXiv:math/0512348v1
      url: https://arxiv.org/pdf/math/0512348v1
      locator: Theorem 1.1, printed p. 2
    - title: Jacob Rasmussen, Khovanov homology and the slice genus, arXiv:math/0402131v1
      url: https://arxiv.org/pdf/math/0402131v1
      locator: §1, printed pp. 1–2
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

[F1] The worked example proves the values $s(D_+(T_{2,3},2))=2$ and $\tau(D_+(T_{2,3},2))=0$ in the Hedden–Ording twist convention ([[ex-knot-kt-38-worked-cases]], [[lem-knot-kt41-whitehead-double-values]]).

[A1] $\mathrm{AC}_\omega$ is the axiom branch inherited from the knot-invariant definitions and the worked example ([[def-countable-choice]]).

[L1] The joint numerical lemma proves both the exact Lee value and the normalized full filtered knot Floer threshold for this actual Whitehead double. [[lem-knot-kt41-whitehead-double-values]]

## Proof

**Given:** The proposed universal identity and the specified positive-clasped two-twisted Whitehead double.

1.1 For this actual knot, [F1] and [L1] give $s(D_+(T_{2,3},2))=2$ and $\tau(D_+(T_{2,3},2))=0$. Hence twice its normalized tau value is $2\cdot0=0$. [A1, F1, L1, given, algebra]

2.1 If the asserted identity held for every oriented knot, substituting this knot would give $2=0$. Since these integers are unequal, the displayed knot is an actual counterexample to the universal identity. [step 1.1, algebra] ∎
