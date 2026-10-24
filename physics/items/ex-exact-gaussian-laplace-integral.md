---
id: ex-exact-gaussian-laplace-integral
kind: example
title: An exact Gaussian Laplace integral on the noncompact line
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-gaussian-integral
  - thm-substitution-for-improper-integrals
  - thm-continuous-implies-integrable
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Laplace method for integrals, PHYS 2400, University of Connecticut"
      url: "https://www.phys.uconn.edu/~rozman/Courses/P2400_23S/downloads/laplace-method-integrals.pdf"
      locator: "Complete 7-page PDF inspected, especially the Gaussian reductions on pp. 2 and 5–6; this exact integral is computed locally."
---

## Example

For $c,\mu\in\mathbb R$ and integer $n\ge1$, define the noncompact integral
$$J_n:=\int_{\mathbb R}\exp\!\left(n\left[c-\frac12(\theta-\mu)^2\right]\right)\,d\theta.$$
Then $J_n=e^{nc}\sqrt{2\pi/n}$ exactly. The mode is $\hat\theta=\mu$ and
$-h''(\hat\theta)=1$, so the usual one-dimensional quadratic expression is
also exactly $e^{nc}\sqrt{2\pi/n}$. This calculation is a special noncompact
Gaussian case; it does not extend the compact-domain theorem to arbitrary
noncompact integrals.

## Facts & Assumptions

**Given:** Reals $c,\mu$, an integer $n\ge1$, and $h(\theta)=c-(\theta-\mu)^2/2$ on $\mathbb R$.

[F1] [[thm-gaussian-integral]]: $\int_{\mathbb R}e^{-x^2}\,dx=\sqrt\pi$.

[F2] [[thm-substitution-for-improper-integrals]]: for a monotone differentiable surjection with locally Riemann-integrable derivative, a locally Riemann-integrable integrand, and proper substitution valid on every compact truncation, the corresponding improper integrals converge simultaneously and are equal when convergent. Each singular end is treated separately.

[F3] [[thm-continuous-implies-integrable]]: a continuous real function on a closed bounded interval is bounded and Riemann integrable.

## Verification

1.1 The derivative is $h'(\theta)=-(\theta-\mu)$, so the unique maximizer is $\hat\theta=\mu$; the second derivative is $h''(\mu)=-1$ and $h(\mu)=c$. [given, algebra]

1.2 Use $\theta=\phi(u):=\mu+\sqrt{2/n}\,u$. Since $n\ge1$, this is an increasing affine surjection of $\mathbb R$, with constant positive derivative $\sqrt{2/n}$. The original integrand and $\phi'$ are continuous, hence locally Riemann integrable by [F3], and on each compact truncation the map is differentiable through both endpoints, with integrable derivative and bounded continuous integrand, so the proper substitution hypotheses hold. By [F1], the transformed Gaussian converges at both infinite ends; applying [F2] separately at these ends proves convergence of $J_n$ and gives $J_n=e^{nc}\sqrt{2/n}\int_{\mathbb R}e^{-u^2}\,du=e^{nc}\sqrt{2\pi/n}$. [F1, F2, F3, given, algebra]

2.1 Substituting $h(\mu)=c$ and $-h''(\mu)=1$ into the one-dimensional quadratic expression gives $e^{nc}\sqrt{2\pi/n}$, which equals step 1.2 for every $n\ge1$. [step 1.1, step 1.2, algebra] ∎
