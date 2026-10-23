---
id: def-fd-adopted-nonnewtonian-models
kind: definition
title: "Restricted non-Newtonian constitutive examples"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 3
deps:
  - post-fd-continuum-balances
  - def-fd-nonnewtonian-laws
  - def-fd-smooth-motion
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-nonnewtonian-laws: mathematical-premise
  def-fd-smooth-motion: mathematical-premise
physical_scope: >-
  Chosen incompressible generalized Newtonian/Bingham closures; isothermal conformation adds C
  storage and thermostat, with no empirical applicability claim.
empirical_premises: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "J. N. Reddy, An Introduction to Continuum Mechanics, Second Edition, Chapter 6, equation (6.5.15) and §§6.6.1–6.6.2.3"
      url: "https://courses.washington.edu/mengr503/Chapter_6.pdf"
    - title: "Chiang C. Mei, MIT OpenCourseWare 1.63J/2.21J Lecture Notes on Fluid Dynamics, §1.6.2"
      url: "https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf"
    - title: "John W. Barrett and Sébastien Boyaval, Existence and Approximation of a (Regularized) Oldroyd-B Model, arXiv:0907.4066v2, §1.1 and §2.3"
      url: "https://arxiv.org/pdf/0907.4066"
    - title: "S. Boyaval, T. Lelièvre, and C. Mangoubi, Free-energy-dissipative schemes for the Oldroyd-B model, ESAIM: M2AN 43 (2009), §§2.1.1–2.1.2"
      url: "https://www.numdam.org/item/10.1051/m2an/2009008.pdf"
    - title: "David Tong, Fluid Mechanics, Part I lecture notes, §§1.1.1–1.1.3"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
verification:
  precheck: pending
---

## Definition

Let $M_3(\mathbb R)=\mathbb R^{3\times3}$ be the real $3\times3$ matrices. For $M=(M_{ij})\in M_3(\mathbb R)$, define its trace by $\operatorname{tr}M=\sum_{i=1}^3M_{ii}$, and let $I_3$ be the $3\times3$ identity matrix, with diagonal entries $1$ and all other entries $0$.

Let $I\subseteq\mathbb R$ be a nonempty open interval containing $0$, let $B\subseteq\mathbb R^3$ be a bounded open reference body with $C^1$ boundary, and let $U$ be an open neighborhood of $\overline B$. A material motion is a map $\chi\in C^2(I\times U;\mathbb R^3)$ whose slices $\chi_t(a)=\chi(t,a)$ are orientation-preserving $C^2$ diffeomorphisms onto their images, with $\chi(0,a)=a$. Its swept open region is $\Omega=\{(t,x):x\in\chi_t(U)\}$, its inverse label is $A(t,x)=\chi_t^{-1}(x)$, and its Eulerian velocity is $u(t,\chi(t,a))=\partial_t\chi(t,a)$. Set $L_{ij}=\partial_j u_i$, $D=(L+L^{\mathsf T})/2$, $\theta=\operatorname{tr}D=\operatorname{div}u$, and $D_t=\partial_t+u\cdot\nabla$. A branch is incompressible when $\theta=0$, so $D$ is symmetric and trace-free. Write $S:T=\operatorname{tr}(S^{\mathsf T}T)$ for the Frobenius contraction and $|S|=(S:S)^{1/2}$ for its norm. Define $\mathrm{Sym}_0(3)=\{D\in M_3(\mathbb R):D=D^{\mathsf T},\operatorname{tr}D=0\}$ and $\mathrm{Sym}^+(3)=\{C\in M_3(\mathbb R):C=C^{\mathsf T},z^{\mathsf T}Cz>0\text{ for every }z\ne0\}$. A rigid observer change is $x^*=Q(t)x+c(t)$ with $Q\in C^2(I,\mathrm{SO}(3))$, $c\in C^2(I,\mathbb R^3)$, and $\mathrm{SO}(3)=\{Q:Q^{\mathsf T}Q=I_3,\det Q=1\}$. A second-order tensor transforms as $S^*=QSQ^{\mathsf T}$; a constitutive response is objective when it obeys this rule at corresponding events.

For the generalized Newtonian and Bingham branches, require $\theta=\operatorname{div}u=0$ throughout $\Omega$, so $D\in\mathrm{Sym}_0(3)$. In these branches, $\tau$ is a symmetric deviatoric extra stress, meaning $\operatorname{tr}\tau=0$; the total tension-positive Cauchy stress may additionally contain an isotropic pressure. In the conformation branch, $\tau_p$ and $\tau_s$ denote the polymer and solvent stresses separately and the pressure is a Lagrange multiplier. Stress is measured in Pa, $D$ and shear rate in $\mathrm{s}^{-1}$, viscosity in $\mathrm{Pa\,s}$, and a rate of stress power per volume in $\mathrm{W\,m^{-3}}$.

For a generalized Newtonian branch, define

$$
\dot\gamma=(2D:D)^{1/2},\qquad \tau=2\eta(\dot\gamma)D,
$$

where $\eta:[0,\infty)\to[0,\infty)$ is finite and continuous. Two permitted scalar choices are the Carreau form

