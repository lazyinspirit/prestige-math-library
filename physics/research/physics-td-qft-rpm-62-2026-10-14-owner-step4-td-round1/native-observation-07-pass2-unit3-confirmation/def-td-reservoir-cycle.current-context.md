---
id: def-td-reservoir-cycle
kind: definition
title: Ideal-reservoir thermodynamic cycles
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: Two-reservoir cycles of a fixed-constitution working system with ideal constant-temperature baths and an ideal work store, all inside a declared isolated compound; finite reservoirs and unlisted transfers are excluded.
deps:
  - def-td-process-and-protocol
  - def-td-system-and-permitted-exchanges
  - def-td-si-quantities
  - def-td-temperature-pressure-chemical-potential
  - post-td-concave-fundamental-entropy
  - def-td-reversible-process
  - post-td-macroscopic-second-law
dependency_roles:
  def-td-process-and-protocol: formulation-prerequisite
  def-td-system-and-permitted-exchanges: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  post-td-concave-fundamental-entropy: physical-assumption
  def-td-reversible-process: formulation-prerequisite
  post-td-macroscopic-second-law: physical-assumption
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: David Tong, Statistical Physics, complete Chapter 4 lecture-note PDF, §4.3.1
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §§2.5.2–2.5.4
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
dependency_level: 7
---

## Definition

Fix a working system $s$ of constitution $c$ and a closed process record $P\in\mathcal P_{\mathrm{cl}}(s)$ with equilibrium endpoints as in [[def-td-process-and-protocol]]. A cycle of the working system is such a record with $x_P^-=x_P^+$; the reservoirs and work store need not return to their initial energy states.

An ideal thermal reservoir $b$ has an energy interval $J_b\subseteq\mathbb R$ measured in joules and a finite entropy function $S_b:J_b\to\mathbb R$ measured in $\mathrm{J\,K^{-1}}$. On the energy interval admitted for a cycle, assume the exact affine law
$$S_b(E_b)=s_{b,0}+\frac{E_b}{T_b}$$
for a constant $s_{b,0}$ and fixed $T_b>0$ kelvins. Thus $S_b'(E_b)=1/T_b$ in the interior and every admitted endpoint change is exactly $\Delta S_b=\Delta E_b/T_b$. This constant is the absolute thermodynamic temperature under [[def-td-temperature-pressure-chemical-potential]]. The affine entropy law on the admitted interval is the ideal-bath model; a finite reservoir whose temperature changes is outside this definition.

An ideal work store is a named auxiliary with an energy coordinate $E_w$ measured in joules and an assigned entropy $S_w(E_w)=s_w$ constant on the energy interval used by the cycle. It exchanges only mechanical work and no matter or heat. Its energy may change, while its entropy change is zero by this model definition.

A two-reservoir cycle consists of one working-system cycle, two labelled baths $h,c$ at fixed temperatures $T_h,T_c>0$, and the ideal work store. The labels specify the transfer roles below; the general bookkeeping permits equal or reversed positive bath temperatures. In the strictly ordered subfamily $0<T_c<T_h$, call $h$ the hot bath and $c$ the cold bath. The engine-efficiency and refrigerator bounds use this subfamily. No existence of a cycle with prescribed transfer signs is asserted. They lie inside one isolated outer boundary in the sense of [[def-td-system-and-permitted-exchanges]], so the full compound has no external matter or energy transfer. There are no unlisted heat, work, matter, kinetic-energy, or external-potential-energy changes. The admitted process and transfer signs are those of [[def-td-process-and-protocol]].

For use of [[post-td-macroscopic-second-law]], the model supplies an admitted core closed process record $P_{\mathrm{tot}}\in\mathcal P_{\mathrm{cl}}(s_{\mathrm{tot}})$ for this full compound $s_{\mathrm{tot}}$. In particular, it supplies the compound's fixed positive mass and defined endpoint center-of-mass velocities in its fixed bookkeeping chart, as required by [[def-td-process-and-protocol]]. Its two endpoint configurations lie in the declared equilibrium set of that process model, its separately tracked center-of-mass kinetic and external-field potential energies have zero endpoint change, and its endpoint association $\rho_{P_{\mathrm{tot}}}:\{-,+\}\to\mathcal F$ has both values in the same feasible set $\mathcal F$ from that postulate. In the constituent ordering of $\rho_{P_{\mathrm{tot}}}(\pm)$, the working-system state is $x_P^\pm$ and the bath and work-store components have the corresponding energy coordinates $E_h^\pm,E_c^\pm,E_w^\pm$. The total-compound record and the working-system record therefore have matching working-system endpoints; all bath and work-store energy differences below refer to these same total-compound endpoint tuples. The former record is the input to the second-law postulate, and $P$ is the working-system record to which the first-law balance applies.

For each endpoint $\pm$, the model declares the additive entropy split
$$S_{\mathrm{tot}}\!\left(\rho_{P_{\mathrm{tot}}}(\pm)\right)=S_{\mathrm{ws}}(x_P^\pm)+S_h(E_h^\pm)+S_{\mathrm{cold}}(E_c^\pm)+S_w(E_w^\pm),$$
where $S_{\mathrm{ws}}$ is the working-system entropy and the bath and work-store functions are those defined here. This constituent split is assumed to be admitted by [[post-td-concave-fundamental-entropy]] and is the entropy supplied to [[post-td-macroscopic-second-law]]; $S_w$ contributes zero change. When reversibility is asserted, $P_{\mathrm{tot}}$ is reversible relative to its declared outer boundary and protocol as in [[def-td-reversible-process]].

In the heat-engine mode, the positive magnitudes $Q_h,Q_c$ in joules mean respectively heat taken from bath $h$ into the working system and heat rejected by the working system to bath $c$; accordingly $\Delta E_h=-Q_h$, $\Delta E_c=Q_c$, $Q[P]=Q_h-Q_c$, and work output is $W_{\mathrm{out}}=-W_{\mathrm{on}}[P]>0$. The work store gains exactly this transferred work, so $\Delta E_w=W_{\mathrm{out}}$. In the refrigerator mode, $Q_c>0$ is heat taken from bath $c$ into the working system, $Q_h>0$ is heat rejected to bath $h$, so $\Delta E_c=-Q_c$, $\Delta E_h=Q_h$, $Q[P]=Q_c-Q_h$, and work input is $W_{\mathrm{in}}=W_{\mathrm{on}}[P]>0$. The store supplies that work, so $\Delta E_w=-W_{\mathrm{in}}$. These are idealized model conventions, not claims that a particular apparatus realizes the cycle.
