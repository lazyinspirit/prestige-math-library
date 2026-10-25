---
id: cex-straight-line-continuity-tests-do-not-imply-continuity
kind: counterexample
title: "$x^2y/(x^4+y^2)$ tends to zero on every line through the origin but not along $y=x^2$"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-valued-functions-limits-and-continuity, def-metric-continuity, def-vector-valued-derivative-and-integral]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Knisley, Multivariable Calculus, §2.2"
      url: "https://faculty.etsu.edu/knisleyj/multicalc/Chap2/Chap2-2/2-23.html"
pipeline_run: null
---

## Statement refuted

If a function tends to its proposed value along every straight line through a point, then it is continuous at that point.

## Facts & Assumptions

**Given:** $f(0,0)=0$ and $f(x,y)=x^2y/(x^4+y^2)$ away from the origin.

[L1] A vector-valued map is continuous at $a$ when its limit at $a$ equals its value there ([[def-vector-valued-functions-limits-and-continuity]]).

## Counterexample

**Proof technique:** direct.

1.1 On a line $(x,y)=(ta,tb)$ with $b\ne0$, $f(ta,tb)=t a^2b/(t^2a^4+b^2)\to0$; for $b=0$ the restriction is identically zero. [L1]

2.1 Along the parabola $(x,y)=(t,t^2)$ with $t\ne0$, $f(t,t^2)=1/2$. [step 1.1, algebra]

3.1 The nonlinear path tends to the origin but its values do not tend to $0$, so [L1] shows that $f$ is not continuous there despite all straight-line tests. [step 1.1, step 2.1] ∎
