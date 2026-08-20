---
id: ex-unit-disc-has-jordan-content-pi
kind: example
title: "The unit disc has Jordan content $\\pi$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-disc-jordan-content-is-pi-r-squared, prop-riemann-graph-area-equals-jordan-content]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. F. Trench, Introduction to Real Analysis, §§7.2–7.3"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/TRENCH_REAL_ANALYSIS.PDF"
pipeline_run: null
---

## Example

The unit disc $D_1=\{(x,y):x^2+y^2\le1\}$ is Jordan measurable and has content $\pi$.

## Facts & Assumptions

**Given:** The closed disc of radius $1$.

[L1] A closed disc of radius $r\ge0$ has Jordan content $\pi r^2$ ([[cor-disc-jordan-content-is-pi-r-squared]]).

[L2] A region between continuous graphs is compact and Jordan measurable, and its graph area equals its Jordan content ([[prop-riemann-graph-area-equals-jordan-content]]).

## Verification

**Proof technique:** direct.

1.1 Substitute $r=1$ in [L1] to obtain $\operatorname{cont}(D_1)=\pi$. [L1, algebra]

2.1 The same disc lies between $y=-\sqrt{1-x^2}$ and $y=\sqrt{1-x^2}$ on $[-1,1]$, so [L2] identifies that value with the established graph-area convention, including the endpoint sections of height zero. [step 1.1, L2] ∎
