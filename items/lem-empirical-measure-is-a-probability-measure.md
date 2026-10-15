---
id: lem-empirical-measure-is-a-probability-measure
kind: lemma
title: "The empirical measure is a probability measure"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-empirical-measure
  - def-probability-measure
  - prop-dirac-measure-is-a-probability-measure
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
axiom_use: "No choice principle is used."
verification:
  precheck: pass
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §§1–2, pp. 1–5"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.1, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Statement

For every $n\ge1$, every measurable space $(\mathcal Z,\mathcal F)$, and every observed tuple $z_1,\ldots,z_n\in\mathcal Z$, the empirical measure $P_n=\frac1n\sum_{i=1}^n\delta_{z_i}$ from [[def-empirical-measure]] is a probability measure on $(\mathcal Z,\mathcal F)$.

## Facts & Assumptions

**Given:** A measurable space $(\mathcal Z,\mathcal F)$, an integer $n\ge1$, and fixed observations $z_1,\ldots,z_n$.

[F1] [[def-empirical-measure]]: $P_n(A)=\frac1n\sum_{i=1}^n\delta_{z_i}(A)$ for every $A\in\mathcal F$.

[F2] [[prop-dirac-measure-is-a-probability-measure]]: each Dirac set function $\delta_{z_i}$ is a probability measure on $(\mathcal Z,\mathcal F)$; in particular it is countably additive, is $0$ on $\varnothing$, and assigns mass $1$ to $\mathcal Z$.

[F3] [[def-probability-measure]]: a probability measure is a measure with total mass $1$.

## Proof

1.1 For any $A\in\mathcal F$, the finite sum in [F1] is nonnegative by [F2]. Also $P_n(\varnothing)=0$ and $P_n(\mathcal Z)=\frac1n\sum_{i=1}^n1=1$. [F1, F2, algebra]

1.2 Let $(A_k)_{k\ge1}$ be pairwise disjoint members of $\mathcal F$. For each fixed $i$, at most one term $\delta_{z_i}(A_k)$ is nonzero, and countable additivity in [F2] gives $\delta_{z_i}(\bigcup_k A_k)=\sum_k\delta_{z_i}(A_k)$. Because the sum over $i$ is finite and there are at most $n$ nonzero terms in the resulting double sum, we may regroup to obtain $P_n(\bigcup_k A_k)=\frac1n\sum_{i=1}^n\sum_k\delta_{z_i}(A_k)=\sum_k\frac1n\sum_{i=1}^n\delta_{z_i}(A_k)=\sum_kP_n(A_k)$. Thus $P_n$ is countably additive. [F1, F2, algebra]

2.1 By step 1.1, $P_n$ has total mass $1$, and by step 1.2 it is countably additive and vanishes on the empty set. Therefore it is a measure of total mass $1$, hence a probability measure by [F3]. [F3, step 1.1, step 1.2] ∎
