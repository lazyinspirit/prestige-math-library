---
id: rem-open-mapping-theorem-via-argument-principle
kind: remark
title: "The argument principle recovers the open mapping theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [cor-argument-principle-counts-preimages,
       thm-open-mapping-theorem-holomorphic-functions]
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
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
pipeline_run: null
---

## Remark

If $f$ is nonconstant and holomorphic on a complex domain and $a\in\Omega$, then
$f-f(a)$ has a zero of positive multiplicity at $a$. Choose a small circle
around $a$ on which $f-f(a)$ does not vanish. The preimage-count corollary says
that for every $w$ sufficiently close to $f(a)$ the function $f-w$ has the same
positive number of zeros inside that circle. So every value near $f(a)$ is
attained nearby, and the image is open.

This reproduces the already-published open mapping theorem
[[thm-open-mapping-theorem-holomorphic-functions]]. The earlier page keeps its
local-normal-form proof because the reading order needs that theorem before the
argument principle exists.
