---
id: cor-the-image-of-a-compact-space-lies-in-a-finite-cw-subcomplex
kind: corollary
title: The image of a compact space lies in a finite CW subcomplex
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells, def-skeleta-cw-subcomplex-and-relative-cw-complex]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology, Appendix A
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
---

## Statement

If $K$ is compact and $f:K\to X$ is continuous into a CW complex, then $f(K)$ lies in a finite CW subcomplex of $X$.

## Facts & Assumptions

**Given:** A continuous map $f:K\to X$ with $K$ compact.

## Proof

**Proof technique:** direct.

1.1 The image is compact, so [[lem-a-compact-subspace-of-a-cw-complex-meets-only-finitely-many-cells]] gives finitely many cells meeting it. [given]

2.1 Add the finitely many cells in the closures of those cells, repeating down dimensions. Closure finiteness makes this terminate in a finite union, and the result is a CW subcomplex by [[def-skeleta-cw-subcomplex-and-relative-cw-complex]]. [step 1.1] ∎
