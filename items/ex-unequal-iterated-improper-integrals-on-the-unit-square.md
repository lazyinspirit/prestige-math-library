---
id: ex-unequal-iterated-improper-integrals-on-the-unit-square
kind: example
title: "Two iterated improper integrals over the unit square are $\\pi/4$ and $-\\pi/4$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-improper-multiple-integral-and-absolute-convergence, thm-absolute-improper-multiple-integral-by-exhaustion, thm-ftc-second-part, thm-principal-inverse-tangent-calculus]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

On $(0,1)^2$, let

$$f(x,y):=\frac{x^2-y^2}{(x^2+y^2)^2}.$$

Both iterated improper integrals exist, but

$$\int_0^1\left(\int_0^1f(x,y)\,dy\right)dx=\frac\pi4,\qquad \int_0^1\left(\int_0^1f(x,y)\,dx\right)dy=-\frac\pi4.$$

Moreover, two compact Jordan exhaustions give these different limiting values, so $f$ has no exhaustion-independent improper double integral.

## Facts & Assumptions

**Given:** The function $f$ on the open unit square.

[L1] The principal inverse tangent satisfies $(\arctan u)'=1/(1+u^2)$ and $\arctan u=\int_0^u(1+t^2)^{-1}\,dt$ ([[thm-principal-inverse-tangent-calculus]]).

[L2] A locally Riemann-integrable signed function is improperly integrable precisely when the improper integral of its absolute value is finite ([[def-improper-multiple-integral-and-absolute-convergence]]).

[L3] Absolute improper convergence makes every compact Jordan exhaustion converge to the same signed value ([[thm-absolute-improper-multiple-integral-by-exhaustion]]).

[L4] If $G'=h$ on a compact interval and $h$ is integrable, then $\int h$ is the endpoint difference of $G$ ([[thm-ftc-second-part]]).

## Verification

**Proof technique:** direct.

1.1 Direct differentiation gives $f(x,y)=\partial_y\bigl(y/(x^2+y^2)\bigr)=-\partial_x\bigl(x/(x^2+y^2)\bigr)$. [algebra]

2.1 Integrating the first identity in $y$ gives $1/(1+x^2)$, and integrating the second in $x$ gives $-1/(1+y^2)$; [L4] and [L1] therefore give the two iterated values $\pi/4$ and $-\pi/4$. [step 1.1, L1, L4]

3.1 On $[a,u]\times[b,v]\subset(0,1)^2$, step 1.1 gives the double integral $\arctan(u/v)-\arctan(a/v)-\arctan(u/b)+\arctan(a/b)$. Taking $u_j=v_j=1-1/(j+2)$ and either $(a_j,b_j)=((j+2)^{-2},(j+2)^{-1})$ or the swapped pair produces nested compact Jordan exhaustions with limits $-\pi/4$ and $\pi/4$. By [L3], and hence by [L2], no exhaustion-independent signed improper integral exists. [step 1.1, L1, L2, L3] ∎
