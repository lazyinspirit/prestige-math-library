---
id: def-c-one-map-and-local-inverse
kind: definition
title: "Continuously differentiable maps, local inverses, and local diffeomorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-total-derivative-in-euclidean-space, def-jacobian-matrix-and-gradient, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Tillmann, Notes of Lectures on Multivariable Calculus, Inverse and Implicit Function Theorems"
      url: "https://people.maths.ox.ac.uk/~tillmann/background-multvar.pdf"
pipeline_run: null
---

## Definition

Let $U\subseteq\mathbb R^m$ be open and $f:U\to\mathbb R^n$. The map $f$ is
**continuously differentiable**, or of class $C^1$, when it is totally
differentiable at every point of $U$ and the entries of its derivative matrix
are continuous functions on $U$.

For an open $U\subseteq\mathbb R^n$ and $a\in U$, a **local inverse of $f$ at
$a$** is a function $g:W\to V$ for open neighbourhoods $a\in V\subseteq U$
and $f(a)\in W\subseteq\mathbb R^n$ such that $f|_V:V\to W$ is bijective and
$g=(f|_V)^{-1}$. If both $f|_V$ and $g$ are $C^1$, this restriction is a
**local diffeomorphism** at $a$.
