---
id: pthm-fd-nonnewtonian-conditional-admissibility
kind: physics-theorem
title: "Conditional admissibility of the specified non-Newtonian branches"
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 4
deps:
  - def-fd-adopted-nonnewtonian-models
  - lem-fd-generalized-newtonian-dissipation
  - lem-fd-bingham-monotone-graph
  - lem-fd-conformation-storage
dependency_roles:
  def-fd-adopted-nonnewtonian-models: formulation-prerequisite
  lem-fd-generalized-newtonian-dissipation: mathematical-premise
  lem-fd-bingham-monotone-graph: mathematical-premise
  lem-fd-conformation-storage: mathematical-premise
physical_scope: >-
  Given selected stated law and balances, derive objective nonnegative mechanical
  dissipation; conformation entropy requires explicit isothermal Helmholtz
  realization/thermostat.
empirical_premises: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. N. Reddy, An Introduction to Continuum Mechanics, Second Edition, §§5.4.2–5.4.3, equations (5.4.11), (5.4.20), (5.4.23)–(5.4.30)"
      url: "https://courses.washington.edu/mengr503/Chapter_5.pdf"
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Work in the smooth incompressible branch of the adopted nonrelativistic continuum model. Let $T>0$, let $J\subseteq\mathbb R$ be an open interval containing $[0,T]$, let $\Omega\subseteq\mathbb R^3$ be open, and let $u\in C^2(J\times\Omega;\mathbb R^3)$ be the Eulerian velocity induced by a $C^2$ material motion with orientation-preserving $C^2$ diffeomorphic time slices, and satisfy $\operatorname{div}u=0$. At a spatial point let $L=\nabla u$, $D=(L+L^{\mathsf T})/2$, $\operatorname{tr}D=0$, and use the Frobenius contraction $S:T=\operatorname{tr}(S^{\mathsf T}T)$ with norm $|S|=(S:S)^{1/2}$. Let $M_3(\mathbb R)$ denote the real $3\times3$ matrices, and define $\mathrm{Sym}_0(3)=\{S\in M_3(\mathbb R):S=S^{\mathsf T},\operatorname{tr}S=0\}$ and $\mathrm{Sym}^+(3)=\{C\in M_3(\mathbb R):C=C^{\mathsf T},z^{\mathsf T}Cz>0\text{ for every }z\ne0\}$. A constitutive response is objective when under every rigid observer change $x^*=Q(t)x+c(t)$, with $Q\in C^2([0,T],\mathrm{SO}(3))$ and $c\in C^2([0,T],\mathbb R^3)$, its second-order tensor value at corresponding events transforms as $S^*=QSQ^{\mathsf T}$. For the generalized Newtonian branch, let $\dot\gamma=(2D:D)^{1/2}$, let $\eta:[0,\infty)\to[0,\infty)$ be finite and continuous, and set $\tau=2\eta(\dot\gamma)D$. Define $I_3$ as the $3\times3$ identity matrix; in SI units, $L,D,\dot\gamma$ have units $\mathrm{s}^{-1}$, $\eta,\eta_s,\mu_p$ have units $\mathrm{Pa\,s}$, and $\tau,\tau_y,G$ have units Pa. For the Bingham branch, let $\mu_p\ge0$ in $\mathrm{Pa\,s}$ and $\tau_y\ge0$ in $\mathrm{Pa}$, and set $\mathcal B(D)=\{2\mu_pD+\tau_yD/|D|\}$ for $D\ne0$ and $\mathcal B(0)=\{S\in\mathrm{Sym}_0(3):|S|\le\tau_y\}$. For the conformation branch, take a $C^1$ trajectory $x:[0,T]\to\Omega$ with $x'(t)=u(t,x(t))$. Set $L(t)=\nabla u(t,x(t))$, $D(t)=(L(t)+L(t)^{\mathsf T})/2$, and let the dimensionless $C\in C^1([0,T];M_3(\mathbb R))$ be symmetric, so $C(t)=C(t)^{\mathsf T}$ for all $t$, and satisfy

$$
C'=LC+CL^{\mathsf T}-(C-I_3)/\lambda,\qquad C(0)=C_0\in\mathrm{Sym}^+(3),
$$

where $G>0$ is a modulus in Pa, $\lambda>0$ is a relaxation time in seconds, and $\eta_s\ge0$ is a solvent viscosity in Pa s. Define $\tau_p=G(C-I_3)$, $\tau_s=2\eta_sD$, and $w(C)=\frac G2(\operatorname{tr}C-\log\det C-3)$ in J m$^{-3}$. Then the generalized Newtonian and Bingham branches have objective stress responses and nonnegative instantaneous mechanical power $\tau:D\ge0$ for every allowed stress. On every forward time $t\in[0,T]$, the conformation solution remains positive definite, its constitutive response is objective, and

