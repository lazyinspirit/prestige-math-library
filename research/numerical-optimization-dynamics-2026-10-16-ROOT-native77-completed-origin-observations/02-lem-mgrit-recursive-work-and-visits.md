---
id: lem-mgrit-recursive-work-and-visits
kind: lemma
title: "Finite recursion and work accounting for multilevel MGRIT"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 7
deps:
  - alg-mgrit-multilevel-recursive-cycle
  - lem-mgrit-two-level-call-counts
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "R. D. Falgout et al., Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "Sections 2.2–2.4 for the procedures; the stated accounting model is proved locally."
---

## Statement

For one top-level call of [[alg-mgrit-multilevel-recursive-cycle]] on a finite admissible hierarchy with terminating primitive operations, the recursion terminates. Its visit counts satisfy $v_0=1$ and $v_{\ell+1}=\nu_\ell v_\ell$ for $0\le\ell<L$.

Suppose every visit to noncoarsest level $\ell$ has the same local call counts $n_{\Phi,\ell},n_{\Psi,\ell}$, excluding its recursive children. In an additive accounting model with nonnegative call costs $c_{\Phi,\ell},c_{\Psi,\ell}$, remaining local work $\kappa_\ell$, and work $W_L$ per coarsest solve, its modeled work is
$$W=\sum_{\ell=0}^{L-1}v_\ell\bigl(n_{\Phi,\ell}c_{\Phi,\ell}+n_{\Psi,\ell}c_{\Psi,\ell}+\kappa_\ell\bigr)+v_LW_L.$$
Each local F-, C- or FCF-relaxation has the literal fine-call counts $N_\ell-N_{\ell+1}-1$, $N_{\ell+1}$ or $2(N_\ell-N_{\ell+1}-1)+N_{\ell+1}$ respectively. Residual formation, repeated coarse residuals, restriction, interpolation and correction contribute all their actual calls and overhead; caching incurs no new call. If counts or costs vary by visit, replace each product by the sum of the corresponding visit charges. Outer stopping checks have additional costs.

Parallel execution must respect the order within each F-interval, between the successive recursive visits that update the same correction, and within each exact coarse forward solve, including communication and synchronization. The accounting model implies no measured speedup or multilevel contraction.

## Facts & Assumptions

**Given:** A finite admissible hierarchy, finite positive integer visit counts, terminating primitives and the accounting model in the Statement.

[F1] [[alg-mgrit-multilevel-recursive-cycle]] solves exactly on level $L$; on level $\ell<L$ it invokes the level $\ell+1$ cycle exactly $\nu_\ell$ times in sequence, recomputing each residual from the updated correction.

[F2] [[lem-mgrit-two-level-call-counts]] gives the literal F, C and FCF call counts for a grid whose initial state is absorbed into its first right-hand-side block.

## Proof

1.1 A call on level $L$ terminates by the stipulated finite exact forward solve. If calls on level $\ell+1$ terminate, [F1] makes a finite number $\nu_\ell$ of them and otherwise executes only finite local operations, so a level $\ell$ call terminates. Downward induction proves termination on level $0$. There is one root call and every level $\ell$ visit has exactly $\nu_\ell$ children, giving the stated visit recurrence. [given, F1, induction, algebra]

2.1 Each noncoarsest visit has its stated local work charge, and every coarsest visit costs $W_L$. Partition all operations by their unique executing visit and sum the charges to obtain $W$. At level $\ell$ the inherited relaxation has $N_f=N_\ell$ and $N_c=N_{\ell+1}$, so [F2] supplies its three call counts, including the boundary assignment without a call. The data dependencies in [F1] and in each relaxation/forward solve require the stated scheduling order. Summing actual visit charges also covers unequal costs, and outer checks are outside the recursive call. [given, F1, F2, step 1.1, algebra] ∎
