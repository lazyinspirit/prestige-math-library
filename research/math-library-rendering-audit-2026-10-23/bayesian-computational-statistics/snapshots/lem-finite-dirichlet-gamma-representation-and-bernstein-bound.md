---
dependency_level: 3
id: lem-finite-dirichlet-gamma-representation-and-bernstein-bound
kind: lemma
title: Finite Dirichlet gamma representation and weighted Bernstein bound
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
deps:
  - cor-markov-inequality-for-random-variables
  - def-axiom-of-choice
  - def-dirichlet-distribution
  - def-gamma-distribution-shape-rate
  - lem-gamma-density-normalization
  - lem-uniqueness-of-a-multivariate-exponential-transform
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
proof_strategy: direct
axiom_use: Full AC covers the Gamma and Dirichlet normalization and exponential-transform uniqueness suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Castillo, On Bayesian supremum norm contraction rates, §4.4
      url: https://arxiv.org/pdf/1304.1761
    - title: Ferguson, A Bayesian Analysis of Some Nonparametric Problems, Section 2
      url: https://users.wpi.edu/~balnan/Ferguson1973.pdf
---

## Statement

Assume AC. Let $\beta_1,\ldots,\beta_m>0$, $B=\sum_j\beta_j$, and let $Z_j$ be independent $\operatorname{Gamma}(\beta_j,1)$ variables. Put $S=\sum_j Z_j$. Then $\omega=(Z_j/S)_j$ is $\operatorname{Dirichlet}(\beta_1,\ldots,\beta_m)$, and $S$ is $\operatorname{Gamma}(B,1)$, with mean $B$ and variance $B$. Each $Z_j$ has mean $\beta_j$, variance $\beta_j$, and moment-generating function $\mathbb E e^{uZ_j}=(1-u)^{-\beta_j}$ for every real $u<1$. For real $q_j$ satisfying $|q_j|\le b$, put $T(q)=\sum_jq_j(Z_j-\beta_j)$ and $V=\sum_j\beta_jq_j^2$. If $V>0$, then for $x>0$,
$$\Pr\{|T(q)|>x\}\le2\exp\left\{-\frac{x^2}{2(V+bx)}\right\}.$$
If $V=0$, $T(q)=0$ almost surely. Sums of disjoint groups of the $Z_j$ are independent Gamma variables with their respective summed shapes.

## Facts & Assumptions

**Given:** Full AC, the positive finite shape vector, and the weights in the Statement.

[F1] [[def-gamma-distribution-shape-rate]] and [[lem-gamma-density-normalization]] supply the normalized density $z^{a-1}e^{-z}/\Gamma(a)$, $z>0$, for $a>0$.

[F2] [[def-dirichlet-distribution]] specifies the normalized density $\Gamma(B)\prod_j\omega_j^{\beta_j-1}/\prod_j\Gamma(\beta_j)$ on the simplex, and the point mass at one for $m=1$.

[F3] Finite product laws and nonnegative changes of variables are supplied by [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] and [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]].

[F4] [[cor-markov-inequality-for-random-variables]]: for a nonnegative random variable $Y$ and $a>0$, $\Pr(Y\ge a)\le\mathbb EY/a$. Applied to $Y=e^{\lambda T(q)}$ with $\lambda>0$ and $a=e^{\lambda x}$, it gives $\Pr(T(q)\ge x)\le e^{-\lambda x}\mathbb E e^{\lambda T(q)}$.

[F5] [[lem-uniqueness-of-a-multivariate-exponential-transform]] identifies laws having the same finite moment-generating transform near zero under AC.

## Proof

**Given:** The hypotheses in the Statement.

1.1 The product Gamma law exists by [F3]. In its density make the substitution $z_j=s\omega_j$, $\omega_m=1-\sum_{j<m}\omega_j$. Its Jacobian is $s^{m-1}$: factor $s$ from the proportion columns of the derivative matrix and add its first $m-1$ rows to the last; the remaining last row has first entry one and all other entries zero. The resulting density factors as $s^{B-1}e^{-s}/\Gamma(B)$ times the simplex density in [F2]. Integrating either normalized factor proves both distributional assertions. For $m=1$, $\omega_1=1$ directly. [F1, F2, F3, given, algebra, cases]

2.1 Substituting $y=(1-u)z$ in the Euler Gamma density gives $\mathbb E e^{uZ_j}=(1-u)^{-\beta_j}$ for $u<1$. Its first two derivatives at zero yield mean $\beta_j$ and variance $\beta_j$; differentiation is justified by an exponential majorant with any fixed parameter in $(0,1)$. Independence makes the joint transform of disjoint group sums the product $\prod_h(1-u_h)^{-\sum_{j\in I_h}\beta_j}$, which is the transform of the corresponding product Gamma law. By [F5], these are the same laws. In particular $S$ has the asserted mean and variance, also following from step 1.1. [F1, F3, F5, step 1.1, algebra]

3.1 For $|\lambda|b<1$, independence and step 2.1 give $\log\mathbb E e^{\lambda T(q)}=\sum_j\beta_j[-\log(1-\lambda q_j)-\lambda q_j]\le\lambda^2 V/[2(1-|\lambda|b)]$. Indeed the convergent logarithm series gives $-\log(1-u)-u\le\sum_{r\ge2}|u|^r/r\le u^2/[2(1-|u|)]$ for $|u|<1$. If $V>0$, set $\lambda=x/(V+bx)$; exponential Markov then bounds the upper tail by $\exp[-x^2/(2(V+bx))]$. Apply the same calculation to $-q$ and sum the bounds. If $V=0$, positivity of all $\beta_j$ forces every $q_j=0$, so $T(q)=0$. [F4, step 2.1, algebra, cases] ∎
