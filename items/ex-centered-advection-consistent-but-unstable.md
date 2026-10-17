---
id: ex-centered-advection-consistent-but-unstable
kind: example
title: Centered advection is consistent and unstable under the CFL bound
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps: [def-periodic-one-way-advection-schemes, thm-smooth-advection-stencils-consistent, lem-periodic-advection-amplification-symbols, thm-nearest-neighbor-cfl-domain-condition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Benjamin Seibold, MIT 18.336 Lecture 15, Finite Difference Methods for the One-Way Wave Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/286be9198204bea2f7e7d77f88e7b061_MIT18_336S09_lec15.pdf"
      locator: "Complete PDF pp. 1–2: centered consistency order and centered instability."
---

## Example

Fix $a,P,T>0$. For $q\ge1$, use periodic grids $N_q=4q$, $h_q=P/N_q$, and $k_q=h_q/(2a)$, so $\nu=ak_q/h_q=1/2$. Every fixed smooth $P$-periodic solution in the hypotheses of [[thm-smooth-advection-stencils-consistent]] has centered residual $O(h_q)$. Nevertheless the mode $\ell=q$ has $z_\ell=i$ and multiplier $1-i/2$, and the centered family has no uniform finite-time power bound, as proved in [[thm-nearest-neighbor-cfl-domain-condition]].

## Facts & Assumptions

**Given:** Fixed $a,P,T>0$ and periodic grids $N_q=4q$, $h_q=P/(4q)$, $k_q=h_q/(2a)$, with Fourier index $\ell=q$.

[F1] The centered residual is $O(h)$ under the two-sided mesh-ratio and $C^6$ hypotheses of [[thm-smooth-advection-stencils-consistent]].

[F2] The centered amplification factor is $1-i\nu S$ ([[lem-periodic-advection-amplification-symbols]]).

[F3] For this centered periodic family with $ak_q/h_q=1/2$, the finite-time power norms are unbounded as $q\to\infty$ ([[thm-nearest-neighbor-cfl-domain-condition]]).

## Verification

1.1 Since $z_\ell=i$, $S_\ell=1$, and the centered factor is $1-i/2$. Its squared modulus is $1+1/4=5/4>1$, while $k_q/h_q=1/(2a)$ is constant and $h_q,k_q\to0$. [given, F2, algebra]

2.1 By [F1], each fixed smooth solution satisfying the theorem's regularity and periodicity hypotheses has residual $O(h_q)$. By [F3], for every fixed $T>0$ the centered update powers are not uniformly bounded over time levels $rk_q\le T$. Thus this family is consistent on fixed smooth data but fails finite-time power stability because of mesh-dependent high-frequency modes. [F1, F3, step 1.1] ∎
