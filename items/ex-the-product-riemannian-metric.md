---
id: "ex-the-product-riemannian-metric"
kind: "example"
title: "The product riemannian metric"
deps: ["prop-coordinate-criterion-for-a-riemannian-metric", "prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Example

The product metric on $(M,g)\times(N,h)$ is $\pi_M^*g+\pi_N^*h$, with block matrix $\operatorname{diag}(G,H)$.

## Facts & Assumptions

**Given:** Finite-dimensional smooth Riemannian manifolds $(M,g),(N,h)$, with their product smooth structure.

[F1] [[prop-coordinate-criterion-for-a-riemannian-metric]]: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

[F2] [[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]: Let $(M,\mathcal S)$ and $(N,\mathcal T)$ be smooth manifolds of dimensions $m$ and $n$. Then $M\times N$ with the product topology is a topological $(m+n)$-manifold. If $\mathcal A$ and $\mathcal B$ are smooth atlases with $[\mathcal A]=\mathcal S$ and $[\mathcal B]=\mathcal T$, then the set of product charts $$\mathcal A\times\mathcal B:=\bigl\{\,\bigl(V\times W,\ \varphi\times\psi\bigr):(V,\varphi)\in\mathcal A,\ (W,\psi)\in\mathcal B\,\bigr\}$$ is a smooth atlas on $M\times N$, and the maximal atlas it generates is independent of the presenting atlases: it depends only on $\mathcal S$ and $\mathcal T$. This maximal atlas is the **product smooth structure** of $M\times N$.

## Verification

**Proof technique:** direct.

1.1 In product coordinates a tangent vector is $(v,w)$, and the projection differentials send it to $v$ and $w$. Thus the sum of pullbacks evaluates on two vectors as $g(v,v')+h(w,w')$, and has the stated block diagonal matrix. The product charts are smooth, and each coefficient is a smooth coefficient of $g$ or $h$ composed with a projection. [F2, given]

2.1 For $(v,w)\ne(0,0)$ at least one vector is nonzero. The sum $g(v,v)+h(w,w)$ is therefore strictly positive, since each summand is nonnegative and the corresponding nonzero summand is positive. Symmetry holds term by term, so the coordinate criterion proves this is Riemannian. For the concrete product of two Euclidean lines the matrix is $\operatorname{diag}(1,1)$ and the squared norm of $(3,4)$ is $9+16=25$. [F1, step 1.1] ∎

## Source locator

Lee, Example 13.2 and equation (13.1), p.329, product metrics.
