---
id: "alg-dorfler-marking-and-conforming-nvb-refinement"
kind: "algorithm"
title: "Dorfler marking and conforming newest-vertex refinement"
status: published
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 1
deps:
  - "def-afem-p1-residual-estimator-and-data-oscillation"
  - "def-afem-nvb-labelled-triangulation-family"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
sources:
  references:
    - title: "Ricardo H. Nochetto, Adaptive Finite Element Methods, Lecture 2"
      url: "https://www.math.umd.edu/~rhn/lectures/lecture2.pdf"
      locator: "§2.1, residual representation, reliability, and bubble lower bound,
        PDF pp. 1–5."
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---
## Definition

Input: a finite labeled conforming mesh $\mathcal T$, exact nonnegative arrays $(\eta_K^2)_{K\in\mathcal T}$ and $(o_K^2)_{K\in\mathcal T}$, where $\eta_K^2$ is the cell estimator contribution and $o_K^2$ the cell data-oscillation contribution, bulk-fraction parameters $\theta_E,\theta_O\in(0,1]$, a per-call total bisection budget $B\in\mathbb N_0$, and a stable total order of mesh identifiers. On the first call on a mesh not yet carrying operational forest identifiers, rank its cells by the supplied order and initialize the operational roots and vertex lists of [[def-afem-nvb-labelled-triangulation-family]]. This initialization preserves the supplied order on those cells and does not change their geometric generations or labels. On subsequent calls retain that forest decoration and use its identifier order. Thus each current input leaf, including every generated descendant, has a specified identifier. For an array $q_K\ge0$ and $\theta\in(0,1]$, sort by decreasing $q_K$ and then increasing identifier. If $\sum_Kq_K=0$, return the empty set. Otherwise return the shortest initial segment whose sum is at least $\theta\sum_Kq_K$. Thus these parameters are fractions of the squared contributions (the square-root convention for the usual estimator-norm parameter). Call the resulting sets $M_E,M_O$ and set $M=M_E\cup M_O$.

Before modifying the mesh, form the original edge-neighbor request set
$$Q=\{L\in\mathcal T:L=K\text{ or }L\text{ shares an edge with some }K\in M\}.$$
Thus $M_E,M_O$ and their union $M$ remain the bulk marks; $Q$ is the larger refinement request, with $M\subseteq Q$ and $\#Q\le4\#M$ because a triangle has at most three edge neighbors. For $M=\varnothing$, also $Q=\varnothing$. Set a remaining-generation flag $q_K=3$ on each cell in $Q$ and $q_K=0$ on every other cell. Repeatedly take the pending leaf with least stable identifier and process its reference edge. If the reference edge is on the polygon boundary, bisect that leaf. If its interior reference neighbor has the same generation, bisect the compatible pair simultaneously. If the neighbor has generation one lower, recursively process that neighbor first and then re-inspect the original leaf; this follows the finite reference-edge chain until the edge can be split conformingly. Every split leaf $T$ is replaced by its two children with the binary-path identifiers and stored vertex lists prescribed by [[def-afem-nvb-labelled-triangulation-family]], each inheriting $q_T-1$ when $q_T>0$ and otherwise $0$. Thus conformity splits may propagate without scheduling extra uniform generations, while every originally requested cell in $Q$ and its descendants complete all three requested generations. Process simultaneous pairs in the same transaction and use the fixed identifier order for all pending leaves. Stop when all remaining-generation flags vanish. Count every bisection against $B$. If closure or a pending request would exceed the remaining budget, discard the tentative splits and their new identifiers, retaining the original identifiers and vertex lists, and return the original mesh with status budget-exhausted; otherwise return the refined matching mesh with status complete. Invalid arrays, nonfinite or negative entries, invalid parameters, or incompatible labels return invalid-input without changing the mesh. All arithmetic and comparisons in this mathematical algorithm are exact; implementation error, linear algebra, and quadrature are outside its scope.

## Postconditions

A complete output is a conforming descendant, contains the uniform three-generation subdivision of every original cell in $Q$, and hence has an interior vertex in every bulk-marked cell and all its original edge neighbors. Every originally marked cell is refined; the sets $M_E,M_O$ themselves are unchanged by the patch expansion. Termination, shape regularity and cumulative element counts are separate result claims on this page. This definition makes no operation bound claim for a single refinement call.
