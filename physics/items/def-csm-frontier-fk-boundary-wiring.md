---
id: def-csm-frontier-fk-boundary-wiring
kind: definition
title: "Finite FK boundary wiring"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps: [def-csm-frontier-finite-potts-fk]
dependency_roles:
  def-csm-frontier-finite-potts-fk: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Geoffrey R. Grimmett, The Random-Cluster Model"
      url: https://arxiv.org/pdf/math/0205237
      locator: "§§2.1–2.3, printed pp. 3–9 / PDF pp. 2–8: finite edge configurations, cluster counts, and Potts/FK weights."
    - title: "Hugo Duminil-Copin, Geometric Representations of Lattice Spin Models, Cours Peccot lecture notes"
      url: https://www.ihes.fr/~duminil/publi/Courspeccot2.pdf
      locator: "Chapter 3, §§3.1–3.2, printed pp. 23–26: finite random-cluster configurations, component counts, and Potts/FK weights."
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
---

## Definition

Let $G=(V,E)$ be a finite simple graph, let $Q\geq2$ be an integer, and give each edge a finite activity $v_e\geq0$. Choose a set $B\subseteq V$ of boundary vertices and an equivalence relation $\xi$ on $B$. The relation $\xi$ specifies which boundary vertices are identified before any edges are occupied. For $A\subseteq E$, let $\sim_{\xi,A}$ be the least equivalence relation on $V$ containing every pair in $\xi$ and both endpoints of every edge in $A$. Write $k_\xi(A):=|V/{\sim_{\xi,A}}|$ and $v_A:=\prod_{e\in A}v_e$, with empty product $1$. Define
$$w^\xi_{FK}(A):=Q^{k_\xi(A)}v_A,\qquad Z^\xi_{FK}(Q,\mathbf v):=\sum_{A\subseteq E}w^\xi_{FK}(A).$$
The free boundary choice is the discrete relation on $B$ (each boundary vertex is a singleton); the wired classes are the equivalence classes of $\xi$, with a fully wired boundary given by one class when $B\neq\varnothing$. Thus $k_\xi(A)$ counts components after the prescribed identifications and occupied edges, including isolated vertices and boundary classes. The sum is finite and positive because its empty-edge term is $Q^{k_\xi(\varnothing)}>0$. For discrete $\xi$, $k_\xi(A)=k_G(A)$ and $Z^\xi_{FK}=Z_{FK}$. This is a mathematical partition polynomial; no wired Potts spin marginal is asserted.

## Definition references

[[def-csm-frontier-finite-potts-fk]]
