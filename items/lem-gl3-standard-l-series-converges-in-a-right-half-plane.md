---
dependency_level: 6
id: lem-gl3-standard-l-series-converges-in-a-right-half-plane
kind: lemma
title: "Absolute Convergence of the Initial GL3 L-Series"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-standard-gl3-l-function-and-dirichlet-twist
  - def-dirichlet-character-modulo-q
  - def-full-level-gl3-automorphic-distribution
proof_strategy: direct
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §6.1"
      url: "https://arxiv.org/pdf/math/0408100v3"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

For every full-level GL3 automorphic distribution $\tau$ there is a real number $\sigma_0$ such that the series defining $L(s,\tau)$ and $L(s,\widetilde{\tau})$ converge absolutely whenever $\operatorname{Re}s>\sigma_0$, and for every primitive Dirichlet character $\chi$ the series defining $L(s,\tau\otimes\chi)$ and $L(s,\widetilde{\tau}\otimes\chi)$ converge absolutely in the same half-plane.

## Statement references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, §6.1](https://arxiv.org/pdf/math/0408100v3)

## Facts & Assumptions

**Given:** A full-level GL3 automorphic distribution $\tau$ and any Dirichlet character $\chi$.

[F1] [[def-standard-gl3-l-function-and-dirichlet-twist]]: the standard and twisted series use the normalized coefficients $a_{1,n}$ and $a_{n,1}$.

[F2] [[def-full-level-gl3-automorphic-distribution]]: the central average $\tau_0$ is a distribution on the compact torus $\mathbb T^2$ and $c_{r,s}$ are its Fourier coefficients.

[F3] [[def-dirichlet-character-modulo-q]]: a character is zero on nonunits and on the finite unit group is a homomorphism into $\mathbb C^\times$.

## Proof

1.1 Continuity of the distribution $\tau_0$ on the compact torus gives constants $C>0$ and an integer $m\geq0$ such that $|\langle\tau_0,\phi\rangle|\leq C\max_{|\alpha|\leq m}\|\partial^\alpha\phi\|_\infty$ for every smooth $\phi$. Apply this to $\phi(x,y)=e(-rx-sy)$; each derivative of order at most $m$ is bounded by a constant times $(1+|r|+|s|)^m$. Thus $|c_{1,n}|+|c_{n,1}|\leq C'(1+n)^m$ for $n\geq1$. [F2, given]

2.1 By the coefficient normalization in [F1], for $n\geq1$, $|a_{1,n}|\leq C'n^{m-\operatorname{Re}\lambda_3}$ and $|a_{n,1}|\leq C'n^{m+\operatorname{Re}\lambda_1}$, because the sign factors have modulus one. [F1, step 1.1, algebra]

3.1 The values of $\chi$ on units are roots of unity, since they lie in the finite image of a homomorphism from $(\mathbb Z/Q\mathbb Z)^\times$; elsewhere they are zero by [F3]. Hence $|\chi(n)|\leq1$ for all $n$. Choose $\sigma_0>1+m+\max\{-\operatorname{Re}\lambda_3,\operatorname{Re}\lambda_1\}$. For $\operatorname{Re}s>\sigma_0$, each absolute-value series is bounded by a constant times a convergent $p$-series $\sum_{n\geq1}n^{-1-\epsilon}$ for some $\epsilon>0$. This proves absolute convergence of all four series in that half-plane. [F3, step 2.1, given, algebra] ∎

