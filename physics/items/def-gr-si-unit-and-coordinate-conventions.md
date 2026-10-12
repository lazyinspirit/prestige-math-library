---
id: def-gr-si-unit-and-coordinate-conventions
kind: definition
title: "SI unit and coordinate conventions of the classical gravitational framework"
status: draft
origin: session
domain: physics
dependency_level: 5
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms, def-gr-metric-selected-connection, def-christoffel-symbols-of-an-affine-connection]
dependency_roles:
  def-gr-smooth-lorentzian-objects: formulation-prerequisite
  def-gr-smooth-covariant-two-tensor-field: formulation-prerequisite
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
  def-gr-metric-selected-connection: mathematical-premise
  def-christoffel-symbols-of-an-affine-connection: mathematical-premise
physical_scope: "Conventions for writing the smooth Lorentzian geometry of this framework with SI dimensions: conversion constant c, Newton constant G_N, cosmological parameter Lambda, coordinates, components and invariants. The conventions fix dimensions and unit restoration only; they assert no measured value, adopt no field law, and make no claim about nature."
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), Conventions, PDF p. 1 (c = 1; abstract indices; signature (-+++))"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), equations (1.5)-(1.6) with x^0 = ct and c = 1, printed pp. 4-5 (PDF pp. 11-12)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "D. Tong, General Relativity (Cambridge Part III Mathematical Tripos, Michaelmas 2019), natural units and the dimensions of G, printed p. 144 (PDF p. 151)"
      url: "https://web.archive.org/web/2023id_/https://www.damtp.cam.ac.uk/user/tong/gr/gr.pdf"
verification:
  precheck: n/a
---

## Definition

This item fixes the unit and coordinate readings of the explicitly defined
Lorentzian objects, smooth-curve proper time and four-velocity of
[[def-gr-smooth-lorentzian-objects]], the tensor fields of
[[def-gr-smooth-covariant-two-tensor-field]], and the constructed connection,
curvature, Ricci and scalar fields of [[def-gr-metric-selected-connection]].
It states conventions, not a physical law or a measurement.

**(a) Constants and tensor slot.** Adopt $c>0$ with SI dimension
$\mathrm m\,\mathrm s^{-1}$, $G_N>0$ with dimension
$\mathrm m^3\,\mathrm{kg}^{-1}\,\mathrm s^{-2}$, and a signed parameter
$\Lambda$ with dimension $\mathrm m^{-2}$. No numerical value is asserted.
Define $\kappa:=8\pi G_N/c^4$, of dimension
$\mathrm m^{-1}\,\mathrm{kg}^{-1}\,\mathrm s^2$.
For a smooth symmetric covariant two-tensor $T$ adopt the convention that its
components $T_{AB}=T(e_A,e_B)$ in an ordered $g$-orthonormal basis are energy
per volume, $\mathrm J\,\mathrm m^{-3}=\mathrm{kg}\,\mathrm m^{-1}\mathrm s^{-2}$.
This is a tensor slot and unit convention; interpreting a particular $T$ as
matter is a subsequent definition. Therefore $\kappa T_{AB}$ has dimension
$\mathrm m^{-2}$. No positivity, conservation or matter realization is assumed.

**(b) Coordinates and dimensions.** In a length-coordinate chart,
$x^0=ct$ and all four coordinates have units $\mathrm m$; $g_{ab}$ are
dimensionless and the quadratic line element $ds^2=g_{ab}dx^adx^b$ has units
$\mathrm m^2$. The Christoffel symbols defined by
$\nabla^g_{\partial_b}\partial_c=\Gamma^a{}_{bc}\partial_a$
([[def-christoffel-symbols-of-an-affine-connection]]) have units
$\mathrm m^{-1}$: the constructed formula differentiates dimensionless
$g_{ab}$ once with respect to a length coordinate. Curvature components have
units $\mathrm m^{-2}$ since the curvature operator differentiates the
connection once more and includes products of two connection coefficients;
so do $\operatorname{Ric}_{ab}$ and scalar curvature $S$ in these coordinates.
In a time-coordinate chart $x^0=t$ has units $\mathrm s$, and $g_{00}$ has
units $\mathrm m^2\,\mathrm s^{-2}$; mixed, spatial, angular or other chart
components have the dimensions obtained by the coordinate Jacobians. A single
component has no universal dimension in a general chart. Orthonormal-frame
readings use the normalized geometric basis, with its length normalization.

**(c) Curves and invariant readings.** For the smooth future timelike curve
and positive scaling parameter of [[def-gr-smooth-lorentzian-objects]] (e),
read $c$ as in (a) and
$\tau(s)=\tau_0+c^{-1}\int_{s_0}^{s}\sqrt{-g(\gamma',\gamma')}\,dr$
as a proper-time parameter in seconds. Its four-velocity $U=d\gamma/d\tau$
has length-coordinate and normalized orthonormal components in
$\mathrm m\,\mathrm s^{-1}$; in a time-coordinate chart $U^0=dt/d\tau$
is dimensionless and other component dimensions follow the coordinates.
Lorentzian length $c\,\Delta\tau$ is in metres. The tensors $R^g$,
$\operatorname{Ric}$ and the scalar $S$ have the orthonormal readings
$\mathrm m^{-2}$, whereas the lowered curvature components in a mixed chart
have the units required by the metric and coordinate slots.

**(d) Future observer readings and SI restoration.** Let $n$ be a future
unit timelike vector, $g(n,n)=-1$ and $g(n,N)<0$. Define
$\rho_n:=T(n,n)$, $j_n:=-\sharp(T(n,\cdot))$ and its spatial part
$\phi_n:=j_n-\rho_n n$; indeed $g(j_n,n)=-\rho_n$, so
$g(\phi_n,n)=0$. In a $g$-orthonormal basis with $e_0=n$, set
$\phi^i=-T(e_0,e_i)=T^{0i}$ for $i=1,2,3$. The **SI energy flux** vector
and **SI momentum density** covector are, respectively,

$$q_n:=c\phi_n,\qquad p_n:=\phi_n^{\flat}/c,\qquad q_n^i=-cT_{0i},\qquad (p_n)_i=-T_{0i}/c.$$

Thus $\rho_n$ and each $\phi^i$ have units $\mathrm J\,\mathrm m^{-3}$;
$q_n^i$ has units $\mathrm W\,\mathrm m^{-2}$ and $(p_n)_i$ has units
$\mathrm{kg}\,\mathrm m^{-2}\mathrm s^{-1}$. Stress components $T_{ij}$ have
units $\mathrm J\,\mathrm m^{-3}=\mathrm{Pa}$. Tensor components retain the
common energy-density units; the factors of $c$ convert their mixed readings
to different SI quantities. Future-directedness and the signs here are part
of the convention, not positivity assumptions on $T$.

**(e) Natural units.** Setting $c=1$, or additionally $G_N=1$, abbreviates
these dimensionful conventions. Restore the factors displayed above before
comparison with SI quantities; in particular the same spatial tensor component
corresponds to energy flux multiplied by $c$ and momentum density divided by
$c$. A length-coordinate null ray obeys $|d\mathbf x/dx^0|=1$ in an inertial
flat chart; this coordinate relation does not change the physical constant.
