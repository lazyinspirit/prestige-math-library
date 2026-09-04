---
id: lem-critical-hessian-agrees-with-the-levi-civita-hessian
kind: lemma
title: "At a critical point, the intrinsic Hessian agrees with the Levi-Civita Hessian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-hessian-of-a-function-at-a-critical-point, def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian, thm-a-riemannian-metric-has-a-unique-levi-civita-connection-on-the-cotangent-bundle, thm-coordinate-formula-for-the-differential-of-a-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: coordinate computation
verification:
  audited: 2026-09-04
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Statement

Let $f:M\to\mathbb R$ be smooth, let $p$ be a critical point of $f$, and let
$g$ be any Riemannian metric on $M$. If $\nabla$ is the Levi-Civita connection
of $g$, then

$$\bigl(\nabla^2f\bigr)_p=\operatorname{Hess}_p(f).$$

## Facts & Assumptions

**Given:** A smooth function $f:M\to\mathbb R$, a critical point $p$, a
Riemannian metric $g$, and its Levi-Civita connection $\nabla$.

[F1] The intrinsic critical-point Hessian is the bilinear form represented in a
chart by the second partial derivatives of the coordinate representative
([[def-hessian-of-a-function-at-a-critical-point]]).

[F2] The covariant Hessian satisfies
$$\bigl(\nabla^2f\bigr)_{ij} =\frac{\partial^2(f\circ x^{-1})}{\partial x^i\partial x^j} -\sum_k\Gamma^k_{ij}\frac{\partial(f\circ x^{-1})}{\partial x^k}$$
in any chart ([[def-riemannian-metric-symmetric-cotangent-connection-and-covariant-hessian]]).

[L1] In a chart $x=(x^1,\dots,x^n)$ around $p$,
$$df_p=\sum_i\frac{\partial(f\circ x^{-1})}{\partial x^i}(x(p))\,dx^i_p.$$
([[thm-coordinate-formula-for-the-differential-of-a-function]])

## Proof

**Proof technique:** coordinate computation.

1.1 Choose a smooth chart $x$ around $p$, put $a:=x(p)$ and $h:=f\circ x^{-1}$. By [F2], the coordinate matrix of $(\nabla^2f)_p$ is $\bigl(\partial_{ij}h(a)-\sum_k\Gamma^k_{ij}(a)\partial_k h(a)\bigr)_{ij}$. [F2, given]

1.2 Since $p$ is critical, $df_p=0$, and [L1] therefore forces every coefficient $\partial_k h(a)$ to vanish. [L1, given, algebra]

2.1 Step 1.1 reduces to the matrix $(\partial_{ij}h(a))_{ij}$, which is exactly the matrix of $\operatorname{Hess}_p(f)$ by [F1]. Therefore $(\nabla^2f)_p=\operatorname{Hess}_p(f)$. [F1, step 1.1, step 1.2] ∎
