---
id: def-knot-a-polynomial
kind: definition
title: The ordinary knot A-polynomial
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 8
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - thm-knot-exterior-homology-and-longitude
  - lem-knot-boundary-eigenvalue-locus-defined-over-q
  - lem-laurent-algebraic-curve-has-principal-equation
justified_by:
  - lem-knot-boundary-eigenvalue-locus-defined-over-q
  - lem-laurent-algebraic-curve-has-principal-equation
proof_strategy: not-applicable
axiom_use: Uses full AC through the finite Wirtinger presentation, the
  preferred-longitude homology supplier, and the affine dimension/localization
  results in the Laurent curve lemma.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: John A. Baldwin and Steven Sivek, Torus knots, the A-polynomial, and
        SL(2,C), §2.3
      url: https://arxiv.org/pdf/2405.19197v2
    - title: Cooper, Culler, Gillet, Long, and Shalen, Plane curves associated to
        character varieties of 3-manifolds, §§2–3
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
---

## Definition

Assume full AC and let $K\subset S^3$ be a smooth oriented knot with exterior $E_K$, positive meridian $\mu$, and preferred longitude $\lambda$. Define $\mathcal E_K\subset(\mathbb C^*)^2$ to consist of all pairs $(M,L)$ for which some representation $\rho:\pi_1(E_K)\to SL_2(\mathbb C)$ has a common invariant line on which $\rho(\mu)$ acts by $M$ and $\rho(\lambda)$ acts by $L$. The Zariski closure is the smallest Zariski-closed algebraic subset containing $\mathcal E_K$; let $V_K$ be the union of its one-dimensional irreducible components, where an irreducible component is a maximal irreducible closed subset. Zero-dimensional image components are omitted. The **ordinary A-polynomial** $A_K(M,L)$ is the Laurent polynomial generating the vanishing ideal of $V_K$, chosen square-free (no repeated irreducible factors) and with primitive integer coefficients (their greatest common divisor is one). It is determined up to multiplication by $\pm M^aL^b$ for $a,b\in\mathbb Z$. Its reduced curve includes the abelian component $L=1$; equivalently, its representative in $\mathbb Z[M,L]$ is divisible by $L-1$.

## Definition references

[[def-sl-two-character-variety-and-peripheral-eigenvalues|Character variety and peripheral eigenvalues]]

[[thm-knot-exterior-homology-and-longitude|Exterior homology and the preferred longitude]]

[Baldwin and Sivek, §2.3](https://arxiv.org/pdf/2405.19197v2)

[Cooper, Culler, Gillet, Long, and Shalen, §§2–3](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)
