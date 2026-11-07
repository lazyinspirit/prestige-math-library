---
id: def-pointed-abel-jacobi-map-of-curve
kind: definition
title: The Pointed Abel–Jacobi Map of a Curve
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-algebraic-curve-over-field
  - def-jacobian-of-smooth-proper-curve
  - thm-picard-zero-represented-by-jacobian
  - def-degree-divisor-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: J. S. Milne, Abelian Varieties, version 2.0, Chapter III §§1–2, printed pp. 85–92
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: Bjorn Poonen, Rational Points on Varieties, §5.7.1, printed pp. 139–141
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
---

## Definition

Let $C/k$ be a smooth, proper, geometrically connected curve, let $P\in C(k)$, and let $J_C=\operatorname{Pic}^0_{C/k}$. Define the pointed Abel–Jacobi morphism $u_P:C\to J_C$ by the family of degree-zero classes $Q\mapsto[\mathcal O_C(Q-P)]$; on a test $k$-scheme $T$, the graph of a $T$-point $Q:T\to C$ gives the line bundle $\mathcal O_{C_T}(\Gamma_Q-\Gamma_P)$. It sends $P$ to the identity of $J_C$.

## Definition references

[Milne, canonical map to the Jacobian, Ch. III §2](https://www.jmilne.org/math/CourseNotes/AV.pdf)

[Poonen, Abel–Jacobi map and Picard schemes, §5.7.1](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[[def-jacobian-of-smooth-proper-curve]]

[[def-invertible-sheaf-of-cartier-divisor]]
