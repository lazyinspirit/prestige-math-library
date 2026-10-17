---
id: ex-tgr-homogeneous-bulk-entropy
kind: example
title: Actual homogeneous bulk relaxation entropy production
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 9
proof_strategy: direct
deps:
  - pthm-tgr-bulk-extended-entropy
  - def-countable-choice
dependency_roles:
  pthm-tgr-bulk-extended-entropy: physical-result
  def-countable-choice: mathematical-premise
justified_by: []
physical_scope: "One explicitly verified homogeneous Minkowski solution of the selected near-equilibrium bulk-only model with exponentially decaying bulk pressure; no observation, generic nonlinear existence, causality, stability, or universal-material claim."
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Dirk H. Rischke, Microscopic Foundations of Relativistic Fluid Dynamics, lecture notes (May 2022), §1.5"
      url: "https://itp.uni-frankfurt.de/~drischke/Skript_Hydro.pdf"
      locator: "Complete 148-page lecture notes; §1.5, PDF pp. 25–27, for the selected bulk-relaxation and extended-entropy model context. The fields and balances of this example are checked locally."
    - title: "Nicolas Borghini, Elements of Hydrodynamics, University of Bielefeld lecture notes (version 2015), §IX.4.5"
      url: "https://www.physik.uni-bielefeld.de/~borghini/Teaching/Hydrodynamics15/Hydrodynamics.pdf"
      locator: "Full 184-page PDF; §IX.4.5, PDF pp. 159–160 (printed pp. 151–152), for second-order entropy-current and relaxation-type context; no empirical observation is taken from the source."
---

## Example

Take a state point $(v_0,\sigma_0)$ of the selected model's supplied material domain with $v_0>0$ and $T_0=e_{\sigma_p}(v_0,\sigma_0)>0$. Its state map is constant, with $n_0=1/v_0$, $s_0=n_0\sigma_0$, $\varepsilon_0=n_0e(v_0,\sigma_0)$, and $p_0=-e_v(v_0,\sigma_0)$ as in the state conventions of [[pthm-tgr-bulk-extended-entropy]]. Let $\zeta_0,\tau_0>0$ be constant coefficients with units Pa s and s, and take $\Pi_0$ in Pa. On $M=\mathbb R^4$ use global length coordinates $(x^0,x^1,x^2,x^3)=(ct,x^1,x^2,x^3)$, Minkowski metric $g=-(dx^0)^2+\sum_{i=1}^3(dx^i)^2$, and future direction $\partial_{x^0}$. The frame is the observer congruence $u=\partial_{x^0}$ in that chart. For some $\delta>0$ seconds, take the open region $O=(-c\delta,\infty)\times\mathbb R^3$, put $t=x^0/c$, and define
$$\Pi(t)=\Pi_0e^{-t/\tau_0},\qquad t> -\delta.$$
Assume the application's open near-equilibrium regime contains these constant zero-gradient reference data at $\Pi=0$; choose $\Pi_0$ small enough that the field and first-derivative data remain in that regime throughout $O$. Then the source-free bulk balances and the corrected relaxation law hold. For every finite $t\geq0$ the entropy production is
$$\nabla_aS^a=\frac{\Pi_0^2e^{-2t/\tau_0}}{\zeta_0cT_0}.$$
It vanishes when $\Pi_0=0$ and is strictly positive when $\Pi_0\ne0$. This is a constructed model solution, not a reported experiment.

## Facts & Assumptions

**Given:** The constant-state and field conventions just stated, an application-declared open regime containing the constant zero-gradient reference data at $\Pi=0$, and an amplitude chosen so all field and first-derivative data remain in that regime.

[A1] The mathematical supplier chain assumes exactly countable choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]); no stronger choice principle is used.

[F1] [[pthm-tgr-bulk-extended-entropy]]: for an actual sufficiently regular source-free solution of the selected model, with positive $\zeta,\tau,T,c$ and the corrected law, $S^a=(s-\beta\Pi^2/(2T))u^a$ satisfies $\nabla_aS^a=\Pi^2/(\zeta cT)\geq0$. The theorem includes the same homogeneous Minkowski witness conditionally on its mathematical input.

## Verification

1.1 In these global coordinates $g(u,u)=-1$ and $u=\partial_{x^0}$ is future-directed. The constant state makes $n_0,\varepsilon_0,p_0,T_0,s_0$ constant, while $\Pi$ depends only on $t=x^0/c$. The projector has $\Delta^{00}=\Delta^{0i}=0$ and $\Delta^{ij}=\delta^{ij}$. [given, F1, algebra]

2.1 Consequently $J^0=n_0$, $J^i=0$, $\mathsf T^{00}=\varepsilon_0$, $\mathsf T^{0i}=0$, and $\mathsf T^{ij}=(p_0+\Pi(t))\delta^{ij}$. The only nonconstant stress components have spatial indices and are spatially constant, so $\nabla_aJ^a=0$, $\nabla_a\mathsf T^{a0}=\partial_{x^0}\varepsilon_0=0$, and $\nabla_a\mathsf T^{ai}=\partial_{x^j}[(p_0+\Pi(t))\delta^{ji}]=0$ for each $i=1,2,3$. [step 1.1, given, algebra]

2.2 The constant $u,T_0,\beta=\tau_0/\zeta_0$ give $\theta=0$ and $\nabla_a(\beta u^a/T_0)=0$. Also $D\Pi=c^{-1}\partial_t\Pi=-\Pi/(c\tau_0)$, so $\beta D\Pi+\Pi/(\zeta_0c)=-(\tau_0/\zeta_0)\Pi/(c\tau_0)+\Pi/(\zeta_0c)=0$, equal to the right side of the corrected law. By the amplitude choice in [given], the whole solution lies in the declared open regime. [step 1.1, given, F1, algebra]

3.1 Steps 1.1, 2.1, and 2.2 verify an actual smooth solution of every hypothesis in [F1], including the model regime. Applying [F1] gives $\nabla_aS^a=\Pi(t)^2/(\zeta_0cT_0)=\Pi_0^2e^{-2t/\tau_0}/(\zeta_0cT_0)$. Since $\zeta_0,c,T_0>0$, this is zero for $\Pi_0=0$ and strictly positive at every finite $t\geq0$ for $\Pi_0\ne0$. [step 1.1, step 2.1, step 2.2, A1, F1, algebra] ∎
