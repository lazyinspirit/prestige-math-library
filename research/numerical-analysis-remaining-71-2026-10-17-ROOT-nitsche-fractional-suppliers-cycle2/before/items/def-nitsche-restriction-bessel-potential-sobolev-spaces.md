---
id: def-nitsche-restriction-bessel-potential-sobolev-spaces
kind: definition
title: Restriction Bessel-potential spaces on polyhedral domains
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps: [def-real-order-bessel-potential-sobolev-space, def-countable-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
---

## Definition

Assume Countable Choice. Let $s\ge0$ and let $D\subset\mathbb R^d$ be a nonempty open set. Use $H^s(\mathbb R^d)$ with the Bessel-potential completion convention of [[def-real-order-bessel-potential-sobolev-space]]. Define the **restriction space**
$$H^s(D):=\{U|_D:U\in H^s(\mathbb R^d)\},\qquad \|u\|_{H^s(D)}:=\inf\{\|U\|_{H^s(\mathbb R^d)}:U|_D=u\text{ a.e. on }D\}.$$
Two extensions represent the same element exactly when their restrictions agree almost everywhere on $D$. This is the convention for fractional-order spaces on the polyhedral domain and its affine simplex cells used in the Nitsche items on this page. No $C^1$ boundary or trace theorem is part of this definition.
