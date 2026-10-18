---
id: thm-curved-uniform-nvb-quality-and-termination
kind: theorem
title: "Quality and finite termination for the curved square NVB family"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 8
deps:
  - alg-delaunay-seeded-curved-uniform-nvb-refinement
  - alg-dorfler-marking-and-conforming-nvb-refinement
  - def-afem-nvb-labelled-triangulation-family
  - lem-afem-nvb-conforming-closure-and-cumulative-counting
  - lem-curved-nvb-closure-preserves-matching-traces
  - lem-afem-nvb-shape-regularity-and-three-generation-properties
  - def-isoparametric-curved-cell-map
  - def-curved-domain-geometry-approximation
  - thm-incremental-planar-delaunay-correctness-and-termination
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jonathan R. Shewchuk, Delaunay Refinement Mesh Generation, 1999"
      url: https://people.eecs.berkeley.edu/~jrs/meshpapers/delnotes99.pdf
verification:
  precheck: pass
---

## Statement

For every tolerance $0<\tau\le\sigma/4=1/4$, the algorithm [[alg-delaunay-seeded-curved-uniform-nvb-refinement]] with square boundary angle $\alpha=\pi/2$ and nonincident-feature separation $\sigma=1$ terminates after finitely many three-generation cycles. Its reference triangles remain right isosceles with minimum angle $\pi/4$, all interfaces match, and every curved cell map is orientation preserving. Pointwise on each cell, if $a_K$ is an affine parametrization of its reference triangle, then the induced metric $G_{\Phi,K}=(D(\Phi\circ a_K))^TD(\Phi\circ a_K)$ has spectral condition number $\kappa_2(G_{\Phi,K})\le(81/16)\kappa_2(G_{\mathrm{ref},K})$, where $G_{\mathrm{ref},K}=(Da_K)^TDa_K$. The returned maximum curved-cell diameter is at most $\tau$. This is a guarantee for this square/shear family; it asserts no general Delaunay minimum-angle theorem, adaptive complexity bound, or 3D shape bound.

## Facts & Assumptions

**Given:** The four square-corner sites, a successful exact Delaunay triangulation, compatible initial labels, the shear $\Phi(x,y)=(x,y+x^2/4)$, tolerance $0<\tau\le1/4$, boundary angle $\pi/2$, and feature separation $\sigma=1$.

[F1] [[thm-incremental-planar-delaunay-correctness-and-termination]]: the exact planar algorithm returns a triangulation of the convex hull with a coherent tie convention.

[F2] [[def-afem-nvb-labelled-triangulation-family]]: a bisection splits its reference edge at the midpoint and retains the prescribed generation labels.

[F3] [[lem-afem-nvb-shape-regularity-and-three-generation-properties]]: three complete generations give shape-regular descendants and child diameters at most half the parent diameter.

[F4] [[lem-curved-nvb-closure-preserves-matching-traces]]: recursive closure yields matching affine edges, and a common admissible map sends them to matching curved interfaces.

[F6] [[alg-dorfler-marking-and-conforming-nvb-refinement]]: a budget-exhausted call discards the tentative forest and returns the original mesh.

[A1] The algorithm input certifies that the four square corners have interior angles $\pi/2$ and that the minimum distance between nonincident boundary features is at least $1$ ([[alg-delaunay-seeded-curved-uniform-nvb-refinement]]).

[F5] [[def-isoparametric-curved-cell-map]] and [[def-curved-domain-geometry-approximation]]: positive Jacobian and derivative/inverse bounds define admissible curved-cell geometry.

## Proof

1.1 Directly from the square coordinates, each interior angle is $\pi/2$, opposite edges and nonincident vertices/edges are separated by distance $2$, so $\sigma=1$ is a valid lower certificate [A1]. The four corners are distinct dyadic sites in convex position. By [F1] the returned Delaunay triangulation covers the square; with four extreme vertices it has exactly two triangles sharing one diagonal. Each is right isosceles. Labeling the shared diagonal as reference on both sides gives compatible initial labels. The two seed triangles have different vertex-site sets, hence distinct sorted site-index triples; their lexicographic ranks initialize two distinct operational roots without changing those edge labels. [F1, A1, given, algebra]


