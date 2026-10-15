---
id: ex-td-phase-rule-single-component
kind: example
title: One component in two phases has one regular equation-set degree of freedom
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed pair of smooth one-component Gibbs charts; the example verifies the regular equation-set rank and dimension only, and does not assert a stable or realized coexistence endpoint.
dependency_level: 9
deps:
  - thm-chain-rule-for-total-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - thm-real-power-continuity-and-derivatives
  - def-td-phase-and-coexistence-domain
  - def-td-temperature-pressure-chemical-potential
  - thm-tdmath-phase-dimension
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-ck-euclidean-maps-closed-under-algebra-and-composition: mathematical-premise
  thm-real-power-continuity-and-derivatives: mathematical-premise
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  thm-tdmath-phase-dimension: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
aliases: []
relations:
  motivated_by:
    - pthm-td-regular-gibbs-phase-rule
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.1.1"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §4.1 First-order phase transitions"
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Essential_Graduate_Physics_-_Statistical_Mechanics_%28Likharev%29/04%3A_Phase_Transitions/4.01%3A_First_order_phase_transitions
---

## Example

Let $C=1$, $P=2$, and $R=0$. Fix $T_0=300\,\mathrm K$ and $p_0=10^5\,\mathrm{Pa}$, and take a common open chart around $(T_0,p_0)$. On it define the branch Gibbs potentials per mole
$$
g_1(T,p)=g_0-s_0(T-T_0)-\frac{c}{2T_0}(T-T_0)^2+v_1(p-p_0)-\frac{\kappa}{2}(p-p_0)^2,\qquad g_2(T,p)=g_0-s_0(T-T_0)-\frac{c}{2T_0}(T-T_0)^2+v_2(p-p_0)-\frac{\kappa}{2}(p-p_0)^2,
$$
where $g_0$ is in $\mathrm{J\,mol^{-1}}$, $s_0,c>0$ are in $\mathrm{J\,mol^{-1}K^{-1}}$, $v_1,v_2>0$ are distinct molar volumes in $\mathrm{m^3\,mol^{-1}}$, and $\kappa>0$ is in $\mathrm{m^3\,mol^{-1}Pa^{-1}}$. Set $G_i=n_i g_i$ with natural Gibbs assignments $S_i=-\partial_TG_i$, $V_i=\partial_pG_i$, and $\mu_i=\partial_{n_i}G_i$; define $U_i=G_i+TS_i-pV_i$. The derivative-defined chemical potentials are $\mu_i=g_i$, and they agree at $(T_0,p_0)$. This is a candidate equation-map solution, not a claim of entropy-maximizing coexistence.

For each branch, fix a reference amount $n_*>0$ in moles and an open interval $J_n\subset(0,\infty)$ around it. Initially take $\mathcal O=O_{Tp}\times J_n$, where $O_{Tp}$ is the displayed open $(T,p)$ chart about $(T_0,p_0)$, and shrink it about $(T_0,p_0,n_*)$ to the inverse-function neighborhood verified below, retaining $T,p,n>0$. The full derivative of $(T,p,n)\mapsto(U,V,n)$ is block triangular with the last diagonal entry $1$, so the displayed fixed-amount determinant is also its full determinant. The constructed branch's local physical state map is $\chi:(T,p,n)\mapsto(U,V,n)$ (using the positive amount and interior composition coordinates displayed here). On the inverse patch verified below, define its numerical domain $O_c=\Phi_c^{-1}(\chi(\mathcal O))$ and declare this patch to be the local model's $D_c$ patch, where $\Phi_c(\hat U,\hat V,\hat n)=(\hat U\,\mathrm J,\hat V\,\mathrm{m^3},\hat n\,\mathrm{mol})$ is the unit map of [[def-td-temperature-pressure-chemical-potential]]. Define the numerical entropy by $S_c=S^{\rm SI}\circ\Phi_c$, with $S^{\rm SI}$ supplied by the Gibbs assignments through this inverse. Thus the displayed derivatives are derivatives in physical SI coordinates on $\Phi_c(O_c)$; the model patch is not an empirical claim about an independently specified material domain.

## Facts & Assumptions

**Given:** The two Gibbs branches and the open $(T,p)$ chart described above, with $v_1\ne v_2$. The example is a conditional equation-map model, not an experimental claim.

[A1] The common positive-temperature, positive-pressure-or-real-pressure chart has no independent composition coordinates because $C=1$.

[A2] Adopted local Gibbs model: $G_i=n_i g_i$, $S_i=-\partial_TG_i$, $V_i=\partial_pG_i$, $\mu_i=\partial_{n_i}G_i$, and $U_i=G_i+TS_i-pV_i$.

[F1] [[thm-tdmath-phase-dimension]]: For $C=1$, $P=2$, $R=0$, a coexistence-equation zero with a nonsingular derivative minor has local equation-set dimension $C-P+2=1$.

[F2] The model and calculation are only for a candidate equation-map solution; no stable or realized coexistence endpoint is assumed.

[L1] [[thm-euclidean-inverse-function-theorem]]: A $C^1$ map between open Euclidean sets with invertible derivative at a point has a local $C^1$ inverse there.

[L2] [[thm-chain-rule-for-total-derivatives]] supplies the differential chain rule; [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]] preserves $C^1$ under finite algebra and composition. [[thm-real-power-continuity-and-derivatives]] gives $(t^{-1})'= -t^{-2}$ on $t>0$, whose continuous derivative makes this reciprocal $C^1$.

## Verification

1.1 From [A2], at $(T_0,p_0)$, $S_i=n_i s_0$, $V_i=n_i v_i$, $U_{i,T}=n_i c$, $V_{i,p}=-n_i\kappa$, and $V_{i,T}=0$. Thus the $(T,p)$ derivative matrix of $(U_i,V_i)$ at fixed amount has determinant $-n_i^2c\kappa\ne0$. The full $(T,p,n)\mapsto(U_i,V_i,n)$ Jacobian has this same determinant, since its last row is $(0,0,1)$. Thus [L1] supplies the claimed open full-state inverse patch about $(T_0,p_0,n_*)$. [given, A2, L1, algebra]

2.1 On that patch the Gibbs assignments and the chain rule give $dG_i=-S_i\,dT+V_i\,dp+g_i\,dn$ and hence $dU_i=T\,dS_i-p\,dV_i+g_i\,dn$. Pulling these identities through the $C^1$ inverse, $dS_i=T^{-1}dU_i+(p/T)dV_i-(g_i/T)dn$. Each coefficient is $C^1$ by [L2], since the inverse coordinates and $g_i$ are $C^1$ and $T>0$. Thus the constructed entropy is $C^2$, with $S_{i,U}=1/T>0$, $S_{i,V}=p/T$, and $S_{i,n}=-g_i/T$, so its derivative-defined intensive quantities reproduce the Gibbs assignments. [given, A2, L2, step 1.1, algebra]

3.1 The only coexistence equation is $F(T,p):=g_2(T,p)-g_1(T,p)=(v_2-v_1)(p-p_0)=0$. It vanishes at the center and has $\partial_pF=v_2-v_1\ne0$, so the $1\times1$ minor is invertible. [given, A2, step 1.1, step 2.1, algebra]

4.1 Here the ambient dimension is $d=2+P(C-1)=2$ and the equation count is $q=C(P-1)=1$. Applying [F1] gives local equation-set dimension $d-q=1$, exactly $C-P+2=1$. This verifies the regular equation-set rank calculation only. [F1, F2, A1, step 3.1, algebra] ∎
