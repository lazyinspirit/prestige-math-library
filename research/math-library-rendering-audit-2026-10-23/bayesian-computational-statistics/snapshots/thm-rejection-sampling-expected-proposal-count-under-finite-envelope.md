---
id: thm-rejection-sampling-expected-proposal-count-under-finite-envelope
kind: theorem
title: Expected proposal count under a finite rejection envelope
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - alg-rejection-sampling
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-identically-distributed-and-iid-random-variables
  - thm-geometric-series
  - thm-monotone-convergence-for-the-integral
  - thm-rejection-sampling-has-target-acceptance-law
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 4 §4.7
      url: https://artowen.su.domains/mc/Ch-nonunifrng.pdf
    - title: Computational Statistics with R, Chapter 6 §6.1
      url: https://cswr.nrhstat.org/reject-samp.html
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Statement

In the setup of [[thm-rejection-sampling-has-target-acceptance-law]], let $N$
be the number of proposals through and including the first accepted proposal.
With $p=Z_f/(cZ_g)$ and $q=1-p$, for every integer $k\ge1$,
$$\mathbb P(N=k)=q^{k-1}p,\qquad \mathbb E[N]=\frac1p=\frac{cZ_g}{Z_f}.$$
Thus $N$ is geometric on $\{1,2,\ldots\}$. For normalized target and proposal
densities, $\mathbb E[N]=c$.

## Facts & Assumptions

**Given:** The envelope, normalizers, and ideal IID draw stream in [[alg-rejection-sampling]], with the acceptance probability established by [[thm-rejection-sampling-has-target-acceptance-law]].

[F1] [[alg-rejection-sampling]] and [[def-identically-distributed-and-iid-random-variables]]: the proposal and auxiliary draws are independent across trials and share their respective laws, so the acceptance events are IID.

[F2] [[thm-rejection-sampling-has-target-acceptance-law]]: each proposal is accepted with probability $p=Z_f/(cZ_g)\in(0,1]$.

[F3] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: the expectation of a nonnegative random variable is its extended integral.

[F4] [[cor-additivity-of-the-nonnegative-lebesgue-integral]]: the integral of a finite sum of nonnegative measurable functions is the sum of their integrals.

[F5] [[thm-monotone-convergence-for-the-integral]]: increasing nonnegative measurable truncations converge in integral to their pointwise limit.

[F6] [[thm-geometric-series]]: for $0\le q<1$, $\sum_{j=0}^{\infty}q^j=1/(1-q)$, including $q=0$ with $q^0=1$.

## Proof

**Given:** The setup in the Statement.

1.1 Let $A_i$ be the event that proposal $i$ is accepted. The algorithm uses the same measurable acceptance region for each IID proposal-uniform pair, so mutual independence and common distribution in [F1] imply that the events $A_i$ are IID. By [F2], $\mathbb P(A_i)=p$ for every $i$. Therefore $\mathbb P(N>m)=q^m$ for $m\ge0$, and $\mathbb P(N=k)=\mathbb P(A_1^c\cap\cdots\cap A_{k-1}^c\cap A_k)=q^{k-1}p$ for each $k\ge1$. [F1, F2, given, algebra]

2.1 For each $m\ge1$, the pointwise identity $N\wedge m=\sum_{j=1}^m\mathbf1_{\{N\ge j\}}$ holds, including on the null event $N=\infty$. By [F3], [F4], and step 1.1, $\mathbb E[N\wedge m]=\sum_{j=1}^m\mathbb P(N\ge j) =\sum_{j=0}^{m-1}q^j.$ [F3, F4, step 1.1, algebra]

3.1 The truncations $N\wedge m$ increase pointwise to $N$. By [F5] and then [F6], $\mathbb E[N]=\lim_{m\to\infty}\mathbb E[N\wedge m] =\sum_{j=0}^{\infty}q^j=\frac1{1-q}=\frac1p.$ This is finite because $p>0$. [F5, F6, step 2.1, algebra]

4.1 Substituting $p=Z_f/(cZ_g)$ from [F2] gives $\mathbb E[N]=cZ_g/Z_f$; when $Z_f=Z_g=1$, this is $c$. [F2, step 3.1, algebra] ∎
