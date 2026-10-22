---
id: ex-td-clapeyron-linear-branches
kind: example
title: A two-branch Gibbs model with a positive Clapeyron slope
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A constructed pair of one-component Gibbs charts satisfying the same-tag, exchange, and reversible-heat assumptions with core closed forward and reverse compound records of the local Clapeyron theorem; the constants are illustrative and are not observations.
dependency_level: 3
deps:
  - def-td-process-and-protocol
  - post-td-macroscopic-second-law
  - thm-chain-rule-for-total-derivatives
  - thm-real-power-continuity-and-derivatives
  - thm-ck-euclidean-maps-closed-under-algebra-and-composition
  - def-td-phase-and-coexistence-domain
  - pthm-td-clapeyron-local
  - thm-euclidean-inverse-function-theorem
dependency_roles:
  def-td-process-and-protocol: formulation-prerequisite
  post-td-macroscopic-second-law: physical-assumption
  thm-chain-rule-for-total-derivatives: mathematical-premise
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
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Example

Fix $T_0=300\,\mathrm K$, $p_0=10^5\,\mathrm{Pa}$, $g_0=1\,\mathrm{J\,mol^{-1}}$, $c>0$ in $\mathrm{J\,mol^{-1}K^{-1}}$, and $\kappa>0$ in $\mathrm{m^3\,mol^{-1}Pa^{-1}}$. On a common open chart define
$$
g_i(T,p)=g_0-s_i(T-T_0)-\frac{c}{2T_0}(T-T_0)^2+v_i(p-p_0)-\frac{\kappa}{2}(p-p_0)^2,
$$
for $i\in\{\alpha,\beta\}$, with $s_\alpha=2\,\mathrm{J\,mol^{-1}K^{-1}}$, $s_\beta=5\,\mathrm{J\,mol^{-1}K^{-1}}$, $v_\alpha=1.0\times10^{-3}\,\mathrm{m^3\,mol^{-1}}$, and $v_\beta=4.0\times10^{-3}\,\mathrm{m^3\,mol^{-1}}$. Set $G_i=n_i g_i$ and use the natural Gibbs assignments $S_i=-\partial_TG_i$, $V_i=\partial_pG_i$, $\mu_i=\partial_{n_i}G_i$, and $U_i=G_i+TS_i-pV_i$. Thus same-tag homogeneity is explicit. Assume the constructed model stipulates an attained coexistence endpoint with energy, volume, and species pairwise transfer curves feasible for all sufficiently small increments of either sign while every nonselected phase and auxiliary coordinate is fixed, and a reversible $\alpha\to\beta$ conversion in contact with an ideal thermal reservoir at $T_0$. The reversible conversion is a record of the complete finite isolated compound comprising converted phases, the fixed-temperature reservoir, work stores and all auxiliaries, with equilibrium endpoints and additive component entropy. The forward and reverse complete-compound records are admitted in the core closed class of *Thermodynamic process records and transfer conventions*, each with a supplied positive total mass, defined endpoint center-of-mass velocities in its fixed Galilean chart, and zero endpoint changes of compound center-of-mass kinetic and separately tracked external-field energies. Every component other than the converted phases and reservoir has zero entropy change, and the reservoir change is $-Q/T_0$. These are the exact additional entropy premises of the local Clapeyron theorem. These parameters and endpoint assumptions are model inputs, not empirical claims.

## Example references

[[def-td-process-and-protocol]]

## Facts & Assumptions

**Given:** The Gibbs functions, conjugate assignments, parameter values and units, common open chart, attained exchange equilibrium, and reversible reservoir operation in the Example.

[A1] Constructed model assumptions: $G_i=n_i g_i$ on each fixed tag, the central state is an attained coexistence equilibrium with the three pure pairwise bilateral transfer curves specified above, and the phase conversion is reversible in an ideal bath at $T_0$ through the complete core closed forward and reverse compound records specified in the Example.

[F1] [[pthm-td-clapeyron-local]]: For the stated one-component C1 branches with local C2 energy representations, same-tag homogeneity, exchange equilibrium, nonzero molar-volume jump and reversible ideal-bath conversion, the local slope is $\Delta s/\Delta v$ and the absorbed molar heat is $T\Delta s$.

[L1] [[thm-euclidean-inverse-function-theorem]]: A C1 map between open Euclidean neighborhoods with invertible derivative at a point has a local C1 inverse.

[L2] [[thm-ck-euclidean-maps-closed-under-algebra-and-composition]] preserves $C^2$ under finite algebra and composition. [[thm-real-power-continuity-and-derivatives]] gives $(n^{-1})'=-n^{-2}$ and $(n^{-2})'=-2n^{-3}$ for $n>0$, so the reciprocal is $C^2$ there by these continuous derivative formulas.

