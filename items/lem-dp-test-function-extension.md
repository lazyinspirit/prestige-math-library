---
id: lem-dp-test-function-extension
kind: lemma
title: Differential privacy inequality for bounded measurable functions
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-differential-privacy-and-adjacency
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-integral-of-a-nonnegative-simple-function
  - thm-monotone-convergence-for-the-integral
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice axiom is used.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Cynthia Dwork and Aaron Roth, The Algorithmic Foundations of Differential Privacy"
      url: https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf
    - title: "Salil Vadhan, The Complexity of Differential Privacy, 2017 manuscript"
      url: https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf
---

## Statement

Let $P$ and $Q$ be probability measures on a measurable space. Suppose $\varepsilon\ge0$, $0\le\delta\le1$, and $P(A)\le e^\varepsilon Q(A)+\delta$ for every measurable set $A$. Then every measurable function $g$ with $0\le g\le1$ satisfies

$$
\int g\,dP\le e^\varepsilon\int g\,dQ+\delta.
$$

## Statement references

[[def-differential-privacy-and-adjacency|The event inequality in differential privacy]]

[Dwork and Roth, *The Algorithmic Foundations of Differential Privacy*, Proposition 2.1, printed p. 19 (postprocessing context; the test-function extension is proved below).](https://privacytools.seas.harvard.edu/resource/thealgorithmicfoundationsofdifferentialprivacypdf)

[Vadhan, *The Complexity of Differential Privacy*, §2.1, Lemma 2.1 (postprocessing context).](https://salil.seas.harvard.edu/sites/g/files/omnuum4266/files/salil/files/manuscript_2017.pdf)

## Facts & Assumptions

**Given:** Probability measures $P,Q$, $\varepsilon\ge0$, $0\le\delta\le1$, the event inequality in the Statement, and a measurable $g$ with $0\le g\le1$.

[F2] [[def-expectation-of-a-nonnegative-or-integrable-random-variable|Expectation]] is integration against the probability measure.

[F3] [[def-integral-of-a-nonnegative-simple-function|Simple integrals]] are the finite sums $\int\sum_j c_j\mathbf1_{E_j}\,d\mu=\sum_jc_j\mu(E_j)$ for disjoint measurable $E_j$ and $c_j\ge0$.

[F4] [[thm-monotone-convergence-for-the-integral|Monotone convergence]] passes increasing nonnegative functions through each integral.

## Proof

1.1 For each integer $m\ge0$, put $n=2^m$ and define $g_m=\frac1n\sum_{j=1}^n\mathbf1_{\{g\ge j/n\}}$. Each $g_m$ is a measurable simple function and $0\le g_m\le g$. Every level $j/n$ counted at stage $m$ contributes the two levels $(2j-1)/(2n)$ and $2j/(2n)$ at stage $m+1$, so $g_{m+1}\ge g_m$. The largest dyadic level not exceeding any fixed $g(x)$ differs from $g(x)$ by less than $2^{-m}$, so $g_m(x)\uparrow g(x)$. [given, construct]

2.1 Apply the given event inequality to the $n$ level sets in step 1.1 and use [F3] on disjoint simple representations. Partition the range into $B_k=\{k/n\le g<(k+1)/n\}$ for $0\le k<n$ and $B_n=\{g=1\}$. Then $g_m=\sum_{k=1}^{n-1}(k/n)\mathbf1_{B_k}+\mathbf1_{B_n}$, while each level set $\{g\ge j/n\}$ is the disjoint union of $B_j,\ldots,B_n$. Rearranging these finite sums gives $\int g_m\,dP=\frac1n\sum_{j=1}^nP(g\ge j/n)\le\frac1n\sum_{j=1}^n(e^\varepsilon Q(g\ge j/n)+\delta)=e^\varepsilon\int g_m\,dQ+\delta$. This holds for every $m$. [given, F3, step 1.1, algebra]

3.1 Let $m\to\infty$ in step 2.1. By [F4] and step 1.1, both nonnegative integrals converge to the corresponding integrals of $g$, so $\int g\,dP\le e^\varepsilon\int g\,dQ+\delta$. [F2, F4, step 1.1, step 2.1] ∎
