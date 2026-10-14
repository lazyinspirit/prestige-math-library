---
id: cex-finite-variance-does-not-imply-subgaussian-tail
kind: counterexample
title: "Finite variance does not imply a sub-Gaussian tail"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps:
  - cor-exponential-reciprocal-and-positivity
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integer-power
  - def-measure
  - def-moments-variance-and-covariance
  - def-probability-measure
  - def-random-element-and-real-random-variable
  - def-series
  - def-subgaussian-variable-and-vector
  - thm-exponential-beats-every-polynomial
  - thm-finite-subgaussian-maximum-and-epsilon-net
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-series-bounded-partial-sums
proof_strategy: contradiction
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 1, sub-Gaussian tail bounds"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 4, Proposition 4.1.8"
      url: "https://web.stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement refuted

Every centered real random variable with finite variance is sub-Gaussian with some finite proxy.

## Facts & Assumptions

**Given:** A countable atomic probability space, the real random variable defined below, and the meanings of expectation, variance, and sub-Gaussian proxy.

[F1] A measure is nonnegative and countably additive, and a probability measure has total mass $1$ ([[def-measure]], [[def-probability-measure]]).

[F2] A real random variable is a measurable map to $(\mathbb R,\mathcal B(\mathbb R))$ ([[def-random-element-and-real-random-variable]]).

[F3] Expectation is integration against the probability measure, and the variance of a square-integrable real variable is $\mathbb E[(X-\mathbb E X)^2]$ ([[def-expectation-of-a-nonnegative-or-integrable-random-variable]], [[def-moments-variance-and-covariance]]).

[F4] A series is the limit of its partial sums when those partial sums converge; a nonnegative series with bounded partial sums converges to their supremum ([[def-series]], [[thm-nonnegative-series-bounded-partial-sums]]).

[F5] Increasing nonnegative functions pass to their limit under the integral ([[thm-monotone-convergence-for-the-integral]]).

[F6] A centered variable with sub-Gaussian proxy $\sigma^2$ satisfies $\mathbb P(|X|\ge t)\le2e^{-t^2/(2\sigma^2)}$ for $\sigma^2>0$, and its positive-threshold tail is zero for $\sigma^2=0$ ([[thm-finite-subgaussian-maximum-and-epsilon-net]]).

[F7] For every positive $a$ and natural $m$, $x^m/e^{ax}\to0$ as $x\to+\infty$ ([[thm-exponential-beats-every-polynomial]]).

[F8] $e^{-x}=1/e^x$ for every real $x$ ([[cor-exponential-reciprocal-and-positivity]]).

## Counterexample

1.1 Let $S=\sum_{k=1}^{\infty}k^{-4}$. Its partial sums are increasing, and for $k\ge2$, $k^{-4}\le k^{-2}\le1/[k(k-1)]=1/(k-1)-1/k$; hence $1\le S\le2$ and $S$ is finite by [F4]. Set $c=(2S)^{-1}>0$. [given, F4, algebra]

1.2 Enumerate $\Omega=\{(k,s):k\ge1,\ s\in\{-1,1\}\}$ by $\omega_{2k-1}=(k,1)$, $\omega_{2k}=(k,-1)$, and assign each atom weight $w_{2k-1}=w_{2k}=ck^{-4}$. Define $\mathbb P(A)=\sum_{j\ge1}w_j\mathbf1_A(\omega_j)$ for $A\subseteq\Omega$. The weights are nonnegative and sum to $2cS=1$, so all subseries converge by [F4]. For pairwise disjoint $A_r$, put $a_{rj}=w_j\mathbf1_{A_r}(\omega_j)$ and $q_j=\sum_r a_{rj}$; at most one term in each $q_j$ is nonzero. For every finite atom prefix $J$, only finitely many $A_r$ meet that prefix, so finite regrouping gives $\sum_{j=1}^Jq_j=\sum_r\sum_{j=1}^Ja_{rj}\le\sum_r\mathbb P(A_r)$. Taking the supremum over $J$ yields $\mathbb P(\bigcup_rA_r)\le\sum_r\mathbb P(A_r)$. Conversely, for each finite event prefix $R$ and each $\delta>0$, convergence of the finitely many subseries lets us choose one atom prefix $J$ for which $\sum_{r=1}^R\mathbb P(A_r)-\delta\le\sum_{r=1}^R\sum_{j=1}^Ja_{rj}\le\sum_{j=1}^Jq_j\le\mathbb P(\bigcup_rA_r)$. Letting $\delta\downarrow0$ and then taking the supremum over $R$ proves the reverse inequality. Thus [F1] makes $\mathbb P$ a probability measure. [given, F1, F4, algebra]

1.3 Define $X(k,s)=sk$ on $(\Omega,\mathcal P(\Omega),\mathbb P)$. It is a real random variable by [F2], since every preimage is a subset of the full-power-set sample space. [F1, F2, given]

1.4 By [F5] applied to finite atom prefixes, $\mathbb E|X|=2c\sum_{k\ge1}k^{-3}$ and $\mathbb E X^2=2c\sum_{k\ge1}k^{-2}$. For $k\ge2$, $k^{-3}\le k^{-2}\le1/[k(k-1)]$, whose partial sums telescope to at most $1$; hence both moments are finite, so $X$ is integrable and square-integrable. The two atoms at each $k$ have equal mass and opposite values; since $\mathbb E|X|<\infty$, their absolutely convergent contributions cancel and $\mathbb E X=0$. By [F3], $X$ is centered with finite variance $\operatorname{Var}(X)=\mathbb E X^2$. [F3, F5, algebra]

2.1 For every integer $n\ge1$, the atoms $(n,1)$ and $(n,-1)$ give $\mathbb P(|X|\ge n)\ge2cn^{-4}>0$. [given, step 1.2, step 1.3]

3.1 Suppose for contradiction that $X$ has a finite sub-Gaussian proxy $\sigma^2$. If $\sigma^2=0$, [F6] contradicts the positive tail in step 2.1. [F6, step 2.1, assume-contra]

4.1 If $\sigma^2>0$, [F6] gives $2cn^{-4}\le\mathbb P(|X|\ge n)\le2e^{-n^2/(2\sigma^2)}$. By [F8], $n^4e^{-n^2/(2\sigma^2)}=(n^2)^2/e^{n^2/(2\sigma^2)}$, which tends to $0$ by [F7] with $x=n^2$, $m=2$, and $a=1/(2\sigma^2)$. It is eventually smaller than $c$, so the upper tail is eventually smaller than $2cn^{-4}$, contradicting step 2.1. Thus this centered finite-variance variable is not sub-Gaussian for any finite proxy. [F6, F7, F8, step 2.1, assume-contra, algebra, discharge-contradiction: no finite proxy can satisfy the assumed bound] ∎

