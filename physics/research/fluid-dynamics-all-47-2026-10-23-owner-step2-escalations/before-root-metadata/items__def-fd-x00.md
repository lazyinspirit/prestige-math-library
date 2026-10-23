---
id: def-fd-x00
kind: definition
title: "Formal parameterized fluid systems and observables"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
page: fd-x01
deps:
  - def-divergence-and-curl-of-a-c1-vector-field
  - def-laplacian-of-a-c2-function
  - def-jacobian-matrix-and-gradient
  - def-euclidean-inner-product
  - def-scalar-and-vector-line-integrals-along-piecewise-c1-paths
  - def-oriented-unit-normal-and-flux-of-a-surface-patch
dependency_roles:
  def-divergence-and-curl-of-a-c1-vector-field: mathematical-premise
  def-laplacian-of-a-c2-function: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  def-oriented-unit-normal-and-flux-of-a-surface-patch: mathematical-premise
dependency_level: 0
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Iain Stewart, MIT 8.09, Chapter 6: Fluid Mechanics"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf"
    - title: "MIT 6.013, Lecture 22: Acoustic Waves"
      url: "https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-fall-2005/57c7ed2d14f3555c88bd45d13a4cb287_lec22.pdf"
    - title: "Falk Feddersen, UC San Diego, Linear Surface Gravity Waves 1"
      url: "https://falk.ucsd.edu/pdf/WavesLecture02_211A.pdf"
    - title: "Jorge Lindley, Warwick MA3D1, Fluid Dynamics Support Class 6"
      url: "https://warwick.ac.uk/fac/sci/masdoc/people/studentpages/students2012/lindley/fluid_dynamics/fluidssupport6_2015.pdf"
verification:
  precheck: pending
---

## Definition

Let $I\subseteq\mathbb R$ be a nonempty open interval of time and let $\Omega\subseteq\mathbb R^3$ be a nonempty open set of Cartesian spatial coordinates $x=(x_1,x_2,x_3)$, with the standard right-handed orientation. A vector field $u:I\times\Omega\to\mathbb R^3$ is in the regularity class used here if $u$, its first time partial derivatives, its first spatial partial derivatives, and its second spatial partial derivatives all exist and are continuous. Scalar fields have the corresponding stated continuous derivatives: a pressure field $p$ has continuous first spatial partial derivatives; a density field $\rho$ has continuous first time and first spatial partial derivatives and takes values in $(0,\infty)$. A scalar function of one or several displayed real variables is $C^1$ when its first partial derivatives exist and are continuous; piecewise-$C^1$ paths have the meaning in the line-integral definition below. For a scalar field $f$, set $\nabla f=(\partial_{x_1}f,\partial_{x_2}f,\partial_{x_3}f)$; for a vector field $u=(u_1,u_2,u_3)$, set $\operatorname{div}u=\sum_{j=1}^3\partial_{x_j}u_j$, $\operatorname{curl}u=(\partial_{x_2}u_3-\partial_{x_3}u_2,\partial_{x_3}u_1-\partial_{x_1}u_3,\partial_{x_1}u_2-\partial_{x_2}u_1)$, and $\Delta f=\sum_{j=1}^3\partial_{x_j}^2f$, with $\Delta u$ applied componentwise. Define the row-component Jacobian $D_xu=(\partial_{x_j}u_i)_{i,j}$ and $(u\cdot\nabla)u=\sum_{j=1}^3u_j\partial_{x_j}u$.

For constants $\rho_0>0$ and $\mu>0$, define the kinematic-viscosity parameter $\nu=\mu/\rho_0$. The formal constant-density incompressible Navier--Stokes system is

$$\partial_tu+(u\cdot\nabla)u+\rho_0^{-1}\nabla p-\nu\Delta u=0,\qquad \operatorname{div}u=0.$$

Its associated formal Cauchy stress matrix is $\sigma=-pI_3+\mu(D_xu+(D_xu)^{\mathsf T})$. The corresponding steady Stokes system is $\rho_0^{-1}\nabla p-\nu\Delta u=0$ together with $\operatorname{div}u=0$; it omits both the time derivative and convective term. These are definitions of pointwise mathematical systems and do not assert that a physical fluid has a solution with the stated regularity.

For a barotropic branch, let $P:(0,\infty)\to\mathbb R$ have two continuous derivatives and let $V:\Omega\to\mathbb R$ have continuous spatial partial derivatives through order two. The formal compressible Euler system for $u$ and positive density $\rho$ is

