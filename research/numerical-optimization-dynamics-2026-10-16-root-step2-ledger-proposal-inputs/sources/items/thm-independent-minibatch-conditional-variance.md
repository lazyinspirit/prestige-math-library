---
id: thm-independent-minibatch-conditional-variance
kind: theorem
title: Conditional variance of independent and without-replacement minibatches
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-stochastic-gradient-oracle-and-unconstrained-update
  - def-filtration-and-filtered-probability-space
  - def-conditional-expectation-as-an-ae-class
  - def-axiom-of-choice
  - def-finite-sum
  - def-natural-numbers
  - lem-conditioning-a-known-variable-and-an-independent-variable
  - thm-taking-out-what-is-known
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - def-euclidean-inner-product
  - lem-finite-sum-gradient-is-average
  - lem-finite-sum-laws
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Robert M. Gower and Alexandre Gramfort, Optimization for Data Science: Stochastic Variance Reduced Gradient Methods, lecture notes"
      url: https://gowerrobert.github.io/pdf/M2_statistique_optimisation/optimization_IV_variance_reduced-expanded.pdf
      locator: Slides 5–14 on minibatches and variance reduction; full 81-slide deck.
    - title: "John Duchi, Elad Hazan, and Yoram Singer, Adaptive Subgradient Methods for Online Learning and Stochastic Optimization, JMLR 12 (2011)"
      url: https://jmlr.org/papers/volume12/duchi11a/duchi11a.pdf
      locator: Section 2, online stochastic gradients and conditional expectations.
---

## Statement

Let $n,d\ge1$, let $(\Omega,\mathcal F,(\mathcal F_k)_{k\ge0},P)$ be a discrete filtered probability space, and fix $k$. Let $f_i:\mathbb R^d\to\mathbb R$ be continuously differentiable, let $x:\Omega\to\mathbb R^d$ be $\mathcal F_k$-measurable, and suppose each $g_i=\nabla f_i(x)$ is square-integrable. Define $F=n^{-1}\sum_i f_i$, $\bar g=n^{-1}\sum_i g_i=\nabla F(x)$ by [[lem-finite-sum-gradient-is-average]], and

$$
\sigma^2(x)=\frac1n\sum_{i=1}^n\|g_i-\bar g\|_2^2.
$$

For an integer $b\ge1$, draw $I_1,\ldots,I_b$ as mutually independent uniform indices from $\{1,\ldots,n\}$, with the whole index vector independent of $\mathcal F_k$, and set $G_b=b^{-1}\sum_{j=1}^b g_{I_j}$. Then

$$
\mathbb E[G_b\mid\mathcal F_k]=\bar g,\qquad
\mathbb E[\|G_b-\bar g\|_2^2\mid\mathcal F_k]=\frac{\sigma^2(x)}b.
$$

For sampling without replacement, let $S$ be a uniform subset of $\{1,\ldots,n\}$ of size $b$, independent of $\mathcal F_k$, and set $G_S=b^{-1}\sum_{i\in S}g_i$. If $n>1$ and $1\le b\le n$, then

$$
\mathbb E[G_S\mid\mathcal F_k]=\bar g,\qquad
\mathbb E[\|G_S-\bar g\|_2^2\mid\mathcal F_k]
=\frac{n-b}{b(n-1)}\sigma^2(x).
$$

When $n=1$, the without-replacement case requires $b=1$; both estimators equal $\bar g$ and both errors are zero.

## Facts & Assumptions

**Given:** The discrete filtered probability space [[def-filtration-and-filtered-probability-space]], the time $k$, the $\mathcal F_k$-measurable point and square-integrable gradients, and the two sampling laws in the Statement. Vector conditional expectations mean coordinatewise scalar conditional expectations.

[A1] [[def-axiom-of-choice]]: assume AC for conditional-expectation classes.

[F1] [[def-stochastic-gradient-oracle-and-unconstrained-update]]: stochastic-gradient conditional expectations are taken with respect to the current filtration, and AC is assumed for their existence.

[F2] [[def-filtration-and-filtered-probability-space]]: $\mathcal F_k$ is a sigma-algebra and $\mathcal F_k\subseteq\mathcal F$.

[F3] [[def-conditional-expectation-as-an-ae-class]]: under AC, conditional expectations of integrable random variables exist as almost-sure classes.

