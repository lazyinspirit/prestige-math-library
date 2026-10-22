---
id: lem-two-commuting-complex-2x2-matrices-are-simultaneously-triangularizable
kind: lemma
title: Two commuting complex 2x2 matrices are simultaneously triangularizable
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: The proof uses only that the characteristic polynomial of a complex
  2x2 matrix has a root.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, §2.2
      url: https://arxiv.org/pdf/2103.14151
    - title: Stephan Tillmann, Varieties associated to 3-manifolds, §§4.2–4.4
      url: https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf
---

## Statement

Let $A,B\in M_2(\mathbb C)$ commute. There is a one-dimensional subspace of $\mathbb C^2$ invariant under both $A$ and $B$. Equivalently, in a basis beginning with a nonzero vector in that subspace, both matrices are upper triangular.

## Statement references

[Bénard, Florens, and Rodau, §2.2](https://arxiv.org/pdf/2103.14151)

[Tillmann, §§4.2–4.4](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Two commuting complex $2\times2$ matrices $A,B$.

[F1] Every complex $2\times2$ matrix has an eigenvalue and a nonzero eigenspace because its characteristic polynomial has a complex root.

## Proof

1.1 If $A$ is scalar, choose an eigenvector of $B$ using [F1]; its span is preserved by $A$ and $B$. [F1, cases]

1.2 If $A$ is not scalar, choose an eigenvalue $\lambda$ of $A$. Its eigenspace $E_\lambda$ is nonzero and has dimension one, since a two-dimensional eigenspace would force $A=\lambda I$. For $v\in E_\lambda$, commutation gives $A(Bv)=B(Av)=\lambda Bv$, so $Bv\in E_\lambda$; hence this line is invariant under both matrices. [F1, given, algebra]

2.1 A basis beginning with a nonzero vector in the common invariant line makes both matrices upper triangular. [step 1.1, step 1.2, algebra] ∎
