---
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
id: ex-degenerate-asymptotic-distribution-with-rare-outliers
kind: example
title: "A degenerate weak limit with persistent expectation"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 1
deps: [def-asymptotic-distribution, def-convergence-in-distribution-of-random-elements, def-expectation-of-a-nonnegative-or-integrable-random-variable, def-integral-of-a-nonnegative-simple-function, def-law-or-distribution-of-a-random-element, def-measurable-function-between-measurable-spaces, def-measurable-space, def-measure, def-op-and-little-op-stochastic-bounds, def-probability-measure, def-random-element-and-real-random-variable, def-sigma-algebra, def-weak-convergence-of-borel-probability-measures, thm-change-of-variables-for-expectation, thm-linearity-of-the-lebesgue-integral-on-l-one]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
---

## Example

For each $n\ge1$, let $X_n$ be defined on a probability space $(\Omega_n,\mathcal A_n,P_n)$ with $P_n(X_n=n)=1/n$ and $P_n(X_n=0)=1-1/n$. Then $P_n(|X_n|>\varepsilon)\to0$ for every $\varepsilon>0$, so $X_n=o_P(1)$ under the varying-space convention, and its asymptotic distribution is the point mass at $0$, but $\mathbb E X_n=1$ for every $n$. Although each $X_n$ is integrable, weak convergence alone does not imply convergence of expectations.

## Facts & Assumptions

**Given:** The finite probability space and random variable specified for each $n$.

[F1] [[def-sigma-algebra]]: The power set of a set is a sigma-algebra.

[F2] [[def-measurable-space]]: A measurable space is a set with a sigma-algebra.

[F3] [[def-measure]]: A measure is zero on the empty set and countably additive on pairwise disjoint measurable sets.

[F4] [[def-probability-measure]]: A probability measure is a measure of total mass one.

[F5] [[def-measurable-function-between-measurable-spaces]]: A map is measurable if every measurable target set has a measurable preimage.

[F6] [[def-random-element-and-real-random-variable]]: A measurable map into $\mathbb R$ with its Borel sigma-algebra is a real random variable.

[F7] [[def-op-and-little-op-stochastic-bounds]]: For random variables on probability spaces that may vary with $n$, $X_n=o_P(1)$ means $P_n(|X_n|>\varepsilon)\to0$ for every $\varepsilon>0$; a common probability space is not required.

[F8] [[def-weak-convergence-of-borel-probability-measures]]: Weak convergence is convergence of integrals for every bounded continuous real-valued test function.

[F9] [[def-convergence-in-distribution-of-random-elements]]: Random elements converge in distribution when their laws converge weakly.

[F10] [[def-asymptotic-distribution]]: An asymptotic distribution is the weak limit of the laws of a sequence of random elements.

[F11] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: The expectation of a nonnegative measurable random variable is its nonnegative Lebesgue integral.

[F12] [[def-integral-of-a-nonnegative-simple-function]]: A nonnegative simple function integrates as the sum of its values times the measures of its disjoint level sets.

[F13] [[def-law-or-distribution-of-a-random-element]]: The law of a random element is its pushforward probability measure, $P_X(A)=P(X^{-1}(A))$.

[F14] [[thm-change-of-variables-for-expectation]]: For a nonnegative measurable $g(X)$, its expectation is the integral of $g$ against the law of $X$.

[F15] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: The Lebesgue integral is linear on integrable functions.

## Verification

1.1 Set $\Omega_n=\{0,1\}$, $\mathcal A_n=\mathcal P(\Omega_n)$, $P_n(\{1\})=1/n$, and $P_n(\{0\})=1-1/n$. These masses are nonnegative and sum to one. Since the space has two points, every disjoint sequence of subsets has at most two nonempty members; the mass formula is countably additive and gives zero to the empty set by [F3]. Thus [F1], [F2], and [F4] make this a probability space for each $n$. The map $X_n(0)=0$, $X_n(1)=n$ is measurable by [F5], hence a real random variable by [F6]. [F1, F2, F3, F4, F5, F6, given]

2.1 For any fixed $\varepsilon>0$, once $n>\varepsilon$ the event $\{|X_n|>\varepsilon\}$ is exactly $\{1\}$, so $P_n(|X_n|>\varepsilon)=1/n\to0$. Therefore $X_n=o_P(1)$ by [F7]. [F7, given, algebra, step 1.1]

2.2 Fix bounded continuous $f:\mathbb R\to\mathbb R$, set $M=\|f\|_\infty$, and put $g=f+M\ge0$. By [F13], the law $P_{X_n}$ assigns mass $1-1/n$ to $0$ and $1/n$ to $n$. Its pushforward formula makes it countably additive because preimages of disjoint Borel sets are disjoint, and $P_{X_n}(\varnothing)=P_n(\varnothing)=0$; its total mass is $P_n(\Omega_n)=1$, so it is a probability measure by [F3]–[F4]. The point mass $\delta_0$ is also a Borel probability measure: it assigns zero to $\varnothing$, and in a disjoint family of Borel sets at most one set contains $0$, while $\delta_0(\mathbb R)=1$. Since $|f|\le M$ and $0\le g\le2M$, every nonnegative simple minorant of $|f|$ or $g$ has simple integral at most the corresponding constant times $\mu(\mathbb R)$, by finite additivity and [F12]. Taking the suprema in the nonnegative integral defining expectation [F11] gives $\int|f|\,d\mu\le M$ and $\int g\,d\mu\le2M$ for either probability law $\mu\in\{P_{X_n},\delta_0\}$, so both functions are integrable. Thus [F15] gives $\int f\,d\mu=\int(g-M)\,d\mu=\int g\,d\mu-M$. The nonnegative simple function $g(X_n)$ has expectation $\int g\,dP_{X_n}=(1-1/n)g(0)+(1/n)g(n)$ by [F11]–[F12] and [F14]; the same formula gives $\int g\,d\delta_0=g(0)$. Thus $|\int f\,dP_{X_n}-\int f\,d\delta_0|=|\mathbb E g(X_n)-g(0)|=|g(n)-g(0)|/n\le2M/n\to0$. By [F8], the laws converge weakly to $\delta_0$; by [F9]–[F10], the asymptotic distribution is $\delta_0$. [F3, F4, F8, F9, F10, F11, F12, F13, F14, F15, given, step 1.1, algebra]

3.1 The nonnegative simple-integral formula [F11]–[F12] gives $\mathbb E X_n=(1/n)n+(1-1/n)0=1$ for every $n$, while the limit variable $0$ has expectation $0$. For the finite check $n=2$, $P_2(X_2=2)=1/2$ and $\mathbb E X_2=1$, confirming the stated mass and expectation formulas. [F11, F12, step 2.1, given, algebra] ∎
