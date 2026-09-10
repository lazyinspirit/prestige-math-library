---
id: def-kac-moody-root-lattice-height-and-positive-cone
kind: definition
title: "Kac Moody root lattice height and positive cone"
status: draft
origin: pipeline
deps: ["def-realization-of-a-generalized-cartan-matrix"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — end of §1.2, pp.12–13"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
---

## Definition

For a realization as in [[def-realization-of-a-generalized-cartan-matrix]], set $Q=\bigoplus_{i=1}^n\mathbb Z\alpha_i$ and $Q^+=\bigoplus_{i=1}^n\mathbb Z_{\ge0}\alpha_i$. Define $\operatorname{ht}(\sum_i k_i\alpha_i)=\sum_i k_i$. For $\lambda,\mu\in\mathfrak h^*$ write $\mu\le\lambda$ if $\lambda-\mu\in Q^+$.

Independence of the simple roots makes coordinates unique. Thus $Q^+\cap(-Q^+)=\{0\}$, which proves antisymmetry of the order; closure under addition proves transitivity, and $0\in Q^+$ proves reflexivity. Positive roots will belong to $Q^+\setminus\{0\}$, not all of $Q^+$.

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), end of §1.2, pp.12–13.
