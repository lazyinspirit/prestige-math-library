---
id: def-swan-conductor-of-an-l-adic-inertia-representation
kind: definition
title: "Swan conductor of an l-adic inertia representation"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 7
deps:
  - def-absolute-upper-ramification-filtration-at-a-curve-point
  - thm-herbrand-quotient-compatibility-for-geometric-local-fields
  - thm-geometric-wild-inertia-equals-positive-upper-ramification
  - lem-l-adic-representation-of-geometric-wild-inertia-has-finite-image
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Grothendieck et al., SGA 5, Exposé X, §§4–7 (full text edition)"
      url: https://grothendiecksga.com/read/sga5/en/X-4.html
    - title: "E. Fouvry, E. Kowalski, and Ph. Michel, Trace functions over finite fields and applications"
      url: https://people.math.ethz.ch/~kowalski/elements.pdf
verification:
  precheck: n/a
---
## Definition

Let $K_x$ be a geometric local field of residue characteristic $p$, let $\ell\ne p$, and let $V$ be a finite-dimensional continuous $\mathbb Q_\ell$-representation of $G_{K_x}$. The positive upper ramification groups act through the finite wild inertia image. Define the **Swan conductor** by
$$\operatorname{Sw}_x(V):=\int_{0}^{\infty}\operatorname{codim}_{\mathbb Q_\ell}\bigl(V^{G_{K_x}^v}\bigr)\,dv.$$
For a representation of a fixed finite Galois quotient, the integral is taken over its finite upper filtration. The independence of this value from the chosen quotient follows from Herbrand's quotient theorem [[thm-herbrand-quotient-compatibility-for-geometric-local-fields]].

## Definition references

[[def-absolute-upper-ramification-filtration-at-a-curve-point|Absolute upper ramification filtration at a curve point]]

[[thm-geometric-wild-inertia-equals-positive-upper-ramification|Geometric wild inertia is the positive upper ramification subgroup]]

[[lem-l-adic-representation-of-geometric-wild-inertia-has-finite-image|Continuous l-adic representations have finite geometric wild inertia image]]

[SGA 5, Exposé X §4.2](https://grothendiecksga.com/read/sga5/en/X-4.html)

[Fouvry–Kowalski–Michel, *Trace functions over finite fields and applications*, §3.1](https://people.math.ethz.ch/~kowalski/elements.pdf)
