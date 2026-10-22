---
id: pthm-td-fixed-tp-reaction-potential-minimum
kind: physics-theorem
title: Fixed-temperature and fixed-pressure potential minimum with internal reactions
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A closed reacting system at fixed positive reservoir temperature and fixed external pressure, represented by a system process record and an admitted isolated-compound extension with the exact ideal-reservoir, pressure-store, and feasible-set data stated here; no external matter exchange, omitted work channel, nonideal reservoir, or kinetic relaxation claim is included.
dependency_level: 0
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-process-and-protocol
  - def-td-isolated-compound-feasible-set
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
  - post-td-first-law-energy
  - post-td-macroscopic-second-law
  - post-td-entropy-maximum
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-first-law-energy: physical-assumption
  post-td-macroscopic-second-law: physical-assumption
  post-td-entropy-maximum: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §§4.3–4.4"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S4
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

Fix a closed system $s$ of constitution $c$, with equilibrium domain $D_c$ from [[def-td-equilibrium-state-domain]], and fix $T_0>0$ and $p_0>0$. Define, for $x\in D_c$,
$$
\Phi_{T_0,p_0}(x):=U_c(x)+p_0V_c(x)-T_0S_c(x),
$$
where $U_c,V_c$ are the dimensioned energy and volume maps of [[def-td-equilibrium-state-domain]] and $S_c$ is the adopted entropy of [[post-td-concave-fundamental-entropy]]. Thus $\Phi_{T_0,p_0}$ has units joules.

Let $P_s\in\mathcal P_{\mathrm{cl}}(s)$ be an admitted closed system process record as defined in [[def-td-process-and-protocol]], with system endpoints $x_{P_s}^-,x_{P_s}^+\in D_c$. Let $R$ be its ideal thermal reservoir and $B$ its ideal pressure store; both lie inside a declared isolated-compound outer boundary. Let $\widehat P\in\mathcal P_{\mathrm{cl}}(s\sqcup R\sqcup B)$ be an admitted core closed process record for that isolated compound, whose supplied total mass is positive, whose endpoint center-of-mass velocities are defined in one fixed Galilean chart, and whose compound center-of-mass kinetic and separately tracked external-field potential energies have zero endpoint change. These are conditions on the whole compound, additional to the system-record conditions. By an extension, require that $\widehat P$ has the same time interval, system endpoints, system configuration path, and system-side protocol and transfer records as $P_s$, together with the reservoir and store records. Write its compound endpoint association as
$$
\rho_{\widehat P}(\pm)=(x_{P_s}^\pm,y_R^\pm,y_B^\pm)\in\mathcal F\subseteq D_c\times Y_R\times Y_B,
$$
where $Y_R,Y_B$ are the model-declared reservoir and store equilibrium state sets, represented as admitted constituent state domains (or subsets thereof) in the second-law endpoint split; $E_R,E_B$ and their entropies are the corresponding dimensioned state maps. The split is admitted as independent separated macroscopic systems by [[post-td-concave-fundamental-entropy]]. The set $\mathcal F$ is the exact feasible endpoint set from [[def-td-isolated-compound-feasible-set]]. The system protocol assigns heat $Q[P_s]$ and work $W_{\rm on}[P_s]$ to $P_s$; the auxiliary endpoint changes in $\widehat P$ satisfy the reservoir and store relations in [A1]–[A2] below. No matter crosses the compound boundary, no work channel other than pressure-store work acts on the system, and no other energy-coordinate changes are omitted.

Then the system endpoint difference obeys
$$
\Phi_{T_0,p_0}(x_{P_s}^+)-\Phi_{T_0,p_0}(x_{P_s}^-)\le0.
$$
If the final compound endpoint $\rho_{\widehat P}(+)$ is an attained global entropy maximum on $\mathcal F$, then $x_{P_s}^+$ attains a global minimum of $\Phi_{T_0,p_0}$ on the system projection
$$
\Pi_s(\mathcal F):=\{x\in D_c:\exists y_R\in Y_R,\ y_B\in Y_B\text{ with }(x,y_R,y_B)\in\mathcal F\}.
$$
This is a conditional model deduction; it does not assert that arbitrary fixed-$T,p$ reactions have this preparation or that the system reaches the minimum dynamically.

## Facts & Assumptions

**Given:** The fixed system $s$, its admitted closed process record $P_s\in\mathcal P_{\mathrm{cl}}(s)$ with endpoints $x_{P_s}^\pm\in D_c$, an admitted isolated-compound record $\widehat P$ extending the same system component, the exact feasible endpoint set $\mathcal F\subseteq D_c\times Y_R\times Y_B$, and the ideal reservoir and store inside the compound boundary. For the global-minimum conclusion, the final compound endpoint is an attained global entropy maximum on that same $\mathcal F$. Internal amount changes are reactions; the auxiliaries exchange no matter and no unlisted work channel.

