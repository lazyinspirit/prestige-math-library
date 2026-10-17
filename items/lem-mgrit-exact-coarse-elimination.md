---
id: lem-mgrit-exact-coarse-elimination
kind: lemma
title: "Eliminating F-points gives the exact coarse time operator"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 4
deps:
  - def-linear-all-at-once-time-operator
justified_by: []
aliases: []
forward_refs: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.1–2.3, PDF pp. 3–5: elimination to the exact coarse system and the Schur complement."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 4: Space-Time Multigrid Methods"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/08/cbms-pint-day-4.pdf"
      locator: "Full lecture notes, slides 57–59: F/C block elimination and ideal transfer operators."
---

## Statement

Use [[def-linear-all-at-once-time-operator]] with $N=Jm$, $m\ge2$, and its F/C partition. Both $A_t$ and $A_{FF}$ are invertible. Eliminating the F unknowns from $A_tv=b$ gives the coarse system with Schur complement
$$S=A_{CC}-A_{CF}A_{FF}^{-1}A_{FC}.$$
On coarse interval $j$, its recurrence is
$$u_{jm}-(\Phi_{jm}\Phi_{jm-1}\cdots\Phi_{(j-1)m+1})u_{(j-1)m}=\bar g_j,$$
where
$$\bar g_j=\sum_{s=1}^{m}(\Phi_{jm}\Phi_{jm-1}\cdots\Phi_{(j-1)m+s+1})g_{(j-1)m+s},$$
with an empty product defined to be the identity. If $\Phi_i=\Phi$ for every fine step, the exact coarse propagator is $\Phi^m$.

## Facts & Assumptions

**Given:** The finite fine recurrence, its all-at-once block matrix, and the C/F partition.

[F1] [[def-linear-all-at-once-time-operator]]: the fine equations are $u_i-\Phi_i u_{i-1}=g_i$ with identity diagonal blocks, and $C=\{m,2m,\ldots,N\}$.

## Proof

1.1 For any right-hand side, solve the fine equations in increasing index: the first unknown is determined by its identity diagonal block, and each later unknown is uniquely $u_i=r_i+\Phi_i u_{i-1}$. This proves $A_t$ is invertible. Holding all C-values fixed, the F-equations in each interval between consecutive C-points have the same forward-substitution form with identity diagonal blocks, so they uniquely determine the F-values; hence $A_{FF}$ is invertible. [given, F1, construct, induction]

2.1 In the reordered block system, the F rows give $u_F=A_{FF}^{-1}(b_F-A_{FC}u_C)$. Substituting this expression in the C rows gives $(A_{CC}-A_{CF}A_{FF}^{-1}A_{FC})u_C=b_C-A_{CF}A_{FF}^{-1}b_F$. Conversely, any solution $u_C$ of this coarse system, together with the displayed formula for $u_F$, satisfies both the F and C rows. Thus elimination preserves exactly the solution set. [given, F1, step 1.1, algebra]

3.1 Repeated substitution in $u_i=\Phi_i u_{i-1}+g_i$, for $i=(j-1)m+1,\ldots,jm$, gives $u_{jm}=(\Phi_{jm}\cdots\Phi_{(j-1)m+1})u_{(j-1)m}+\sum_{s=1}^{m}(\Phi_{jm}\cdots\Phi_{(j-1)m+s+1})g_{(j-1)m+s}$. For $s=m$ the product is empty and equals $I$. This is exactly the coarse recurrence in the Statement; the coefficient product reduces to $\Phi^m$ when every $\Phi_i=\Phi$. [F1, step 2.1, induction, algebra] ∎

