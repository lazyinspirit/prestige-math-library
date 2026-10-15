---
id: def-td-process-and-protocol
kind: definition
title: Thermodynamic process records and transfer conventions
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Process records with equilibrium endpoints and fixed-chart energy bookkeeping in the nonrelativistic macroscopic thermodynamic framework; trajectories may include nonequilibrium configurations and carry no regularity assumption unless a subclass adds one.
deps: [def-td-equilibrium-state-domain, def-td-system-and-permitted-exchanges, def-td-si-quantities, def-td-galilean-rest-frame, def-interval, def-cartesian-product, def-function, def-probability-measure, def-subset-and-proper-subset]
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-galilean-rest-frame: formulation-prerequisite
  def-interval: mathematical-premise
  def-cartesian-product: mathematical-premise
  def-function: mathematical-premise
  def-probability-measure: mathematical-premise
  def-subset-and-proper-subset: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Tong, Statistical Physics, §4.2 The First Law, full author-hosted HTML section
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S4
    - title: Ling, Moebs, and Sanny, University Physics Volume 2, §§3.2–3.3
      url: https://openstax.org/books/university-physics-volume-2/pages/3-2-work-heat-and-internal-energy
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.A.2 and §II.C (remark after Theorem 2.1)
      url: https://arxiv.org/pdf/cond-mat/9708200v2
dependency_level: 3
---

## Definition

For a system $s$ of constitution $c$, the process model fixes one Galilean inertial chart $g_s$ for kinetic-energy bookkeeping and transfer records and holds that chart fixed throughout each process. A process record is a tuple
$$P=(I_P,x_P^-,x_P^+,z_P,\kappa_P,r_P).$$
For each finite closed time interval $I_P=[t_0,t_1]\subseteq\mathbb R$ with $t_0<t_1$ as in [[def-interval]], measured in seconds, its component fields have these types: $x_P^-,x_P^+\in D_c$ are equilibrium endpoint coordinates from [[def-td-equilibrium-state-domain]]; $Z_s$ is the model-declared configuration space of the system, its auxiliaries and devices; $Z_s^{\mathrm{eq}}\subseteq Z_s$ is the model-declared set of equilibrium configurations and $\xi_s:Z_s^{\mathrm{eq}}\to D_c$ assigns their state coordinates; $z_P:I_P\to Z_s$ is a function ([[def-function]]); $\mathcal K_s$ is the model-declared set of control/contact records and $\kappa_P\in\mathcal K_s$; and $\mathcal R_s$ is the model-declared set of signed transfer records and $r_P\in\mathcal R_s$. These fields form a finite Cartesian product ([[def-cartesian-product]]). The admitted records $\mathcal P_s$ are the model-specified subset of tuples with these types that additionally satisfy $z_P(t_0),z_P(t_1)\in Z_s^{\mathrm{eq}}$, $\xi_s(z_P(t_0))=x_P^-$, and $\xi_s(z_P(t_1))=x_P^+$. No continuity or differentiability is imposed on $z_P$, and its values at interior times need not represent equilibrium states.

For an endpoint bookkeeping quantity $F$, write $\Delta F=F_P^+-F_P^-$. A closed record in the sense of [[def-td-system-and-permitted-exchanges]] has no matter crossing the chosen outer boundary throughout $I_P$; zero net matter transfer alone does not suffice. The core closed-record class $\mathcal P_{\mathrm{cl}}(s)\subseteq\mathcal P_s$ ([[def-subset-and-proper-subset]]) consists exactly of the closed records $P\in\mathcal P_s$ for which the system has a supplied fixed total mass $M>0$ and defined center-of-mass velocities at both endpoints in the fixed chart $g_s$, and $\Delta K_{\mathrm{cm}}=\Delta U_{\mathrm{ext}}=0$. Here $K_{\mathrm{cm}}^\pm=\tfrac12M\|\mathbf v_{\mathrm{cm}}^\pm\|_2^2$ are defined as in [[def-td-galilean-rest-frame]], and $U_{\mathrm{ext}}^\pm$ are supplied endpoint values of any model-specified external-field potential energy tracked separately from the internal-energy coordinate in $g_s$; if no such term is tracked, both values are set to zero. Other process classes require an expanded energy bookkeeping rule.

Heat is the protocol-assigned thermal mode of energy transfer across the selected outer boundary, not a quantity stored in the equilibrium state. For each admitted $P$, its transfer record $r_P$ supplies cumulative incoming and outgoing thermal energies $H_P^{\mathrm{in}},H_P^{\mathrm{out}}:I_P\to[0,\infty)$, with numerical values in joules as in [[def-td-si-quantities]]. Both maps start at zero at $t_0$ and satisfy $H_P^a(t)\le H_P^a(u)$ whenever $t\le u$ in $I_P$, for $a\in\{\mathrm{in},\mathrm{out}\}$. Their increments record the total thermal energy transferred in each direction over the corresponding time interval, across all declared outer-boundary thermal channels, before cancellation between directions or channels. No continuity or differentiability of these maps is required. Transfers between subsystems inside that boundary are internal and are excluded from these outer-boundary totals.

Define $Q:\mathcal P_s\to\mathbb R$ by $Q[P]:=H_P^{\mathrm{in}}(t_1)-H_P^{\mathrm{out}}(t_1)$. The protocol also supplies $W_{\mathrm{on}}:\mathcal P_s\to\mathbb R$, with values in joules; both transfers use the fixed bookkeeping chart $g_s$. Thus $Q[P]>0$ means net thermal energy enters the system, and $W_{\mathrm{on}}[P]>0$ means net mechanical work is done on it. These are functionals of the process record, not state functions of $x_P^-$ and $x_P^+$. A record $P\in\mathcal P_s$ is adiabatic exactly when $H_P^{\mathrm{in}}(t)=H_P^{\mathrm{out}}(t)=0$ for every $t\in I_P$: no thermal energy crosses the selected boundary throughout the record. In particular an adiabatic record has $Q[P]=0$, but zero net heat alone does not specify an adiabatic record. On $\mathcal P_{\mathrm{cl}}(s)$, use the restrictions of these same maps; defining them on the larger class supplies no energy-balance law for records outside the core class. A closed record may still exchange energy; it is not thereby isolated.

A preparation is a model-specified rule selecting the particular initial equilibrium state $x_P^-$. A statistical extension may instead specify a normalized probability measure on a declared measurable space, as in [[def-probability-measure]]; such a statistical preparation is outside this deterministic process class. A preparation does not assert later equilibration. An admitted record may pass through nonequilibrium configurations even though both endpoints lie in $D_c$.
