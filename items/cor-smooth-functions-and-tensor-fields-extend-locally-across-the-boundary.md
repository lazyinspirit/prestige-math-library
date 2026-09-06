---
id: cor-smooth-functions-and-tensor-fields-extend-locally-across-the-boundary
kind: corollary
title: "Smooth functions and tensor fields extend locally across the boundary"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-double-has-a-well-defined-smooth-structure, def-smooth-tensor-field, def-smooth-differential-k-form]
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

## Statement

Every smooth function or tensor field on a manifold with boundary extends smoothly across each boundary point to some neighbourhood in its double; the extension is not canonical.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

## Proof

**Proof technique:** direct.

1.1 Use a seam chart of the smooth double, in which the original manifold is a half-space. Extend each component function smoothly across the face. [given]

2.1 Reassemble the extended components in the smooth coordinate frame and restrict to a smaller double neighbourhood. Different extensions may differ off the original half-space, so no canonical choice has been made. [step 1.1] ∎
