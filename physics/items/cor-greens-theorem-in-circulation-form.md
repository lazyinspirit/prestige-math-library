---
id: cor-greens-theorem-in-circulation-form
kind: corollary
title: "Green's theorem is the curl statement for a planar field lifted to $\\mathbb R^3$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-greens-theorem-for-finite-unions-of-elementary-regions, def-divergence-and-curl-of-a-c1-vector-field, def-positive-orientation-for-elementary-region-boundaries, def-type-i-type-ii-and-elementary-green-regions, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-euclidean-inner-product, lem-standard-basis-of-f-n, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "J. Feldman, A. Rechnitzer and E. Yeager, CLP-4 Vector Calculus (University of British Columbia), section 4.3"
      url: "https://personal.math.ubc.ca/~CLP/CLP4/clp_4_vc/clp_4_vc.html"
pipeline_run: null
---

## Statement

Let $D$ be a finite elementary Green region with its supplied decomposition, positively oriented, and let $P,Q$ be $C^1$ on an open $U\subseteq\mathbb R^2$ containing $D$. Define the **lift**

$$\widetilde F(x,y,z):=\bigl(P(x,y),\ Q(x,y),\ 0\bigr)\qquad\bigl((x,y,z)\in U\times\mathbb R\bigr),$$

a field on the open set $U\times\mathbb R\subseteq\mathbb R^3$. Then $\widetilde F$ is $C^1$, its curl has first and second coordinates identically $0$ and third coordinate $\partial_xQ-\partial_yP$ at every point, independent of $z$, and the circulation of the planar field around the positive boundary chain equals the integral of the third coordinate of the curl of the lift:

$$\int_{\partial D}(P,Q)\cdot d\mathbf r=\iint_D\bigl(\operatorname{curl}\widetilde F\bigr)_z(x,y,0)\,dA.$$

## Facts & Assumptions

**Given:** The finite elementary Green region $D$ with its supplied decomposition and positive orientation, the $C^1$ functions $P,Q$ on the open $U\supseteq D$, and the lift $\widetilde F$ of the Statement.

[F1] The curl of a $C^1$ field on an open subset of $\mathbb R^3$ is $\operatorname{curl}G=(\partial_yG_z-\partial_zG_y,\ \partial_zG_x-\partial_xG_z,\ \partial_xG_y-\partial_yG_x)$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] A map is of class $C^k$ when each component is, a scalar component being $C^1$ when its first partial derivatives exist and are continuous ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] For a finite elementary Green region the positive boundary integral is the finite sum over the surviving oriented arcs, and $\int_{\partial D}G\cdot d\mathbf r$ and $\int_{\partial D}P\,dx+Q\,dy$ denote that sum for the field $(P,Q)$ ([[def-positive-orientation-for-elementary-region-boundaries]], [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]).

[F4] A finite elementary Green region is a nonempty finite union of elementary Green regions with pairwise disjoint interiors and the stated shared-arc conditions, supplied as data ([[def-type-i-type-ii-and-elementary-green-regions]]).

[F5] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$, and $e_k$ has $k$th coordinate $1$ and the others $0$ ([[def-euclidean-inner-product]], [[lem-standard-basis-of-f-n]]).

[L1] Let $D=D_1\cup\cdots\cup D_N$ be a finite elementary Green region with its supplied decomposition, oriented positively, and let $P,Q$ be $C^1$ on an open neighbourhood of $D$. Then $\int_{\partial D}P\,dx+Q\,dy=\iint_D(\partial_xQ-\partial_yP)\,dA$ ([[thm-greens-theorem-for-finite-unions-of-elementary-regions]]).

## Proof

**Proof technique:** direct.

1.1 The three components of $\widetilde F$ are $(x,y,z)\mapsto P(x,y)$, $(x,y,z)\mapsto Q(x,y)$ and the constant $0$. Their first partial derivatives are $\partial_x\widetilde F_x=\partial_xP$, $\partial_y\widetilde F_x=\partial_yP$, $\partial_z\widetilde F_x=0$; $\partial_x\widetilde F_y=\partial_xQ$, $\partial_y\widetilde F_y=\partial_yQ$, $\partial_z\widetilde F_y=0$; and all three of $\partial_x\widetilde F_z$, $\partial_y\widetilde F_z$, $\partial_z\widetilde F_z$ are $0$. Each of these exists and is continuous on $U\times\mathbb R$ because $P$ and $Q$ are $C^1$ on $U$, so $\widetilde F$ is $C^1$ there by [F2]. [given, F2, F5]

2.1 By [F1] and step 1.1 the three coordinates of $\operatorname{curl}\widetilde F$ are $\partial_y\widetilde F_z-\partial_z\widetilde F_y=0-0=0$, then $\partial_z\widetilde F_x-\partial_x\widetilde F_z=0-0=0$, and then $\partial_x\widetilde F_y-\partial_y\widetilde F_x=\partial_xQ-\partial_yP$. All three are computed, and the third depends only on $(x,y)$, so its value at $(x,y,z)$ is its value at $(x,y,0)$. [step 1.1, F1]

3.1 By [F4] the region $D$ carries its supplied decomposition and $P,Q$ are $C^1$ on the open neighbourhood $U$ of $D$, so [L1] gives $\int_{\partial D}P\,dx+Q\,dy=\iint_D(\partial_xQ-\partial_yP)\,dA$; by [F3] the left side is $\int_{\partial D}(P,Q)\cdot d\mathbf r$, and by step 2.1 the integrand on the right is $(\operatorname{curl}\widetilde F)_z(x,y,0)$. That is the asserted identity, and step 2.1 is the assertion about the three curl coordinates. [step 2.1, F3, F4, L1] ∎

## Remarks

- **This is a dictionary, not a new theorem.** Both sides are the two sides of Green's theorem, rewritten. What the corollary records is that the planar integrand $\partial_xQ-\partial_yP$ is a curl, so that the planar and the spatial developments on this page speak about one operator rather than two unrelated ones.

- **The route is deliberately one-way.** [[thm-the-classical-stokes-theorem-for-a-c2-surface-patch]] is proved *from* Green's theorem, so re-deriving Green's theorem from it would be circular. Nothing above uses Stokes' theorem.
