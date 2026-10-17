---
id: alg-tensor-simpson-force-evaluator
kind: algorithm
title: Tensor composite Simpson force evaluator on a rectangle
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [alg-composite-simpson-rule]
justified_by: [thm-tensor-simpson-force-error]
proof_strategy: direct
axiom_use: No choice principle is used; the procedure is a finite exact-arithmetic sum.
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: Tobin Driscoll and Richard Braun, Fundamentals of Numerical Computation, Section 5.6
      url: https://fncbook.com/integration/
    - title: MIT OpenCourseWare 18.330, Introduction to Numerical Analysis, Chapter 5
      url: https://ocw.mit.edu/courses/18-330-introduction-to-numerical-analysis-spring-2012/a9d2bd9be098f0ada172af40379a17cc_MIT18_330S12_Chapter5.pdf
---

## Definition

Input real endpoints $a,b,c,d$, integer panel counts $n_x,n_y$, and an exact evaluation oracle that, when queried at a point, returns either a value in $\mathbb R^2$ or evaluation-failure. First, if $a\ge b$ or $c\ge d$, return invalid-domain without querying the oracle. Next, if either panel count is odd or is less than two, return invalid-panel-count without querying the oracle. For the remaining inputs set $R=[a,b]\times[c,d]$, $h_x=(b-a)/n_x$, $h_y=(d-c)/n_y$, $x_i=a+ih_x$ for $0\le i\le n_x$, and $y_j=c+jh_y$ for $0\le j\le n_y$. Query the oracle at every grid point in lexicographic order with $i$ first and $j$ second, storing the returned values. If a query fails, stop at the first such point and return evaluation-failure with that point. Otherwise, for each $j$ form the continuous piecewise-linear interpolant through the stored values $F(x_i,y_j)$ and apply [[alg-composite-simpson-rule]] componentwise in $x$ to this interpolant, obtaining $G_j=Q_xF(\cdot,y_j)$. Form the continuous piecewise-linear interpolant through the stored $G_j$ and apply the same valid Simpson procedure componentwise in $y$ to obtain $Q_yG=Q_yQ_xF$. Each interpolant is queried only at its stored grid nodes, so no new oracle call is needed. Both calls to the supplier use strictly ordered endpoints and even panel counts at least two. This is an exact-real procedure; termination and force-accuracy bounds are established in [[thm-tensor-simpson-force-error]], and floating-point roundoff is outside its scope.
