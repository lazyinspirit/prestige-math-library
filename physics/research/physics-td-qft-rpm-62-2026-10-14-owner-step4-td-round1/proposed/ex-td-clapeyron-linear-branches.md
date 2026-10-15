---
id: ex-td-clapeyron-linear-branches
kind: example
title: A two-branch Gibbs model with a positive Clapeyron slope
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed pair of one-component Gibbs charts satisfying the same-tag, exchange, and reversible-heat assumptions of the local Clapeyron theorem; the constants are illustrative and are not observations.
dependency_level: 11
deps:
  - thm-real-power-continuity-and-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - def-td-phase-and-coexistence-domain
  - pthm-td-clapeyron-local
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  thm-real-power-continuity-and-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  pthm-td-clapeyron-local: physical-result
  thm-euclidean-inverse-function-theorem: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §§5.1.1–5.1.2"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
---

## Example

Fix $T_0=300\,\mathrm K$, $p_0=10^5\,\mathrm{Pa}$, $g_0=1\,\mathrm{J\,mol^{-1}}$, $c>0$ in $\mathrm{J\,mol^{-1}K^{-1}}$, and $\kappa>0$ in $\mathrm{m^3\,mol^{-1}Pa^{-1}}$. On a common open chart define
$$
g_i(T,p)=g_0-s_i(T-T_0)-\frac{c}{2T_0}(T-T_0)^2+v_i(p-p_0)-\frac{\kappa}{2}(p-p_0)^2,
$$
for $i\in\{\alpha,\beta\}$, with $s_\alpha=2\,\mathrm{J\,mol^{-1}K^{-1}}$, $s_\beta=5\,\mathrm{J\,mol^{-1}K^{-1}}$, $v_\alpha=1.0\times10^{-3}\,\mathrm{m^3\,mol^{-1}}$, and $v_\beta=4.0\times10^{-3}\,\mathrm{m^3\,mol^{-1}}$. Set $G_i=n_i g_i$ and use the natural Gibbs assignments $S_i=-\partial_TG_i$, $V_i=\partial_pG_i$, $\mu_i=\partial_{n_i}G_i$, and $U_i=G_i+TS_i-pV_i$. Thus same-tag homogeneity is explicit. Assume the constructed model stipulates an attained coexistence endpoint with bilateral energy, volume, and species exchange, and a reversible $\alpha\to\beta$ conversion in contact with an ideal thermal reservoir at $T_0$. The reversible conversion is a record of the complete finite isolated compound comprising converted phases, the fixed-temperature reservoir, work stores and all auxiliaries, with equilibrium endpoints and additive component entropy. Every component other than the converted phases and reservoir has zero entropy change, and the reservoir change is $-Q/T_0$. These are the exact additional entropy premises of the local Clapeyron theorem. These parameters and endpoint assumptions are model inputs, not empirical claims.

## Facts & Assumptions

**Given:** The Gibbs functions, conjugate assignments, parameter values and units, common open chart, attained exchange equilibrium, and reversible reservoir operation in the Example.

[A1] Constructed model assumptions: $G_i=n_i g_i$ on each fixed tag, the central state is an attained coexistence equilibrium with all three bilateral exchange channels, and the phase conversion is reversible in an ideal bath at $T_0$.

[F1] [[pthm-td-clapeyron-local]]: For the stated one-component C1 branches with local C2 energy representations, same-tag homogeneity, exchange equilibrium, nonzero molar-volume jump and reversible ideal-bath conversion, the local slope is $\Delta s/\Delta v$ and the absorbed molar heat is $T\Delta s$.

[L1] [[thm-euclidean-inverse-function-theorem]]: A C1 map between open Euclidean neighborhoods with invertible derivative at a point has a local C1 inverse.

[L2] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]] preserves $C^2$ under finite algebra and composition. [[thm-real-power-continuity-and-derivatives]] makes $n\mapsto1/n$ $C^2$ on $n>0$.

## Verification

1.1 At $(T_0,p_0)$, differentiation gives $S_i/n_i=s_i$, $V_i/n_i=v_i$, and $\mu_i=g_i=g_0$. Also $U_{i,T}=n_i c$, $V_{i,p}=-n_i\kappa$, and $V_{i,T}=0$ there, so the derivative determinant for $(T,p)\mapsto(U_i,V_i)$ at fixed positive amount is $-n_i^2c\kappa\ne0$. The functions are smooth, so [L1] gives valid local Gibbs state charts. Hence $\Delta s=3\,\mathrm{J\,mol^{-1}K^{-1}}$ and $\Delta v=3.0\times10^{-3}\,\mathrm{m^3\,mol^{-1}}\ne0$. [given, A1, L1, algebra]

1.2 The required energy representation has an explicit smooth construction. For entropy $s$ near $n_i s_i$, positive amount $n$ near $n_i$, and volume $V$ near $n_i v_i$, solve the natural assignments by $T(s,V,n)=T_0+(T_0/c)(s/n-s_i)$ and $p(s,V,n)=p_0+(v_i-V/n)/\kappa$. Substitute these into $\mathcal U_i(s,V,n):=n g_i(T,p)+T s-pV$. These are $C^2$ by [L2], and their substitution satisfies $S_i=s$, $V_i=V$, and $U_i=\mathcal U_i$. Positivity of $T,n,V$ holds on a sufficiently small neighborhood. Thus the local C2 energy representation required by [F1] is supplied explicitly, rather than inferred from the C1 inverse theorem. [given, A1, L2, step 1.1, construct, algebra]

2.1 Apply [F1] under the explicitly stipulated model assumptions [A1]:
$$
\left.\frac{dp}{dT}\right|_{(T_0,p_0)}=\frac{3}{3.0\times10^{-3}}=1.0\times10^3\,\mathrm{Pa\,K^{-1}},\qquad \ell_{\alpha\to\beta}=T_0\Delta s=300(3)=900\,\mathrm{J\,mol^{-1}}.
$$
These are exact values for the constructed model only. [given, A1, F1, step 1.1, step 1.2, algebra] ∎
