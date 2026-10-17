---
id: def-proximal-mapping
kind: definition
title: "Proximal mapping"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-proper-closed-convex-function-on-rn
  - def-euclidean-inner-product
justified_by:
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §1.1"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Amir Beck, First-Order Methods in Optimization, SIAM, 2017, Chapter 6"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
---

## Definition

Let $g:\mathbb R^n\to(-\infty,+\infty]$ be proper, closed and convex, and let $t>0$. For $v\in\mathbb R^n$, define the set-valued proximal mapping
$$\operatorname{prox}_{tg}(v)=\left\{u\in\mathbb R^n:g(u)+\frac{\|u-v\|_2^2}{2t}\le g(w)+\frac{\|w-v\|_2^2}{2t}\text{ for every }w\in\mathbb R^n\right\}.$$
The existence and uniqueness theorem on this page proves that this set is a singleton for every admissible $g,t,v$; its unique member is also denoted $\operatorname{prox}_{tg}(v)$.
