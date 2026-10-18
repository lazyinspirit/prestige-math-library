---
id: lem-nurbs-knot-cell-simplicial-geometry-adapter
kind: lemma
title: Matching simplex subdivisions give a NURBS knot-cell geometry interface
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
deps:
  - def-countable-choice
  - def-nurbs-patch-map-and-rational-spline-space
  - def-isoparametric-curved-cell-map
  - def-curved-domain-geometry-approximation
  - def-matching-affine-simplicial-meshes
  - thm-euclidean-inverse-function-theorem
  - thm-heine-borel-rn
  - cor-bolzano-weierstrass-in-rn
  - prop-the-image-of-a-lower-dimensional-c1-manifold-is-null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Guermond, Finite Element Interpolation, Chapter 8, Meshes, complete 12-page chapter, §§8.1–8.2"
      url: https://people.tamu.edu/~guermond/M661_FALL_2023/chap08.pdf
---

## Statement

Assume Countable Choice. Let $F,G$ be two admissible tensor-product NURBS maps on $\overline Q=[0,1]^d$, $d\in\{2,3\}$, with finite knot partitions. Geometry continuity is required even if a representation allows a degree-plus-one interior knot; in particular it follows from degrees $p_r\ge1$ and interior multiplicities $\mu_r\le p_r$. Take the union of all distinct knots in each coordinate, discard zero-length spans, and let $\mathcal C$ be the resulting common rectangular partition. On each closed $C\in\mathcal C$, use the polynomial expressions inherited from the incident open cell, rather than a discontinuous evaluation convention at an endpoint. Their positive denominators, positive Jacobian lower bounds and bounded map/inverse derivatives are required on these expressions. They follow by continuity from uniform cellwise admissibility bounds. No agreement of cross-face normal derivatives is required.

For $C=a+\operatorname{diag}(\ell_1,\ldots,\ell_d)[0,1]^d$, subdivide by the $d!$ simplices
$$T_{C,\pi}=\{a+\operatorname{diag}(\ell_1,\ldots,\ell_d)t:0\le t_{\pi(1)}\le\cdots\le t_{\pi(d)}\le1\},\qquad \pi\in\mathfrak S_d.$$
These form a matching affine simplicial mesh of $\overline Q$. The restricted maps $F|_{T_{C,\pi}}$ and $G|_{T_{C,\pi}}$ are admissible curved-cell maps in [[def-isoparametric-curved-cell-map]], with the reference simplices taken in parameter coordinates. Their images are matching curved partitions, and the two global maps satisfy [[def-curved-domain-geometry-approximation]] with $\Phi=F$, $\Phi_h=G$, $\Omega=F(Q)$ and $\Omega_h=G(Q)$. The geometry errors are precisely $e_0=\|F-G\|_\infty$ and $e_1=\|DF-DG\|_{L^\infty(\text{cells};op)}$ on the box; subdivision does not change their essential suprema. Matching traces means agreement within each mapped mesh across shared facets, not $F=G$ on the exterior boundary. A prescribed common exterior boundary requires a separate equality of those traces. Common image topology is given by the homeomorphism $G\circ F^{-1}$.

For each finite cell, the rational expression has a smooth extension to a neighborhood of its closed rectangle: its polynomial numerator and denominator extend there and the denominator remains positive after shrinking the neighborhood. Its second derivatives are therefore bounded on that closed cell. For a sequence of grids, uniform reference-simplex shape regularity follows if $\max_r\ell_r/\min_r\ell_r\le\kappa$ on every rectangle with fixed $\kappa$. Uniform curved-map bounds additionally require uniform first, inverse and second derivative bounds of the rational cell expressions. Neither uniform second derivative bounds nor a shape constant follows from a first derivative error bound alone. The construction changes the geometry presentation only; rational analysis functions remain rational and are not reclassified as affine P1 functions.

## Facts & Assumptions

**Given:** The two admissible maps, their common nondegenerate knot partition, their continuous traces and closed-cell rational expressions, with the stated map bounds.

[F1] [[def-nurbs-patch-map-and-rational-spline-space]] defines rational geometry maps, global injectivity, bi-Lipschitz continuity, positive cell Jacobians and matching physical cells.

[F2] [[def-matching-affine-simplicial-meshes]] and [[def-isoparametric-curved-cell-map]] specify the reference matching mesh and the $C^2$, neighborhood-diffeomorphism, positive-Jacobian and derivative conditions on curved cells. [[def-curved-domain-geometry-approximation]] specifies the common-reference geometry errors and boundary-trace compatibility.

[F3] [[thm-euclidean-inverse-function-theorem]] gives a local diffeomorphism wherever a $C^1$ extension has nonsingular derivative; [[thm-heine-borel-rn]] gives compactness of closed simplices, and [[cor-bolzano-weierstrass-in-rn]] gives a convergent subsequence of every bounded Euclidean sequence.

