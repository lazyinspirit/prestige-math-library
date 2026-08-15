---
id: ex-orthogonal-projection-onto-a-plane-and-nearest-point
kind: example
title: "Projection onto a plane in $\\mathbb R^3$ and the nearest-point calculation"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [prop-orthogonal-projection-formula-and-linearity, thm-orthogonal-projection-is-the-unique-nearest-point, prop-standard-coordinate-inner-products]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $W=\{(x,y,z)\in\mathbb R^3:x+y+z=0\}$ and $v=(1,2,3)$. Then

$$P_Wv=(-1,0,1),$$

and for every $q\in W$,

$$\lVert v-q\rVert^2=12+\lVert(-1,0,1)-q\rVert^2.$$

Thus $(-1,0,1)$ is the unique nearest point of $W$ to $v$.

## Facts & Assumptions

**Given:** The displayed plane $W$ and vector $v$.

[L1] An orthonormal basis $(u_i)$ of $W$ gives $P_Wv=\sum_i\langle v,u_i\rangle u_i$ ([[prop-orthogonal-projection-formula-and-linearity]]).

[L2] Orthogonal projection is the unique nearest point in the subspace ([[thm-orthogonal-projection-is-the-unique-nearest-point]]).

[L3] The standard real coordinate inner product is the dot product ([[prop-standard-coordinate-inner-products]]).

## Verification

**Proof technique:** computation.

1.1 The vectors $u_0=(1,-1,0)/\sqrt2$ and $u_1=(1,1,-2)/\sqrt6$ form an orthonormal basis of $W$ by [L3]. Their coefficients against $v$ are $-1/\sqrt2$ and $-3/\sqrt6$. [L3, algebra]

2.1 Substitution in [L1] gives $P_Wv=(-1,0,1)$. The residual is $(2,2,2)$, which is orthogonal to $W$ and has squared norm $12$. [step 1.1, L1, L3]

3.1 For $q\in W$, the residual and $P_Wv-q$ are orthogonal, so Pythagoras gives the displayed equality. It is minimised uniquely at $q=P_Wv$, in agreement with [L2]. [step 2.1, L2] ∎
