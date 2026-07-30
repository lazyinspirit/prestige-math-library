---
id: ex-locally-finite-versus-point-finite-families
kind: example
title: "Point-finite need not mean locally finite: intervals accumulating at the origin"
status: published
origin: session
deps: [def-cover-refinement-and-local-finiteness, def-interval]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Locally finite collection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Locally_finite_collection"
pipeline_run: null
---

## Example

In $\mathbb R$, let $I_n=(1/(n+1),1/n)$ for positive integers $n$. The intervals
are pairwise disjoint, so no point lies in two intervals and the family is
point-finite. Every neighbourhood of $0$, however, meets $I_n$ for all
sufficiently large $n$. Therefore the family is not locally finite at $0$.

This shows that point-finiteness records membership at a point, whereas local
finiteness controls intersections with a whole neighbourhood.
