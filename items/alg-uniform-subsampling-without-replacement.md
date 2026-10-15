---
id: alg-uniform-subsampling-without-replacement
kind: algorithm
title: "Uniform subsampling without replacement"
status: draft
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
    - title: "P.J. Bickel, F. Götze and W.R. van Zwet, Resampling Fewer Than n Observations, Statistica Sinica 7 (1997), §3, printed pp. 8–11"
      url: "https://www3.stat.sinica.edu.tw/statistica/oldpdf/a7n11.pdf"
    - title: "P.B. Stark, Statistics 240 Lecture Notes, Part 8: Resampling Methods, §1.2, PDF pp. 3–7"
      url: "https://www.stat.berkeley.edu/~stark/Teach/S240/Notes/ch8.pdf"
---

## Definition

**Input.** Let $n\ge2$, let $(\mathcal Z,\mathcal F)$ be the declared measurable space of unit records, and fix observed records $z_1,\ldots,z_n\in\mathcal Z$ whose resampling unit satisfies [[def-resampling-sampling-unit-contract]]. Declare a sample sigma-algebra $\mathcal F_b$ on the ordered tuple space $\mathcal Z^b$, choose $1\le b<n$, and provide a statistic $T_b:(\mathcal Z^b,\mathcal F_b)\to(\mathbb R^q,\mathcal B_q)$, where $q\ge1$ is finite and $\mathcal B_q$ is the declared target sigma-algebra; "statistic" has the measurable-map meaning in [[def-statistic-and-estimator]].

Write $[n]:=\{1,\ldots,n\}$ for the indexing set; the finite subset law on these indices is established in [[lem-uniform-law-on-finite-subset-families]].

**Procedure.** Draw $I$ uniformly from the finite family $\mathcal I_{n,b}:=\{J\subseteq[n]:|J|=b\}$, without replacement; list its indices in increasing order; and return the subsample $(z_i)_{i\in I}$ and statistic value $T_b((z_i)_{i\in I})$. The uniform law is well-defined by [[lem-uniform-law-on-finite-subset-families]].

This is subsampling without replacement. It is different from drawing $b$ indices independently with replacement. The procedure defines a finite law only; validity requires a separate theorem for the data-generating design and asymptotic regime.
