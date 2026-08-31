---
id: fs-every-boundary-point-of-a-radius-one-power-series-is-singular
kind: false-statement
title: "FALSE: every boundary point of a radius-one power series is singular"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-the-geometric-series-has-only-one-singular-boundary-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  references:
    - title: "Curtis T. McMullen, Riemann Surfaces, Ch. 4 Example 2"
      url: "https://abel.math.harvard.edu/~ctm/math213b/home/course/course.pdf"
---

## Statement

**False claim.** Every boundary point of the circle of convergence of a
radius-one power series is singular.

## Facts & Assumptions

**Given:** The geometric-series boundary example.

[L1] The geometric series has radius $1$, but only the boundary point $1$ is
singular on the unit circle
([[ex-the-geometric-series-has-only-one-singular-boundary-point]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] supplies a radius-one power series with boundary points other than $1$ that are regular. [L1]

2.1 Therefore the universal claim is false. [step 1.1] ∎