$$
(\tau_s+\tau_p):D-\frac{d}{dt}w(C) =2\eta_sD:D+\frac{G}{2\lambda}\bigl(\operatorname{tr}C+\operatorname{tr}C^{-1}-6\bigr)\ge0.
$$

Thus the selected smooth branches have nonnegative mechanical or stored-energy dissipation under their stated model hypotheses. This is a conditional deduction, not a claim of empirical material applicability or existence of a fluid partial-differential-equation solution.

For an entropy-production interpretation of the conformation inequality, additionally adopt the following separate isothermal realization along the trajectory. Fix $T_0>0$ in K and let $e_v,s_v\in C^1([0,T];\mathbb R)$ be internal-energy and entropy densities per current volume, in $\mathrm{J\,m^{-3}}$ and $\mathrm{J\,K^{-1}m^{-3}}$, respectively. Let $h\in C^0([0,T];\mathbb R)$ be the signed heat-removal rate per current volume, in $\mathrm{W\,m^{-3}}$, positive for heat passed to an ideal external thermostat at the same temperature $T_0$. Assume this is the only heat exchange, carrying entropy out at rate $h/T_0$, and adopt the energy balance $e_v'=(\tau_s+\tau_p):D-h$ and the Helmholtz free-energy identification $w(C)=e_v-T_0s_v$. Define the internal entropy-production density by $\pi_s:=s_v'+h/T_0$, in $\mathrm{W\,K^{-1}m^{-3}}$. Derivatives at the time endpoints are one-sided. Then

$$
T_0\pi_s=(\tau_s+\tau_p):D-\frac{d}{dt}w(C)\ge0.
$$

These additional thermodynamic assumptions are not inferred from the continuum balances or the stored-energy identity alone.

## Statement references

