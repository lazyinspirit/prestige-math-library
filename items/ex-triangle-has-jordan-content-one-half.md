---
id: ex-triangle-has-jordan-content-one-half
kind: example
title: "The right triangle $\\{(x,y)\\in[0,1]^2:x+y\\leq1\\}$ has Jordan content $1/2$"
status: published
origin: session
deps: [def-jordan-inner-and-outer-content, thm-jordan-content-and-indicator-integrability, thm-jordan-boundary-criterion, thm-graphs-of-continuous-functions-have-content-zero, def-multidimensional-grid-partition, def-multidimensional-rectangle-and-volume, def-finite-sum, lem-finite-sum-laws, def-canonical-natural, lem-of-naturals-positive, thm-induction-principle]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
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

## Example

The triangle $T=\{(x,y)\in[0,1]^2:x+y\le1\}$ is Jordan measurable and has content $1/2$.

## Facts & Assumptions

**Given:** Uniform $N$-by-$N$ grids with $N\ge1$.

[L1] Jordan content equals the indicator integral ([[thm-jordan-content-and-indicator-integrability]]).

[L2] Each of the three edges is a continuous graph, after exchanging coordinates for the vertical edge, and their finite union has content zero ([[thm-graphs-of-continuous-functions-have-content-zero]], [[thm-jordan-boundary-criterion]]).

## Verification

**Proof technique:** induction.

1.1 Index the grid cells by $0\le i,j<N$. A cell is contained in $T$ when $i+j\le N-2$, while it meets $T$ when $i+j\le N$. Thus the lower staircase has $N(N-1)/2$ cells and the upper staircase has $(N^2+3N-2)/2$ cells.  [given]

1.2 Induction gives $\sum_{k<N}\iota(k)=\iota(N)\iota(N-1)/2$. Hence the lower area is $(N-1)/(2N)$, the upper area is $1/2+3/(2N)-1/N^2$, and their gap is $2/N-1/N^2<2/N$. Both areas tend to $1/2$.   [base, ih, given]

2.1 Steps 1.1 and 1.2 give inscribed and covering grid approximations converging to $1/2$, so the inner and outer contents agree at $1/2$. Alternatively, [L2] gives Jordan measurability from the boundary criterion. In either route, [L1] identifies the common value with the indicator integral.  [step 1.1, step 1.2, L1, L2, discharge-induction] ∎
