---
id: thm-finite-sectional-global-ode-and-moment-bounds
kind: theorem
title: Finite sectional dynamics have a unique global positive solution
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps: [thm-finite-sectional-positivity-and-mass-reservoir-conservation, lem-finite-sectional-vector-field-locally-lipschitz, lem-fixed-pivot-barycentric-identities, thm-existence-and-uniqueness-of-a-maximal-ode-solution, thm-picard-lindelof-local-existence-and-uniqueness, alg-finite-sectional-coagulation-fragmentation-balance]
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the state dimension and all event sums are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: Philippe Laurençot and Stéphane Mischler, From the discrete to the continuous coagulation-fragmentation equations, §1
      url: https://www.ceremade.dauphine.fr/~mischler/articles/14CFDtoC.pdf
    - title: Jacek Kumar, Numerical approximations of population balance equations in particulate systems, Chapter 2
      url: https://www.iitrpr.ac.in/jkumar/pub/Kumar_Dissertation_web.pdf
---

## Statement

For every nonnegative finite-grid initial state $(n^0,L^0)$, with grid indices $0\le i\le J$, mesh width $\Delta=\max_{i<J}(x_{i+1}-x_i)\le1$, maximum aggregation rate $K_*:=\max_{i,j}K_{ij}$, fragmentation rate bound $\beta_*:=\max_i\beta_i$, and daughter count bound $D:=\max_i B_{x_i}(E)$, the ODE of [[alg-finite-sectional-coagulation-fragmentation-balance]] has a unique solution for all $t\ge0$, and the solution remains nonnegative. Here $x_i\ge a>0$ and each daughter measure has first moment $x_i$. If its initial augmented mass is $M=\sum_{i=0}^{J}x_i n_i^0+L^0$, then

$$0\le n_i(t)\le M/x_i,\qquad 0\le L(t)\le M,\qquad M_2(t)\le M_{2,0}+t\left[K_*M^2+\Delta^2\left(\frac{K_*M^2}{8a^2}+\frac{\beta_*DM}{4a}\right)\right],$$

where $M_2(t)=\sum_i x_i^2n_i(t)$ and $M_{2,0}=M_2(0)$.

## Facts & Assumptions

**Given:** A finite-dimensional autonomous event ODE, a nonnegative initial state, and the mass and positivity conclusions of the cited items.

[F1] [[lem-finite-sectional-vector-field-locally-lipschitz]]: the finite-dimensional right-hand side is locally Lipschitz.

[F2] [[thm-finite-sectional-positivity-and-mass-reservoir-conservation]]: solutions remain nonnegative and $\sum_i x_i n_i(t)+L(t)=M$ on their intervals of existence.

[F3] [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]: every locally Lipschitz finite-dimensional initial-value problem has a unique maximal solution.

[F4] [[thm-picard-lindelof-local-existence-and-uniqueness]]: every locally Lipschitz finite-dimensional initial-value problem has a unique solution on a neighborhood of its initial time.

[F5] [[lem-fixed-pivot-barycentric-identities]]: redistributing a product or daughter of size $z$ adds at most $\Delta^2/4$ to its second moment.

## Proof

1.1 By [F1] and [F3], the event ODE has a unique maximal solution on an open time interval containing $0$. While it exists, [F2] puts every coordinate in the closed set $0\le n_i\le M/x_i$ and $0\le L\le M$, which is compact because the grid is finite and $x_i>0$. [given, F1, F2, F3]

1.2 Along each in-range coagulation event at parent masses $x_i,x_j$, the second-moment increment is at most $2x_ix_j+\Delta^2/4$ by [F5]; an overflow event only removes retained second moment. Summing the event rates $K_{ij}n_in_j/2$ bounds the coagulation contribution by $K_*M_1^2+K_*\Delta^2M_0^2/8$. For fragmentation, $\int z^2B_{x_i}(dz)\le x_i^2$ because $z\le x_i$ and $\int zB_{x_i}=x_i$; pivot redistribution adds at most $D\Delta^2/4$ per parent event. Thus its second-moment contribution is at most $\beta_*D\Delta^2M_0/4$. [given, F1, F2, F5, algebra]

2.1 Since $x_i\ge a$, the mass bound in step 1.1 gives $M_0\le M/a$ and $M_1\le M$. Integrating the derivative bound in step 1.2 yields the displayed $M_2$ estimate. [step 1.1, step 1.2, algebra]

3.1 If the maximal right endpoint $T_*$ were finite, step 1.1 puts the solution in a compact set. Continuity of $F$ there gives a bound $B$ on $\|F\|_2$, so $\|y(t)-y(s)\|_2\le B|t-s|$ and $y(t)$ has a limit in that set as $t\uparrow T_*$. By [F4], restarting at the limit gives a local solution; uniqueness in [F3] glues it to the existing solution and extends past $T_*$, a contradiction. The same argument applies at every finite endpoint. [step 1.1, F3, F4, algebra] ∎

