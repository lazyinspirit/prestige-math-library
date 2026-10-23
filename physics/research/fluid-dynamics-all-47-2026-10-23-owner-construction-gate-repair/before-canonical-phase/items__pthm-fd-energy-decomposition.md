---
id: pthm-fd-energy-decomposition
kind: physics-theorem
title: "Kinetic/internal/total energy and boundary work"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - pthm-fd-material-mass-continuity
  - pthm-fd-continuous-source-local-balances
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-axiom-of-choice
  - post-fd-boundary-data
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  pthm-fd-material-mass-continuity: physical-result
  pthm-fd-continuous-source-local-balances: physical-result
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  post-fd-boundary-data: operational-prerequisite
physical_scope: "Smooth positive-density balance branch: total energy splits into kinetic and internal energy; conservative potential and compatible no-slip/insulating or periodic data give a conditional global conservation law."
empirical_premises: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Fluid Mechanics"
      url: "https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf"
      locator: "§3.1.2, printed pp. 62–63 (kinetic-energy balance; total/internal distinction)."
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§§4.4–4.6, printed pp. 141–156."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf"
      locator: "§4.1, complete 3-page PDF."
---

## Statement

Let $I\subseteq\mathbb R$ be an open interval containing $0$, let $B\subseteq\mathbb R^3$ be a nonempty bounded open reference region with $C^1$ boundary (locally a $C^1$ graph with the region on one side), and let $U\subseteq\mathbb R^3$ be an open neighborhood of $\overline B$. Let $\chi\in C^2(I\times U;\mathbb R^3)$ be a motion with orientation-preserving diffeomorphic time slices (bijections onto open images with $C^2$ inverses and positive Jacobian determinant) and $\chi(0,a)=a$. Here $C^r$ means all coordinate partial derivatives through order $r$ are continuous. Set $\Omega_t=\chi_t(B)$ and $\mathcal O=\{(t,x):t\in I,\ x\in\chi_t(U)\}$. Use SI units in a classical Cartesian inertial frame. Let $\rho_0\in C^1(\overline B)$ and $\rho:\mathcal O\to(0,\infty)$ be positive densities, and let $u:\mathcal O\to\mathbb R^3$, $e:\mathcal O\to\mathbb R$, $q:\mathcal O\to\mathbb R^3$, and $\sigma:\mathcal O\to\mathbb R^{3\times3}$ be $C^1$; let $b:\mathcal O\to\mathbb R^3$ and $r:\mathcal O\to\mathbb R$ be continuous. Their units are respectively kilograms per cubic metre, metres per second, joules per kilogram, watts per square metre, pascals, metres per second squared, and watts per kilogram. Define $k:=|u|^2/2$, $E:=e+k$, $D_xu=(\partial_{x_j}u_i)_{ij}$, $D:=(D_xu+(D_xu)^{\mathsf T})/2$, $D_t:=\partial_t+u\cdot\nabla_x$, and $A:B:=\sum_{i,j}A_{ij}B_{ij}$. Use rowwise divergence $(\operatorname{div}\sigma)_i=\sum_j\partial_{x_j}\sigma_{ij}$ and vector divergence $\operatorname{div}q=\sum_j\partial_{x_j}q_j$. For every nonempty bounded open $V$ whose closure is compact in $B$ and whose $C^1$ boundary is locally a graph with the region on one side, put $P_t=\chi_t(V)$ and let $n$ be its outward Euclidean unit normal. Use Euclidean surface measure $dS$ with chart density $\sqrt{\det(DY^{\mathsf T}DY)}$.

Adopt, on each such material region,

$$\int_{P_t}\rho\,dx=\int_V\rho_0\,da,\qquad \frac{d}{dt}\int_{P_t}\rho u\,dx=\int_{P_t}\rho b\,dx+\int_{\partial P_t}\sigma n\,dS,$$

$$\frac{d}{dt}\int_{P_t}x\times\rho u\,dx=\int_{P_t}x\times\rho b\,dx+\int_{\partial P_t}x\times\sigma n\,dS,$$

