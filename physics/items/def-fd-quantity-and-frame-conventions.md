---
id: def-fd-quantity-and-frame-conventions
kind: definition
title: Classical frames, primitive quantities and SI units
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - def-fd-smooth-motion
dependency_roles:
  def-fd-smooth-motion: mathematical-premise
physical_scope: >-
  Smooth nonrelativistic continuum kinematics on Newtonian spacetime, with
  explicit Cartesian inertial charts, rigid observers, material motions, field
  types, primitive/derived roles, and SI dimensions. No relativistic causal
  structure or empirical fluid applicability is asserted.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "MIT OpenCourseWare 8.01SC, Chapter 11: Reference Frames"
      url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter11.pdf"
    - title: "MIT OpenCourseWare 8.09, Advanced Classical Mechanics, full lecture notes"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "David Tong, Fluid Mechanics, Part I lecture notes"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf"
    - title: "BIPM, The International System of Units, 9th edition, version 4.01"
      url: "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1780410776583&version=7.0"
    - title: "NIST SP 330-2019, The International System of Units (SI)"
      url: "https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.330-2019.pdf"
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Definition

Use the nonrelativistic Newtonian spacetime $I\times E$, where $I\subseteq\mathbb R$ is an open interval with absolute time $t$ in seconds. Here $E$ is a three-dimensional oriented Euclidean affine space: its translation vectors form an oriented Euclidean vector space, but no origin in $E$ is distinguished. A **Cartesian inertial chart** is an event-coordinate map $(t,X)\mapsto(t,x_t(X))$, where $b:E\to\mathbb R^3$ is an orientation-preserving affine isometry, $w\in\mathbb R^3$ is constant, and $x_t(X)=b(X)+tw$ for $t\in I$. The affine map $b$ is auxiliary data defined on $E$, so this formula requires no evaluation at time $0$ when $0\notin I$. Each fixed-time spatial map is an orientation-preserving affine isometry with fixed spatial orientation; the spatial origin has constant velocity. Spatial coordinates are measured in metres and $w$ in metres per second. A chart may also use a translated absolute-time coordinate; at corresponding events the inertial-chart transformations are the ones displayed below. Write $\mathrm{SO}(3)=\{Q\in\mathbb R^{3\times3}:Q^TQ=I_3,\det Q=1\}$. Inertial charts are related by

$$t^*=t+t_0,\qquad x^*=Qx+vt+a,$$

where $t_0$ is a constant time translation in seconds, $Q\in\mathrm{SO}(3)$ is constant, $v\in\mathbb R^3$ is a constant relative velocity in m s$^{-1}$, and $a\in\mathbb R^3$ is a constant spatial translation in metres. A **worldline** is a curve $t\mapsto(t,x(t))$ with $x\in C^2(I,\mathbb R^3)$, parameterized by absolute time; this model imposes no relativistic speed or causal condition. A **rigid observer change** is the more general coordinate change $t^*=t,\ x^*=Q(t)x+c(t)$, with $Q\in C^2(I,\mathrm{SO}(3))$ and $c\in C^2(I,\mathbb R^3)$ in metres; it is not called inertial unless $Q$ is constant and $c$ is affine in time. A frame here means an adapted Cartesian chart, not an observer congruence or a basis field.

For the initial-chart material-motion convention below, require $0\in I$. Let $B\subseteq\mathbb R^3$ be a bounded open reference body whose boundary is locally the graph of a $C^1$ function, with $B$ lying on one side of each such graph. Identify the reference coordinates with the chosen initial Cartesian chart, and let $U$ be an open neighborhood of $\overline B$. A **material motion** is a map $\chi\in C^2(I\times U,\mathbb R^3)$ such that each $\chi_t=\chi(t,\cdot)$ is a bijection from $U$ onto an open image, has a $C^2$ inverse, and has positive Jacobian determinant; in the initial chart set $\chi(0,a)=a$. The label $a\in U$ and position $x=\chi(t,a)$ are measured in metres. Write

$$F(t,a)=D_a\chi(t,a),\qquad J(t,a)=\det F(t,a)>0,\qquad A(t,x)=\chi_t^{-1}(x),\qquad \Omega_t=\chi_t(B).$$

Here $F$ and $J$ are dimensionless and $A$ has units metres. The material map $\chi$ describes motion of the medium; it is not a change of observer or frame. The Eulerian velocity is the vector field defined by $u(t,\chi(t,a))=\partial_t\chi(t,a)$, measured in m s$^{-1}$. For a differentiable scalar or component field $f$, its material derivative is $D_tf=\partial_tf+u\cdot\nabla f$. Set $L_{ij}=\partial_j u_i$, $D=(L+L^T)/2$, $W=(L-L^T)/2$, $\theta=\operatorname{tr}D=\operatorname{div}u$, and $D_0=D-(\theta/3)I_3$; $L,D,W,\theta,D_0$ have units s$^{-1}$. Define vorticity by

