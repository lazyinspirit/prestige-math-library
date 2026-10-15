---
id: cex-singular-interior-mode-changes-laplace-rate
kind: counterexample
title: A singular interior mode need not have Gaussian scaling
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-higher-derivatives-and-smoothness
  - thm-continuous-implies-integrable
  - thm-exponential-is-strictly-increasing
  - thm-monotonicity-of-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Laplace method for integrals, PHYS 2400, University of Connecticut"
      url: "https://www.phys.uconn.edu/~rozman/Courses/P2400_23S/downloads/laplace-method-integrals.pdf"
      locator: "Complete 7-page PDF inspected, pp. 2–5, including a nonquadratic phase example; this interior singular-mode witness is proved locally."
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iii), Laplace's Method"
      url: "https://dlmf.nist.gov/2.3"
      locator: "Equations (2.3.14)–(2.3.18): local phase and amplitude orders determine the asymptotic scale; this witness is proved locally."
---

## Statement refuted

A unique interior maximum and smoothness alone always give
$I_n=O(e^{nh(\hat x)}n^{-1/2})$, even when the Hessian at the maximum is
singular. Here $u_n=O(v_n)$ means $|u_n|\le C|v_n|$ for some finite constant
$C$ and all sufficiently large $n$.

## Facts & Assumptions

**Given:** For $x\in[-1,1]$, let $h(x):=-x^4$ and
$I_n:=\int_{-1}^1e^{nh(x)}\,dx$ for integers $n\ge1$.

[F1] [[def-higher-derivatives-and-smoothness]]: a polynomial is $C^k$ for every finite $k$; its first two derivatives are obtained by ordinary differentiation.

[F2] [[thm-exponential-is-strictly-increasing]] and [[cor-exponential-reciprocal-and-positivity]]: the exponential is increasing and $e^{-1}>0$.

[F3] [[thm-continuous-implies-integrable]]: a continuous real function on a closed bounded interval is bounded and Riemann integrable.

[F4] [[thm-monotonicity-of-the-integral]]: a pointwise lower bound by an integrable function gives the same lower bound for the integral.

## Proof

1.1 The phase is $C^\infty$, has its unique maximum $h(0)=0$ at the interior point $0$, and $h'(0)=h''(0)=0$. For each integer $m\ge1$, the interval $[-1/m,1/m]$ lies in $[-1,1]$. [given, F1, algebra]

2.1 If $|x|\le1/m$, then $m^4x^4\le1$, so [F2] gives $e^{-m^4x^4}\ge e^{-1}$. By [F3, F4], $I_{m^4}\ge\int_{-1/m}^{1/m}e^{-1}\,dx=2e^{-1}/m$. The Gaussian scale at $n=m^4$ is $n^{-1/2}=m^{-2}$; therefore $I_{m^4}/(m^4)^{-1/2}\ge2e^{-1}m\longrightarrow\infty$. Hence these integrals are not $O(n^{-1/2})$, which refutes the statement. [given, F2, F3, F4, step 1.1, algebra] ∎
