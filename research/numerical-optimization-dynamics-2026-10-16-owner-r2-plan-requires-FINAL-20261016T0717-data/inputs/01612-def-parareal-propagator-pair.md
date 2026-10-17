---
id: def-parareal-propagator-pair
kind: definition
title: "Fine and coarse propagators on a common macro grid"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-explicit-runge-kutta-tableau-and-stage-map
  - def-backward-euler-step-equation
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
      locator: "§2.2, PDF pp. 4–5: Parareal fine/coarse maps and correction as residual propagation."
    - title: "Martin J. Gander, 50 Years of Time Parallel Time Integration"
      url: "https://unige.ch/~gander/Preprints/50YearsTimeParallel.pdf"
      locator: "Author-hosted chapter, PDF pp. 13–16: propagation maps, standard Parareal recurrence, and conditional error estimate."
    - title: "Martin J. Gander, Time Parallel Time Integration, Chapter 2: Methods Based on Multiple Shooting"
      url: "https://conferences.math.mtu.edu/wp-content/uploads/2022/07/cbms-pint-day-2.pdf"
      locator: "Full 75-slide lecture deck, slides 23–29: propagation maps, standard recurrence, finite-step exactness, and a convergence estimate."
---

## Definition

Let $d,N\ge1$, let $X=\mathbb R^d$, and fix macro times $t_0<t_1<\cdots<t_N$. A **fine/coarse propagator pair** is a pair of deterministic maps $F_n:D_n^F\to X$ and $G_n:D_n^G\to X$, for each $0\le n<N$, where $D_n^F,D_n^G\subseteq X$ are their admitted input sets. Both maps advance a state across the same interval $[t_n,t_{n+1}]$. The labels fine and coarse identify the two roles chosen by the user; they assert no accuracy, stability, cost, or convergence property.

For an initial state $x_0\in X$, whenever every call succeeds, the **sequential fine trajectory** is the finite sequence $x_{n+1}=F_n(x_n)$, and the **sequential coarse trajectory** is defined by replacing each $F_n$ with $G_n$. A partially defined map is unavailable outside its admitted set; a failed stage evaluation or an unavailable implicit branch is a propagation failure, not a numerical value.

A canonical ODE instantiation uses the explicit Runge–Kutta stage map of [[def-explicit-runge-kutta-tableau-and-stage-map]] for $r\ge1$ fine substeps of size $(t_{n+1}-t_n)/r$, composed in order to form $F_n$. A coarse backward Euler value is an endpoint $z$ satisfying the equation in [[def-backward-euler-step-equation]] over the full macro interval. Its branch selector is part of the input and must select exactly one admissible root for each admitted start state; if no such selected root exists, the coarse map is unavailable. The backward Euler definition alone asserts neither root existence nor uniqueness.

This definition distinguishes the sequential fine trajectory from samples of an exact ODE solution. Any estimate of the fine method's error relative to that exact solution is a separate obligation.

