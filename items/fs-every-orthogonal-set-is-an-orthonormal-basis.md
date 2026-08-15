---
id: fs-every-orthogonal-set-is-an-orthonormal-basis
kind: false-statement
title: "FALSE: Every orthogonal set is an orthonormal basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-orthogonal-vectors-sets-and-orthonormal-bases, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., definitions 6.22 and 6.27'
      url: 'https://linear.axler.net/LADR4e.pdf'
pipeline_run: null
---

## Statement

**False claim.** Every orthogonal set in an inner product space is an orthonormal basis.

## Facts & Assumptions

**Given:** The singleton list containing $(2,0)$ in standard $\mathbb R^2$.

[L1] An orthogonal list only requires distinct members to be pairwise orthogonal; an orthonormal basis additionally requires unit norms and spanning ([[def-orthogonal-vectors-sets-and-orthonormal-bases]]).

[L2] In standard $\mathbb R^2$, the squared norm is the sum of coordinate squares ([[prop-standard-coordinate-inner-products]]).

## Refutation

**Proof technique:** counterexample.

1.1 A singleton is orthogonal because it has no distinct pair to check. But [L2] gives $\lVert(2,0)\rVert=2$, and its span is only a line in $\mathbb R^2$. [L2]

2.1 Thus it is neither normalised nor a basis, exposing both missing requirements in [L1]. The empty orthogonal list supplies the same spanning warning in every nonzero space. [step 1.1, L1] ∎
