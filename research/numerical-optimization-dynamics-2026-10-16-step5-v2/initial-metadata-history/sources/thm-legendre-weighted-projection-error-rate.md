---
id: thm-legendre-weighted-projection-error-rate
kind: theorem
title: "Legendre weighted projection has its spectral-Sobolev rate"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [def-legendre-weighted-sobolev-scale, lem-legendre-weighted-derivative-orthogonality-and-norm]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
axiom_use: "No choice axiom is used; the bound is a weighted coefficient-tail estimate."
verification:
  precheck: pending
sources:
  references:
    - title: "Jie Shen and Tao Tang, Spectral and High-Order Methods with Applications, Ch. 3"
      url: "https://www.math.purdue.edu/~shen7/sp_intro12/book.pdf"
      locator: "Printed pp. 105–118 / PDF pp. 111–124; weighted orthogonal projection estimates."
    - title: "Lloyd N. Trefethen, Finite Difference and Spectral Methods for Ordinary and Partial Differential Equations, Ch. 8"
      url: "https://www.math.hmc.edu/~dyong/math165/trefethenbook.pdf"
      locator: "Chapter 8, printed pp. 245–283 (complete book PDF); polynomial spectral approximation context."
---

## Statement

Let $s\ge0$, $N\ge0$, and $u=\sum_{n\ge0}c_nP_n\in H_L^s$ from [[def-legendre-weighted-sobolev-scale]]. Then
$$
\|u-\Pi_Nu\|_{L_L^2}\le(1+(N+1)(N+2))^{-s/2}\|u\|_{H_L^s}.
$$

## Facts & Assumptions

**Given:** A real $s\ge0$, an integer $N\ge0$, and a coefficient sequence in $H_L^s$.

[F1] [[def-legendre-weighted-sobolev-scale]]: $\Pi_Nu=\sum_{n=0}^Nc_nP_n$ and the $H_L^s$ coefficient weight is $(1+n(n+1))^s2/(2n+1)$; its spectral factor is nondecreasing in $n$ for $s\ge0$.

[F2] [[lem-legendre-weighted-derivative-orthogonality-and-norm]]: $\int_{-1}^1P_nP_m=2\delta_{mn}/(2n+1)$.

## Proof
1.1 For a finite Legendre sum, [F1] gives $u-\Pi_Nu=\sum_{n>N}c_nP_n$. Orthogonality [F2] therefore gives $\|u-\Pi_Nu\|_{L_L^2}^2=\sum_{n>N}\frac{2}{2n+1}|c_n|^2.$ For every $n>N$, $1+n(n+1)\ge1+(N+1)(N+2)$; multiplying each term by the inverse weight gives the stated squared bound for finite sums. [F1, F2, algebra]

2.1 Finite sums are dense in the completion defining $H_L^s$. The truncation $\Pi_N$ is contractive in both the coefficient norm and the $s=0$ norm, so the finite-sum inequality passes to the limit along any Cauchy sequence of finite sums. Taking square roots proves the claimed estimate for every $u\in H_L^s$. [F1, step 1.1, algebra] ∎