[F4] [[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]: under Countable Choice, the image of a $C^1$ map from a lower-dimensional manifold into $\mathbb R^d$ is Lebesgue null; in particular each affine hyperplane containing a reference-simplex facet is null.

[A1] [[def-countable-choice]] is used to select hypothetical counterexample pairs or remote preimages in the sequential compactness arguments and is retained through the null-image supplier [F4]. All coefficient bounds, specified rounding and contraction iterations are explicit.

## Proof

1.1 In the normalized cube every point has some ordering of its $d$ coordinates, hence belongs to at least one displayed simplex; strict order specifies exactly one interior. For a permutation $\pi$, the closed ordered region is the convex hull of the chain vertices $0,e_{\pi(d)},e_{\pi(d)}+e_{\pi(d-1)},\ldots,\sum_{r=1}^de_{\pi(r)}$: the barycentric coefficients are $1-t_{\pi(d)}$, $t_{\pi(d)}-t_{\pi(d-1)},\ldots,t_{\pi(2)}-t_{\pi(1)},t_{\pi(1)}$. Thus a tie between consecutive coordinates sets exactly the corresponding barycentric coefficient to zero. For two permutations, the common weak order groups precisely the coordinates whose order is reversed into equal blocks; their intersection is the convex hull of the common chain vertices at the block boundaries, hence is a whole face of each simplex. This proves the subdivision is a simplicial complex with disjoint interiors. On a rectangular face one coordinate is $0$ or $1$; the remaining subdivision orders the remaining normalized coordinates. Adjacent rectangles have the same intervals in those coordinates and the same increasing-axis convention, so their induced face subdivisions coincide. The affine diagonal maps preserve these face identities. Therefore the finite subdivision is a matching affine simplicial mesh as required in [F2]. [F2, given, algebra]

1.2 On a closed rectangle each map is a quotient of finite polynomials with denominator bounded below by a positive number. Its cell expression therefore extends smoothly across the rectangle into a neighborhood. Its derivatives, including second derivatives, are bounded there after shrinking the neighborhood. The determinant extends continuously with a positive lower bound on the closed cell. Its restriction to each closed simplex is injective by global injectivity of the map on $\overline Q$. This restriction actually extends injectively to some neighborhood of that simplex: otherwise there exist distinct pairs of points at distance at most $1/n$ from the simplex with equal images. Compactness [F3] gives convergent subsequences with limits in the simplex; equality of images and injectivity force the same limit, contradicting local injectivity [F3] near that limit. A smaller neighborhood retains positive determinant, so the restriction is a neighborhood diffeomorphism. These arguments apply separately to $F$ and $G$. [A1, F1, F3, given, algebra]

2.1 Continuity of the original maps makes the restricted traces agree on shared simplex facets, including those lying on original knot planes. Global injectivity preserves disjoint interiors and makes intersections of physical cells precisely the images of the corresponding reference intersections. Their union is the original image. The map, inverse, determinant and finite second-derivative bounds from step 1.2 give all curved-cell requirements [F2]. The reference simplices here are actual parameter simplices; if one instead precomposes with a map from a unit simplex, its Jacobian scaling factors must be retained. [F1, F2, step 1.1, step 1.2, algebra]

3.1 The cell restrictions do not alter the global maps, their physical images, or their value and almost-everywhere derivative differences. Every introduced reference-simplex facet lies in an affine hyperplane, the image of an affine $C^1$ map from $\mathbb R^{d-1}$ into $\mathbb R^d$. By [F4] and [A1] each such hyperplane is null, and the finite union of introduced facets is null. Thus taking essential suprema over the refined interiors gives the same $e_1$; continuity gives the same $e_0$. Since both maps are bi-Lipschitz bijections of the closed box, $G\circ F^{-1}$ is the required homeomorphism between the closed image domains. The within-mesh trace matching in step 2.1 supplies boundary-trace compatibility in [F2]; no exterior trace equality between distinct maps has been proved. [A1, F1, F2, F4, step 2.1, algebra]

4.1 Each normalized ordered-coordinate simplex belongs to a finite set depending only on $d$. Under diagonal scaling, diameter increases by at most $\max_r\ell_r$ and inradius decreases by at most the factor $\min_r\ell_r$ relative to the normalized simplex. Hence the diameter/inradius ratio is at most $\kappa$ times the largest ratio in that fixed finite set. This proves the stated reference shape bound. The remaining uniform curved-map bounds are exactly the additional displayed family assumptions; finite-grid smoothness in step 1.2 supplies only finite-grid constants. No analysis-space change was made in the subdivision. [step 1.1, step 1.2, F2, given, algebra] ∎

## Remarks

For $d=2$, the ordered-coordinate subdivision draws the same diagonal on adjacent rectangles, so their common edge is a whole face of both triangulations. The picture illustrates that convention only; the coordinate-order and face argument in step 1.1 proves the general $d\in\{2,3\}$ claim.

```tikz
\begin{tikzpicture}[scale=1.45]
  \draw[thick] (0,0) rectangle (1,1);
  \draw[thick] (1,0) rectangle (2,1);
  \draw[thick] (0,0) -- (1,1);
  \draw[thick] (1,0) -- (2,1);
  \draw[dashed] (1,0) -- (1,1);
  \node at (0.5,0.52) {$C_1$};
  \node at (1.5,0.52) {$C_2$};
  \node[below] at (1,0) {shared face};
  \node[above] at (0.5,1) {$t_1\le t_2$};
  \node[above] at (1.5,1) {$t_1\le t_2$};
\end{tikzpicture}
```
