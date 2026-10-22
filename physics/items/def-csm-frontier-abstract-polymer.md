---
id: def-csm-frontier-abstract-polymer
kind: definition
title: "Abstract polymer model and connected coefficients"
status: published
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-complex-numbers-and-arithmetic
  - def-countable
  - def-sum-over-a-finite-index-set
  - def-finite-simple-graph
  - def-simple-graph-without-a-finiteness-hypothesis
  - def-walks-paths-and-connectedness-in-a-simple-graph
  - def-cycles-trees-and-forests-in-a-simple-graph
  - cor-cardinality-of-the-power-set
  - thm-subset-of-a-finite-set
justified_by: []
dependency_roles:
  def-complex-numbers-and-arithmetic: mathematical-premise
  def-countable: mathematical-premise
  def-sum-over-a-finite-index-set: mathematical-premise
  def-finite-simple-graph: mathematical-premise
  def-simple-graph-without-a-finiteness-hypothesis: mathematical-premise
  def-walks-paths-and-connectedness-in-a-simple-graph: mathematical-premise
  def-cycles-trees-and-forests-in-a-simple-graph: mathematical-premise
  cor-cardinality-of-the-power-set: mathematical-premise
  thm-subset-of-a-finite-set: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: null
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
sources:
  references:
    - title: "Sacha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, Chapter 5, Cluster Expansion"
      url: "https://www.unige.ch/~velenik/smbook/Cluster_Expansion.pdf"
      locator: "§§5.2–5.3, PDF pp. 2–5 (printed pp. 220–223): finite polymer model, compatible subsets, connected graph coefficients, and the formal expansion."
    - title: "Daniel Ueltschi, Cluster expansions and correlation functions"
      url: "https://arxiv.org/pdf/math-ph/0304003"
      locator: "§2, PDF pp. 1–4: measure-space partition function, connected graph coefficient, and the cluster expansion."
---

## Definition

An abstract polymer model consists of an at most countable set $\Gamma$ (finite or in bijection with $\mathbb N$), a reflexive symmetric relation $\sim$ on $\Gamma$ (so $\gamma\sim\gamma$ and $\gamma\sim\eta$ implies $\eta\sim\gamma$), and an activity function $z:\Gamma\to\mathbb C$. Its elements are called polymers, and $\gamma\sim\eta$ means that the two polymers are incompatible. A subset $X\subseteq\Gamma$ is compatible when no two distinct elements of $X$ are related by $\sim$. For real and natural summands, finite-index sums and products are enumeration-independent. For complex summands, define a finite sum or product by any enumeration and repeated addition or multiplication in $\mathbb C$; associativity and commutativity make the result independent of the enumeration. The empty sum is $0$ and the empty product is $1$. For each finite $V\subseteq\Gamma$, define the finite-volume partition polynomial

$$Z_V(z):=\sum_{\substack{X\subseteq V\\X\text{ compatible}}}\ \prod_{\gamma\in X}z_\gamma,$$

where the empty subset contributes $1$.

Write $[n]:=\{1,\ldots,n\}$ and $\binom{[n]}2:=\{\{i,j\}:i,j\in[n],\ i\ne j\}$. A simple graph on $[n]$ is a pair $([n],E)$ with $E\subseteq\binom{[n]}2$; a path is a finite vertex list with distinct vertices and each consecutive pair an edge. A graph is connected when every two vertices are joined by a path. A cycle is a vertex list $(v_0,\ldots,v_k)$ with $k\geq3$, $v_k=v_0$, $v_0,\ldots,v_{k-1}$ distinct, and each consecutive pair an edge; a tree is a connected simple graph with no cycle. For $n\in\mathbb N$ with $n\geq1$, let $\mathcal C_n$ be the set of connected simple graphs on $[n]$ and let $\mathcal T_n$ be the set of trees on $[n]$. The set $[n]$ is finite; its power set is finite, so its subset $\binom{[n]}2$ is finite; the power set of that edge set is finite as well. Each simple graph on $[n]$ is determined by an edge set in this last power set, so $\mathcal C_n$ and $\mathcal T_n$ are finite.

For an ordered tuple $(\gamma_1,\ldots,\gamma_n)\in\Gamma^n$, put $f_{ij}:=-\mathbf 1_{\{\gamma_i\sim\gamma_j\}}$ and define the connected coefficient

$$U_n(\gamma_1,\ldots,\gamma_n):=\sum_{G\in\mathcal C_n}\ \prod_{\{i,j\}\in E(G)}f_{ij}.$$

For $n=1$, $\mathcal C_1$ contains the one-vertex graph and the empty edge product equals $1$. These are finite polynomial and coefficient definitions; they assert no convergence.

## Definition references

[[def-complex-numbers-and-arithmetic]]

[[def-countable]]

[[def-sum-over-a-finite-index-set]]

[[def-finite-simple-graph]]

[[def-simple-graph-without-a-finiteness-hypothesis]]

[[def-walks-paths-and-connectedness-in-a-simple-graph]]

[[def-cycles-trees-and-forests-in-a-simple-graph]]

[[cor-cardinality-of-the-power-set]]

[[thm-subset-of-a-finite-set]]

