---
id: def-fd-wall-defect-capillary-models
kind: definition
title: "Common-wall residual and capillary boundary model"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-bl01
deps:
  - def-fd-x00
dependency_roles:
  def-fd-x00: mathematical-premise
dependency_level: 1
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Roger Temam, Navier–Stokes Equations and Nonlinear Functional Analysis, 2nd ed."
      url: "https://ftp.mi.fu-berlin.de/pub/klima/NavierStokes/Temam-NavierStokesEquationsAndNonlinearFunctionalAnalysis.pdf"
    - title: "Erik Wiedemann, Lecture Notes: Navier–Stokes Equations"
      url: "https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf"
    - title: "MIT 18.357 Interfacial Phenomena, Chapter 19: Water waves"
      url: "https://ocw.mit.edu/courses/18-357-interfacial-phenomena-fall-2010/04759cfc15c79928ca9f72a18b3864dd_MIT18_357F10_lec_all.pdf"
    - title: "ETH Zürich, Mechanics of Continuous Media, lecture 23: Capillary waves"
      url: "https://edu.itp.phys.ethz.ch/fs14/MechOfCont/lec23.pdf"
verification:
  precheck: pending
---

## Definition

Let $I\subseteq\mathbb R$ be an open time interval and let $D\subseteq\mathbb R^3$ be a bounded open $C^2$ domain. Here a $C^2$ domain is a nonempty connected open set whose boundary near each of its points, after a rigid Cartesian change of coordinates, is the graph $s_3=b(s_1,s_2)$ of a $C^2$ function on an open subset of $\mathbb R^2$, with the domain locally on one side of that graph. Use the Cartesian gradient, divergence, row-component Jacobian, and componentwise Laplacian on $D$. For constants $\rho_0,\nu>0$, a body acceleration $f\in C(I\times D;\mathbb R^3)$, a velocity $w\in C^1(I;C^2(D;\mathbb R^3))$, and a scalar pressure $q\in C(I;C^1(D))$, define the full momentum residual

$$\mathcal R(w,q):=\partial_t w+(w\cdot\nabla)w+\rho_0^{-1}\nabla q-\nu\Delta w-f.$$

The forced constant-density incompressible model is $\mathcal R(u,p)=0$ with $\operatorname{div}u=0$. For boundary statements, $C^k(\overline D)$ means restrictions of $C^k$ functions on an open neighborhood of $\overline D$, with all derivatives through order $k$ restricted continuously to the closure. A classical boundary trace is the restriction of this continuous extension to $\partial D$; it is independent of the extension. A common-wall comparison requires $u,v\in C^1(I;C^2(\overline D;\mathbb R^3))$ in this convention, with $\operatorname{div}u=\operatorname{div}v=0$, and their classical traces agree with the same prescribed boundary velocity $\gamma(t,\cdot)$. The interior residual above remains defined for the stated interior regularity even when no wall trace is supplied. For a divergence-free comparison field $w\in C^1(I;C^2(\overline D;\mathbb R^3))$ in this same boundary regularity class with a different trace, a divergence-free wall lift is a field $\ell\in C^1(I;C^2(\overline D;\mathbb R^3))$ in the same extension convention with $\operatorname{div}\ell=0$ and $\ell|_{\partial D}=w|_{\partial D}-\gamma$; whenever such a lift is supplied, the corrected field is $v=w-\ell$ and its residual is $\mathcal R(v,q)$. This definition asserts no lift exists for arbitrary boundary data.

For a flat periodic channel $D_{\rm ch}=\mathbb T_{L_x}\times(0,h)\times\mathbb T_{L_z}$, where $\mathbb T_L=\mathbb R/(L\mathbb Z)$ and $L_x,L_z,h>0$, a specific tangential lift for lower and upper wall defects $a(t)e_x$ and $b(t)e_x$ is

$$\ell(t,x,y,z)=\bigl(a(t)(1-y/h)+b(t)y/h,\,0,\,0\bigr).$$

Here $e_x=(1,0,0)$, $a,b\in C^1(I,\mathbb R)$, and the channel is periodic in $x,z$ with physical walls $y=0,h$. This lift is defined only for the stated tangential wall-defect data.

For the capillary-gravity model, let $h,\rho,g,L_x,L_y>0$, $\sigma\ge0$, use horizontal coordinates $(x,y)\in\mathbb T_{L_x}\times\mathbb T_{L_y}$ and vertical coordinate $z\in(-h,0)$, positive upward, with the flat mean surface at $z=0$. Let $\eta\in C^1(I;C^2(\mathbb T_{L_x}\times\mathbb T_{L_y}))$ be surface elevation and $\phi\in C^1(I;C^2(\mathbb T_{L_x}\times\mathbb T_{L_y}\times[-h,0]))$ a real scalar velocity potential: the represented velocity is $u:=\nabla\phi=(\phi_x,\phi_y,\phi_z)$, with no added uniform component. Functions on a horizontal torus are identified with their periodic lifts to $\mathbb R^2$, and their spatial derivatives are the derivatives of these lifts. In this closed-slab regularity notation the fields extend to a neighborhood of the slab with the indicated derivatives continuous, so all displayed derivatives extend continuously to the top and bottom. Set $\Delta=\partial_x^2+\partial_y^2+\partial_z^2$ and $\Delta_H=\partial_x^2+\partial_y^2$. The capillary-gravity potential model is

$$\Delta\phi=0\quad(-h<z<0),\qquad \phi_z(t,x,y,-h)=0,$$

$$\eta_t(t,x,y)=\phi_z(t,x,y,0),\qquad \phi_t(t,x,y,0)+g\eta(t,x,y)-\frac{\sigma}{\rho}\Delta_H\eta(t,x,y)=0.$$

These are definitions of mathematical model interfaces. They assert neither existence of a solution for general data nor nonlinear free-surface or sharp-interface convergence. In the optional SI interpretation, $[x]=[y]=[z]=[h]=\mathrm m$, $[t]=\mathrm s$, $[\eta]=\mathrm m$, $[\phi]=\mathrm{m^2\,s^{-1}}$, $[\rho]=\mathrm{kg\,m^{-3}}$, $[g]=\mathrm{m\,s^{-2}}$, $[\sigma]=\mathrm{N\,m^{-1}}$, $[\nu]=\mathrm{m^2\,s^{-1}}$, and $[f]=[\mathcal R]=\mathrm{m\,s^{-2}}$.

## Definition references

Cartesian fluid operators and the formal constant-density incompressible system: [[def-fd-x00]].

Bounded-domain Navier–Stokes function spaces and energy estimates: [Temam, §§2.5, 3.1, printed pp. 15–18 (PDF pp. 33–36)](https://ftp.mi.fu-berlin.de/pub/klima/NavierStokes/Temam-NavierStokesEquationsAndNonlinearFunctionalAnalysis.pdf).

Periodic relative-energy estimate and bounded-domain no-slip qualifications: [Wiedemann, §§5.1–5.2, printed pp. 38–43](https://www.math.fau.de/wp-content/uploads/2023/03/wiedemann-NSE-final.pdf).

Finite-depth capillary-gravity boundary model: [MIT 18.357, Chapter 19, printed pp. 78–79](https://ocw.mit.edu/courses/18-357-interfacial-phenomena-fall-2010/04759cfc15c79928ca9f72a18b3864dd_MIT18_357F10_lec_all.pdf).

Independent deep-water capillary-wave derivation and surface-tension pressure: [ETH Zürich, lecture 23, printed pp. 185–187 (PDF pp. 5–7)](https://edu.itp.phys.ethz.ch/fs14/MechOfCont/lec23.pdf).
