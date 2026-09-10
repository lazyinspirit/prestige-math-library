---
id: lem-cesaro-limit-of-truncated-means
kind: lemma
title: Cesaro limit of truncated means
deps: ["thm-dominated-convergence", "thm-change-of-variables-for-expectation", "thm-cesaro-mean-theorem", "def-truncation-at-a-fixed-level"]
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

For identically distributed integrable real $(X_n)$, with $Y_k=X_k\mathbf1_{\{|X_k|\le k\}}$, one has $n^{-1}\sum_{k=1}^n\mathbb EY_k\to\mathbb EX_1$.

## Facts & Assumptions

[F1] [[thm-change-of-variables-for-expectation]]: Let $X:(\Omega,\mathcal F,\mathbb P)\to(S,\Sigma)$ be a random element, let
$\mathbb P_X$ be its law, and let $g:(S,\Sigma)\to\mathbb R$ or
$g:(S,\Sigma)\to\mathbb C$ be measurable.

1. If $g\ge0$, then
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$
2. If $g(X)$ is integrable, then $g$ is integrable with respect to
   $\mathbb P_X$ and the same formula holds:
   $$\mathbb E[g(X)]=\int_S g\,d\mathbb P_X.$$

[F2] [[thm-dominated-convergence]]: Let $f$ and $(f_n)$ be measurable complex-valued functions such that
$f_n\to f$ almost everywhere and $|f_n|\le g$ almost everywhere for a single
nonnegative measurable function $g$ with $\int g\,d\mu<+\infty$. Then
$f\in L^1(\mu)$,
$$\int|f_n-f|\,d\mu\longrightarrow0,$$
and hence
$$\int f_n\,d\mu\longrightarrow\int f\,d\mu.$$

[F3] [[thm-cesaro-mean-theorem]]: Let $(x_k)$ be a sequence of reals that converges (def-sequence,
def-real-limit), and let $(\sigma_n)$ be its sequence of Cesaro means
(def-cesaro-mean). Then $(\sigma_n)$ converges as well, and

$$\lim_n \sigma_n \;=\; \lim_k x_k .$$

Both limits are asserted to exist: the right-hand one by hypothesis, the
left-hand one as part of the conclusion. Equivalently: a convergent sequence is
$(C,1)$-summable, to its own limit. The notation is licensed by uniqueness of
limits of real sequences (lem-limit-unique).

The converse is false (fs-cesaro-converse).

## Proof

**Given:** The objects, hypotheses and definitions in the statement. Its conclusions are to be established below.

1.1 F1 and the common law give $\mathbb EY_k=\mathbb E[X_1\mathbf1_{\{|X_1|\le k\}}]$. The integrands tend pointwise to $X_1$ and their absolute values are bounded by the integrable $|X_1|$. Thus F2 gives $\mathbb EY_k\to\mathbb EX_1$. [F1, F2]

2.1 Apply F3 to the numerical sequence of finite expectations in step 1.1; reindexing its initial index from zero to one does not change its averages or their limit. [F3, step 1.1] ∎
