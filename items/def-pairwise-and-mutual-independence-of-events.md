---
id: def-pairwise-and-mutual-independence-of-events
kind: definition
title: "Independent events, pairwise independence, and mutual independence of a finite family"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-probability-space-and-event]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. Matousek and J. Vondrak, The Probabilistic Method, Definition 1.1.4"
      url: "https://www.cs.cmu.edu/~15850/handouts/matousek-vondrak-prob-ln.pdf"
    - title: "M. Bucic, Probabilistic Method, Definitions A.14-A.15"
      url: "https://homepage.univie.ac.at/matija.bucic/wp-content/uploads/2026/01/Probabilistic_Method.pdf"
pipeline_run: null
---

## Definition

Two events $A$ and $B$ are **independent** when
$$\mathbb P(A\cap B)=\mathbb P(A)\mathbb P(B).$$

A finite family $(A_i)_{i\in I}$ is **pairwise independent** when every two distinct members are independent. It is **mutually independent** when for every nonempty $J\subseteq I$,
$$\mathbb P\!\left(\bigcap_{j\in J}A_j\right)=\prod_{j\in J}\mathbb P(A_j).$$
The empty-subfamily identity is also valid under the conventions $\mathbb P(\Omega)=1$ and $\prod_{j\in\varnothing}\mathbb P(A_j)=1$.
