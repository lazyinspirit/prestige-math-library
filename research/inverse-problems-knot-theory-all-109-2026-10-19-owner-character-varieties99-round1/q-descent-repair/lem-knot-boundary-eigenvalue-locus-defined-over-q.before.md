---
id: lem-knot-boundary-eigenvalue-locus-defined-over-q
kind: lemma
title: "The peripheral eigenvalue locus is defined over Q"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - lem-sl2-representation-variety-is-affine
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - thm-knot-wirtinger-presentation-correctness
  - def-knot-meridian-and-preferred-longitude
  - thm-q-definedness-of-peripheral-eigenvalue-locus
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "D. Cooper, M. Culler, H. Gillet, D. D. Long, and P. B. Shalen, Plane curves associated to character varieties of 3-manifolds, §§2–3"
      url: "https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf"
    - title: "Stephan Tillmann, Varieties associated to 3-manifolds, §§4.2–4.8"
      url: "https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf"
---

## Statement

Assume full AC. Let $K\subset S^3$ be a smooth oriented knot with a finite Wirtinger presentation by words in generators and their inverses, and let $\mu,\lambda$ be its marked meridian and preferred-longitude words. Let $\mathcal E_K\subset(\mathbb C^*)^2$ consist of the pairs $(M,L)$ for which some representation $\rho:\pi_1(E_K)\to SL_2(\mathbb C)$ has a common eigenline for $\rho(\mu)$ and $\rho(\lambda)$ with eigenvalues $M$ and $L$. Then the Zariski closure of $\mathcal E_K$ is defined over $\mathbb Q$: its radical vanishing ideal in $\mathbb C[M^{\pm1},L^{\pm1}]$ is obtained by extending scalars from a radical ideal in $\mathbb Q[M^{\pm1},L^{\pm1}]$.

## Statement references

[Cooper, Culler, Gillet, Long, and Shalen, §§2–3](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

[Tillmann, §§4.2–4.8](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC, a finite presentation of $G=\pi_1(E_K)$ over $\mathbb Z$, and the marked peripheral words $\mu,\lambda$.

[F1] The representation variety is cut out by polynomial matrix equations with integer coefficients after inverse letters are replaced by adjugates ([[lem-sl2-representation-variety-is-affine]]).

[F2] The meridian and preferred longitude are commuting peripheral words in the finite knot-group presentation ([[thm-knot-wirtinger-presentation-correctness]], [[def-knot-meridian-and-preferred-longitude]]).

[A1] The incidence projection from the representation-eigenline locus to $(\mathbb C^*)^2$ must be shown algebraic, and its image closure must be shown to descend to $\mathbb Q$. The local elimination/descent proof is not supplied; the proposed missing supplier is [[thm-q-definedness-of-peripheral-eigenvalue-locus]].

## Proof obligation

On either affine chart of the eigenline $\mathbb P^1$, the equations $\rho(\mu)v=Mv$ and $\rho(\lambda)v=Lv$, together with the relator equations, have coefficients in $\mathbb Z$. The unresolved step is to prove that the Zariski closure of the projected complex points is the scalar extension of a radical ideal over $\mathbb Q$, including the passage from the two charts and from the incidence scheme to its reduced image. Until that elimination and field-of-definition argument is supplied, the rational-structure hypothesis of [[lem-laurent-algebraic-curve-has-principal-equation]] has not been verified for this locus. The item is escalated.
