---
id: ex-discrete-median-bootstrap-ties
kind: example
title: Discrete median bootstrap with ties
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-iid-empirical-bootstrap-sample
  - lem-finite-index-bootstrap-sample-is-conditionally-iid
  - alg-lower-empirical-bootstrap-quantile
  - alg-percentile-bootstrap-interval
  - alg-basic-bootstrap-interval
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "University of Washington STAT 581, Chapter 8: Bootstrap and Jackknife Estimation of Sampling Distributions, §2, Example 2.1"
      url: "https://sites.stat.washington.edu/jaw/COURSES/580s/581/LECTNOTES/ch8b.pdf"
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §7"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Example

Use the lower empirical median, defined as the second order statistic for a sample of size three, and consider observed data $(0,0,1)$. Enumerating all $3^3=27$ bootstrap index tuples gives the exact conditional bootstrap law and demonstrates how the declared lower-quantile convention handles ties. The percentile and basic procedures below are endpoint algorithms, not coverage assertions.

## Facts & Assumptions

**Given:** The observed sample $(0,0,1)$, its empirical masses $P_n(\{0\})=2/3$ and $P_n(\{1\})=1/3$, the finite-index empirical bootstrap, and the interval algorithms.

[F1] Conditional bootstrap coordinates are IID from the empirical law. [[lem-finite-index-bootstrap-sample-is-conditionally-iid]]

[F2] The lower empirical quantile returns the order statistic with index $\max(1,\lceil Bp\rceil)$. [[alg-lower-empirical-bootstrap-quantile]]

[F3] The percentile interval returns the two empirical bootstrap quantiles at $\alpha/2$ and $1-\alpha/2$. [[alg-percentile-bootstrap-interval]]

[F4] The basic interval reflects those two bootstrap quantiles about the observed estimate. [[alg-basic-bootstrap-interval]]

## Verification

1.1 By [F1], the number $K$ of ones in a size-three bootstrap sample has the binomial law with parameters $3$ and $1/3$. The lower median is $1$ exactly when $K\ge2$, so $\mathbb P^*(\text{bootstrap median}=1\mid 0,0,1)=\binom32(1/3)^2(2/3)+(1/3)^3=7/27.$ The other $20$ of the $27$ equally likely index tuples give median $0$. [F1, given, algebra]

2.1 List the $27$ conditional median values with multiplicity: twenty zeros and seven ones. With $\alpha=1/3$, [F2] gives $Q_{27}(1/6)=0$ and $Q_{27}(5/6)=1$. Thus [F3] returns $[0,1]$, while [F4] with observed median $0$ returns $[-1,0]$. These are the outputs under the specified tie and quantile conventions. [F2, F3, F4, step 1.1, given, algebra] ∎
