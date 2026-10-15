---
id: def-td-thermodynamic-limit-contract
kind: definition
title: Finite-state thermodynamic-limit contract
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: A specified sequence of finite-state macroscopic models at positive temperature with a declared density, interactions, boundary conditions, and normalization; no limiting existence, ensemble equivalence, or critical singularity is asserted.
dependency_level: 3
deps:
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-natural-numbers
  - def-tdmath-countable-canonical-model
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-natural-numbers: mathematical-premise
  def-tdmath-countable-canonical-model: mathematical-premise
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, Chapter 5, §5.4.3"
      url: https://davidtong.org/teaching/statistical-physics/statmechhtml/S5
    - title: "Konstantin K. Likharev, Essential Graduate Physics: Statistical Mechanics, §§4.1–4.2"
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

## Definition

Use $\mathbb N$ from [[def-natural-numbers]], which includes $0$, and define $\mathbb N_{>0}:=\mathbb N\setminus\{0\}$. A **finite-state thermodynamic-limit contract** specifies a sequence $(X_k,E_k,g_k,V_k,n_k)_{k\in\mathbb N_{>0}}$, where each $X_k$ is a finite nonempty state set, $E_k:X_k\to\mathbb R$ assigns finite energies in joules, $g_k:X_k\to(0,\infty)$ assigns positive dimensionless weights, $V_k>0$ is physical volume in $\mathrm{m^3}$, and, for one declared species, $n_k>0$ is its amount in moles. A fixed-density sequence has $V_k\to\infty$ and $n_k/V_k\to\rho\in(0,\infty)$ in $\mathrm{mol\,m^{-3}}$. Boundary conditions, interaction rules, and the choice of a volume or amount normalization are part of the contract and must be held fixed or explicitly tracked as $k$ varies.

For $T>0$, set $\beta:=(k_BT)^{-1}$ in $\mathrm{J^{-1}}$, with $k_B$ and units from [[def-td-si-quantities]]. The finite-state canonical partition sum is

$$
Z_k(\beta):=\sum_{x\in X_k}g_k(x)e^{-\beta E_k(x)},
$$

as the finite case of [[def-tdmath-countable-canonical-model]]. It is a positive finite real number. Define $F_k(\beta):=-\beta^{-1}\log Z_k(\beta)$ in joules and $f_k(\beta):=F_k(\beta)/V_k$ in $\mathrm{J\,m^{-3}}$. The specified thermodynamic-limit value is $f(\beta,\rho):=\lim_{k\to\infty} f_k(\beta)$ **if this limit exists**. A limit per mole or per lattice site is a different normalization and must be stated separately.

This is a contract for what a limit claim must specify, not a theorem that the limit exists. It asserts no uniformity in $\beta$, derivative interchange, ensemble equivalence, convergence rate, or nonanalyticity. A finite model's regularity and any limiting singularity require their own arguments; neither is inferred from the word “thermodynamic limit.”
