---
id: cor-fourier-series-supported-on-a-sidon-set-and-continuous-has-ell-one-coefficients
kind: corollary
title: "A continuous Fourier series supported on a Sidon set has ell-one coefficients"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sidon-set-in-the-integer-dual, lem-fejer-kernel-is-a-positive-approximate-identity, thm-fejer-uniform-convergence-for-continuous-periodic-functions]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Daniel Rider, Gap Series on Groups and Spheres, Theorem 1.1"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/473201703AAA562B9B115F7E58327869/S0008414X00040372a.pdf/gap-series-on-groups-and-spheres.pdf"
---

## Statement

Let $E\subset\mathbb Z$ be Sidon, and let $f$ be continuous and one-periodic
with $\widehat f(k)=0$ for $k\notin E$. Then

$$\sum_{k\in E}|\widehat f(k)|<\infty.$$

The finite Sidon inequality is the definition in
[[def-sidon-set-in-the-integer-dual]]. The Fejer kernels are positive and have
mass one by [[lem-fejer-kernel-is-a-positive-approximate-identity]], and their
means converge uniformly for this $f$ by
[[thm-fejer-uniform-convergence-for-continuous-periodic-functions]].

## Facts & Assumptions

**Given:** $E,f$, and a Sidon constant $C_E$ as in the Statement.

## Proof

**Proof technique:** apply the finite Sidon inequality to Fejer polynomials and pass to monotone coefficient sums.

1.1 The $N$-th Fejer mean is the finite polynomial [given, algebra]
$$\sigma_Nf=\sum_{|k|\le N}\left(1-\frac{|k|}{N+1}\right)\widehat f(k)e_k.$$
Its spectrum lies in $E$. Positivity and mass one of the Fejer kernel give
$\|\sigma_Nf\|_\infty\le\|f\|_\infty$. [given, algebra]

2.1 Apply the Sidon inequality to this polynomial: [step 1.1, algebra]
$$\sum_{\substack{k\in E\\ |k|\le N}}\left(1-\frac{|k|}{N+1}\right)|\widehat f(k)|\le C_E\|f\|_\infty.$$
For every fixed finite subset of $E$, the displayed weights tend monotonically
to $1$. [step 1.1, algebra]

3.1 Letting $N\to\infty$ first for each finite subset and then taking the [step 2.1, algebra]
supremum over finite subsets gives $\sum_{k\in E}|\widehat f(k)|\le
C_E\|f\|_\infty$. Uniform Fejer convergence identifies the same continuous
function with these means, so no separate representative is introduced.
[step 2.1, algebra] ∎
