---
id: alg-age-structured-positive-birth-quadrature
kind: algorithm
title: Positive composite or capped-adaptive quadrature for renewal births
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 3
deps:
  - def-age-structured-renewal-transport-problem
  - alg-composite-midpoint-rule
  - alg-adaptive-simpson-with-finite-depth-and-panel-cap
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 2, §2.3, PDF pp. 17–18: positive renewal inflow quadrature in the semi-discrete upwind scheme."
    - title: "Tobin A. Driscoll and Richard J. Braun, Fundamentals of Numerical Computation, §5.7"
      url: "https://fncbook.com/adaptive/"
      locator: "§§5.7.1–5.7.3: Simpson refinement indicators and recursive subdivision; finite depth, panel budgets and cap statuses are specified by the local algorithm."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2 and the composite midpoint example, printed pp. 37–38/PDF pp. 3–4, give midpoint nodes, equal positive panel weights and the composite sum."
---

## Definition

Input a uniform age partition $0=a_0<a_1<\cdots<a_J=A$ with $\Delta a=a_j-a_{j-1}$, nonnegative cell masses $M_j$, a bounded nonnegative fertility function $\beta:[0,A]\to[0,\beta_\infty]$, and one rule setting for each cell. A setting is either midpoint with an integer panel count $q_j\ge1$, or capped adaptive with finite depth $D_j\in\mathbb N$, positive integer panel-call budget $P_j\ge1$, and indicator tolerance $\tau_j>0$. If no settings are supplied, use midpoint with $q_j=1$ in every cell. In each cell $C_j=[a_{j-1},a_j]$, let $u_j=M_j/\Delta a$ and approximate $\int_{C_j}\beta(a)u_j\,da$ by its selected positive rule:

1. **Midpoint mode:** use $u_j Q_M(\beta; a_{j-1},a_j,q_j)$ from [[alg-composite-midpoint-rule]] and record status `midpoint`.
2. **Capped adaptive mode:** call [[alg-adaptive-simpson-with-finite-depth-and-panel-cap]] on $\beta$ over $C_j$ with inputs $(D_j,P_j,\tau_j)$, then multiply its estimate by $u_j$ and retain its status and indicator. The fertility evaluator returns a finite value at every requested node or reports failure.

If an evaluation fails, return `failure` and no birth rate. Otherwise return

$$B_h=\sum_{j=1}^J u_jQ_j(\beta),$$

the per-cell statuses, and the sum of any reported adaptive indicators. Both rules have nonnegative quadrature weights summing to $\Delta a$, so $0\le B_h\le\beta_\infty\sum_jM_j$. An adaptive `accepted` status means only that its indicators meet the requested budget; neither that indicator nor a `cap-reached` estimate bounds the true quadrature error. Any convergence theorem using this procedure must separately assume or prove a true quadrature-defect bound.
