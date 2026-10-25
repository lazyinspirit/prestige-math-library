---
id: ex-parabola-graph-has-content-zero
kind: example
title: "The parabola segment $\\{(x,x^2):0\\leq x\\leq1\\}$ has content zero in $\\mathbb{R}^2$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-graphs-of-continuous-functions-have-content-zero, thm-algebra-of-continuous-functions, def-integer-power, def-canonical-natural, lem-of-naturals-positive, def-null-and-content-zero-in-rn]
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
    - title: "A. Cañez, multivariable calculus notes"
      url: "https://www.math.cmu.edu/~gautam/sj/teaching/2017-18/268-multid-calc/pdfs/canez-calculus.pdf"
pipeline_run: null
---

## Example

The parabola segment $\{(x,x^2):0\le x\le1\}$ has content zero in $\mathbb R^2$.

## Facts & Assumptions

**Given:** $f(x)=x^2$ on $[0,1]$.

[L1] Polynomials are continuous ([[thm-algebra-of-continuous-functions]], [[def-integer-power]]).

[L2] Graphs of continuous functions on closed rectangles have content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]).

## Verification

**Proof technique:** direct.

1.1 Apply [L2] to the continuous polynomial in [L1].  [L1, L2]

1.2 Directly, divide $[0,1]$ into $N\ge1$ equal subintervals. On each one, $|x^2-y^2|\le2/\iota(N)$, so four squares of side $1/\iota(N)$ cover that graph piece. The resulting finite cover has total area at most $4/\iota(N)$, which can be made arbitrarily small. [L1, given]

2.1 Both arguments establish content zero.  [step 1.1, step 1.2] ∎
