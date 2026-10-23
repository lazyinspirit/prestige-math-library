---
id: pthm-fd-wall-mechanical-power-balance
kind: physics-theorem
title: "Mechanical power balance under adopted wall laws"
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 5
deps:
  - post-fd-continuum-balances
  - post-fd-newtonian-fourier
  - post-fd-boundary-data
  - post-fd-navier-slip-wall-law
  - def-fd-incompressible-newtonian-model
  - def-fd-smooth-wall-exterior-solution-domains
  - thm-divergence-theorem-for-bounded-c-one-euclidean-domains
  - def-countable-choice
  - thm-fd-smooth-wall-energy-uniqueness
  - pthm-fd-local-momentum-balance-from-continuum
dependency_roles:
  post-fd-continuum-balances: physical-assumption
  post-fd-newtonian-fourier: physical-assumption
  post-fd-boundary-data: physical-assumption
  post-fd-navier-slip-wall-law: physical-assumption
  def-fd-incompressible-newtonian-model: formulation-prerequisite
  def-fd-smooth-wall-exterior-solution-domains: mathematical-premise
  thm-divergence-theorem-for-bounded-c-one-euclidean-domains: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-fd-smooth-wall-energy-uniqueness: mathematical-premise
  pthm-fd-local-momentum-balance-from-continuum: physical-result
empirical_premises: []
physical_scope: >-
  Smooth incompressible Newtonian solutions of constant positive density and
  viscosity on a fixed bounded C2 domain, or on the stated periodic channel with
  no-slip physical walls. The adopted stationary Navier friction law is used
  only on the bounded-domain branch. It gives conditional mechanical power
  identities and stationary bounded-domain smooth uniqueness only; no
  existence or universal wall-law applicability is asserted.
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Fluid Mechanics, Chapter 2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
      locator: "§§3.1.1–3.1.2 and §§3.2.1–3.2.3, PDF pp. 4–14 (printed pp. 57–68): Cauchy stress, kinetic work, viscous dissipation, no-slip, Couette and Poiseuille flows."
    - title: "Joseph M. Powers, Lecture Notes on Intermediate Fluid Mechanics"
      url: "https://academicweb.nd.edu/~powers/ame.60635/notes.pdf"
      locator: "§4.4.5.2, printed pp. 145–146: mechanical energy equation derived from momentum; §5.4.1, printed pp. 173–175: Newtonian shear and Couette setup."
    - title: "Gui-Qiang Chen and Zhongmin Qian, A Study of the Navier-Stokes Equations with the Kinematic and Navier Boundary Conditions"
      url: "https://arxiv.org/pdf/0901.0147"
      locator: "arXiv:0901.0147v1, §1 equations (1.1), (1.3)–(1.4), and §2 equation (2.5) / Proposition 2.1, PDF pp. 1–5."
verification:
  precheck: pending
---

## Statement

