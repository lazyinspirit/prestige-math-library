---
id: ex-line-segment-scalar-and-vector-line-integrals
kind: example
title: "Scalar and vector line integrals along an affine line segment"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Example 9.2.18"
      url: "https://www.jirka.org/ra/html/sec_pathintegral.html"
pipeline_run: null
---

## Example

For $p,q\in\mathbb R^n$, let $\gamma(t)=(1-t)p+tq$ on $[0,1]$. Then

$$\int_\gamma f\,ds=\lVert q-p\rVert_2\int_0^1f((1-t)p+tq)\,dt,$$

$$\int_\gamma F\cdot d\mathbf r=\int_0^1\langle F((1-t)p+tq),q-p\rangle\,dt.$$

## Facts & Assumptions
**Given:** The affine path and continuous fields in the Example.

[L1] On a $C^1$ path, scalar and vector line integrals use respectively the integrands $f(\gamma(t))\lVert\gamma'(t)\rVert_2$ and $\langle F(\gamma(t)),\gamma'(t)\rangle$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).



## Verification

**Proof technique:** direct.

1.1 Differentiation gives $\gamma'(t)=q-p$, so the speed is the constant $\lVert q-p\rVert_2$. [given, algebra]

2.1 Substitute step 1.1 and the formula for $\gamma(t)$ into the scalar clause of [L1]. Pulling out the constant speed gives the first displayed formula. [step 1.1, L1, algebra]

2.2 Substitute step 1.1 into the vector clause of [L1] to obtain the second displayed formula. [step 1.1, L1]

3.1 If $p=q$, then $q-p=0$ and $\lVert q-p\rVert_2=0$, so both formulas give zero. Thus the constant-segment case is included. [step 2.1, step 2.2, algebra] ∎
