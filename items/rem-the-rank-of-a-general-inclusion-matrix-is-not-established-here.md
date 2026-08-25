---
id: rem-the-rank-of-a-general-inclusion-matrix-is-not-established-here
kind: remark
title: "What is and is not proved about $\\operatorname{rank}W_{t,k}(n)$ on this page"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-inclusion-matrix, thm-rank-of-the-point-inclusion-matrix]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "L. Babai and P. Frankl, Linear Algebra Methods in Combinatorics, §7.1"
      url: "https://users.renyi.hu/~p_erdos/1985-04.pdf"
pipeline_run: null
---

## Remarks

This page proves the composition identity for the matrices $W_{t,k}(n)$ and the
rank formula for the point case $t=1$ in
[[thm-rank-of-the-point-inclusion-matrix]]. It does not prove the general rank
formula $\operatorname{rank}_{\mathbb{Q}}W_{t,k}(n)=\binom{n}{t}$ throughout the
full stable range.

The reason is mathematical, not clerical. The natural induction on $n$ through
block decomposition loses one unit of the range at each step, and the boundary
case is equivalent to the nonsingularity of the disjointness matrix. Standard
proofs there use eigenvalues of the Johnson scheme or Gottlieb's construction,
and neither belongs to this page's declared prerequisites. So the page records
the point case and stops there.
