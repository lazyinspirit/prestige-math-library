---
id: def-orthogonal-vectors-sets-and-orthonormal-bases
kind: definition
title: "Orthogonal vectors and subspaces, orthogonal and orthonormal sets, and orthonormal bases"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inner-product-space, def-inner-product-norm, def-linear-basis]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: 'Sheldon Axler, Linear Algebra Done Right, 4th ed., §§6A–6B'
      url: 'https://linear.axler.net/LADR4e.pdf'
    - title: 'Sergei Treil, Linear Algebra Done Wrong, Ch. 5, §§5.1–5.3'
      url: 'https://www.math.brown.edu/streil/papers/LADW/HTML_2026_04-30/Ch5.html'
pipeline_run: null
---

## Definition

Vectors $u,v$ in an inner product space ([[def-inner-product-space]]) are **orthogonal**, written $u\perp v$, if $\langle u,v\rangle=0$. Two subspaces are orthogonal if every vector in one is orthogonal to every vector in the other.

A list or set of vectors is **orthogonal** if every two distinct members are orthogonal. It is **orthonormal** if it is orthogonal and every member has induced norm ([[def-inner-product-norm]]) equal to $1$. An **orthonormal basis** is an ordered basis ([[def-linear-basis]]) that is an orthonormal list.

The empty list is orthonormal and is the orthonormal basis of the zero space. A one-element list is orthogonal; it is orthonormal exactly when its vector has norm $1$.
