---
id: pthm-fd-continuous-source-local-balances
kind: physics-theorem
title: Local smooth balances with continuous body sources
status: draft
origin: pipeline
proof_strategy: direct
domain: physics
library: physics
dependency_level: 4
deps:
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - pthm-fd-material-mass-continuity
  - lem-fd-transport-and-density
  - lem-fd-c1-domain-jordan-integrals
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  pthm-fd-material-mass-continuity: physical-result
  lem-fd-transport-and-density: mathematical-premise
  lem-fd-c1-domain-jordan-integrals: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
physical_scope: "Smooth positive-density material branch with C1 stored fields and only continuous body acceleration and heat supply; no weak, shock, or vacuum extension."
empirical_premises: []
aliases: [lem-fd-continuous-source-local-balances]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§§4.2–4.5, printed pp. 129–152."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/9c89bd5fd8f9c4a4748a64e2c333acc1_15momem.pdf"
      locator: "§1.5, complete 2-page material momentum derivation."
    - title: "Chiang C. Mei, MIT OpenCourseWare Lecture Notes on Fluid Dynamics"
      url: "https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf"
      locator: "§4.1, complete 3-page energy derivation."
---

## Statement

Assume countable choice. Let $I\subseteq\mathbb R$ be an open interval containing $0$, let $B\subseteq\mathbb R^3$ be a bounded open reference region with $C^1$ boundary (locally a $C^1$ graph with the region on one side), and let $U$ be an open neighborhood of $\overline B$. Let $\chi\in C^2(I\times U;\mathbb R^3)$ have orientation-preserving diffeomorphic time slices (bijections onto open images with $C^2$ inverses and positive Jacobian determinant) and satisfy $\chi(0,a)=a$, and set $\Omega_t=\chi_t(B)$ and $\mathcal O=\{(t,x):t\in I,\ x\in\chi_t(U)\}$. Here $C^r$ means all coordinate partial derivatives through order $r$ are continuous. Let $\rho:\mathcal O\to(0,\infty)$, $u:\mathcal O\to\mathbb R^3$, $e:\mathcal O\to\mathbb R$, $q:\mathcal O\to\mathbb R^3$, and $\sigma:\mathcal O\to\mathbb R^{3\times3}$ be $C^1$ on $\mathcal O$. Let $b:\mathcal O\to\mathbb R^3$ and $r:\mathcal O\to\mathbb R$ be continuous. Their SI units are respectively kilograms per cubic metre, metres per second, joules per kilogram, watts per square metre, pascals, metres per second squared, and watts per kilogram. Put $k=|u|^2/2$, $E=e+k$, $D_xu=(\partial_{x_j}u_i)_{ij}$, $D=(D_xu+(D_xu)^{\mathsf T})/2$, $D_t=\partial_t+u\cdot\nabla_x$, and $A:B=\sum_{i,j}A_{ij}B_{ij}$. Use rowwise divergence $(\operatorname{div}\sigma)_i=\sum_j\partial_{x_j}\sigma_{ij}$, vector divergence $\operatorname{div}q=\sum_j\partial_{x_j}q_j$, and traction $t=\sigma n$, where $n$ is the outward Euclidean unit normal and $q\cdot n>0$ denotes heat leaving the material region.

Assume pointwise mass continuity and, on every material region $P_t=\chi_t(V)$ where $V$ is a nonempty bounded open reference region with compact closure in $B$ and $C^1$ boundary locally a graph with the region on one side, the adopted linear-momentum, angular-momentum, and total-energy balances
$$\frac{d}{dt}\int_{P_t}\rho u\,dx=\int_{P_t}\rho b\,dx+\int_{\partial P_t}\sigma n\,dS,$$
$$\frac{d}{dt}\int_{P_t}x\times(\rho u)\,dx=\int_{P_t}x\times(\rho b)\,dx+\int_{\partial P_t}x\times(\sigma n)\,dS,$$
$$\frac{d}{dt}\int_{P_t}\rho E\,dx=\int_{P_t}(\rho b\cdot u+\rho r)\,dx+\int_{\partial P_t}\bigl(u\cdot\sigma n-q\cdot n\bigr)\,dS.$$
The angular balance is about a fixed inertial origin and there are no surface couples or intrinsic spin. Then throughout the balanced physical region $\mathcal O_B:=\{(t,x):t\in I,\ x\in\chi_t(B)\}$, with $\mathcal O$ retained only as the ambient regularity domain,
$$\partial_t(\rho u)+\operatorname{div}_x(\rho u\otimes u-\sigma)=\rho b,$$
$$\sigma=\sigma^{\mathsf T},$$
$$\partial_t(\rho E)+\operatorname{div}_x(\rho E u-\sigma^{\mathsf T}u+q)=\rho b\cdot u+\rho r,$$
and
$$\partial_t(\rho k)+\operatorname{div}_x(\rho k u-\sigma^{\mathsf T}u)=\rho b\cdot u-\sigma:D,\qquad
\rho D_t e=\sigma:D-\operatorname{div}_xq+\rho r.$$
Conversely, the pointwise momentum equation and symmetric stress imply the angular-momentum balance, and the pointwise total-energy equation implies its stated material integral balance. All deductions are conditional on the smooth model and do not assert existence of a solution.

