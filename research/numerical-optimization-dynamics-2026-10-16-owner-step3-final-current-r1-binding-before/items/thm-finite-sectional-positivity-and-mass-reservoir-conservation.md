---
id: thm-finite-sectional-positivity-and-mass-reservoir-conservation
kind: theorem
title: Finite sectional event dynamics preserve positivity and retained-plus-reservoir mass
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-finite-sectional-coagulation-fragmentation-balance
  - lem-fixed-pivot-barycentric-identities
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; positivity follows coordinatewise and mass is a finite linear identity.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Jitendra Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2, §2.2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §1
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
---

## Statement

For the ODE of [[alg-finite-sectional-coagulation-fragmentation-balance]], every solution starting from $n_i(0)\ge0$ and $L(0)\ge0$ remains nonnegative for as long as it exists. The augmented mass

$$m_{\mathrm{tot}}(t)=\sum_{i=0}^{M}x_i n_i(t)+L(t)$$

is constant. The retained-bin number and retained mass need not be constant when overflow occurs.

## Facts & Assumptions

**Given:** A finite positive pivot grid, nonnegative aggregation and fragmentation rates, daughter measures with first moment equal to the parent mass, and a nonnegative initial state.

[F1] [[alg-finite-sectional-coagulation-fragmentation-balance]]: every aggregation or fragmentation contribution is an event rate times a nonnegative product or daughter measure minus the consumed parent particles; an overflow event adds its consumed mass to $L$.

[F2] [[lem-fixed-pivot-barycentric-identities]]: every retained product or daughter is redistributed by nonnegative weights reproducing its mass.

## Proof

1.1 At every nonnegative state with $n_i=0$, no event consuming coordinate $i$ has positive rate, because each such rate contains $n_i$; all events producing $i$ have nonnegative rates and yields. Thus $F_i(n,L)\ge0$ on that face of the orthant. [given, F1, construct]

2.1 On any bounded time interval choose a Lipschitz constant $C$ for $F$ on a ball containing the solution. Set $n_i^+=\max(n_i,0)$ and $u(t)=\sum_i\max(-n_i(t),0)$. For each coordinate, step 1.1 and Lipschitz continuity give $F_i(n,L)\ge F_i(n^+,L)-C\|n-n^+\|_2\ge-Cu$. The absolutely continuous negative-part chain rule gives $(\max(-n_i,0))'=-F_i$ when $n_i<0$, zero when $n_i>0$, and zero almost everywhere on the level set $n_i=0$. Hence $u'(t)\le m C u(t)$ almost everywhere. Since $u(0)=0$ and $u\ge0$, differentiating $e^{-mCt}u(t)$ shows it is nonincreasing from zero, so $u(t)=0$. Once $n\ge0$, the reservoir derivative is a sum of nonnegative overflow rates, hence $L(t)\ge0$. [given, F1, step 1.1, algebra]

3.1 For an in-range aggregation event with parent masses $x_i,x_j$, the pivot output has mass $x_i+x_j$ by [F2]; subtracting the two parents gives zero augmented-mass change. For overflow, the retained parents remove mass $x_i+x_j$ and the algorithm adds exactly this amount to $L$. For fragmentation of parent $x_i$, the daughter measure has first moment $x_i$ by the algorithm input, and each pivot projection preserves daughter mass by [F2], so parent removal and daughter addition cancel. Thus every event increment has zero augmented-mass change. Pairing the ODE with the mass vector and adding $\dot L$ gives $\dot m_{\mathrm{tot}}=0$; integrating yields $m_{\mathrm{tot}}(t)=m_{\mathrm{tot}}(0)$. [F1, F2, algebra] ∎

