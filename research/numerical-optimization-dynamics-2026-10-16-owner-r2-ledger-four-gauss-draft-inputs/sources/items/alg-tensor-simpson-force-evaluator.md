---
id: alg-tensor-simpson-force-evaluator
kind: algorithm
title: Tensor composite Simpson force evaluator on a rectangle
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [alg-composite-simpson-rule]
justified_by: []
proof_strategy: direct
axiom_use: No choice principle is used; the procedure is a finite exact-arithmetic sum.
provenance:
  statement: literature-derived
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

Input a rectangle $R=[a,b]\times[c,d]$ with $a<b$, $c<d$, even integers $n_x,n_y\ge2$, and an exact evaluation oracle for $F:R\to\mathbb R^2$. Return status invalid-domain if either interval is degenerate or reversed, and status invalid-panel-count if either panel count is not an even integer at least two. Otherwise set $h_x=(b-a)/n_x$, $h_y=(d-c)/n_y$, apply [[alg-composite-simpson-rule]] componentwise in the $x$ direction and then the $y$ direction, and return the resulting tensor sum $Q_yQ_xF$. If an evaluation oracle reports an unavailable value, stop at the first such grid point and return evaluation-failure with that point. The exact-real procedure makes finitely many evaluations and sums. This definition makes no floating-point roundoff or force-accuracy claim; error control is a separate result.
