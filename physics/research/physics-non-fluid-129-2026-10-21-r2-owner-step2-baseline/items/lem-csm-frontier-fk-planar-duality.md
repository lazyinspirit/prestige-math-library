---
id: lem-csm-frontier-fk-planar-duality
kind: lemma
title: "Planar FK duality with the free exterior-face convention"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 2
deps:
  - def-csm-frontier-fk-real-boundaries
  - def-plane-graph-face-and-boundary
  - def-plane-dual-multigraph
  - cor-euler-formula-for-disconnected-plane-graphs
  - lem-plane-edge-face-incidence
dependency_roles:
  def-csm-frontier-fk-real-boundaries: mathematical-premise
  def-plane-graph-face-and-boundary: mathematical-premise
  def-plane-dual-multigraph: mathematical-premise
  cor-euler-formula-for-disconnected-plane-graphs: mathematical-premise
  lem-plane-edge-face-incidence: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
physical_scope: null
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Vincent Beffara and Hugo Duminil-Copin, The self-dual point of the two-dimensional random-cluster model is critical for q >= 1"
      url: https://arxiv.org/pdf/1006.5073
      locator: "Section 1, complement-edge duality and the self-dual parameter."
    - title: "Geoffrey Grimmett, The Random-Cluster Model, second edition"
      url: https://www.statslab.cam.ac.uk/~grg/books/rcm1-1.pdf
      locator: "Chapter 6 §6.1, especially the Euler component count and p-star relation."
verification:
  precheck: pass
---

## Statement

Let $G=(V,E)$ be a finite connected plane graph with a fixed embedding and $|V|\geq1$. Use the free partition on all primal vertices, $B=V$. Its plane dual multigraph $G^*$ has one vertex for each face, including the unbounded face, and one dual edge $e^*$ crossing each primal edge $e$; use the identity partition on the dual face-vertices. The unbounded face is one dual vertex, so this convention retains the exterior-face connection in the dual. For a primal open set $A\subseteq E$, let $A^*:=\{e^*:e\in E\setminus A\}$, so a dual edge is open exactly when its crossing primal edge is closed. For $q\geq1$ and $p\in(0,1)$ define $p^*\in(0,1)$ by

$$\frac{p^*}{1-p^*}=q\frac{1-p}{p}.$$

Then complementing the primal edges sends the finite FK law $\phi_{G,p,q}^{\mathrm{free}}$ to the dual FK law $\phi_{G^*,p^*,q}^{\mathrm{free}}$: the random dual edge set $A^*$ has exactly that distribution. The unnormalized weight ratio is the configuration-independent factor $q^{|V|-1}((1-p)/p^*)^{|E|}$; the exponent $|V|-1$ includes the exterior-face contribution under this identity-partition convention.

## Statement references

[[def-csm-frontier-fk-real-boundaries]]

[[def-plane-graph-face-and-boundary]]

[[def-plane-dual-multigraph]]

[[cor-euler-formula-for-disconnected-plane-graphs]]

[[lem-plane-edge-face-incidence]]

## Facts & Assumptions

**Given:** A finite connected plane graph with its fixed embedding, its dual multigraph including the unbounded face, $A\subseteq E$, $q\geq1$, and $p\in(0,1)$.

[F1] The finite FK weight is $p^{|A|}(1-p)^{|E\setminus A|}q^{k(A)}$; components count isolated vertices ([[def-csm-frontier-fk-real-boundaries]]).

[F2] The dual has one vertex per face and one edge crossing each primal edge; loops and parallel edges are permitted in the multigraph ([[def-plane-graph-face-and-boundary]], [[def-plane-dual-multigraph]]).

[F3] For a plane graph with $c$ components, including isolated vertices, $|V|-|E|+|F|=1+c$ ([[cor-euler-formula-for-disconnected-plane-graphs]]).

[F4] A cycle edge has two distinct incident faces and a bridge has one face on both local sides ([[lem-plane-edge-face-incidence]]).

## Proof

1.1 For the spanning subgraph $(V,A)$, write $F_A$ for its faces. Starting with $A=E$, the dual open set is empty, so its components are the individual faces of $G$. Delete primal edges one at a time. If a deleted edge is a bridge of the current subgraph, its component count increases by one while its edge count decreases by one; [F3] therefore leaves the face count unchanged. By [F4] its two local sides lie in one current face, hence in one current dual component by induction, so adding its dual edge does not change the dual component count (the edge may be a loop in the original dual or may join vertices already connected by previously opened dual edges). If it is not a bridge, its component count is unchanged while its edge count decreases by one; [F3] therefore lowers the face count by one. By [F4], the edge has two distinct incident current faces, hence two distinct current dual components by induction; opening its dual edge merges exactly those components. Induction over the finitely many deleted edges proves that dual components correspond to faces of the current primal subgraph; in particular $k_{G^*}(A^*)=|F_A|$. [F2, F3, F4, algebra, induction]

2.1 Apply [F3] to $(V,A)$, whose number of components is $k_G(A)$. It gives $|V|-|A|+|F_A|=1+k_G(A)$. Substituting step 1.1 and rearranging yields $k_G(A)=k_{G^*}(A^*)+|V|-|A|-1$. [F3, step 1.1, algebra]

3.1 Let $a=|A|$ and $m=|E|$. By step 2.1, the ratio of primal and dual unnormalized weights is $\frac{p^a(1-p)^{m-a}q^{k_G(A)}}{(p^*)^{m-a}(1-p^*)^a q^{k_{G^*}(A^*)}}=q^{|V|-1}\left(\frac{p}{q(1-p^*)}\right)^a\left(\frac{1-p}{p^*}\right)^{m-a}$. The defining relation for $p^*$ gives $p/[q(1-p^*)]=(1-p)/p^*$, so this ratio is $q^{|V|-1}((1-p)/p^*)^m$, independent of $A$. [F1, step 2.1, algebra]

4.1 Since $A\mapsto A^*$ is a bijection from primal edge subsets to dual edge subsets, normalizing the proportional weights in step 3.1 proves the asserted equality of probability laws. The factor $q^{|V|-1}$ is the contribution of the unique exterior face under this free dual convention; the identity is not a criticality argument. [F1, F2, step 3.1, algebra] ∎
