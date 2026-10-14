---
id: lem-bernoulli-and-binomial-mean-and-variance
kind: lemma
title: "A Bernoulli$(p)$ variable has mean $p$ and variance $p(1-p)$; a binomial$(n,p)$ variable has mean $np$ and variance $np(1-p)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bernoulli-and-binomial-random-variables, def-independent-random-elements, cor-expectation-of-an-indicator-is-probability, lem-expectation-is-independent-of-the-ae-representative, cor-finite-random-variable-independence-agreement, cor-expectation-linearity-monotonicity-and-modulus-bound, lem-variance-and-covariance-identities-for-random-variables, thm-variance-of-a-finite-sum]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  repair: research/mathematical-statistics-foundations-37-owner-e28-lem-bernoulli-and-binomial-mean-and-variance-repair.json
sources:
  scraped: []
  references:
    - title: "C. M. Grinstead and J. L. Snell, Introduction to Probability, 2nd ed., Section 6.2"
      url: "https://math.dartmouth.edu/~prob/prob/prob.pdf"
    - title: "H. Pishro-Nik, Introduction to Probability, Statistics, and Random Processes, Sections 3.1.5 and 3.2.4"
      url: "https://www.probabilitycourse.com/"
pipeline_run: null
---

## Statement

Work on a common probability space; the independent Bernoulli variables used to represent a binomial sum are independent in the sense of [[def-independent-random-elements]]. The original finite-space atom-independence convention is included.

If $X$ is Bernoulli$(p)$, then $\mathbb E[X]=p$ and $\operatorname{Var}(X)=p(1-p)$. If $S$ is binomial$(n,p)$, then
$$\mathbb E[S]=np,\qquad \operatorname{Var}(S)=np(1-p).$$
These formulas include $p=0$, $p=1$, and $n=0$.

## Facts & Assumptions

**Given:** A Bernoulli$(p)$ variable $X$ and a binomial$(n,p)$ variable $S=\sum_{i<n}X_i$ on one common probability space, with mutually independent Bernoulli summands. All these variables and their finite sums are bounded almost surely, hence square-integrable and integrable.

[L1] Bernoulli and binomial variables have the distributions and independent-sum form in the Definition ([[def-bernoulli-and-binomial-random-variables]]).

[L2] Expectation is linear without independence ([[cor-expectation-linearity-monotonicity-and-modulus-bound]]).

[L3] $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2$ and $\operatorname{Cov}(X,Y)=\mathbb E[XY]-\mathbb E[X]\mathbb E[Y]$ ([[lem-variance-and-covariance-identities-for-random-variables]]).

[L4] For square-integrable variables on one common probability space, variance of a finite sum is the sum of its individual variances plus twice the sum of the covariances over distinct unordered pairs. ([[thm-variance-of-a-finite-sum]])

[L5] General independence factors inverse-image event probabilities. On an original finite probability space, attained-value independence agrees with this general notion. ([[def-independent-random-elements]], [[cor-finite-random-variable-independence-agreement]])

[L6] The expectation of the indicator of a measurable event is its probability, and expectations of integrable variables agree under almost-sure equality. ([[cor-expectation-of-an-indicator-is-probability]], [[lem-expectation-is-independent-of-the-ae-representative]])

## Proof

**Proof technique:** direct.

1.1 Since $X$ is $1$ with probability $p$ and $0$ otherwise, both $X$ and $X^2$ agree almost surely with the indicator of the measurable event $\{X=1\}$. By [L6], $\mathbb E[X]=\mathbb E[X^2]=\mathbb P(X=1)=p$. [L1, L6]

2.1 Hence $\operatorname{Var}(X)=p-p^2=p(1-p)$. [step 1.1, L3, algebra]

3.1 For distinct $i,j$, the independent Bernoulli variables in [L1] and [L5] have $X_iX_j=\mathbf1_{\{X_i=X_j=1\}}$ almost surely, so [L6] and independence give $\mathbb E[X_iX_j]=\mathbb P(X_i=X_j=1)=p^2$. Their means are $p$ by step 1.1, so [L3] gives $\operatorname{Cov}(X_i,X_j)=p^2-p^2=0$. Linearity gives $\mathbb E[S]=\sum_{i<n}p=np$, and [L4] with these zero covariances gives $\operatorname{Var}(S)=\sum_{i<n}p(1-p)=np(1-p)$. [step 1.1, step 2.1, L1, L2, L3, L4, L5, L6, algebra]

4.1 At $p=0$ or $p=1$ the variance formula is zero, and at $n=0$ both finite sums are empty and equal zero. [step 3.1] ∎
