---
id: ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere
kind: example
title: "$x^3+3xy^2+i(y^3+3x^2y)$ is complex differentiable exactly on the coordinate axes but holomorphic nowhere"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-continuous-partials-and-cauchy-riemann-imply-holomorphic, thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Howell and Mathews, Complex Analysis, Example 3.2.9"
      url: "https://complexanalysis.org/web/sec_cauchy-riemann.html"
pipeline_run: frontier-12
---

## Example

Define
$$f(x+iy)=x^3+3xy^2+i(y^3+3x^2y).$$
Then $f$ is complex differentiable exactly at the points of the two coordinate axes, but it is holomorphic on no nonempty open set and hence holomorphic at no point.

## Facts & Assumptions
**Given:** The polynomial components $u=x^3+3xy^2$ and $v=y^3+3x^2y$ on $\mathbb R^2$.

[L1] If the four first partial derivatives exist near a point, are continuous at the point, and satisfy the Cauchy–Riemann equations there, then the function is complex differentiable at that point ([[thm-continuous-partials-and-cauchy-riemann-imply-holomorphic]]).

[L2] Complex differentiability implies real total differentiability and the Cauchy–Riemann equations ([[thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann]]).

## Verification

**Proof technique:** direct computation.

1.1 The polynomial partials are continuous everywhere and satisfy $$u_x=3x^2+3y^2=v_y,\qquad u_y=6xy=v_x.$$ [algebra]

2.1 The second Cauchy–Riemann equation is $u_y=-v_x$, so by step 1.1 it holds exactly when $6xy=-6xy$, equivalently $xy=0$. [step 1.1, algebra]

3.1 At every point with $xy=0$, [L1] and steps 1.1–2.1 give complex differentiability. At every point with $xy\ne0$, [L2] and step 2.1 rule it out. Thus the differentiability locus is exactly the union of the coordinate axes. [step 1.1, step 2.1, L1, L2]

4.1 Every open ball about any point of either axis contains a point with both coordinates nonzero: for radius $r>0$, a sufficiently small displacement in both coordinate directions supplies one. Every open ball about a point off the axes already contains its centre, where differentiability fails. Hence no nonempty open set consists entirely of differentiability points. [step 3.1]

5.1 Holomorphy at a point requires complex differentiability throughout some open neighbourhood there. Step 4.1 therefore shows that $f$ is holomorphic nowhere, despite being complex differentiable at every point of both axes. [step 3.1, step 4.1, L1] ∎
