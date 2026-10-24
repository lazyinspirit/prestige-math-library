---
id: cor-the-character-table-is-square-and-invertible
kind: corollary
title: "The character table is square and invertible"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions, thm-second-column-orthogonality-relation-for-irreducible-complex-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Theorem 3.4.3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Statement

Let $G$ be a finite group. The character table of $G$ has as many rows as
columns, and the table matrix is invertible.

## Facts & Assumptions

**Given:** A finite group $G$ with irreducible characters $\chi_1,\dots,\chi_r$ and conjugacy-class representatives $g_1,\dots,g_s$.

[F1] The irreducible characters form an orthonormal basis of the class functions, so there are as many of them as there are conjugacy classes ([[thm-irreducible-complex-characters-form-an-orthonormal-basis-of-the-class-functions]]).

[F2] The columns of the character table satisfy the second orthogonality relation: $\sum_i\chi_i(g_a)\overline{\chi_i(g_b)}=|C_G(g_a)|\delta_{ab}$ ([[thm-second-column-orthogonality-relation-for-irreducible-complex-characters]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], $r$ equals the number of conjugacy classes of $G$, which is the number $s$ of columns; hence the table is square. [F1, given]

1.2 Rescale the $a$-th column of the table by the positive number $1/\sqrt{|C_G(g_a)|}$, forming the matrix $U_{ia}=\chi_i(g_a)/\sqrt{|C_G(g_a)|}$. By [F2], distinct columns of $U$ are orthogonal and each column has squared norm $1$, so $U$ has orthonormal columns. [F2, given, algebra]

2.1 A square matrix with orthonormal columns has linearly independent columns, hence is invertible. Since $U$ is obtained from the table by multiplying columns by nonzero scalars, the table matrix is invertible too. [step 1.1, step 1.2, algebra] ∎
