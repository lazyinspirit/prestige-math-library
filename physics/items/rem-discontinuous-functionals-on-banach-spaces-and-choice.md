---
id: rem-discontinuous-functionals-on-banach-spaces-and-choice
kind: remark
title: "Discontinuous linear functionals on infinite-dimensional Banach spaces are not available in ZF + DC"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-09-04
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Christopher Heil, A Basis Theory Primer"
      url: "https://heil.math.gatech.edu/papers/bases.pdf"
    - title: "Paul Howard and Eleftherios Tachtsis, On infinite-dimensional Banach spaces and weak forms of the axiom of choice"
      url: "https://commons.emich.edu/fac_sch2017/127/"
pipeline_run: frontier-29
---

## Remark

On an infinite-dimensional Banach space, the existence of a discontinuous linear
functional is a choice-sensitive statement. Full Choice gives one immediately
from an infinite Hamel basis: pick the basis, prescribe an unbounded
coefficient functional on it, and extend linearly. The opposite direction is
not a theorem of ZF + DC. Howard and Tachtsis record the consistency boundary,
and Heil's discussion of Hamel bases spells out the elementary "basis gives an
unbounded functional" half.

The point for this page is negative rather than positive: the explicit
discontinuous functional on the companion example below lives on the incomplete
space $c_{00}$, not on a Banach space. That distinction is exactly why this
remark is kept separate from the example and why it never serves as a
dependency.
