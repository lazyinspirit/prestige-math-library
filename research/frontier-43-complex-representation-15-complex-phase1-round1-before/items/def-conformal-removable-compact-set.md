---
id: def-conformal-removable-compact-set
kind: definition
title: Conformal removability of compact sets
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-complex-domain
  - def-conformal-equivalence-and-automorphism-group
  - def-homeomorphism-and-open-maps
  - def-mobius-transformation
  - def-riemann-sphere-holomorphic-charts
  - rem-riemann-sphere-one-point-compactification
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I, §16.1"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
    - title: "Malik Younsi, On removable sets for holomorphic functions, §1"
      url: "https://math.hawaii.edu/~myounsi/Removable.pdf"
dependency_level: 0
---

## Definition

Write $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ for the Riemann sphere ([[rem-riemann-sphere-one-point-compactification]]) with its standard holomorphic charts ([[def-riemann-sphere-holomorphic-charts]]). A compact set $K\subseteq\widehat{\mathbb C}$ is **globally conformally removable** (or **CH-removable**) if every homeomorphism $F:\widehat{\mathbb C}\to\widehat{\mathbb C}$ that is conformal on $\widehat{\mathbb C}\setminus K$ is a Möbius transformation ([[def-mobius-transformation]]). Here conformality on the complement is understood chartwise, on each of its open components; the underlying homeomorphism is as in [[def-homeomorphism-and-open-maps]].

For a compact set $K\subset\mathbb C$, the **neighborhood-local condition** is that for every open $U\subseteq\mathbb C$ containing $K$, each homeomorphic embedding $h:U\to\mathbb C$ that is conformal on $U\setminus K$ is conformal on $U$. This is Lyubich's local formulation. We record this condition separately from global CH-removability; their equivalence is not asserted here.

Global conformal removability is monotone under taking compact subsets: if $K$ is globally conformally removable and $K'\subseteq K$ is compact, then a homeomorphism conformal off $K'$ is also conformal off $K$, so it is Möbius. No monotonicity assertion for the neighborhood-local condition is used here.

The global condition is Möbius invariant: for every Möbius map $M$, $K$ is globally conformally removable if and only if $M(K)$ is. Indeed, conjugating a sphere homeomorphism by $M$ preserves its homeomorphism type and conformality off the corresponding compact set, and a conjugate of a Möbius transformation is Möbius.

No size condition is part of either definition. Positive-area nonremovability is a separate result proved later on the page. Neither definition nor the consequences above use a choice principle.
