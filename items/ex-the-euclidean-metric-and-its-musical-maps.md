---
id: "ex-the-euclidean-metric-and-its-musical-maps"
kind: "example"
title: "The euclidean metric and its musical maps"
deps: ["prop-coordinate-criterion-for-a-riemannian-metric", "def-musical-isomorphisms", "thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms", "prop-the-gradient-is-characterized-by-inner-products"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, second edition"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Ved Datar, Lectures on Riemannian Geometry, September 2025"
      url: "https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

On Euclidean $\mathbb R^n$, $v^\flat=\sum_i v^i dx^i$, $\alpha^\sharp=\sum_i\alpha_i\partial_i$, and $\operatorname{grad}f=\sum_i(\partial_i f)\partial_i$.

## Facts & Assumptions

**Given:** $g=\sum_i dx^i\otimes dx^i$, $v=\sum_i v^i\partial_i$, and $\alpha=\sum_i\alpha_i dx^i$.

[F1] [[prop-coordinate-criterion-for-a-riemannian-metric]]: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

[F2] [[thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms]]: $\flat:TM\to T^*M$ and $\sharp:T^*M\to TM$ are smooth inverse bundle isomorphisms.

[F3] [[prop-the-gradient-is-characterized-by-inner-products]]: The gradient is the unique smooth vector field $Y$ satisfying $g(Y,X)=Xf$ for every smooth vector field $X$.

[F4] [[def-musical-isomorphisms]]: The musical maps are defined by $v^\flat=g(v,\mathord\cdot)$ and by $g(\alpha^\sharp,w)=\alpha(w)$ for every tangent vector $w$.

## Verification

**Proof technique:** direct.

1.1 The matrix of $g$ is $I_n$, which is smooth, symmetric, and has $v^TI_nv=\sum_i(v^i)^2>0$ for $v\ne0$. For every basis vector $\partial_j$, F4 gives $v^\flat(\partial_j)=g(v,\partial_j)=v^j$, hence $v^\flat=\sum_i v^i dx^i$. If $\alpha^\sharp=\sum_iw^i\partial_i$, then F4 gives $w^j=g(\alpha^\sharp,\partial_j)=\alpha(\partial_j)=\alpha_j$, hence $\alpha^\sharp=\sum_i\alpha_i\partial_i$. Substitution in either order returns the original coefficients, as also required by F2. [F1, F2, F4, given]

2.1 Since $df=\sum_i(\partial_i f)dx^i$, the inner-product characterization gives $\operatorname{grad}f=(df)^\sharp=\sum_i(\partial_i f)\partial_i$. In particular $f(x)=\frac12\sum_i(x^i)^2$ has $df=\sum_i x^i dx^i$ and $\operatorname{grad}f=\sum_i x^i\partial_i$. [F3, step 1.1] ∎

## Source locator

Lee, Example 13.1, p.328; musical isomorphisms and gradient, p.342. The quadratic-function instance is calculated above.