Assume Countable Choice, meaning every countable family of nonempty sets has a choice function. Let $T>0$ seconds. The spatial domain is either (B) a bounded connected nonempty open $\Omega\subset\mathbb R^3$ with $C^2$ boundary, or (P) a periodic channel $\Omega_{L_x,h,L_z}:=(\mathbb R/L_x\mathbb Z)\times(0,h)\times(\mathbb R/L_z\mathbb Z)$ with $L_x,L_z,h>0$ metres. In (P), fields are periodic in the first and third coordinates on the Euclidean covering space, and the only physical wall boundary is $\Gamma=(\mathbb R/L_x\mathbb Z)\times\{0,h\}\times(\mathbb R/L_z\mathbb Z)$; identified periodic faces are not walls. In (B), set $\Gamma:=\partial\Omega$. In either case let $n$ be the outward unit normal on $\Gamma$, let $dx$ be Euclidean volume measure (or its periodic-cell quotient measure), and let $dS$ be the induced area measure on $\Gamma$. Let the constant mass density be $\rho>0$ kilograms per cubic metre, and let the coefficient $\mu$ of the adopted Newtonian closure be constant and denote its value by $\eta>0$ pascal-seconds; let the body-acceleration field be $b\in C([0,T]\times\overline\Omega;\mathbb R^3)$ in metres per second squared, the velocity be $u\in C^1([0,T];C^2(\overline\Omega;\mathbb R^3))$ in metres per second, and the pressure be $p\in C([0,T];C^1(\overline\Omega))$ in pascals. Define $D(u)_{ij}:=(\partial_{x_j}u_i+\partial_{x_i}u_j)/2$, $\sigma:=-pI+2\eta D(u)$, and rowwise $(\operatorname{div}\sigma)_i:=\sum_j\partial_{x_j}\sigma_{ij}$. For matrices $A,B\in\mathbb R^{3\times3}$ define the Frobenius contraction $A:B:=\sum_{i,j=1}^3A_{ij}B_{ij}$ and the squared norm $|D(u)|^2:=D(u):D(u)=\sum_{i,j=1}^3D(u)_{ij}^2$. In the proof, $D$ abbreviates $D(u)$. Put $I=(0,T)$. In case (B), put $B=\Omega$ and assume $\chi\in C^2(I\times B;\mathbb R^3)$, with each $\chi_t:B\to B$ an orientation-preserving $C^2$ diffeomorphism, and $u(t,\chi(t,a))=\partial_t\chi(t,a)$. In case (P), put $\widetilde\Omega=\mathbb R\times(0,h)\times\mathbb R$ and $\Lambda=\{(mL_x,0,nL_z):m,n\in\mathbb Z\}$; denote periodic lifts of $u,b,\sigma$ by $\widetilde u,\widetilde b,\widetilde\sigma$. Assume $\widetilde\chi\in C^2(I\times\widetilde\Omega;\mathbb R^3)$, with each $\widetilde\chi_t:\widetilde\Omega\to\widetilde\Omega$ an orientation-preserving $C^2$ diffeomorphism satisfying $\widetilde\chi(t,a+\lambda)=\widetilde\chi(t,a)+\lambda$ for every $\lambda\in\Lambda$, and $\widetilde u(t,\widetilde\chi(t,a))=\partial_t\widetilde\chi(t,a)$. For the material balance, write $(B,\chi,u^\sharp,b^\sharp,\sigma^\sharp)=(\Omega,\chi,u,b,\sigma)$ in case (B), and $(B,\chi,u^\sharp,b^\sharp,\sigma^\sharp)=(\widetilde\Omega,\widetilde\chi,\widetilde u,\widetilde b,\widetilde\sigma)$ in case (P). Here $\nu$ denotes the outward unit normal of $\chi_t(V)$; in case (P), the material-region integrals are on the Euclidean covering space. For every $t\in I$ and every nonempty bounded open $V\Subset B$ with $C^1$ boundary, assume the adopted material linear-momentum balance

$$\frac{d}{dt}\int_{\chi_t(V)}\rho u^\sharp\,dx=\int_{\chi_t(V)}\rho b^\sharp\,dx+\int_{\partial\chi_t(V)}\sigma^\sharp\nu\,dS,$$

Assume incompressibility as a model constraint, $\operatorname{div}u=0$ throughout the fluid domain (and $\operatorname{div}\widetilde u=0$ on its lift in case (P)). At every time impose one of the following wall laws: (N) no-slip, $u=g$ on $\Gamma$ for a prescribed tangential wall-velocity field $g\in C^1([0,T];C^2(\Gamma;\mathbb R^3))$ in metres per second with $g\cdot n=0$; or (S) stationary Navier friction on branch (B) only, $u\cdot n=0$ and $(\sigma n)_\tau=-\beta u_\tau$ on $\Gamma$, where $a_\tau:=a-(a\cdot n)n$ and $\beta\ge0$ is the adopted constant wall coefficient in pascal-seconds per metre. Then the local momentum equation

$$\rho\bigl(\partial_tu+(u\cdot\nabla)u\bigr)=\operatorname{div}\sigma+\rho b$$

holds on the fluid domain by the local momentum result from the adopted material balance; incompressibility is the separate model constraint stated above, not a conclusion of that result. Let $K(t):=\int_\Omega \rho|u(t,x)|^2/2\,dx$. Then for every $t\in(0,T)$ in case (N),

