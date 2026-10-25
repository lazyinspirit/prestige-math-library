---
id: cex-singular-interior-mode-changes-laplace-rate
kind: counterexample
title: A singular interior mode need not have Gaussian scaling
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-higher-derivatives-and-smoothness
  - lem-derivative-of-a-power
  - thm-algebra-of-continuous-functions
  - thm-composition-of-continuous-functions
  - thm-continuous-implies-integrable
  - thm-exponential-is-strictly-increasing
  - thm-monotonicity-of-the-integral
  - thm-additivity-over-subintervals
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

[F1] [[def-higher-derivatives-and-smoothness]]: a function is $C^\infty$ when its derivatives of every finite order exist and are continuous.

[F2] [[thm-exponential-is-strictly-increasing]] and [[cor-exponential-reciprocal-and-positivity]]: the exponential is continuous, strictly increasing, and everywhere positive; in particular $e^{-1}>0$.

[F3] [[thm-continuous-implies-integrable]]: a continuous real function on a closed bounded interval is bounded and Riemann integrable.

[F4] [[thm-monotonicity-of-the-integral]]: a nonnegative integrable function has nonnegative integral, and a pointwise lower bound on the same interval gives the corresponding integral bound.

[F5] [[thm-additivity-over-subintervals]]: an integral splits at intermediate points, including coincident endpoints in the oriented form.

[F6] [[lem-derivative-of-a-power]]: every real polynomial is differentiable everywhere, with its derivative computed term by term.

[F7] [[thm-algebra-of-continuous-functions]]: every real polynomial is continuous.

[F8] [[thm-composition-of-continuous-functions]]: a composition of continuous real functions is continuous when their domains and ranges match.

## Counterexample

1.1 Extend $h(x)=-x^4$ to $\mathbb R$. Repeated application of [F6] gives $h'(x)=-4x^3$, $h''(x)=-12x^2$, $h^{(3)}(x)=-24x$, $h^{(4)}(x)=-24$, and $h^{(j)}(x)=0$ for every $j\ge5$. These derivatives and $h$ are continuous by [F7], so $h$ is $C^\infty$ by [F1]. Since $x^4>0$ for $x\ne0$, its unique maximum on $[-1,1]$ is $h(0)=0$ at the interior point $0$, with $h'(0)=h''(0)=0$. For each integer $m\ge1$, the interval $[-1/m,1/m]$ lies in $[-1,1]$. [given, F1, F6, F7, algebra]

2.1 If $|x|\le1/m$, then $m^4x^4\le1$, so [F2] gives $e^{-m^4x^4}\ge e^{-1}$. The polynomial $x\mapsto-m^4x^4$ is continuous by [F7], so its exponential is continuous by [F2] and [F8], and positive by [F2], hence integrable on each nondegenerate subinterval by [F3]. Split its integral at $-1/m$ and $1/m$ using [F5]. The two outer contributions are nonnegative by [F4] (and zero when $m=1$), while the central contribution is at least $2e^{-1}/m$ by [F4]. Thus $I_{m^4}\ge2e^{-1}/m$. The Gaussian scale at $n=m^4$ is $n^{-1/2}=m^{-2}$; therefore $I_{m^4}/(m^4)^{-1/2}\ge2e^{-1}m\longrightarrow\infty$. Hence these integrals are not $O(n^{-1/2})$, which refutes the statement. [given, F2, F3, F4, F5, F7, F8, step 1.1, algebra] ∎
