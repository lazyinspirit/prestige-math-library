---
id: lem-binomial-count-law
kind: lemma
title: "The Binomial count has its usual probability mass function"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps:
  - def-bernoulli-and-binomial-random-variables
  - def-binomial-coefficient
  - thm-independent-random-elements-have-product-joint-law
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Gelman et al., Bayesian Data Analysis, 3rd ed., §2.1"
      url: "https://sites.stat.columbia.edu/gelman/book/BDA3.pdf"
    - title: "Johnson, Ott & Dogucu, Bayes Rules!, Chapter 3, §3.1"
      url: "https://www.bayesrulesbook.com/chapter-3"
---

## Statement

If $X_1,\ldots,X_n$ are independent Bernoulli$(p)$ variables with $0<p<1$ and
$n\in\mathbb N_0$, then their sum $S_n$ has
$$\mathbb P(S_n=y)=\binom ny p^y(1-p)^{n-y},\qquad y=0,\ldots,n.$$
For $n=0$, the empty sum is zero and the sole mass is one.

## Facts & Assumptions

**Given:** Independent Bernoulli$(p)$ variables, $0<p<1$, and $n\in\mathbb N_0$.

[F1] A Binomial$(n,p)$ variable is the sum of $n$ independent Bernoulli$(p)$ variables. [[def-bernoulli-and-binomial-random-variables]].

[F2] The binomial coefficient $\binom ny$ counts the $y$-element subsets of an $n$-element set. [[def-binomial-coefficient]].

[F3] Independent random elements have the product joint law. [[thm-independent-random-elements-have-product-joint-law]].

## Proof

**Given:** The hypotheses in the Statement.

1.1 For $n\ge1$, each particular subset $J\subseteq\{1,\ldots,n\}$ of size $y$ describes the disjoint event that $X_i=1$ exactly for $i\in J$. Independence [F3] gives this event probability $p^y(1-p)^{n-y}$. There are $\binom ny$ such subsets by [F2], and their union is $\{S_n=y\}$. [given, F2, F3, cases]

2.1 Summing the equal probabilities in step 1.1 gives the formula. If $n=0$, the sum is deterministically zero and the empty product is one, which gives the stated boundary case as well. [step 1.1, F1, algebra] ∎