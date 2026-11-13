---
title: Scale isometries and free Schrödinger evolution
status: draft
research_item: prop-se-scale-flow
dependency_level: 7
sources:
  references:
    - title: Nonlinear Schrödinger equation in an exterior domain, v2
      url: https://arxiv.org/abs/2610.11968
---

PDF p. 8: ` resolvent R and (3.4); (3.5) `

## Prerequisites

- [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian)
- [def-se-dirichlet-scale](item-def-se-dirichlet-scale)
- [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract)
- [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Assume the Axiom of Choice. Let $\Omega$ be the smooth exterior domain, $\Delta_D$ its Dirichlet Laplacian, $A=I-\Delta_D$, and $H_D^\sigma(\Omega)$ the associated completed spectral scale, all as in [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian) and [def-se-dirichlet-scale](item-def-se-dirichlet-scale). Put $R=A^{-1}$ and $W(t)=e^{it\Delta_D}$. For every $\sigma\in\mathbb R$, $R:H_D^\sigma\to H_D^{\sigma+2}$ is an isometric isomorphism, $W(t)$ is a strongly continuous unitary group on $H_D^\sigma$, and $RW(t)=W(t)R$. In particular, $\|W(t)v_0\|_{H_D^\sigma}=\|v_0\|_{H_D^\sigma}$ for every $t\in\mathbb R$ and $v_0\in H_D^\sigma$.

For such $v_0$, $v(t)=W(t)v_0$ belongs to $C(\mathbb R;H_D^\sigma)\cap C^1(\mathbb R;H_D^{\sigma-2})$ and satisfies $i\partial_t v+\Delta_Dv=0$ in $H_D^{\sigma-2}$, with $v(0)=v_0$. Here $\Delta_D=I-A$ denotes its consistent bounded extension from $H_D^\sigma$ to $H_D^{\sigma-2}$. This is the homogeneous Dirichlet evolution; the boundary condition is encoded by the Dirichlet realization and the spectral scale, without asserting a classical boundary trace for arbitrary $\sigma$.

## Facts & Assumptions

[F1] The Dirichlet realization has $A=I-\Delta_D$ self-adjoint with $A\ge I$ on the nonzero complex Hilbert space $L^2(\Omega)$; its spectral exponential is $W(t)=e^{it(I-A)}$ [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian).

[F2] The scale is the completion of $D(A^\infty)$ in $\|A^{\sigma/2}u\|_2$. The spectral-scale contract gives the consistent onto isometries $J_\sigma:H_D^\sigma\to L^2$, extending $A^{\sigma/2}$, and $A^{-r/2}:H_D^\sigma\to H_D^{\sigma+r}$; it also gives the extension of $W(t)$ and its commutation with scale powers [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F3] For a self-adjoint generator on a nonzero complex Hilbert space, the spectral exponential is a strongly continuous unitary group, and on the generator domain its derivative is $i$ times the generator applied to the flow [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus). This supplier is mathematical; it assumes Choice and Countable Choice, the latter following from the assumed Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

## Proof

[F1] The Dirichlet realization has $A=I-\Delta_D$ self-adjoint with $A\ge I$ on the nonzero complex Hilbert space $L^2(\Omega)$; its spectral exponential is $W(t)=e^{it(I-A)}$ [def-se-dirichlet-laplacian](item-def-se-dirichlet-laplacian).

[F2] The scale is the completion of $D(A^\infty)$ in $\|A^{\sigma/2}u\|_2$. The spectral-scale contract gives the consistent onto isometries $J_\sigma:H_D^\sigma\to L^2$, extending $A^{\sigma/2}$, and $A^{-r/2}:H_D^\sigma\to H_D^{\sigma+r}$; it also gives the extension of $W(t)$ and its commutation with scale powers [def-se-dirichlet-scale](item-def-se-dirichlet-scale) [lem-se-positive-spectral-scale-contract](item-lem-se-positive-spectral-scale-contract).

[F3] For a self-adjoint generator on a nonzero complex Hilbert space, the spectral exponential is a strongly continuous unitary group, and on the generator domain its derivative is $i$ times the generator applied to the flow [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus). This supplier is mathematical; it assumes Choice and Countable Choice, the latter following from the assumed Axiom of Choice [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).



**Given:** The domain, operators, scale, Choice assumption and $v_0\in H_D^\sigma$ in the statement.

**Goal:** Prove the isometries, commutation, conservation and the stated evolution equation.

1.1 Apply the scale contract to the operator in [F1]. Taking $r=2$ gives the onto isometry $R=A^{-1}:H_D^\sigma\to H_D^{\sigma+2}$. The same contract gives the unitary extensions of $W(t)$ and their commutation with scale powers, hence $RW(t)=W(t)R$. Unitarity gives the displayed norm equality. [F1, F2]

2.1 On the common core, $J_\sigma W(t)=W(t)J_\sigma$ by the spectral-scale commutation in [F2]; both sides extend continuously, so the identity holds on $H_D^\sigma$. As $J_\sigma$ is an onto isometry and the group is strongly continuous on $L^2$ by [F3], $t\mapsto W(t)v_0$ is continuous in $H_D^\sigma$. The group law and inverse also extend from the core. [F2, F3, step 1.1]

3.1 Put $x=J_\sigma v_0$. On the core and then by continuity, $J_{\sigma-2}v_0=A^{-1}x$. The range of $A^{-1}$ is $D(A)=D(I-A)$, so [F3] applied to $I-A$ differentiates $W(t)J_{\sigma-2}v_0$ in $L^2$, with derivative $i(I-A)W(t)J_{\sigma-2}v_0$. The scale-power isometries also give a bounded map $A:H_D^\sigma\to H_D^{\sigma-2}$; since $A^{-1}$ is bounded on $L^2$, the identity map from $H_D^\sigma$ to $H_D^{\sigma-2}$ is bounded. Thus $I-A$ defines the stated bounded extension, and intertwining with $J_{\sigma-2}$ identifies the derivative as $i\Delta_DW(t)v_0$ in $H_D^{\sigma-2}$. Its continuity follows from step 2.1 and boundedness of $\Delta_D$. [F1, F2, F3, step 2.1]

4.1 Multiplying the derivative identity by $i$ yields $i\partial_t v+\Delta_Dv=0$. The group identity gives $v(0)=v_0$. The realization and scale in [F1]–[F2] specify the homogeneous Dirichlet evolution; no additional classical trace is needed for this scale-valued equation. Together with steps 1.1 and 2.1 this proves all assertions. [F1, F2, step 1.1, step 2.1, step 3.1] ∎

## Source notes

The article supplies the scale-flow claims and evolution notation on PDF page 8, including (3.4) and (3.5). Its citation is attribution; the argument above uses the stated independent mathematical suppliers. The Physics-namespace supplier has domain mathematics and contributes no physical postulate.
