---
id: thm-fd-periodic-smooth-stability
kind: theorem
title: "Smooth incompressible and symmetric-system stability"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - lem-fd-periodic-tame-transport-commutator
  - thm-fd-smooth-periodic-incompressible-ivp
  - thm-fd-smooth-polytropic-euler-ivp
  - def-fd-polytropic-symmetric-variables
  - lem-fd-given-smooth-solutions-difference-energy
  - def-fd-periodic-fourier-sobolev-spaces
  - def-fd-periodic-leray-pressure-maps
  - def-countable-choice
dependency_roles:
  lem-fd-periodic-tame-transport-commutator: mathematical-premise
  thm-fd-smooth-periodic-incompressible-ivp: mathematical-premise
  thm-fd-smooth-polytropic-euler-ivp: mathematical-premise
  def-fd-polytropic-symmetric-variables: mathematical-premise
  lem-fd-given-smooth-solutions-difference-energy: mathematical-premise
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  def-fd-periodic-leray-pressure-maps: mathematical-premise
  def-countable-choice: mathematical-premise
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, §2.1.5"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
    - title: "Thomas Y. Hou, lecture notes, Blow-up or no blow-up?, §3"
      url: "https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf"
    - title: "David Tong, Fluid Mechanics, Chapter 2, §3.1.2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice. Let $d\in\{1,2,3\}$, let $s\ge4$ be an integer, and use the normalized torus $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$. For any two smooth real divergence-free initial velocities, the local incompressible IVP theorem supplies unique smooth periodic solutions $u^{\nu_1},u^{\nu_2}$ for each $\nu_1,\nu_2\ge0$ on a common interval $[0,T]$. For fixed data, this interval and the local theorem's bound in each integer $H^m$, $m\ge s$, can be chosen independently of $\nu_1,\nu_2$. Put $w=u^{\nu_1}-u^{\nu_2}$ and $L(t)=\|\nabla u^{\nu_2}(t)\|_{L^\infty}$. Then
$$\|w(t)\|_{L^2}\le e^{\int_0^t L(\tau)\,d\tau}\|w(0)\|_{L^2}+|\nu_1-\nu_2|\int_0^t e^{\int_s^t L(\tau)\,d\tau}\|\Delta u^{\nu_2}(s)\|_{L^2}\,ds.$$
In particular, if $\nu_1=\nu_2=\nu$, the exact difference-energy supplier gives $\|w(t)\|_{L^2}\le e^{\int_0^tL(\tau)\,d\tau}\|w(0)\|_{L^2}$. For two smooth positive-density polytropic Euler solutions with the same $\kappa>0$ and $\gamma>1$, the symmetric variables $q=(r,u)$ from the stated definition satisfy
$$\|q(t)-\widetilde q(t)\|_{L^2}^2\le\|q(0)-\widetilde q(0)\|_{L^2}^2\exp\!\left(C\int_0^t(\|\nabla q(\tau)\|_{L^\infty}+\|\nabla\widetilde q(\tau)\|_{L^\infty})\,d\tau\right).$$
In either system, if both solutions have a common bound $M$ in $H^s$ on $[0,T]$, then the $H^{s-1}$ difference is bounded by the $L^2$ difference to the power $1/s$ times $(2M)^{(s-1)/s}$.

## Statement references

[[thm-fd-smooth-periodic-incompressible-ivp]]

[[thm-fd-smooth-polytropic-euler-ivp]]

[[lem-fd-given-smooth-solutions-difference-energy]]

[[def-fd-polytropic-symmetric-variables]]

[Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, §2.1.5](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

[Hou, lecture notes, equations (3.1)–(3.4)](https://math.stanford.edu/~ryzhik/SCHOOL-13/hou_notes.pdf)

## Facts & Assumptions

**Given:** Countable Choice, the normalized periodic Fourier conventions, and the solution pairs in the Statement.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[thm-fd-smooth-periodic-incompressible-ivp]]: for smooth real divergence-free data and fixed $\nu\ge0$, the normalized periodic incompressible equation has a unique smooth local solution on an interval whose length depends on $d,s$, and the initial $H^s$ norm, but not on $\nu$ or higher norms.

[F2] [[def-fd-polytropic-symmetric-variables]] and [[thm-fd-smooth-polytropic-euler-ivp]]: positive-density polytropic Euler is transformed to $q_t+\sum_jA_j(q)\partial_jq=0$, where each $A_j$ is a fixed linear symmetric-matrix map, and the local theorem supplies smooth positive-density solutions.

[F3] [[lem-fd-given-smooth-solutions-difference-energy]]: two already given smooth incompressible solutions with equal viscosity satisfy $\|u(t)-v(t)\|_2^2\le\|u(0)-v(0)\|_2^2\exp(2\int_0^t\|\nabla v(\tau)\|_\infty d\tau)$. For a symmetric system with fixed linear symmetric matrices, the squared $L^2$ difference is at most its initial value times $\exp(C\int_0^t(\|\nabla q\|_\infty+\|\nabla\widetilde q\|_\infty)d\tau)$, with $C$ depending only on the dimension and matrix maps. These are estimates for given smooth solutions, not existence assertions.

[F4] [[def-fd-periodic-fourier-sobolev-spaces]]: $H^s$ is the weighted Fourier coefficient norm with $w_k=(1+|k|^2)^{1/2}$ on $Q_d$. [[def-fd-periodic-leray-pressure-maps]]: $P$ is a self-adjoint projection, maps divergence-free fields to themselves, and commutes with derivatives.

[F5] [[lem-fd-periodic-tame-transport-commutator]]: for integers $m\ge s\ge4$, each scalar coordinate satisfies $\|[\Lambda^m,f]\partial_jg\|_2\le C_{d,m,s}(\|f\|_{H^m}\|g\|_{H^s}+\|f\|_{H^s}\|g\|_{H^m})$, where $\Lambda^m$ is the Fourier multiplier $w_k^m$.

## Proof

1.1 Let the two initial velocities be $u_{0,i}$, $i=1,2$, and put $M_i=\|u_{0,i}\|_{H^s}$. By [F1], for each datum there is an existence time $T_i>0$ depending only on $d,s,M_i$, independent of its viscosity. For any of these smooth solutions, pair its projected equation after applying $\Lambda^m$ with $\Lambda^mu$, for an integer $m\ge s$. By [F4], the projections disappear; the term $\int u\cdot\nabla|\Lambda^mu|^2/2$ vanishes by periodicity and incompressibility. The componentwise commutator estimate [F5] bounds the remaining transport pairing by $C_m\|u\|_{H^s}\|u\|_{H^m}^2$, and viscosity contributes $-\nu\|\nabla u\|_{H^m}^2\le0$. Thus $\frac12(\|u\|_{H^m}^2)'\le C_m\|u\|_{H^s}\|u\|_{H^m}^2$, with constants independent of $\nu$. At $m=s$, regularizing the norm if necessary and integrating the reciprocal inequality gives $\|u_i(t)\|_{H^s}\le2M_i$ up to $[2C_s\max(1,M_i)]^{-1}$ within its existence interval; if $M_i=0$, uniqueness identifies the solution with zero. Choose $T$ as the minimum of the two $T_i$ and these two reciprocal bounds. For each $m\ge s$, multiplication of the squared-norm inequality by $e^{-4C_mM_it}$ now gives $\|u_i(t)\|_{H^m}\le\|u_{0,i}\|_{H^m}e^{2C_mM_it}$ on $[0,T]$. Both $T$ and these all-order bounds are independent of the two viscosities. [given, A1, F1, F4, F5, algebra]

1.2 For possibly different viscosities, subtract the two projected equations. The identity $u^{\nu_1}\cdot\nabla u^{\nu_1}-u^{\nu_2}\cdot\nabla u^{\nu_2}=u^{\nu_1}\cdot\nabla w+w\cdot\nabla u^{\nu_2}$ gives
$w_t+P(u^{\nu_1}\cdot\nabla w+w\cdot\nabla u^{\nu_2})=\nu_1\Delta w+(\nu_1-\nu_2)\Delta u^{\nu_2}$.
Pair with $w$. Since $Pw=w$ and $P$ is self-adjoint, it disappears from the inner product. Periodicity and $\operatorname{div}u^{\nu_1}=0$ cancel the first transport term; the second is bounded by $L(t)\|w\|_2^2$; and $\nu_1\int w\cdot\Delta w=-\nu_1\|\nabla w\|_2^2\le0$. Thus, with $R(t)=|\nu_1-\nu_2|\|\Delta u^{\nu_2}(t)\|_2$, $\frac12(\|w\|_2^2)'\le L(t)\|w\|_2^2+R(t)\|w\|_2$. [given, F4, algebra]

1.3 In the polytropic branch, [F2] places the two given solutions in the symmetric system with fixed linear symmetric matrices. The symmetric part of [F3] therefore applies directly and gives the displayed squared $L^2$ estimate with exactly its stated gradient integral. [given, A1, F2, F3]

2.1 In the incompressible case with equal viscosity, apply the integrated estimate [F3] to the solutions from step 1.1 and take square roots. This gives the asserted norm bound with factor $\exp(\int_0^t L(\tau)\,d\tau)$. [given, F3, step 1.1, algebra]

2.2 Replace $\|w\|_2$ by $y_\epsilon=(\|w\|_2^2+\epsilon^2)^{1/2}$, differentiate, integrate the scalar inequality from step 1.2 with factor $\exp(-\int_0^tL)$, and let $\epsilon\downarrow0$. This yields the displayed residual estimate, including times at which $w=0$. [step 1.2, algebra]

3.1 For any $s\ge1$, weighted coefficient Holder gives
$\|w\|_{H^{s-1}}\le\|w\|_2^{1/s}\|w\|_{H^s}^{(s-1)/s}$.
Using the common $H^s$ bound $M$ from step 1.1 yields the stated factor $(2M)^{(s-1)/s}$ for either solution pair. [given, F4, step 1.1, step 2.1, step 2.2, algebra]

4.1 Apply the coefficient Holder estimate from step 3.1 to the two symmetric states. Their common $H^s$ bound gives the same $H^{s-1}$ continuity estimate. [given, F4, step 3.1, algebra] ∎