$$\frac{d}{dt}\int_{P_t}\rho E\,dx=\int_{P_t}(\rho b\cdot u+\rho r)\,dx+\int_{\partial P_t}\bigl(u\cdot\sigma n-q\cdot n\bigr)\,dS.$$

The angular-momentum balance is about a fixed inertial origin; assume no surface couples or intrinsic spin. Assume also the Axiom of Choice. On the balanced physical region $\mathcal O_B:=\{(t,x):t\in I,\ x\in\Omega_t\}$, angular momentum gives $\sigma=\sigma^{\mathsf T}$, and the local total-energy balance is

$$\partial_t(\rho E)+\operatorname{div}(\rho E u-\sigma^{\mathsf T}u+q)=\rho b\cdot u+\rho r.$$

It splits into the kinetic and internal-energy balances

$$\partial_t(\rho k)+\operatorname{div}(\rho k u-\sigma^{\mathsf T}u)=\rho b\cdot u-\sigma:D,$$

$$\rho D_t e=\sigma:D-\operatorname{div}q+\rho r.$$

Thus the boundary power flux is $-\sigma^{\mathsf T}u$ and the outward heat flux is $q$. If additionally $b=-\nabla_x\Phi$ for a time-independent $C^1$ scalar potential $\Phi$ defined on an open spatial set containing every $\Omega_t$, measured in joules per kilogram, and $r=0$, then

$$\partial_t\bigl(\rho(E+\Phi)\bigr)+\operatorname{div}\bigl(\rho(E+\Phi)u-\sigma^{\mathsf T}u+q\bigr)=0.$$

Consequently $\int_C\rho(E+\Phi)\,dx$ is constant on any bounded fixed $C^1$ region $C$ with closure contained in the fluid region throughout $I$, with no-slip $u=0$ and insulation $q\cdot n=0$, or on a periodic cell with side lengths $L_j>0$ metres and opposite faces identified by translations when all fields and $\Phi$ are periodic. All local equations above are asserted on $\mathcal O_B$; the larger $\mathcal O$ supplies ambient regularity only. These are deductions for any solution with the stated regularity; the theorem does not assert that a solution exists.
## Statement references

