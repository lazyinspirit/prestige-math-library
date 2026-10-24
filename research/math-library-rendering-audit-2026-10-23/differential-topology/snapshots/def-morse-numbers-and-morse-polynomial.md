---
id: def-morse-numbers-and-morse-polynomial
kind: definition
title: "Morse numbers and the Morse polynomial"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-morse-function-and-excellent-morse-function, def-nondegenerate-critical-point-nullity-index-and-coindex, def-critical-point-and-critical-value-of-a-smooth-function, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points, def-smooth-manifold, def-compact-space]
justified_by: []
aliases: []
landmark: false
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Liviu Nicolaescu, An Invitation to Morse Theory (2nd ed.), Chapter 2 Section 2.3, printed pp. 46-53 (PDF pp. 56-63)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Chapter 4 Section 4.4, printed pp. 88-91 (PDF pp. 98-100)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
dependency_level: 0
---

## Definition

Let $M$ be a closed smooth $n$-manifold
([[def-smooth-manifold]], [[def-compact-space]]) and let $f:M\to\mathbb R$ be a
Morse function ([[def-morse-function-and-excellent-morse-function]]). Write
$\operatorname{Crit}(f)$ for the set of critical points of $f$
([[def-critical-point-and-critical-value-of-a-smooth-function]]) and
$\operatorname{ind}(p)$ for the index of a nondegenerate critical point $p$
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]). For every
integer $k$ the **Morse number** of $f$ in degree $k$ is
$$m_k(f):=\#\{\,p\in\operatorname{Crit}(f):\operatorname{ind}(p)=k\,\}.$$

Each $m_k(f)$ is a finite nonnegative integer, and $m_k(f)=0$ unless
$0\le k\le n$. The **Morse polynomial** of $f$ is
$$M_f(t):=\sum_{k=0}^{n}m_k(f)\,t^k\in\mathbb Z[t],$$
a polynomial with nonnegative integer coefficients and
$M_f(1)=\#\operatorname{Crit}(f)$.

The index is the number of negative squares of the Hessian in the library's
convention ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]). The
definition is purely geometric: no field, coefficient ring, or orientation
enters, and the empty and zero-dimensional cases are included.

## Remarks

- **Well-definedness.** Finiteness of each $m_k(f)$ is
  [[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]:
a Morse function on a compact manifold has only finitely many critical points,
so the displayed cardinality is a nonnegative integer. The index of a
nondegenerate critical point is an integer in $[0,n]$ because it is the number
of negative squares of a symmetric bilinear form on the $n$-dimensional space
$T_pM$ ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]); this is
why the sum defining $M_f$ is finite and why $M_f$ has degree at most $n$.
- **Conventions.** A Morse function on a closed manifold is a Morse function in
the sense of [[def-morse-function-and-excellent-morse-function]] on a compact
manifold without boundary; no excellent condition is required here. The
zero-dimensional case $n=0$ is the case of a finite set of points, where
$m_0(f)=\#M$ and $M_f(t)=\#M$.
- The Morse numbers depend only on $f$, not on any field; the $F$-Betti numbers
compared with them below do depend on the coefficient field
([[def-poincare-polynomial-over-a-field]]).
