---
id: lem-cft-fusion-matrix-diagonalization-implies-verlinde
kind: lemma
title: Simultaneous fusion-matrix diagonalization implies the Verlinde formula
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps: []
dependency_roles: {}
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Yi-Zhi Huang, Vertex operator algebras and the Verlinde conjecture
      url: https://arxiv.org/pdf/math/0406291v3
      locator: Theorem 5.2, Corollary 5.4, Theorem 5.5, and the adjacent proof, PDF pages 52–56.
---

## Statement

Let $I$ be a finite set with a distinguished label $0$ and an involution $i\mapsto i^*$. Define the duality matrix $C$ by $C_{ij}=\delta_{i,j^*}$. Let $S$ be a symmetric invertible complex matrix indexed by $I$ such that $S^2=C$ and $S_{0x}\neq0$ for every $x\in I$. For coefficients $N_{ij}^{\,k}$, define the fusion matrices by $(N_i)_{j,k}=N_{ij}^{\,k}$. If

$$N_iS=S\,\operatorname{diag}\!\left(\frac{S_{ix}}{S_{0x}}\right)_{x\in I}\qquad\text{for every }i\in I,$$

then

$$N_{ij}^{\,k}=\sum_{x\in I}\frac{S_{ix}S_{jx}S_{k^*x}}{S_{0x}}.$$

This is an algebraic implication for the stated matrix data; it does not assert that a VOA supplies those data.

## Facts & Assumptions

**Given:** The finite label set, distinguished unit label, duality involution, matrix $S$, and fusion coefficients are the ones in the Statement.

[A1] The duality matrix is a permutation matrix for an involution, so $C^2=I$.

[A2] $S$ is symmetric, $S^2=C$, $S_{0x}\neq0$, and every $N_i$ satisfies the displayed simultaneous diagonalization identity.

## Proof

1.1 By [A1] and [A2], $S^4=C^2=I$, so $S^{-1}=S^3$. Since $S^2=C$, $S$ commutes with $C$; hence $S^{-1}=CS$. For any $x,k\in I$, $(S^{-1})_{xk}=S_{x^*,k}=S_{k,x^*}=S_{k^*,x}$, using the symmetry of $S$ and the equality $CS=SC$. [given, A1, A2, algebra]

2.1 From $N_iS=SD_i$, where $(D_i)_{xx}=S_{ix}/S_{0x}$, multiply on the right by $S^{-1}$ to get $N_i=SD_iS^{-1}$. Its $j,k$ entry is therefore $\sum_x S_{jx}(S_{ix}/S_{0x})(S^{-1})_{xk}$. Substituting step 1.1 gives the formula in the Statement. [given, A2, step 1.1, algebra] ∎

## Proof status

This proves the finite-dimensional algebraic reduction used by R3-14. It does not prove simultaneous diagonalization, symmetry, $S^2=C$, or nonvanishing of $S_{0x}$ for VOA characters.
