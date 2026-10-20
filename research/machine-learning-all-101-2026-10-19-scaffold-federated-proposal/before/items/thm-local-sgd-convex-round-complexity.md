---
id: thm-local-sgd-convex-round-complexity
kind: theorem
title: Strongly convex local-SGD round complexity
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - alg-local-sgd
  - lem-local-sgd-virtual-progress
  - lem-local-sgd-sampling-variance
  - lem-local-sgd-client-drift
  - lem-local-sgd-weighted-recursion
  - lem-finite-sum-gradient-is-average
  - thm-finite-jensen-inequality-in-euclidean-space
  - def-independent-random-elements
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - cor-expectation-linearity-monotonicity-and-modulus-bound
  - cor-expectation-agrees-with-the-finite-weighted-sum
  - def-euclidean-inner-product
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Sebastian U. Stich, Local SGD Converges Fast and Communicates Little, Theorem 2.2 and Appendix A"
      url: https://arxiv.org/pdf/1805.09767v3
proof_strategy: direct
---

## Statement

Let $n,d,K,T,b\ge1$, let $f=n^{-1}\sum_{j=1}^n f_j$ be differentiable,
$L$-smooth and $\mu$-strongly convex for $0<\mu\le L$, and suppose it
attains its minimum at $x^\star$ with value $f^\star$. Run local SGD with a
common initial point $x_0$, synchronization schedule of maximum gap $H$, and
independent uniform with-replacement mini-batches of size $b$ at each worker
and step. Assume that at every local iterate $x_t^k$,
$$ \frac1n\sum_{j=1}^n\|\nabla f_j(x_t^k)-\nabla f(x_t^k)\|_2^2\le\sigma^2, \qquad \frac1n\sum_{j=1}^n\|\nabla f_j(x_t^k)\|_2^2\le G^2. $$
For $a>\max\{16L/\mu,H\}$, set
$$ \eta_t=\frac{4}{\mu(a+t)},\quad w_t=(a+t)^2,\quad S_T=\sum_{t=0}^{T-1}w_t, \quad \widehat x_T=\frac1{KS_T}\sum_{k=1}^K\sum_{t=0}^{T-1}w_tx_t^k. $$
Then, with expectation over all sampled component indices,
$$ \mathbb E[f(\widehat x_T)-f^\star] \le\frac{\mu a^3\|x_0-x^\star\|_2^2}{2S_T} +\frac{4T(T+2a)\sigma^2}{\mu KbS_T} \frac{256TG^2H^2L}{\mu^2S_T}. $$
This bound is for the displayed quadratic-weighted average; it does not assert
the same rate for the final iterate or for one-shot averaging.

## Statement references

[Stich, Local SGD Converges Fast and Communicates Little, Theorem 2.2, Corollary 2.3, and Appendix A](https://arxiv.org/pdf/1805.09767v3)

## Facts & Assumptions
**Given:** The finite-sum objective, its local-SGD trajectory and the step schedule in the Statement.

[F1] [[alg-local-sgd]]: worker updates use independent uniform component indices, average $b$ gradients, and synchronize at the declared times.

[F2] [[lem-local-sgd-virtual-progress]]: if $\eta_t\le1/(4L)$, the virtual mean iterate obeys the one-step distance/function-gap inequality there.

[F3] [[lem-local-sgd-sampling-variance]]: under the component variance bound, the centered mean stochastic gradient has second moment at most $\sigma^2/(bK)$.

[F4] [[lem-local-sgd-client-drift]]: under the local-gradient second-moment bound and $\eta_s\le2\eta_t$ for the preceding synchronization time, the mean squared worker deviation is at most $4\eta_t^2G^2H^2$.

[F5] [[lem-local-sgd-weighted-recursion]]: the quadratic-weighted telescope bounds a recurrence with coefficients $A,B,C$ by its stated three terms.

[F6] [[thm-finite-jensen-inequality-in-euclidean-space]]: a convex function at a finite weighted average is bounded above by the same weighted average of its values.

[F7] [[lem-finite-sum-gradient-is-average]] and [[def-independent-random-elements]]: the mean of a uniform component gradient is $\nabla f$, and distinct draws are independent.

[F8] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[cor-expectation-linearity-monotonicity-and-modulus-bound]], [[cor-expectation-agrees-with-the-finite-weighted-sum]], and [[def-euclidean-inner-product]]: the finite sampling law permits linearity, conditional averaging, and the usual squared-norm expansions.

[A1] The hypotheses in the Statement hold at every local iterate, the local steps are positive and nonincreasing, and the run starts with $x_0^k=x_0$.

## Proof

1.1 Put $\bar x_t=K^{-1}\sum_kx_t^k$ and [given]
$u_t=\mathbb E\|\bar x_t-x^\star\|_2^2$,
$e_t=\mathbb E[f(\bar x_t)-f^\star]$. Since $a>16L/\mu$, we have
$\eta_t<1/(4L)$. By [F2], [F3] and [F4],
$$ u_{t+1}\le(1-\mu\eta_t)u_t-\frac{\eta_t}{2}e_t +\frac{\sigma^2}{bK}\eta_t^2+8LG^2H^2\eta_t^3. $$
Here the coefficient $8LG^2H^2$ is obtained by multiplying the drift bound
$4\eta_t^2G^2H^2$ in [F4] by the progress lemma's $2\eta_tL$ factor.
[F1, F2, F3, F4, F7, given, algebra]

1.2 The map $f$ is convex because it is strongly convex. By [F6] and linearity [given]
$A=1/2$, $B=\sigma^2/(bK)$, and $C=8LG^2H^2$. It follows that
$$ \frac1{S_T}\sum_{t=0}^{T-1}w_te_t \le\frac{\mu a^3u_0}{2S_T} +\frac{4T(T+2a)\sigma^2}{\mu KbS_T} +\frac{256TG^2H^2L}{\mu^2S_T}. $$ [step 1.1, F5, algebra]

2.1 Apply [F5] to the recurrence in step 1.1 with [given]
of expectation on the finite product law,
$$ \mathbb E[f(\widehat x_T)-f^\star] \le\frac1{KS_T}\sum_{k,t}w_t\mathbb E[f(x_t^k)-f^\star]. $$
At each $t$, Jensen also gives
$K^{-1}\sum_k f(x_t^k)\ge f(\bar x_t)$, so the last expression is at most
$S_T^{-1}\sum_tw_te_t$. Substitute the bound in step 2.1 and use
$u_0=\|x_0-x^\star\|_2^2$ to obtain the stated inequality. [F6, F8,
step 2.1, given, algebra] ∎