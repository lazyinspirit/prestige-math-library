---
id: pthm-td-reservoir-minimum-principles
kind: physics-theorem
title: Helmholtz and Gibbs potential minimum principles for ideal reservoirs
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Conditional endpoint deductions for closed, fixed-composition macroscopic systems coupled to the explicitly defined ideal thermal and pressure reservoirs; other work coordinates, open matter flow, and nonideal finite reservoirs are excluded.
deps:
  - def-td-legendre-potentials
  - def-td-process-and-protocol
  - post-td-macroscopic-second-law
  - post-td-entropy-maximum
  - def-td-si-quantities
dependency_roles:
  def-td-legendre-potentials: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  post-td-macroscopic-second-law: physical-assumption
  post-td-entropy-maximum: physical-assumption
  def-td-si-quantities: formulation-prerequisite
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Daniel Arovas, Thermodynamics and Statistical Mechanics, §2.7
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Book:_Thermodynamics_and_Statistical_Mechanics_(Arovas)/02:_Thermodynamics/2.07:_Thermodynamic_Potentials
    - title: Jeremy Tatum, Heat and Thermodynamics, §12.4, Gibbs Free Energy
      url: https://phys.libretexts.org/Bookshelves/Thermodynamics_and_Statistical_Mechanics/Heat_and_Thermodynamics_(Tatum)/12:_Free_Energy/12.04:_Gibbs_Free_Energy
dependency_level: 8
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

## Statement

Fix a closed macroscopic system with composition fixed and two admitted equilibrium endpoints. In the fixed-volume model, couple it only to an ideal thermal reservoir at constant $T_0>0$. In the fixed-pressure model, also couple it to an ideal pressure store at constant $p_0>0$. Define the constrained potentials

$$F_{T_0}(x):=U(x)-T_0S(x),\qquad G_{T_0,p_0}(x):=U(x)+p_0V(x)-T_0S(x).$$

Assume the ideal-reservoir bookkeeping specified in [A1]–[A3] of Facts & Assumptions and the adopted isolated-compound second law [[post-td-macroscopic-second-law]]. Then for every admitted process record of the isolated composite consisting of the system and its stated reservoir, with the pressure store included in the fixed-pressure case, $F_{T_0}$ does not increase at fixed volume, and $G_{T_0,p_0}$ does not increase at fixed pressure. If an endpoint is an attained global entropy maximum on the same feasible set, the corresponding constrained potential attains a global minimum there. If the system endpoint is on its $T=T_0$ or $(T,p)=(T_0,p_0)$ natural-variable chart, these constrained functions agree with the Helmholtz or Gibbs potentials of [[def-td-legendre-potentials]].

The statement is conditional on the ideal bath/load model and is not a claim that every physical process has such a reservoir or reaches the minimum.

## Facts & Assumptions

**Given:** A fixed composition, an explicit feasible endpoint set for a closed system plus its named reservoirs, equilibrium endpoints, fixed excluded kinetic and external-field energy changes, and the following ideal reservoir model. Energies are in joules, entropy in $\mathrm{J\,K^{-1}}$, $T_0$ in kelvins, $V$ in $\mathrm{m^3}$, and $p_0$ in pascals.

[A1] Ideal thermal reservoir: its energy $E_R$ ranges in an open interval and its entropy is $S_R(E_R)=S_{R,0}+E_R/T_0$ there. Heat $Q$ positive into the system changes its energy by $\Delta E_R=-Q$, so $\Delta S_R=-Q/T_0$.

[A2] Ideal pressure store: at fixed external pressure $p_0$, its stored energy changes by $p_0\Delta V$ when the system volume changes by $\Delta V$; the only system work is $W_{\mathrm{on}}=-p_0\Delta V$. The store's entropy is constant. At fixed volume this store is absent. No other work coordinate or matter transfer is admitted.

