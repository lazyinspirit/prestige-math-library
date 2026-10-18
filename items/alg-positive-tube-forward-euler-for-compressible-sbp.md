---
id: alg-positive-tube-forward-euler-for-compressible-sbp
kind: algorithm
title: Finite-budget positive-tube forward Euler loop
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
aliases: []
deps: [def-periodic-sbp-compressible-viscous-scheme]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "R. Eymard, T. Gallouët, and R. Herbin, Finite Volume Methods, January 2019 updated author text, complete manuscript"
      url: "https://raphaeleh.github.io/PUBLI/bookevol.pdf"
      locator: "Chapter 1, Example 1.1, printed pp. 4–5 (PDF pp. 5–6): explicit Euler time stepping in a finite-volume balance."
    - title: "Pablo Fernandez, Ngoc-Cuong Nguyen, and Jaime Peraire, Entropy-stable hybridized discontinuous Galerkin methods for the compressible Euler and Navier-Stokes equations, complete author preprint"
      url: "https://arxiv.org/pdf/1808.05066"
      locator: "Sections 3.2–5.2: semidiscrete entropy-variable compressible flow systems and time-evolved examples; the guarded forward-Euler loop is defined locally."
---

## Definition

Fix the periodic SBP data and semidiscrete vector field $L_h$ of [[def-periodic-sbp-compressible-viscous-scheme]]. Let $\mathcal C\subset\mathcal G$ be a specified compact set, let the initial nodal vector $U^0=(U_i^0)_{i\in\mathcal I}$ satisfy $U_i^0\in\mathcal C$ for every node, let $\Delta t>0$, and let $N\in\mathbb N\cup\{0\}$ be a finite step budget. The algorithm returns a nodal vector, a status, and an accepted-step count.

1. For $n=0,\ldots,N-1$, compute the candidate
   $$U^{n+1,*}=U^n+\Delta t\,L_h(U^n).$$

2. If $U_i^{n+1,*}\in\mathcal C$ for every node $i$, accept it by setting $U^{n+1}=U^{n+1,*}$ and continue.

3. If any candidate node lies outside $\mathcal C$, return $(U^n,\texttt{left\_positive\_tube},n)$ immediately. Here $U^n$ is the last accepted vector and $n$ is the number of accepted steps; the rejected candidate is the one-based stage $n+1$.

4. If all $N$ candidates are accepted, return $(U^N,\texttt{completed},N)$. For $N=0$, return $(U^0,\texttt{completed},0)$.

The membership test is applied nodewise to the compact positive-state tube. A returned `left_positive_tube` status records a failed candidate and makes no claim that the prescribed step budget was completed.
