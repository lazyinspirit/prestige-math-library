---
id: rem-resolution-higher-dimension-not-claimed
kind: remark
title: "No inference to general resolution of singularities"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - thm-resolution-plane-curves-by-point-blowups
  - thm-blowup-projective
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Divisors, Sections 31.33-31.36 (Blowing up; Strict transform; Admissible blowups; Blowing up and flatness)"
      url: "https://stacks.math.columbia.edu/tag/01OF"
      locator: "Section 31.33 for the construction and Section 31.34 for strict transforms"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, June 27, 2011 draft (author-hosted 'Early (out-of-date) version of The Rising Sea')"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGjun2711publicnoindex.pdf"
      locator: "Exercise 19.4.I and 19.4.12, pp. 392-394"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---

## Remark

The results of this page prove resolution for reduced projective plane curves by
point blowups ([[thm-resolution-plane-curves-by-point-blowups]]) and the
regularity of point blowups of regular surfaces; the blowups used are proper
and, in the point case, have the explicit projective chart descriptions of
[[thm-blowup-projective]]. These statements do not imply resolution of
singularities for arbitrary varieties, nor for surfaces over imperfect fields
with smoothness assertions about the resulting components, nor for schemes of
dimension at least three. The termination argument for the curve case uses two
features special to curves on surfaces: the one-dimensional normalization
defect $\delta_k$, which decreases by $r\,m(m-1)/2$ at each singular point
blowup, and the pairwise contact order of two regular branches at a point of a
regular surface, which decreases by one under an appropriate point blowup. In
higher dimension there is no such defect count, and the embedded
normal-crossing support produced for curves does not control the singularities
of a general ambient scheme. The page therefore claims only the plane-curve
resolution and the regularity statements stated and proved in its items, and
the normal-crossing conclusion is asserted over the residual residue fields,
not as smoothness over an imperfect base field.
