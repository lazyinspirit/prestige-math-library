---
id: fs-every-vector-field-on-a-manifold-with-boundary-has-a-local-two-sided-flow-inside-the-manifold
kind: false-statement
title: "Every boundary vector field has a local two-sided flow inside the manifold"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-boundary-tangent-vector-fields-have-local-two-sided-flows-preserving-the-boundary, thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary]
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

**False.** On $[0,\infty)$, the constant field $-\partial_x$ at $0$ has integral curve $t\mapsto-t$, which immediately leaves the half-line for $t>0$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Refutation

**Proof technique:** direct.

1.1 Thus an ambient two-sided solution need not stay inside the manifold. [given]

2.1 Only tangent fields have boundary-preserving two-sided flows; inward fields are asserted here only for forward time. [step 1.1] ∎
