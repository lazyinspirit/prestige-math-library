---
id: lem-dirac-integral-evaluation
kind: lemma
title: "Integration against a Dirac measure evaluates at its point"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - def-dirac-measure
  - prop-dirac-measure-is-a-probability-measure
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Example 2.55"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Terence Tao, An Introduction to Measure Theory, Example 1.4.29"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
---

## Statement

Let $\mathcal A$ be a sigma-algebra on a set $X$, let $x_0\in X$, and let
$\delta_{x_0}$ be the Dirac probability measure on $(X,\mathcal A)$. For every
nonnegative $\mathcal A$-measurable $f:X\to[0,+\infty]$,
$$\int_X f\,d\delta_{x_0}=f(x_0).$$

## Facts & Assumptions

**Given:** A measurable space, a point $x_0$ in it, its Dirac measure, and a nonnegative measurable function $f$.

[F1] $\delta_{x_0}(A)=1$ if $x_0\in A$ and $0$ otherwise, and this set function is a probability measure on $(X,\mathcal A)$. ([[def-dirac-measure]], [[prop-dirac-measure-is-a-probability-measure]])

[F2] A nonnegative simple function has a finite representation by disjoint measurable sets, and its simple integral is the sum of its values times the set measures. ([[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]])

[F3] Every nonnegative measurable function is the pointwise increasing limit of nonnegative simple functions. ([[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]])

[F4] Increasing limits pass through the nonnegative Lebesgue integral. ([[thm-monotone-convergence-for-the-integral]])

## Proof

**Proof technique:** direct.

1.1 If $s=\sum_{j=1}^m c_j\mathbf 1_{A_j}$ is a nonnegative simple function with pairwise disjoint $A_j\in\mathcal A$, then [F1] and [F2] give $\int s\,d\delta_{x_0}=\sum_jc_j\delta_{x_0}(A_j)=\sum_jc_j\mathbf 1_{A_j}(x_0)=s(x_0)$. [F1, F2]

2.1 Choose the increasing simple approximation $s_n\uparrow f$ from [F3]. By [F4] and step 1.1, $\int f\,d\delta_{x_0}=\lim_n\int s_n\,d\delta_{x_0}=\lim_ns_n(x_0)=f(x_0)$, including when the value is $+\infty$. [F3, F4, step 1.1, choose] ∎
