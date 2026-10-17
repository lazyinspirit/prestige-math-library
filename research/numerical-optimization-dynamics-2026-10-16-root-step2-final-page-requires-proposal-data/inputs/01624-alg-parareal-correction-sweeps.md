---
id: alg-parareal-correction-sweeps
kind: algorithm
title: "Finite-budget Parareal correction sweeps"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-parareal-propagator-pair
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
    - title: "Martin J. Gander, 50 Years of Time Parallel Time Integration"
      url: "https://unige.ch/~gander/Preprints/50YearsTimeParallel.pdf"
      locator: "PDF pp. 14–16, equation (18) and the accompanying Parareal convergence discussion."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 2: Methods Based on Multiple Shooting"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/07/cbms-pint-day-2.pdf"
      locator: "Full lecture notes, slides 23–29: standard recurrence, finite-step exactness, and convergence estimate."
    - title: "R. D. Falgout, S. Friedhoff, Tz. V. Kolev, S. P. MacLachlan, and J. B. Schroder, Parallel Time Integration with Multigrid"
      url: "https://www.math.mun.ca/smaclachlan/research/mgrit.pdf"
      locator: "§2.2, PDF pp. 3–4: Parareal as coarse residual correction on the time grid."
---

## Definition

Input: an admissible propagator pair from [[def-parareal-propagator-pair]], initial state $x_0$, number of macro intervals $N$, sweep budget $K\ge0$, and optionally a wall-clock budget $\tau\ge0$ and a user-supplied convergence certificate. Each map call either returns one state or a declared failure status. The output is every fully completed row of the table $U_n^k$ for $0\le k\le K$, the last completed endpoint, and a status.

Initialize $U_0^0=x_0$ and, in increasing order of $n$, set $U_{n+1}^0=G_n(U_n^0)$. Store the values $G_n(U_n^0)$. For each $k=0,\ldots,K-1$, set $U_0^{k+1}=x_0$. Evaluate $F_n(U_n^k)$ independently for all $n$; the stored $G_n(U_n^k)$ values are reused from the preceding row. Then, in increasing order of $n$, compute $G_n(U_n^{k+1})$ and set
$$U_{n+1}^{k+1}=G_n(U_n^{k+1})+F_n(U_n^k)-G_n(U_n^k).$$
The fine calls in a sweep can run in parallel, while the corrected row is computed sequentially.

If a map call fails, return the last fully completed row and status propagation-failure; a prefix of the failed row may be reported separately but is not a completed iterate. If the time budget expires at a call boundary, return the last fully completed row and status budget-exhausted. Return status converged only if the supplied convergence certificate is verified for the returned iterate. Otherwise return status budget-exhausted when the requested initialization and $K$ sweeps finish; the procedure does not infer convergence from completion of its finite budget.

For the exact-arithmetic recurrence, an update computed with inexact fine/coarse values or an inexact correction solve can be written as the displayed right-hand side plus a combined defect $\eta_n^{k+1}$. A residual tolerance alone does not bound that defect in forward error.

**Work model.** For nonnegative call costs $c_F,c_G,\tau_{\rm sync}$ and a positive integer processor count $P$, if one fine call costs $c_F$, one coarse call costs $c_G$, and $P$ processors can evaluate independent fine calls concurrently, the initial coarse pass uses $N$ serial calls. Each completed sweep uses $N$ fine calls, with ideal fine-call span $\lceil N/P\rceil c_F$, and $N$ new coarse calls in serial order, with span $Nc_G$, plus its measured communication and synchronization cost $\tau_{\rm sync}$. The resulting idealized span is
$$Nc_G+K\bigl(\lceil N/P\rceil c_F+Nc_G+\tau_{\rm sync}\bigr).$$
This is a cost model, not a speedup guarantee; actual work, communication, processor placement, and iteration budget determine realized performance.

