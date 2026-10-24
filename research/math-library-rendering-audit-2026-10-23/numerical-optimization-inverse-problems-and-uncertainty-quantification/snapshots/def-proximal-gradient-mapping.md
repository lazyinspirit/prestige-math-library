---
id: def-proximal-gradient-mapping
kind: definition
title: "Proximal-gradient mapping and projected-gradient mapping"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-proper-closed-convex-function-on-rn
  - def-proximal-mapping
  - def-indicator-function-of-closed-convex-set
  - thm-proximal-operator-existence-resolvent-firm-nonexpansive
  - lem-prox-indicator-is-euclidean-projection
  - def-euclidean-inner-product
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
    - title: "Amir Beck, First-Order Methods in Optimization, SIAM, 2017, Chapter 10"
      url: "https://epubs.siam.org/doi/book/10.1137/1.9781611974997"
---

## Definition

Let $f:\mathbb R^n\to\mathbb R$ be continuously differentiable with $L$-Lipschitz gradient for some $L>0$, and let $g:\mathbb R^n\to(-\infty,+\infty]$ be proper, closed and convex. Define
$$T_L(x):=\operatorname{prox}_{g/L}\!\left(x-\frac1L\nabla f(x)\right),\qquad G_L(x):=L(x-T_L(x)).$$
The proximal theorem [[thm-proximal-operator-existence-resolvent-firm-nonexpansive]] ensures the point $T_L(x)$ is uniquely defined. For a nonempty closed convex set $C$ and $g=\iota_C$, the projected-gradient update is
$$T_L^C(x)=P_C\!\left(x-\frac1L\nabla f(x)\right),\qquad G_L^C(x)=L(x-T_L^C(x)),$$
where $P_C$ denotes the unique nearest-point projection; this equality follows from [[lem-prox-indicator-is-euclidean-projection]].
