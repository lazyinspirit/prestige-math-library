---
id: ex-an-algebraic-relator-area-computation
kind: example
title: "Computing an algebraic relator area"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation, lem-minimal-algebraic-relator-area-exists]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
pipeline_run: null
---

## Example

In the presentation $\langle a\mid a^3=e\rangle$, the null word $a^6$ has
algebraic relator area $2$.

## Facts & Assumptions

**Given:** The relator-area definition for a finite presentation.

[L1] The algebraic relator area of a null word is the least number of conjugates of defining relators and their inverses whose product equals that word. ([[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]])

[L2] Every null word has a minimal algebraic relator area. ([[lem-minimal-algebraic-relator-area-exists]])

## Verification

**Proof technique:** direct.

1.1 The word $a^6$ is the product $(a^3)(a^3)$, so [L1] gives $\operatorname{Area}(a^6)\le 2$. [L1, given]

2.1 It is not $1$, because a single conjugate of the only relator or its inverse is just $a^3$ or $a^{-3}$ in this cyclic presentation. Thus [L2] forces the minimum to be exactly $2$. [L1, L2, step 1.1] ∎
