---
id: def-fd-nonnewtonian-laws
kind: definition
title: "Generalized Newtonian, Bingham and conformation model equations"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-fd-smooth-motion
  - cor-real-spectral-theorem-for-self-adjoint-endomorphisms
  - thm-determinant-multiplicative
dependency_roles:
  def-fd-smooth-motion: mathematical-premise
  cor-real-spectral-theorem-for-self-adjoint-endomorphisms: mathematical-premise
  thm-determinant-multiplicative: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "J. N. Reddy, An Introduction to Continuum Mechanics, Second Edition, Chapter 6, §§6.5.15 and 6.6.1–6.6.2.3"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
    - title: "MIT OpenCourseWare, Lecture Notes on Fluid Dynamics (1.63J/2.21J), §1.6.2"
      url: "https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf"
    - title: "John W. Barrett and Sebastien Boyaval, Existence and Approximation of a (Regularized) Oldroyd-B Model, arXiv:0907.4066v2, §1.1"
      url: "https://arxiv.org/pdf/0907.4066"
    - title: "S. Boyaval, T. Lelièvre, and C. Mangoubi, Free-energy-dissipative schemes for the Oldroyd-B model, ESAIM: M2AN 43 (2009), §§2.1.1–2.1.2"
      url: "https://www.numdam.org/item/10.1051/m2an/2009008.pdf"
verification:
  precheck: pending
---

## Definition

Use SI units and an oriented Euclidean three-space with Cartesian coordinates. Here $C^r$ means that coordinate partial derivatives through total order $r$ exist and are continuous. Let $I\subseteq\mathbb R$ be a nonempty open interval containing $0$, let $B\subseteq\mathbb R^3$ be a nonempty bounded open reference body with $C^1$ boundary, and let $\mathcal U$ be an open neighborhood of $\overline B$. A smooth motion is a map $\chi\in C^2(I\times\mathcal U;\mathbb R^3)$ such that each $\chi_t(a):=\chi(t,a)$ is an orientation-preserving $C^2$ diffeomorphism onto its image; when labels are initially the current positions, $\chi_0(a)=a$. Set $\Omega_t=\chi_t(B)$. For $x\in\chi_t(\mathcal U)$ its inverse label map is $A(t,x)=\chi_t^{-1}(x)$, and its Eulerian velocity is $u(t,x)=\partial_t\chi(t,A(t,x))$. Position and material-label coordinates have units $\mathrm m$, time has units $\mathrm s$, and velocity has units $\mathrm{m\,s^{-1}}$. The velocity gradient is $L=\nabla u$, the rate-of-strain tensor is $D=(L+L^{\mathsf T})/2$, the spin is $W=(L-L^{\mathsf T})/2$, and the dilatation is $\theta=\operatorname{tr}D=\operatorname{tr}L$; all have units $\mathrm{s^{-1}}$. The material derivative is $D_t=\partial_t+u\cdot\nabla$, acting componentwise on tensor fields, with units $\mathrm{s^{-1}}$ on dimensionless fields. Matrix contraction is $S:T=\operatorname{tr}(S^{\mathsf T}T)$, with Frobenius norm $|S|=(S:S)^{1/2}$. These definitions are the mathematical motion and kinematics used below.

Write $\mathrm{Sym}_0(3)=\{D\in M_3(\mathbb R):D^{\mathsf T}=D,\operatorname{tr}D=0\}$. The generalized Newtonian branch is incompressible, so $\theta=0$ and $D\in\mathrm{Sym}_0(3)$. Define the shear-rate scalar $\dot\gamma=(2D:D)^{1/2}$, with units $\mathrm{s}^{-1}$, and let $\eta(\dot\gamma)$ be a finite nonnegative viscosity with units $\mathrm{Pa\,s}$. The deviatoric stress is $\tau=2\eta(\dot\gamma)D$, in $\mathrm{Pa}$; no pressure term is included.

Two named viscosity choices are the Carreau form

$$
\eta_C(\dot\gamma)=\eta_\infty+(\eta_0-\eta_\infty)\bigl(1+(\lambda\dot\gamma)^2\bigr)^{(n-1)/2},
$$

with $\eta_0\ge\eta_\infty\ge0$ in $\mathrm{Pa\,s}$, $\lambda\ge0$ in $\mathrm{s}$, and dimensionless $n>0$, and the regularized power form

$$
\eta_R(\dot\gamma)=m(\varepsilon^2+\dot\gamma^2)^{(n-1)/2},
$$

with $m>0$ in $\mathrm{Pa\,s^n}$, $\varepsilon>0$ in $\mathrm{s}^{-1}$, and dimensionless $n>0$. For comparison, the unregularized power form $\eta_U=m\dot\gamma^{\,n-1}$ is defined only for $\dot\gamma>0$; its stress is extended by $\tau=0$ at $D=0$. When $0<n<1$, this viscosity diverges as $\dot\gamma\downarrow0$, although the extended stress may remain continuous.

For the Bingham branch use the Frobenius norm just defined, $\mu_p\ge0$ in $\mathrm{Pa\,s}$, and yield parameter $\tau_y\ge0$ in $\mathrm{Pa}$. Its set-valued deviatoric stress graph on $\mathrm{Sym}_0(3)$ is

$$
\mathcal B(D)=\begin{cases}\{2\mu_pD+\tau_yD/|D|\},&D\ne0,\\\{S\in\mathrm{Sym}_0(3):|S|\le\tau_y\},&D=0.\end{cases}
$$

The value at rest is therefore a whole stress ball when $\tau_y>0$. The chosen Frobenius normalization fixes the numerical convention for $\tau_y$; a source using a differently normalized second invariant requires a corresponding parameter conversion.

For the conformation branch, $C(t)$ is a dimensionless symmetric positive-definite $3\times3$ tensor, $G>0$ is a modulus in $\mathrm{Pa}$, $\lambda>0$ is a relaxation time in $\mathrm{s}$, and $\eta_s\ge0$ is a solvent viscosity in $\mathrm{Pa\,s}$. Along an incompressible trajectory, adopt

$$D_tC-LC-CL^{\mathsf T}=-(C-I)/\lambda,\qquad \tau_p=G(C-I),\qquad \tau_s=2\eta_sD,\qquad w(C)=\frac G2\bigl(\operatorname{tr}C-\log\det C-3\bigr).$$

Here $\tau_p,\tau_s$ are polymer and solvent stresses in $\mathrm{Pa}$, and $w$ is a stored-energy density in $\mathrm{J\,m^{-3}}$. The determinant in this formula is positive for symmetric positive-definite $C$, by the finite-dimensional real spectral theorem and determinant multiplicativity. These are mathematical constitutive definitions and adopted model equations. They assert neither empirical validity for a particular material nor existence of a solution to a fluid partial differential equation.

## Definition references

[[def-fd-smooth-motion|smooth-motion definition and Eulerian kinematics]].

[Reddy, An Introduction to Continuum Mechanics, Chapter 6](https://courses.washington.edu/mengr503/Chapter_6.pdf).

[MIT OpenCourseWare, Lecture Notes on Fluid Dynamics, §1.6.2](https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf).

[Barrett and Boyaval, Oldroyd-B model, §1.1](https://arxiv.org/pdf/0907.4066).

[Boyaval, Lelièvre, and Mangoubi, Oldroyd-B free-energy estimate, §§2.1.1–2.1.2](https://www.numdam.org/item/10.1051/m2an/2009008.pdf).
