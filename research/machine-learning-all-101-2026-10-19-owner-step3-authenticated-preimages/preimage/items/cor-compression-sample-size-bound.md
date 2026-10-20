---
id: cor-compression-sample-size-bound
kind: corollary
title: "A sample-size consequence for compression schemes"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - thm-compression-generalization-bound
  - lem-compression-binomial-sum-bound
  - lem-exponential-dominates-one-plus-x
  - def-natural-logarithm
  - def-real-exponential-function-and-e
  - thm-natural-logarithm-laws
  - thm-exponential-addition-formula
  - thm-exponential-is-strictly-increasing
  - cor-exponential-reciprocal-and-positivity
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Sally Floyd and Manfred Warmuth, Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension, Theorem 5 and §5"
      url: "https://mwarmuth.bitbucket.io/pubs/J30.pdf"
---

## Statement

Let $m,d\in\mathbb N$ with $m>d$. Let $(\mathcal X,\Sigma)$ be a measurable space, let $c:\mathcal X\to\{0,1\}$ be measurable, and let $D$ be a probability measure on $\mathcal X$. Put $\mathcal Z=\mathcal X\times\{0,1\}$ with its product sigma-algebra. For each $0\le i\le d$, let $G_i:\mathcal Z^i\times\mathcal X\to\{0,1\}$ be a fixed jointly measurable reconstruction map, with $G_0$ measurable on $\mathcal X$. Draw independent observations $X_1,\ldots,X_m$, each with law $D$, and form $S=((X_1,c(X_1)),\ldots,(X_m,c(X_m)))$. A deterministic compressor selects an index subset $I(S)=\{i_1<\cdots<i_k\}\subseteq[m]$ with $k\le d$ and outputs $h_S(x)=G_k(S_{I(S)},x)$, where $S_{I(S)}$ is the ordered tuple of selected labeled entries; for $I(S)=\varnothing$, use $G_0$. Assume the reconstruction is consistent on every such sample, meaning $h_S(X_j)=c(X_j)$ for each $j$, and assume the learner's output-risk event is measurable. Define $R_D(h):=D\{x:h(x)\ne c(x)\}$. Fix $\epsilon,\delta\in(0,1)$. If $d=0$ and $m\epsilon\ge\log(1/\delta)$, or if $1\le d<m$ and
$$\epsilon(m-d)\ge d\log\left(\frac{em}{d}\right)+\log(1/\delta),$$
where $e$ is the base of the real exponential function, then $R_D(h_S)\le\epsilon$ with probability at least $1-\delta$ over the independent observations.

## Statement references

[[thm-compression-generalization-bound]]: the probability of any consistent bad reconstruction among all index subsets is bounded by the exact binomial sum.

[[def-sample-compression-scheme]]: a deterministic scheme selects at most $d$ labeled entries and reconstructs a binary classifier from those entries alone, consistently on the full sample.

[[lem-compression-binomial-sum-bound]]: for $1\le d\le m$, $\sum_{i=0}^d\binom{m}{i}\le(em/d)^d$.

[[lem-exponential-dominates-one-plus-x]]: $(1-p)^n\le\exp(-np)$ for $p\in[0,1]$ and natural $n$.

[[def-natural-logarithm]]: $\log$ is the inverse of the real exponential on the positive reals.

[[thm-natural-logarithm-laws]]: the natural logarithm is increasing and obeys the product and reciprocal laws.

[[def-real-exponential-function-and-e]]: $e=\exp(1)$.

[[thm-exponential-addition-formula]]: $\exp(x+y)=\exp(x)\exp(y)$.

[[thm-exponential-is-strictly-increasing]]: the real exponential is increasing.

[[cor-exponential-reciprocal-and-positivity]]: the real exponential is positive and $\exp(-x)=1/\exp(x)$.

[Floyd and Warmuth, *Sample Compression, Learnability, and the Vapnik–Chervonenkis Dimension*, Theorem 5 and §5](https://mwarmuth.bitbucket.io/pubs/J30.pdf): sample-size consequences are derived from the compression probability bound.

## Facts & Assumptions

**Given:** The hypotheses in the Statement.

[F1] The exact bad-subset probability is at most $\sum_{i=0}^d\binom{m}{i}(1-\epsilon)^{m-i}$. [[thm-compression-generalization-bound]]

[F2] If $1\le d\le m$, then $\sum_{i=0}^d\binom{m}{i}\le(em/d)^d$. [[lem-compression-binomial-sum-bound]]

[F3] For $0\le p\le1$ and natural $n$, $(1-p)^n\le\exp(-np)$. [[lem-exponential-dominates-one-plus-x]]

[F4] The natural logarithm and real exponential are defined on their stated domains; the logarithm is increasing, inverse to the exponential, and satisfies the product and reciprocal laws, while the exponential is increasing and positive and obeys the addition law. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-exponential-function-and-e]], [[thm-exponential-addition-formula]], [[thm-exponential-is-strictly-increasing]], [[cor-exponential-reciprocal-and-positivity]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $d=0$, [F1] reduces the bad-subset probability to $(1-\epsilon)^m$. By [F3] this is at most $\exp(-m\epsilon)$, which is at most $\delta$ when $m\epsilon\ge\log(1/\delta)$ by [F4]. [F1, F3, F4, given, algebra]

1.2 If $1\le d<m$, then for every $i\le d$, [F3] with $n=m-i$ gives $(1-\epsilon)^{m-i}\le\exp(-\epsilon(m-i))$. Since $m-i\ge m-d$ and $\epsilon>0$, monotonicity of the exponential [F4] gives $\exp(-\epsilon(m-i))\le\exp(-\epsilon(m-d))$. Thus [F1] and [F2] bound the bad-subset probability by $\left(\frac{em}{d}\right)^d\exp(-\epsilon(m-d))=\exp\left(d\log\left(\frac{em}{d}\right)-\epsilon(m-d)\right)$. The displayed sample-size condition makes the exponent at most $-\log(1/\delta)=\log\delta$, so monotonicity of the exponential gives a bound at most $\delta$. [F1, F2, F3, F4, given, algebra]

2.1 A consistent learner's output is one of the reconstructions counted by the bad-subset event in [F1]. Therefore its measurable failure event has probability at most $\delta$ in either case, proving the conclusion. [F1, step 1.1, step 1.2, given] ∎
