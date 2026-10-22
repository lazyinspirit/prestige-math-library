---
id: def-qsmx-finite-group-lattice-operators
kind: definition
title: Oriented finite-group lattice gauge operators
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 1
deps:
  - def-qsmx-finite-group-double
dependency_roles:
  def-qsmx-finite-group-double: mathematical-premise
justified_by: []
physical_scope: Pure finite-dimensional mathematics for group-valued edge labels on a finite cellulation; no empirical realization or perturbative claim.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: "§4, equations (9)–(13), PDF pp. 10–12; finite group edge spaces, orientation-dependent edge actions, face holonomy, and the Hamiltonian."
    - title: Alexander Cowtan and Shahn Majid, Quantum Double Aspects of Surface Code Models
      url: https://arxiv.org/pdf/2107.04411
      locator: "§3, PDF pp. 7–9; oriented group-valued edge states, vertex and face actions, and extension from square to irregular cellulations."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $G$ be a finite group with identity $e$. A **closed connected surface** means a compact, connected topological $2$-manifold without boundary. A **finite cellulation** here is a finite decomposition of such a surface into vertices, edges, and faces, where each face interior is an open disk and its attaching boundary is a finite cyclic walk along edges. An **oriented** cellulation means that each edge has a chosen direction, recorded by its source and target; no orientation of the surface is assumed. Let $\Sigma$ be such a cellulation and write $V,E,F$ for its vertex, edge, and face sets. Each edge $a\in E$ has source $s(a)$ and target $t(a)$. For a configuration $\mathbf g=(g_a)_{a\in E}\in G^E$, the edge Hilbert space is $\mathcal H_\Sigma=\bigotimes_{a\in E}\mathbb C[G]$, with orthonormal configuration basis $|\mathbf g\rangle$.

For $v\in V$ and $x\in G$, put $k_u=x$ if $u=v$ and $k_u=e$ otherwise. Define the vertex gauge permutation $U_v(x)$ on basis vectors by

$$U_v(x)|\mathbf g\rangle=|\mathbf g'\rangle,\qquad g'_a=k_{s(a)}g_a k_{t(a)}^{-1}\quad(a\in E).$$

For a face $f\in F$, choose its oriented boundary walk $a_1^{\epsilon_1}\cdots a_m^{\epsilon_m}$, with $\epsilon_j=1$ when the walk follows the selected orientation of edge $a_j$ and $\epsilon_j=-1$ otherwise. Its based holonomy on $\mathbf g$ is

$$H_f(\mathbf g):=g_{a_1}^{\epsilon_1}\cdots g_{a_m}^{\epsilon_m}.$$

Define the vertex average, face flatness projector, and finite lattice Hamiltonian by

$$A_v:=\frac1{|G|}\sum_{x\in G}U_v(x),\qquad B_f|\mathbf g\rangle:=\mathbf 1_{H_f(\mathbf g)=e}|\mathbf g\rangle,\qquad H_\Sigma:=\sum_{v\in V}(I-A_v)+\sum_{f\in F}(I-B_f).$$

## Definition references

[[def-qsmx-finite-group-double]]

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §4](https://arxiv.org/pdf/quant-ph/9707021)

[Alexander Cowtan and Shahn Majid, “Quantum Double Aspects of Surface Code Models,” §3](https://arxiv.org/pdf/2107.04411)

## Remarks

In the diagram, arrows specify edge orientations and $g_a$ labels the corresponding group element. The counterclockwise boundary walk from $v_0$ is $a_1a_2a_3^{-1}a_4^{-1}$, so its holonomy is $g_1g_2g_3^{-1}g_4^{-1}$. A gauge action $x$ at $v_0$ changes the two outgoing edge labels by left multiplication and therefore changes this based holonomy by conjugation, $H_f\mapsto xH_fx^{-1}$. The diagram illustrates the convention; it supplies no proof step.

```tikz
\begin{tikzpicture}[>=stealth,scale=1]
  \coordinate (v0) at (0,0);
  \coordinate (v1) at (3,0);
  \coordinate (v2) at (3,2);
  \coordinate (v3) at (0,2);
  \draw[->,thick] (v0) -- node[below] {$a_1:g_1$} (v1);
  \draw[->,thick] (v1) -- node[right] {$a_2:g_2$} (v2);
  \draw[->,thick] (v3) -- node[above] {$a_3:g_3$} (v2);
  \draw[->,thick] (v0) -- node[left] {$a_4:g_4$} (v3);
  \node[below left] at (v0) {$v_0,\ x$};
  \node[above right] at (v2) {$f$};
\end{tikzpicture}
```
