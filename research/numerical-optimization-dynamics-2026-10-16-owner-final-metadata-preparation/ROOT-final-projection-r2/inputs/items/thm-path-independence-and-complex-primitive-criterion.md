---
id: thm-path-independence-and-complex-primitive-criterion
kind: theorem
title: "For a continuous function on a complex domain, endpoint independence, zero closed-contour integrals, and existence of a primitive are equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complex-domain, thm-open-connected-subsets-of-rn-are-polygonally-connected, def-polygonal-path-and-polygonal-connectedness, prop-reversal-and-concatenation-of-complex-line-integrals, thm-riemann-stieltjes-and-parametric-contour-integrals-agree, thm-fundamental-theorem-for-complex-line-integrals, thm-conservative-path-independent-and-zero-loop-equivalence]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "E. Stein and R. Shakarchi, Complex Analysis, Ch. 1, §3"
      url: "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf"
pipeline_run: null
---

## Statement

Let $U$ be a complex domain and $f:U\to\mathbb C$ continuous. The following are equivalent:

1. $f$ has a primitive on $U$;
2. the integral of $f$ along rectifiable contours in $U$ depends only on the endpoints;
3. the integral of $f$ around every closed rectifiable contour in $U$ is $0$.

## Facts & Assumptions

**Given:** A complex domain $U$ and a continuous $f:U\to\mathbb C$.

[L1] A complex domain is a nonempty connected open subset of $\mathbb C$ ([[def-complex-domain]]).

[L2] Every connected open subset of $\mathbb R^n$ is polygonally connected, with polygonal paths as in their definition ([[thm-open-connected-subsets-of-rn-are-polygonally-connected]], [[def-polygonal-path-and-polygonal-connectedness]]).

[L3] Complex contour integrals change sign under reversal and add under concatenation ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[L4] On piecewise-$C^1$ paths, the rectifiable integral agrees with the parametric integral ([[thm-riemann-stieltjes-and-parametric-contour-integrals-agree]]).

[L5] Let $F$ be a primitive of a continuous function $f$ on an open set containing the trace of a rectifiable contour $\gamma:[a,b]\to\mathbb C$. If $F'=f$ is continuous, then $\int_\gamma f(z)\,dz=F(\gamma(b))-F(\gamma(a))$ ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L6] For real vector fields, conservativity, path independence, and zero closed-loop integrals are equivalent under the published open and path-connected hypotheses ([[thm-conservative-path-independent-and-zero-loop-equivalence]]).

## Proof

**Proof technique:** constructive.

1.1 If $f$ has a primitive $F$ on $U$, then $F'=f$ is continuous by the Given, so [L5] applies to every rectifiable contour in $U$ and gives endpoint independence; endpoint independence makes every closed-contour integral zero because the constant contour with the same endpoint has integral $0$. [given, L5]

1.2 Assume every closed-contour integral is zero. By [L1] and [L2], fix a basepoint $z_0\in U$; for each $z\in U$ at least one polygonal path in $U$ runs from $z_0$ to $z$. Any two such paths carry the same integral: concatenating one with the reversal of the other is a closed contour, whose integral is by [L3] the difference of the two, and the closed-loop hypothesis makes that difference $0$. [L1, L2, L3]

2.1 So for each $z\in U$ there is a unique complex number shared by the integrals of $f$ along all polygonal paths in $U$ from $z_0$ to $z$; define $F(z)$ to be that number. This specifies $F$ uniquely from the data of step 1.2, with no path selected and no choice principle used. [step 1.2, construct]

3.1 For sufficiently small $h$, the segment from $z$ to $z+h$ lies in $U$. By [L3] and [L4], $F(z+h)-F(z)=\int_0^1 f(z+th)h\,dt$, so division by $h\ne0$ gives an average tending to $f(z)$ by continuity. Thus $F'(z)=f(z)$. [step 2.1, L3, L4]

4.1 The construction proves that zero closed integrals imply a primitive, completing both directions of the equivalence. On piecewise-$C^1$ contours the componentwise statement agrees with the real vector-field equivalence [L6], whose open and path-connected hypotheses hold by [L1] and [L2]. [step 1.1, step 3.1, L1, L2, L6, discharge-construct] ∎
