---
id: thm-continuous-functions-on-compact-jordan-sets-are-integrable
kind: theorem
title: "A continuous real function on a compact Jordan measurable set is Riemann integrable over that set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-riemann-integral-over-a-jordan-set, lem-jordan-set-integral-well-defined, thm-jordan-boundary-criterion, thm-lebesgue-criterion-in-rn, def-metric-continuity, def-metric-interior-closure-boundary, def-metric-compactness, thm-extreme-value-metric, def-bounded-set]
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

Every continuous real function on a compact Jordan measurable set $E\subseteq\mathbb R^m$ is Riemann integrable over $E$.

## Facts & Assumptions

**Given:** Compact Jordan measurable $E$ and continuous $f:E\to\mathbb R$.

[L1] A continuous real function on a nonempty compact metric space is bounded ([[thm-extreme-value-metric]], [[def-bounded-set]]).

[L2] The boundary of $E$ is null ([[thm-jordan-boundary-criterion]]).

[L3] A bounded function on a rectangle is integrable exactly when its discontinuity set is null ([[thm-lebesgue-criterion-in-rn]]).

## Proof

**Proof technique:** direct.

1.1 If $E=\varnothing$, its zero extension is identically zero and the conclusion is immediate. Otherwise [L1] makes $f$ bounded. Choose a bounding rectangle and form its zero extension as in [[def-riemann-integral-over-a-jordan-set]].  [L1, choose]

2.1 The extension is continuous at every point of the interior of $E$, by continuity of $f$, and at every point outside the closure of $E$, because it is locally zero. Its discontinuities are therefore contained in $\partial E$.   [step 1.1, given]

3.1 The containing boundary is null by [L2], so subset closure and [L3] make the extension integrable. Bounding-rectangle independence is [[lem-jordan-set-integral-well-defined]].  [step 2.1, L2, L3] ∎
