---
page: riemann-curvature-and-riemannian-submanifolds-examples
title: Riemann Curvature and Riemannian Submanifolds — Examples
status: draft
items: []
examples: ["ex-euclidean-space-has-zero-curvature","ex-the-round-sphere-has-positive-constant-sectional-curvature","ex-hyperbolic-space-has-negative-constant-sectional-curvature","ex-curvature-of-a-riemannian-product","ex-gaussian-curvature-of-a-surface-of-revolution","ex-principal-curvatures-of-a-round-sphere","ex-the-cylinder-has-zero-gaussian-curvature-but-nonzero-second-fundamental-form","ex-the-catenoid-has-zero-mean-curvature-but-is-not-totally-geodesic","ex-a-great-sphere-is-totally-geodesic","cex-same-intrinsic-plane-with-different-extrinsic-curvature-after-bending","cex-zero-scalar-curvature-does-not-imply-flatness","ex-curvature-two-form-of-a-connection-on-a-trivial-plane-bundle"]
---

The first examples calibrate the curvature convention. Euclidean space is
flat, the round sphere of radius $r$ has constant sectional curvature
$+1/r^2$, and the upper-half-space model of hyperbolic space has constant
sectional curvature $-1/r^2$. The product formula then shows how curvature
restricts to each factor and why mixed tangent planes have zero sectional
curvature.

Explicit submanifolds separate intrinsic from extrinsic geometry. A surface
of revolution has Gaussian curvature $-r''/r$ in meridian arclength
coordinates. With the outward normal, a round sphere has principal
curvatures $-1/r$, while a circular cylinder has one principal curvature
$-1/r$ and one zero principal curvature. Thus the cylinder is intrinsically
flat but has nonzero second fundamental form. The catenoid has opposite
nonzero principal curvatures, so its averaged mean curvature vanishes without
total geodesy, whereas a great sphere is genuinely totally geodesic.

Bending a planar strip into a half-cylinder preserves the intrinsic metric
but changes the second fundamental form, making the extrinsic nature of
$\mathrm{II}$ concrete. The product
$S^2(r)\times\mathbb H^2(r)$ has zero scalar curvature but nonzero sectional
curvature, so scalar-flatness is strictly weaker than flatness.

Examples that invoke the sectional-curvature and Riemann-symmetry chain retain
its stated $\mathrm{AC}_\omega$ hypothesis. Their displayed coordinate,
product, and hypersurface calculations are finite or point-local and add no
further countable-family choice.

The final example returns to a noncommutative bundle connection. For the
rank-two trivial bundle with
$\omega=By\,dx+Ax\,dy$, direct calculation gives
$\Omega=(A-B+xy(BA-AB))\,dx\wedge dy$. It displays both the exterior
derivative term and the ordered matrix product in
$d\omega+\omega\wedge\omega$; treating the matrices as commuting would lose
the commutator contribution.
