---
id: pthm-td-useful-work-bound
kind: physics-theorem
title: Useful-work bound from the Gibbs potential
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Conditional finite endpoint bound for a closed fixed-composition system in the explicitly defined ideal constant-temperature, constant-pressure reservoir model; no claim is made that a reversible protocol exists or that the bound is attained.
deps:
  - def-td-legendre-potentials
  - def-td-isolated-compound-feasible-set
  - def-td-process-and-protocol
  - post-td-first-law-energy
  - post-td-macroscopic-second-law
  - def-td-si-quantities
dependency_roles:
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  def-td-legendre-potentials: formulation-prerequisite
  def-td-process-and-protocol: formulation-prerequisite
  post-td-first-law-energy: physical-assumption
  post-td-macroscopic-second-law: physical-assumption
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
---

## Statement

For a fixed-composition closed system coupled to an ideal thermal reservoir at $T_0>0$ and ideal pressure store at $p_0>0$, let $Q$ be heat into the system and let $W_{\mathrm{out}}$ be net energy delivered by the system to an ideal work store whose entropy is constant. Assume the admitted system record, its admitted isolated-compound extension, exact feasible endpoint set, and additive endpoint entropy bookkeeping of [A1]–[A3] in Facts & Assumptions. Then for any admitted process between equilibrium endpoints $x_i,x_f$,

$$W_{\mathrm{out}}\le G_{T_0,p_0}(x_i)-G_{T_0,p_0}(x_f),\qquad G_{T_0,p_0}(x):=U(x)+p_0V(x)-T_0S(x).$$

If the endpoint states lie on the $(T,p)=(T_0,p_0)$ natural-variable chart, this is the decrease in the Gibbs potential of [[def-td-legendre-potentials]]. Equality requires zero total entropy production; the theorem does not assert that a protocol realizing equality exists.

## Facts & Assumptions

**Given:** Fixed composition, equilibrium endpoints, an admitted closed process, $T_0>0$, $p_0>0$, and the ideal reservoir/work-store model below. Use $W_{\mathrm{out}}>0$ for energy delivered by the system, in joules.

[A1] Ideal thermal reservoir: $S_R(E_R)=S_{R,0}+E_R/T_0$ on its accessed energy interval, and heat $Q$ into the system changes reservoir energy by $\Delta E_R=-Q$.

[A2] Ideal pressure and work stores: the only work on the system is $W_{\mathrm{on}}=-p_0\Delta V-W_{\mathrm{out}}$, where the pressure store has energy change $p_0\Delta V$ and the work store receives $W_{\mathrm{out}}$. Both stores have constant entropy; no other work coordinate is admitted.

[A3] The admitted system process is one core closed record $P_s\in\mathcal P_{\mathrm{cl}}(s)$ from [[def-td-process-and-protocol]], with the same $Q=Q[P_s]$ and work transfer as in [A1]–[A2]. The system, bath, pressure store, and work store form an isolated compound with an admitted core closed record $\widehat P$ extending that same system record and sharing its system endpoint states and system-side transfer assignments. The model supplies endpoint sets $Y_R,Y_p,Y_w$ with their energy and entropy maps and one exact feasible complete endpoint set $\mathcal F\subseteq D_c\times Y_R\times Y_p\times Y_w$ as in [[def-td-isolated-compound-feasible-set]]. Its association $\rho_{\widehat P}:\{-,+\}\to\mathcal F$ represents both equilibrium endpoints, including all device states; both lie in that same set with the fixed totals and retained constraints. The selected complete split has the entropy additivity required by [[post-td-macroscopic-second-law]]: system and reservoir entropy changes add, and both stores have constant entropy. Thus its total change is exactly $\Delta S_{\mathrm{tot}}[\widehat P]=\Delta S[P_s]+\Delta S_R[\widehat P]$. All separately tracked kinetic and external-field endpoint changes vanish and there are no unlisted transfers. These are admitted-record and model hypotheses; isolation alone does not assert that the extension or feasible endpoints exist.

[F1] [[post-td-first-law-energy]]: The adopted closed-record balance is $\Delta U=Q+W_{\mathrm{on}}$, with positive $Q$ into and positive $W_{\mathrm{on}}$ on the system.

[F2] [[post-td-macroscopic-second-law]]: For the admitted core compound record and exact endpoint association in [A3], with the declared additive split, the total endpoint entropy change is nonnegative.

[F3] [[def-td-process-and-protocol]]: $Q$ and $W_{\mathrm{on}}$ are process-record transfers, not state functions; an adiabatic record has $Q=0$.

[F4] [[def-td-si-quantities]]: $U$, $Q$, $W_{\mathrm{out}}$, $pV$, and $G$ have units of joules, with $\mathrm{Pa\,m^3=J}$.

## Proof

1.1 By [F1] and the work-transfer model [A2], $\Delta U=Q-p_0\Delta V-W_{\mathrm{out}}$. By [A1] and [A3], $\Delta S_{\mathrm{tot}}=\Delta S-Q/T_0$; [F2] gives $Q\le T_0\Delta S$. The signs of $Q$ and work transfers are those in [F3]. [given, A1, A2, A3, F1, F2, F3, algebra]

2.1 Rearranging the energy balance in step 1.1 gives $W_{\mathrm{out}}=Q-\Delta U-p_0\Delta V\le T_0\Delta S-\Delta U-p_0\Delta V=-\Delta G_{T_0,p_0}$. By [F4], all terms in this inequality have units of joules. This is the stated endpoint bound. [step 1.1, F4, algebra] ∎

## Remarks

The result is a conditional model deduction. A finite reservoir, omitted shaft or field work, matter transfer, or an open-flow energy balance changes [A1]–[A3] and requires a separate argument.
