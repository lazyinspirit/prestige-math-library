---
id: lem-bernoulli-and-binomial-mean-and-variance
kind: lemma
title: "A Bernoulli$(p)$ variable has mean $p$ and variance $p(1-p)$; a binomial$(n,p)$ variable has mean $np$ and variance $np(1-p)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bernoulli-and-binomial-random-variables, thm-linearity-of-expectation, lem-variance-and-covariance-identities, cor-variance-adds-for-pairwise-independent-random-variables]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
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

If $X$ is Bernoulli$(p)$, then $\mathbb E[X]=p$ and $\operatorname{Var}(X)=p(1-p)$. If $S$ is binomial$(n,p)$, then
$$\mathbb E[S]=np,\qquad \operatorname{Var}(S)=np(1-p).$$
These formulas include $p=0$, $p=1$, and $n=0$.

## Facts & Assumptions

**Given:** A Bernoulli$(p)$ variable $X$ and a binomial$(n,p)$ variable $S=\sum_{i<n}X_i$.

[L1] Bernoulli and binomial variables have the distributions and independent-sum form in the Definition ([[def-bernoulli-and-binomial-random-variables]]).

[L2] Expectation is linear without independence ([[thm-linearity-of-expectation]]).

[L3] $\operatorname{Var}(X)=\mathbb E[X^2]-\mathbb E[X]^2$ ([[lem-variance-and-covariance-identities]]).

[L4] Variance adds for finite pairwise-independent families ([[cor-variance-adds-for-pairwise-independent-random-variables]]).

## Proof

**Proof technique:** direct.

1.1 Since $X$ is $1$ with probability $p$ and $0$ otherwise, $\mathbb E[X]=p$ and $\mathbb E[X^2]=p$. [L1]

2.1 Hence $\operatorname{Var}(X)=p-p^2=p(1-p)$. [step 1.1, L3, algebra]

3.1 Linearity gives $\mathbb E[S]=\sum_{i<n}p=np$, and pairwise-independent variance additivity gives $\operatorname{Var}(S)=\sum_{i<n}p(1-p)=np(1-p)$. [step 1.1, step 2.1, L1, L2, L4, algebra]

4.1 At $p=0$ or $p=1$ the variance formula is zero, and at $n=0$ both finite sums are empty and equal zero. [step 3.1] ∎
