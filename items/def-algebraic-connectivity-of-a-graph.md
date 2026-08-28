---
id: def-algebraic-connectivity-of-a-graph
kind: definition
title: "The algebraic connectivity of a finite simple graph"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-laplacian-kernel-dimension-counts-components,
       thm-laplacian-is-positive-semidefinite-and-annihilates-ones,
       cor-real-spectral-theorem-for-self-adjoint-endomorphisms]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "O. Pikhurko, Algebraic Methods in Combinatorics, Section 14.2"
      url: "https://opikhurko.warwick.ac.uk/AlgMet.pdf"
---

## Definition

Let $G$ be a finite simple graph with $n=|V(G)|\ge2$, and let $L(G)$ be its
Laplacian matrix. Because $L(G)$ is real symmetric and positive semidefinite,
its eigenvalues are real and nonnegative
([[cor-real-spectral-theorem-for-self-adjoint-endomorphisms]],
[[thm-laplacian-is-positive-semidefinite-and-annihilates-ones]]). Moreover,
$0$ is an eigenvalue by
[[thm-laplacian-kernel-dimension-counts-components]], so the eigenvalues may be
listed in weakly increasing order as

$$0=\mu_1(G)\le\mu_2(G)\le\cdots\le\mu_n(G).$$

The second eigenvalue $\mu_2(G)$ is the **algebraic connectivity** of $G$.

This quantity is defined only for graphs with at least two vertices, because a
one-vertex graph has only one Laplacian eigenvalue.
