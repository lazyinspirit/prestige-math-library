---
id: ex-the-closed-ball-and-its-sphere-boundary
kind: example
title: "The closed ball and its sphere boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-euclidean-implicit-function-theorem, def-boundary-defining-function, prop-boundary-defining-functions-exist-locally-and-detect-inward-vectors, thm-the-boundary-is-a-closed-embedded-smooth-n-minus-one-manifold]
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

## Example

For $n\ge1$, the closed ball $B^n$ is a manifold with boundary $S^{n-1}$, and $\rho(x)=1-|x|^2$ is a boundary-defining function.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 On $|x|=1$, $d(|x|^2)=2x\ne0$, so the Euclidean implicit function theorem supplies local hypersurface and half-space charts before any boundary conclusion is used. [given]

2.1 In those charts $\rho\ge0$, vanishes exactly on the sphere, and $d\rho\ne0$, giving the asserted boundary and defining function. [step 1.1] ∎
