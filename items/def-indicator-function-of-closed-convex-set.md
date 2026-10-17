---
id: def-indicator-function-of-closed-convex-set
kind: definition
title: "Extended-real indicator of a set"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-extended-reals, def-convex-subset-of-euclidean-space]
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
    - title: "Neal Parikh and Stephen Boyd, Proximal Algorithms, §2.4.2"
      url: "https://web.stanford.edu/~boyd/papers/pdf/prox_algs.pdf"
---

## Definition

For any set $C\subseteq\mathbb R^n$, its extended-real indicator is
$$\iota_C(x)=\begin{cases}0,&x\in C,\\+\infty,&x\notin C.\end{cases}$$

