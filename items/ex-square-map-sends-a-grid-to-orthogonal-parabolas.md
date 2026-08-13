---
id: ex-square-map-sends-a-grid-to-orthogonal-parabolas
kind: example
title: "The square map sends the Cartesian grid lines off the coordinate axes to two orthogonal families of parabolas"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-nonzero-complex-derivative-iff-oriented-conformal]
aliases: []
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Howell and Mathews, Complex Analysis, §3.6"
      url: "https://complexanalysis.org/web/sec_conformal-mappings.html"
pipeline_run: frontier-12
---

## Example

Under $w=z^2$, the vertical grid lines $x=c$ with $c\ne0$ and the horizontal grid lines $y=d$ with $d\ne0$ become two families of parabolic arcs, opening in opposite directions. The two coordinate axes are the exceptions: each maps onto a ray rather than a parabola. At the image of every grid crossing $z\ne0$, the tangent directions of the two curves through it remain orthogonal. The origin is the critical point where this conformality conclusion is unavailable.

## Facts & Assumptions
**Given:** $z=x+iy$, $w=u+iv=z^2$, and real constants $c,d$ specifying the lines $x=c$ and $y=d$.

[L1] Complex polynomials are entire, and the derivative of $z^2$ is $2z$ ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L2] A real-differentiable complex map is orientation-preserving conformal at a point exactly when it is complex differentiable there with nonzero derivative ([[thm-nonzero-complex-derivative-iff-oriented-conformal]]).

## Verification

**Proof technique:** cases and direct computation.

1.1 Expanding gives $u=x^2-y^2$ and $v=2xy$. On $x=c$, $(u,v)=(c^2-y^2,2cy)$. [algebra]

1.2 At a crossing $z=c+id\ne0$, [L1] gives $f'(z)=2z\ne0$. Hence [L2] says the real derivative is an oriented similarity, so it carries the perpendicular vertical and horizontal tangent directions to perpendicular nonzero tangent directions of the two image curves. [L1, L2]

2.1 If $c\ne0$, eliminating $y=v/(2c)$ gives $u=c^2-v^2/(4c^2)$, a left-opening parabola. If $c=0$, the image is $(u,v)=(-y^2,0)$, the nonpositive real ray, which is the degenerate member of that family. [step 1.1, assume-case nonzero, assume-case zero, algebra]

2.2 On $y=d$, $(u,v)=(x^2-d^2,2dx)$. If $d\ne0$, eliminating $x=v/(2d)$ gives $u=v^2/(4d^2)-d^2$, a right-opening parabola. If $d=0$, the image is $(u,v)=(x^2,0)$, the nonnegative real ray. [step 1.1, assume-case nonzero, assume-case zero, algebra]

3.1 At $z=0$, the derivative is zero, so [L2] gives no conformality conclusion; indeed the two degenerate rays meet there. Steps 2.1 and 2.2 cover zero and nonzero grid parameters, and step 1.2 covers exactly the noncritical crossings. [step 2.1, step 2.2, step 1.2, L1, L2, cases-exhaustive] ∎
