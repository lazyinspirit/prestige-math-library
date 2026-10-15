---
id: ex-exact-gaussian-laplace-integral
kind: example
title: An exact Gaussian Laplace integral on the noncompact line
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - thm-gaussian-integral
  - thm-substitution-for-improper-integrals
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

[F2] [[thm-substitution-for-improper-integrals]]: a monotone differentiable surjection gives the usual change of variable when the corresponding improper integrals converge.

## Verification

1.1 The derivative is $h'(\theta)=-(\theta-\mu)$, so the unique maximizer is $\hat\theta=\mu$; the second derivative is $h''(\mu)=-1$ and $h(\mu)=c$. [given, algebra]

1.2 In the integral, set $u=\sqrt{n/2}(\theta-\mu)$. The substitution is increasing and maps $\mathbb R$ onto $\mathbb R$; [F2] and [F1] give $J_n=e^{nc}\sqrt{2/n}\int_{\mathbb R}e^{-u^2}\,du=e^{nc}\sqrt{2\pi/n}$. [F1, F2, given, algebra]

2.1 Substituting $h(\mu)=c$ and $-h''(\mu)=1$ into the one-dimensional quadratic expression gives $e^{nc}\sqrt{2\pi/n}$, which equals step 1.2 for every $n\ge1$. [step 1.1, step 1.2, algebra] ∎