[F4] [[lem-conditioning-a-known-variable-and-an-independent-variable]]: an integrable random variable independent of the conditioning sigma-algebra has conditional expectation equal to its mean.

[F5] [[thm-taking-out-what-is-known]]: an integrable factor measurable in the conditioning sigma-algebra can be taken outside conditional expectation.

[F6] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear and preserves finite integrable sums.

[F7] [[def-euclidean-inner-product]]: $\|z\|_2^2=\langle z,z\rangle$, and the inner product is bilinear.

[F8] [[lem-finite-sum-gradient-is-average]]: the gradient of $F$ is the average of the component gradients.

[F9] [[def-finite-sum]]: a finite average is the finite recursively defined sum scaled by $1/n$.

[F10] [[lem-finite-sum-laws]]: finite sums are additive, obey scaling, and permit termwise algebra.

## Proof

**Given:** The objects and sampling assumptions in the Statement.

1.1 For every $j,i$, independence and [F4] give $\mathbb E[\mathbf1_{\{I_j=i\}}\mid\mathcal F_k]=1/n$. Since $g_i$ is $\mathcal F_k$-measurable and square-integrable, [F1]–[F3], [F5], and [F6] allow $g_{I_j}=\sum_i\mathbf1_{\{I_j=i\}}g_i$ to be conditioned coordinatewise and termwise, yielding $\mathbb E[g_{I_j}\mid\mathcal F_k]=\bar g$. For $j\ne\ell$ and every $A\in\mathcal F_k$, joint independence gives $P(A,I_j=r,I_\ell=s)=P(A)/n^2$; hence $\mathbb E[\langle g_{I_j}-\bar g,g_{I_\ell}-\bar g\rangle\mid\mathcal F_k]=n^{-2}\sum_{r,s}\langle g_r-\bar g,g_s-\bar g\rangle=\langle n^{-1}\sum_r(g_r-\bar g),n^{-1}\sum_s(g_s-\bar g)\rangle=0$, since each centered finite sum vanishes. Expanding $\|G_b-\bar g\|_2^2$ leaves $b$ diagonal terms, each with conditional expectation $\sigma^2(x)$, so division by $b^2$ proves the with-replacement identities. [A1, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, given, algebra]

1.2 Assume $n>1$. Let $Z_i=\mathbf1_{\{i\in S\}}$. Relabeling the elements of the uniform size-$b$ subsets shows that $\mathbb E[Z_i\mid\mathcal F_k]$ has one common value $p$ for all $i$, and that $\mathbb E[Z_iZ_j\mid\mathcal F_k]$ has one common value $r$ for all ordered pairs $i\ne j$; independence of $S$ from $\mathcal F_k$ makes these conditional values constant. There are $n$ singleton indices and $n(n-1)$ ordered distinct pairs, by choosing the first and then the second index. Every such subset satisfies $\sum_iZ_i=b$ and $\sum_{i\ne j}Z_iZ_j=b(b-1)$, since each selected index has exactly $b-1$ other selected indices. Taking conditional expectations and using finite-sum linearity [F6, F10] gives $np=b$ and $n(n-1)r=b(b-1)$. Thus $p=b/n$ and $r=b(b-1)/(n(n-1))$, including $b=1$ where $r=0$. [A1, F1, F2, F4, F6, F10, given, algebra]

2.1 The first inclusion probability in step 1.2, with [F5] and [F6], gives $\mathbb E[G_S\mid\mathcal F_k]=b^{-1}\sum_i(b/n)g_i=\bar g$. Put $a_i=g_i-\bar g$; since $G_S-\bar g=b^{-1}\sum_i Z_i a_i$, [F5]–[F7] give $\mathbb E[\|G_S-\bar g\|_2^2\mid\mathcal F_k]=b^{-2}[(b/n)\sum_i\|a_i\|_2^2+(b(b-1)/(n(n-1)))\sum_{i\ne j}\langle a_i,a_j\rangle]$. The cross sum is $-\sum_i\|a_i\|_2^2$ by expanding $\langle\sum_i a_i,\sum_j a_j\rangle=0$, so the result is $(n-b)/(b(n-1))\sigma^2(x)$. If $n=1$, the only draw and subset contain the sole component, so both errors are zero. [A1, F1, F4, F5, F6, F7, F10, step 1.2, given, algebra] ∎