[A1] Ideal thermal reservoir: throughout its admitted energy interval, $S_R(E_R)=S_{R,0}+E_R/T_0$, with $E_R$ in joules and $S_R$ in $\mathrm{J\,K^{-1}}$. The same compound record $\widehat P$ has $\Delta E_R[\widehat P]=-Q[P_s]$, hence $\Delta S_R[\widehat P]=-Q[P_s]/T_0$.

[A2] Ideal pressure store: for every $(x,y_R,y_B)\in\mathcal F$, its energy satisfies $E_B(y_B)-p_0V_c(x)=C_B$ for one fixed constant $C_B$, and its entropy is constant on the admitted store states. The extension record satisfies $\Delta E_B[\widehat P]=p_0\Delta V_c[P_s]$; the only work on the system record is $W_{\rm on}[P_s]=-p_0\Delta V_c[P_s]$.

[A3] The system, reservoir, and pressure store form the isolated compound for the adopted macroscopic second-law and stable-equilibrium model. The endpoint association $\rho_{\widehat P}$ has both values in $\mathcal F$; one constant $E_{\rm tot}$ satisfies $U_c(x)+E_R(y_R)+E_B(y_B)=E_{\rm tot}$ for every $(x,y_R,y_B)\in\mathcal F$, and the admitted separated constituent entropies add. Any excluded kinetic or external-field energy is fixed on this feasible set and has been subtracted from this internal total.

[F1] [[def-td-process-and-protocol]]: $P_s$ is one admitted closed system process record with endpoints $x_{P_s}^\pm$; its protocol assigns the same record's heat and work functionals $Q[P_s]$ and $W_{\rm on}[P_s]$ in joules. The isolated-compound record $\widehat P$ records the auxiliary endpoint states and extension of that system record.

[F2] [[post-td-first-law-energy]]: For the admitted closed system record $P_s$, with zero endpoint change in center-of-mass kinetic energy and separately tracked external-field potential energy, $\Delta U_c[P_s]=Q[P_s]+W_{\rm on}[P_s]$.

[F3] [[post-td-macroscopic-second-law]]: For the admitted core compound record $\widehat P$ with the compound exclusions and exact additive endpoint association specified above, its total endpoint entropy does not decrease.

[F4] [[post-td-entropy-maximum]]: A stable endpoint is an attained global maximum of total entropy on the same exact feasible endpoint set $\mathcal F$.

[F5] [[def-td-si-quantities]]: $U_c,Q[P_s],W_{\rm on}[P_s]$ and $p_0V_c$ are in joules; $T_0$ is in kelvins; $S_c$ is in $\mathrm{J\,K^{-1}}$, so $\Phi_{T_0,p_0}$ is in joules.

## Proof

1.1 By [A2] and [F2], $\Delta U_c[P_s]=Q[P_s]-p_0\Delta V_c[P_s]$. By [A1]–[A3], the total entropy change along the isolated-compound extension is $\Delta S_{\rm tot}[\widehat P]=\Delta S_c[P_s]-Q[P_s]/T_0$, because the pressure store has constant entropy. Therefore $$ \Phi_{T_0,p_0}(x_{P_s}^+)-\Phi_{T_0,p_0}(x_{P_s}^-)=\Delta U_c[P_s]+p_0\Delta V_c[P_s]-T_0\Delta S_c[P_s]=Q[P_s]-T_0\Delta S_c[P_s]=-T_0\Delta S_{\rm tot}[\widehat P]\le0 $$ by $T_0>0$ and [F3]. The heat and work are assigned to $P_s$, while their matching reservoir and store changes are assigned to its same-record extension $\widehat P$. [given, A1, A2, A3, F1, F2, F3, F5, algebra]

2.1 For every $(x,y_R,y_B)\in\mathcal F$, [A2]–[A3] give $E_R(y_R)=E_{\rm tot}-U_c(x)-p_0V_c(x)-C_B$. By [A1], reservoir entropy is affine in this energy, while the pressure-store entropy is constant. Additivity of the constituent entropies therefore gives one constant $C_0$, independent of the feasible tuple, such that $$ S_{\rm tot}(x,y_R,y_B)=C_0-\frac{\Phi_{T_0,p_0}(x)}{T_0}. $$ Since $T_0>0$, an attained global maximizer on $\mathcal F$ has a system component that minimizes $\Phi_{T_0,p_0}$ on every $x$ in the projection $\Pi_s(\mathcal F)$. This proves the global-minimum conclusion on the precise induced feasible set. [given, A1, A2, A3, F1, F4, algebra] ∎

## Remarks

The system process record and its isolated-compound extension are distinct records. The former carries $Q$ and $W_{\rm on}$ in the first-law balance; the latter contains the reservoir and store endpoint changes used by the second law and the global entropy maximum. The argument does not cover an open matter reservoir, which would contribute chemical-potential terms, or an external work channel not included in [A2].