$$\partial_t\rho+\operatorname{div}(\rho u)=0,\qquad \partial_tu+(u\cdot\nabla)u=-\rho^{-1}\nabla(P(\rho))-\nabla V.$$

At a constant background density $\rho_0>0$ with $P'(\rho_0)>0$, the positive parameter $c$ defined by $c^2=P'(\rho_0)$ is the sound-speed parameter of this mathematical branch. A separate rotating linear system, for constant $\Omega\in\mathbb R^3$ and scalar field $q$, is $\partial_tu+2\Omega\times u=-\nabla q$ and $\operatorname{div}u=0$.

The vorticity field is $\operatorname{curl}u$. If $\gamma:[a,b]\to\Omega$ is a closed piecewise-$C^1$ oriented curve, with $\gamma(a)=\gamma(b)$, its circulation is $\oint_\gamma u\cdot d\mathbf r$. If $S$ is a compact oriented regular surface patch in $\Omega$ with unit normal $n_S$, its volume-flux observable is $\int_S u\cdot n_S\,dS$. The traction on $S$ is $\sigma n_S$ and the formal resultant force is the componentwise surface integral $\int_S\sigma n_S\,dS$. For a steady field, a streamline is a $C^1$ curve $x:J\to\Omega$ satisfying $x'(s)=u(x(s))$; the parameter $s$ is a curve parameter, not time. A closed material loop on a time interval $J\subseteq I$ is a $C^1$ map $X:J\times[0,1]\to\Omega$ with $X(t,0)=X(t,1)$ and $\partial_tX(t,\theta)=u(t,X(t,\theta))$; the definition asserts no existence of such a map. On an exterior domain, $f(x)\to f_\infty$ uniformly in direction as $|x|\to\infty$ means $\sup_{|e|=1}\|f(re)-f_\infty\|_2\to0$ as $r\to\infty$, using absolute value when the field is scalar.

For one optional SI interpretation, the dimensions are $[x]=\mathrm m$, $[t]=\mathrm s$, $[u]=\mathrm{m\,s^{-1}}$, $[\rho]=\mathrm{kg\,m^{-3}}$, $[p]=\mathrm{Pa}$, $[\mu]=\mathrm{Pa\,s}$, $[\nu]=\mathrm{m^2\,s^{-1}}$, $[V]=[q]=\mathrm{m^2\,s^{-2}}$, and $[\Omega]=\mathrm{s^{-1}}$. Thus $[\operatorname{curl}u]=\mathrm{s^{-1}}$, circulation has units $\mathrm{m^2\,s^{-1}}$, volume flux has units $\mathrm{m^3\,s^{-1}}$, stress has units Pa, and resultant force has units N. In this interpretation $\rho_0,\mu,P,V,\Omega$ are inputs to the displayed formulas, while $\nu=\mu/\rho_0$ and $c^2=P'(\rho_0)$ are derived quantities relative to those formulas; this classification is not asserted to be universal across physical theories.

## Definition references

Componentwise divergence, curl, and gradient: [[def-divergence-and-curl-of-a-c1-vector-field]].

Componentwise Laplacian: [[def-laplacian-of-a-c2-function]].

Row-component Jacobian convention: [[def-jacobian-matrix-and-gradient]].

Euclidean inner product and norm: [[def-euclidean-inner-product]].

Piecewise-$C^1$ path integrals: [[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]].

Regular oriented surface normals and flux: [[def-oriented-unit-normal-and-flux-of-a-surface-patch]].

Fluid-equation notation and SI context: [MIT 8.09, Chapter 6, §§6.5 and 6.7](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/3bfed6897483f5c55bf615ed583af603_MIT8_09F14_Chapter_6.pdf).

Linearized acoustic equations: [MIT 6.013, Lecture 22](https://ocw.mit.edu/courses/6-013-electromagnetics-and-applications-fall-2005/57c7ed2d14f3555c88bd45d13a4cb287_lec22.pdf).

Finite-depth gravity-wave formulation: [Feddersen, Linear Surface Gravity Waves 1](https://falk.ucsd.edu/pdf/WavesLecture02_211A.pdf).

Rotating linear equations: [Lindley, Fluid Dynamics Support Class 6, §1](https://warwick.ac.uk/fac/sci/masdoc/people/studentpages/students2012/lindley/fluid_dynamics/fluidssupport6_2015.pdf).