$$\operatorname{curl}u=(\partial_yu_z-\partial_zu_y,\ \partial_zu_x-\partial_xu_z,\ \partial_xu_y-\partial_yu_x),$$

also in s$^{-1}$. In this library, a motion is **material-incompressible** on a region when $\operatorname{div}u=0$ there; **spatially homogeneous density** means $\nabla\rho=0$ there. These are distinct conditions. A **pathline** is a $C^1$ curve $X$ on an interval where the field is defined and the solution exists, satisfying $dX/dt=u(t,X(t))$. A **streamline at time $t_0$** is a $C^1$ integral curve satisfying $dX/ds=u(t_0,X(s))$ for a frozen $t_0$, with curve parameter $s$ measured in seconds. These are different constructions for an unsteady field.

A spatial vector is an element of the Euclidean translation space; its components rotate by $Q$ under a rigid observer change. A spatial second-order tensor is a linear map from that vector space to itself, represented by a $3\times3$ matrix in a Cartesian orthonormal basis; it transforms as $S^*=QSQ^T$. A tensor-valued constitutive response is **objective** when its values at corresponding events satisfy this transformation rule for every $C^2$ rigid observer change. For a stress tensor $\sigma$, use the tension-positive convention in which the traction (force per unit current area) on a surface with outward unit normal $n$ is $\sigma n$. Set $(\operatorname{div}\sigma)_i=\partial_j\sigma_{ij}$; the tensor contraction is $S:T=\sum_{i,j}S_{ij}T_{ij}$. Stress and traction have units Pa $=\mathrm{N\,m^{-2}}=\mathrm{kg\,m^{-1}\,s^{-2}}$.

Within a specified model, a **primitive quantity** is a quantity adopted as input rather than constructed from the other data of that model; a **derived quantity** is assigned by an explicit construction from stated inputs and results. This status is framework-local and is independent of whether its SI unit is base or derived. In the continuum model used on this page, $\rho_0(a)$ is a reference mass-density field in kg m$^{-3}$, $b(t,x)$ is an adopted body-acceleration field in m s$^{-2}$, $e(t,x)$ is specific internal energy (energy per unit mass) in J kg$^{-1}=\mathrm{m^2\,s^{-2}}$, $T(t,x)>0$ is temperature in K, $s(t,x)$ is specific entropy in J kg$^{-1}$ K$^{-1}$, $q(t,x)$ is heat flux (heat-transfer rate per unit area) in W m$^{-2}$, and $r(t,x)$ is specific heat supply (power per unit mass) in W kg$^{-1}$. Their adoption is a physical-model choice, not a consequence of the SI. The current mass density $\rho(t,x)$ means mass per unit current volume and has units kg m$^{-3}$; for a mass-conserving motion, its construction from $\rho_0$ and $\chi$ is established from the stated balance hypotheses in the theorem on this page. A pressure $p$ is a scalar in Pa whose role depends on the selected constitutive branch. The shear and bulk dynamic-viscosity parameters $\mu,\zeta$, when that branch is adopted, have units Pa s $=\mathrm{kg\,m^{-1}\,s^{-1}}$; thermal conductivity $\kappa_T$ has units W m$^{-1}$ K$^{-1}$. The gradient $\nabla$ has units m$^{-1}$. Thus the metre, kilogram, second, and kelvin are SI base units in this dictionary, while density, velocity, acceleration, pressure, energy, power, viscosity, and heat-flux units are derived according to the BIPM SI conventions.

## Definition references

[MIT OpenCourseWare 8.01SC, Chapter 11, §§11.1–11.3 (Galilean frames)](https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/mit8_01scs22_chapter11.pdf)

[MIT OpenCourseWare 8.09, full lecture notes, §1.1 (inertial and rotating frames)](https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf)

[David Tong, Fluid Mechanics, Part I, §§1.1.1–1.1.3 (Eulerian fields, paths, and material derivative)](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

[BIPM, SI Brochure 9th edition, version 4.01, §§2.2–2.3 and Tables 4–6](https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf/2d2b50bf-f2b4-9661-f402-5f9d66e4b507?download=true&t=1780410776583&version=7.0)

[NIST SP 330-2019, §§2–3 and Tables 4–6](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.330-2019.pdf)

## Authoring status

The batch-2 supplier [[def-fd-smooth-motion]] is now present: its inspected definition gives the $C^2$ family of orientation-preserving diffeomorphisms, positive Jacobian, inverse label, Eulerian velocity, material derivative, and strain-rate interface used here. This item states its own initial-chart normalization and explicit SI dictionary as additional conventions.
