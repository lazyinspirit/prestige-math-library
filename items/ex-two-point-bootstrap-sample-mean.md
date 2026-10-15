---
id: ex-two-point-bootstrap-sample-mean
kind: example
title: "The bootstrap law of a two-point sample mean"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-n-out-of-n-bootstrap-from-empirical-law
  - thm-bootstrap-draws-are-conditionally-iid-empirical-law
  - def-empirical-measure
  - def-identically-distributed-and-iid-random-variables
  - def-partial-sums-and-sample-means
  - def-statistic-and-estimator
justified_by: []
proof_strategy: direct
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §2, printed pp. 3–5"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.1, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Example

Let $X_1,X_2$ be IID with $\mathbb P(X_i=0)=\mathbb P(X_i=2)=1/2$, and suppose the observed ordered sample is $(0,2)$. The size-two statistic is the sample mean $\overline X_2=(X_1+X_2)/2$ from [[def-partial-sums-and-sample-means]].

## Facts & Assumptions

**Given:** A possible observed realization $(0,2)$ from two IID real observations with common law assigning mass $1/2$ to each of $0$ and $2$.

[F1] [[def-identically-distributed-and-iid-random-variables]]: IID observations have a common law and are mutually independent.

[F2] [[def-empirical-measure]]: the empirical measure assigns $P_n(A)=\frac1n\sum_i1\{x_i\in A\}$ to each measurable set $A$.

[F3] [[def-partial-sums-and-sample-means]]: $\overline X_n=n^{-1}\sum_{i=1}^nX_i$.

[F4] [[alg-n-out-of-n-bootstrap-from-empirical-law]]: a size-$n$ replicate draws $n$ indices independently and uniformly from the observed indices and returns the corresponding ordered tuple.

[F5] [[thm-bootstrap-draws-are-conditionally-iid-empirical-law]]: conditional on fixed observations, each bootstrap entry has law $P_n$ and the entries are mutually independent.

## Verification

1.1 Under the stated IID law the tuple $(0,2)$ has probability $(1/2)(1/2)=1/4$ by [F1], so it is an admissible observed realization. For this fixed tuple, [F2] gives $P_2(\{0\})=P_2(\{2\})=1/2$. [given, F1, F2, algebra]

1.2 By [F4] and [F5], each of the four ordered bootstrap pairs $(0,0),(0,2),(2,0),(2,2)$ has conditional probability $1/4$. [F4, F5, algebra]

2.1 Applying the sample-mean formula [F3] to these four pairs gives values $0,1,1,2$, respectively. Thus the conditional bootstrap mean has probabilities $1/4,1/2,1/4$ at $0,1,2$. This is the exact conditional resampling law for this fixed sample and is not a claim of general bootstrap validity. [F3, step 1.2, algebra] ∎
