---
id: lem-dirichlet-aggregation-under-coarsening
kind: lemma
title: "Dirichlet parameters add under coarsening"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 5
deps:
  - lem-countable-discrete-space-is-standard-borel
  - prop-dirac-measure-is-a-probability-measure
  - thm-nonnegative-weighted-sums-of-measures
  - thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure
  - def-dirichlet-distribution
  - def-gamma-distribution-shape-rate
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-uniqueness-of-a-multivariate-exponential-transform
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-real-gamma-function-by-the-euler-integral
  - thm-real-gamma-euler-integral-convergence
justified_by: []
proof_strategy: direct
axiom_use: "Full AC implies the Countable Choice needed for Gamma normalization; AC is also assumed by the normalized-Gamma construction and exponential-transform uniqueness."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Thomas S. Ferguson, A Bayesian Analysis of Some Nonparametric Problems, 1973, Section 2"
      url: "https://users.wpi.edu/~balnan/Ferguson1973.pdf"
    - title: "Günter Last and Mathew Penrose, Lectures on the Poisson Process, 2017, Chapter 1"
      url: "https://stoch.math.kit.edu/img/Last/lastpenrose2017.pdf"
---

## Statement

Assume AC. Let $P=(P_1,\ldots,P_k)$ have the Dirichlet distribution with
positive parameters $(a_1,\ldots,a_k)$. If
$I_1,\ldots,I_r$ is a partition of $\{1,\ldots,k\}$ into nonempty groups,
then
$$\left(\sum_{j\in I_1}P_j,\ldots,\sum_{j\in I_r}P_j\right)\sim\operatorname{Dirichlet}(b_1,\ldots,b_r),\qquad b_\ell=\sum_{j\in I_\ell}a_j.$$
When $r=1$, the grouped vector is the point mass at $1$.

## Facts & Assumptions

**Given:** Full AC; positive $a_1,\ldots,a_k$; and a partition of the coordinate indices into nonempty groups.

[A1] Full AC is assumed. [[def-axiom-of-choice]].

[A2] Full AC implies the Countable Choice required by Gamma density normalization. [[thm-choice-implies-dependent-implies-countable-choice]] [[def-countable-choice]].

[F1] On a finite discrete standard Borel space, the normalized-gamma construction realizes a positive-parameter Dirichlet vector as independent $\operatorname{Gamma}(a_j,1)$ increments divided by their sum. [[thm-existence-of-dirichlet-process-by-normalized-gamma-poisson-random-measure]].

[F2] Under Countable Choice, a shape-rate Gamma$(a,1)$ variable has density $z^{a-1}e^{-z}/\Gamma(a)$, normalized for $a>0$; the Euler Gamma value is finite and positive. [[def-gamma-distribution-shape-rate]] [[def-real-gamma-function-by-the-euler-integral]] [[thm-real-gamma-euler-integral-convergence]].

[F3] Under Countable Choice, the nonnegative Lebesgue change-of-variables formula holds for $C^1$ diffeomorphisms. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F4] Finite measures with an exponential moment and the same Laplace transform on a neighborhood of zero are equal under AC. [[lem-uniqueness-of-a-multivariate-exponential-transform]].

[F5] Finite products of probability measures exist and satisfy the rectangle product formula. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]].

[F6] The finite-dimensional Dirichlet law is the positive-parameter simplex law specified in [[def-dirichlet-distribution]].

[F7] Every nonempty finite discrete space is standard Borel. Dirac set functions are probability measures; finite nonnegative weighted sums of them are measures. [[lem-countable-discrete-space-is-standard-borel]] [[prop-dirac-measure-is-a-probability-measure]] [[thm-nonnegative-weighted-sums-of-measures]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 The nonempty finite discrete space $S=\{1,\ldots,k\}$ is standard Borel by [F7]. Define $\alpha(B)=\sum_{j\in B}a_j$ for $B\subseteq S$, equivalently $\alpha=\sum_{j=1}^k a_j\delta_j$. By [F7] this is a measure, with finite positive total $\sum_{j=1}^k a_j$, so [F1] applies to $(S,\mathcal P(S),\alpha)$. Thus the law of $P$ is that of $Z_j/\sum_{h=1}^kZ_h$, where the $Z_j$ are independent $\operatorname{Gamma}(a_j,1)$ variables, and it is the Dirichlet law [F6]. [A1, F1, F5, F6, F7, given, construct]

2.1 For $u<1$, [F2] and the change of variables $t=(1-u)z$ in [F3] give $\mathbb E e^{uZ_j}=\Gamma(a_j)^{-1}\int_0^\infty z^{a_j-1}e^{-(1-u)z}dz=(1-u)^{-a_j}$. For $W_\ell=\sum_{j\in I_\ell}Z_j$, independence therefore gives the joint moment-generating function $\prod_{\ell=1}^r(1-u_\ell)^{-b_\ell}$ for $|u_\ell|<\delta<1$, since the groups use disjoint coordinates in the finite product law [F5]. [A1, A2, F2, F3, F5, step 1.1, algebra]

3.1 By [F5], the product law of independent $\operatorname{Gamma}(b_\ell,1)$ variables exists and has the same joint transform. Both laws have finite exponential moment at every $0<\delta<1$, since the transform at $(\delta,\ldots,\delta)$ is finite. Applying [F4] to the difference of these two finite measures shows that $(W_1,\ldots,W_r)$ has that product Gamma law. [A1, A2, F4, F5, step 2.1]

4.1 Normalize the grouped variables by their common positive total. The resulting vector is Dirichlet with parameters $(b_1,\ldots,b_r)$ by [F1], while $W_\ell/\sum_hW_h=\sum_{j\in I_\ell}P_j$ by step 1.1. This proves the claim for $r\ge2$. For $r=1$ the only coordinate sum is $\sum_{j=1}^kP_j=1$, which is the stated one-category law. [F1, step 1.1, step 3.1, algebra, cases] ∎
