---
id: alg-finite-markov-closed-class-decomposition
kind: algorithm
title: "Finite Markov closed-class graph decomposition"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-finite-column-stochastic-matrix-and-law]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Charles M. Grinstead and J. Laurie Snell, Introduction to Probability, Chapter 11"
      url: "https://math.dartmouth.edu/~prob/prob/OLD/prob.pdf"
      locator: "§11.2, canonical form for transient and absorbing states, printed pp. 416–418; finite communicating and absorbing classes."
verification:
  precheck: n/a
axiom_use: "No choice principle is used; every loop is over the finite state set."
---

## Definition

**Graph convention.** For any finite real column-stochastic matrix $P$ on $S=\{1,\ldots,n\}$, the positive-transition graph has a directed edge $j\to i$ exactly when $P_{ij}>0$. This defines the communicating classes and closed classes for real matrices, whether or not their entries can be computed exactly.

**Algorithm input.** An exact finite real matrix $P\in\mathbb R^{n\times n}$ with indexed state set $S=\{1,\ldots,n\}$ and $n\ge1$, represented in an exact arithmetic model that terminates on the required comparisons with zero. If an entry is negative or any column sum differs from one, return `invalid-input`. Rational entries provide an effective instance of this exact-comparison interface. A rounded input without certified sign and column-sum decisions is outside this procedure's input contract.

**Output.** A partition of $S$ into the strongly connected components of the directed graph of positive transitions, the list of closed communicating classes, and the remaining transient states.

**Procedure.** Form the usual row-transition matrix $K=P^{\mathsf T}$. Initialize a Boolean relation $R_{ij}$ to true exactly when $i=j$ or $K_{ij}>0$. For $k=1,\ldots,n$, and then for every $i,j$, replace $R_{ij}$ by $R_{ij}\lor(R_{ik}\land R_{kj})$. Place $i,j$ in the same component exactly when both $R_{ij}$ and $R_{ji}$ are true. Mark a component $C$ closed exactly when $K_{ij}=0$ for every $i\in C$ and $j\notin C$. Return the closed components, the nonclosed components, and their state labels in increasing order. The procedure uses finitely many exact comparisons and Boolean updates; no sparse storage format or cost bound is asserted. It is a graph computation under the exact-comparison interface, not a claim that positivity of arbitrary unrepresented real numbers can be decided from rounded approximations.
