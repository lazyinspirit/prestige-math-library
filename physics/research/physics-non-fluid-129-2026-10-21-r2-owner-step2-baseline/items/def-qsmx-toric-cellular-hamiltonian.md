---
id: def-qsmx-toric-cellular-hamiltonian
kind: definition
title: Toric-code edge spins on an oriented cellulation
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-qsm-local-spin-algebras
  - def-r-orientation-of-a-topological-manifold
dependency_roles:
  def-qsm-local-spin-algebras: mathematical-premise
  def-r-orientation-of-a-topological-manifold: mathematical-premise
physical_scope: Pure finite-dimensional mathematics; no physical premise, empirical claim, or stability claim.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: A. Yu. Kitaev, Fault-tolerant quantum computation by anyons
      url: https://arxiv.org/pdf/quant-ph/9707021
      locator: §1, equations (1)–(4), PDF pp. 1–4; stabilizer operators and toric Hamiltonian.
    - title: "John Preskill, Lecture Notes for Physics 219: Quantum Computation, Chapter 9"
      url: https://www.preskill.caltech.edu/ph219/topological.pdf
      locator: §9.7, PDF pp. 20–21; square-torus Hamiltonian and stabilizer conventions.
---

## Definition

A closed surface here is a compact, connected topological $2$-manifold without boundary: each point has a neighborhood homeomorphic to an open disk in $\mathbb R^2$. It is orientable when the local integer-homology system with fiber $H_2(S,S\setminus\{x\};\mathbb Z)$ has a continuous section that generates each fiber; this is the $R$-orientation definition with coefficient ring $R=\mathbb Z$.

A finite cellulation $K$ of $S$ is a finite $2$-dimensional CW decomposition whose open $2$-cells are disks. Write $V,E,F$ for its finite vertex, edge, and face sets. The primal graph has vertices $V$ and edges $E$. The dual graph has one vertex for each face and one dual edge crossing each primal edge, joining the two incident face sides; loops and multiple edges are allowed. Assume both graphs are connected. Let $\mathbb F_2=\{0,1\}$ with addition modulo two. Incidence multiplicities are reduced modulo two: $\partial_1:\mathbb F_2^E\to\mathbb F_2^V$ sends each edge to the sum of its endpoint incidences, and $\partial_2:\mathbb F_2^F\to\mathbb F_2^E$ sends each face to its boundary-edge incidence vector. These cellular boundary maps satisfy $\partial_1\partial_2=0$. Since $S$ has no boundary, each edge has two incident face sides, counted with multiplicity, so $\partial_2(\sum_{f\in F}f)=0$.

Identify $E$ with a finite region $\Lambda\subset\mathbb Z$ and use the finite local spin matrix algebra on $\Lambda$ with spin dimension $q=2$. The edge Hilbert space is $\mathcal H_K=(\mathbb C^2)^{\otimes E}$, so $\dim\mathcal H_K=2^{|E|}$. Let $X=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $Z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. For $a,b\in\mathbb F_2^E$, define $X(a)=\bigotimes_{e\in E}X^{a_e}$, $Z(b)=\bigotimes_{e\in E}Z^{b_e}$, and $P(a,b)=X(a)Z(b)$. For a vertex $v$ and face $f$, put $A_v=X(\partial_1^T v)$ and $B_f=Z(\partial_2 f)$, where $v$ and $f$ also denote the corresponding basis vectors. Thus $A_v$ is the product of $X$ over incident edges with odd incidence, and $B_f$ is the product of $Z$ over boundary edges with odd incidence. The identity $\partial_1\partial_2=0$ makes every $A_v$ commute with every $B_f$; each is a self-adjoint involution.

For positive real coefficients $J_v,K_f$, define the toric-code Hamiltonian

$$H_K=\sum_{v\in V}J_v\frac{I-A_v}{2}+\sum_{f\in F}K_f\frac{I-B_f}{2}.$$

The Pauli operators are dimensionless. In a physical interpretation, $J_v,K_f$ have energy units (joules in SI); here they are positive mathematical coefficients and no measured values are asserted. A simultaneous $+1$ eigenvector of all $A_v,B_f$ is called a ground vector. The ground space is their common $+1$ eigenspace, equivalently $\ker H_K$.

For the square $L\times L$ torus, $L\ge3$, use vertices $\mathbb Z_L^2$, horizontal and vertical nearest-neighbor edges, and the $L^2$ square faces, with periodic boundary conditions. A coordinate cycle is a closed edge path winding once around one coordinate direction. Let $p_1,p_2$ be the horizontal and vertical coordinate cycles in the primal graph, and let $q_1,q_2$ be the corresponding vertical and horizontal coordinate cycles in the dual graph, chosen so that $I(p_i,q_j)=\delta_{ij}$. The mod-two intersection number is the parity of primal edges crossed by a dual cycle. A topological disk is a subset homeomorphic to the closed unit disk. A finite edge support is disk-local with full complement cycles if it is contained in a topological disk whose complement contains representatives of these two primal and two dual coordinate cycles. The phrase “both independent homology cycles” below refers to these two primal cycles and their dual crossing representatives.

An open primal path is a path in the vertex-edge graph; its $Z$ string is $Z(b)$ for its edge chain $b$. An open dual path is a path in the face-adjacency graph; its $X$ string is $X(a)$ for the primal edges crossed by that dual path. A closed string has zero endpoint boundary in the corresponding primal or dual graph. The support of an operator is a finite edge set $S$ such that the operator is a matrix on $(\mathbb C^2)^{\otimes S}$ tensored with the identity on $E\setminus S$.

## Definition references

[[def-qsm-local-spin-algebras]]

[[def-r-orientation-of-a-topological-manifold]]

[A. Yu. Kitaev, “Fault-tolerant quantum computation by anyons,” §1](https://arxiv.org/pdf/quant-ph/9707021)

[John Preskill, *Lecture Notes for Physics 219: Quantum Computation*, §9.7](https://www.preskill.caltech.edu/ph219/topological.pdf)
