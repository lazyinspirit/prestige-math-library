---
id: lem-fv-conforming-companion-and-test-recovery
kind: lemma
title: "Finite-volume companions, mean tests and weak-gradient closure"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-fv-regular-simplicial-companion-family, def-hybrid-mimetic-fv-scheme, thm-reference-simplex-trace-and-gauss-green, thm-reference-simplex-poincare-wirtinger, thm-poincare-inequality-for-w-one-p-zero, lem-pe12-w1p-compact-l2-embedding, thm-holder-inequality-for-integrals, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
axiom_use: "Assume the Axiom of Choice for Sobolev compactness, weak subsequences and Bochner integration."
sources:
  references:
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: https://arxiv.org/pdf/1407.1567
      locator: "Complete 38-page PDF retrieved and extracted; inspected section 1.2 and sections 4–4.1. The explicit companion construction and parabolic proof are supplied locally."
---

## Statement

Assume the Axiom of Choice and a family in [[def-fv-regular-simplicial-companion-family]]. For $1<p<\infty$ and zero boundary face values, put
$$B_{h,p}(v)^p=\sum_K|K||G_Kv|^p+S_{h,p}(v)^p,\qquad S_{h,p}(v)^p=\sum_{K,F}|F|d_{K,F}^{1-p}|\rho_{K,F}(v)|^p,$$
where $G_K,\rho_{K,F}$ have the formulas in [[def-hybrid-mimetic-fv-scheme]]. Then, with constants independent of $h,v$,
$$C^{-1}D_{h,p}(v)\le B_{h,p}(v)\le CD_{h,p}(v),\quad \|E_hv\|_{W^{1,p}}\le CD_{h,p}(v),\quad \|\Pi_hv-E_hv\|_{L^p}\le ChD_{h,p}(v).$$
Here $E_hv\in W_0^{1,p}(\Omega)$. If $p>\max(1,2d/(d+2))$ and $\vartheta=1-d\max(1/p-1/2,0)>0$, also
$$\|\Pi_hv-E_hv\|_2\le Ch^\vartheta D_{h,p}(v),\qquad \|\Pi_hv\|_2+\|\Pi_hv\|_p\le CD_{h,p}(v).$$
For $z\in W_0^{1,p}(\Omega)$, $D_{h,p}(I_hz)\le C\|\nabla z\|_p$. If the cell points are volume centroids, then for smooth $z$ with compact support in $\Omega$, $G_h I_hz\to\nabla z$ uniformly and $S_{h,p}(I_hz)\le Ch\|D^2z\|_\infty$, where $G_hv|_K=G_Kv$. Finally, for every smooth vector field $\phi$ on a neighborhood of $\overline\Omega$,
$$\left|\int_\Omega G_hv\cdot\phi+\Pi_hv\,\operatorname{div}\phi\right|\le ChD_{h,p}(v)\|\nabla\phi\|_\infty.$$
Consequently bounded $D_{h,p}(v_h)$, strong $L^p$ convergence $\Pi_hv_h\to v$, and weak $L^p$ convergence $G_hv_h\rightharpoonup g$ imply $g=\nabla v$ distributionally. The same statements hold after integration in time with the corresponding $L^p$ bounds.

## Facts & Assumptions

**Given:** AC, the explicit regular companion geometry, $1<p<\infty$, the mean interpolator and zero boundary cell-face vectors.

[F1] [[def-fv-regular-simplicial-companion-family]] gives $|K|\asymp h^d$, $|F|\asymp h^{d-1}$, $d_{K,F}\asymp h$, shape-regular simplex maps, and uniformly bounded vertex-star paths.

[F2] [[thm-reference-simplex-trace-and-gauss-green]] and [[thm-reference-simplex-poincare-wirtinger]] give the $W^{1,p}$ face trace, Gauss–Green and mean-zero Poincaré inequalities. Affine rescaling gives on a subdivision simplex $S$ and facet $e$ the bounds $\|z\|_{L^p(e)}\le C(h^{-1/p}\|z\|_{L^p(S)}+h^{1-1/p}\|\nabla z\|_{L^p(S)})$ and $\|z-z_S\|_{L^p(S)}\le Ch\|\nabla z\|_{L^p(S)}$.

[F3] [[def-hybrid-mimetic-fv-scheme]] defines $G_K$ and $\rho_{K,F}$; its face-moment identities hold for actual polytopes by applying simplex Gauss–Green to constants and coordinate functions and cancelling subdivision facets.

[F4] [[thm-poincare-inequality-for-w-one-p-zero]] bounds $\|w\|_p$ by $\|\nabla w\|_p$ for $w\in W_0^{1,p}$; [[lem-pe12-w1p-compact-l2-embedding]] gives the continuous $W_0^{1,p}\to L^2$ inclusion on the strict stated branch. Finite-sum and integral Hölder inequalities are [[thm-holder-inequality-for-integrals]].

## Proof

1.1 Write $j_{K,F}=v_F-v_K$. The moment cancellation gives $G_Kv=|K|^{-1}\sum_F|F|j_{K,F}n_{K,F}$. Hölder, the bounded face count and [F1] imply $|K||G_Kv|^p\le C\sum_Fh^{d-p}|j_{K,F}|^p$. Since $\rho_{K,F}=j_{K,F}-G_Kv\cdot(x_F-x_K)$ and $|x_F-x_K|\le Ch$, summing gives $B_{h,p}\le CD_{h,p}$. Conversely $j_{K,F}=\rho_{K,F}+G_Kv\cdot(x_F-x_K)$ gives $D_{h,p}\le CB_{h,p}$. [F1, F3, F4, given, algebra]

