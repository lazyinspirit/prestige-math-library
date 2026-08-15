---
id: thm-path-independence-and-complex-primitive-criterion
kind: theorem
title: "For a continuous function on a complex domain, endpoint independence, zero closed-contour integrals, and existence of a primitive are equivalent"
status: draft
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

[L5] A primitive gives the endpoint formula on every rectifiable contour ([[thm-fundamental-theorem-for-complex-line-integrals]]).

[L6] For real vector fields, conservativity, path independence, and zero closed-loop integrals are equivalent under the published open and path-connected hypotheses ([[thm-conservative-path-independent-and-zero-loop-equivalence]]).

## Proof

**Proof technique:** constructive.

1.1 If $f$ has a primitive, [L5] gives endpoint independence; endpoint independence makes every closed-contour integral zero because the constant contour with the same endpoint has integral $0$. [L5]

1.2 Assume every closed-contour integral is zero. By [L1] and [L2], fix a basepoint $z_0\in U$ and, for each $z\in U$, a polygonal path from $z_0$ to $z$; define $F(z)$ as its integral. [L1, L2, choose, construct]

2.1 If two such paths end at $z$, concatenate one with the reversal of the other. By [L3] its integral is their difference, and the closed-loop hypothesis makes that difference $0$, so $F$ is well-defined. [step 1.2, L3]

3.1 For sufficiently small $h$, the segment from $z$ to $z+h$ lies in $U$. By [L3] and [L4], $F(z+h)-F(z)=\int_0^1 f(z+th)h\,dt$, so division by $h\ne0$ gives an average tending to $f(z)$ by continuity. Thus $F'(z)=f(z)$. [step 2.1, L3, L4]

4.1 The construction proves that zero closed integrals imply a primitive, completing both directions of the equivalence. On piecewise-$C^1$ contours the componentwise statement agrees with the real vector-field equivalence [L6], whose open and path-connected hypotheses hold by [L1] and [L2]. [step 1.1, step 3.1, L1, L2, L6, discharge-construct] ∎
