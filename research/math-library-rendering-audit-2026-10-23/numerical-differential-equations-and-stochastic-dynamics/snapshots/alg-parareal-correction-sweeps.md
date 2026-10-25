---
id: alg-parareal-correction-sweeps
kind: algorithm
title: "Finite-budget Parareal correction sweeps"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-parareal-propagator-pair
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

Input: an admissible propagator pair from [[def-parareal-propagator-pair]], initial state $x_0$, number of macro intervals $N$, integer sweep budget $K\ge0$, and optionally a wall-clock budget $\tau\ge0$ and certificate data $(\mathcal C,c,Q,V)$. Here $c\in\mathcal C$ is a supplied certificate, $Q$ is a declared predicate on completed rows, and $V(W,c)$ is a supplied deterministic verifier that terminates with a Boolean for every completed row $W$ and satisfies $V(W,c)=\mathrm{true}\Rightarrow Q(W)$. Without certificate data, take $V$ to return false. Every map call is required to terminate with a state or declared failure. Each map call either returns one state or a declared failure status. The output contains every fully completed row of the table $U_n^k$ for $0\le k\le K$, the last completed endpoint when one exists, and a status. If initialization never completes, return an empty completed-row table and no endpoint.

Initialize $U_0^0=x_0$ and, in increasing order of $n$, set $U_{n+1}^0=G_n(U_n^0)$. Store the values $G_n(U_n^0)$. For each $k=0,\ldots,K-1$, set $U_0^{k+1}=x_0$. Evaluate $F_n(U_n^k)$ independently for all $n$; the stored $G_n(U_n^k)$ values are reused from the preceding row. Then, in increasing order of $n$, compute $G_n(U_n^{k+1})$ and set
$$U_{n+1}^{k+1}=G_n(U_n^{k+1})+F_n(U_n^k)-G_n(U_n^k).$$
The fine calls in a sweep can run in parallel, while the corrected row is computed sequentially.

If a map call fails, return the last fully completed row and status propagation-failure; a prefix of the failed row may be reported separately but is not a completed iterate. If the time budget expires at a call boundary, return the last fully completed row and status budget-exhausted. When initialization and all $K$ requested sweeps finish, call $V$ on the final row and $c$ (or use false when no certificate was supplied). Return status converged if this returns true, certifying the declared predicate $Q$; otherwise return status budget-exhausted. Completion of the finite budget alone is not a convergence certificate.

For the exact-arithmetic recurrence, an update computed with inexact fine/coarse values or an inexact correction solve can be written as the displayed right-hand side plus a combined defect $\eta_n^{k+1}$. A residual tolerance alone does not bound that defect in forward error.
