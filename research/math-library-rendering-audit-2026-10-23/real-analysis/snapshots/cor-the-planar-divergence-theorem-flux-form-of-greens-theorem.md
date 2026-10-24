---
id: cor-the-planar-divergence-theorem-flux-form-of-greens-theorem
kind: corollary
title: "The planar divergence theorem: the flux form of Green's theorem"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-greens-theorem-for-finite-unions-of-elementary-regions, def-divergence-and-curl-of-a-c1-vector-field, def-positive-orientation-for-elementary-region-boundaries, def-type-i-type-ii-and-elementary-green-regions, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, def-euclidean-inner-product, def-piecewise-c1-path-operations-and-oriented-reparametrizations, def-ck-euclidean-maps-and-diffeomorphisms]
justified_by: []
aliases: []
landmark: true
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
    - title: "M. Corral, Vector Calculus, chapter 4 (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Calculus/Vector_Calculus_(Corral)/04%3A_Line_and_Surface_Integrals"
pipeline_run: null
---

## Statement

Let $D$ be a finite elementary Green region with its supplied decomposition, positively oriented, and let $F=(F_x,F_y)$ be $C^1$ on an open $U\subseteq\mathbb R^2$ containing $D$. Then

$$\int_{\partial D}(-F_y)\,dx+F_x\,dy=\iint_D(\partial_xF_x+\partial_yF_y)\,dA,$$

the right-hand integrand being the divergence of $F$ as a field on an open subset of $\mathbb R^2$.

Moreover, if $\sigma:[\alpha,\beta]\to\mathbb R^2$ is one of the arcs of the positive boundary chain and its derivative is nowhere zero on a piece with continuous derivative extension $v$, then on that piece

$$\int_\sigma(-F_y)\,dx+F_x\,dy=\int_\sigma\langle F,\nu\rangle\,ds,\qquad \nu:=\frac{(v_2,-v_1)}{\lVert v\rVert_2},$$

where $\nu$ is the unit vector obtained from the tangent $v$ by a quarter turn clockwise.

## Facts & Assumptions

**Given:** The finite elementary Green region $D$ with its supplied decomposition and positive orientation, and the $C^1$ field $F=(F_x,F_y)$ on the open $U\supseteq D$.

[F1] The divergence of a $C^1$ field on an open subset of $\mathbb R^n$ is $\operatorname{div}G=\sum_{i<n}\partial_iG_i$; for $n=2$ and coordinates named $x,y$ this is $\partial_xG_x+\partial_yG_y$ ([[def-divergence-and-curl-of-a-c1-vector-field]]).

[F2] For a finite elementary Green region the positive boundary integral is the finite sum over the surviving oriented arcs, written $\int_{\partial D}P\,dx+Q\,dy$ for the field $(P,Q)$ ([[def-positive-orientation-for-elementary-region-boundaries]]).

[F3] For a piecewise-$C^1$ path with admissible partition and continuous derivative extensions $v_i$, $\int_\gamma G\cdot d\mathbf r=\sum_i\int_{t_i}^{t_{i+1}}\langle G(\gamma(t)),v_i(t)\rangle\,dt$ and $\int_\gamma h\,ds=\sum_i\int_{t_i}^{t_{i+1}}h(\gamma(t))\lVert v_i(t)\rVert_2\,dt$ ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]], [[def-piecewise-c1-path-operations-and-oriented-reparametrizations]]).

[F4] A finite elementary Green region is a nonempty finite union of elementary Green regions with pairwise disjoint interiors and the stated shared-arc conditions, supplied as data ([[def-type-i-type-ii-and-elementary-green-regions]]).

[F5] For $x,y\in\mathbb R^m$, $\langle x,y\rangle=\sum_{i<m}x_iy_i$ and $\lVert x\rVert_2=\sqrt{\langle x,x\rangle}$ ([[def-euclidean-inner-product]]); a map is $C^k$ when each component is ([[def-ck-euclidean-maps-and-diffeomorphisms]]).

