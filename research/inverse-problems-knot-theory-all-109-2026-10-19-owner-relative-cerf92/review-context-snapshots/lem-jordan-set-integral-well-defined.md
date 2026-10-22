---
id: lem-jordan-set-integral-well-defined
kind: lemma
title: "The Riemann integral over a Jordan set is independent of the bounding rectangle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-riemann-integral-over-a-jordan-set, thm-multidimensional-integral-properties, thm-lebesgue-criterion-in-rn, thm-jordan-content-and-indicator-integrability, def-null-and-content-zero-in-rn, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, cor-archimedean-reciprocal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis, Jordan Measurable Sets"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
    - title: "J. Lebl, Basic Analysis, Outer Measure and Null Sets"
      url: "https://www.jirka.org/ra/html/sec_outermeasure.html"
pipeline_run: null
---

## Statement

The definition of $\int_E f$ is independent of the chosen bounding rectangle.

## Facts & Assumptions

**Given:** Nondegenerate bounding rectangles $Q_1,Q_2$ for $E$.

[L1] There is a nondegenerate rectangle $Q$ that contains both $Q_1,Q_2$ strictly in every coordinate: decrease each of the finitely many lower endpoints and increase each upper endpoint by any fixed positive margin ([[def-multidimensional-rectangle-and-volume]]).

[L2] Coordinate-slice additivity, including its converse integrability clause, is part of [[thm-multidimensional-integral-properties]].

[L3] A bounded function on a nondegenerate rectangle is integrable when its discontinuity set is null ([[thm-lebesgue-criterion-in-rn]]), and the indicator of a Jordan measurable set integrates to its Jordan content ([[thm-jordan-content-and-indicator-integrability]]).

## Proof

**Proof technique:** direct.

1.1 Extend the zero extension on $Q_i$ further by zero to $Q$. Cut $Q$ at the lower and upper endpoint of $Q_i$ in each coordinate. The strict containment in [L1] and nondegeneracy of $Q_i$ make every cut strictly interior. On every added nondegenerate subrectangle the restriction is zero away from the finitely many coordinate faces of $Q_i$; only shared boundary points may retain nonzero values. [L1, given]

2.1 Every bounded piece of a coordinate hyperplane has content zero: subdivide its bounded $(m-1)$-dimensional coordinate ranges into cubes of side at most $1/\iota(N)$, and thicken the fixed coordinate by the same amount. The number of cubes grows at most as a fixed multiple of $\iota(N)^{m-1}$, so their total $m$-volume is at most a fixed multiple of $1/\iota(N)$, which can be made arbitrarily small ([[def-null-and-content-zero-in-rn]], [[cor-archimedean-reciprocal]]). Finite unions preserve this estimate. Thus the exceptional face set $H$ from step 1.1 is Jordan measurable with content zero, and [L3] gives $\int 1_H=0$. [step 1.1, L3]

3.1 On each added subrectangle the extended function is bounded and is zero off $H$, so its discontinuities lie in the null set $H$. It is integrable by [L3]. If $|f|\le B$, then $|h|\le B1_H$; monotonicity and the absolute-value estimate in [L2] give $\left|\int h\right|\le\int|h|\le B\int1_H=0$. Hence every added subrectangle has integral $0$. [step 1.1, step 2.1, L2, L3]

4.1 Repeated coordinate-slice additivity [L2] now says that the extension is integrable on $Q$ exactly when it is integrable on $Q_i$, and its integral equals the $Q_i$-integral because every added integral is $0$. Applying this to $i=1,2$ gives the same integrability decision and value in both rectangles.   [step 3.1, L2, given] ∎