2.1 If $K,L$ share $F$, $v_K-v_L=j_{L,F}-j_{K,F}$. Along a supplied vertex-star path, the difference between $v_K$ and any other incident cell value is a sum of at most $2J$ such increments. At a boundary vertex the same telescoping ends at a zero boundary face. Hence for every simplex $S\subset\overline K$ and its vertex $z$, $|(E_hv)(z)-v_K|^p\le C\sum_{(L,F)\in\mathcal N(K)}|j_{L,F}|^p$, where $\mathcal N(K)$ is the union of the finitely many supplied paths at its vertices. These sets have bounded cardinality and bounded overlap: a cell has at most $J(d+1)$ subdivision vertices and each vertex has at most $J$ incident cells. [F1, given, construct, algebra]

2.2 Barycentric coordinates on $S$ have absolute value at most one and gradients at most $C/h$, by the inradius bound. Applying step 2.1 to $E_hv-v_K$ gives its $p$th-power $L^p(S)$ norm at most $Ch^d$ times the path sum, and its gradient norm at most $Ch^{d-p}$ times that sum. Summing with bounded overlap proves $\|E_hv-\Pi_hv\|_p\le ChD_{h,p}$ and $\|\nabla E_hv\|_p\le CD_{h,p}$. The continuous piecewise affine function vanishes on all boundary facets. Its zero extension is globally Lipschitz and has compact support: along a segment, the finite simplex pieces and the exterior zero pieces have derivative bounded by the largest simplex gradient and agree at crossings. To verify the zero-boundary closure directly, multiply by $\max(0,\min(1,k\operatorname{dist}(x,\partial\Omega)-1))$. The error and its gradient are supported in shrinking boundary layers, and $|E_hv(x)|\le L\operatorname{dist}(x,\partial\Omega)$ bounds the cutoff-gradient term by $2L$ on the layer $1/k<\operatorname{dist}(x,\partial\Omega)<2/k$. They tend to zero in $W^{1,p}$ by absolute continuity of the integral. Each cutoff is Lipschitz with compact support in $\Omega$ and can be mollified inside $\Omega$, producing smooth compactly supported approximants. Thus $E_hv\in W_0^{1,p}$, and [F4] proves the full $W^{1,p}$ bound and the $L^p$ state bound. [F1, F4, step 2.1, construct, algebra]

2.3 For $p<2$, the same barycentric estimate in $L^2(S)$ and $\ell^2\le\ell^p$ for the combined finite coefficient list give $\|E_hv-\Pi_hv\|_2\le Ch^{d/2}(\sum_{K,F}|j_{K,F}|^p)^{1/p}\le Ch^{1+d/2-d/p}D_{h,p}$. For $p\ge2$, finite-measure Hölder and step 2.2 give $ChD_{h,p}$ instead. The exponent is positive precisely on the stated strict branch. The continuous embedding [F4] bounds $\|E_hv\|_2$, proving the state $L^2$ estimate as well. [F1, F4, step 2.2, algebra]

3.1 The scaled simplex estimates [F2] first bound the difference between the mean on a simplex and the mean on one of its facets by $Ch^{1-d/p}\|\nabla z\|_{L^p(S)}$. Means on adjacent simplices differ by the sum of their differences to the shared facet mean, since their traces agree. The fan subdivision is a connected finite union of at most $J$ simplices. Telescoping between their means, and averaging over each original cell or original face, therefore gives $|(I_hz)_F-(I_hz)_K|^p\le Ch^{p-d}\int_K|\nabla z|^p$. The same trace argument applies to boundary faces; zero-boundary approximation makes their means zero. Multiplication by $|F|d_{K,F}^{1-p}\asymp h^{d-p}$ and summation proves $D_{h,p}(I_hz)\le C\|\nabla z\|_p$. [F1, F2, F4, algebra]

3.2 For smooth $z$, Gauss–Green gives $G_KI_hz=|K|^{-1}\int_K\nabla z$ exactly. On each cell Taylor expansion around its centroid and the corresponding face averages show $|(I_hz)_F-(I_hz)_K-G_KI_hz\cdot(x_F-x_K)|\le Ch^2\|D^2z\|_\infty$ under the stated centroid hypothesis. Thus for this mean interpolator the residual sum is at most $C h^p\|D^2z\|_\infty^p$, because there are $O(h^{-d})$ cells. Uniform continuity of $\nabla z$ gives the asserted gradient consistency. [F1, F2, F3, algebra]

4.1 Let $\phi_K$ and $\phi_F$ denote vector means over cells and faces. Gauss–Green, shared face cancellation and $v_F=0$ on the boundary give exactly $\int G_hv\cdot\phi+\Pi_hv\operatorname{div}\phi=\sum_{K,F}|F|j_{K,F}n_{K,F}\cdot(\phi_K-\phi_F)$. Since $|\phi_K-\phi_F|\le Ch\|\nabla\phi\|_\infty$, Hölder bounds this by $ChD_{h,p}(\sum_{K,F}|F|d_{K,F})^{1/p'}\|\nabla\phi\|_\infty$. The last sum is uniformly bounded by [F1], proving the estimate. Strong and weak convergence pass its left side to $\int g\cdot\phi+v\operatorname{div}\phi$, which is zero; interior compactly supported tests identify $g=\nabla v$. Hölder in time gives the same assertions for space-time bounds. [F1, F2, F4, step 1.1, given, algebra] ∎
