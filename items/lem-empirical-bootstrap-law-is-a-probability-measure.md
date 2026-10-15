---
id: lem-empirical-bootstrap-law-is-a-probability-measure
kind: lemma
title: A finite empirical law is a probability measure
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-iid-empirical-bootstrap-sample
  - def-measure
  - def-probability-measure
  - def-nonnegative-extended-series
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §2"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §1"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Statement

For any $n\ge1$ and $x_1,\ldots,x_n\in\mathbb R^d$, the set function
$$P_n(A)=\frac1n\sum_{i=1}^n1\{x_i\in A\},\qquad A\in\mathcal B(\mathbb R^d),$$
is a probability measure.

## Facts & Assumptions

**Given:** The finite data list and empirical set function in the statement.

[F1] The empirical set function is the finite average of the point indicators. [[def-iid-empirical-bootstrap-sample]]

[F2] A measure assigns zero to the empty set and is countably additive on pairwise disjoint measurable sets. [[def-measure]]

[F3] A probability measure is a measure whose total mass is one. [[def-probability-measure]]

[F4] A nonnegative extended series is the supremum of its finite partial sums. [[def-nonnegative-extended-series]]

## Proof

1.1 Formula [F1] gives $P_n(\varnothing)=0$ and $P_n(\mathbb R^d)=n^{-1}\sum_{i=1}^n1=1$. [F1, given]

1.2 Let $(A_k)_{k\ge1}$ be pairwise disjoint Borel sets. For each fixed $i$, at most one indicator $1\{x_i\in A_k\}$ is nonzero. Therefore $P_n\!\left(\bigcup_{k\ge1}A_k\right)=\frac1n\sum_{i=1}^n\sum_{k\ge1}1\{x_i\in A_k\} =\sum_{k\ge1}\frac1n\sum_{i=1}^n1\{x_i\in A_k\} =\sum_{k\ge1}P_n(A_k).$ The interchange is between a finite sum and a nonnegative series; by [F4] both are the supremum of the corresponding finite partial sums, so finite distributivity gives the equality. [F1, F4, given, algebra]

2.1 Steps 1.1 and 1.2 verify the empty-set and countable-additivity clauses in [F2], and step 1.1 gives total mass one. Thus [F3] makes $P_n$ a probability measure. [F2, F3, step 1.1, step 1.2] ∎
