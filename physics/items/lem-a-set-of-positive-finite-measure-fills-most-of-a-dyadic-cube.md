---
id: lem-a-set-of-positive-finite-measure-fills-most-of-a-dyadic-cube
kind: lemma
title: "A measurable set of positive finite measure occupies more than any prescribed proportion of some dyadic cube"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-lebesgue-outer-regularity-for-arbitrary-subsets, thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes, thm-lebesgue-measure-is-a-complete-measure, thm-borel-sets-are-lebesgue-measurable, def-dyadic-cube-in-rn, thm-lebesgue-measure-of-a-box-of-every-kind, def-nonnegative-extended-series, def-measure, prop-measure-monotonicity, def-countable, def-extended-reals, def-countable-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "T. Tao, An Introduction to Measure Theory (GSM 126), Exercise 1.6.25"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
pipeline_run: null
---

## Statement

Let $n \ge 1$, **assume the Axiom of Countable Choice**
([[def-countable-choice]]), let $E \subseteq \mathbb{R}^n$ be Lebesgue
measurable with $0 < \lambda_n(E) < +\infty$, and let $\theta$ be a real with
$0 < \theta < 1$. Then there is a dyadic cube $Q$ ([[def-dyadic-cube-in-rn]])
with

$$\lambda_n(E\cap Q) \;>\; \theta\,\lambda_n(Q).$$

Both hypotheses on $\lambda_n(E)$ are used: positivity is what makes the
strict inequality available, and finiteness is what makes the division by
$\theta$ legitimate.

## Facts & Assumptions

**Given:** A natural number $n \ge 1$, the Axiom of Countable Choice, a Lebesgue measurable set $E$ with $0<\lambda_n(E)<+\infty$, and a real $\theta$ with $0<\theta<1$.

[L1] Assuming countable choice, $\lambda_n^*(E) = \inf\{\lambda_n(U) : U$ open and $E \subseteq U\}$ ([[thm-lebesgue-outer-regularity-for-arbitrary-subsets]]).

[L2] Every open $U \subseteq \mathbb{R}^n$ is the union of an at most countable family of pairwise disjoint dyadic cubes ([[thm-open-subsets-of-rn-are-countable-disjoint-unions-of-dyadic-cubes]]).

[L3] Assuming countable choice, $\mathcal{L}(\mathbb{R}^n)$ is a sigma-algebra and $\lambda_n$ is a complete measure on it and is the restriction of $\lambda_n^*$ ([[thm-lebesgue-measure-is-a-complete-measure]]); every Borel set, in particular every open set and every dyadic cube, is Lebesgue measurable ([[thm-borel-sets-are-lebesgue-measurable]], [[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F1] A **measure** is countably additive on pairwise disjoint measurable sequences ([[def-measure]]) and monotone ([[prop-measure-monotonicity]]).

[F2] The **nonnegative extended sum** of a sequence in $[0,+\infty]$ is $\sum_{k=0}^{\infty}a_k:=\sup_{n\in\mathbb N}s_n$, the supremum of its nondecreasing partial sums ([[def-nonnegative-extended-series]]), and an at most countable family may be presented as a sequence ([[def-countable]]).

[F3] For $a,b\in\overline{\mathbb{R}}$ the product $ab$ is $+\infty$ when one factor is $\pm\infty$ and the other is a nonzero real of the same sign; multiplication by a strictly positive real is therefore an order isomorphism of $[0,+\infty]$ ([[def-extended-reals]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\lambda_n(E\cap Q) \le \theta\,\lambda_n(Q)$ for **every** dyadic cube $Q$. [assume-contra]

1.2 Since $0<\theta<1$ and $\lambda_n(E)$ is a strictly positive real, $\lambda_n(E)/\theta$ is a real strictly above $\lambda_n(E) = \lambda_n^*(E)$, so outer regularity supplies an open $U \supseteq E$ with $\lambda_n(U) < \lambda_n(E)/\theta$. [L1, L3, F3]

2.1 Write $U$ as the union of an at most countable pairwise disjoint family of dyadic cubes; the family is nonempty because $E$ is, and presenting it as a sequence $(Q_j)$ when it is infinite, or using finite additivity when it is finite, countable additivity gives $\lambda_n(U) = \sum_j\lambda_n(Q_j)$ and, since $E \subseteq U$ and the cubes are disjoint, also $\lambda_n(E) = \lambda_n(E\cap U) = \sum_j\lambda_n(E\cap Q_j)$. [step 1.2, L2, L3, F1, F2]

3.1 Applying the assumption of step 1.1 termwise and scaling the sum by the strictly positive real $\theta$ gives $\lambda_n(E) = \sum_j\lambda_n(E\cap Q_j) \le \theta\sum_j\lambda_n(Q_j) = \theta\,\lambda_n(U) < \theta\cdot\lambda_n(E)/\theta = \lambda_n(E)$, which is impossible; so some dyadic cube satisfies the displayed strict inequality. [step 1.1, step 1.2, step 2.1, F2, F3, discharge-contradiction] ∎
