---
id: fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics
kind: false-statement
title: "FALSE: all quasi-geodesics in all metric spaces stay uniformly close to geodesics"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quasi-geodesic-and-quasi-geodesic-metric-space, thm-morse-stability-of-quasi-geodesics]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.1"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
---

## Statement

**False claim:** in every metric space, quasi-geodesics stay within a uniform
distance of geodesics with the same endpoints.

## Facts & Assumptions

**Given:** In the Euclidean plane, for each $n \ge 1$, the broken path from $(0,0)$ to $(0,n)$ to $(n,n)$ to $(n,0)$.

[L1] Morse stability holds in hyperbolic spaces
([[thm-morse-stability-of-quasi-geodesics]]).

[A1] Each broken path above is a uniform quasi-geodesic in $\mathbb R^2$, while
its midpoint on the top horizontal segment is distance $n$ from the straight
geodesic segment joining $(0,0)$ to $(n,0)$.

## Refutation

**Proof technique:** direct.

1.1 The witness family from [A1] consists of quasi-geodesics in the Euclidean plane with fixed endpoints. [given, A1]

2.1 Their distance from the corresponding geodesic segments is unbounded as $n \to \infty$, so no uniform fellow-traveling constant exists. Hence the global claim is false, and [L1] is genuinely a hyperbolic-space theorem. [A1, L1, step 1.1] ∎ 