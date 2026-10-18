---
id: def-metric-graph-p1-edge-mesh
kind: definition
title: "Conforming P1 edge mesh on an anchored metric graph"
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-anchored-finite-metric-graph-h1-space]
justified_by: []
aliases: []
landmark: false
axiom_use: "No additional choice axiom is used; the anchored graph space carries its declared one-dimensional representative dependency."
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
    - title: "Mario Arioli and Michele Benzi, A Finite Element Method for Quantum Graphs, Emory CS Technical Report TR-2015-009 (44-page full text)"
      url: "https://www.cs.emory.edu/technical-reports/techrep-00275.pdf"
      locator: "Complete 44-page report; §2, §4, §7.2, printed/PDF pp. 3–14 and 22–23."
    - title: "Peter Kuchment, Quantum graphs: an introduction and a brief survey, arXiv:0802.3442 (2008)"
      url: "https://arxiv.org/pdf/0802.3442"
      locator: "Complete 39-page full text; §2 Graphs and metric graphs (printed pp. 2–3), §4 Vertex conditions and §4.1 Quadratic form (printed pp. 5–9)."
---

## Definition

Assume $E\ne\varnothing$. For each edge $e$, choose a finite partition
$$0=x_{e,0}<x_{e,1}<\cdots<x_{e,N_e}=\ell_e,$$
where $N_e\ge1$, and let $\mathcal T_h$ be the union of the resulting
interval cells $K_{e,j}=[x_{e,j-1},x_{e,j}]$. Set
$h=\max_{e,j}(x_{e,j}-x_{e,j-1})$. The conforming **P1 edge space** is
$$V_h=\{w\in V_D:\ w_e\text{ is affine on every }K_{e,j}\}.$$
Thus internal nodal values are single-valued along each edge, while the
original-vertex matching and zero-anchor conditions are inherited from
$V_D$. The maximum step $h$ is positive and finite because the mesh has
finitely many cells of positive length.


