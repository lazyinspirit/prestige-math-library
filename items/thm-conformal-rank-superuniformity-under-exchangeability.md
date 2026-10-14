---
id: thm-conformal-rank-superuniformity-under-exchangeability
kind: theorem
title: "Conformal rank superuniformity under exchangeability"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 6
deps:
  - def-conformal-nonconformity-score-and-rank-pvalue
  - def-exchangeable-random-elements
  - lem-finite-order-statistic-and-rank-maps-are-measurable
  - def-probability-measure
  - def-independent-sigma-algebras-and-events
  - cor-expectation-of-an-indicator-is-probability
  - cor-expectation-linearity-monotonicity-and-modulus-bound
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Jing Lei et al., Distribution-Free Predictive Inference for Regression, JASA 113(523) (2018), §2.1 and Appendix A.1"
      url: "https://arxiv.org/pdf/1604.04173"
    - title: "Glenn Shafer and Vladimir Vovk, A Tutorial on Conformal Prediction, JMLR 9 (2008), §§3.1, 4.1–4.2"
      url: "https://www.jmlr.org/papers/volume9/shafer08a/shafer08a.pdf"
    - title: "Ryan Tibshirani, Conformal Prediction, Advanced Topics in Statistical Learning, Spring 2024, §§1–2"
      url: "https://www.stat.berkeley.edu/~ryantibs/statlearn-s24/lectures/conformal.pdf"
---

## Statement

Let $R_1,\ldots,R_n$ be an exchangeable real random vector with $n\ge1$.
Define its last-coordinate upper-rank p-value by
$$p_n=\frac1n\#\{i\le n:R_i\ge R_n\}.$$
Then $\mathbb P(p_n\le u)\le u$ for every $u\in[0,1]$. If $U$ has Lebesgue
probability law on $[0,1]$ and is independent of $R$, define
$$p_{U,n}=\frac{\#\{i\le n:R_i>R_n\}+U\,\#\{i\le n:R_i=R_n\}}n.$$
Then $p_{U,n}$ has the uniform law on $[0,1]$.

## Facts & Assumptions

**Given:** The exchangeable score vector, $n\ge1$, and, for the randomized assertion, an independent $[0,1]$-valued random element with Lebesgue probability law.

[F1] Exchangeability means joint-law invariance under every coordinate permutation. [[def-exchangeable-random-elements]]

[F2] The upper-rank and tie-randomized p-values count scores greater than or equal to the candidate, with the randomized formula spreading uniformly across all tied scores. [[def-conformal-nonconformity-score-and-rank-pvalue]]

[F3] These finite comparison sums are measurable, so their probability events are defined. [[lem-finite-order-statistic-and-rank-maps-are-measurable]]

[F4] Independence of random elements or their generated sigma-algebras is defined by factorization of probabilities of finite intersections. [[def-independent-sigma-algebras-and-events]]

[F5] An indicator has expectation equal to the probability of its event, and expectation is linear for finite sums of integrable random variables. [[cor-expectation-of-an-indicator-is-probability]] [[cor-expectation-linearity-monotonicity-and-modulus-bound]]

## Proof

1.1 Fix a deterministic vector $r\in\mathbb R^n$. List its distinct values in decreasing order $v_1>\cdots>v_s$, let $d_j$ be the multiplicity of $v_j$, and put $D_j=\sum_{\ell=1}^j d_\ell$. Each coordinate in the $j$th tie group has upper rank $D_j/n$. Hence the number of coordinates whose upper rank is at most $u$ is either zero or one of the cumulative counts $D_j\le nu$, and is therefore at most $nu$. [given, F2]

1.2 For fixed $r$, the $j$th tie group has $D_{j-1}$ scores strictly above it and $d_j$ scores equal to it, so for any index in that group the randomized rank is $(D_{j-1}+Ud_j)/n$. Averaging uniformly over the $n$ coordinate indices selects this interval with probability $d_j/n$; conditional on the group, its value is uniform on $[D_{j-1}/n,D_j/n]$. These intervals partition $[0,1]$ and their lengths are $d_j/n$, so the averaged rank law is Uniform$[0,1]$. [given, F2]

2.1 By exchangeability [F1], each coordinate has the same upper-rank distribution. Thus [F5] and the pointwise bound of step 1.1 give $\mathbb P(p_n\le u)=\frac1n\sum_{i=1}^n\mathbb P(\frac1n\#\{j:R_j\ge R_i\}\le u)=\mathbb E[\frac1n\sum_{i=1}^n\mathbf1\{\frac1n\#\{j:R_j\ge R_i\}\le u\}]\le u$. The last coordinate therefore has a superuniform upper-rank p-value. [F1, F3, F5, step 1.1]

3.1 Since $R$ is exchangeable and $U$ is independent of $R$ by [F4], permuting score coordinates leaves the joint law of $(R,U)$ unchanged. Thus every randomized coordinate rank has the same distribution, equal to the averaged distribution in step 1.2. In particular $p_{U,n}$ is Uniform$[0,1]$. [F1, F4, step 1.2] ∎
