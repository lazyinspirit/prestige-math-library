---
id: cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line
kind: counterexample
title: "An inward field without a negative-time flow in the half-line"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-inward-outward-and-boundary-tangent-vectors]
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

## Statement refuted

On $[0,\infty)$, $X=\partial_x$ is inward at $0$ but has no negative-time flow through $0$ staying in the half-line.

## Facts & Assumptions

**Given:** The half-line $M=[0,\infty)$ with boundary point $0$ and the constant smooth vector field $X=\partial_x$.

[L1] In a boundary chart with half-space coordinate increasing into the manifold, a vector is inward exactly when its last coordinate is positive ([[def-inward-outward-and-boundary-tangent-vectors]]).

## Counterexample

**Proof technique:** direct.

1.1 In the identity boundary chart on $M$, the vector $X_0=\partial_x$ has coordinate $+1$, so it is inward at $0$ by [L1]. [given, L1, algebra]

2.1 Any integral curve through $0$ must satisfy $\gamma'(t)=1$ and $\gamma(0)=0$, hence $\gamma(t)=t$. It lies in $M$ for $t\ge0$ but not for any $t<0$. Therefore no flow through $0$ can be defined for negative time while remaining in the half-line. [given, step 1.1, algebra] ∎
