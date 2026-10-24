---
id: thm-clairaut-schwarz-mixed-partials
kind: theorem
title: "Clairaut--Schwarz theorem for continuous second partial derivatives"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-peano-mixed-partial-theorem, def-ck-and-multi-index-notation-in-several-variables]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Mixed partial derivatives (Eremenko)"
      url: "https://www.math.purdue.edu/~eremenko/dvi/mixedpartial.pdf"
pipeline_run: null
---

## Statement

If $f$ is $C^2$ on an open subset of $\mathbb R^m$, then $\partial_i\partial_j f=\partial_j\partial_i f$ for every pair of coordinate indices.

## Facts & Assumptions

**Given:** A $C^2$ scalar field and coordinate indices $i,j<m$.

[L1] If $f_{xy}$ exists on a neighbourhood of a point and is continuous at that point, while $f_{yx}$ exists there, then the two values are equal ([[thm-peano-mixed-partial-theorem]]).

[L2] The $C^2$ condition supplies every ordered partial derivative of length at most two, continuously on the open set ([[def-ck-and-multi-index-notation-in-several-variables]]).

## Proof

**Proof technique:** direct.

1.1 At an arbitrary point, [L2] supplies $\partial_i\partial_jf$ on a neighbourhood and continuously there, as well as the reversed partial $\partial_j\partial_if$ at the point. [L2, given]

2.1 Apply [L1] at an arbitrary point to obtain $\partial_i\partial_j f=\partial_j\partial_i f$. [step 1.1, L1] ∎