1.2 In each call the squared estimator array is constantly one and the oscillation array is zero. With $\theta_E=1$, the shortest initial segment whose sum reaches the total contains every cell, so every current cell is requested for three generations. The persistent root-and-binary-path identifiers in [F2] assign a unique order to every generated pending leaf; child identifiers are determined by the stored parent vertex list before it is replaced. At every stage the pending set is finite, so its least identifier exists. The recursive closure theorem [F4] says this finite request terminates, so some finite number $N$ of bisections suffices. By [F6], failed budget calls discard tentative splits and their identifiers, leaving the same ordered input mesh for retry; repeated doubling eventually reaches $B\ge N$ and a complete call. [F2, F4, F6, given, construct]


1.3 The shear extends to the global $C^2$ diffeomorphism $\Phi(x,y)=(x,y+x^2/4)$ of $\mathbb R^2$, with explicit inverse $\Phi^{-1}(X,Y)=(X,Y-X^2/4)$ and determinant $\det D\Phi=1$. On the square, $D\Phi=\begin{pmatrix}1&0\\x/2&1\end{pmatrix}$ and both $\|D\Phi\|_{op}$ and $\|D\Phi^{-1}\|_{op}$ are at most $3/2$ by the Frobenius bound. The second derivatives of the map and its inverse have operator norm $1/2$. Thus the shear satisfies the positive-Jacobian, derivative, inverse-derivative and $C^2$ bounds of [F5]; its cell traces agree because every cell uses the same global map, and its injectivity verifies the common-map hypothesis of [F4]. [F4, F5, given, algebra]


2.1 Each right-isosceles triangle has its hypotenuse as reference edge. Bisection at the hypotenuse midpoint joins that point to the right-angle vertex; the two resulting triangles have equal legs of half the parent hypotenuse and hence are right isosceles, with their inherited leg as hypotenuse/reference. Thus every bisection in the closure process preserves the $45^\circ$ minimum angle; [F3] supplies the uniform shape bound and three-generation diameter reduction. [F2, F3, step 1.1, algebra]


2.2 By [F3], each complete three-generation request reduces every requested parent diameter by at least one half; closure only adds bisections, which cannot increase diameter. The initial reference diameter is $2\sqrt2$. Since $\|D\Phi\|_{op}\le\|D\Phi\|_F\le3/2$ on the square, the mean-value inequality gives mapped diameter at most $(3/2)2^{-k}2\sqrt2$. A finite integer $k$ satisfies the stopping inequality for every $\tau>0$. [F3, F5, step 1.2, algebra]


3.1 Let $A_K=Da_K$. The bounds in step 1.3 imply $\kappa_2(D\Phi)\le\|D\Phi\|_{op}\|D\Phi^{-1}\|_{op}\le9/4$. Since $D(\Phi\circ a_K)=D\Phi(a_K)A_K$, submultiplicativity gives $\kappa_2(D(\Phi\circ a_K))\le(9/4)\kappa_2(A_K)$. The spectral condition number of $D(\Phi\circ a_K)^TD(\Phi\circ a_K)$ is the square of that derivative condition number, and $\kappa_2(A_K^TA_K)=\kappa_2(A_K)^2$, proving the stated $81/16$ metric bound. The reference triangles have disjoint interiors in a square of area $4$. Any right-isosceles reference triangle of diameter at least $\tau/(3/2)$ has area at least $\tau^2/9$; disjoint interiors therefore allow at most $36/\tau^2$ such cells. This packing bound is consistent with the finite uniform refinement and the stated positive feature and angle certificates. [F2, F5, step 2.1, step 2.2, step 1.3, algebra] ∎