$$
\eta_C(\dot\gamma)=\eta_\infty+(\eta_0-\eta_\infty)\bigl(1+(\lambda_C\dot\gamma)^2\bigr)^{(n_C-1)/2},
$$

with $\eta_0\ge\eta_\infty\ge0$ in $\mathrm{Pa\,s}$, $\lambda_C\ge0$ in seconds, and dimensionless $n_C>0$, and the regularized power form

$$
\eta_R(\dot\gamma)=m(\varepsilon^2+\dot\gamma^2)^{(n_R-1)/2},
$$

with $m>0$ in $\mathrm{Pa\,s}^{n_R}$, $\varepsilon>0$ in $\mathrm{s}^{-1}$, and dimensionless $n_R>0$. The unregularized power form $\eta_U=m\dot\gamma^{\,n_R-1}$ is defined only for $\dot\gamma>0$; its stress is extended by $\tau=0$ at $D=0$, so for $0<n_R<1$ the viscosity diverges at zero rate even though the extended stress can be continuous.

For the Bingham branch, let $\mu_p\ge0$ in $\mathrm{Pa\,s}$ and $\tau_y\ge0$ in $\mathrm{Pa}$. Adopt $\tau\in\mathcal B(D)$, where the set-valued graph on $\mathrm{Sym}_0(3)$ is

$$
\mathcal B(D)= \begin{cases} \{2\mu_pD+\tau_yD/|D|\},&D\ne0,\\ \{S\in\mathrm{Sym}_0(3):|S|\le\tau_y\},&D=0, \end{cases}
$$

where $\mathrm{Sym}_0(3)$ is the space of trace-free symmetric $3\times3$ real matrices. Here $\tau_y$ is, by definition, the radius of the Frobenius stress ball at rest; other invariant normalizations require a corresponding parameter conversion. The graph is single-valued for $D\ne0$ and set-valued at rest.

For an isothermal conformation branch, let $K=[t_0,t_1]\subset I$ be a compact interval with $t_0<t_1$. A pathline on $K$ is a continuously differentiable curve $x:K\to\mathbb R^3$ satisfying $(t,x(t))\in\Omega$ and $x'(t)=u(t,x(t))$ for every $t\in K$; derivatives at the endpoints are one-sided. Assume $\operatorname{div}u=0$ on $\Omega$ and take such a pathline. Let $C\in C^1(K;\mathrm{Sym}^+(3))$ be a dimensionless matrix-valued function. Along this pathline, the material derivative of $C$ is its ordinary derivative, $D_tC(t,x(t)):=\frac{d}{dt}C(t)$. Set $L(t)=\nabla u(t,x(t))$ and $D(t)=(L(t)+L(t)^{\mathsf T})/2$. Let $G>0$ be a modulus in Pa, $\lambda>0$ a relaxation time in seconds, $\eta_s\ge0$ a solvent viscosity in $\mathrm{Pa\,s}$, and $T_0>0$ a fixed temperature in K. Here an external thermostat is an idealized heat reservoir that maintains $T_0$ and accounts for heat released by this branch; it is an additional model assumption. Adopt

$$
\frac{dC}{dt}=LC+CL^{\mathsf T}-(C-I_3)/\lambda,\qquad \tau_p=G(C-I_3),\qquad \tau_s=2\eta_sD,\qquad w(C)=\frac G2\bigl(\operatorname{tr}C-\log\det C-3\bigr).
$$

The polymer and solvent stresses $\tau_p,\tau_s$ are measured in Pa, and $w$ is a stored-energy density in $\mathrm{J\,m^{-3}}$. The determinant is positive because $C$ is symmetric positive definite. These are selected model equations on the stated smooth incompressible regime; they assert no empirical applicability to a particular material, fitted parameter values, PDE solution existence, or universal validity.

## Definition references

[[def-fd-smooth-motion|pathline and material-derivative definitions]]

[J. N. Reddy, *An Introduction to Continuum Mechanics*, 2nd ed., Chapter 6, equation (6.5.15) and §§6.6.1–6.6.2.3, PDF pp. 25–27 (printed pp. 245–247)](https://courses.washington.edu/mengr503/Chapter_6.pdf)

[Chiang C. Mei, MIT 1.63J/2.21J *Lecture Notes on Fluid Dynamics*, §1.6.2, equations (1.6.13)–(1.6.18), complete 4-page PDF](https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf)

[John W. Barrett and Sébastien Boyaval, *Existence and Approximation of a (Regularized) Oldroyd-B Model*, arXiv:0907.4066v2, §1.1 and §2.3, PDF pp. 2–11](https://arxiv.org/pdf/0907.4066)

[S. Boyaval, T. Lelièvre, and C. Mangoubi, *Free-energy-dissipative schemes for the Oldroyd-B model*, ESAIM: M2AN 43 (2009), §§2.1.1–2.1.2, PDF pp. 4–6](https://www.numdam.org/item/10.1051/m2an/2009008.pdf)

[David Tong, *Fluid Mechanics*, Part I, §§1.1.1–1.1.3, PDF pp. 6–9](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

