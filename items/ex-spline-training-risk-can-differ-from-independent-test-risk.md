---
id: ex-spline-training-risk-can-differ-from-independent-test-risk
kind: example
title: Training risk and independent test risk are different quantities
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 4
deps: [def-series-spline-least-squares, thm-series-training-risk, def-b-spline-space-and-basis, thm-spline-polynomial-reproduction]
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: Whitney K. Newey, Nonparametric and Semiparametric Estimation, MIT OCW 14.385, Fall 2007, Proposition 3, PDF pp. 10–11
      url: https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/655fcef1b4192f40d80edea3c1dd85ce_notes_nonsemi.pdf
---

## Example

Use the degree-one clamped B-spline basis $p(x)=(1-x,x)$ on $[0,1]$, with a single fixed training input $x_1=1/2$ and response $y_1=1$. The coefficient vector $\widehat\beta=(0,2)^T$ is a least-squares minimizer and gives the fitted function $\widehat g(x)=2x$. Let the target be $g_0(x)=1$ and the independent test input be uniform on $[0,1]$.

## Facts & Assumptions

**Given:** The one-row design matrix $P=(1/2,1/2)$, response $Y=(1)$, and test law $X'\sim\operatorname{Unif}[0,1]$.

[F1] The fitted training vector is the orthogonal projection onto the design column space; any least-squares coefficient representation has that same training fit ([[def-series-spline-least-squares]]).

[F2] The risk bound in this page concerns expected empirical training-design loss, not independent test loss ([[thm-series-training-risk]]).

[F3] The clamped degree-one B-splines form a basis of the degree-one spline space, and the recurrence defines their values ([[def-b-spline-space-and-basis]], [[thm-spline-polynomial-reproduction]]).

[A1] The training input and response are $1/2$ and $1$, the chosen least-squares coefficient is $(0,2)^T$, and the independent test input is uniform on $[0,1]$.

## Verification

**Given:** $x_1=1/2$, $y_1=1$, $\widehat\beta=(0,2)^T$, $g_0\equiv1$, and independent $X'\sim\operatorname{Unif}[0,1]$.

1.1 On the clamped knot vector $(0,0,1,1)$, the only nonzero degree-zero spline on $(0,1)$ is $B_{2,0}=1$; the recurrence in [F3] gives $B_{1,1}=1-x$ and $B_{2,1}=x$, so $p(1/2)=(1/2,1/2)$. Therefore $p(1/2)^T\widehat\beta=(1/2,1/2)(0,2)^T=1$, the training residual and empirical training loss are zero, and the fitted vector equals the projection in [F1]. The chosen coefficient vector is one admissible representation of it. [A1, F1, F3, given, algebra]

2.1 The independent test squared error has expectation $E\{\widehat g(X')-g_0(X')\}^2=\int_0^1(2x-1)^2dx=\frac43-2+1=\frac13>0.$ Thus zero training loss does not imply zero independent test loss, consistent with the scope of [F2]. [A1, F2, step 1.1, algebra] ∎
