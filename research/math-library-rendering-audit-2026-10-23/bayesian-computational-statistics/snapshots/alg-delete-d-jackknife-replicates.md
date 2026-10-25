---
id: alg-delete-d-jackknife-replicates
kind: algorithm
title: "Delete-d jackknife replicates and their uniform average"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-resampling-sampling-unit-contract
  - lem-uniform-law-on-finite-subset-families
  - def-statistic-and-estimator
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §10, printed pp. 30–33"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.2, PDF pp. 3–7"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Definition

**Input.** Let $n\ge2$, let $(\mathcal Z,\mathcal F)$ be the declared measurable space of unit records, and fix observed records $z_1,\ldots,z_n\in\mathcal Z$ whose resampling unit satisfies [[def-resampling-sampling-unit-contract]]. For each tuple length $m$, declare a sample sigma-algebra $\mathcal F_m$ on the ordered tuple space $\mathcal Z^m$. Choose $1\le d<n$ and provide a statistic $T_{n-d}:(\mathcal Z^{n-d},\mathcal F_{n-d})\to(\mathbb R^q,\mathcal B_q)$, where $q\ge1$ is finite and $\mathcal B_q$ is the declared target sigma-algebra; "statistic" has the measurable-map meaning in [[def-statistic-and-estimator]].

Write $[n]:=\{1,\ldots,n\}$ for the indexing set; the finite subset law on these indices is established in [[lem-uniform-law-on-finite-subset-families]].

**Procedure.** Form $\mathcal I_{n,d}:=\{I\subseteq[n]:|I|=d\}$. For every $I\in\mathcal I_{n,d}$, list the indices in $[n]\setminus I$ in increasing order and compute
$$\widehat\theta_{(-I)}:=T_{n-d}((z_i)_{i\in[n]\setminus I}).$$
Let $M_{n,d}:=|\mathcal I_{n,d}|$ and return the full collection of replicates together with the uniform average
$$\overline\theta_{(-d)}:=\frac1{M_{n,d}}\sum_{I\in\mathcal I_{n,d}}\widehat\theta_{(-I)}.$$
The finite, nonempty subset family and its uniform law are justified by [[lem-uniform-law-on-finite-subset-families]].

This algorithm defines the replicates and their average only. Any variance or bias scaling is a separate statistic with an explicitly stated target; no scaling is implicit in the term **delete-d jackknife**, and the algorithm asserts no validity theorem.
