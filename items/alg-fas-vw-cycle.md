---
id: alg-fas-vw-cycle
kind: algorithm
title: "Finite-budget recursive nonlinear FAS V/W cycle"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [alg-fas-two-grid-cycle]
justified_by: [lem-fas-vw-cycle-work-and-status]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "William L. Briggs, Van Emden Henson, and Steve F. McCormick, A Multigrid Tutorial, 2nd ed., Chapter 6"
      url: "https://amath.colorado.edu/~stevem/appm6640/mgtut13notes.pdf"
    - title: "Harald van Brummelen, Basics of Multigrid Methods, SINTEF winter-school lecture notes"
      url: "https://www.sintef.no/globalassets/project/evitameeting/2011/lecture1.pdf"
    - title: "Van Emden Henson, Multigrid Methods for Nonlinear Problems: An Overview, UCRL-JC-150259"
      url: "https://digital.library.unt.edu/ark%3A/67531/metadc1402426/m2/1/high_res_d/15002749.pdf"
---

## Definition

Fix a finite hierarchy of levels $j=0,1,\ldots,J$ with $J\ge1$. At level
$j$, let $F_j:U_j\to\mathbb R^{n_j}$ be defined on an open
$U_j\subseteq\mathbb R^{n_j}$, let $f_j\in\mathbb R^{n_j}$, and provide the
linear transfers $I_j$, $R_j$, and $P_j$ with the dimensions in
[[alg-fas-two-grid-cycle]]. For each $j>0$, provide the two diagonal smoother
matrices, damping factors, and finite pre/post sweep counts from that
algorithm. Choose a finite base solver at level $0$ with a declared total
operation budget $B_0$ and statuses `exact-root`, `inexact-root`, `branch-failure`,
`domain-failure`, and `budget-exhausted`. Its `exact-root` and `inexact-root`
statuses must report $\|F_0(v)-f_0\|_2$ as $0$ and a positive number,
respectively. At each noncoarsest level choose
$\gamma_j\in\{1,2\}$, representing V and W recursion, respectively.
For every $j>0$, the recursive level-$(j-1)$ solver call in the two-grid
procedure is metered against its declared finite coarse-call budget; if it
exceeds that budget, it returns `budget-exhausted` with its last valid iterate.

The base-solver contract also requires it to return its initial value unchanged
with status `exact-root` whenever that value already satisfies $F_0(z)=f_0$.

Define $\operatorname{Cycle}(0,u,f_0)$ to call the base solver. For $j>0$,
provide the level-$(j-1)$ cycle as the coarse-solver interface to
[[alg-fas-two-grid-cycle]]: its reported residual is measured as
$\|F_{j-1}(v)-g\|_2$, where $v$ is the returned value, with `exact-root` only
at residual zero and `inexact-root`
only at positive residual. The two-grid procedure makes $\gamma_j$ calls
with the same coarse right side $g$ and the current coarse iterate $z$.
Return the two-grid output, its status, its level residual, and the finite
diagnostic list of coarse-call residuals. Any failure status propagates
immediately with the last valid fine-level iterate. Each recursive call
lowers $j$, and all within-level loops have the finite budgets required by
[[alg-fas-two-grid-cycle]].

The V-cycle is the choice $\gamma_j=1$ on each noncoarsest level; the W-cycle
is $\gamma_j=2$. This definition does not assert that the returned iterate
solves the nonlinear equations, that the cycles converge, or that their work
is linear in the number of fine unknowns.

