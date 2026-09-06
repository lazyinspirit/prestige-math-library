---
id: thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary
kind: theorem
title: "Boundary-tangent fields have boundary-preserving local two-sided flows"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, thm-fundamental-theorem-on-flows, prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it]
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

Let $M$ be a smooth manifold with boundary and let $X$ be a smooth vector field on $M$ tangent to $\partial M$. Then $X$ has a local two-sided ambient flow, and every defined time slice preserves $\partial M$.

## Facts & Assumptions

**Given:** A smooth manifold $M$ with boundary and a smooth vector field $X$ on $M$ satisfying $X_p\in T_p\partial M$ for every $p\in\partial M$.

[L1] A smooth vector field on a boundaryless manifold has a unique maximal local flow with open time-state domain ([[thm-fundamental-theorem-on-flows]]).

[L2] The flow of a vector field tangent to a closed embedded submanifold preserves that submanifold ([[prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it]]).

[L3] The boundary tangent space is the last-coordinate-zero hyperplane in a boundary chart ([[prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane]]).

## Proof

**Proof technique:** direct.

1.1 Fix a boundary point and extend the coordinate components of $X$ smoothly across the face of a boundary chart. By [L1], the extended Euclidean field has a unique two-sided local flow near that point. [given, L1]

2.1 By [L3], the extended field is tangent to the face along the face. Applying [L2] in the Euclidean chart shows that its flow preserves the face. Each sufficiently small time slice is a local diffeomorphism with inverse the negative-time slice, so an interior point cannot cross the invariant face without violating injectivity. After shrinking the flow domain, it therefore preserves the half-space and restricts to a two-sided local flow on $M$ preserving $\partial M$. [L2, L3, step 1.1] ∎
