---
id: thm-fd-smooth-sobolev-continuation
kind: theorem
title: "Smooth Sobolev continuation criterion"
status: published
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 4
deps:
  - lem-fd-periodic-tame-transport-commutator
  - lem-fd-periodic-fourier-embedding-products
  - def-fd-periodic-leray-pressure-maps
  - def-fd-periodic-fourier-sobolev-spaces
  - thm-fd-smooth-periodic-incompressible-ivp
  - thm-fd-smooth-polytropic-euler-ivp
  - def-fd-polytropic-symmetric-variables
  - def-countable-choice
dependency_roles:
  lem-fd-periodic-tame-transport-commutator: mathematical-premise
  lem-fd-periodic-fourier-embedding-products: mathematical-premise
  def-fd-periodic-leray-pressure-maps: mathematical-premise
  def-fd-periodic-fourier-sobolev-spaces: mathematical-premise
  thm-fd-smooth-periodic-incompressible-ivp: mathematical-premise
  thm-fd-smooth-polytropic-euler-ivp: mathematical-premise
  def-fd-polytropic-symmetric-variables: mathematical-premise
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
    - title: "Sergei Kuksin and Armen Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §§2.1.5–2.1.6"
      url: "https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf"
    - title: "David Tong, Fluid Mechanics, Chapter 2"
      url: "https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf"
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-23
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/fluid-dynamics-all-47-2026-10-23-publication.json.
    delegated_by: owner
---

## Statement

Assume Countable Choice. For the periodic incompressible IVP with $d\in\{1,2,3\}$, $\nu\ge0$, smooth real divergence-free initial data on the normalized torus $Q_d=\mathbb R^d/(2\pi\mathbb Z)^d$, and integer $s\ge4$, let $u$ be the unique maximal smooth solution on $[0,T^*)$. Maximal means that no smooth solution in the same class on a larger interval agrees with $u$ on $[0,T^*)$. If $T^*<\infty$ and $\sup_{t<T^*}\|u(t)\|_{H^s}<\infty$, then $u$ extends smoothly to an interval $[0,T^*+\epsilon]$ for some $\epsilon>0$.

For the positive-density polytropic Euler IVP with $d\in\{1,2,3\}$, $\kappa>0$, $\gamma>1$, and integer $s\ge4$, let $q=(r,u)$ be the unique maximal smooth solution in the symmetric variables from the stated definition, on $[0,T^*)$, with $r(t,x)>0$. If $T^*<\infty$, $\sup_{t<T^*}\|q(t)\|_{H^s}<\infty$, and $\inf_{t<T^*,\,x\in Q_d}r(t,x)>0$, then $q$ and its positive density $\rho=(ar/\sqrt{\kappa\gamma})^{1/a}$ extend smoothly beyond $T^*$.

## Statement references

[[thm-fd-smooth-periodic-incompressible-ivp]]

[[thm-fd-smooth-polytropic-euler-ivp]]

[[def-fd-polytropic-symmetric-variables]]

