---
id: alg-knn-classifier-with-fixed-tie-breaking
kind: algorithm
title: "Finite-sample k-nearest-neighbor classifier with fixed tie-breaking"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-mahalanobis-pseudometric, def-finite-sum]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Kilian Q. Weinberger and Lawrence K. Saul, Distance Metric Learning for Large Margin Nearest Neighbor Classification, JMLR 10 (2009), 207–244"
      url: "https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf"
    - title: "Aurélien Bellet, Amaury Habrard, and Marc Sebban, A Survey on Metric Learning for Feature Vectors and Structured Data, arXiv:1306.6709v4 (2014)"
      url: "https://arxiv.org/pdf/1306.6709"
aliases: []
landmark: false
---

## Definition

Let $d,n,C$ be positive integers, let $(x_i,y_i)_{i=1}^{n}$ be a finite labeled sample with $x_i\in\mathbb R^d$ and $y_i\in\{1,\ldots,C\}$, let $M\in\mathbb R^{d\times d}$ be symmetric with $v^TMv\ge0$ for every $v\in\mathbb R^d$, let $1\le k\le n$, and let $x\in\mathbb R^d$ be a query. For each sample index set $\delta_i=\sqrt{(x-x_i)^TM(x-x_i)}$. Order indices $i$ by increasing pairs $(\delta_i,i)$ in lexicographic order, and let $K_k(x)$ be the first $k$ indices in this order. For each class $c\in\{1,\ldots,C\}$ compute $v_c(x)=\sum_{i\in K_k(x)}\mathbf 1_{\{y_i=c\}}$ and return the smallest class label attaining $\max_{1\le c\le C}v_c(x)$. Thus equal distances are resolved by the fixed sample-index order, and equal class votes by the smallest class label.

## Definition references

[[def-mahalanobis-pseudometric|Mahalanobis squared distance and its nonnegative square root]]

[[def-finite-sum|Finite-sum convention]]

[Weinberger and Saul, §2.1, printed pp. 209–210, and §3.1, pp. 214–216](https://jmlr.org/papers/volume10/weinberger09a/weinberger09a.pdf)

[Bellet, Habrard, and Sebban, §1 and §3.2, printed pp. 1–2 and 12–13](https://arxiv.org/pdf/1306.6709)
