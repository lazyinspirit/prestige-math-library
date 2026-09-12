---
id: "ex-degree-of-a-reflection-of-a-sphere"
kind: "example"
title: "Degree of a reflection of a sphere"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism","def-induced-boundary-orientation"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, degree examples following Theorem 5.4.1
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Example

For $n\ge1$, give $S^n=\partial D^{n+1}$ its outward-normal-first orientation. The reflection
$$R(x_0,x_1,\ldots,x_n)=(-x_0,x_1,\ldots,x_n)$$
restricts to an orientation-reversing diffeomorphism of $S^n$ and has degree $-1$.

## Facts & Assumptions

**Given:** The oriented sphere and reflection in the example.

[F1] [[def-induced-boundary-orientation]] characterizes a positive tangent basis $(v_1,\ldots,v_n)$ at $x$ by positivity of the ambient frame $(x,v_1,\ldots,v_n)$.

[F2] [[prop-degree-of-an-orientation-preserving-or-reversing-diffeomorphism]] gives degree $-1$ to an orientation-reversing diffeomorphism.

## Verification

1.1 The ambient linear map $R$ is orthogonal, has determinant $-1$, preserves the unit sphere, and satisfies $R^{-1}=R$. Hence its restriction is a smooth diffeomorphism. If $(v_1,\ldots,v_n)$ is a positive tangent basis at $x$, then [F1] makes $(x,v_1,\ldots,v_n)$ positive in $\mathbb R^{n+1}$. The target outward-normal frame is $$(Rx,Rv_1,\ldots,Rv_n)=R(x,v_1,\ldots,v_n),$$ which has the opposite ambient orientation because $\det R=-1$. Thus the tangent image basis is negative at $Rx$. [F1, given, algebra]

2.1 Therefore the sphere reflection reverses orientation, and [F2] gives $\deg(R)=-1$. For $n=1$ this is the ordinary reflection of a circle across an axis. Points on the reflecting equator are fixed but still have negative tangent sign, so fixed points do not create a degenerate exception. The disconnected case $S^0$ is excluded by $n\ge1$; there are no manifold-boundary endpoints, and the pointwise determinant calculation makes no choices. [F2, step 1.1] ∎
