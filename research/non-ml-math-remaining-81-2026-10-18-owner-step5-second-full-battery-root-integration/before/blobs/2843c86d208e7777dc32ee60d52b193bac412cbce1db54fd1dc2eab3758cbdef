---
id: ex-correlated-bernoulli-source-fails-the-iid-aep
title: "A perfectly dependent Bernoulli source has zero block information rate"
kind: example
status: draft
dependency_level: 5
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-law-self-information-and-entropy
  - def-qa-35-finite-probability-entropy-and-stochastic-matrices
  - lem-finite-alphabet-iid-information-aep
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3, §3.1"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3: Convergence and Asymptotic Equipartition Property"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf"
verification:
  precheck: pass
---

## Example

Fix $p\in(0,1)$ and one Bernoulli$(p)$ random variable $Z$. On its two-point
probability space set $X_i=Z$ for every $i\ge1$. The variables have identical
Bernoulli$(p)$ marginals but are dependent. Their normalized block
self-information tends to $0$ on every outcome, whereas the marginal entropy
$H(p)=-p\ln p-(1-p)\ln(1-p)$ is positive. Thus identical marginals alone do
not imply the IID AEP conclusion.

## Facts & Assumptions

**Given:** $p\in(0,1)$ and $X_i=Z$ for one Bernoulli$(p)$ variable $Z$.

[F1] [[def-finite-law-self-information-and-entropy]]: For a finite law $q$,
self-information on its support is $-\ln q(x)$.

[F2] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]:
$H(p)=-\sum_{a:p(a)>0}p(a)\ln p(a)$ with zero terms set to zero, in natural units.

[F3] [[lem-finite-alphabet-iid-information-aep]]: For an IID finite-alphabet
source, normalized block self-information converges in probability to its
one-letter entropy.

## Verification

**Given:** The example and notation above.

1.1 Each $X_i$ has law $p$ on $\{0,1\}$, so $H(p)=-p\ln p-(1-p)\ln(1-p)>0$. For $0<p<1$, both summands are positive. Also $\mathbb P(X_1=0,X_2=0)=1-p\ne(1-p)^2$, so the variables are not independent and hence are not IID. [given, F2, algebra]

2.1 The length-$n$ block has only two possible values: $0^n$ with probability $1-p$ and $1^n$ with probability $p$. Therefore its normalized self-information is either $-\ln(1-p)/n$ or $-\ln p/n$, and is bounded by $\max\{-\ln p,-\ln(1-p)\}/n$. This tends to zero for both outcomes. [F1, step 1.1, algebra]

3.1 The limiting value $0$ differs from the positive marginal entropy in step 1.1. The IID conclusion [F3] therefore cannot be extended to all sequences with identical marginals after independence is removed. [F3, step 1.1, step 2.1] ∎