[L3] [[thm-chain-rule-for-total-derivatives]]: differential identities pull back through differentiable coordinate maps by the total-derivative chain rule.

[F2] [[post-td-macroscopic-second-law]]: on each admitted core closed isolated-compound record with the stated zero excluded-energy changes and admitted additive equilibrium endpoint split, total entropy does not decrease. For the stipulated forward and reverse records, these inequalities give zero total entropy change.

## Verification

1.1 For each branch choose a reference amount $n_i>0$ and a full open neighborhood $\mathcal O_i$ of $(T_0,p_0,n_i)$ in $(0,\infty)\times\mathbb R\times(0,\infty)$. Define $\chi_i(T,p,n)=(U_i(T,p,n),V_i(T,p,n),n)$ by the Gibbs assignments. At the center, differentiation gives $S_i/n_i=s_i$, $V_i/n_i=v_i$, and $\mu_i=g_i=g_0$. Also $U_{i,T}=n_i c$, $V_{i,p}=-n_i\kappa$, and $V_{i,T}=0$ there. The full Jacobian of $\chi_i$ is block triangular with last diagonal entry $1$, so its determinant is $-n_i^2c\kappa\ne0$. By [L1], shrink $\mathcal O_i$ to an open inverse patch retaining positive temperature, volume and amount. Its numerical state patch is $O_{c_i}=\Phi_{c_i}^{-1}(\chi_i(\mathcal O_i))$, using the SI unit map in [F1]'s phase-branch definition; define its entropy by the displayed Gibbs assignment through this inverse. Thus $\Delta s=3\,\mathrm{J\,mol^{-1}K^{-1}}$ and $\Delta v=3.0\times10^{-3}\,\mathrm{m^3\,mol^{-1}}\ne0$. [given, A1, F1, L1, algebra]

2.1 For entropy $\mathsf s$ near $n_i s_i$, positive amount $n$ near $n_i$, and volume $V$ near $n_i v_i$, solve the natural assignments explicitly by $T(\mathsf s,V,n)=T_0+(T_0/c)(\mathsf s/n-s_i)$ and $p(\mathsf s,V,n)=p_0+(v_i-V/n)/\kappa$. Set $\mathcal U_i(\mathsf s,V,n)=n g_i(T,p)+T\mathsf s-pV$. These maps are $C^2$ by [L2], and substitution gives $S_i=\mathsf s$, $V_i=V$, and $U_i=\mathcal U_i$. On a sufficiently small neighborhood $T,n,V$ are positive. Scaling $(\mathsf s,V,n)$ by $\lambda$ leaves both ratios unchanged, so $T,p$ are unchanged and $\mathcal U_i(\lambda\mathsf s,\lambda V,\lambda n)=\lambda\mathcal U_i(\mathsf s,V,n)$ whenever both states remain in this local patch. This explicitly supplies the required fixed-tag $C^2$ homogeneous energy representation. [given, A1, L2, step 1.1, construct, algebra]

3.1 The Gibbs assignments and [L3] give $dU_i=T\,dS_i-p\,dV_i+g_i\,dn$ on the inverse patch of step 1.1. Consequently its entropy partials are $S_{i,U}=1/T$, $S_{i,V}=p/T$, and $S_{i,n}=-g_i/T$. The inverse coordinates are $C^1$ by [L1]; the reciprocal is $C^1$ and the polynomial $g_i$ is smooth by [L2]. Hence these coefficients are $C^1$, giving $C^2$ entropy with $S_{i,U}>0$ and the intended derivative-defined intensives. Conversely the explicit formulas in step 2.1 invert the energy-to-Gibbs coordinates, so the natural-variable chart is valid. The branch maps are therefore legitimate local phase and Gibbs charts with the regularity required by [F1]. [given, A1, F1, L1, L2, L3, step 1.1, step 2.1, algebra]

4.1 Apply the slope clause of [F1] with [A1] and the verified charts:
$$
\left.\frac{dp}{dT}\right|_{(T_0,p_0)}=\frac{\Delta s}{\Delta v}=\frac{3}{3.0\times10^{-3}}=1.0\times10^3\,\mathrm{Pa\,K^{-1}}.
$$
For the latent heat, [F2] on the specified forward and reverse complete-compound records gives zero total entropy change. All components except the phases and reservoir have zero entropy change, and the latter contributes $-Q/T_0$, so conversion of $n>0$ moles gives $0=n\Delta s-Q/T_0$. Thus $\ell_{\alpha\to\beta}:=Q/n=T_0\Delta s=300(3)=900\,\mathrm{J\,mol^{-1}}$, also the latent-heat formula of [F1]. Both values are exact constructed-model predictions under the stated preparation assumptions. [given, A1, F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎
