---
id: cex-an-inward-pointing-field-with-no-negative-time-flow-in-the-half-line
kind: counterexample
title: "An inward field without a negative-time flow in the half-line"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-inward-outward-and-boundary-tangent-vectors, thm-inward-pointing-vector-fields-have-local-forward-semiflows-at-the-boundary]
justified_by: []
aliases: []
proof_strategy: direct
verification:
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

**Given:** The hypotheses and conventions in the statement.

## Counterexample

**Proof technique:** direct.

1.1 Its integral curve through $0$ is $\gamma(t)=t$. [given]

2.1 For $t<0$ this lies outside $[0,\infty)$, while for $t\ge0$ it stays inside, proving the stated asymmetry. [step 1.1] ∎
