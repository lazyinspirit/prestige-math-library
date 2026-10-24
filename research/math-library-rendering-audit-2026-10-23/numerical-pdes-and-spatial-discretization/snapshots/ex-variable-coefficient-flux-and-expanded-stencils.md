---
id: ex-variable-coefficient-flux-and-expanded-stencils
kind: example
title: Flux and expanded variable-coefficient stencils differ by a second-order term
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-rectangular-grid-and-dirichlet-flux-stencil]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Benjamin Seibold, MIT 18.336 Lecture 6: General Linear Second Order Equation"
      url: "https://ocw.mit.edu/courses/18-336-numerical-methods-for-partial-differential-equations-spring-2009/c395389a94e1177997aa6364b24852d8_MIT18_336S09_lec6.pdf"
      locator: "Complete PDF, pp. 1–3: the variable-conductivity equation, expanded form, midpoint flux form, and their consistency/error discussion."
verification:
  precheck: pass
---

## Example

On $\Omega=(0,1)^2$, take $a(x,y)=1+x^2$ and $u(x,y)=x^2$. Then $\partial_x(a\partial_xu)=2+6x^2$ and the $y$-flux is zero. Let $D_h^\mathrm{flux}$ be the midpoint face-flux difference in the positive $x$ direction, and let $D_h^\mathrm{expanded}=a(x_i,y_j)\delta_{x,h}^2u+a_x(x_i,y_j)D_{x,h}^0u$, where $\delta_{x,h}^2$ is the centered second difference and $D_{x,h}^0$ is the centered first difference. At each interior node,
$$
D_h^\mathrm{flux}u-D_h^\mathrm{expanded}u=h_x^2/2.
$$
Thus the two discrete operators are distinct even though both approximate the same continuous divergence.

## Facts & Assumptions

**Given:** The midpoint face-flux convention of [[def-rectangular-grid-and-dirichlet-flux-stencil]], $a(x,y)=1+x^2$, $u(x,y)=x^2$, and a rectangular uniform grid on $(0,1)^2$.

[F1] [[def-rectangular-grid-and-dirichlet-flux-stencil]]: the positive $x$-flux at a face is the midpoint value of $a$ times the forward or backward difference of $u$ across that face.

## Verification

1.1 At $x=x_i$ and $h=h_x$, the two midpoint coefficients are $a_+=1+(x+h/2)^2$ and $a_-=1+(x-h/2)^2$, while the one-sided differences of $x^2$ are $D_+u=2x+h$ and $D_-u=2x-h$. Therefore $D_h^\mathrm{flux}u=(a_+(2x+h)-a_-(2x-h))/h=2+6x^2+h^2/2$. [given, F1, algebra]

2.1 The centered differences are $\delta_{x,h}^2u=2$ and $D_{x,h}^0u=2x$, while $a(x,y)=1+x^2$ and $a_x(x,y)=2x$. Hence $D_h^\mathrm{expanded}u=2(1+x^2)+(2x)(2x)=2+6x^2$, so subtracting from step 1.1 gives exactly $h_x^2/2$. [F1, step 1.1, algebra] ∎
