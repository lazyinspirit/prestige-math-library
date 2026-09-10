---
id: "thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms"
kind: "theorem"
title: "The musical maps are smooth inverse bundle isomorphisms"
deps: ["def-musical-isomorphisms", "prop-coordinate-criterion-for-a-riemannian-metric", "prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices"]
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

## Statement

$\flat:TM\to T^*M$ and $\sharp:T^*M\to TM$ are smooth inverse bundle isomorphisms.

## Facts & Assumptions

**Given:** A Riemannian metric with coordinate matrix $G$.

[F1] [[def-musical-isomorphisms]]: The **musical maps** for $g$ are $v^\flat=g(v,\cdot)$ and its pointwise inverse $\alpha^\sharp$, characterized by $g(\alpha^\sharp,v)=\alpha(v)$ for all $v$. For the metric in def-riemannian-metric-and-riemannian-manifold, $v^\flat=0$ forces $g(v,v)=0$ and hence $v=0$. Thus $\flat$ is injective between equal-dimensional fibres and bijective; this gives the pointwise inverse. Smooth inverse bundle maps are proved in thm-the-musical-maps-are-smooth-inverse-bundle-isomorphisms. On a zero fibre both are the unique map.

[F2] [[prop-coordinate-criterion-for-a-riemannian-metric]]: A tensor $g=\sum_{i,j}g_{ij}\,dx^i\otimes dx^j$ is Riemannian exactly when its coordinate matrix $G=(g_{ij})$ has smooth entries and is symmetric positive definite. Under $J=\partial x/\partial y$ it transforms by $G_y=J^TG_xJ$.

[F3] [[prop-smoothness-of-a-bundle-map-is-equivalent-to-smooth-local-matrices]]: Let $\Phi:E\to F$ be a fibrewise linear map over a smooth base map $f:M\to N$. Choose local frames $(e_1,\dots,e_r)$ for $E$ on $U\subseteq M$ and $(u_1,\dots,u_s)$ for $F$ on $V\subseteq N$ with $f(U)\subseteq V$. Then $\Phi$ is smooth on $E|_U$ if and only if there are smooth scalar functions $a_{ji}:U\to\mathbb R$ such that $$\Phi(e_i(p))=\sum_{j=1}^s a_{ji}(p)u_j(f(p))$$ for every $p\in U$.

## Proof

**Proof technique:** direct.

1.1 The coordinate formula for $\flat$ is $v\mapsto Gv$. Positive definiteness makes $G$ invertible; its inverse has entries $G^{-1}=\operatorname{adj}(G)/\det G$, smooth because $\det G>0$. Thus both fibre maps have smooth matrices and are smooth bundle maps. [F1, F2, F3, given]

2.1 The matrix identities $G^{-1}G=I$ and $GG^{-1}=I$ give $(v^\flat)^\sharp=v$ and $(\alpha^\sharp)^\flat=\alpha$. Their pointwise characterizations are intrinsic, so coordinate formulas agree on overlaps. Rank zero has the unique mutually inverse maps, and empty base has empty bundle maps. [F1, step 1.1] ∎

## Source locator

Lee, Introduction to Smooth Manifolds, 2nd ed., Chapter 13, pp.328–332 and 341–342.
