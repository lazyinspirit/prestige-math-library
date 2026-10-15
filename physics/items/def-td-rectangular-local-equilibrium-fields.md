---
id: def-td-rectangular-local-equilibrium-fields
kind: definition
title: Rectangular local-equilibrium field data
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 1
physical_scope: Smooth local-equilibrium continuum data on a fixed three-dimensional Euclidean rectangle; this definition adopts no balance law or constitutive law.
deps: [def-td-si-quantities]
dependency_roles:
  def-td-si-quantities: formulation-prerequisite
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Statistical Mechanics, §6.5, heat conduction"
      url: https://batch.libretexts.org/print/Letter/Finished/phys-32579/Full.pdf
      locator: Chapter 6, §6.5, equations (114)–(119)
    - title: MIT OpenCourseWare, 18.303 Linear Partial Differential Equations, The 1-D Heat Equation
      url: https://ocw.mit.edu/courses/18-303-linear-partial-differential-equations-fall-2006/d11b374a85c3fde55ec971fe587f8a50_heateqni.pdf
      locator: Full-text lecture note retrieved; §§1.1–1.2 on temperature fields and heat-equation boundary data.
---

## Definition

Let $I\subseteq\mathbb R$ be an open interval measured in seconds, let $L_1,L_2,L_3>0$ be lengths in metres, and set $\Omega=\prod_{i=1}^3(0,L_i)\subseteq\mathbb R^3$ with closure $\overline\Omega$. A rectangular local-equilibrium field record consists of an open temperature interval $\mathcal T\subset(0,\infty)$, a temperature field $T:\overline\Omega\times I\to\mathcal T$ whose time derivative through order one and spatial derivatives through order two extend continuously to $\overline\Omega\times I$, a function $u\in C^1(\mathcal T,\mathbb R)$ of internal-energy density in $\mathrm{J\,m^{-3}}$, and its volumetric heat capacity $c(T):=u'(T)>0$ in $\mathrm{J\,m^{-3}\,K^{-1}}$. The coordinates $x_i$ are lengths in metres, and $T$ is measured in kelvins, using [[def-td-si-quantities]].

The record may also include a thermal-energy flux-density field $j_Q:\overline\Omega\times I\to\mathbb R^3$ with components in $\mathrm{W\,m^{-2}}$ and a conductivity field $K:\overline\Omega\times\mathcal T\to\mathbb R^{3\times3}$ with entries in $\mathrm{W\,m^{-1}\,K^{-1}}$. For any unit vector $n$, $j_Q\cdot n$ is the signed thermal-energy transfer rate per unit area in direction $n$, positive when energy flows along $n$. The flux and tensor are field data here; no relation between them is imposed by this Definition. In Euclidean coordinates, $\nabla T=(\partial_{x_1}T,\partial_{x_2}T,\partial_{x_3}T)$. The classical divergence $\operatorname{div}j_Q(x,t):=\sum_{i=1}^3\partial_{x_i}(j_Q)_i(x,t)$ is defined at interior points where these three partial derivatives exist. No spatial differentiability of an optional flux is assumed here; any balance or result using its divergence throughout a domain must impose the needed regularity. On a flat face, $n$ denotes its outward unit normal.

This is a specified regular field class on a fixed rigid body. It does not assert that every physical medium has local-equilibrium fields, nor does it adopt a heat equation, a boundary condition, Fourier's law, or an entropy-production law.

## Remarks

The label “local-equilibrium field record” names this model's field class; it is not a claim about microscopic equilibration.
