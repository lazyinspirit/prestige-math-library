---
id: def-cg-spherical-gram-simplex-and-angular-link
kind: definition
title: "Spherical Gram simplices and angular links of Euclidean faces"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-cholesky-factorisation-with-positive-diagonal, thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique, def-real-and-complex-inner-product-space, cor-inner-product-induces-a-norm, def-euclidean-spheres-and-closed-balls, def-principal-inverse-sine-and-cosine, def-metric-space, def-finite-convex-cell-complex-and-linear-subdivision, def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric, def-simplicial-subcomplex-star-closure-and-link]
justified_by: [lem-cg-spherical-simplex-existence-and-link-gram-formula]
aliases: []
landmark: false
verification:
  audited: "2026-10-08"
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
    - title: "Martin R. Bridson and Andre Haefliger, Metric Spaces of Non-Positive Curvature (Springer Grundlehren 319, 1999; author-hosted PDF)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/bridsonhaefligerx.pdf"
      locator: "I.5.6-5.10, printed pp. 59-62 (K-cones and their metric formula); I.7.14-I.7.16, printed pp. 102-104 (links of points in geodesic simplices and in M_k-complexes, cone neighbourhoods)"
    - title: "Michael W. Davis, The Geometry and Topology of Coxeter Groups (first-edition author manuscript, 2007-2008)"
      url: "https://people.math.osu.edu/davis.12/davisbook.pdf"
      locator: "Appendix I.2, printed pp. 505-507 (the cone on a CAT(1)-space and its metric); Appendix I.3, printed pp. 507-510 (X_k-cell structures and the geometric link Lk(F,P)=Cone(F,P) intersect S(E(F,P)))"
dependency_level: 1
---

## Definition

**Spherical Gram simplices.** Let $n\ge0$ and let $C=(c_{ij})_{0\le i,j\le n}$ be a real symmetric positive-definite $(n+1)\times(n+1)$ matrix with $c_{ii}=1$ for every $i$ ([[def-cholesky-factorisation-with-positive-diagonal]], [[thm-cholesky-factorisation-exists-iff-hermitian-positive-definite-and-is-unique]]). Let $C=LL^{T}$ be its unique Cholesky factorisation with lower triangular $L$ and positive diagonal, and let $u_i\in\mathbb R^{n+1}$ be the $i$-th row of $L$, regarded as a column vector. Define the **positive cone on the vertices** and the **spherical simplex**
$$K(C):=\Bigl\{\sum_i\lambda_iu_i:\lambda_i\ge0\Bigr\},\qquad \Sigma(C):=K(C)\cap S^n,$$
where $S^n=\{x\in\mathbb R^{n+1}:|x|=1\}$ is the unit sphere ([[def-real-and-complex-inner-product-space]], [[cor-inner-product-induces-a-norm]], [[def-euclidean-spheres-and-closed-balls]]); the **vertices** of $\Sigma(C)$ are $u_0,\dots,u_n$. The definition asserts neither that the $u_i$ are unit vectors with the prescribed inner products, nor that $\Sigma(C)$ lies in a hemisphere, nor any metric statement about it: all of that is proved in [[lem-cg-spherical-simplex-existence-and-link-gram-formula]].

