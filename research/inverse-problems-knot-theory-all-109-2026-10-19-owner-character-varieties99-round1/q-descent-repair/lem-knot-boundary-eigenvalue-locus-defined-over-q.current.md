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
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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

[F3] An arbitrary subset of a finite-dimensional algebraic torus stable under all coordinatewise automorphisms of $\mathbb C/\mathbb Q$ has radical vanishing ideal equal to the scalar extension of a radical rational ideal, by the actual finite row-reduction argument in [[lem-automorphism-stable-laurent-ideals-descend-to-rational-coefficients]]. This applies to the point set itself; its image need not already be closed.

## Proof

1.1 Fix an automorphism $\sigma$ of $\mathbb C$ over $\mathbb Q$. If generator matrices $A_1,\ldots,A_n$ define a representation of the given presentation, then their entrywise images $\sigma A_1,\ldots,\sigma A_n$ do too: determinants and all relator equations are integer-polynomial equations by [F1]. Word evaluation commutes with $\sigma$, including inverse letters because their adjugate formulas have integer coefficients. Thus $\sigma\rho$ is again a representation, with peripheral matrices $\sigma(\rho(\mu))$ and $\sigma(\rho(\lambda))$. [F1, F2, given, algebra]

2.1 Suppose $(M,L)\in\mathcal E_K$. A common eigenline can be represented by one nonzero vector $v\in\mathbb C^2$, with $\rho(\mu)v=Mv$ and $\rho(\lambda)v=Lv$. Applying $\sigma$ gives the same equations for $\sigma\rho$, the nonzero vector $\sigma v$, and nonzero eigenvalues $\sigma M,\sigma L$. Hence $(\sigma M,\sigma L)\in\mathcal E_K$. Applying the inverse automorphism proves equality $\sigma(\mathcal E_K)=\mathcal E_K$. This treats both eigenline charts at once; it does not assume a preferred eigenvector, an algebraic section of eigenlines or a closed projection image. [step 1.1, given, algebra]

3.1 By [F3], the radical vanishing ideal of the closure of $\mathcal E_K$ is the extension of its rational contraction, and that contraction is radical. This is exactly the stated meaning of being defined over $\mathbb Q$. In particular reduction of the image introduces no unproved field-of-definition step: it is the point-set vanishing ideal to which the finite-dimensional row argument was applied. The statement retains its full-AC branch through [F3]; all matrix and eigenvector operations in steps 1.1–2.1 are finite. [F3, step 1.1, step 2.1, construct] ∎
