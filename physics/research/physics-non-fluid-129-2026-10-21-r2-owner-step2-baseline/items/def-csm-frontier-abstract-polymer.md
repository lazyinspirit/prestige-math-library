---
id: def-csm-frontier-abstract-polymer
kind: definition
title: "Abstract polymer model and connected coefficients"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 0
deps:
  - def-complex-numbers-and-arithmetic
justified_by: []
dependency_roles:
  def-complex-numbers-and-arithmetic: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
physical_scope: null
sources:
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction, Chapter 5, Cluster Expansion"
      url: "https://www.unige.ch/~velenik/smbook/Cluster_Expansion.pdf"
      locator: "§§5.2–5.3, PDF pp. 2–5 (printed pp. 220–223): finite polymer model, compatible subsets, connected graph coefficients, and the formal expansion."
    - title: "Daniel Ueltschi, Cluster expansions and correlation functions"
      url: "https://arxiv.org/pdf/math-ph/0304003"
      locator: "§2, PDF pp. 1–4: measure-space partition function, connected graph coefficient, and the cluster expansion."
---

## Definition

An abstract polymer model consists of a countable set $\Gamma$, a reflexive symmetric relation $\sim$ on $\Gamma$, and an activity function $z:\Gamma\to\mathbb C$. Its elements are called polymers, and $\gamma\sim\eta$ means that the two polymers are incompatible. A subset $X\subseteq\Gamma$ is compatible when no two distinct elements of $X$ are related by $\sim$. For each finite $V\subseteq\Gamma$, define the finite-volume partition polynomial

$$Z_V(z):=\sum_{\substack{X\subseteq V\\X\text{ compatible}}}\ \prod_{\gamma\in X}z_\gamma,$$

where the empty subset contributes $1$.

For $n\geq1$ and an ordered tuple $(\gamma_1,\ldots,\gamma_n)\in\Gamma^n$, let $\mathcal C_n$ be the finite set of connected simple graphs with vertex set $\{1,\ldots,n\}$, put $f_{ij}:=-\mathbf 1_{\{\gamma_i\sim\gamma_j\}}$, and define the connected coefficient

$$U_n(\gamma_1,\ldots,\gamma_n):=\sum_{G\in\mathcal C_n}\ \prod_{\{i,j\}\in E(G)}f_{ij}.$$

For $n=1$, $\mathcal C_1$ contains the one-vertex graph and the empty edge product equals $1$. These are finite polynomial and coefficient definitions; they assert no convergence.

## Definition references

[[def-complex-numbers-and-arithmetic]]

