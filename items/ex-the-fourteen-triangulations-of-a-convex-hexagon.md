---
id: ex-the-fourteen-triangulations-of-a-convex-hexagon
kind: example
title: "All fourteen triangulations of the labelled hexagon"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [cor-triangulations-of-a-convex-polygon-are-counted-by-the-catalan-numbers, lem-a-triangulation-has-a-unique-triangle-on-the-closing-side, def-convex-polygon-chords-crossings-and-triangulations, def-catalan-number]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "D. Guichard, An Introduction to Combinatorics and Graph Theory, Exercise 3.5.5"
      url: "https://www.whitman.edu/mathematics/cgt_online/cgt.pdf"
pipeline_run: null
---

## Example

Grouped by the split index $k$ of
[[lem-a-triangulation-has-a-unique-triangle-on-the-closing-side]], the
triangulations of the labelled hexagon are:

| $k$ | triangulations |
|---|---|
| $2$ | $\{\{2,4\},\{2,5\},\{2,6\}\}$, $\{\{2,4\},\{2,6\},\{4,6\}\}$, $\{\{2,5\},\{2,6\},\{3,5\}\}$, $\{\{2,6\},\{3,5\},\{3,6\}\}$, $\{\{2,6\},\{3,6\},\{4,6\}\}$ |
| $3$ | $\{\{1,3\},\{3,5\},\{3,6\}\}$, $\{\{1,3\},\{3,6\},\{4,6\}\}$ |
| $4$ | $\{\{1,3\},\{1,4\},\{4,6\}\}$, $\{\{1,4\},\{2,4\},\{4,6\}\}$ |
| $5$ | $\{\{1,3\},\{1,4\},\{1,5\}\}$, $\{\{1,3\},\{1,5\},\{3,5\}\}$, $\{\{1,4\},\{1,5\},\{2,4\}\}$, $\{\{1,5\},\{2,4\},\{2,5\}\}$, $\{\{1,5\},\{2,5\},\{3,5\}\}$ |

## Facts & Assumptions

**Given:** the labelled hexagon with vertices $1,\dots,6$.

[L1] The split index $k$ on the closing side is unique ([[lem-a-triangulation-has-a-unique-triangle-on-the-closing-side]]).

[L2] The number of triangulations of the labelled hexagon is $C_4=14$ ([[cor-triangulations-of-a-convex-polygon-are-counted-by-the-catalan-numbers]], [[def-catalan-number]]).

## Verification

**Proof technique:** direct.

1.1 Every diagonal set in the table has three pairwise non-crossing diagonals, so each row is a triangulation of the hexagon. [given]

2.1 The four groups are disjoint because the split index $k$ of [L1] is unique, and the group sizes are $5$, $2$, $2$ and $5$, so the table contains $14$ triangulations altogether. [L1, step 1.1]

3.1 This agrees with [L2], since $C_4=14$. The same grouped count is the recursion $|\mathcal{P}_2||\mathcal{P}_5|+|\mathcal{P}_3||\mathcal{P}_4|+|\mathcal{P}_4||\mathcal{P}_3|+|\mathcal{P}_5||\mathcal{P}_2|=5+2+2+5$. [L2, step 2.1] ∎

## Remarks

- The two extreme groups are the fan triangulations based at the vertices $2$ and $5$, together with the four further triangulations on the corresponding pentagons.
