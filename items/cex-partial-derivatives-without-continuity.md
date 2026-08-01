---
id: cex-partial-derivatives-without-continuity
kind: counterexample
title: "$xy/(x^2+y^2)$ has both partial derivatives at the origin but is discontinuous there"
status: draft
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-directional-and-partial-derivatives, def-vector-valued-functions-limits-and-continuity, def-metric-continuity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §8.3"
      url: "https://www.jirka.org/ra/html/sec_svtheder.html"
pipeline_run: null
---

## Statement refuted

If both partial derivatives of a real function exist at a point, then the function is continuous there.

## Facts & Assumptions

**Given:** The function $f(0,0)=0$ and $f(x,y)=xy/(x^2+y^2)$ when $(x,y)\ne(0,0)$.

[L1] Partial derivatives are directional derivatives in the standard basis directions ([[def-directional-and-partial-derivatives]]).

[L2] A map is **continuous at $a$** if its values tend to $f(a)$ as the input tends to $a$ ([[def-metric-continuity]]).

## Counterexample

**Proof technique:** direct.

1.1 Both axis restrictions of $f$ are identically zero, so [L1] gives $\partial_xf(0,0)=\partial_yf(0,0)=0$. [L1, L2]

2.1 On the punctured diagonal $(t,t)$, $f(t,t)=1/2$. [step 1.1, L2, algebra]

3.1 As $(t,t)\to(0,0)$ but the values in step 2.1 do not tend to $f(0,0)=0$, [L2] shows that $f$ is discontinuous at the origin. [step 1.1, step 2.1] ∎
