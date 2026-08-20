---
id: fs-zero-derivative-on-an-open-set-forces-constancy
kind: false-statement
title: "FALSE: zero derivative on an open set forces constancy"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cex-zero-derivative-on-a-disconnected-open-set-without-constancy, thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Cañez, Northwestern Math 320-2 lecture notes"
      url: "https://sites.math.northwestern.edu/~scanez/courses/320/notes/lecture-notes-320-2.pdf"
pipeline_run: null
---

## Statement

**False claim:** if a differentiable map has zero derivative at every point of an open Euclidean domain, then it is constant.

## Facts & Assumptions

**Given:** No connectedness hypothesis is imposed in the false claim.

[L1] There is an open set $U$ and a function on it whose total derivative is zero at every point of $U$, but which is not constant on $U$ ([[cex-zero-derivative-on-a-disconnected-open-set-without-constancy]]).

[L2] If $U$ is nonempty, open, and connected, then $Df=0$ on $U$ if and only if $f$ is constant on $U$ ([[thm-zero-derivative-on-connected-open-euclidean-set-iff-constant]]).

## Refutation

**Proof technique:** direct.

1.1 The construction in [L1] satisfies the derivative hypothesis and violates the conclusion, so it refutes the claim. [L1]

2.1 The comparison with [L2] identifies connectedness as the missing hypothesis: adding it restores exactly the stated equivalence. [step 1.1, L2] ∎
