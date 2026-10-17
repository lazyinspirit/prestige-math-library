---
id: def-xd-finite-column-generator
kind: definition
title: "Finite column generator"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: [def-matrix-space, def-matrix-product-and-identity-matrix]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ward Whitt, Continuous-Time Markov Chains, full lecture notes (2006)"
      url: "https://www.columbia.edu/~ww2040/4106S11/CTMCchapter121906.pdf"
      locator: "§§3.1–3.2, PDF pp. 6–9; transpose the notes' row-vector convention to the column convention defined here."
    - title: "Brian Munsky and Mustafa Khammash, The Finite State Projection Algorithm for the Solution of the Chemical Master Equation"
      url: "https://www.engr.colostate.edu/~munsky/Papers/JChemPhys_124_044104.pdf"
      locator: "§II, equations (2.4)–(2.6), printed pp. 044104-2–044104-3; column probability vectors and column-sum-zero generators."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Definition

Let $S=\{0,1,\ldots,n-1\}$ with $n\ge1$. Identify its real matrices with $M_n(\mathbb R)$, the finite matrix space with row and column indices in $S$ from [[def-matrix-space]], and use the matrix-product and identity conventions of [[def-matrix-product-and-identity-matrix]]. A **finite column generator** on $S$ is a real matrix $Q=(q_{ij})\in M_n(\mathbb R)$ satisfying

$$q_{ij}\ge0\quad(i\ne j),\qquad \sum_{i<n}q_{ij}=0\quad(j<n).$$

The column index $j$ is the source state and the row index $i$ is the destination state: for $i\ne j$, $q_{ij}$ is the transition rate from $j$ to $i$. The exit rate from $j$ is

$$r_j:=-q_{jj}=\sum_{i\ne j}q_{ij}\ge0.$$

A **column probability vector** is $p\in\mathbb R^n$ with $p_i\ge0$ for each $i$ and $\sum_{i<n}p_i=1$. A **subprobability vector** has the same coordinatewise nonnegativity and has coordinate sum at most one. These conventions are used throughout this page.
