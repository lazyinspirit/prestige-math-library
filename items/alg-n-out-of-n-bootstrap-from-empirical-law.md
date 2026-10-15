---
id: alg-n-out-of-n-bootstrap-from-empirical-law
kind: algorithm
title: "Size-n bootstrap from the empirical law"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-resampling-sampling-unit-contract
  - def-empirical-measure
  - lem-empirical-measure-is-a-probability-measure
  - def-identically-distributed-and-iid-random-variables
  - def-statistic-and-estimator
  - def-finite-probability-space-and-event
  - thm-cardinality-of-a-set-of-functions
justified_by: [thm-bootstrap-draws-are-conditionally-iid-empirical-law]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §§1–3, printed pp. 1–12"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
    - title: "B. Efron and R. Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Stanford LCS Technical Report 19 / BIO 101 (October 1985; full-text report copy)"
      url: "https://stacks.stanford.edu/file/xv648rw7816/xv648rw7816_LCS-19.pdf"
    - title: "P.J. Bickel, F. Götze and W.R. van Zwet, Resampling Fewer Than n Observations, Statistica Sinica 7 (1997), §§1–3, printed pp. 1–11"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.1, PDF pp. 2–3"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Definition

**Input.** Let $n\ge1$, let $(\mathcal Z,\mathcal F)$ be the declared measurable space of sampling units, and fix the observed ordered tuple $z=(z_1,\ldots,z_n)$. Let $P_n$ be its empirical probability measure from [[def-empirical-measure]] and [[lem-empirical-measure-is-a-probability-measure]]. Declare a sample sigma-algebra $\mathcal F_n$ on the ordered tuple space $\mathcal Z^n$ and provide a statistic $T_n:(\mathcal Z^n,\mathcal F_n)\to(\mathbb R^q,\mathcal B_q)$, where $q\ge1$ is finite and $\mathcal B_q$ is the declared target sigma-algebra; "statistic" has the measurable-map meaning in [[def-statistic-and-estimator]].

Write $[n]:=\{1,\ldots,n\}$ for the indexing set.

**Procedure.** Draw indices $I_1,\ldots,I_n$ independently and uniformly from $[n]$, so repeated indices are allowed. Set $Z_j^*:=z_{I_j}$ for $j=1,\ldots,n$. Return the bootstrap tuple $(Z_1^*,\ldots,Z_n^*)$ and the replicate $T_n(Z_1^*,\ldots,Z_n^*)$. Generate further replicates by repeating the index draws with fresh randomness. These are resampling units only when the tuple entries satisfy the unit contract in [[def-resampling-sampling-unit-contract]].

The conditional IID law of the draws is proved in [[thm-bootstrap-draws-are-conditionally-iid-empirical-law]]. This algorithm does not claim that its conditional law consistently approximates any sampling law; such validity requires separate hypotheses and a separate theorem.
