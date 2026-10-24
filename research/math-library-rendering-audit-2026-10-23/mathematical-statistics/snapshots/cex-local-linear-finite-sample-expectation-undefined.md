---
id: cex-local-linear-finite-sample-expectation-undefined
kind: counterexample
title: Local-linear estimator can lack a finite-sample expectation
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-identically-distributed-and-iid-random-variables
  - def-local-polynomial-estimator
  - def-measure-with-density
  - def-regression-target-version
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Whitney K. Newey, Locally Linear Regression, MIT course notes"
      url: "https://ocw.mit.edu/courses/14-385-nonlinear-econometric-analysis-fall-2007/40cac15c5fb98b5bf72b8cfaab90c273_local_lin_reg.pdf"
    - title: "Ryan Tibshirani, Nonparametric Regression: Nearest Neighbors and Kernels"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/nn_kernels.pdf"
---

## Statement refuted

At a fixed one-dimensional interior point, suppose the design density is
positive and $C^2$ locally, the chosen regression function is $C^2$ locally,
and the conditional response variance is finite and continuous. Suppose
$K$ is nonnegative, symmetric, positive near zero, normalized, with finite
positive second moment and finite squared integral. If $h_n\to0$,
$nh_n\to\infty$ and $nh_n^3\to\infty$, then the empirical local-linear fit
with a fixed fallback only on singular designs has a Lebesgue expectation
(and hence an unconditional second-order mean-bias expansion).

## Facts & Assumptions

**Given:** $X_i$ are independent uniform variables on $[-1,1]$; $Y_i$ are independent Rademacher variables independent of all predictors; $K(u)=\tfrac12\mathbf1_{\{|u|\le1\}}$; $h_n=n^{-1/4}$; and the degree-one estimator has any fixed fallback.

[F1] A degree-one local-polynomial estimator is the intercept of the weighted least-squares coefficient vector when its moment matrix is nonsingular, and uses its fallback only when that matrix is singular. [[def-local-polynomial-estimator]].

[F2] The chosen regression version represents $\mathbb E[Y\mid\sigma(X)]$ almost surely. [[def-regression-target-version]].

[F3] Independent and identically distributed variables have a common law and are mutually independent. [[def-identically-distributed-and-iid-random-variables]].

[F4] A density $f$ defines the measure $f\,d\lambda$ by $(f\,d\lambda)(A)=\int_A f\,d\lambda$. [[def-measure-with-density]].

[A1] AC is used only to specify the conditional-law version [[def-axiom-of-choice]]; all sample-space and divergence calculations are choice-free.

[A2] Choose the regular conditional law $Q(t,\cdot)=\tfrac12\delta_{-1}+\tfrac12\delta_1$ for every $t\in\mathbb R$. This is a version of the response law given $X$ and gives the selected version $m(t)=0$ and conditional variance $1$ at every $t$.

## Counterexample

1.1 Put $h=h_n$. By [A2], the chosen regression function is $m(t)=0$ and the conditional response variance is $1$ at every $t$; the uniform design density is $1/2$ near $0$. The uniform kernel has $\mu_2=1/3$ and $R(K)=1/2$. For each $n\ge2$, the event $E_n=\{X_1\in[h/4,h/3],\ X_2=X_1+\delta\text{ for }0<\delta<h/12,\ |X_j|>h\text{ for }j\ge3\}$ has positive design density; on it exactly two kernel weights are positive. Since $X_1\ne X_2$, the two-column degree-one design matrix is invertible, so [F1] gives its intercept $(X_2Y_1-X_1Y_2)/(X_2-X_1)$. [given, F1, F2, F3, F4, A1, A2, construct]

2.1 Conditional on $E_n$, each sign pattern $(Y_1,Y_2)=(1,-1)$ and $(-1,1)$ has probability $1/4$, and the intercepts are respectively $(X_1+X_2)/\delta$ and $-(X_1+X_2)/\delta$. On the chosen $X_1$ interval, $X_1+X_2\ge h/2$, while the joint design density in $(X_1,\delta)$ is a positive constant. Integrating either signed tail therefore includes a positive multiple of $\int_0^{h/12}(h/2)\delta^{-1}\,d\delta=\infty$. Both positive and negative parts have infinite expectation, so the estimator has no Lebesgue expectation. [given, step 1.1, F2, algebra]

3.1 The bandwidth satisfies $h_n\to0$, $nh_n=n^{3/4}\to\infty$, and $nh_n^3=n^{1/4}\to\infty$, and the matrix is nonsingular on $E_n$. Thus the counterexample satisfies these local smoothness, kernel and bandwidth hypotheses while the finite-sample expectation does not exist; the singular-matrix fallback is not used on these samples. [given, F1, step 2.1, algebra] ∎