**Angular link of a Euclidean face.** Let $C$ be a compact convex polyhedral cell in its Euclidean affine hull with direction space $V$, given by finitely many affine inequalities $\ell_j\ge0$, and let $F$ be a nonempty face ([[def-finite-convex-cell-complex-and-linear-subdivision]]). Discard inequalities constant on the affine hull: their constants are nonnegative since $C$ is nonempty, so this does not change $C$. The remaining gradients are nonzero; in dimension zero no inequalities remain. Write $I(F)$ for the set of remaining $j$ with $\ell_j$ vanishing on $F$, $n_j:=\nabla\ell_j/|\nabla\ell_j|$ for the **inward unit normal** of the defining hyperplane $\ell_j=0$ (a facet normal when that hyperplane cuts out a facet), and
$$U(F):=\operatorname{span}\{x-y:x,y\in F\}\subseteq V$$
for the **direction space of $F$**, the linear span of the differences of points of $F$, which is $\{0\}$ exactly when $F$ is a vertex. The **tangent cone** of $C$ at $F$ is
$$T_FC:=\{\xi\in V:\langle\xi,n_j\rangle\ge0\text{ for all }j\in I(F)\},$$
equivalently the closure of $\{\lambda(x-p):x\in C,\ \lambda\ge0\}$ for any (hence every) $p$ in the relative interior of $F$, and the **normal cone** of $F$ in $C$ is
$$N_FC:=T_FC\cap U(F)^{\perp},\qquad U(F)^{\perp}=\{\xi\in V:\langle\xi,u\rangle=0\text{ for all }u\in U(F)\};$$
the **angular link** of $F$ in $C$ is the set of unit inward directions *normal to $F$*,
$$\operatorname{Lk}_C(F):=N_FC\cap S(V),\qquad S(V)=\{\xi\in V:|\xi|=1\},$$
and the **angular distance** of $\xi,\eta\in\operatorname{Lk}_C(F)$ is $d_{\mathrm{ang}}(\xi,\eta):=\arccos\langle\xi,\eta\rangle$, the principal inverse cosine ([[def-principal-inverse-sine-and-cosine]]); equivalently it is the intrinsic path metric of the round unit sphere restricted to the link, a metric of diameter at most $\pi$ ([[def-metric-space]]; proved in [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](v), using that $N_FC$ is a convex cone). For a point $p$ in the relative interior of $F$ the set of *all* unit inward directions at $p$ is $\operatorname{Lk}_C(p):=T_FC\cap S(V)$; when $\dim F=k$ it is the spherical join $S^{k-1}*\operatorname{Lk}_C(F)$ of the round unit sphere of $U(F)$ with the link of $F$, and for a vertex $F$ it coincides with $\operatorname{Lk}_C(F)$ (proved in [[thm-cg-cone-join-metric-and-local-product-chart]](4)).

For an isometric polyhedral gluing $X$ with cells $C_p$ ([[def-cg-abstract-isometric-polyhedral-gluing-and-chain-metric]]) the links $\operatorname{Lk}_{C_p}(F)$ of the cells containing a face $F$ are identified along the isometries induced by the gluing maps $h_{p,q}$, giving the **angular link** $\operatorname{Lk}_X(F)$ with the componentwise intrinsic path distance of the cells, extended by the auxiliary value $+\infty$ between components ([[def-cg-euclidean-cone-and-spherical-join-metrics]](1)); the links $\operatorname{Lk}_{C_p}(p)$ of the point $p$ glue in the same way to $\operatorname{Lk}_X(p)$. Its link cells are the unit normal direction sets in the cofaces $G>F$, with the induced face incidences. When $X$ is simplicial, the correspondence $G\mapsto G\setminus F$ identifies these cells with the nonempty simplices of the existing combinatorial link ([[def-simplicial-subcomplex-star-closure-and-link]]); for general polyhedral cells this is a polyhedral face link, not an abstract simplicial link without subdivision.

## Remarks

- **Sign convention of the normals.** The normals are *inward*: each $n_j$ points into $C$ along the increasing direction of $\ell_j$, so the tangent cone at a face is cut out by $\langle\xi,n_j\rangle\ge0$. With outward normals every inequality would be reversed. The two descriptions of $T_FC$ displayed above are proved to agree in [[lem-cg-spherical-simplex-existence-and-link-gram-formula]](v), together with the facts that $T_FC$ is independent of the chosen point in the relative interior of $F$ and that the angular distance is the intrinsic metric of the link.
- **What is deferred to the justifier.** The unit-norm and inner-product properties of the $u_i$ and the uniqueness of $\Sigma(C)$ up to an isometry of $S^n$ (clause (i)), the hemisphere and radial coordinates (clause (ii)), the metric axioms and intrinsic description of $d_{\mathrm{ang}}$ (clause (v)) and the Schur-complement formula for vertex links (clause (iv)) are all conclusions of [[lem-cg-spherical-simplex-existence-and-link-gram-formula]]; nothing beyond the construction is asserted here.
- **Why the vertices are not assumed to be unit vectors.** The Cholesky factor of $C$ is used only as a convenient ambient realisation; that its rows are unit vectors with inner products $c_{ij}$ is the content of clause (i) of the justifier, not part of the construction.
- **Face link versus point link.** The angular link $\operatorname{Lk}_C(F)$ of a face collects only the directions *normal* to $F$ and has dimension $\operatorname{codim}_CF-1$, with the empty link in codimension zero. In the simplicial case its cells are those of the combinatorial link of $F$. The larger set $\operatorname{Lk}_C(p)=T_FC\cap S(V)$ of all inward directions at a point $p$ in the relative interior of $F$ is the join $S^{k-1}*\operatorname{Lk}_C(F)$, and the two notions coincide exactly when $F$ is a vertex. The cone charts of [[thm-cg-cone-join-metric-and-local-product-chart]](4) use $\operatorname{Lk}_X(p)$, while the Schur-complement and metric-flag computations use the face link $\operatorname{Lk}_X(F)$.
