---
id: cex-td-clapeyron-zero-volume-jump
kind: counterexample
title: Equal branch volumes do not give a Clapeyron graph
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed pair of smooth one-component Gibbs charts with zero molar-volume jump; it shows why the local nonzero-jump hypothesis cannot be omitted and makes no material claim.
dependency_level: 11
deps:
  - def-td-phase-and-coexistence-domain
  - pthm-td-clapeyron-local
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  pthm-td-clapeyron-local: physical-result
  thm-euclidean-inverse-function-theorem: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §§5.1.1–5.1.2"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
---

## Example

Fix $T_0>0$, $p_0>0$, $g_0\in\mathbb R$, $v_0,c,\kappa>0$, and distinct positive molar entropies $s_\alpha,s_\beta$. Use units $g_0\in\mathrm{J\,mol^{-1}}$, $v_0\in\mathrm{m^3\,mol^{-1}}$, $c\in\mathrm{J\,mol^{-1}K^{-1}}$, and $\kappa\in\mathrm{m^3\,mol^{-1}Pa^{-1}}$. On a common open chart define
$$
g_i(T,p)=g_0-s_i(T-T_0)-\frac{c}{2T_0}(T-T_0)^2+v_0(p-p_0)-\frac{\kappa}{2}(p-p_0)^2,
$$
with $i\in\{\alpha,\beta\}$. Let $G_i=n_i g_i$ and adopt $S_i=-\partial_TG_i$, $V_i=\partial_pG_i$, $\mu_i=\partial_{n_i}G_i$, and $U_i=G_i+TS_i-pV_i$. This gives same-tag scaling and smooth local Gibbs charts. At $(T_0,p_0)$ the molar Gibbs values agree and the molar-volume jump is zero; the entropies differ.

## Facts & Assumptions

**Given:** The two smooth branch Gibbs functions and conjugate assignments above, with $\Delta s=s_\beta-s_\alpha\ne0$.

[A1] Constructed local Gibbs model: The branch functions and natural conjugates are exactly those declared in the Example; no stable-endpoint or material-preparation claim is made.

[F1] [[pthm-td-clapeyron-local]]: The local coexistence graph and slope conclusions require $\Delta v\ne0$.

[L1] [[thm-euclidean-inverse-function-theorem]]: A C1 map between open Euclidean neighborhoods with invertible derivative at a point has a local C1 inverse.

## Counterexample

1.1 At $(T_0,p_0)$, differentiation gives $S_i/n_i=s_i$, $V_i/n_i=v_0$, and $\mu_i=g_i=g_0$. Also $U_{i,T}=n_i c$, $V_{i,p}=-n_i\kappa$, and $V_{i,T}=0$, so the derivative determinant for $(T,p)\mapsto(U_i,V_i)$ at fixed positive amount is $-n_i^2c\kappa\ne0$. Thus [L1] supplies valid local state charts. The branch equality function is
$$
F(T,p):=g_\beta-g_\alpha=-(s_\beta-s_\alpha)(T-T_0),
$$
whose zero set is $T=T_0$ with every nearby chart pressure permitted. [given, A1, L1, algebra]

2.1 Here $\Delta v=v_\beta-v_\alpha=0$, so the zero set is not the graph of a unique pressure as a function of temperature on an open interval about $T_0$, and the quotient $\Delta s/\Delta v$ is undefined. The nonzero-jump hypothesis of [F1] fails, so this model does not contradict that theorem. [given, F1, step 1.1, algebra] ∎
