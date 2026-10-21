---
id: ex-knot-kt-22-worked-cases
kind: example
title: "Worked cases for metabolic Seifert forms"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 11
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-integral-witt-and-seifert-isometric-structures
  - lem-positive-hopf-plumbing-has-trefoil-seifert-matrix
  - lem-invertible-seifert-matrix-gives-rational-isometric-structure
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
      locator: "§8.A, printed pp. 200–202; trefoil Seifert matrix example"
    - title: "Charles Livingston, A Survey of Classical Knot Concordance"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.2, Definitions 2.5 and Theorem 2.6, printed p. 323"
---

## Example

Assume full AC. The disk Seifert surface of the oriented unknot has the rank-zero Seifert lattice and is metabolic. In the positive-push convention, the standard positive Hopf-band plumbing for the right-handed trefoil has matrix $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$. Since $V$ is invertible, its rational isometric structure has symmetric form $B=V+V^T=\begin{pmatrix}-2&-1\\-1&-2\end{pmatrix}$, which is negative definite; the integral Seifert lattice is not metabolic.

## Example references

[[def-knot-seifert-pairing-and-matrix|The positive-push Seifert matrix convention]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The definition of a metabolic Seifert lattice]]

[[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix|The positive Hopf-plumbing matrix calculation]]

## Facts & Assumptions

**Given:** Full AC, the disk Seifert surface of the oriented unknot, and the standard positive Hopf-plumbing Seifert surface of the right-handed trefoil.

[A1] Full AC is the choice-function axiom used by the knot Seifert-pairing interface. [[def-axiom-of-choice]]

[F1] The rank-zero lattice is allowed; its zero subgroup is a primitive rank-zero metabolizer. [[def-metabolic-seifert-form-and-algebraic-knot-concordance]]

[F2] The positive Hopf-plumbing basis has matrix $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$. [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]

[F3] Since $V$ is invertible, $(V+V^T,V^{-1}V^T)$ satisfies the rational isometric-structure definition. [[def-integral-witt-and-seifert-isometric-structures]], [[lem-invertible-seifert-matrix-gives-rational-isometric-structure]]

[F4] A metabolic lattice must have a rank-half direct summand on which the Seifert pairing vanishes. [[def-metabolic-seifert-form-and-algebraic-knot-concordance]]

## Proof

1.1 The disk has $H_1=0$, so its Seifert matrix is the empty matrix. The subgroup $M=0$ has rank zero, is a direct summand, and the pairing vanishes on it. By [F1], this is metabolic and represents the identity class. [A1, F1, given, algebra]

2.1 By [F2] and [F3], the trefoil's rational structure has symmetric form $B=\begin{pmatrix}-2&-1\\-1&-2\end{pmatrix}$. For a vector $(m,n)\in\mathbb Q^2$, $B((m,n),(m,n))= -2(m^2+mn+n^2)=-2(m+n/2)^2-3n^2/2$, which is negative whenever $(m,n)\ne(0,0)$. Thus the rational structure has no nonzero isotropic line. For an integral vector the Seifert self-pairing is $-(m^2+mn+n^2)<0$, so no rank-one subgroup has identically zero Seifert pairing, and [F4] rules out an integral metabolizer. [F2, F3, F4, algebra] ∎
