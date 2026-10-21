---
id: lem-affine-dilation-is-quadratic-cost-optimal
kind: lemma
title: A centered law and its affine dilation have an optimal affine coupling
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-probability-measure
  - def-law-or-distribution-of-a-random-element
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - lem-law-of-a-random-element-is-a-probability-measure
  - thm-change-of-variables-for-expectation
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-euclidean-inner-product
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - cor-cauchy-schwarz-for-random-variables
justified_by: []
axiom_use: No choice principle is used; the probability law is supplied as an input.
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Yaron Lipman et al., Flow Matching for Generative Modeling, §4.1"
      url: "https://arxiv.org/html/2210.02747"
    - title: "Gabriel Peyré and Marco Cuturi, Computational Optimal Transport, §2.6 Remark 2.31"
      url: "https://arxiv.org/html/1803.00567"
---

## Statement

Let $\mu$ be a Borel probability measure on $\mathbb R^d$ with finite second moment, mean $\int x\,\mu(dx)=0$, and $m_2:=\int\|x\|_2^2\,\mu(dx)<\infty$. Fix $a\in\mathbb R^d$ and $s>0$, define $T(x):=a+sx$, and let $\nu$ be the law of $T(X)$ when $X$ has law $\mu$. For every Borel probability measure $\gamma$ on $\mathbb R^d\times\mathbb R^d$ whose coordinate marginals are $\mu$ and $\nu$,
$$\int_{\mathbb R^d\times\mathbb R^d}\|y-x\|_2^2\,\gamma(dx,dy)\ \ge\ \|a\|_2^2+(1-s)^2m_2.$$
The law of $(X,T(X))$ under $\mu$ attains equality. Thus $T$ is an optimal transport map for the squared Euclidean cost between $\mu$ and its translated dilation $\nu$.

## Statement references

[Lipman et al., §4.1](https://arxiv.org/html/2210.02747)

[Peyré and Cuturi, §2.6 Remark 2.31](https://arxiv.org/html/1803.00567)

## Facts & Assumptions

**Given:** The Borel probability measure $\mu$, its zero mean and finite second moment $m_2$, the affine map $T(x)=a+sx$, and a coupling $\gamma$ with the stated marginals.

[F1] [[def-probability-measure]]: $\mu$ and $\gamma$ are countably additive probability measures on their stated Borel spaces.

[F2] [[def-law-or-distribution-of-a-random-element]]: the law of a Borel map $T$ under $\mu$ assigns to each Borel set $B$ the value $\mu(T^{-1}(B))$.

[F3] [[thm-change-of-variables-for-expectation]]: integrating a nonnegative or integrable function against the law of a random element equals integrating its composition against the original probability measure.

[F4] [[lem-law-of-a-random-element-is-a-probability-measure]]: the law of a measurable random element is a Borel probability measure.

[F5] [[thm-continuous-preimages-of-borel-sets-are-borel]]: a continuous map between Euclidean spaces has Borel preimages of Borel sets.

[F6] [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: the integral is linear for integrable scalar components.

[F7] [[def-euclidean-inner-product]]: $\|x\|_2^2=\langle x,x\rangle$ on $\mathbb R^d$, with the coordinatewise Euclidean inner product.

[F8] [[thm-cauchy-schwarz-and-the-euclidean-norm]]: $|\langle x,z\rangle|\le\|x\|_2\|z\|_2$ for Euclidean vectors.

[F9] [[cor-cauchy-schwarz-for-random-variables]]: for square-integrable real random variables $U,V$, $\mathbb E|UV|\le(\mathbb E U^2)^{1/2}(\mathbb E V^2)^{1/2}$.

[F10] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: expectation on a probability space is integration against its probability measure.

## Proof

**Given:** The hypotheses in the Statement.

1.1 The affine maps $T(x)=a+sx$ and $x\mapsto(x,T(x))$ are continuous, so their Borel preimages are Borel by [F5]; their laws are probability measures by [F2, F4]. Let $(X,Y)$ have joint law $\gamma$. The first marginal gives $\mathbb E_\gamma X=0$ and $\mathbb E_\gamma\|X\|_2^2=m_2$. The second marginal is the law of $a+sX$ under $\mu$, so change of variables [F3] and linearity [F6] give $\mathbb E_\gamma(Y-a)=0$ and $\mathbb E_\gamma\|Y-a\|_2^2=s^2m_2$. These second moments make all displayed costs finite; Cauchy–Schwarz [F8, F9] makes the cross term integrable. [given, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10]

2.1 Expand $Y-X=a+(Y-a)-X$. The expectation of the cross term with $a$ vanishes because $\mathbb E_\gamma(Y-a)=\mathbb E_\gamma X=0$, so $$\mathbb E_\gamma\|Y-X\|_2^2=\|a\|_2^2+(1+s^2)m_2-2\mathbb E_\gamma\langle X,Y-a\rangle.$$ By [F8], pointwise $|\langle X,Y-a\rangle|\le\|X\|_2\|Y-a\|_2$. Applying [F9] to the two scalar norms gives $\mathbb E_\gamma\langle X,Y-a\rangle\le\sqrt{m_2\,s^2m_2}=s m_2$. Substitution proves the lower bound. [step 1.1, F8, F9, algebra]

3.1 The law of $(X,T(X))$ for $X\sim\mu$ is a coupling with marginals $\mu$ and $\nu$ by [F2, F4, F5]. Under this coupling $Y-a=sX$, so $\mathbb E\langle X,Y-a\rangle=sm_2$. The expansion in step 2.1 therefore gives cost $\|a\|_2^2+(1-s)^2m_2$, attaining the lower bound. [step 2.1, F2, F3, F4, F5, F6, F10, algebra] ∎

## Source notes

The cited flow-matching paper states the Gaussian special case. The local proof above establishes the more general centered finite-second-moment dilation case directly by Cauchy–Schwarz and does not import Brenier's theorem.
