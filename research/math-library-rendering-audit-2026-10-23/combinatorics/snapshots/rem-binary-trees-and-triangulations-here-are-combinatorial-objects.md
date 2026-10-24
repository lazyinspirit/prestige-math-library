---
id: rem-binary-trees-and-triangulations-here-are-combinatorial-objects
kind: remark
title: "The trees and polygons of this page are defined by recursion and by inequalities on labels"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-binary-tree-and-its-size, def-convex-polygon-chords-crossings-and-triangulations]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, §3.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Remarks

The binary trees of [[def-binary-tree-and-its-size]] are finite prefix-closed
sets of binary words. Their size counts internal nodes, and every recursive step
is stated inside that set-theoretic model. Nothing about a vertex set, an edge
set or connectivity is used here.

The triangulations of
[[def-convex-polygon-chords-crossings-and-triangulations]] are sets of diagonals
in a labelled cyclic order. Crossing is the inequality pattern
$i<k<j<\ell$ or $k<i<\ell<j$, and every later splitting argument uses only that
combinatorial crossing relation. Drawings are illustrations of these two
definitions, not additional hypotheses.
