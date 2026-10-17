---
id: lem-mgrit-two-level-call-counts
kind: lemma
title: "Propagator call counts for the two-level MGRIT cycle"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - alg-mgrit-two-level-cycle
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "R. D. Falgout et al., Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "Sections 2.2–2.4 for the procedures; the stated accounting model is proved locally."
---

## Statement

For the literal operations of [[alg-mgrit-two-level-cycle]], put $N_f=N$ and $N_c=N/m$. One F-relaxation uses $N_f-N_c-1$ fine-propagator calls; one C-relaxation uses $N_c$; and one FCF-relaxation uses $2(N_f-N_c-1)+N_c$. The specified coarse forward substitution uses $N_c$ practical coarse-propagator applications, including the evaluation at $z_0=0$. These counts concern completed operations without eliminating calls at zero inputs.

In an additive accounting model with nonnegative call costs $c_\Phi,c_\Psi$, the modeled work is $n_\Phi c_\Phi+n_\Psi c_\Psi+\kappa$, where $n_\Phi,n_\Psi$ count all executed calls and $\kappa$ accounts for all remaining work. Residuals, restriction, interpolation and stopping checks must contribute their actual calls and overhead; cached values incur no new call. A parallel schedule must respect the serial order within each F-interval and in the coarse solve, and its communication and synchronization. No measured speedup is asserted.

## Facts & Assumptions

**Given:** The declared literal implementation, $m\ge2$ dividing $N$, completed operations and the additive accounting convention of the Statement.

[F1] [[alg-mgrit-two-level-cycle]] updates every F-index, using $u_1=b_1$ without a propagator; each other F-update and each C-update applies one fine propagator. FCF means F, then C, then F. The coarse solve computes $z_j=\rho_j+\Psi_jz_{j-1}$ for $j=1,\ldots,N_c$.

## Proof

1.1 There are $N_c$ C-indices among $N_f$ unknowns, leaving $N_f-N_c$ F-indices. Exactly the boundary assignment $u_1=b_1$ in [F1] omits a fine call, giving $N_f-N_c-1$ calls. Each of the $N_c$ C-updates makes one call. Adding two F counts and one C count gives the stated FCF count, including $N=m=2$, where the F count is zero. [given, F1, algebra]

1.2 The coarse loop in [F1] has $N_c$ iterations and executes one application per iteration, including $\Psi_1z_0$. Summing the stipulated charge for every executed call and remaining operation gives the work formula. Each F-index uses the preceding index in its interval, and the coarse loop uses $z_{j-1}$; any execution schedule must preserve these dependencies and account for its other costs. [given, F1, step 1.1, algebra] ∎
