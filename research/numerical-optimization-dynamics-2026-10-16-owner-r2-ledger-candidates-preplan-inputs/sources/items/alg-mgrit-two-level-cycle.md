---
id: alg-mgrit-two-level-cycle
kind: algorithm
title: "A declared two-level MGRIT coarse-correction cycle"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-linear-all-at-once-time-operator
  - lem-mgrit-exact-coarse-elimination
  - def-norm-and-normed-space
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.1–2.4, PDF pp. 3–7: all-at-once system, F/C splitting, Parareal connection, and MGRIT V-cycle."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 4: Space-Time Multigrid Methods"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/08/cbms-pint-day-4.pdf"
      locator: "Full 68-slide lecture deck, slides 57–60: ideal coarse correction and FCF relaxation."
    - title: "V. A. Dobrev, Tz. Kolev, N. A. Petersson, and J. B. Schroder, Two-Level Convergence Theory for Multigrid Reduction in Time"
      url: "https://www.unm.edu/~jbschroder/docs/DoKoPeSc2015.pdf"
      locator: "§2 and §3.1–3.2, PDF pp. 4–10: two-level MGRIT and its error-propagation matrix."
---

## Definition

Input: a linear fine-grid system $A_tu=b$ as in [[def-linear-all-at-once-time-operator]], coarsening factor and C/F partition as in [[lem-mgrit-exact-coarse-elimination]], practical coarse propagators $\Psi_j\in\mathbb R^{d\times d}$, pre- and post-relaxation choices from $\{F,FCF\}$, a chosen norm on the fine-grid residual space as in [[def-norm-and-normed-space]], a cycle budget $J\ge0$, and a residual tolerance $\varepsilon\ge0$. The practical coarse matrix $A_c$ is lower block-bidiagonal with identity diagonal blocks and subdiagonal blocks $-\Psi_j$. For any right-hand side, forward substitution fixes the first block and then uniquely determines each later block, proving that $A_c$ is invertible even when an individual $\Psi_j$ is singular.

In F/C ordering define ideal interpolation and restriction by
$$P=\begin{bmatrix}-A_{FF}^{-1}A_{FC}\\ I_C\end{bmatrix},
\qquad R=\begin{bmatrix}-A_{CF}A_{FF}^{-1}&I_C\end{bmatrix}.$$
The exact coarse operator is the Schur complement $RA_tP=A_{CC}-A_{CF}A_{FF}^{-1}A_{FC}$ from [[lem-mgrit-exact-coarse-elimination]]; $A_c$ replaces its exact coarse propagator products by the chosen practical $\Psi_j$. F-relaxation forward-solves fine equations at F-points while holding C-values fixed. C-relaxation forward-solves C equations while holding F-values fixed. FCF-relaxation is F, then C, then F. Each is a finite linear update; its error map is denoted $S_{\rm pre}$ or $S_{\rm post}$.

Starting from the current iterate, apply the selected pre-relaxation, form $r=b-A_tu$, solve $A_cz=Rr$, correct $u\leftarrow u+Pz$, and apply the selected post-relaxation. The exact error-propagation matrix of this fixed cycle is
$$E=S_{\rm post}(I-PA_c^{-1}RA_t)S_{\rm pre}.$$
Check the residual norm of the initial iterate and repeat at most $J$ cycles, checking the same norm of $b-A_tu$ after each cycle. Return status converged only when this chosen residual norm is at most $\varepsilon$; otherwise return the last iterate with status budget-exhausted. The matrix $E$ describes exact arithmetic and exact coarse solves. Inexact solves contribute an update defect that needs its own bound.

**Work model.** With $N_f=N$ fine intervals and $N_c=N/m$, one F sweep uses $N_f-N_c$ fine-propagator calls; one C sweep uses $N_c$; one FCF sweep uses $2(N_f-N_c)+N_c$. Residual formation at C-points and ideal interpolation use their actual fine-propagator calls unless cached. A two-level coarse forward solve uses $N_c$ serial coarse calls. If a fine call costs $c_\Phi$, a coarse call costs $c_\Psi$, and $P$ processors share independent F-intervals, work is the sum of these calls and communication, while span includes the sequential dependence within each F-interval, the coarse forward solve, and synchronization. A multilevel cycle adds the work and span on every visited level. This model gives no speedup guarantee.

