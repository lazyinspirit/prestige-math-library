---
id: prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it
kind: proposition
title: "The flow of a vector field tangent to a closed embedded submanifold preserves it"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field, thm-fundamental-theorem-on-flows, def-embedded-submanifold-and-slice-chart]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $S\hookrightarrow M$ be a closed embedded submanifold, and let $X$ be a
smooth vector field on $M$ tangent to $S$. Then for every $(t,p)$ in the domain
of the flow of $X$ with $p\in S$, one has $\Phi_t(p)\in S$.

## Facts & Assumptions

**Given:** A closed embedded submanifold $S\hookrightarrow M$, a smooth vector field $X$ tangent to $S$, and the maximal flow $\Phi$ of $X$.

[L1] A tangent vector field restricts to a smooth vector field on the embedded submanifold ([[prop-a-vector-field-tangent-to-an-embedded-submanifold-restricts-to-a-vector-field]]).

[L2] The maximal flow time slices are exactly the maximal integral curves ([[thm-fundamental-theorem-on-flows]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the restriction $X|_S$ is a smooth vector field on $S$. Let $p\in S$, and let $\eta$ be the maximal integral curve of $X|_S$ through $p$. Then $\eta$ is also an integral curve of the ambient field $X$. [L1, given]

2.1 By [L2], the ambient curve $t\mapsto \Phi_t(p)$ is the maximal integral curve of $X$ through $p$. Since step 1.1 gives another integral curve of $X$ through the same initial point, uniqueness forces $\eta(t)=\Phi_t(p)$ wherever both are defined. [L2, step 1.1]

3.1 Because the image of $\eta$ lies in $S$, step 2.1 shows that $\Phi_t(p)\in S$ for every time for which the flow is defined. [step 2.1] ∎
