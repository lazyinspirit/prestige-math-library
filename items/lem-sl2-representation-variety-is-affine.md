---
id: lem-sl2-representation-variety-is-affine
kind: lemma
title: The SL2 representation variety is affine
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 6
deps:
  - def-sl-two-character-variety-and-peripheral-eigenvalues
  - thm-knot-wirtinger-presentation-correctness
justified_by: []
proof_strategy: direct
axiom_use: The finite polynomial presentation and adjugate inverse formula are
  choice-free; the finite Wirtinger presentation is supplied under the stated AC
  branch.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Léo Bénard, François Florens, and Adrien Rodau, A slope invariant and the
        A-polynomial of knots, §2.1
      url: https://arxiv.org/pdf/2103.14151
    - title: Stephan Tillmann, Varieties associated to 3-manifolds, §4.2
      url: https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf
---

## Statement

Assume full AC and let $G=\pi_1(E_K)=\langle g_1,\ldots,g_n\mid r_1,\ldots,r_m\rangle$ be a finite presentation of a knot-exterior group. The set of homomorphisms $G\to SL_2(\mathbb C)$ is the affine algebraic subset of $SL_2(\mathbb C)^n$ cut out by the matrix-entry equations $r_j(A_1,\ldots,A_n)=I_2$ for $1\le j\le m$. After each inverse letter is replaced by the adjugate of its determinant-one matrix, these equations have integer coefficients in the matrix-entry coordinates.

## Statement references

[Bénard, Florens, and Rodau, §2.1](https://arxiv.org/pdf/2103.14151)

[Tillmann, §4.2](https://www.maths.usyd.edu.au/u/tillmann/papers/course.pdf)

## Facts & Assumptions

**Given:** Full AC and the finite presentation $G=\langle g_1,\ldots,g_n\mid r_1,\ldots,r_m\rangle$.

[F1] The knot group has a finite Wirtinger presentation ([[thm-knot-wirtinger-presentation-correctness]]).

[F2] If $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb C)$, then $A^{-1}=\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$, an integer-polynomial expression in its entries: multiplying by the displayed matrix gives $\det(A)I=I$ entrywise.

## Proof

1.1 Work with the fixed finite presentation in the Statement. Fact [F1] ensures the existence of finite presentations for the knot group, but no change from the specified presentation to different Wirtinger generators is presumed here. Write each generator matrix as four coordinate variables and impose the polynomial determinant equation $\det(A_i)=1$. These finitely many equations cut out $SL_2(\mathbb C)^n$ in affine $4n$-space. [F1, given, algebra]

2.1 Evaluate each relator word by matrix multiplication, replacing each inverse letter by the adjugate matrix from [F2]. Every entry of $r_j(A_1,\ldots,A_n)-I_2$ is therefore a polynomial in the coordinates. [F2, step 1.1, algebra]

3.1 A tuple in $SL_2(\mathbb C)^n$ satisfies all these matrix equations exactly when its generator assignment extends to a homomorphism from the presented group $G$. Hence their common zero set is precisely $\operatorname{Hom}(G,SL_2(\mathbb C))$, a closed algebraic subset of affine space. [given, step 1.1, step 2.1, algebra] ∎