[A3] The system and bath, with the pressure store when present, form a complete isolated compound with fixed total energy. In the fixed-volume case $\Delta U+\Delta E_R=0$; in the fixed-pressure case $\Delta U+\Delta E_R+p_0\Delta V=0$. These system energy balances are adopted ideal-environment constraints. Each operation includes an admitted core closed record of the complete compound as in [[def-td-process-and-protocol]], with positive fixed total mass, defined endpoint center-of-mass velocities in one fixed Galilean chart, and zero endpoint changes of compound center-of-mass kinetic and separately tracked external-field energies. The model supplies the full constituent and auxiliary endpoint sets with their energy and entropy maps, and an endpoint association $\rho_P:\{-,+\}\to\mathcal F$ into one exact feasible set, representing both aggregate equilibrium endpoints and their system, bath and store coordinates. Every named auxiliary is retained; the endpoint split is admitted by the additive rule required by [[post-td-macroscopic-second-law]]. Any additional retained auxiliary has constant total energy and entropy contributions throughout $\mathcal F$. On every tuple of $\mathcal F$, total energy is one fixed constant and total entropy is the sum of the system, bath and constant store or other entropy-neutral contributions. In the fixed-pressure case require $E_p-p_0V=C_p$ on every tuple of that same $\mathcal F$ for one fixed constant $C_p$; at fixed volume $V$ is fixed and the pressure store is absent. Thus the constraints used for global minimization hold throughout the feasible set, including disconnected components. No core-record assumption is imposed on the subsystem alone: its displayed energy balances are already adopted above.

[F2] [[post-td-macroscopic-second-law]]: on the admitted isolated core compound record with its full endpoint association, admitted additive split and zero excluded-energy changes specified in [A3], $\Delta S_{\mathrm{tot}}\ge0$.

[F3] [[post-td-entropy-maximum]]: Stable equilibrium is an attained global maximum of the sum of constituent entropies on the explicitly declared feasible set; uniqueness is not assumed.

[F4] [[def-td-legendre-potentials]]: The local Helmholtz and Gibbs potentials are $F=U-TS$ and $G=U-TS+pV$ on their valid natural-variable charts.

[F5] [[def-td-si-quantities]]: $U$, $Q$, and work transfers are in joules, $T$ in kelvins, $S$ in $\mathrm{J\,K^{-1}}$, $p$ in pascals, and $V$ in $\mathrm{m^3}$, with $\mathrm{Pa\,m^3=J}$.

## Proof

1.1 In the fixed-volume case, the adopted balance [A3] and bath relation [A1] give $\Delta U=Q$. The bath relation [A1] gives $\Delta S_{\mathrm{tot}}=\Delta S-Q/T_0$. By [F2], $\Delta S_{\mathrm{tot}}\ge0$, and therefore $\Delta F_{T_0}=Q-T_0\Delta S=-T_0\Delta S_{\mathrm{tot}}\le0$. [given, A1, A2, A3, F2, F5, algebra]

1.2 In the fixed-pressure case, [A1] and the adopted balance [A3] give $\Delta U=Q-p_0\Delta V$, while [A1] gives $\Delta S_{\mathrm{tot}}=\Delta S-Q/T_0$. Hence $\Delta G_{T_0,p_0}=\Delta U+p_0\Delta V-T_0\Delta S=Q-T_0\Delta S=-T_0\Delta S_{\mathrm{tot}}\le0$. [given, A1, A2, A3, F2, F5, algebra]

1.3 For fixed volume, [A1] and [A3] express total entropy on the feasible set as $S_{\mathrm{tot}}=\mathrm{constant}-F_{T_0}/T_0$. Since $T_0>0$, maximizing total entropy is equivalent to minimizing $F_{T_0}$; on the natural-variable chart the function is the Helmholtz potential by [F4]. [A1, A3, F3, F4, algebra]

2.1 For fixed pressure, [A1]–[A3] express total entropy as $S_{\mathrm{tot}}=\mathrm{constant}-G_{T_0,p_0}/T_0$. Again $T_0>0$, so every attained global entropy maximizer on that feasible set is a global minimizer of $G_{T_0,p_0}$; on the natural-variable chart it is the Gibbs potential by [F4]. Neither equivalence implies uniqueness or attainment beyond [F3]. [A1, A2, A3, F3, F4, algebra] ∎

## Remarks

The assumptions define ideal reservoirs, not measured reservoirs. A finite bath generally has varying temperature and does not satisfy [A1] exactly. The result does not cover an open flowing control volume or other generalized work coordinates.
