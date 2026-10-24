---
id: fs-all-quasi-geodesics-in-all-metric-spaces-stay-close-to-geodesics
kind: false-statement
title: "FALSE: all quasi-geodesics in all metric spaces stay uniformly close to geodesics"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quasi-geodesic-and-quasi-geodesic-metric-space]
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Brian H. Bowditch, A course on geometric group theory, Section 2.1"
      url: "https://www.math.ucdavis.edu/~kapovich/280-2009/bhb-ggtcourse.pdf"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-06-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Statement

**False claim:** in every metric space, quasi-geodesics stay within a uniform
distance of geodesics with the same endpoints.

## Facts & Assumptions

**Given:** In the Euclidean plane, for each $n \ge 1$, the broken path from $(0,0)$ to $(0,n)$ to $(n,n)$ to $(n,0)$.

[A1] The straight geodesic between the path endpoints is the horizontal segment from $(0,0)$ to $(n,0)$.

## Refutation

**Proof technique:** direct.

1.1 Parametrize each broken path by arclength. For two points on the same side of the path, the subpath length equals their Euclidean distance. For points on adjacent sides, the subpath has two perpendicular legs, so its length is at most $\sqrt2$ times their distance. For points on the two vertical sides, their distance is at least $n$ while their subpath length is at most $3n$. Thus every path is a $(3,0)$-quasi-geodesic under the definition, with constants independent of $n$. The midpoint $(n/2,n)$ of the top side is distance $n$ from the straight segment between the endpoints. [given, A1, algebra]

2.1 Their distance from the corresponding geodesic segments is unbounded as $n \to \infty$, so no uniform fellow-traveling constant exists. Hence the global claim is false. [A1, step 1.1] ∎
