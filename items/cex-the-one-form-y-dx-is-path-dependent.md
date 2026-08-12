---
id: cex-the-one-form-y-dx-is-path-dependent
kind: counterexample
title: "The vector field (y,0) gives different integrals along two paths with the same endpoints"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-line-integrals-under-reversal-and-concatenation, thm-path-independence-iff-zero-closed-loop-integrals, lem-derivative-of-a-power, thm-newton-leibniz-with-interior-derivative]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 9.3.1"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
pipeline_run: null
---

## Statement refuted

The field $F(x,y)=(y,0)$ has the same vector line integral along every path from $(0,0)$ to $(1,0)$.

## Facts & Assumptions
**Given:** The paths $\alpha(t)=(t,0)$ and $\beta(t)=(t,t(1-t))$ on $[0,1]$.

[L1] A vector line integral is the integral of $\langle F(\gamma(t)),\gamma'(t)\rangle$ on a $C^1$ path ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[L2] Vector line integrals add under concatenation and negate under reversal ([[thm-line-integrals-under-reversal-and-concatenation]]).

[L3] Path independence is equivalent to zero integral around every closed piecewise-$C^1$ path on a piecewise-$C^1$ path-connected domain ([[thm-path-independence-iff-zero-closed-loop-integrals]]).

[L4] The power rule and Newton-Leibniz evaluate polynomial integrals by endpoint increments ([[lem-derivative-of-a-power]], [[thm-newton-leibniz-with-interior-derivative]]).



## Counterexample

**Proof technique:** constructive.

1.1 Both paths run from $(0,0)$ to $(1,0)$. Along $\alpha$, the first component $y$ is zero, so [L1] gives $\int_\alpha F\cdot d\mathbf r=0$. [given, L1, algebra, construct]

1.2 Along $\beta$, one has $F(\beta(t))=(t(1-t),0)$ and $\beta'(t)=(1,1-2t)$. Hence [L1] and [L4] give $$\int_\beta F\cdot d\mathbf r=\int_0^1(t-t^2)\,dt=\frac16.$$ [given, L1, L4, algebra]

2.1 The two values differ, so the field is not path-independent. [step 1.1, step 1.2]

3.1 The concatenation $\alpha*\beta^-$ is closed, and [L2] gives its integral as $0-1/6=-1/6$. This is the corresponding nonzero-loop failure in [L3]. [step 1.1, step 1.2, L2, L3, discharge-construct] ∎