## Statement references

[[post-fd-continuum-balances]]

[[pthm-fd-material-mass-continuity]]

[[lem-fd-transport-and-density]]

[[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]

[Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.2–4.5](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf).

[Mei, MIT OpenCourseWare, *Law of Momentum Conservation*, §1.5](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/9c89bd5fd8f9c4a4748a64e2c333acc1_15momem.pdf).

[Mei, MIT OpenCourseWare, *Heat and Energy Conservation*, §4.1](https://www.ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/20946c507055a595c44422b3616a83da_41energy.pdf).

## Facts & Assumptions

**Given:** Countable choice; the smooth motion and field regularity; pointwise mass continuity; and the material momentum, angular-momentum, and total-energy balances in the Statement.

[A1] [[post-fd-continuum-balances]]: the smooth model adopts the displayed material momentum, angular-momentum, and total-energy balances, with traction $\sigma n$, no couples, and continuous body acceleration and heat supply.

[F1] [[def-fd-quantity-and-frame-conventions]]: $u$ is Eulerian velocity, $D_t=\partial_t+u\cdot\nabla_x$, stress is a spatial tensor with traction $\sigma n$, and the stated field types and SI units apply.

[F2] [[pthm-fd-material-mass-continuity]]: the adopted material mass integral gives $\partial_t\rho+\operatorname{div}(\rho u)=0$ for the smooth positive-density motion.

[F3] [[lem-fd-transport-and-density]]: for a compact Jordan material set and a $C^1$ field $f$, $\frac d{dt}\int_{\chi_t(K)}f=\int_{\chi_t(K)}(\partial_tf+\operatorname{div}(fu))$, componentwise for vector fields.

[F4] [[lem-fd-c1-domain-jordan-integrals]]: bounded $C^1$ material regions and their diffeomorphic images are Jordan measurable, and their open-region integrals agree with integrals over compact closures.

[F5] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under countable choice, the Euclidean divergence theorem holds for a bounded $C^1$ domain and a $C^1$ vector field on its closure.

[F6] [[def-countable-choice]]: countable choice means that each countable family of nonempty sets has a choice function.

## Proof

1.1 Fix an admissible $V$ and let $K=\overline V$. By [F4], $K$ is compact Jordan and its open-region integrals equal the corresponding closure integrals. Apply [F3] componentwise to $f=\rho u$; the derivative of its material integral is
$$\int_{P_t}\bigl(\partial_t(\rho u)+\operatorname{div}_x(\rho u\otimes u)\bigr)\,dx.$$
Pointwise mass continuity and the product rule give
$$\partial_t(\rho u)+\operatorname{div}_x(\rho u\otimes u)=\rho D_tu.$$
[given, F1, F2, F3, F4, algebra]

1.2 Substitute the first balance in [A1] into step 1.1 and apply [F5] to $\sigma$, using countable choice from [F6]. This yields
$$\int_{P_t}\bigl(\rho D_tu-\rho b-\operatorname{div}_x\sigma\bigr)\,dx=0.$$
The integrand is continuous because $b$ is continuous and the other fields are $C^1$. Every sufficiently small open ball $Q\Subset\Omega_t$ is such a material region: its inverse image under $\chi_t$ is a bounded $C^1$ region compactly contained in $B$. If a component of the continuous integrand were nonzero at a point, it would have a strict fixed sign on a smaller ball and its integral there could not vanish. Thus $\rho D_tu=\rho b+\operatorname{div}_x\sigma$ pointwise on $\mathcal O_B$. [given, A1, F4, F5, F6, step 1.1, algebra]

1.3 For each component $i$,
$$\partial_t(\rho u_i)+\sum_j\partial_{x_j}(\rho u_i u_j)
=\rho(\partial_tu_i+u\cdot\nabla_xu_i)+u_i\bigl(\partial_t\rho+\operatorname{div}_x(\rho u)\bigr).$$
The last term is zero by [F2]. Substituting step 1.2 and moving $\operatorname{div}\sigma$ to the flux gives the conservative momentum equation. [F2, step 1.2, algebra]

1.4 Apply [F3] to $\rho(x\times u)$ and use $D_tx=u$ and $u\times u=0$. The transport derivative is $\int_{P_t}x\times(\rho D_tu)\,dx$. Substitute step 1.2 and compare with the angular balance in [A1]; applying [F5] to the moment-stress flux gives
$$\int_{P_t}\bigl(\operatorname{div}_x(x\times\sigma)-x\times\operatorname{div}_x\sigma\bigr)\,dx=0.$$
This residual is continuous, so the fixed-sign-ball argument of step 1.2 makes it zero pointwise. With $\epsilon_{ikl}$ the alternating symbol and $M_{ij}=\sum_{k,l}\epsilon_{ikl}x_k\sigma_{lj}$, direct differentiation gives
$$\bigl(\operatorname{div}_x(x\times\sigma)-x\times\operatorname{div}_x\sigma\bigr)_i
=\sum_{j,l}\epsilon_{ijl}\sigma_{lj}.$$
For $i=1,2,3$ these equations are respectively $\sigma_{32}=\sigma_{23}$, $\sigma_{13}=\sigma_{31}$, and $\sigma_{21}=\sigma_{12}$, hence $\sigma=\sigma^{\mathsf T}$. [given, A1, F2, F3, F5, step 1.2, algebra]

1.5 If $\sigma$ is symmetric, the component identity in step 1.4 gives $\operatorname{div}_x(x\times\sigma)=x\times\operatorname{div}_x\sigma$. The product rule and $u\times u=0$ give
$$\partial_t(\rho x\times u)+\operatorname{div}_x\bigl(\rho(x\times u)\otimes u\bigr)
=x\times\bigl(\partial_t(\rho u)+\operatorname{div}_x(\rho u\otimes u)\bigr).$$
Use step 1.3 and the stress-divergence identity, then integrate over $P_t$. The transport formula [F3] and divergence theorem [F5] recover the angular-momentum integral balance in [A1]. [F2, F3, F5, step 1.3, step 1.4, algebra]

1.6 Dot $\rho D_tu=\rho b+\operatorname{div}\sigma$ from step 1.2 with $u$. The component product rule gives $u\cdot\operatorname{div}\sigma=\operatorname{div}(\sigma^{\mathsf T}u)-\sigma:D_xu$. Since $\sigma$ is symmetric, its contraction with the skew part of $D_xu$ is zero, so $\sigma:D_xu=\sigma:D$. Also $D_tk=u\cdot D_tu$. Combining these identities with [F2] yields
$$\partial_t(\rho k)+\operatorname{div}_x(\rho ku-\sigma^{\mathsf T}u)=\rho b\cdot u-\sigma:D.$$
[F2, step 1.2, step 1.4, algebra]

1.7 Apply [F3] to $\rho E$ in the total-energy balance [A1]. Rewrite $(\sigma n)\cdot u=(\sigma^{\mathsf T}u)\cdot n$ and apply [F5] to $\sigma^{\mathsf T}u$ and $q$. The integral of the continuous residual
$$\partial_t(\rho E)+\operatorname{div}_x(\rho Eu-\sigma^{\mathsf T}u+q)-\rho b\cdot u-\rho r$$
is zero on every $P_t$. The fixed-sign-ball argument from step 1.2 proves that this residual vanishes pointwise. Conversely, integrating this local equation and using [F3] and [F5] recovers the material total-energy balance. [given, A1, F2, F3, F5, step 1.2, algebra]

1.8 Subtract the kinetic equation in step 1.6 from the total-energy equation in step 1.7 and use $E=e+k$. The body-work terms cancel and leave $\partial_t(\rho e)+\operatorname{div}_x(\rho eu+q)=\sigma:D+\rho r$. Expanding the mass-transport term using [F2] gives $\rho D_te=\sigma:D-\operatorname{div}_xq+\rho r$. Conversely, adding this internal-energy equation to the kinetic equation in step 1.6 recovers the total-energy equation in step 1.7. [F2, step 1.6, step 1.7, algebra] ∎
