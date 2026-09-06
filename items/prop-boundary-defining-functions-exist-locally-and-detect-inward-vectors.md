---
id: prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors
kind: proposition
title: "Boundary-defining functions exist locally and detect inward vectors"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-boundary-defining-function, def-inward-outward-and-boundary-tangent-vectors, prop-chain-rule-for-smooth-half-space-maps]
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

Every boundary point has a boundary-defining function; for any such $\rho$, a vector $v$ is inward exactly when $d\rho_p(v)>0$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 In a boundary chart take $\rho=x^n$; it is nonnegative, vanishes precisely on the face, and has nonzero differential. [given]

2.1 Any defining function has a positive normal derivative, so comparing it with the chart coordinate gives the same sign on normal vectors; it vanishes on the tangent hyperplane. Hence its positive differential exactly detects inwardness. [step 1.1] ∎
