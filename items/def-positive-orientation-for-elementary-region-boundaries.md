---
id: def-positive-orientation-for-elementary-region-boundaries
kind: definition
title: "Positive orientation of elementary-region boundaries"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-type-i-type-ii-and-elementary-green-regions, def-piecewise-c1-path-operations-and-oriented-reparametrizations]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, section 10.6"
      url: "https://www.jirka.org/ra/html/sec_mvgreenstheorem.html"
pipeline_run: null
---

## Definition

For a Type I region of [[def-type-i-type-ii-and-elementary-green-regions]], the **positive boundary** traverses the lower graph from left to right, the right endpoint arc upward, the upper graph from right to left, and the left endpoint arc downward, omitting zero-length arcs. For a Type II description it traverses the right graph upward, the top endpoint arc from right to left, the left graph downward, and the bottom endpoint arc from left to right. In both cases the region remains locally on the left.

For a finite elementary Green region, delete every shared internal arc together with its oppositely oriented copy and retain the orientations of all surviving arcs. Reversal and concatenation are those of [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]].