[Tong, *Fluid Mechanics*, §3.1.2](https://www.damtp.cam.ac.uk/user/tong/fluids/fluids.pdf)

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.4–4.6](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

[Mei, MIT OpenCourseWare, *Heat and Energy Conservation*, §4.1](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf)

## Facts & Assumptions

**Given:** The fields, regularity, signs, SI units, and tensor conventions in the Statement; the smooth continuum balance postulates; the Axiom of Choice; and, for the global conservation conclusion, the selected no-slip/insulating or periodic boundary data.

[A1] [[post-fd-continuum-balances]]: material mass, linear-momentum, angular-momentum and total-energy balances hold; the stress traction is $\sigma n$, surface power is traction dotted with boundary velocity, heat flux is positive outward, and the specific heat supply contributes $\rho r$.

[A2] [[post-fd-boundary-data]]: no-slip and insulating data are jointly selectable for fixed walls, and periodic faces are identified with matching fields and derivative traces; no solvability follows.

[A3] In the global-conservation case, $b=-\nabla_x\Phi$ for a time-independent $C^1$ scalar potential $\Phi$ on an open spatial set containing every $\Omega_t$, measured in joules per kilogram, and $r=0$; when using a periodic cell, $\Phi$ is periodic.

[F1] [[pthm-fd-continuous-source-local-balances]]: with pointwise mass continuity, $C^1$ density, velocity and stress, continuous body acceleration and heat supply, and the adopted material momentum/angular/total-energy balances, the local momentum, symmetry, total-energy, kinetic and internal-energy equations follow.

[F2] [[pthm-fd-material-mass-continuity]]: the adopted material mass balance supplies the pointwise continuity equation for the smooth positive-density motion.

[F3] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under countable choice, the divergence theorem holds on a bounded $C^1$ region for a $C^1$ vector field on its closure.

[F4] [[def-axiom-of-choice]]: every set-indexed family of nonempty sets admits a choice function.

[F5] [[def-fd-quantity-and-frame-conventions]]: the SI and classical inertial-frame conventions used by the fields are fixed as in the Statement.

## Proof

1.1 For any countable family of nonempty sets, [F4] provides a choice function on the set of its distinct members; composing with the sequence chooses from each indexed member. Hence the $\mathrm{AC}_\omega$ hypothesis used by [F1] and [F3] follows from the stated Axiom of Choice. [given, F4, algebra]

1.2 Apply [F2] to the mass balance in [A1] to get pointwise mass continuity. Then apply [F1] using this equation, the material momentum, angular-momentum and total-energy balances in [A1], and step 1.1. This gives the local momentum, symmetry and total-energy equations in the Statement. The outward sign of $q$ gives the total flux $\rho E u-\sigma^{\mathsf T}u+q$. [given, A1, F1, F2, step 1.1]

1.3 Put $k=|u|^2/2$. Taking the dot product of $\rho D_tu=\rho b+\operatorname{div}\sigma$ from step 1.2 with $u$ and applying the chain rule yields $\rho D_tk=\rho b\cdot u+u\cdot\operatorname{div}\sigma$. [given, F5, step 1.2, algebra]

1.4 By the product rule, $u\cdot\operatorname{div}\sigma=\operatorname{div}(\sigma^{\mathsf T}u)-\sigma:D_xu$. Since $\sigma$ is symmetric and its contraction with the skew part of $D_xu$ is zero, $\sigma:D_xu=\sigma:D$. The continuity equation from step 1.2 gives $\partial_t(\rho k)+\operatorname{div}(\rho k u)=\rho D_tk$. Substitution of step 1.3 therefore gives the kinetic-energy balance. [step 1.2, step 1.3, algebra]

1.5 Subtract the kinetic balance in step 1.4 from the total-energy balance in step 1.2. The identical body-power terms cancel, and the stress-work fluxes cancel, leaving $\partial_t(\rho e)+\operatorname{div}(\rho e u+q)=\sigma:D+\rho r$. Expanding the mass transport term with the continuity equation from step 1.2 gives $\rho D_te=\sigma:D-\operatorname{div}q+\rho r$. [step 1.2, step 1.4, algebra]

1.6 Under [A3], continuity and the chain rule give $\partial_t(\rho\Phi)+\operatorname{div}(\rho\Phi u)=\rho D_t\Phi=\rho u\cdot\nabla\Phi$. Adding this identity to the total-energy equation in step 1.2 cancels the body-power source $\rho b\cdot u$ and, since $r=0$, gives the conservative equation for $\rho(E+\Phi)$. [given, A3, step 1.2, algebra]

1.7 The $C^1$ fields permit differentiation under each fixed-domain integral. For a fixed bounded $C^1$ region $C$ with closure inside the fluid region, apply [F3] to the potential-energy equation from step 1.6. The boundary flux $(\rho(E+\Phi)u-\sigma^{\mathsf T}u+q)\cdot n$ vanishes under no-slip $u=0$ and insulation $q\cdot n=0$. For a periodic cell, use the fundamental rectangle $Q=\prod_{j=1}^3[0,L_j]$ and put $G=\rho(E+\Phi)u-\sigma^{\mathsf T}u+q$. Every component of $G$ is $C^1$ and periodic. For each $j$, the one-dimensional fundamental theorem of calculus gives
$$\int_Q\partial_{x_j}G_j\,dx=\int_{\prod_{k\ne j}[0,L_k]}\bigl(G_j(x_1,\ldots,L_j,\ldots,x_3)-G_j(x_1,\ldots,0,\ldots,x_3)\bigr)\,dx_{\widehat j}=0,$$
where $dx_{\widehat j}$ is the product volume measure in the two coordinates other than $x_j$.
Thus $\int_Q\operatorname{div}G\,dx=0$, and integrating the local equation from step 1.6 gives $\frac{d}{dt}\int_Q\rho(E+\Phi)\,dx=0$. The periodicity follows from [A2] and [A3]. [given, A2, A3, F3, step 1.1, step 1.6, algebra] ∎
