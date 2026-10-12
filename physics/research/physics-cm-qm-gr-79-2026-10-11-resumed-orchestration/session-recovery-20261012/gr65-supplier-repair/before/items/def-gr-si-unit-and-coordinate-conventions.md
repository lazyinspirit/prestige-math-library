---
id: def-gr-si-unit-and-coordinate-conventions
kind: definition
title: "SI unit and coordinate conventions of the classical gravitational framework"
status: draft
origin: session
domain: physics
dependency_level: 3
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-gr-smooth-lorentzian-objects, def-gr-smooth-covariant-two-tensor-field, def-gr-inverse-metric-and-musical-isomorphisms]
dependency_roles:
  def-gr-smooth-lorentzian-objects: formulation-prerequisite
  def-gr-smooth-covariant-two-tensor-field: formulation-prerequisite
  def-gr-inverse-metric-and-musical-isomorphisms: mathematical-premise
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

This item fixes the unit and coordinate conventions used when the geometric
objects of [[def-gr-smooth-lorentzian-objects]] and the tensor fields of
[[def-gr-smooth-covariant-two-tensor-field]] are read as a classical
gravitational model. It is a statement of conventions, not a physical law and
not a measurement.

**(a) Constants.** The framework uses the conversion constant $c>0$ with SI
dimension $\mathrm m\,\mathrm s^{-1}$, the Newton constant $G_N>0$ with
dimension $\mathrm m^3\,\mathrm{kg}^{-1}\,\mathrm{s}^{-2}$, and a signed
cosmological parameter $\Lambda$ with dimension $\mathrm m^{-2}$. Neither the
numerical value of $c$ nor that of $G_N$ is asserted by this item; the signs
and dimensions are part of the conventions. The coupling constant that appears
in the field law adopted later in the framework is

$$\kappa:=\frac{8\pi G_N}{c^4},$$

with dimension $\mathrm m^{-1}\,\mathrm{kg}^{-1}\,\mathrm s^{2}$; consequently
$\kappa T$ has dimension $\mathrm m^{-2}$ when the components $T_{ab}$ of a
stress-energy tensor in a $g$-orthonormal frame are measured in
$\mathrm J\,\mathrm m^{-3}=\mathrm{kg}\,\mathrm m^{-1}\mathrm s^{-2}$.

**(b) Coordinates.** A smooth chart $(U,x)$ may be chosen in either of two
standard ways. In **length coordinates** one sets $x^0=ct$ with $x^0,x^1,x^2,x^3$
all measured in metres; then the metric components $g_{ab}$ are dimensionless,
$ds^2:=g_{ab}dx^adx^b$ has dimension $\mathrm m^2$, the Christoffel symbols
$\Gamma^a{}_{bc}$ have dimension $\mathrm m^{-1}$, and curvature components and
the scalar curvature have dimension $\mathrm m^{-2}$. In **time coordinates**
one sets $x^0=t$ in seconds; then $g_{00}$ carries dimension
$\mathrm m^2\,\mathrm s^{-2}$ and the remaining components need not share a
dimension. Angular coordinates or mixed coordinates change individual
component dimensions by the Jacobians of the coordinate change; there is no
universal dimension attached to a single component of a tensor in a general
chart. The $g$-orthonormal frames of [[def-gr-inverse-metric-and-musical-isomorphisms]]
are the frames in which components have the invariant dimensional readings
below.

**(c) Invariant quantities.** The following readings are part of the
conventions: $ds^2$ in $\mathrm m^2$; proper time $\tau$ in seconds;
four-velocity components $U^a=dx^a/d\tau$ in $\mathrm m\,\mathrm s^{-1}$;
$g$-orthonormal components $T_{ab}$ of a stress-energy tensor in
$\mathrm J\,\mathrm m^{-3}$; energy densities $T_{ab}n^an^b$ for unit timelike
$n$ in $\mathrm J\,\mathrm m^{-3}$; the cosmological parameter $\Lambda$ in
$\mathrm m^{-2}$; and the curvature components $R^a{}_{bcd}$, $\operatorname{Ric}_{ab}$
and $R$ in $\mathrm m^{-2}$.

**(d) Natural units.** The cited treatments frequently set $c=1$ and
sometimes $G_N=1$, equating units of length and time and, in the second case,
of mass and length. Such a choice is a shorthand for the conventions of
parts (a)-(c): a dimensionful result obtained in natural units must have the
factors of $c$ (and of $G_N$) restored before it is compared with an SI
quantity, and statements in this framework are stated with those factors
present. Natural-unit forms of equations are read as the corresponding SI forms
with the constants restored; the numerical value $c=1$ in one coordinate is
the coordinate statement $x^0=x^1$ in length coordinates for a null ray, not a
change of the physical constant.
