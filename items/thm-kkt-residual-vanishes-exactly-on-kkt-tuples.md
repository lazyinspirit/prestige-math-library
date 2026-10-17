---
id: thm-kkt-residual-vanishes-exactly-on-kkt-tuples
kind: theorem
title: The scaled KKT residual vanishes exactly at KKT tuples
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-inequality-constrained-program-and-kkt-geometry
  - def-kkt-residual-and-normal-cone
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Nocedal and Wright, Numerical Optimization, second edition
      url: https://www.ime.unicamp.br/~pulino/MT404/TextosOnline/NocedalJ.pdf
      locator: Chapter 12, Section 12.2, printed pp. 327–331; stationarity, primal and dual feasibility, and complementarity.
    - title: Boyd and Vandenberghe, Convex Optimization
      url: https://web.stanford.edu/~boyd/cvxbook/bv_cvxbook.pdf
      locator: Chapter 5, Sections 5.1–5.2, KKT and complementarity conventions.
---

## Statement

For the program of
[[def-inequality-constrained-program-and-kkt-geometry]] and the residual
of [[def-kkt-residual-and-normal-cone]],
$r_{\mathrm{KKT}}(x,\nu,\lambda)=0$ if and only if
$(x,\nu,\lambda)$ satisfies every KKT condition.

## Facts & Assumptions

**Given:** The residual definition and KKT system for the stated $C^2$ program.

[F1] The residual is the sum of the Euclidean norms of the stationarity,
equality-feasibility, positive-inequality, negative-multiplier, and
complementarity vectors
([[def-kkt-residual-and-normal-cone]]).

[F2] The KKT system consists of stationarity, equality and inequality
feasibility, nonnegative inequality multipliers, and componentwise
complementarity ([[def-inequality-constrained-program-and-kkt-geometry]]).

## Proof

1.1 If the residual is zero, each summand in [F1] is nonnegative and their sum is zero, so each norm is zero. The stationarity and equality terms then give stationarity and $h(x)=0$. The positive-part term is zero exactly when $g_i(x)\le0$ for every $i$, and the negative-multiplier term is zero exactly when $\lambda_i\ge0$ for every $i$. The last term gives $\lambda_i g_i(x)=0$ coordinatewise. These are all conditions in [F2]. [given, F1, F2, algebra]

2.1 Conversely, if the KKT conditions hold, every vector inside each norm in [F1] is zero: feasibility makes $h=0$ and $[g]^+=0$, dual feasibility makes $[-\lambda]^+=0$, complementarity makes $\lambda\circ g=0$, and stationarity makes the first vector zero. Thus the residual is zero. [given, F1, F2, algebra] ∎
