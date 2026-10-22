---
id: cex-knot-kt-22-boundary-case
kind: counterexample
title: "Unimodular skew part does not force metabolicity"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 10
deps:
  - def-knot-seifert-pairing-and-matrix
  - def-metabolic-seifert-form-and-algebraic-knot-concordance
  - def-integral-witt-and-seifert-isometric-structures
  - lem-rational-isotropic-subspace-saturates-to-integral-metabolizer
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
      locator: "§2.2, Definition 2.5, printed p. 323"
---

## Statement refuted

Assume full AC. The false claim is: every positive-rank integral Seifert lattice with unimodular alternating part is metabolic. The right-handed trefoil's positive-push Seifert lattice has $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$ and $V-V^T=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. Its invertible matrix gives the rational isometric structure with $B=V+V^T=\begin{pmatrix}-2&-1\\-1&-2\end{pmatrix}$, which is negative definite; the rational extension of $V$ has no isotropic line, so the rational-to-integral saturation lemma has no input. No rank-one integral subgroup has zero Seifert self-pairing, so the lattice is not metabolic.

## Statement references

[[def-knot-seifert-pairing-and-matrix|The positive-push matrix convention]]

[[def-metabolic-seifert-form-and-algebraic-knot-concordance|The definition of metabolicity]]

[[def-integral-witt-and-seifert-isometric-structures|The rational isometric-structure convention]]

[[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix|The trefoil matrix from positive Hopf plumbing]]

## Facts & Assumptions

**Given:** Full AC and the positive-push Seifert matrix of the right-handed trefoil.

[A1] Full AC is the choice-function axiom used by the knot Seifert-pairing interface. [[def-axiom-of-choice]]

[F1] The positive Hopf plumbing has matrix $V=\begin{pmatrix}-1&0\\-1&-1\end{pmatrix}$. [[lem-positive-hopf-plumbing-has-trefoil-seifert-matrix]]

[F2] A metabolic rank-two lattice must have a rank-one subgroup on which $V$ vanishes, and hence every vector in that subgroup has zero self-pairing. [[def-metabolic-seifert-form-and-algebraic-knot-concordance]]

[F3] Since $V$ is invertible, $(V+V^T,V^{-1}V^T)$ satisfies the rational isometric-structure definition. [[def-integral-witt-and-seifert-isometric-structures]], [[lem-invertible-seifert-matrix-gives-rational-isometric-structure]]

[F4] A rational isotropic line for an integral bilinear form saturates to a rank-one integral direct summand with zero restriction. [[lem-rational-isotropic-subspace-saturates-to-integral-metabolizer]]

## Proof

1.1 From [F1], $V-V^T=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ has determinant $1$, so this is a positive-rank integral Seifert lattice satisfying the false claim's hypothesis. [A1, F1, given, algebra]

2.1 By [F3], the associated rational form is $B=\begin{pmatrix}-2&-1\\-1&-2\end{pmatrix}$. For every nonzero $(m,n)\in\mathbb Q^2$, $B((m,n),(m,n))= -2(m^2+mn+n^2)=-2(m+n/2)^2-3n^2/2<0$, so there is no rational isotropic line to which [F4] applies. In particular, for every nonzero integral vector the Seifert self-pairing $-(m^2+mn+n^2)$ is negative; [F2] rules out a rank-one metabolizer. This lattice refutes the claim. [F2, F3, F4, algebra] ∎
