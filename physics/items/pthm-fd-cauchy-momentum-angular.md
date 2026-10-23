---
id: pthm-fd-cauchy-momentum-angular
kind: physics-theorem
title: "Cauchy stress, local momentum and stress symmetry"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - post-fd-continuum-balances
  - def-fd-quantity-and-frame-conventions
  - pthm-fd-material-mass-continuity
  - lem-fd-moving-control-volume-transport
  - lem-fd-c1-domain-jordan-integrals
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-axiom-of-choice
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  def-fd-quantity-and-frame-conventions: formulation-prerequisite
  pthm-fd-material-mass-continuity: physical-result
  lem-fd-moving-control-volume-transport: mathematical-premise
  lem-fd-c1-domain-jordan-integrals: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
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

Let $I\subseteq\mathbb R$ be an open interval containing $0$, let $B\subseteq\mathbb R^3$ be a nonempty bounded open reference region with $C^1$ boundary (locally a $C^1$ graph with the region on one side), and let $U\subseteq\mathbb R^3$ be an open neighborhood of $\overline B$. Let $\chi\in C^2(I\times U;\mathbb R^3)$ have orientation-preserving diffeomorphic time slices (bijections onto open images with $C^2$ inverses and positive Jacobian determinant) and satisfy $\chi(0,a)=a$. Here $C^r$ means all coordinate partial derivatives through order $r$ are continuous. Set $\Omega_t=\chi_t(B)$ and $\mathcal O=\{(t,x):t\in I,\ x\in\chi_t(U)\}$. Use SI units in a classical Cartesian inertial frame with absolute time; inertial changes have form $t^*=t+t_0$, $x^*=Qx+ct+d$, where $SO(3)=\{Q\in\mathbb R^{3\times3}:Q^{\mathsf T}Q=I_3,\det Q=1\}$, $c$ is a constant relative velocity in metres per second, and $d$ is a constant spatial translation in metres. Let $\rho_0\in C^1(\overline B)$ and $\rho\in C^1(\mathcal O)$ be positive mass densities in kilograms per cubic metre, let $u\in C^1(\mathcal O;\mathbb R^3)$ be the velocity induced by this motion, so $u(t,\chi(t,a))=\partial_t\chi(t,a)$ for every $(t,a)\in I\times U$, measured in metres per second, and let $b\in C^0(\mathcal O;\mathbb R^3)$ be body acceleration in metres per second squared. Let $\sigma\in C^1(\mathcal O;\mathbb R^{3\times3})$ be Cauchy stress in pascals, with traction $t(t,x,n)=\sigma(t,x)n$ for every outward Euclidean unit normal $n$. For every nonempty bounded open reference region $V$ whose closure is compact in $B$ and whose $C^1$ boundary is locally a graph with the region on one side, put $P_t=\chi_t(V)$. Adopt on each $P_t$ the material mass, linear-momentum and angular-momentum balances:

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

**Given:** The interval, reference body, motion and its induced velocity, SI fields, regularity and positivity in the Statement, the adopted material-region balances, no couples, and the Axiom of Choice.

[A1] [[post-fd-continuum-balances]]: the smooth model adopts the reference-to-current mass integral, linear and angular momentum balances, the local traction representation $t=\sigma n$, and a $C^1$ stress; it has no surface couples or intrinsic spin.

[F1] [[def-fd-quantity-and-frame-conventions]]: time is absolute, the motion is distinct from an inertial chart, $u$ is Eulerian velocity, and the SI types and Galilean inertial transformations are as stated.

[F2] [[pthm-fd-material-mass-continuity]]: the adopted material mass integral implies $\partial_t\rho+\operatorname{div}(\rho u)=0$ for the stated positive $C^1$ density and $C^2$ motion.

[F3] [[lem-fd-moving-control-volume-transport]]: under countable choice, a $C^1$ field near the swept closure of a bounded $C^1$ region transported by a $C^2$ diffeomorphic motion satisfies $\frac d{dt}\int_{P_t}f=\int_{P_t}\partial_tf+\int_{\partial P_t}f\,u\cdot n$, componentwise, when its boundary velocity is $u$.

[F5] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: under countable choice, a $C^1$ vector field on the closure of a bounded $C^1$ domain satisfies $\int_P\operatorname{div}F=\int_{\partial P}F\cdot n$; apply this rowwise to a matrix.

[F6] [[lem-fd-c1-domain-jordan-integrals]]: a $C^1$ diffeomorphism on a neighborhood of a bounded $C^1$ region's compact closure sends it to a bounded $C^1$ region, with open-region integrals equal to compact-closure integrals.