[L1] Let $D=D_1\cup\cdots\cup D_N$ be a finite elementary Green region with its supplied decomposition, oriented positively, and let $P,Q$ be $C^1$ on an open neighbourhood of $D$. Then $\int_{\partial D}P\,dx+Q\,dy=\iint_D(\partial_xQ-\partial_yP)\,dA$ ([[thm-greens-theorem-for-finite-unions-of-elementary-regions]]).

## Proof

**Proof technique:** direct.

1.1 Put $P:=-F_y$ and $Q:=F_x$ on $U$. These are $C^1$ on $U$ by [F5], since the components of $F$ are, so [L1] applies with the supplied decomposition of [F4] and gives $\int_{\partial D}P\,dx+Q\,dy=\iint_D(\partial_xQ-\partial_yP)\,dA$. [given, F4, F5, L1]

1.2 Fix such an arc $\sigma$ of the positive boundary chain, a piece of it carrying a continuous derivative extension $v=(v_1,v_2)$ with $v$ nowhere zero there, and set $\nu:=(v_2,-v_1)/\lVert v\rVert_2$. By [F5] the vector $\nu$ has norm $1$, since $v_2^2+v_1^2=\lVert v\rVert_2^2$, and $\langle\nu,v\rangle=(v_2v_1-v_1v_2)/\lVert v\rVert_2=0$. Writing $v=\lVert v\rVert_2(\cos\tau,\sin\tau)$ for the direction of $v$ is not needed: the map $(s,t)\mapsto(t,-s)$ is the quarter turn clockwise, as it carries $(1,0)$ to $(0,-1)$ and $(0,1)$ to $(1,0)$. [given, F3, F5]

2.1 By step 1.1 and [F1], $\partial_xQ-\partial_yP=\partial_xF_x-\partial_y(-F_y)=\partial_xF_x+\partial_yF_y=\operatorname{div}F$ on $U$; substituting into step 1.1 and reading the left side by [F2] gives the first asserted identity. [step 1.1, F1, F2]

3.1 By [F3] the integral of $P\,dx+Q\,dy$ over that piece of $\sigma$ is $\int\bigl(P(\sigma(t))v_1(t)+Q(\sigma(t))v_2(t)\bigr)dt=\int\bigl(-F_y(\sigma(t))v_1(t)+F_x(\sigma(t))v_2(t)\bigr)dt$, while by step 1.2 and [F5] $\langle F(\sigma(t)),\nu(t)\rangle\lVert v(t)\rVert_2=F_x(\sigma(t))v_2(t)-F_y(\sigma(t))v_1(t)$. The two integrands are equal, so by [F3] the two integrals over that piece agree, which is the second asserted identity. [step 1.1, step 1.2, F3, F5] ∎

## Remarks

- **The first identity needs no regularity of the boundary arcs; the second does.** The positive boundary chain of an elementary Green region is built from continuous piecewise-$C^1$ graphs, whose derivative may vanish, and where it vanishes there is no unit tangent and hence no $\nu$. That is why the normal reading is a separate clause under an extra hypothesis, and why the identity that Green's theorem actually delivers is stated in the $dx,dy$ form.

- **Outwardness of $\nu$ is not claimed here.** For a positively oriented boundary the quarter turn clockwise of the tangent does point out of the region, but establishing that at a boundary point requires the same kind of local analysis that [[prop-the-graph-faces-of-an-adapted-presentation-carry-the-outward-normal]] carries out in space, and it is not carried out for plane regions on this page. What is proved is the equality of the two integrals for the stated $\nu$.

- **Why this is called a divergence theorem.** The right-hand integrand is the divergence of a field on an open subset of $\mathbb R^2$, and the left-hand side is the boundary integral of the normal component. The three-dimensional statement of [[thm-the-divergence-theorem-for-finite-gluings-of-elementary-solid-regions]] has the same shape; neither is derived from the other on this page.
