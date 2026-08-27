---
id: rem-local-degree-argument-principle-agreement
kind: remark
title: "Argument-principle multiplicity agrees with the earlier local degree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-argument-principle-counts-preimages,
       cor-local-multiplicity-count-holomorphic-map]
justified_by: []
forward_refs: []
aliases: []
landmark: false
verification:
  audited: 2026-08-28
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.1 and §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Remark

Fix a nonconstant holomorphic map $f$ and a point $a$ of local degree
$m=\deg_a f$. The earlier local-sheet theorem
[[cor-local-multiplicity-count-holomorphic-map]] says that every nearby value
other than $f(a)$ has exactly $m$ nearby preimages. On the other hand, the
argument-principle preimage count on a small circle around $a$ counts the zeros
of $f-w$ in that same disc, with multiplicity, and therefore gives the same
integer $m$.

So the multiplicity seen analytically by the argument principle agrees with the
local degree already built from the normal form. This is an agreement remark,
not a replacement of the earlier construction.
