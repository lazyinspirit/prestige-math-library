---
id: pthm-fd-cauchy-momentum-angular
kind: physics-theorem
title: "Cauchy stress, local momentum and stress symmetry"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - lem-fd-material-mass-continuity
  - lem-fd-continuous-source-local-balances
  - def-axiom-of-choice
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  lem-fd-material-mass-continuity: mathematical-premise
  lem-fd-continuous-source-local-balances: mathematical-premise
  def-axiom-of-choice: mathematical-premise
physical_scope: "The smooth nonpolar postulate adopts Cauchy traction; its mass, linear- and angular-momentum balances yield local momentum and symmetric stress."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf"
      locator: "§3.1.2, printed pp. 62–63."
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§§4.2–4.3, printed pp. 129–141."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/207b0fbc8614ebc0a74c8e46d09f3758_14forces.pdf"
      locator: "§1.4, complete 4-page PDF."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/9c89bd5fd8f9c4a4748a64e2c333acc1_15momem.pdf"
      locator: "§1.5, complete 2-page PDF."
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval containing $0$, let $B\subseteq\mathbb R^3$ be a nonempty bounded open reference region with $C^1$ boundary (locally a $C^1$ graph with the region on one side), and let $U\subseteq\mathbb R^3$ be an open neighborhood of $\overline B$. Let $\chi\in C^2(I\times U;\mathbb R^3)$ have orientation-preserving diffeomorphic time slices (bijections onto open images with $C^2$ inverses and positive Jacobian determinant) and satisfy $\chi(0,a)=a$. Here $C^r$ means all coordinate partial derivatives through order $r$ are continuous. Set $\Omega_t=\chi_t(B)$ and $\mathcal O=\{(t,x):t\in I,\ x\in\chi_t(U)\}$. Use SI units in a classical Cartesian inertial frame with absolute time; inertial changes have form $t^*=t+t_0$, $x^*=Qx+ct+d$, where $SO(3)=\{Q\in\mathbb R^{3\times3}:Q^{\mathsf T}Q=I_3,\det Q=1\}$, $c$ is a constant relative velocity in metres per second, and $d$ is a constant spatial translation in metres. Let $\rho_0\in C^1(\overline B)$ and $\rho\in C^1(\mathcal O)$ be positive mass densities in kilograms per cubic metre, let $u\in C^1(\mathcal O;\mathbb R^3)$ be velocity in metres per second, and let $b\in C^0(\mathcal O;\mathbb R^3)$ be body acceleration in metres per second squared. Let $\sigma\in C^1(\mathcal O;\mathbb R^{3\times3})$ be Cauchy stress in pascals, with traction $t(t,x,n)=\sigma(t,x)n$ for every outward Euclidean unit normal $n$. For every nonempty bounded open reference region $V$ whose closure is compact in $B$ and whose $C^1$ boundary is locally a graph with the region on one side, put $P_t=\chi_t(V)$. Adopt on each $P_t$ the material mass, linear-momentum and angular-momentum balances:

$$\int_{P_t}\rho(t,x)\,dx=\int_V\rho_0(a)\,da,\qquad \frac{d}{dt}\int_{P_t}\rho u\,dx=\int_{P_t}\rho b\,dx+\int_{\partial P_t}t(t,x,n)\,dS,$$

$$\frac{d}{dt}\int_{P_t}x\times\rho u\,dx=\int_{P_t}x\times\rho b\,dx+\int_{\partial P_t}x\times t(t,x,n)\,dS.$$

Here $dS$ is Euclidean surface measure, with chart density $\sqrt{\det(DY^{\mathsf T}DY)}$. The angular momentum equation is about a fixed inertial origin; the model has no surface couples or intrinsic spin.

Assume the Axiom of Choice. The adopted traction representation is pointwise unique. The local momentum and stress-symmetry conclusions below hold on the balanced physical region $\mathcal O_B:=\{(t,x):t\in I,\ x\in\Omega_t\}$; the larger $\mathcal O$ supplies ambient regularity only. With $D_tu:=\partial_tu+(D_xu)u$ and rowwise divergence $(\operatorname{div}\sigma)_i:=\sum_{j=1}^3\partial_{x_j}\sigma_{ij}$, the local momentum equation is

