---
page: spherical-simplex-metrics-angular-links-and-cones
title: "Spherical Simplex Metrics, Angular Links, and Cones"
status: draft
requires: [coxeter-polyhedral-gluings-and-intrinsic-metrics, real-forms-and-reflection-geometry, direct-matrix-factorisations-lu-cholesky-and-qr, simplicial-complexes-and-simplicial-homology, further-trigonometric-identities-and-inverses, hilbert-space-geometry-and-riesz-representation]
items: [def-cg-spherical-gram-simplex-and-angular-link,
        lem-cg-spherical-simplex-existence-and-link-gram-formula,
        def-cg-euclidean-cone-and-spherical-join-metrics,
        thm-cg-cone-join-metric-and-local-product-chart]
examples: []
---

Combinatorial links already exist in the library. Here they receive angular
metrics, and tangent neighbourhoods become cones over those links. Their
spherical geometry must be proved before a link criterion can be used: every
construction below is a named supplier contract, and the definitions are
justified by the separately named existence, descent or uniqueness proofs
before any application consumes their properties.

[[def-cg-spherical-gram-simplex-and-angular-link]] constructs the spherical
simplex $\Sigma(C)=K(C)\cap S^n$ from the Cholesky factor of a real symmetric
positive-definite Gram matrix $C$ with diagonal $1$, and defines the tangent
cone $T_FC$, the normal cone $N_FC=T_FC\cap U(F)^\perp$ along the direction
space of a face, the angular link $\operatorname{Lk}_C(F)=N_FC\cap S(V)$ of a
Euclidean face and the angular distance $d_{\mathrm{ang}}(\xi,\eta)=\arccos
\langle\xi,\eta\rangle$; the normal direction sets of the cells of an
isometric polyhedral gluing glue to $\operatorname{Lk}_X(F)$ with the
componentwise intrinsic path distance, extended by auxiliary infinity between
components, and the link of a point of a relative
interior is the join $S^{k-1}*\operatorname{Lk}_C(F)$. No combinatorial link
is redefined: in a simplicial complex the cells of the face link are those of
its combinatorial link; general polyhedral gluings instead have polyhedral
face links with cells indexed by the cofaces.

[[lem-cg-spherical-simplex-existence-and-link-gram-formula]] proves that the
Cholesky realisation realises the prescribed inner products, uniquely up to a
linear isometry, and that the vertices lie in an open hemisphere: a linear
functional $\varphi$ with $\varphi(u_i)=1$ is positive on $K(C)\setminus\{0\}$,
radial normalisation is a bijection $\Delta(C)\to\Sigma(C)$ with unique
barycentric ray coordinates, and both maps satisfy explicit Lipschitz
estimates, so the round metric of $\Sigma(C)$ is bi-Lipschitz equivalent to
the Euclidean metric of $\Delta(C)$ with explicit constants. Finite spherical
complexes $|K|_C$ have compact proper complete length-space components with
minimizing geodesics (the Axiom of Choice selects near-minimizing chains and
supplies the proper-target Ascoli hypothesis), and the link of a vertex $u_0$ is the
spherical simplex with Schur-complement Gram matrix
$c^{\mathrm{lk}}_{ij}=(c_{ij}-c_{i0}c_{j0})/\sqrt{(1-c_{i0}^2)(1-c_{j0}^2)}$,
positive definite and compatible with iterated faces. Clause (v) identifies
the tangent cone with the intersection of the inward half-spaces of the active
defining inequalities and proves that
$d_{\mathrm{ang}}$ is the intrinsic path metric of the link; only in the cone
formulas is the componentwise value $+\infty$ used, as auxiliary notation.

[[def-cg-euclidean-cone-and-spherical-join-metrics]] fixes the conventions:
the componentwise intrinsic path distance $d_{\mathrm{path}}$ (with $+\infty$
between components), its finite-valued truncation $d_\pi=\min\{\pi,d_{\mathrm{path}}\}$,
the $D_\pi$-geodesic angular CAT(1) convention for triangles of perimeter
$<2\pi$, the Euclidean cone $C(L)=\{o\}\sqcup(0,\infty)\times L$ with
$d_C(o,(r,x))=r$ and $d_C^2=r^2+s^2-2rs\cos d_\pi(x,y)$ (so $C(\emptyset)=\{o\}$),
and the spherical join $L_1*L_2$ as the quotient of $L_1\times L_2\times[0,\pi/2]$
by the endpoint identifications, with its cosine formula and the conventions
$L*\emptyset=L$, $\emptyset*\emptyset=\emptyset$. No metric axiom, geodesic or
associativity statement is asserted here; all of them are conclusions of the
justifying theorem.

[[thm-cg-cone-join-metric-and-local-product-chart]] proves them. The
truncation is a metric of diameter at most $\pi$ agreeing with $d_{\mathrm{path}}$
below $\pi$, and every triangle of perimeter $<2\pi$ has at most one side
$\pi$ and lies in one intrinsic component. The cone formula defines a metric
including angle $\pi$, vanishing radii and disconnected links; the
through-apex path is minimizing when $d_\pi(x,y)=\pi$, a minimizing angular
segment develops into its planar sector otherwise, and a $D_\pi$-geodesic
link gives a geodesic cone whose minimizing geodesics stay in the ball of
radius $\max\{r,s\}$. The join is a metric of diameter at most $\pi$ — the
triangle inequality is read off from the product-cone isometry
$C(L_1)\times C(L_2)\cong C(L_1*L_2)$, which also gives associativity, the
face metrics and $S^{m-1}*S^{n-1}\cong S^{m+n-1}$ — and at a point $p$ in the
relative interior of a $k$-cell $F$ of an isometric polyhedral gluing with
local finiteness and finitely many shapes the angular link is the join
$\operatorname{Lk}_X(p)\cong S^{k-1}*\operatorname{Lk}_X(F)$ and a small
metric ball about $p$ in its connected component is isometric to the ball of the same radius about $(0,o)$
in $\mathbb R^k\times C(\operatorname{Lk}_X(F))$ and to the cone ball over
$\operatorname{Lk}_X(p)$, preserving intrinsic
lengths. The auxiliary value $+\infty$ is never an ordinary distance value.

Required earlier pages: [[coxeter-polyhedral-gluings-and-intrinsic-metrics]],
[[real-forms-and-reflection-geometry]],
[[direct-matrix-factorisations-lu-cholesky-and-qr]],
[[simplicial-complexes-and-simplicial-homology]],
[[further-trigonometric-identities-and-inverses]] and
[[hilbert-space-geometry-and-riesz-representation]]. The companion
[[spherical-simplex-metrics-angular-links-and-cones-examples]] computes the
Schur complement of a spherical simplex, compares link edge lengths with
dihedral mirror angles and tests the truncation convention on a disconnected
universal-Coxeter nerve. This page is a draft: its proofs are local, and the
link criterion that consumes them is developed on
[[cat-comparison-link-criteria-and-local-globalization]].
