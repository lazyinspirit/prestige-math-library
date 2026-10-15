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
  - def-td-process-and-protocol
  - post-td-first-law-energy
  - post-td-macroscopic-second-law
  - def-td-si-quantities
dependency_roles:
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

For a fixed-composition closed system coupled to an ideal thermal reservoir at $T_0>0$ and ideal pressure store at $p_0>0$, let $Q$ be heat into the system and let $W_{\mathrm{out}}$ be net energy delivered by the system to an ideal work store whose entropy is constant. Assume the isolated-composite model of [A1]–[A3] in Facts & Assumptions, including its admitted compound record, feasible endpoint association and admitted additive entropy split required by [[post-td-macroscopic-second-law]]. Then for any admitted process between equilibrium endpoints $x_i,x_f$,

$$W_{\mathrm{out}}\le G_{T_0,p_0}(x_i)-G_{T_0,p_0}(x_f),\qquad G_{T_0,p_0}(x):=U(x)+p_0V(x)-T_0S(x).$$

If the endpoint states lie on the $(T,p)=(T_0,p_0)$ natural-variable chart, this is the decrease in the Gibbs potential of [[def-td-legendre-potentials]]. Equality requires zero total entropy production; the theorem does not assert that a protocol realizing equality exists.

## Facts & Assumptions

**Given:** A system $\sigma$ of fixed constitution $c$, an admitted record $P\in\mathcal P_{\mathrm{cl}}(\sigma)$ with equilibrium endpoints $x_i,x_f$, $T_0>0$, $p_0>0$, and the ideal reservoir/work-store model below. The core-record conditions and fixed-chart bookkeeping are those of [[def-td-process-and-protocol]]. Write $Q=Q[P]$ and $W_{\mathrm{on}}=W_{\mathrm{on}}[P]$. Use $W_{\mathrm{out}}>0$ for energy delivered by the system, in joules.

[A1] Ideal thermal reservoir of constitution $c_R$, with fixed volume and composition: its accessed equilibrium states have entropy $S_R(E_R)=S_{R,0}+E_R/T_0$ on the accessed energy interval, where $E_R$ is its internal energy in joules and entropy is in $\mathrm{J\,K^{-1}}$. Heat $Q$ into the system changes reservoir energy by $\Delta E_R=-Q$.

[A2] Ideal pressure and work stores: the only work on the system is $W_{\mathrm{on}}=-p_0\Delta V-W_{\mathrm{out}}$, where the pressure store has energy change $p_0\Delta V$ and the work store receives $W_{\mathrm{out}}$. Both stores have constant entropy; no other work coordinate is admitted.

[A3] The system, bath, and both stores form a compound $C$ with an admitted record $\widehat P\in\mathcal P_{\mathrm{cl}}(C)$ representing the same operation as $P$. Its outer boundary is isolated throughout, its constitution is fixed, and its preparations at both endpoints are equilibrium macrostates. For both records the center-of-mass kinetic and separately tracked external-field energy changes vanish. Supply store endpoint sets $Y_B,Y_W$, energy maps $E_B:Y_B\to\mathbb R\,\mathrm J$ and $E_W:Y_W\to\mathbb R\,\mathrm J$, and constant entropy maps $S_B^{\mathrm{aux}}:Y_B\to\mathbb R$ and $S_W^{\mathrm{aux}}:Y_W\to\mathbb R$, with values in $\mathrm{J\,K^{-1}}$. The process model supplies $\rho_{\widehat P}:\{-,+\}\to\mathcal F\subseteq D_c\times D_{c_R}\times Y_B\times Y_W$ with $\rho_{\widehat P}(-)=(x_i,x_R^-,y_B^-,y_W^-)$ and $\rho_{\widehat P}(+)=(x_f,x_R^+,y_B^+,y_W^+)$. The store-energy increments are exactly those in [A2]. Here $\mathcal F$ is one declared feasible constituent endpoint set for the fixed totals, retained constraints and permitted exchanges of [F2]; one fixed total-energy value on $\mathcal F$ is $U_c(x)+U_{c_R}(x_R)+E_B(y_B)+E_W(y_W)$, including both stores from [A2]. The system and bath form an independent separated split admitted by the entropy-additivity rule required in [F2]. Every named auxiliary and work device is included in $C$; any device outside this two-constituent entropy split has explicitly constant endpoint entropy. Thus $S_{\mathrm{tot}}(x,x_R,y_B,y_W)=S_c(x)+S_{c_R}(x_R)+S_B^{\mathrm{aux}}+S_W^{\mathrm{aux}}$ on $\mathcal F$ gives $\Delta S_{\mathrm{tot}}=\Delta S+\Delta S_R$.

[F1] [[post-td-first-law-energy]]: The adopted closed-record balance is $\Delta U=Q+W_{\mathrm{on}}$, with positive $Q$ into and positive $W_{\mathrm{on}}$ on the system.

[F2] [[post-td-macroscopic-second-law]]: For an admitted core closed record of a compound isolated throughout, with fixed constitution and equilibrium endpoint tuples associated to the same declared feasible set, the entropy change of an admitted independent separated split is nonnegative. All named devices are included, omitted entropy contributions have declared zero change, and the kinetic and separately tracked external-field endpoint energy changes vanish.

[F3] [[def-td-process-and-protocol]]: $Q$ and $W_{\mathrm{on}}$ are process-record transfers, not state functions; an adiabatic record has $Q=0$.

[F4] [[def-td-si-quantities]]: $U$, $Q$, and $W_{\mathrm{on}}$ are in joules, $V$ is in cubic metres, and $\mathrm{Pa\,m^3=J}$.

[F5] [[def-td-legendre-potentials]]: On a valid local $(T,p,n)$ inverse chart, the Gibbs potential is $G=U-Ts+pV$, with $s$ the entropy coordinate.

## Proof

1.1 Apply [F1] to the system record $P$ and use [A2] to obtain $\Delta U=Q-p_0\Delta V-W_{\mathrm{out}}$. By [A1] and [A3], $\Delta S_{\mathrm{tot}}=\Delta S-Q/T_0$. The compound record $\widehat P$, its endpoint association into one $\mathcal F$, and its admitted entropy split satisfy every hypothesis of [F2] by [A3], so $\Delta S_{\mathrm{tot}}\ge0$ and $Q\le T_0\Delta S$. The signs of the transfers are those in [F3]. [given, A1, A2, A3, F1, F2, F3, algebra]

2.1 Rearranging step 1.1 gives $W_{\mathrm{out}}=-\Delta G_{T_0,p_0}-T_0\Delta S_{\mathrm{tot}}\le-\Delta G_{T_0,p_0}$. Since $T_0>0$, equality implies $\Delta S_{\mathrm{tot}}=0$; no existence of an equality protocol follows. The units in [F4], the stated pressure and temperature units, and [A1]–[A2] make every energy term a value in joules. At endpoints with $T=T_0$ and $p=p_0$ on a valid Gibbs chart, [F5] equals $G_{T_0,p_0}$, giving the stated Gibbs-potential interpretation. [given, A1, A2, F4, F5, step 1.1, algebra] ∎

## Remarks

The result is a conditional model deduction. A finite reservoir, omitted shaft or field work, matter transfer, or an open-flow energy balance changes [A1]–[A3] and requires a separate argument.
