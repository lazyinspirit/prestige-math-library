---
id: def-reference-finite-element-and-unisolvent-dofs
kind: definition
title: Reference finite elements and unisolvent degrees of freedom
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Joachim Schöberl, Numerical Methods for Partial Differential Equations, Chapter 4
      url: https://jschoeberl.github.io/iFEM/_downloads/900feda304f95ee42fd24abe742d7564/numpde.pdf
      locator: "Definition 64, printed p. 54: finite-element triple and dual nodal basis."
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 11, “Local interpolation on affine meshes”
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap11.pdf
      locator: "§11.4, printed pp. 123–125: bounded reference interpolation and polynomial reproduction hypotheses."
verification:
  precheck: n/a
---

## Definition

Let $d\ge1$, let $\widehat K\subset\mathbb R^d$ be a nonempty bounded open
reference cell, let $q\ge1$ be an integer, and let
$\mathbb K\in\{\mathbb R,\mathbb C\}$. A **reference finite element** is a
triple $(\widehat K,\widehat P,\widehat\Sigma)$ where $\widehat P$ is an
$N$-dimensional subspace of $[C(\overline{\widehat K};\mathbb K)]^q$ for
$N\in\mathbb N_0$ and
$\widehat\Sigma=(\widehat\sigma_1,\ldots,\widehat\sigma_N)$ is a list of
linear functionals on $\widehat P$ for which
$$J_{\widehat\Sigma}:\widehat P\to\mathbb K^N,\qquad J_{\widehat\Sigma}(p):=(\widehat\sigma_1(p),\ldots,\widehat\sigma_N(p)),$$
is bijective. The functionals are the **degrees of freedom** and the triple
is **unisolvent**. Its **shape functions** are the unique dual basis
$\widehat\phi_1,\ldots,\widehat\phi_N\in\widehat P$ satisfying
$\widehat\sigma_i(\widehat\phi_j)=\delta_{ij}$.

If $X$ is a vector space of functions on $\widehat K$ containing
$\widehat P$ and each $\widehat\sigma_i$ has a well-defined bounded linear
extension to $X$, the associated **reference interpolation operator** is
$$\widehat I:X\to\widehat P,\qquad \widehat I v:=\sum_{i=1}^N\widehat\sigma_i(v)\widehat\phi_i.$$
The definition of a reference finite element does not assert that any
particular list of functionals is unisolvent or bounded on a given Sobolev
space; those are separate proof obligations. For $N=0$, $\widehat P=\{0\}$,
$\mathbb K^0=\{0\}$, the empty list gives the unique bijection between these
zero spaces, and the shape-function list is empty. The corresponding
interpolation formula is the empty sum, hence the zero map into $\{0\}$.