[Kuksin and Shirikyan, Mathematics of Two-Dimensional Turbulence, Chapter 2, §§2.1.5–2.1.6](https://webusers.imj-prg.fr/~sergei.kuksin/MyBooks/bookArmen.pdf)

## Facts & Assumptions

**Given:** Countable Choice and the exact periodic local IVP interfaces and conventions in the Statement.

[A1] Countable Choice: every countable family of nonempty sets has a choice function ([[def-countable-choice]]).

[F1] [[thm-fd-smooth-periodic-incompressible-ivp]]: for smooth real divergence-free periodic data and fixed $\nu\ge0$, a unique local smooth solution exists, with smooth mean-zero pressure and the equivalent projected equation $u_t=-P(u\cdot\nabla u)+\nu\Delta u$.

[F2] [[thm-fd-smooth-polytropic-euler-ivp]]: smooth strictly positive-density data give a unique local smooth positive-density solution. In [[def-fd-polytropic-symmetric-variables]], $a=(\gamma-1)/2$, $q=(r,u)$ satisfies $q_t=-\sum_j A_j(q)\partial_jq$, each $A_j$ is linear and symmetric, and $\rho=(ar/\sqrt{\kappa\gamma})^{1/a}$ is a smooth inverse for $r>0$.

[F3] [[def-fd-periodic-fourier-sobolev-spaces]]: $H^m$ is the complete weighted coefficient space with weights $w_k^{2m}$, realized in $L^2$ under Countable Choice. [[def-fd-periodic-leray-pressure-maps]]: $P$ is an orthogonal Fourier projection bounded on every $H^m$ and commuting with spatial derivatives; derivatives multiply coefficients by $ik_j$ and map $H^{m+1}$ boundedly to $H^m$.

[F4] [[lem-fd-periodic-fourier-embedding-products]]: $H^\sigma$ embeds continuously in $C^j$ for $\sigma>j+d/2$, and multiplication is continuous on $H^\sigma$ for $\sigma>d/2$, componentwise.

[F5] [[lem-fd-periodic-tame-transport-commutator]]: for integers $m\ge s\ge4$, $\|[\Lambda^m,f]\partial_jg\|_2\le C_{d,m,s}(\|f\|_{H^m}\|g\|_{H^s}+\|f\|_{H^s}\|g\|_{H^m})$, with $\Lambda^m$ the Fourier multiplier $w_k^m$.

## Proof

1.1 The local theorems [F1] and [F2] give nonempty smooth solution intervals. Uniqueness on overlaps lets their union define a unique maximal solution on $[0,T^*)$ in either branch. Assume the corresponding bounds in the Statement and $T^*<\infty$. Write $z=u$ or $z=q$, respectively, and $M=\sup_{t<T^*}\|z(t)\|_{H^s}<\infty$. [given, A1, F1, F2]

2.1 For any integer $m\ge s$, apply $\Lambda^m$ to the incompressible projected equation and pair with $\Lambda^mu$. The projection disappears by [F3]; periodicity and $\operatorname{div}u=0$ cancel the principal transport term, [F5] bounds the commutator pairing by $C_m\|u\|_{H^s}\|u\|_{H^m}^2$, and viscosity contributes $-\nu\|\nabla u\|_{H^m}^2\le0$. For the symmetric system, symmetry gives $\int (\Lambda^mq)^{\mathsf T}A_j(q)\partial_j\Lambda^mq=-\frac12\int(\Lambda^mq)^{\mathsf T}(\partial_jA_j(q))\Lambda^mq$. Linearity of $A_j$ and [F4] bound this by $C_m\|q\|_{H^s}\|q\|_{H^m}^2$, since $s>1+d/2$. The remaining commutators satisfy the same bound by [F5], componentwise. Thus in both branches $\frac12(\|z\|_{H^m}^2)'\le C_m M\|z\|_{H^m}^2$ on $[0,T^*)$, with constants depending only on the fixed orders, dimension and, in the symmetric branch, the fixed matrices. [given, F2, F3, F4, F5, step 1.1, algebra]

3.1 Multiplying the inequality in step 2.1 by $e^{-2C_mMt}$ gives $\|z(t)\|_{H^m}\le\|z(0)\|_{H^m}e^{C_mMT^*}=:K_m<\infty$ for every integer $m\ge s$ and $t<T^*$. The data are smooth, so all $K_m$ are finite. [given, step 2.1, algebra]

4.1 For every integer $m\ge s$, [F3], [F4], and step 3.1 bound the right-hand side of the evolution equation uniformly in $H^m$: use $K_{m+1}$ for products with one spatial derivative, and $\nu K_{m+2}$ for the viscous term. Thus $\|z_t(t)\|_{H^m}\le D_m<\infty$. Integrating on compact subintervals gives $\|z(t)-z(t')\|_{H^m}\le D_m|t-t'|$. Completeness in [F3] supplies an endpoint limit $z_*\in H^m$ as $t\uparrow T^*$. The inclusions $H^{m+1}\subset H^m$ are continuous by the weights, so these unique limits are compatible for every $m$. Hence one $z_*$ lies in all these spaces, and [F4] makes it smooth with convergence in every $C^j$. In the incompressible branch, divergence-free constraints and reality pass to the limit. In the symmetric branch, uniform convergence and the assumed lower bound give $r_*(x)\ge\inf_{t<T^*,x}r(t,x)>0$, so the inverse in [F2] gives a smooth strictly positive density at the endpoint. [given, F2, F3, F4, step 3.1, algebra]

5.1 Apply [F1] to $u_*$ or [F2] to the density and velocity recovered from $q_*$, with time translated by $T^*$. This supplies a smooth solution on $[T^*,T^*+\delta]$ for some $\delta>0$, and positivity in the symmetric branch. Join it to the old solution with value $z_*$ at $T^*$. The joined curve is continuous in every $H^m$ by step 4.1. Its evolution right-hand side is continuous there, because each spatial derivative is bounded between the indicated Sobolev orders and the products are continuous by [F4]. Passing the integral equation to $T^*$ on each side shows that the joined curve has the same first time derivative from both sides and satisfies the equation across the join. [given, F1, F2, F3, F4, step 4.1]

6.1 Inductively differentiating the polynomial evolution right-hand sides in step 5.1 expresses every higher time derivative as a finite sum of products of spatial derivatives of earlier time derivatives, with the fixed bounded Fourier map $P$ in the incompressible branch. Since all spatial Sobolev orders are available, [F3] and [F4] make each such derivative continuous across the join. Embedding then gives all mixed derivatives continuously, hence a smooth extension. In the symmetric branch the smooth positive inverse density map preserves this regularity. This proves both asserted continuation conclusions without assuming a quantitative restart-time formula from either local theorem. [given, F2, F3, F4, step 4.1, step 5.1] ∎
