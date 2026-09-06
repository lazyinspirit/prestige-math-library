---
id: ex-the-double-of-a-disk-is-a-sphere
kind: example
title: "The double of a disk is a sphere"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-double-of-a-smooth-manifold-with-boundary, thm-the-double-has-a-well-defined-smooth-structure, ex-the-closed-ball-and-its-sphere-boundary]
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

## Example

For $n\ge1$, the labelled double of $D^n$ is diffeomorphic to $S^n$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Verification

**Proof technique:** direct.

1.1 Map the two copies to the closed northern and southern hemispheres, identifying their common equator. [given]

2.1 The maps agree precisely at the seam and collar coordinates give a smooth diffeomorphism there, so the quotient is the sphere. [step 1.1] ∎
