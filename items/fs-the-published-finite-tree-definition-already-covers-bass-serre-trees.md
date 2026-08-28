---
id: fs-the-published-finite-tree-definition-already-covers-bass-serre-trees
kind: false-statement
title: "FALSE: the published finite-tree definition already covers Bass-Serre trees"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion]
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
---

## Statement

Every simplicial tree is already a finite tree in the previously published
sense.

## Facts & Assumptions

**Given:** The finite-agreement theorem for simplicial trees.

[L1] The published finite-tree notion agrees with the simplicial-tree notion only for finite oriented graphs. ([[thm-finite-simplicial-tree-agrees-with-the-published-finite-tree-notion]])

## Refutation

**Proof technique:** direct.

1.1 The bi-infinite line is a simplicial tree with infinitely many vertices, so it lies outside the finite scope named in [L1]. [L1, given]

2.1 Therefore [L1] does not identify every simplicial tree with a published finite tree, and the statement is false. [L1, step 1.1, algebra] ∎