$$\frac{dK}{dt}=\int_\Omega \rho b\cdot u\,dx-2\eta\int_\Omega |D(u)|^2\,dx+\int_{\Gamma}g\cdot\sigma n\,dS,$$

and for every $t\in(0,T)$ in case (S),

$$\frac{dK}{dt}=\int_\Omega \rho b\cdot u\,dx-2\eta\int_\Omega |D(u)|^2\,dx-\beta\int_{\Gamma}|u_\tau|^2\,dS.$$

Every term has units of watts. In branch (B) only, in either stationary homogeneous case, (N) with $g=0$ or (S) with a fixed $\beta$, there is at most one velocity field $u$ in this smooth class for a given body force and initial velocity. No pressure uniqueness is asserted. These are deductions conditional on the stated model and wall assumptions; no solution-existence or empirical-applicability claim is made.

## Statement references

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.1.1–3.1.2 and §§3.2.1–3.2.3](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Joseph M. Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §§4.4.5.2 and 5.4.1](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

[Chen and Qian, *A Study of the Navier–Stokes Equations with the Kinematic and Navier Boundary Conditions*, §§1–2](https://arxiv.org/pdf/0901.0147)

[David Tong, *Fluid Mechanics*, Chapter 2, §§3.1.1–3.1.2](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf)

[Joseph M. Powers, *Lecture Notes on Intermediate Fluid Mechanics*, §4.4.5.2](https://academicweb.nd.edu/~powers/ame.60635/notes.pdf)

## Facts & Assumptions

**Given:** The smooth fields, equations, units, boundary branch and Countable Choice assumption stated above.

[A1] [[post-fd-continuum-balances]]: the adopted material momentum balance uses body acceleration $b$, Cauchy stress $\sigma$, and traction $\sigma n$; it asserts a model balance, not empirical universality. This current item is Step-1 ready.

[F1] [[def-fd-incompressible-newtonian-model]]: the current definition specifies constant positive density, $\operatorname{div}u=0$, pressure-multiplier stress $\sigma=-pI_3+2\mu D$, and the rowwise stress divergence. Its displayed momentum equation is unforced and is not used here; [F7] derives the forced equation from [A1] and [F2]. The current Step-1 readiness record is ready.

[F2] [[post-fd-newtonian-fourier]]: the current adopted closure is $\tau=2\mu D_0+\zeta\theta I_3$ and $\sigma=-pI_3+\tau$. In the selected constant-viscosity incompressible branch, $\theta=0$ and $D_0=D$, so this gives the stress in the Statement; the current Step-1 readiness record is ready.

[F3] [[post-fd-boundary-data]]: no-slip is the separately selected equality of fluid and wall velocities, and impermeability equates their normal components. Here the fixed wall has tangential velocity $g$, so the selected no-slip branch has $u=g$ and $u\cdot n=0$; its current Step-1 readiness record is ready.

[F4] [[post-fd-navier-slip-wall-law]]: at a stationary impermeable wall the adopted tangential traction is $(\sigma n)_\tau=-\beta u_\tau$ with $\beta\ge0$ in Pa·s/m.

[F5] [[def-fd-smooth-wall-exterior-solution-domains]]: a bounded wall domain is bounded, connected and $C^2$; its bounded-domain smooth velocity class is $C^1_tC^2_x$ and pressure has one continuous spatial derivative.

[F6] [[thm-divergence-theorem-for-bounded-c-one-euclidean-domains]]: for bounded $C^1$ $\Omega$ and $F\in C^1(\overline\Omega;\mathbb R^3)$, the volume divergence integral equals the outward boundary flux. Its Statement assumes Countable Choice.

[A2] [[def-countable-choice]]: every countable family of nonempty sets has a choice function; this is the exact choice strength used by [F6].

[L1] [[thm-fd-smooth-wall-energy-uniqueness]]: the current theorem states the fixed bounded-domain smooth forced equations and uniqueness for two solutions with the same force, initial velocity, density, viscosity and selected homogeneous wall law. Its full current proof includes the integrating-factor Gronwall step, and its current Step-1 readiness record is ready. The statement and proof interface match this bounded-domain uniqueness use.

[F7] [[pthm-fd-local-momentum-balance-from-continuum]]: under the adopted material balance, smooth material motion, constant density, incompressibility and selected Newtonian closure, the forced local momentum equation in the Statement follows pointwise. Its full local transport and continuity-localization proof is on this A page.

## Proof

**Given:** The assumptions in the Statement, including the adopted material balance, the incompressible Newtonian branch, either boundary law, and Countable Choice.

1.1 The material-motion hypotheses in the Statement give an orientation-preserving $C^2$ diffeomorphism of the bounded domain or of the periodic covering region, and the periodic lift is translation-equivariant; the displayed integral balance is exactly the adopted material balance [A1]. The regularity, constant positive density and viscosity, incompressibility constraint [F1], and stress closure [F2] satisfy the corresponding hypotheses of [F7]. Thus its forced pointwise momentum equation holds in the fluid domain. The local-momentum result does not derive incompressibility; that condition is imposed separately in the Statement. [given, A1, F1, F2, F7]

2.1 Put $k=\rho|u|^2/2$. Since $\rho$ is constant and $\operatorname{div}u=0$, the product rule gives $\partial_t k+\operatorname{div}(ku)=\rho u\cdot(\partial_tu+(u\cdot\nabla)u)$. In branch (B), the divergence theorem applied to $ku$ gives boundary flux $k(u\cdot n)=0$; in branch (P), periodic-coordinate endpoint values cancel and the two wall fluxes vanish because $u\cdot n=0$. Substituting the local equation from step 1.1 therefore yields $K'=\int_\Omega u\cdot\operatorname{div}\sigma\,dx+\int_\Omega\rho b\cdot u\,dx$. [given, F1, F3, F4, F6, A2, step 1.1, algebra]

3.1 Using the Frobenius contraction and $|D|^2=D:D$ defined in the Statement and the rowwise divergence convention, the product rule gives $u\cdot\operatorname{div}\sigma=\operatorname{div}(\sigma^{\mathsf T}u)-\sigma:\nabla u$. Write $\nabla u=D+W$ with $W=(\nabla u-\nabla u^{\mathsf T})/2$; symmetry of $D$ and skew-symmetry of $W$ imply $D:W=0$, while $\operatorname{div}u=\operatorname{tr}D=0$. Consequently $\sigma:\nabla u=(-pI+2\eta D):(D+W)=2\eta|D|^2$. [given, F1, F2, step 2.1, algebra]

4.1 In branch (B), apply [F6] to the $C^1$ vector field $\sigma^{\mathsf T}u$. In branch (P), integrate its coordinate divergence over a fundamental cell; the periodic side fluxes cancel and the two remaining wall fluxes equal $\int_\Gamma u\cdot\sigma n\,dS$. In both cases the kinetic boundary flux is zero, so step 2.1 becomes $K'=\int_\Omega\rho b\cdot u\,dx-2\eta\int_\Omega|D|^2\,dx+\int_\Gamma u\cdot\sigma n\,dS$. The domain regularity, field regularity and Countable Choice hypotheses of [F6] hold on branch (B) by the Statement and [A2]. [given, F5, F6, A2, step 2.1, step 3.1]

5.1 In branch (N), $u=g$ on the physical wall, so the last integral in step 4.1 is $\int_{\Gamma}g\cdot\sigma n\,dS$. In branch (S), $u=u_\tau$ and $(\sigma n)_\tau=-\beta u_\tau$, so $u\cdot\sigma n=u_\tau\cdot(\sigma n)_\tau=-\beta|u_\tau|^2$. These substitutions give the two asserted power identities. [given, F3, F4, step 4.1, algebra]

6.1 For the stationary homogeneous branches, the same body force, boundary law, density, viscosity and initial velocity satisfy the exact current uniqueness interface recorded in [L1]. Its inspected integrating-factor argument gives at most one velocity in this smooth class; this does not assert existence. [given, L1] ∎

