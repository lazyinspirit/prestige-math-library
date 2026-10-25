---
page: "fundamental-solutions-newtonian-potentials-and-green-functions"
title: "Fundamental Solutions Newtonian Potentials and Green Functions"
status: published
items: ["def-fundamental-solution-of-a-constant-coefficient-operator", "def-laplace-fundamental-solution-with-positive-minus-laplacian-sign", "lem-distributional-derivatives-commute-with-convolution-against-test-functions", "lem-neumann-compatibility-from-the-divergence-theorem", "lem-puncturing-connected-open-subset-of-rn-preserves-path-connectedness", "cor-neumann-solutions-are-unique-modulo-componentwise-constants", "lem-laplace-fundamental-kernel-is-locally-integrable", "lem-laplace-fundamental-solution-is-harmonic-off-its-pole", "def-newtonian-potential", "thm-minus-laplacian-of-the-fundamental-solution-is-dirac", "lem-newtonian-potential-is-well-defined-for-compactly-supported-bounded-data", "thm-decay-of-the-newtonian-potential-of-compactly-supported-data", "thm-newtonian-potential-solves-poisson-distributionally", "thm-newtonian-potential-for-holder-data-is-classical", "def-dirichlet-green-function-for-minus-laplacian", "lem-dirichlet-green-function-is-unique-and-positive", "thm-green-function-symmetry", "def-poisson-kernel-from-a-green-function", "thm-green-representation-formula", "cor-zero-dirichlet-green-representation-for-poisson-data", "cor-classical-dirichlet-and-poisson-problems-are-unique", "rem-green-identities-come-from-the-euclidean-integration-pair"]
examples: []
---

This page fixes the sign convention $-\Delta\Phi=\delta_0$ and the normalized
kernel $\Phi(x)=|x|^{2-n}/((n-2)\omega_{n-1})$ for $n\ge3$,
$\Phi(x)=-(2\pi)^{-1}\log|x|$ for $n=2$, proves the distributional Dirac
identity $-\Delta T_\Phi=\delta_0$, and develops Newtonian potentials of compactly supported
data: absolute convergence for bounded compact data, far-field decay, the
distributional Poisson equation for compact $L^1$ data and the classical
$C^{2,\alpha}$ result for Hölder data. The Dirichlet Green function
$G_\Omega(x,y)=\Phi(x-y)-H_y(x)$ is then treated through uniqueness and
positivity, symmetry in its two slots, the Poisson kernel
$P_\Omega=-\partial_{\nu_y}G_\Omega$, the Green representation formula for
classical data, and the zero-Dirichlet and Dirichlet/Neumann uniqueness
corollaries. The Laplace-kernel and Green-function results on this page assume
$n\ge2$; the opening constant-coefficient fundamental-solution definition and the
componentwise Neumann-uniqueness corollary also cover $n=1$. The one-dimensional interval Green kernel is an analogue
confined to the examples page.

All boundary-flux computations use the Euclidean surface measure, divergence
theorem and Green identities of the surface-measure page, as recorded in the
closing remark; the outward normal is used on the outer boundary and reversed
on every excised inner sphere. Countable Choice ($\mathrm{AC}_\omega$) is
stated and propagated by every item that invokes those measure, surface,
divergence or Green interfaces, and no full Axiom of Choice is used. The Green
representation theorem assumes a bounded $C^1$ domain carrying a Dirichlet
Green function whose correctors satisfy $H_y\in C^2(\overline\Omega)$; no
existence of Green functions is asserted, the Neumann compatibility equation
is necessary only, and no weak-boundary, interior-$C^2$ or manifold-Stokes
strengthening is claimed here.
