---
id: def-emg-fx-matrix-harmonic-problem
kind: definition
title: "Positive matrix harmonic-map boundary problem"
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 0
deps:
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - def-invertible-matrix-and-general-linear-group
  - def-determinant-of-a-square-matrix
  - cor-square-matrix-invertible-iff-determinant-is-a-unit
  - cor-inverse-matrix-by-adjugate
  - def-ck-euclidean-maps-and-diffeomorphisms
dependency_roles:
  def-matrix-space: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  def-invertible-matrix-and-general-linear-group: mathematical-premise
  def-determinant-of-a-square-matrix: mathematical-premise
  cor-square-matrix-invertible-iff-determinant-is-a-unit: mathematical-premise
  cor-inverse-matrix-by-adjugate: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
reference: research/plan-einstein-maxwell-models-frontier-expansion-track.md#reduced-stationary-uniqueness-and-explicit-research-boundaries
sources:
  references:
    - title: "P. T. Chruściel, J. Lopes Costa and M. Heusler, Stationary Black Holes: Uniqueness and Beyond, Living Reviews in Relativity 15 (2012), article 7, arXiv:1205.6112v1"
      url: https://arxiv.org/pdf/1205.6112
      locator: "Section 7.1, PDF pp. 36–37, equations (7.1)–(7.3): Hermitian comparison matrices and the conserved-current identity; this item supplies its own Euclidean-domain statement."
    - title: "Markus Heusler, Black Hole Uniqueness Theorems, Cambridge Lecture Notes in Physics 6, Cambridge University Press (1996)"
      url: https://ru.djvu.online/file/ooXRsSuiVzYAO
      locator: "Chapter 10, §§10.2–10.3, printed pp. 169–173, equations (10.10)–(10.17): matrix identity, positivity representation and its restricted spacetime use. The complete book text was inspected on a digitized copy."
    - title: "Pawel O. Mazur, Black Hole Uniqueness Theorems, arXiv:hep-th/0101012v1 (2000; based on the 1986 GR11 plenary lecture)"
      url: https://arxiv.org/pdf/hep-th/0101012
      locator: "Sections II, IV and V, PDF pp. 2–3, 13–15 and 16–21: target-signature caveat, harmonic-map uniqueness context, and the global sigma-model divergence identity."
provenance:
  statement: ai-altered
  proof: not-applicable
---

## Definition

Let $d,n\in\mathbb N$ with $d,n\ge1$. Let $\Omega\subseteq\mathbb R^d$ be a nonempty bounded connected open set whose boundary is locally the graph of a smooth function. Here $C^\infty(\overline\Omega)$ means restriction of a smooth function on an open neighborhood of $\overline\Omega$. Use the matrix spaces $M_n(\mathbb C)$ and ordinary matrix multiplication. For $A\in M_n(\mathbb C)$ write $A^\dagger:=\overline A^{\mathsf T}$, and write $\operatorname{tr}A:=\sum_{j<n}A_{jj}$. A matrix $\Phi$ is **positive definite Hermitian** when $\Phi^\dagger=\Phi$ and $v^\dagger\Phi v$ is a positive real number for every nonzero $v\in\mathbb C^n$. Define

$$\mathcal P_n:=\{\Phi\in M_n(\mathbb C):\Phi\text{ is positive definite Hermitian and }\det\Phi=1\}.$$

The determinant is the determinant over $\mathbb C$. Every $\Phi\in\mathcal P_n$ is invertible because $\det\Phi=1$ is a unit; its inverse is smooth when $\Phi$ is a smooth matrix field because the adjugate formula reduces to polynomial entries when $\det\Phi=1$.

For a smooth map $\Phi:\overline\Omega\to\mathcal P_n$, define the matrix-valued one-form $d\Phi=\sum_{a=1}^d(\partial_a\Phi)\,dx^a$ by differentiating entries, and put $J:=\Phi^{-1}d\Phi=\sum_{a=1}^d J_a\,dx^a$. Its **matrix harmonic-map equation** in this item means exactly

$$\operatorname{div}J:=\sum_{a=1}^d\partial_aJ_a=0\quad\text{on }\Omega.$$

Fix a boundary datum $f:\partial\Omega\to\mathcal P_n$ that is the restriction of a smooth $M_n(\mathbb C)$-valued map on an open neighborhood of $\overline\Omega$. The **positive matrix Dirichlet boundary problem** is to find $\Phi\in C^\infty(\overline\Omega,\mathcal P_n)$ satisfying the displayed equation on $\Omega$ and $\Phi|_{\partial\Omega}=f$. Its comparison problem concerns two such solutions with the same datum, so $\Phi_0|_{\partial\Omega}=\Phi_1|_{\partial\Omega}=f$. No existence of a solution for a supplied datum is asserted. The Euclidean coordinates, matrix size, determinant normalization, and divergence convention are part of the definition. No spacetime metric, symmetry reduction, physical postulate, or spacetime uniqueness theorem is included.

## Definition references

[[def-matrix-space]]

[[def-matrix-product-and-identity-matrix]]

[[def-invertible-matrix-and-general-linear-group]]

[[def-determinant-of-a-square-matrix]]

[[cor-square-matrix-invertible-iff-determinant-is-a-unit]]

[[cor-inverse-matrix-by-adjugate]]

[[def-ck-euclidean-maps-and-diffeomorphisms]]