[J. N. Reddy, *An Introduction to Continuum Mechanics*, 2nd ed., §§5.4.2–5.4.3, equations (5.4.11), (5.4.20), and (5.4.23)–(5.4.30): energy, entropy exchange, and Helmholtz conventions](https://courses.washington.edu/mengr503/Chapter_5.pdf)

[J. N. Reddy, *An Introduction to Continuum Mechanics*, 2nd ed., Chapter 6, equation (6.5.15) and §§6.6.1–6.6.2.3, PDF pp. 25–27 (printed pp. 245–247)](https://courses.washington.edu/mengr503/Chapter_6.pdf)

[Chiang C. Mei, MIT 1.63J/2.21J *Lecture Notes on Fluid Dynamics*, §1.6.2, equations (1.6.13)–(1.6.18), complete 4-page PDF](https://ocw.mit.edu/courses/1-63-advanced-fluid-dynamics-of-the-environment-fall-2002/0c5e315f2b97fff948cb35f10a97894c_16stressstrain.pdf)

[John W. Barrett and Sébastien Boyaval, *Existence and Approximation of a (Regularized) Oldroyd-B Model*, arXiv:0907.4066v2, §1.1 and §2.3, PDF pp. 2–11](https://arxiv.org/pdf/0907.4066)

[S. Boyaval, T. Lelièvre, and C. Mangoubi, *Free-energy-dissipative schemes for the Oldroyd-B model*, ESAIM: M2AN 43 (2009), §§2.1.1–2.1.2, PDF pp. 4–6](https://www.numdam.org/item/10.1051/m2an/2009008.pdf)

[David Tong, *Fluid Mechanics*, Part I, §§1.1.1–1.1.3, PDF pp. 6–9](https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf)

## Facts & Assumptions

**Given:** The adopted smooth continuum branch and the three constitutive cases in the Statement.

[F1] [[def-fd-adopted-nonnewtonian-models]]: a material motion is a $C^2$ map with orientation-preserving $C^2$ diffeomorphic time slices, its Eulerian velocity is $u(t,\chi(t,a))=\partial_t\chi(t,a)$, and $\mathrm{SO}(3)=\{Q:Q^{\mathsf T}Q=I_3,\det Q=1\}$; under a rigid observer change with $Q(t)\in\mathrm{SO}(3)$, objective tensor responses transform as $S^*=QSQ^{\mathsf T}$.

[F2] [[def-fd-adopted-nonnewtonian-models]]: the generalized Newtonian branch defines $\dot\gamma=(2D:D)^{1/2}$ and $\tau=2\eta(\dot\gamma)D$ with finite continuous $\eta:[0,\infty)\to[0,\infty)$.

[F3] [[def-fd-adopted-nonnewtonian-models]]: the selected parameter $\tau_y$ is the Frobenius radius of the Bingham stress ball at rest, and the graph is set-valued there.

[F4] [[def-fd-adopted-nonnewtonian-models]]: the conformation branch adopts the displayed upper-convected equation, polymer and solvent stresses, and stored-energy density $w(C)$ on a smooth incompressible trajectory.

[F5] [[lem-fd-generalized-newtonian-dissipation]]: for the incompressible generalized Newtonian law with finite continuous $\eta:[0,\infty)\to[0,\infty)$, $\tau:D\ge0$; under the stated $C^2$ rigid observer change the rate and stress transform by orthogonal conjugation.

[F6] [[lem-fd-bingham-monotone-graph]]: the trace-free Bingham graph is the subdifferential of $\Phi(D)=\mu_p|D|^2+\tau_y|D|$; its values are monotone, every value satisfies $\tau:D\ge0$, and $\mathcal B(QDQ^{\mathsf T})=Q\mathcal B(D)Q^{\mathsf T}$.

[F7] [[lem-fd-conformation-storage]]: for the stated smooth forward trajectory, continuous matrix field $L$, positive-definite initial $C_0$, $G,\lambda>0$, and $\eta_s\ge0$, the solution remains positive definite and satisfies the exact displayed stored-energy dissipation identity.

[F8] [[lem-fd-conformation-storage]]: under the stated rigid observer change, the conformation equation is covariant, the conformation and both stresses transform by orthogonal conjugation, and the stored-energy density is invariant.

[A1] For the optional isothermal realization only, adopt the Statement's $T_0>0$, densities $e_v,s_v$, heat-removal rate $h$, energy balance $e_v'=(\tau_s+\tau_p):D-h$, Helmholtz identification $w(C)=e_v-T_0s_v$, and entropy-exchange convention $\pi_s=s_v'+h/T_0$. These are additional physical assumptions and a definition, not consequences of [F1]–[F8].

## Proof

1.1 In the generalized Newtonian branch, $\dot\gamma^2=2D:D$ and $\eta(\dot\gamma)\ge0$ by [F2], so $\tau:D=2\eta(\dot\gamma)D:D=\eta(\dot\gamma)\dot\gamma^2\ge0$. Under a rigid observer change, [F5] gives $D^*=QDQ^{\mathsf T}$ and $\tau^*=Q\tau Q^{\mathsf T}$; orthogonal conjugation preserves the Frobenius product, hence $\dot\gamma^*=\dot\gamma$. By the definition in [F1], the response is objective. [F1, F2, F5, algebra]

1.2 In the Bingham branch, when $D\ne0$, each allowed stress is $\tau=2\mu_pD+\tau_yD/|D|$, so $\tau:D=2\mu_p|D|^2+\tau_y|D|\ge0$. When $D=0$, every allowed stress has $\tau:D=0$; the graph value there is nonempty since it contains $0$, and for $D\ne0$ the graph value is a singleton. The kinematic identity $D^*=QDQ^{\mathsf T}$ in [F5] and the graph equivariance in [F6] give $\mathcal B(D^*)=Q\mathcal B(D)Q^{\mathsf T}$, so the graph response is objective, including at zero rate. [F3, F5, F6, algebra]

1.3 For the conformation branch, [F7] supplies positive definiteness and the exact identity in the Statement under its forward-time and regularity hypotheses; [F8] supplies objectivity. Set $A=C-I_3$. Since $C$ is positive definite, it is invertible and $C^{-1}$ is positive definite: for each nonzero $z$, $z^{\mathsf T}C^{-1}z=(C^{-1}z)^{\mathsf T}C(C^{-1}z)>0$. Matrix multiplication gives $AC^{-1}A=C+C^{-1}-2I_3$, so $\operatorname{tr}C+\operatorname{tr}C^{-1}-6=\operatorname{tr}(A^{\mathsf T}C^{-1}A)=\sum_{j=1}^3a_j^{\mathsf T}C^{-1}a_j\ge0$, where $a_j$ are the columns of $A$. Since $\eta_s\ge0$, the displayed stored-energy dissipation is nonnegative. [F4, F7, F8, algebra]

2.1 Steps 1.1–1.3 establish the conditional nonnegative mechanical or stored-energy dissipation and objectivity. Under the additional assumptions [A1], constancy of $T_0$ gives $\frac{d}{dt}w(C)=e_v'-T_0s_v'=(\tau_s+\tau_p):D-h-T_0s_v'$. Rearrangement yields $(\tau_s+\tau_p):D-\frac{d}{dt}w(C)=T_0(s_v'+h/T_0)=T_0\pi_s\ge0$ by step 1.3. Since $T_0>0$, $\pi_s\ge0$; no entropy conclusion is used or asserted without [A1]. [given, A1, step 1.1, step 1.2, step 1.3, algebra] ∎
