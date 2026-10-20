---
id: lem-local-sgd-client-drift
kind: lemma
title: Deviation of local-SGD workers from their virtual mean
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - alg-local-sgd
  - lem-relaxed-euclidean-squared-norm
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
    - title: "Sebastian U. Stich, Local SGD Converges Fast and Communicates Little, Lemma 3.3 and Appendix A"
      url: https://arxiv.org/pdf/1805.09767v3
proof_strategy: direct
---

## Statement

Let local SGD use synchronization times
$0=t_0<t_1<\cdots<t_m=T$ with
$H=\max_j(t_j-t_{j-1})$. Let
$\bar x_t=K^{-1}\sum_kx_t^k$. Suppose the step sizes are positive and
nonincreasing, and for every $t$ the previous synchronization time $s(t)$
satisfies $\eta_{s(t)}\le2\eta_t$. Suppose also
$$ \mathbb E\|g_h^k(x_h^k)\|_2^2\le G^2 \quad(0\le h<T,\ 1\le k\le K), $$
where $g_h^k$ is the local batch gradient. Then, for every $t$,
$$ \frac1K\sum_{k=1}^K \mathbb E\|x_t^k-\bar x_t\|_2^2 \le4\eta_t^2G^2H^2. $$

## Statement references

[Stich, Local SGD Converges Fast and Communicates Little, Lemma 3.3 and Appendix A](https://arxiv.org/pdf/1805.09767v3)

## Facts & Assumptions

**Given:** The local-SGD trajectories, synchronization schedule and local gradient second-moment bound in the Statement.

[F1] [[alg-local-sgd]]: all workers have the same iterate at each synchronization time, including the initial time $0$.

[F2] [[lem-relaxed-euclidean-squared-norm]]: squared norms of finite vector sums obey the stated relaxed inequality.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation is taken over the finite product law of the sampled indices.

## Proof

1.1 Fix $t$ and let $s=s(t)$ be the latest synchronization time not exceeding [given]
$t$. Then $0\le t-s\le H$ and [F1] gives
$x_s^k=\bar x_s$ for all $k$. For any vectors $z_1,\ldots,z_K$ and any $z$,
expansion around their mean gives
$$ \frac1K\sum_k\|z_k-\bar z\|_2^2 =\frac1K\sum_k\|z_k-z\|_2^2-\|\bar z-z\|_2^2 \le\frac1K\sum_k\|z_k-z\|_2^2. $$
Apply this identity with $z_k=x_t^k$ and the common value $z=x_s^k$ to bound
the worker deviation by the mean squared displacement from time $s$. [F1,
F3, given, algebra]

1.2 For each worker, [given]
$x_t^k-x_s^k=-\sum_{h=s}^{t-1}\eta_hg_h^k(x_h^k)$. By [F2],
nonincreasing step sizes, and the second-moment hypothesis,
$$ \mathbb E\|x_t^k-x_s^k\|_2^2 \le(t-s)\sum_{h=s}^{t-1}\eta_h^2 \mathbb E\|g_h^k(x_h^k)\|_2^2 \le H^2\eta_s^2G^2. $$
Average over $k$ and use $\eta_s\le2\eta_t$ from the Statement. The resulting
bound is $4H^2\eta_t^2G^2$, proving the claim. [F1, F2, F3, step 1.1,
given, algebra] ∎
