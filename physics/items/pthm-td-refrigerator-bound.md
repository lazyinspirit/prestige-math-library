---
id: pthm-td-refrigerator-bound
kind: physics-theorem
title: Ideal-bath refrigerator coefficient-of-performance bound
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Conditional cooling coefficient-of-performance bound for an admitted closed refrigerator cycle between positive-temperature ideal baths inside an isolated compound with an ideal work store; finite reservoirs, unlisted transfers, and empirical appliance performance are excluded.
deps:
  - def-td-reservoir-cycle
  - post-td-first-law-energy
  - post-td-macroscopic-second-law
dependency_roles:
  def-td-reservoir-cycle: formulation-prerequisite
  post-td-first-law-energy: physical-assumption
  post-td-macroscopic-second-law: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: David Tong, Statistical Physics, complete Chapter 4 lecture-note PDF, §§4.3.1–4.3.3
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapter 2, §§2.5.2–2.5.3
      url: https://courses.physics.ucsd.edu/2025/Spring/physics210a/LECTURES/CH02.pdf
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

Let an admitted refrigerator cycle in the sense of [[def-td-reservoir-cycle]] operate between fixed ideal-bath temperatures $0<T_c<T_h$, extract $Q_c>0$ from the cold bath, reject $Q_h>0$ to the hot bath, and consume $W_{\mathrm{in}}>0$. Define its cooling coefficient of performance by $\mathrm{COP}_R=Q_c/W_{\mathrm{in}}$. Then
$
\mathrm{COP}_R\le\frac{T_c}{T_h-T_c}.
$
Equality holds exactly when the total entropy change of the isolated compound is zero. A reversible cycle in the stated boundary model saturates the bound; no converse about reversibility is asserted.

## Facts & Assumptions

**Given:** A cyclic working system with $0<T_c<T_h$, $Q_c>0$, $Q_h>0$, $W_{\mathrm{in}}>0$, no unlisted transfers, and the full working system, baths, and work store inside the declared isolated compound.

[F1] [[def-td-reservoir-cycle]]: In refrigerator mode $Q[P]=Q_c-Q_h$, $W_{\mathrm{on}}[P]=W_{\mathrm{in}}$, the cold and hot bath energy changes are $-Q_c$ and $+Q_h$, their endpoint entropy changes are $-Q_c/T_c$ and $+Q_h/T_h$, and the work store supplies this work with $\Delta E_w=-W_{\mathrm{in}}$ and zero entropy change. The admitted total-compound endpoint tuples contain those same working-system endpoints and bath/store energy coordinates, lie in one feasible set for the second-law postulate, and use the declared additive entropy split.

[F2] [[post-td-first-law-energy]]: For an admitted closed fixed-constitution process with zero endpoint changes in separately tracked center-of-mass kinetic and external-potential energies, $\Delta U=Q[P]+W_{\mathrm{on}}[P]$.

[F3] [[post-td-macroscopic-second-law]]: For an admitted isolated compound process with equilibrium endpoints and the declared additive total entropy, $\Delta S_{\mathrm{tot}}\ge0$; an admitted reversible operation has $\Delta S_{\mathrm{tot}}=0$.

## Proof

**Given:** The fixed-bath cycle hypotheses in the Statement and the heat/work signs in [F1].

1.1 The working system returns to its initial state, so $\Delta U=0$. Applying [F2] with [F1] gives $0=Q_c-Q_h+W_{\mathrm{in}}$, hence $Q_h=Q_c+W_{\mathrm{in}}$. [given, F1, F2, algebra]

1.2 The cold bath loses $Q_c$, the hot bath gains $Q_h$, and their entropy slopes are constant. Thus their entropy changes are $-Q_c/T_c$ and $Q_h/T_h$. The working system and work store have zero entropy change, so [F3] gives $ -\frac{Q_c}{T_c}+\frac{Q_h}{T_h}=\Delta S_{\mathrm{tot}}\ge0. $ [given, F1, F3, algebra]

2.1 Since $T_c,T_h>0$, step 1.2 gives $Q_h\ge Q_cT_h/T_c$. Substituting $Q_h=Q_c+W_{\mathrm{in}}$ from step 1.1 yields $ W_{\mathrm{in}}\ge Q_c\frac{T_h-T_c}{T_c}. $ [given, step 1.1, step 1.2, algebra]

3.1 Divide by $W_{\mathrm{in}}>0$ and use $T_h-T_c>0$ to obtain $\mathrm{COP}_R\le T_c/(T_h-T_c)$. Equality is equivalent to $\Delta S_{\mathrm{tot}}=0$; a reversible cycle has this property by [F3]. [given, F3, step 2.1, algebra] ∎
