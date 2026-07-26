---
id: cor-cesaro-matrix-is-regular
kind: corollary
title: "The Cesaro matrix satisfies the Silverman-Toeplitz conditions, giving a second proof of the Cesaro mean theorem"
status: published
origin: session
deps: [thm-silverman-toeplitz, def-summability-matrix, def-cesaro-mean, def-sequence, def-finite-sum, lem-finite-sum-laws, def-real-limit, cor-archimedean-reciprocal, lem-of-inverse-positive, lem-of-naturals-positive, lem-of-abs-value, def-complete-ordered-field, def-ordered-field]
forward_refs: [cex-irregular-summability-matrix]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Silverman-Toeplitz theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Silverman%E2%80%93Toeplitz_theorem"
    - title: "Cesàro summation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ces%C3%A0ro_summation"
pipeline_run: null
---

## Statement

Define $c_{n,k} := (n+1)^{-1}$ for $k \le n$ and $c_{n,k} := 0$ for $k > n$.
Then:

1. $c$ is a summability matrix ([[def-summability-matrix]]), with $n$ an
   admissible bound for row $n$;
2. the transform of a sequence $(x_k)$ by $c$ is exactly its sequence of Cesaro
   means ([[def-cesaro-mean]]), $y_n = \sigma_n$;
3. $c$ satisfies the three conditions of [[thm-silverman-toeplitz]], so $c$ is
   regular.

Consequently every convergent sequence has $\sigma_n \to \lim_k x_k$, which is a
second proof of [[thm-cesaro-mean-theorem]], obtained from the general
characterisation rather than from a direct estimate.

## Facts & Assumptions

**Given:** The matrix $c$ with $c_{n,k} = (n+1)^{-1}$ for $k \le n$ and $c_{n,k} = 0$ for $k > n$.

[L1] Summability matrices: finite row support, the transform, the row sum, the row absolute sum and regularity ([[def-summability-matrix]], [[def-sequence]]).

[L2] The Cesaro means $\sigma_n = (n+1)^{-1}\sum_{k=0}^{n} x_k$ ([[def-cesaro-mean]]).

[L3] Silverman-Toeplitz: a summability matrix is regular exactly when every column tends to $0$, the row sums tend to $1$, and the row absolute sums are uniformly bounded ([[thm-silverman-toeplitz]]).

[L4] Finite sums and their laws, in particular $\sum_{k<d}\lambda = d\lambda$ ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L5] Convergence, and the fact that a constant sequence converges to its value ([[def-real-limit]], [[def-sequence]]).

[L6] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $m \ge 1$ with $1/m < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L7] Order arithmetic: $(n+1)\cdot 1_{\mathbb{R}} > 0$ for every $n \in \mathbb{N}$ ([[lem-of-naturals-positive]]); a positive element is invertible with positive inverse, and reciprocation reverses the order ([[lem-of-inverse-positive]]); $|u| = u$ for $u \ge 0$ ([[lem-of-abs-value]]); the order is total and transitive ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Row $n$ of $c$ vanishes at every $k > n$, so $n$ is an admissible bound for row $n$ and $c$ is a summability matrix; its transform is $y_n = \sum_{k=0}^{n}(n+1)^{-1}x_k = (n+1)^{-1}\sum_{k=0}^{n}x_k = \sigma_n$. [L1, L2, L4]

1.2 For every $n$ the canonical natural $(n+1)\cdot 1_{\mathbb{R}}$ is positive, hence invertible with $(n+1)^{-1} > 0$; so $|c_{n,k}| = c_{n,k}$ for all $n,k$. [L7]

2.1 **Columns are null.** Fix $k$ and let $\varepsilon > 0$; choose $m \ge 1$ with $1/m < \varepsilon$. For $n \ge m$ one has $n + 1 > m$, so $|c_{n,k} - 0| \le (n+1)^{-1} < 1/m < \varepsilon$, the case $n < k$ giving $c_{n,k} = 0$ outright. Hence $\lim_n c_{n,k} = 0$. [step 1.2, L5, L6, L7]

2.2 **Row sums tend to $1$.** For every $n$, $\sum_k c_{n,k} = \sum_{k=0}^{n}(n+1)^{-1} = (n+1)(n+1)^{-1} = 1$, a constant sequence, which converges to $1$. [step 1.1, step 1.2, L1, L4, L5]

2.3 **Row absolute sums are uniformly bounded.** For every $n$, $\sum_k |c_{n,k}| = \sum_k c_{n,k} = 1 \le 1$. [step 1.1, step 1.2, L1, L4]

3.1 All three conditions hold, so $c$ is regular. [step 2.1, step 2.2, step 2.3, L3]

4.1 Therefore, for every convergent sequence $(x_k)$, the transform $(\sigma_n)$ converges with $\lim_n \sigma_n = \lim_k x_k$. [step 1.1, step 3.1, L1] ∎

## Remarks

- **Which condition is doing what.** For the Cesaro matrix the row sums and the
  row absolute sums are not merely convergent and bounded, they are constantly
  $1$; the whole content is that the columns are null, that is, that each single
  term contributes a weight $1/(n+1)$ which fades away. That is the precise
  sense in which averaging forgets any finite head, and it is why
  [[fs-cesaro-converse]] is false: forgetting the head is not the same as
  recovering the sequence.

- **Two proofs, two costs.** [[thm-cesaro-mean-theorem]] is proved directly by a
  head-and-tail estimate, with no machinery at all;
  [[thm-silverman-toeplitz]] proves the same estimate once for every weighting
  and then reads the Cesaro case off three trivial verifications. Both are kept,
  because the direct proof is what a reader should see first and the general one
  is what generalises.

- **A weighting with unbounded row absolute sums need not be regular**, and the
  Cesaro matrix is as far from that as possible, its rows being nonnegative and
  summing to $1$. See [[cex-irregular-summability-matrix]] for the contrast.
