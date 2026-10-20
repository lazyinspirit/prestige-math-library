---
id: thm-finite-class-realizable-pac-bound
kind: theorem
title: "Finite-class realizable PAC bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - def-realizable-and-agnostic-pac
  - def-supervised-learning-problem
  - def-population-and-empirical-risk
  - def-empirical-risk-minimizer
  - alg-finite-list-empirical-risk-minimizer
  - lem-finite-list-empirical-risk-selector-is-measurable
  - def-identically-distributed-and-iid-random-variables
  - lem-measurable-functions-preserve-independence
  - lem-probability-measure-basic-identities
  - lem-exponential-dominates-one-plus-x
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - cor-exponential-reciprocal-and-positivity
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Chapter 2 Theorem 2.5 and proof"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Shai Shalev-Shwartz and Shai Ben-David, Understanding Machine Learning: From Theory to Algorithms, Chapter 2 §2.3.1 and Corollary 2.3"
      url: "https://www.inf.u-szeged.hu/~turan/ML-Konyv.pdf"
---

## Statement

Let $\mathcal H$ be a finite nonempty class of measurable classifiers $h:\mathcal X\to\{0,1\}$ on a measurable instance space, and let $P$ be a law on $\mathcal X\times\{0,1\}$ for which some $h^*\in\mathcal H$ has zero population zero-one risk. Let $Z_i=(X_i,Y_i)$, $1\le i\le m$, be IID with law $P$, and let $\widehat h_0(S)$ be the measurable exact ERM returned by the finite-list selector on an ordered enumeration of $\mathcal H$. For $0<\epsilon,\delta<1$ and integer $m\ge1$, if

$$m\ge\frac{\log|\mathcal H|+\log(1/\delta)}{\epsilon},$$

then $\mathbb P_S\{R_P(\widehat h_0(S))\le\epsilon\}\ge1-\delta$. This is a realizable guarantee; it makes no claim for distributions without a zero-risk member of $\mathcal H$. The proof is choice-free.

## Statement references

[[def-realizable-and-agnostic-pac]]: defines realizability by existence of a zero-risk classifier and the realizable PAC criterion.

[[alg-finite-list-empirical-risk-minimizer]]: supplies an exact finite-list ERM selector.

[[lem-finite-list-empirical-risk-selector-is-measurable]]: establishes the selector’s measurability and exact-minimizer property.

[[def-natural-logarithm]]: defines the natural logarithm as the inverse of the exponential on positive reals.

## Facts & Assumptions

**Given:** A finite nonempty class of measurable binary classifiers, an IID sample of size $m\ge1$ with law $P$, a classifier $h^*$ with $R_P(h^*)=0$, and $0<\epsilon,\delta<1$.

[A1] No form of the Axiom of Choice is assumed or used; the learner selects from a given finite ordered list.

[F1] IID means the sample coordinates are mutually independent and have the same law. [[def-identically-distributed-and-iid-random-variables]]

[F2] Measurable coordinatewise functions of an independent family remain independent. [[lem-measurable-functions-preserve-independence]]

[F3] For any finite list of events, the probability of their union is at most the sum of their probabilities. [[lem-probability-measure-basic-identities]]

[F4] If $0\le p\le1$ and $m$ is natural, then $(1-p)^m\le e^{-mp}$. [[lem-exponential-dominates-one-plus-x]]

[F5] For finite empirical risks, the finite-list procedure at tolerance zero returns a first exact minimizer. [[alg-finite-list-empirical-risk-minimizer]]

[F6] The finite-list selector is measurable and an exact ERM when its tolerance is zero. [[lem-finite-list-empirical-risk-selector-is-measurable]]

[F7] Population zero-one risk is the probability of classification error, and empirical zero-one risk is the average of the sample error indicators. [[def-population-and-empirical-risk]]

[F8] The natural logarithm is increasing and obeys the product and reciprocal laws, with $\log 1=0$; it inverts the exponential on positive reals. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]]

[F9] The exponential is positive for every real input and $\exp(-x)=1/\exp(x)$. [[cor-exponential-reciprocal-and-positivity]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 Fix $h\in\mathcal H$ with $R_P(h)>\epsilon$ and put $I_i=\mathbf1\{h(X_i)\ne Y_i\}$. The error indicator is a measurable function of $Z_i$, so [F1]–[F2] make $I_1,\ldots,I_m$ independent with $\mathbb P(I_i=1)=R_P(h)$. Therefore the probability that $h$ is consistent on the full sample is $\mathbb P(I_1=\cdots=I_m=0)=(1-R_P(h))^m\le(1-\epsilon)^m\le e^{-m\epsilon}$ by [F4]. [given, F1, F2, F4, F7, A1]

2.1 The bad-consistent event is the union over $h\in\mathcal H$ with $R_P(h)>\epsilon$ of the event that $h$ is consistent. By [F3] and step 1.1 its probability is at most $|\mathcal H|e^{-m\epsilon}$. [F3, step 1.1]

3.1 Since $R_P(h^*)=0$, each observation disagrees with $h^*$ on a null event; the finite union of these null events has probability zero. Thus $h^*$ is sample-consistent almost surely, the empirical minimum is zero, and [F5]–[F6] make $\widehat h_0$ a measurable consistent classifier almost surely. If its risk exceeded $\epsilon$, it would be a bad consistent classifier, so the failure event is contained in the event bounded in step 2.1. [given, F3, F5, F6, F7, step 2.1, A1]

4.1 The assumed sample-size inequality gives $m\epsilon\ge\log|\mathcal H|+\log(1/\delta)=\log(|\mathcal H|/\delta)$ by [F8]. The argument $|\mathcal H|e^{-m\epsilon}$ is positive by [F9], and [F8] yields $\log(|\mathcal H|e^{-m\epsilon})=\log|\mathcal H|-m\epsilon\le-\log(1/\delta)=\log\delta$. Since $\log$ is increasing, $|\mathcal H|e^{-m\epsilon}\le\delta$. Steps 2.1–3.1 therefore bound the failure probability by $\delta$, proving the claim. [given, F8, F9, step 2.1, step 3.1, algebra] ∎
