---
page: fourier-restriction-and-the-stein-tomas-theorem
title: Fourier Restriction and the Stein–Tomas Theorem
status: published
items: [def-euclidean-hypersurface-normal-shape-operator-and-curvature, lem-smooth-euclidean-hypersurface-graph-and-localization, def-fourier-restriction-and-adjoint-extension-operators, lem-fourier-pairing-for-a-finite-measure-and-schwartz-data, lem-unit-sphere-is-lebesgue-null, lem-sphere-finite-graph-charts-and-surface-density, lem-van-der-corput-oscillatory-integral-estimate, lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph, lem-restriction-and-extension-estimates-are-dual, lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase, lem-spherical-cap-and-dual-slab-scales, lem-compact-curved-hypersurface-finite-graph-cover, lem-tt-star-reduces-extension-to-convolution-with-surface-measure-transform, lem-cap-wave-packet-has-dual-tube-concentration, lem-localized-curved-patch-measure-transform-decay, lem-stationary-phase-decay-for-spherical-surface-measure, lem-graph-patch-extension-family-has-dispersive-and-ltwo-slice-bounds, thm-knapp-necessary-condition-for-spherical-ltwo-restriction, lem-stein-tomas-tt-star-bound-from-fractional-integration, thm-stein-tomas-spherical-restriction-theorem, cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature]
examples: []
---

This page develops $L^2$-density Fourier restriction theory for a compact
curved hypersurface. The definition fixes the pointwise restriction operator
$R_0f=\widehat f|_S$ on Schwartz data — necessarily, since surface measure is
carried by a Lebesgue-null set — and the adjoint extension operator
$Eg=(g\sigma)^\vee$, together with its boundedness, uniform continuity and
$L^1$--$L^2$ bound. A finite-measure pairing lemma supplies the two identities
that drive everything: the $L^2(\sigma)$ pairing against Schwartz data and the
convolution identity $(\widehat F\mu)^\vee=F*\check\mu$. Restriction and
extension estimates are then proved to be equivalent, with equal least
constants and adjoint extensions.

The endpoint route is local. One-dimensional van der Corput estimates are
proved by bounded primitives, and a separate multidimensional stationary-phase
argument gives
the decay of the spherical surface measure, $|\widehat\sigma(\xi)|\lesssim
(1+|\xi|)^{-(n-1)/2}$, and, after the finite spherical graph partition and the
localized curved-patch decay, the graph-patch slice family $U(t)$ obeys the
dispersive bound $\|U(t)g\|_\infty\lesssim\langle t\rangle^{-(n-1)/2}\|g\|_1$
and the uniform Plancherel bound $\|U(t)g\|_2\lesssim\|g\|_2$. Interpolating
these at $p_0=2(n+1)/(n+3)$ produces the decay
$\langle t\rangle^{-\beta}$ with $\beta=(n-1)/(n+1)$ and exponent identity
$1/p_0-1/p_0'=2/(n+1)=1-\beta$, so the one-dimensional
Hardy–Littlewood–Sobolev theorem of order $2/(n+1)$ bounds the slice
convolution and completes the $TT^*$ reduction. Knapp cap packets on dual
tubes of dimensions $\delta^{-1}\times\cdots\times\delta^{-1}\times\delta^{-2}$
give the matching necessary condition $p\le p_0$ (equivalently
$q\ge q_0=2(n+1)/(n-1)$), and the finite curved graph localization transfers the theorem to
compact hypersurfaces with everywhere nonvanishing extrinsic Gaussian
curvature.

The estimates developed here concern $L^2$ surface densities. Countable
Choice is declared and propagated
through the chart, partition, density, duality and extension interfaces used
by the proofs.
