---
page: spherical-simplex-metrics-angular-links-and-cones-examples
title: "Spherical Simplex Metrics, Angular Links, and Cones — Examples"
status: draft
items: []
examples: [ex-cg-spherical-simplex-and-vertex-link-schur-complement,
           ex-cg-link-edge-lengths-versus-dihedral-angles,
           ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation]
---

This companion is a dependency leaf: its examples use only the theory of
[[spherical-simplex-metrics-angular-links-and-cones]] and that page's
established prerequisite closure, and no other theory page may depend on a
supplier homed here.

[[ex-cg-spherical-simplex-and-vertex-link-schur-complement]] builds the
spherical simplex of the $4\times4$ matrix with diagonal $1$ and constant
off-diagonal $\tfrac12$: $C$ is positive definite by the quadratic form
$(1-c)|x|^2+c(\sum_ix_i)^2$, the Cholesky realisation gives four unit vectors
with pairwise inner product $\tfrac12$, the functional with $\varphi(u_i)=1$
is the pairing with $w=\tfrac25(u_0+u_1+u_2+u_3)$, and the vertex-link Schur
complement has off-diagonal entries $\tfrac13$ with positive quadratic form
$\tfrac23|y|^2+\tfrac13(\sum_iy_i)^2$. Iterating over the edge spanned by
$u_0,u_1$ gives the two-step Schur value $\tfrac14$, matching an independent
orthogonal-projection computation, so the face-link formula is
order-independent on this matrix.

[[ex-cg-link-edge-lengths-versus-dihedral-angles]] compares the two angles of
the regular $2m$-gon: the interior angle $\pi-\pi/m$ is the angular distance
between the two incident edge directions at a vertex, i.e. the edge length of
the vertex link, while the two inward edge normals are at distance $\pi/m$, so
the mirror angle of the canonical rank-two form of type $I_2(m)$ is $\pi/m$;
the link Gram matrix has off-diagonal $-\cos(\pi/m)$, its cosine is the
negative of the mirror-angle cosine, and the values are distinct for $m\ge3$.
The product of the two reflections is a rotation of the positive-definite
plane through $2\pi/m$ (trace $2\cos(2\pi/m)$, order $m$).

[[ex-cg-disconnected-universal-coxeter-nerve-and-angular-truncation]] tests
the truncation convention on the nerve of the universal Coxeter system: the
nerve is a finite set of isolated points, the componentwise path distance is
$+\infty$ off the diagonal, and the truncated metric is $\pi$ there; the cone
is the metric star of $n$ rays, in which the distance of points on different
rays is the sum of their radii along the through-apex path, the
$D_\pi$-geodesic hypothesis holds vacuously, and every value $\theta<\pi$ in
place of $\pi$ is inconsistent with the star geometry: the points would be
declared closer than any path joining them, and the open rays would still
separate the components. Thus only the truncated value, and never the
auxiliary $+\infty$, may be passed to the cone formula.
