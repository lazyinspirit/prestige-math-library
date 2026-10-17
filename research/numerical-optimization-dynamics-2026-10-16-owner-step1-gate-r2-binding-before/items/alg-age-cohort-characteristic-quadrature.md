---
id: alg-age-cohort-characteristic-quadrature
kind: algorithm
title: Age-cohort quadrature along exact characteristics
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-age-structured-renewal-transport-problem
  - alg-composite-midpoint-rule
  - def-one-step-ode-method-local-defect-order-and-stability
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
    - title: "Åke Brännström, Linus Carlsson, and Daniel Simpson, On the Convergence of the Escalator Boxcar Train"
      url: "https://arxiv.org/pdf/1210.1444"
      locator: "§2, PDF pp. 3–5: cohort measures with evolving states and masses; §3, PDF pp. 5–11: weak consistency and convergence framework."
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §§1.1.2 and 1.4–1.5, PDF pp. 4–10: characteristic cohorts, renewal formula and size-structured population models."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2, printed pp. 37–38/PDF pp. 3–4: positive composite midpoint initial quadrature."
---

## Definition

Input a finite time step $\Delta t$, an age cutoff $A$, nonnegative rates $\mu,\beta$ on $[0,A]$, and a finite positive initial quadrature $(a_i,m_i^0)_{i=1}^I$ supported in $[0,A)$ for the initial age measure on that interval. One option is the composite midpoint rule on a partition of $[0,A]$: for each panel midpoint $a_i$, set $m_i^0=\Delta a\,n_0(a_i)$. A cohort at age $a_i^k$ and mass $m_i^k$ follows the exact age characteristic

$$a_i^{k+1}=a_i^k+\Delta t$$

and updates its survival mass by forward Euler,

$$m_i^{k+1}=(1-\Delta t\,\mu(a_i^k))m_i^k.$$

At time $t_k$, calculate the finite cohort birth rate $B_h^k=\sum_i\beta(a_i^k)m_i^k$. Advance each existing cohort's age by $\Delta t$ and update its survival mass by the displayed Euler step. If its updated age is at least $A$, record that updated mass as discrete outflow and discard the cohort; otherwise retain it. Then insert a newborn cohort of age $0$ and mass $\Delta t B_h^k$ at time $t_{k+1}$. Require $\Delta t\|\mu\|_\infty\le1$. A failed rate evaluation returns failure. The procedure returns the finite positive measure $\nu_h^k=\sum_i m_i^k\delta_{a_i^k}$ and its birth/outflow records. The bounded-Lipschitz quadrature defect of the initial measure and the Euler survival error are separate inputs to any consistency claim.