[F4] [[def-axiom-of-choice]]: every set-indexed family of nonempty sets admits a choice function.

## Proof

1.1 Let $(A_n)_{n\in\mathbb N}$ be any countable family of nonempty sets. By [F4], the set $\{A_n:n\in\mathbb N\}$ has a choice function $g$; then $n\mapsto g(A_n)$ chooses an element of each $A_n$. Thus the countable-choice hypothesis $\mathrm{AC}_\omega$ required by [F3] and [F5] follows from the stated Axiom of Choice. [given, F4, algebra]

1.2 The postulate [A1] already supplies a matrix $\sigma(t,x)$ with $t(t,x,n)=\sigma(t,x)n$ for every unit normal. If another matrix $\widetilde{\sigma}(t,x)$ had this property, setting $n=e_i$ for $i=1,2,3$ would give $\widetilde{\sigma}(t,x)e_i=\sigma(t,x)e_i$ for all three standard basis vectors. The matrices have the same columns and are equal, so the adopted representation is unique at every event. [given, A1, algebra]

1.3 Apply [F2] to the material mass equality in [A1]. Its hypotheses hold by the $C^2$ motion and positive $C^1$ density in the Statement, so $\partial_t\rho+\operatorname{div}(\rho u)=0$ on $\mathcal O_B$. [given, A1, F1, F2]

2.1 Fix an admissible $V$ and put $P_t=\chi_t(V)$. Its closure is compact in $\Omega_t$, and [F6] supplies its $C^1$ boundary. Its boundary velocity is $u$ by the Statement. Apply [F3] to $f=\rho u$ and [F5] to each row of $\rho u\otimes u$ and $\sigma$. The adopted momentum balance gives $\int_{P_t}R\,dx=0$, where $R:=\partial_t(\rho u)+\operatorname{div}(\rho u\otimes u-\sigma)-\rho b$ is continuous. For fixed $t$, every sufficiently small ball $Q\Subset\Omega_t$ is such an image: $V=\chi_t^{-1}(Q)$ has compact closure in $B$ and $C^1$ boundary by [F6] applied to the inverse map. If a component of $R$ were nonzero at a point, continuity would bound it strictly away from zero with fixed sign on a smaller ball, contradicting its zero integral. Hence $R=0$ on $\mathcal O_B$. Expanding the product and using step 1.3 gives $\rho D_tu=\rho b+\operatorname{div}\sigma$. [given, A1, F3, F5, F6, step 1.1, step 1.3, algebra]

3.1 Define the alternating symbol $\epsilon_{ikl}$ to be zero when two indices agree and the sign of the permutation $(i,k,l)$ of $(1,2,3)$ otherwise. Put $M_{ij}:=\sum_{k,l}\epsilon_{ikl}x_k\sigma_{lj}$, so $Mn=x\times(\sigma n)$ and $(\operatorname{div}M)_i=(x\times\operatorname{div}\sigma)_i+\sum_{j,l}\epsilon_{ijl}\sigma_{lj}$. Apply [F3] to $\rho(x\times u)$ and use step 1.3, $D_tx=u$, and $u\times u=0$: its material-integral derivative is $\int_{P_t}x\times(\rho D_tu)\,dx$. Substitute step 2.1 and compare with the adopted angular balance, using [F5] on $M$. Thus each continuous component $c_i:=\sum_{j,l}\epsilon_{ijl}\sigma_{lj}$ has zero integral on every $P_t$. The ball argument of step 2.1 gives $c_i=0$ pointwise. The three equations are $\sigma_{32}-\sigma_{23}=0$, $\sigma_{13}-\sigma_{31}=0$, and $\sigma_{21}-\sigma_{12}=0$, respectively, proving symmetry. [given, A1, F3, F5, F6, step 1.1, step 1.3, step 2.1, algebra]

4.1 Conversely, assume local momentum and symmetric stress in this same setting. Symmetry makes the three components $c_i$ in step 3.1 zero, so $\operatorname{div}M=x\times\operatorname{div}\sigma$. Step 1.3 and $D_t(x\times u)=x\times D_tu$ then give $\partial_t(\rho(x\times u))+\operatorname{div}(\rho(x\times u)\otimes u)=x\times(\rho b)+\operatorname{div}M$. Integrate over $P_t$ and apply [F3] and [F5]; the left side is the material angular-momentum derivative and the right side is its body and traction moment. This recovers the adopted angular balance, completing the converse and all claims. [given, F3, F5, F6, step 1.1, step 1.3, step 3.1, algebra] ∎