$$\rho D_tu=\rho b+\operatorname{div}\sigma,$$

equivalently

$$\partial_t(\rho u)+\operatorname{div}(\rho u\otimes u-\sigma)=\rho b,$$

where $(u\otimes u)_{ij}=u_i u_j$. The angular momentum balance with no couples implies $\sigma=\sigma^{\mathsf T}$. Conversely, in this same smooth positive-density setting, the local momentum equation with symmetric $\sigma$ implies the angular momentum balance. The model postulate adopts the traction representation; this theorem establishes its local balance consequences and uniqueness.
## Statement references

[Tong, *Fluid Mechanics*, §3.1.2](https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf)

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.2–4.3](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

[Mei, MIT OpenCourseWare, *Forces in the Fluid*, §1.4](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/207b0fbc8614ebc0a74c8e46d09f3758_14forces.pdf)

[Mei, MIT OpenCourseWare, *Law of Momentum Conservation*, §1.5](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/9c89bd5fd8f9c4a4748a64e2c333acc1_15momem.pdf)

## Facts & Assumptions

**Given:** The open interval $I$, inertial Euclidean region $\Omega$, SI fields, regularity and positivity in the Statement, the adopted material-region balances, no couples, and the Axiom of Choice.

[A1] [[post-fd-continuum-balances]]: the smooth model adopts the reference-to-current mass integral, linear and angular momentum balances, the local traction representation $t=\sigma n$, and a $C^1$ stress; it has no surface couples or intrinsic spin.

[F1] [[def-fd-quantity-and-frame-conventions]]: time is absolute, the motion is distinct from an inertial chart, $u$ is Eulerian velocity, and the SI types and Galilean inertial transformations are as stated.

[F2] [[lem-fd-material-mass-continuity]]: the adopted material mass integral implies $\partial_t\rho+\operatorname{div}(\rho u)=0$ for the stated positive $C^1$ density and $C^2$ motion.

[F3] [[lem-fd-continuous-source-local-balances]]: with $\mathrm{AC}_\omega$, pointwise mass continuity, positive density, $C^1$ density, velocity and stress, continuous body acceleration, the stated material momentum and angular balances, and the adopted traction, the local momentum equation follows and angular balance gives stress symmetry; its converse is also proved.

[F4] [[def-axiom-of-choice]]: every set-indexed family of nonempty sets admits a choice function.

## Proof

1.1 Let $(A_n)_{n\in\mathbb N}$ be any countable family of nonempty sets. By [F4], the set $\{A_n:n\in\mathbb N\}$ has a choice function $g$; then $n\mapsto g(A_n)$ chooses an element of each $A_n$. Thus the countable-choice hypothesis $\mathrm{AC}_\omega$ required by [F3] follows from the stated Axiom of Choice. [given, F4, algebra]

1.2 The postulate [A1] already supplies a matrix $\sigma(t,x)$ with $t(t,x,n)=\sigma(t,x)n$ for every unit normal. If another matrix $\widetilde{\sigma}(t,x)$ had this property, setting $n=e_i$ for $i=1,2,3$ would give $\widetilde{\sigma}(t,x)e_i=\sigma(t,x)e_i$ for all three standard basis vectors. The matrices have the same columns and are equal, so the adopted representation is unique at every event. [given, A1, algebra]

1.3 Apply [F2] to the material mass equality in [A1]. Its hypotheses hold by the $C^2$ motion and positive $C^1$ density in the Statement, so $\partial_t\rho+\operatorname{div}(\rho u)=0$ on $\mathcal O_B$. [given, A1, F1, F2]

1.4 By [F3], the mass continuity equation from step 1.3, the material linear and angular balances in [A1], and the $C^1$ stress in the Statement imply the local momentum equation and stress symmetry. The converse in [F3] gives the angular-momentum balance from the local momentum equation and symmetric stress. Step 1.1 supplies its countable-choice hypothesis, and step 1.2 identifies the adopted traction matrix uniquely. [given, A1, F1, F3, step 1.1, step 1.2, step 1.3] ∎
