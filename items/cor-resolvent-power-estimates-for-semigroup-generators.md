---
id: cor-resolvent-power-estimates-for-semigroup-generators
kind: corollary
title: "Resolvent power estimates for semigroup generators"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps:
  - def-dependent-choice
  - thm-laplace-transform-formula-for-the-semigroup-resolvent
  - lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity
  - lem-linearity-of-the-bochner-integral
  - def-bochner-integrable-function
  - lem-bochner-integral-norm-inequality
  - thm-exponential-bound-for-a-c-zero-semigroup
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Klaus-Jochen Engel and Rainer Nagel, One-Parameter Semigroups for Linear Evolution Equations, Graduate Texts in Mathematics 194 (complete author-hosted monograph)"
      url: "https://www.math.uni-tuebingen.de/de/forschung/agfa/members/engel-nagel_one-parameter-semigroups.pdf/%40%40download/file/engel-nagel_one-parameter-semigroups.pdf"
      locator: "Chapter II Section 1, Corollary 1.11, printed pp. 56-57"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 11 Section 11.4, Corollary 11.14, printed pp. 263-264"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Dependent Choice ([[def-dependent-choice]]). Let $(T(t))_{t\ge0}$ be a strongly continuous semigroup on a Banach space $X$ with generator $A$ and let $M\ge1$, $\omega\in\mathbb R$ satisfy $\|T(t)\| \le Me^{\omega t}$ ([[thm-exponential-bound-for-a-c-zero-semigroup]]). Then for every real $\lambda>\omega$ and every integer $m\ge1$, $$R(\lambda,A)^mx=\frac1{(m-1)!}\int_0^\infty s^{m-1}e^{-\lambda s}T(s)x\,ds\qquad(x\in X),$$ the integral converging absolutely, and $$\|R(\lambda,A)^m\| \le\frac{M}{(\lambda-\omega)^m}.$$

## Facts & Assumptions

**Given:** Dependent Choice; A strongly continuous semigroup $(T(t))_{t\ge0}$ on a Banach space $X$ with generator $A$ and $\|T(t)\|\le Me^{\omega t}$ ([[thm-exponential-bound-for-a-c-zero-semigroup]]); real $\lambda>\omega$ and an integer $m\ge1$.

[F1] Laplace formula: for real $\mu>\omega$, $\mu\in\rho(A)$ and $R(\mu,A)x=\int_0^\infty e^{-\mu t}T(t)x\,dt$ for every $x$, with $\|R(\mu,A)\|\le M/(\mu-\omega)$ ([[thm-laplace-transform-formula-for-the-semigroup-resolvent]]).

[F2] Resolvent identity: $R(\mu,A)-R(\lambda,A)=(\lambda-\mu)R(\mu,A)R(\lambda,A)$ ([[lem-semigroup-generator-resolvents-satisfy-the-resolvent-identity]]).

[F3] Bochner-integral toolkit: linearity, the norm inequality, and the fact that continuous curves on compact intervals are Bochner integrable; improper integrals of $\|T(t)x\|$-dominated curves converge by the usual Cauchy estimate ([[lem-linearity-of-the-bochner-integral]], [[lem-bochner-integral-norm-inequality]], [[def-bochner-integrable-function]]).



## Proof

**Proof technique:** direct: differentiate the Laplace representation in $\lambda$, identify the derivative with $-R(\lambda,A)^2$ by the resolvent identity, and iterate.

1.1 For $\lambda>\omega$ the integrand $t\mapsto e^{-\lambda t}T(t)x$ is dominated in norm by $Me^{(\omega-\lambda)t}\|x\|$; for a fixed $\lambda_0\in(\omega,\lambda)$ the tails satisfy $\int_R^\infty te^{(\omega-\lambda_0)t}\,dt\to0$ as $R\to\infty$, which is the uniform-in-$h$ domination used below. [F1, F3]

1.2 The function $\mu\mapsto R(\mu,A)x$ is differentiable on $(\omega,\infty)$ with derivative $-R(\lambda,A)^2x$: by [F2], $\frac{R(\lambda+h,A)-R(\lambda,A)}{h}x=-R(\lambda+h,A)R(\lambda,A)x$, and $R(\lambda+h,A)\to R(\lambda,A)$ in operator norm as $h\to0$ because $\|R(\lambda+h,A)-R(\lambda,A)\|\le|h|\,\|R(\lambda+h,A)\|\,\|R(\lambda,A)\|$ and $\|R(\lambda+h,A)\|$ is bounded near $\lambda$ by [F1]. [F1, F2]

2.1 The same derivative computed from the integral is $-\int_0^\infty te^{-\lambda t}T(t)x\,dt$: the difference quotient is $\int_0^\infty\frac{e^{-ht}-1}{h}e^{-\lambda t}T(t)x\,dt$, whose integrands converge pointwise to $-te^{-\lambda t}T(t)x$ and are dominated by $te^{(\omega-\lambda_0)t}M\|x\|$ for $|h|$ small and $\lambda_0\in(\omega,\lambda]$; splitting the integral at $R$ and using uniform convergence on $[0,R]$ for the mean-value estimate $|(e^{-ht}-1)/h|\le te^{|h|t}$ and the tail estimate of [step 1.1] passes the limit through the improper integral. [F1, F3, step 1.1]

3.1 Comparing [step 1.2] and [step 2.1]: $R(\lambda,A)^2x=\int_0^\infty te^{-\lambda t}T(t)x\,dt$ for every $x$, and the integral converges absolutely. [step 1.2, step 2.1]

4.1 Induction on $m$ gives $R(\lambda,A)^mx=\frac{1}{(m-1)!}\int_0^\infty s^{m-1}e^{-\lambda s}T(s)x\,ds$: the case $m=1$ is [F1] and the case $m=2$ is [step 3.1]. Assume the formula for $m$; since the resolvents commute, $\frac{d}{d\lambda}R(\lambda,A)^m=-mR(\lambda,A)^{m+1}$ by [step 1.2], while differentiating the integral representation in $\lambda$ (the same tail-splitting argument as [step 2.1], with domination $s^me^{(\omega-\lambda_0)s}M\|x\|$ with $\omega<\lambda_0<\lambda$ and $|h|<\lambda-\lambda_0$) gives $-\frac{1}{(m-1)!}\int_0^\infty s^me^{-\lambda s}T(s)x\,ds$. Equating the two expressions yields the formula for $m+1$. [F1, F2, step 1.2, step 2.1, step 3.1]

5.1 Norm bound: by [F3] and $M\ge1$, $\|R(\lambda,A)^mx\|\le\frac{1}{(m-1)!}\int_0^\infty s^{m-1}e^{(\omega-\lambda)s}M\|x\|\,ds=\frac{M\|x\|}{(\lambda-\omega)^m}$, the scalar integral is $(m-1)!/(\lambda-\omega)^m$: integration by parts on $[0,R]$ gives $I_m=(m-1)I_{m-1}/(\lambda-\omega)$ after $R\to\infty$, with $I_1=1/(\lambda-\omega)$ and vanishing polynomial-exponential boundary terms. For all nearby difference quotients use a strictly smaller parameter $\lambda_0\in(\omega,\lambda)$; polynomial times $e^{-(\lambda_0-\omega)s}$ is integrable by the same recurrence. Thus taking the supremum over $\|x\|\le1$ gives $\|R(\lambda,A)^m\|\le M/(\lambda-\omega)^m$. [F1, F3, step 4.1] ∎
