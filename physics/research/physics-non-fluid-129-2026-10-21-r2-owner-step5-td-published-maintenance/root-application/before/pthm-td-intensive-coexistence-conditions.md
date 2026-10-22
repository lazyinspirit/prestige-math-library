---
id: pthm-td-intensive-coexistence-conditions
kind: physics-theorem
title: Intensive equilibrium conditions for coexisting phases
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: Finite coexisting phase branches in positive-temperature C2 charts at an attained global entropy maximum, and only the energy, volume, or species transfers declared pairwise feasible in both directions.
dependency_level: 1
deps:
  - def-td-phase-and-coexistence-domain
  - def-td-equilibrium-state-domain
  - def-td-si-quantities
  - def-td-isolated-compound-feasible-set
  - def-td-temperature-pressure-chemical-potential
  - post-td-bulk-additivity
  - post-td-concave-fundamental-entropy
  - post-td-entropy-maximum
  - thm-chain-rule-for-total-derivatives
dependency_roles:
  def-td-phase-and-coexistence-domain: formulation-prerequisite
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-si-quantities: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  def-td-temperature-pressure-chemical-potential: formulation-prerequisite
  post-td-bulk-additivity: physical-assumption
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-entropy-maximum: physical-assumption
  thm-chain-rule-for-total-derivatives: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "David Tong, Statistical Physics, author-hosted complete lecture notes, §5.1.1"
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

## Statement

Let $P\ge1$ named phase branches of the same finite species list occupy a separated compound at an attained global entropy-maximizing endpoint with the fixed totals and exact feasible set declared by *Phase branches and coexistence domains* and *Isolated compound and feasible equilibrium set*. Assume each phase lies in an open C2 single-phase chart with finite positive temperature. For every pair of phases, assume the following about the feasible set at this endpoint: each named exchange channel permits a sufficiently small nonzero amount of transfer in both directions, while all other state coordinates may be held fixed.

Then, for every pair $\alpha,\beta$:
- if energy exchange is permitted, $T_\alpha=T_\beta$;
- if volume exchange is permitted, $p_\alpha/T_\alpha=p_\beta/T_\beta$, and if energy exchange is also permitted then $p_\alpha=p_\beta$;
- if species $j$ is transferable, $\mu_{\alpha,j}/T_\alpha=\mu_{\beta,j}/T_\beta$, and if energy exchange is also permitted then $\mu_{\alpha,j}=\mu_{\beta,j}$.

The pressure and chemical potentials are the derivative-defined state functions of *Entropic temperature, pressure, and molar chemical potentials*. The theorem makes no equality claim for a retained coordinate, a one-sided boundary exchange, or a channel absent from the declared feasible set. It is a model deduction, not evidence that these phases or exchange channels occur in nature.

## Statement references

[[def-td-phase-and-coexistence-domain]]

[[def-td-isolated-compound-feasible-set]]

[[def-td-temperature-pressure-chemical-potential]]

## Facts & Assumptions

**Given:** A finite number of named phase branches, a positive-mole composition chart, an attained global entropy maximum on the exact feasible set, C2 entropy on each phase chart, finite positive temperatures, additive separated-system coordinates and entropy, and the bilateral local feasibility of each exchange direction used below. Use SI units.

[A1] [[post-td-entropy-maximum]]: A stable endpoint attains a global maximum of total entropy on its exact feasible endpoint set; local maxima alone are not called stable equilibrium.

[F1] [[def-td-phase-and-coexistence-domain]] and [[def-td-isolated-compound-feasible-set]]: Phase amounts and states lie in the declared branch charts and exact feasible set; only the listed totals and exchanges may vary.

[F2] [[post-td-bulk-additivity]] and [[post-td-concave-fundamental-entropy]]: For the specified separated compound, energy, volume, aligned species amounts, and entropy add; on each selected single-phase chart the entropy is finite and C2 with $S_U>0$.

[F3] [[def-td-temperature-pressure-chemical-potential]]: $S_U=1/T$, $S_V=p/T$, and $S_{n_j}=-\mu_j/T$, each partial holding the other physical coordinates fixed.

[L1] [[thm-chain-rule-for-total-derivatives]]: The derivative of a differentiable composition is the composition of its derivatives.

## Proof

1.1 Fix any pair $\alpha,\beta$ and an allowed energy transfer. For any fixed nonzero increment $h$ joules, bilateral local feasibility supplies the curve $U_\alpha(t)=U_\alpha^*+th$, $U_\beta(t)=U_\beta^*-th$ for all sufficiently small $t$ of either sign, with all other coordinates fixed. The total entropy along this curve has a local maximum at $t=0$ by [A1]. Its derivative exists by [F2]; the right difference quotients are nonpositive and the left difference quotients are nonnegative, so the derivative is zero. By additivity and [L1], this derivative is $h(S_{\alpha,U}-S_{\beta,U})$. Since $h\ne0$, $S_{\alpha,U}=S_{\beta,U}$. [given, A1, F1, F2, L1, construct]

2.1 By [F3], $S_{\alpha,U}=1/T_\alpha$ and $S_{\beta,U}=1/T_\beta$. Both temperatures are finite and positive, so equality of the reciprocals gives $T_\alpha=T_\beta$. [given, F3, step 1.1, algebra]

3.1 If volume transfer is permitted, take a nonzero increment $k$ in $\mathrm{m^3}$ and vary $V_\alpha(t)=V_\alpha^*+tk$, $V_\beta(t)=V_\beta^*-tk$ with both signs feasible. The same local-maximum quotient argument gives $k(S_{\alpha,V}-S_{\beta,V})=0$, hence $S_{\alpha,V}=S_{\beta,V}$. By [F3], $p_\alpha/T_\alpha=p_\beta/T_\beta$. When energy transfer is also permitted, step 2.1 gives equal positive temperatures, so $p_\alpha=p_\beta$. These are derivative pressures; a mechanical piston interpretation requires its separately declared coupling. [given, A1, F1, F2, F3, L1, step 2.1, construct]

3.2 If species $j$ is transferable, vary its mole amounts by $n_{\alpha,j}(t)=n_{\alpha,j}^*+tq$ and $n_{\beta,j}(t)=n_{\beta,j}^*-tq$ for a nonzero increment $q$ in moles. Both signs are feasible. The same quotient argument gives $q(S_{\alpha,n_j}-S_{\beta,n_j})=0$, hence equal entropy partials. By [F3], $\mu_{\alpha,j}/T_\alpha=\mu_{\beta,j}/T_\beta$. If energy transfer is also permitted, step 2.1 gives equal positive temperatures and therefore equal chemical potentials. [given, A1, F1, F2, F3, L1, step 2.1, construct]

4.1 Every pair was arbitrary, so the asserted pairwise equalities hold for all named phases and only for the channels whose bilateral feasibility was assumed. If $P=1$, there are no pairs and the conditions are vacuous. No derivative equality follows for a retained or boundary coordinate because its required two-sided feasible curve is absent. [given, step 1.1, step 2.1, step 3.1, step 3.2] ∎
