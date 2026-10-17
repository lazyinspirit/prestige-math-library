---
id: ex-noisy-scalar-root-robbins-monro-convergence
kind: example
title: "A bounded-noise Robbins–Monro scalar root"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - thm-robbins-monro-strongly-monotone-root-convergence
  - thm-p-series-real-exponents
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-axiom-of-choice
  - def-euclidean-inner-product
  - thm-induction-principle
  - thm-cauchy-schwarz-and-the-euclidean-norm
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

Consider $h(x)=x$ with root $x^\ast=0$, initial point $x_0=0$, and a noise sequence $\xi_k\in\{-1,1\}$ where each $\xi_k$ is $\mathcal F_{k+1}$-measurable and satisfies $\mathbb E[\xi_k\mid\mathcal F_k]=0$ and $\mathbb E[\xi_k^2\mid\mathcal F_k]=1$. No independence across iterations is assumed. Use steps $\alpha_k=\frac14(k+2)^{-3/4}$ and oracle $G_k=x_k+\xi_k$. Verify the strong-monotonicity, stability, and stepsize conditions for the almost-sure Robbins–Monro theorem.

## Facts & Assumptions

**Given:** The one-dimensional filtered model and noise conditions in the Example.

[A1] [[def-axiom-of-choice]]: AC is used by the conditional-expectation and almost-sure convergence interfaces.

[F1] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: $x_{k+1}=x_k-\alpha_kG_k$, and conditional means and moments are interpreted almost surely.

[F2] [[thm-p-series-real-exponents]]: $\sum_{n\ge1}n^{-p}$ diverges for $p\le1$ and converges for $p>1$.

[F3] [[thm-robbins-monro-strongly-monotone-root-convergence]]: a strongly monotone drift with a root, uniform conditional second moment, and positive steps with divergent sum and square-summable squares gives almost-sure convergence.

[F4] [[def-euclidean-inner-product]]: in dimension one, $\|x\|_2=|x|$.

[F5] [[thm-taking-out-what-is-known]]: a known integrable factor may be taken outside conditional expectation.

[F6] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and fixes integrable measurable quantities.

[F7] [[thm-induction-principle]]: a bound true at the first index and inherited by each successor holds at every natural index.

[F8] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: the Euclidean norm satisfies the triangle inequality.

## Verification

1.1 Since $0<\alpha_k<1$, [F7] and [F8] give $|x_k|\le1$: it holds at $x_0=0$, and if $|x_k|\le1$ then $|x_{k+1}|=|(1-\alpha_k)x_k-\alpha_k\xi_k|\le(1-\alpha_k)|x_k|+\alpha_k|\xi_k|\le1.$ Taking out the $\mathcal F_k$-measurable $x_k$ with [F5] and using [F6] with the stated conditional moments gives $\mathbb E[G_k\mid\mathcal F_k]=x_k=h(x_k)$ and $\mathbb E[G_k^2\mid\mathcal F_k]=x_k^2+1\le2$. Also $(h(x)-h(y))(x-y)=(x-y)^2$, so $h$ is strongly monotone with $\mu=1$. [A1, F1, F4, F5, F6, F7, F8, given, algebra, induction]

2.1 By [F2], $\sum_k\alpha_k=\frac14\sum_{n\ge2}n^{-3/4}=\infty$ and $\sum_k\alpha_k^2=\frac1{16}\sum_{n\ge2}n^{-3/2}<\infty$. Each $\alpha_k\le1/4\le1/(2\mu)$. Thus [F3] applies with $M^2=2$, proving $x_k\to0$ almost surely. [A1, F2, F3, step 1.1, given, algebra] ∎

