---
id: cex-boundary-mode-changes-laplace-rate
kind: counterexample
title: A boundary mode has a different concentration rate
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-higher-derivatives-and-smoothness
  - thm-continuous-implies-integrable
  - thm-exponential-is-strictly-increasing
  - thm-monotonicity-of-the-integral
  - thm-derivative-of-exponential
  - thm-newton-leibniz-with-interior-derivative
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "NIST Digital Library of Mathematical Functions, §2.3(iii), Laplace's Method"
      url: "https://dlmf.nist.gov/2.3"
      locator: "Equation (2.3.15) and conditions (a)–(c), which explicitly treat an endpoint minimum in the one-dimensional formulation."
    - title: "Laplace method for integrals, PHYS 2400, University of Connecticut"
      url: "https://www.phys.uconn.edu/~rozman/Courses/P2400_23S/downloads/laplace-method-integrals.pdf"
      locator: "Complete 7-page PDF inspected, pp. 2–3, for a boundary-dominated example with a nonquadratic endpoint phase; this witness is proved locally."
---

## Statement refuted

Every $C^2$ function $h$ on $[0,1]$ with a unique maximizer at the boundary
point $0$ and $h''(0)<0$ satisfies the interior Gaussian formula
$$\int_0^1 e^{nh(x)}\,dx\sim e^{nh(0)}\sqrt{\frac{2\pi}{n(-h''(0))}}.$$

## Facts & Assumptions

**Given:** The phase $h(x):=-x-x^2$ on $[0,1]$ and the integral $I_n:=\int_0^1e^{nh(x)}\,dx$ for integers $n\ge1$.

[F1] [[def-higher-derivatives-and-smoothness]]: a $C^2$ function has continuous first and second derivatives on its interval.

[F2] [[thm-exponential-is-strictly-increasing]] and [[cor-exponential-reciprocal-and-positivity]]: the real exponential is increasing and positive.

[F3] [[thm-continuous-implies-integrable]]: a continuous function on $[0,1]$ is bounded and Riemann integrable.

[F4] [[thm-monotonicity-of-the-integral]]: pointwise inequalities between integrable functions on an increasing interval pass to their integrals.

[F5] [[thm-newton-leibniz-with-interior-derivative]]: if $G$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $G'$ has a Riemann-integrable extension, then $\int_a^bG'=G(b)-G(a)$.

[F6] [[thm-derivative-of-exponential]]: the real exponential is differentiable with derivative $\exp$.

## Counterexample

1.1 The phase is $C^2$, satisfies $h(0)=0$, $h(x)<0$ for every $x\in(0,1]$, and $h''(0)=-2$. Thus its unique maximizer is the boundary point $0$, and the refuted formula predicts $\sqrt{\pi/n}$. [given, F1, algebra]

1.2 For $x\in[0,1]$, $h(x)=-x-x^2\le-x$, so [F2] and [F4] give $0\le I_n\le\int_0^1e^{-nx}\,dx$. The antiderivative $G(x)=-e^{-nx}/n$ has derivative $e^{-nx}$ by [F6]; [F3, F5] evaluate the latter integral as $(1-e^{-n})/n\le1/n$. [given, F2, F3, F4, F5, F6, algebra]

2.1 On $[0,1/n]$ with $n\ge1$, $n(x+x^2)\le1+1/n\le2$. Thus $e^{nh(x)}\ge e^{-2}$ there and [F3, F4] give $I_n\ge e^{-2}/n$. Together with step 1.2, this proves $e^{-2}/n\le I_n\le1/n$, so the boundary contribution has order $n^{-1}$. [given, F2, F3, F4, step 1.2, algebra]

3.1 Consequently $0\le I_n/\sqrt{\pi/n}\le1/\sqrt{\pi n}\to0$. The ratio required by the refuted asymptotic formula therefore tends to $0$, not $1$. [step 1.1, step 1.2, algebra] ∎
