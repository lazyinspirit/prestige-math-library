---
id: alg-lower-empirical-bootstrap-quantile
kind: algorithm
title: Lower empirical quantile of bootstrap values
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 0
deps: []
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
    - title: "Bradley Efron and Robert Tibshirani, The Bootstrap Method for Assessing Statistical Accuracy, Behaviormetrika 12 (1985), §7"
      url: "https://link.springer.com/content/pdf/10.2333/bhmk.12.17_1.pdf"
---

## Definition

Input a nonempty finite list $y_1,\ldots,y_B\in\mathbb R$ and $p\in[0,1]$. Sort the values with multiplicity as $y_{(1)}\le\cdots\le y_{(B)}$. If $p=0$, set $k=1$; if $p>0$, let $k$ be the least integer in $\{1,\ldots,B\}$ with $k\ge Bp$. Return
$$Q_B(p)=y_{(k)}.$$
This is the lower inverse empirical-CDF quantile, with the explicit endpoint convention $Q_B(0)=y_{(1)}$ and $Q_B(1)=y_{(B)}$. Repeated values remain repeated; no interpolation is performed. An empty list or a value of $p$ outside $[0,1]$ is inadmissible.
