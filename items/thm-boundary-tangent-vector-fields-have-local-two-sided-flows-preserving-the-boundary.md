---
id: thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary
kind: theorem
title: "Boundary-tangent fields have boundary-preserving local two-sided flows"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-tangent-space-of-the-boundary-is-the-boundary-tangent-hyperplane, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold, thm-fundamental-theorem-on-flows, prop-the-flow-of-a-vector-field-tangent-to-a-closed-embedded-submanifold-preserves-it]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
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

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 In a boundary chart, extend the coordinate components of the field smoothly across the face. The Euclidean local flow of this extension supplies a two-sided local flow near the chosen point. [given]

2.1 On the face the extended last component is zero, so the Euclidean ODE restricted to that face is an integral-curve equation for the extended field. Uniqueness identifies its solutions with the ambient flow curves beginning on the face; it also prevents a curve starting in the half-space from crossing that face. Hence the local two-sided flow is in $M$ and every defined time slice preserves $\partial M$. [step 1.1] ∎
