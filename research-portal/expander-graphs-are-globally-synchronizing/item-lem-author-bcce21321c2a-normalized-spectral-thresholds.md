---
title: Exact normalized spectral threshold transfer
status: published
research_item: lem-author-bcce21321c2a-normalized-spectral-thresholds
dependency_level: 3
---

## Prerequisites

- [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)
- [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)


## Statement

Let $A$ be the adjacency matrix of a labelled simple $d$-regular graph on $n\ge2$ vertices, with $d>0$, and let $J$ be the all-ones matrix. Define $\rho_0(A)=\|A-(d/n)J\|_{\mathrm{op}}$ and the normalized centered norm $\alpha(A)=\|A/d-J/n\|_{\mathrm{op}}$. Then $\alpha(A)=\rho_0(A)/d$.

For fixed integer $d\ge1$ and each feasible order $n$, choose an arbitrary probability space $(\Omega_n,\mathcal F_n,\mathbb P_n)$ and a map $\omega\mapsto A_n(\omega)$ into adjacency matrices of labelled simple $d$-regular graphs on $n$ vertices. Assume that $\{\omega\in\Omega_n:\rho_0(A_n(\omega))\ge t\}\in\mathcal F_n$ for every real $t$. For every $\varepsilon>0$, the following are equal events:

$$\{\omega\in\Omega_n:\rho_0(A_n(\omega))\ge2\sqrt{d-1}+\varepsilon\}=\{\omega\in\Omega_n:\alpha(A_n(\omega))\ge2\sqrt{d-1}/d+\varepsilon/d\}.$$

For fixed integer $d\ge3$, convergence to zero of the unnormalized event probabilities for every fixed $\varepsilon>0$ is equivalent to convergence to zero of $\mathbb P_n(\{\omega\in\Omega_n:\alpha(A_n(\omega))\ge2\sqrt{d-1}/d+\delta\})$ for every fixed $\delta>0$. All limits are along feasible orders, with $d$ and the positive excess fixed before the limit. No uniformity over varying $d$ is asserted.

## Statement references

[lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum)

[def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)

[math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space)

[math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure)

## Facts & Assumptions

[F1] [lem-author-bcce21321c2a-ordered-centered-spectrum](item-lem-author-bcce21321c2a-ordered-centered-spectrum) identifies the centered operator norm $\rho_0(A)$ for the stated simple regular adjacency matrices, without a connectedness or nonbipartiteness assumption.

[F2] [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers) defines convergence of event probabilities along feasible regular orders with parameters fixed before the limit.

[F3] [math:def-operator-norm-on-a-finite-dimensional-inner-product-space](https://alphabetamath.cc/item/def-operator-norm-on-a-finite-dimensional-inner-product-space) defines the operator norm on a nonzero finite-dimensional inner product space as the maximum of $\|Tx\|$ over unit vectors $x$.

[F4] [math:def-probability-measure](https://alphabetamath.cc/item/def-probability-measure) defines probability spaces and their measurable events. Here the spaces, graph-valued maps and measurable unnormalized threshold sets are those specified in the statement; no particular graph distribution is assumed.

## Proof

**Given:** The adjacency matrices and positive degree in the statement, and, for the event assertions, the specified probability spaces, maps and measurable threshold sets.

**Goal:** Transfer exact threshold events and their fixed-degree asymptotics.

1.1 On the finite-dimensional vertex inner product space used for both displayed operator norms (over $\mathbb R$ or $\mathbb C$, with the same choice for both), every unit vector $x$ satisfies $(A/d-J/n)x=(1/d)(A-(d/n)J)x$, hence $\|(A/d-J/n)x\|=(1/d)\|(A-(d/n)J)x\|$. Taking maxima over the same unit sphere using [F3] and $d>0$ gives $\alpha(A)=\rho_0(A)/d$, with the centered norm as in [F1]. [F1, F3, given, algebra]

2.1 Apply step 1.1 to $A_n(\omega)$ for each $\omega\in\Omega_n$. Dividing the unnormalized threshold inequality by $d>0$ shows that $\omega$ belongs to its threshold set exactly when it belongs to the displayed normalized threshold set. Thus the sets are equal. The first set is measurable by the given assumption, so the second is also an event and their $\mathbb P_n$ probabilities agree by [F4]. [F4, given, step 1.1, algebra]

3.1 When $d$ is fixed, $\varepsilon\mapsto\delta=\varepsilon/d$ bijects the positive real numbers and preserves independence from $n$. The assertions for every fixed positive excess therefore quantify over the same event families after this substitution. Their probabilities agree for every feasible $n$ by step 2.1, so their convergence assertions agree by [F2]. This proves the equivalence without asserting any estimate uniform over varying $d$. [F2, step 2.1, algebra] ∎
