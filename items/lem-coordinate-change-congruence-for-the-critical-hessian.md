---
id: lem-coordinate-change-congruence-for-the-critical-hessian
kind: lemma
title: "Critical-point Hessian matrices transform by congruence under chart changes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-hessian-of-a-function-at-a-critical-point]
justified_by: []
aliases: []
landmark: false
proof_strategy: coordinate computation
verification:
  audited: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $f:M\to \mathbb R$ be smooth, let $p$ be a critical point of $f$, and let
$x$ and $y$ be smooth charts around $p$. If

$$H_x(f,p)=\left(\frac{\partial^2(f\circ x^{-1})}{\partial x^i\partial x^j}(x(p))\right),\qquad H_y(f,p)=\left(\frac{\partial^2(f\circ y^{-1})}{\partial y^i\partial y^j}(y(p))\right),$$

and if $J=D(x\circ y^{-1})_{y(p)}$, then

$$H_y(f,p)=J^{\mathsf T}H_x(f,p)J.$$

In particular the two Hessian matrices are congruent.

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$, a critical point $p$, and two
charts $x$ and $y$ around $p$.

[F1] The critical-point Hessian is defined from the second partial derivatives
of a coordinate representative at the critical point
([[def-hessian-of-a-function-at-a-critical-point]]).

## Proof

**Proof technique:** coordinate computation.

1.1 Write $g:=f\circ x^{-1}$, $h:=f\circ y^{-1}$, $a:=x(p)$, $b:=y(p)$, and $\phi:=x\circ y^{-1}$. Then $h=g\circ\phi$, and the matrix $J$ in the statement is $D\phi_b$. [F1, given, construct]

2.1 Because $p$ is critical, the first derivative of $g$ at $a$ is zero, so differentiating $h=g\circ\phi$ twice at $b$ gives $D^2h_b(u,v)=D^2g_a(Ju,Jv)+Dg_a(D^2\phi_b(u,v))=D^2g_a(Ju,Jv)$ for all $u,v\in\mathbb R^n$. [step 1.1, algebra]

3.1 Step 2.1 is exactly the matrix identity $H_y(f,p)=J^{\mathsf T}H_x(f,p)J$, so the two chart Hessians are congruent. [F1, step 2.1, algebra] ∎
