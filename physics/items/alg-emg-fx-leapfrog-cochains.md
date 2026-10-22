---
id: alg-emg-fx-leapfrog-cochains
kind: algorithm
title: "Finite compatible leapfrog evolution"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 1
deps:
  - def-emg-fx-cochain-maxwell
justified_by:
  - lem-emg-fx-finite-step-termination
dependency_roles:
  def-emg-fx-cochain-maxwell: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Ralf Hiptmair, Maxwell’s Equations: Continuous and Discrete, ETH Research Report 2015-18"
      url: "https://www.sam.math.ethz.ch/sam_reports/reports_final/reports2015/2015-18.pdf"
      locator: "Complete 56-page report inspected. §§3.1–3.3, printed pp. 23–26 (PDF pp. 24–27): incidence cochains and topological identities; this algorithm is specified separately in exact rational arithmetic."
    - title: "Davit Harutyunyan, Adaptive Vector Finite Element Methods for the Maxwell Equations, University of Twente dissertation (2007)"
      url: "https://ris.utwente.nl/ws/portalfiles/portal/6041555/thesis_Harutyunyan.pdf"
      locator: "Complete 210-page dissertation inspected. Ch. 6, §§6.7–6.9, printed pp. 169–174 (PDF pp. 179–184): matrix semidiscretization, the staggered leapfrog update, a CFL condition, and discrete Gauss constraints."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Use the finite cochain data fixed by the preceding definition item, namely finite real coordinate spaces $C^0,C^1,C^2,C^3$, maps $D_0,D_1,D_2$ with $D_1D_0=D_2D_1=0$, and symmetric positive-definite mass maps $M_1,M_2$. Inputs are rational matrices $D_0,D_1,D_2,M_1,M_2$, rational initial coordinates $b_0\in C^2$ and $d_{1/2}\in(C^1)^*$, a positive rational step size $\tau$, and an integer $N\geq0$. The matrices and states use the fixed ordered bases and dual bases from that definition. All arithmetic is exact over $\mathbb Q$; floating-point arithmetic is not part of this algorithm.

First compute $R=M_1^{-1}$ once by fixed-order, no-row-swap Gauss–Jordan elimination of the augmented matrix $[M_1\mid I_{n_1}]$. For each pivot column $j=1,\ldots,n_1$, let $p$ be the current entry in position $(j,j)$. If $p=0$, return an inconsistency error. Otherwise divide row $j$ by $p$ and, for every $k\neq j$, replace row $k$ by row $k$ minus its current column-$j$ entry times row $j$. After all columns are processed, let $R$ be the right block. For $n_1=0$, take the unique empty matrix for $R$ and perform no elimination.

Set $(b,d):=(b_0,d_{1/2})$ and record this initial state. For each $n=0,\ldots,N-1$, in the stated order compute

$$b_{\mathrm{new}}:=b-\tau D_1Rd,\qquad d_{\mathrm{new}}:=d+\tau D_1^{\mathsf T}M_2b_{\mathrm{new}}.$$

Append $(b_{\mathrm{new}},d_{\mathrm{new}})$ to the output list and then set $(b,d):=(b_{\mathrm{new}},d_{\mathrm{new}})$. After the loop, return $R$ together with the list of the $N+1$ states $(b_n,d_{n+1/2})$ for $0\leq n\leq N$. The error branch is unreachable on admissible inputs; the separate finite-step termination lemma proves this and the exact inverse output.

## Definition references

[[def-emg-fx-cochain-maxwell]]

[[lem-emg-fx-finite-step-termination]]

## Remarks

The update uses the state order $b_n,d_{n+1/2}$ and this ordering fixes the sign of the cross term in its invariant. Positive definiteness makes every pivot in the fixed no-row-swap schedule nonzero; the separate lemma proves this by Schur-complement induction. The source’s Whitney finite-element leapfrog has its own spaces, mass matrices, boundary conditions and CFL hypotheses. This algorithm makes no claim of being its spatial discretization or of giving a continuum stability or convergence result.
