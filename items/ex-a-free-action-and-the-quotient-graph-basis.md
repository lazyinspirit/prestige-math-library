---
id: ex-a-free-action-and-the-quotient-graph-basis
kind: example
title: "A free action and the quotient-graph basis"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [cor-a-group-acting-freely-without-inversions-on-a-tree-is-free, def-quotient-graph-of-an-action-without-inversions]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version)"
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
pipeline_run: null
---

## Example

Let $\mathbb Z$ act on the bi-infinite line by translation $n\mapsto n+1$.
Then the quotient graph is a single loop, and the resulting basis of the acting
group has one generator.

## Facts & Assumptions

**Given:** The quotient graph of an action without inversions.

[L1] A group acting freely without inversions on a tree is free. ([[cor-a-group-acting-freely-without-inversions-on-a-tree-is-free]])

[L2] The quotient graph records vertex and edge orbits of the action. ([[def-quotient-graph-of-an-action-without-inversions]])

## Verification

**Proof technique:** direct.

1.1 Translation by one step on the bi-infinite line has one vertex orbit and one edge orbit, so by [L2] the quotient graph is a single loop. The action is free and without inversions. [L2, given]

2.1 Therefore [L1] identifies the acting group with a free group on one generator, namely the loop edge of the quotient graph. This recovers $\mathbb Z$. [L1, step 1.1] ∎
