---
id: fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold
kind: false-statement
title: "Every boundary vector field has a local two-sided flow inside the manifold"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary, thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ioan Mărcuț, Manifolds (2017 lecture notes), §§14.5, 15.1"
      url: "https://www.math.ru.nl/~imarcut/index_files/lectures_2017.pdf"
    - title: "Will Merry, Differential Geometry (2021), Lecture 24"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

**False.** On $[0,\infty)$, the constant field $-\partial_x$ at $0$ has integral curve $t\mapsto-t$, which immediately leaves the half-line for $t>0$.

## Facts & Assumptions

**Given:** The manifold with boundary $M=[0,\infty)$, the smooth constant vector field $X=-\partial_x$, and the boundary point $0$.

[L1] Boundary-tangent vector fields have local two-sided flows preserving the boundary ([[thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary]]).

[L2] Inward-pointing vector fields are guaranteed only a local forward flow at the boundary ([[thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary]]).

## Refutation

**Proof technique:** direct.

1.1 The integral curve through $0$ satisfies $\gamma'(t)=-1$ and $\gamma(0)=0$, hence $\gamma(t)=-t$. For every $t>0$ it lies outside $M$, so even a local two-sided ambient solution need not restrict to a flow inside the manifold. [given, algebra]

2.1 This does not contradict [L1], because $X$ is not tangent at $0$, or [L2], because $X$ points outward rather than inward there. The explicit trajectory in step 1.1 therefore refutes the unrestricted two-sided claim. [L1, L2, step 1.1] ∎
