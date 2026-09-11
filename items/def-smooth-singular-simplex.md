---
id: "def-smooth-singular-simplex"
kind: "definition"
title: "Smooth singular simplex"
deps: ["def-standard-topological-simplex-and-its-affine-face-maps", "def-smooth-map-between-manifolds-with-boundary"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "DG-16 design; Hatcher/Park control"
      url: "https://people.math.harvard.edu/~pspark/derham.pdf"
      locator: "DG-16 item 12; Hatcher §3.1 or Park §2 as applicable; source audit limitations in batch notes"
status: "draft"
origin: "pipeline"
---

## Definition

Let $M$ be a smooth manifold, possibly with boundary. For $k\ge0$, put
$$A^k=\{(t_0,\ldots,t_k)\in\mathbb R^{k+1}:\textstyle\sum_i t_i=1\}.$$
A **smooth singular $k$-simplex** in $M$ is a map $\sigma:\Delta^k\to M$ for which there are an open set $O\subseteq A^k$ containing $\Delta^k$ and a smooth map $\bar\sigma:O\to M$ with $\bar\sigma|_{\Delta^k}=\sigma$. The simplex and its face maps are [[def-standard-topological-simplex-and-its-affine-face-maps]]. Smoothness into a boundary target is that of [[def-smooth-map-between-manifolds-with-boundary]].

The extension takes values in $M$ on all of $O$, including points outside the simplex. Merely extending its chart coordinates to a Euclidean space with values outside $M$ does not suffice. Nor is separate smoothness of the face restrictions the definition. For a boundaryless target this is the usual neighbourhood-extension convention.

Write $S_k^\infty(M)$ for this set of maps; the extension itself is not additional simplex data. Every such map is continuous. At $k=0$, $A^0=\Delta^0$ is a point, so every point of $M$ is a smooth zero-simplex. Constant maps are smooth in every degree, including maps to a boundary point, and degenerate parametrizations are allowed. The empty manifold has no simplices. No simultaneous choice of extensions is part of this definition.
