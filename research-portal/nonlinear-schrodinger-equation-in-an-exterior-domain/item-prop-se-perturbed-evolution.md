---
title: Forward and backward real-linear propagators
status: published
research_item: prop-se-perturbed-evolution
dependency_level: 13
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 17: ` §4 opening paragraph, definition of U(t) `

## Prerequisites

- [def-se-geometry](item-def-se-geometry)
- [def-se-trajectory](item-def-se-trajectory)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [def-se-linearized-pair](item-def-se-linearized-pair)
- [prop-se-potential-multipliers](item-prop-se-potential-multipliers)
- [prop-se-scale-flow](item-prop-se-scale-flow)
- [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)


## Statement

Assume the Axiom of Choice and hypotheses (H) and (W). Thus $\Omega$ is the smooth connected exterior of the compact nontrapping obstacle, $T>0$, $\lambda\in\mathbb R\setminus\{0\}$, and $w\in C([0,T];H_D^2(\Omega)\cap W^{2,\infty}(\Omega))$ is the reference solution specified by (W). Put $V_1=2\lambda|w|^2$ and $V_2=\lambda w^2$. For every $\theta\in[-2,2]$, both homogeneous systems $i z_t+\Delta_Dz+V_1z+V_2\overline z=0$ and $i v_t+\Delta_Dv+V_1v-V_2\overline v=0$ are well posed forward and backward on $[0,T]$ in the mild class $C([0,T];H_D^\theta(\Omega))$. Specifically, for every initial time $r$ and datum in this space there is a unique solution satisfying the corresponding free-flow Duhamel equation.

Let $S(t,r)$ be the evolution for the first system and let $U(t)$ map the datum at time zero to the solution of the second. These maps are bounded invertible real-linear maps on $H_D^\theta(\Omega)$; their inverses are the respective reverse-time evolutions. There is a constant $C_\theta\ge1$, independent of $t\in[0,T]$ and the datum, such that $C_\theta^{-1}\|v_0\|_{H_D^\theta}\le\|U(t)v_0\|_{H_D^\theta}\le C_\theta\|v_0\|_{H_D^\theta}$. The Dirichlet condition is encoded by the realization and spectral scale; no classical trace is asserted for arbitrary negative-order data.

## Statement references

[def-se-geometry](item-def-se-geometry)

[def-se-trajectory](item-def-se-trajectory)

[def-se-dirichlet-scale](item-def-se-dirichlet-scale)

[def-se-linearized-pair](item-def-se-linearized-pair)

[def-se-foundation-time-function-spaces](item-def-se-foundation-time-function-spaces)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

## Facts & Assumptions

[F1] Under Choice, (H), and (W), the Dirichlet spectral space $E=H_D^\theta(\Omega)$ is a complex Banach space, and $W(t)=e^{it\Delta_D}$ is a strongly continuous unitary group on it [def-se-geometry](item-def-se-geometry) [def-se-trajectory](item-def-se-trajectory) [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [prop-se-scale-flow](item-prop-se-scale-flow) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] For $j=1,2$, the maps $t\mapsto M_{V_j(t)}$ are continuous in operator norm on $E$, uniformly bounded on $[0,T]$; complex conjugation is a bounded real-linear operation on $E$. At negative orders the multipliers are their pivot-dual extensions [prop-se-potential-multipliers](item-prop-se-potential-multipliers). The two displayed systems and their signs are those of the linearized pair [def-se-linearized-pair](item-def-se-linearized-pair).

[F3] For a strongly continuous bounded group on a complex Banach space regarded as real, a norm-continuous bounded real-linear perturbation has a unique two-parameter evolution solving its oriented Volterra equation. The evolution is real-linear, obeys the cocycle and inverse identities, and has the exponential norm bound stated in [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound). Its Countable Choice hypothesis follows from the assumed Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

## Proof

[F1] Under Choice, (H), and (W), the Dirichlet spectral space $E=H_D^\theta(\Omega)$ is a complex Banach space, and $W(t)=e^{it\Delta_D}$ is a strongly continuous unitary group on it [def-se-geometry](item-def-se-geometry) [def-se-trajectory](item-def-se-trajectory) [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [prop-se-scale-flow](item-prop-se-scale-flow) [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F2] For $j=1,2$, the maps $t\mapsto M_{V_j(t)}$ are continuous in operator norm on $E$, uniformly bounded on $[0,T]$; complex conjugation is a bounded real-linear operation on $E$. At negative orders the multipliers are their pivot-dual extensions [prop-se-potential-multipliers](item-prop-se-potential-multipliers). The two displayed systems and their signs are those of the linearized pair [def-se-linearized-pair](item-def-se-linearized-pair).

[F3] For a strongly continuous bounded group on a complex Banach space regarded as real, a norm-continuous bounded real-linear perturbation has a unique two-parameter evolution solving its oriented Volterra equation. The evolution is real-linear, obeys the cocycle and inverse identities, and has the exponential norm bound stated in [lem-se-real-evolution-duhamel-bound](item-lem-se-real-evolution-duhamel-bound). Its Countable Choice hypothesis follows from the assumed Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).



**Given:** The hypotheses, $\theta\in[-2,2]$, an initial time $r\in[0,T]$, and a datum $x\in E$.

**Goal:** Construct the two evolutions and prove their inverse and uniform norm bounds.

1.1 Define $P_+(t)u=i(V_1(t)u+V_2(t)\overline u)$ and $P_-(t)u=i(V_1(t)u-V_2(t)\overline u)$. By the multiplier and conjugation bounds, these are bounded real-linear operators on $E$ and are norm-continuous in $t$; multiplication by $i$ is bounded on the complex Banach space $E$. Their operator norms are bounded by a common finite constant $K$ on $[0,T]$. [F1, F2]

2.1 Apply the real evolution result separately to $W$ and $P_+$ and to $W$ and $P_-$. It gives unique solutions of $u(t)=W(t-r)x+\int_r^tW(t-\rho)P_\pm(\rho)u(\rho)\,d\rho$, where the Bochner integral is oriented when $t<r$. These are precisely the mild formulations of the two stated systems, with the Dirichlet realization encoded in $W$ and $E$. Their evolution maps are real-linear and bounded, satisfy the cocycle law, and have inverse given by reversing the two time arguments. This proves forward and backward well-posedness in the stated mild class. [F1, F2, F3, step 1.1]

3.1 Since $W$ is unitary, the bound in [F3] gives $\|S_\pm(t,r)\|\le e^{K|t-r|}$ for both evolutions. Write $U(t)=S_-(t,0)$. The inverse identity gives $\|U(t)^{-1}\|=\|S_-(0,t)\|\le e^{KT}$ as well as $\|U(t)\|\le e^{KT}$. Applying the inverse bound to $U(t)v_0$ yields the lower inequality, and the upper inequality follows directly. Thus $C_\theta=e^{KT}$ proves the asserted uniform equivalence and all conclusions. [F1, F3, step 1.1, step 2.1] ∎

## Source notes

The article's PDF page 17 attributes the forward and backward well-posedness and the notation $U(t)$; page 20 uses $S(t,r)$ for the linearized propagator. The proof here applies the stated multiplier, free-flow and real-linear evolution suppliers. The article citation is attribution, not a proof premise.
