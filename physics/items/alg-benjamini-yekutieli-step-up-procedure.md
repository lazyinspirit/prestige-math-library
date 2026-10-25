---
id: alg-benjamini-yekutieli-step-up-procedure
kind: algorithm
title: "Benjamini–Yekutieli step-up procedure"
status: published
origin: pipeline
pipeline_run: statistical-models-experiments-62
dependency_level: 0
deps:
  - def-p-value
  - def-harmonic-number-for-set-cover-analysis
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Yoav Benjamini and Daniel Yekutieli, The Control of the False Discovery Rate in Multiple Testing under Dependency, The Annals of Statistics 29(4) (2001), Theorem 1.3 and Section 5"
      url: "https://www.researchgate.net/publication/38348313_The_control_of_the_false_discovery_rate_in_multiple_testing_under_dependency"
    - title: "Alexandru Katsevich, STAT 9610 Lecture Notes, Section 6.3.2, Proposition 6.6, printed p. 138 / PDF p. 142"
      url: "https://katsevich-teaching.github.io/stat-9610-fall-2023/assets/lecture-notes.pdf"
---

## Definition

Input an integer $m\ge1$, observed values $p_1,\ldots,p_m\in[0,1]$ of p-value statistics ([[def-p-value]]), and a target level $q\in(0,1)$. Let $H_m=\sum_{j=1}^m1/j$ be the harmonic number from [[def-harmonic-number-for-set-cover-analysis]]. For $k=1,\ldots,m$, set

$$c_k:=\frac{kq}{mH_m}.$$

Order the pairs $(p_i,i)$ lexicographically, so equal values are ordered by their original indices, and write the ordered values $p_{(1)}\le\cdots\le p_{(m)}$. Set

$$R:=\max\bigl(\{k\in\{1,\ldots,m\}:p_{(k)}\le c_k\}\cup\{0\}\bigr).$$

Reject exactly the hypotheses at ranks $1,\ldots,R$; when $R=0$, reject none. Because $H_m\ge1$, each critical value satisfies $0<c_k\le q/H_m\le q<1$. This definition specifies the procedure; no FDR guarantee is asserted here.
