---
id: lem-algebraic-integer-is-a-unit-iff-norm-is-plus-or-minus-one
kind: lemma
title: A number-field unit is exactly an algebraic integer of norm plus or minus one
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-inverse-matrix-by-adjugate
  - cor-invertible-matrix-has-unit-determinant
  - def-coordinate-column-and-matrix-of-a-linear-map
  - def-field-norm-and-trace
  - def-matrix-minors-cofactors-and-adjugate
  - def-number-field
  - def-ring-of-integers-of-a-number-field
  - lem-ring-units-form-a-group
  - lem-units-of-z
  - thm-ring-of-integers-free-of-rank-degree
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "J. S. Milne, Algebraic Number Theory v3.08"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Ch. 5 Lemma 5.2 p.86: u in O_K is a unit if and only if its norm is +-1."
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§8.1 Proposition 8.1.4 p.89: the same unit criterion."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $K$ be a number field ([[def-number-field]]) with ring of integers
$\mathcal O_K$ ([[def-ring-of-integers-of-a-number-field]]) and with field norm
$N_{K/\mathbb Q}(u)=\det(m_u)$ of multiplication by $u$
([[def-field-norm-and-trace]]). For $u\in\mathcal O_K$, the element $u$ is a
unit of the ring $\mathcal O_K$ ([[lem-ring-units-form-a-group]]) if and only if
$N_{K/\mathbb Q}(u)=\pm1$.

## Facts & Assumptions

**Given:** A number field $K$ of degree $n$, its ring of integers
$\mathcal O_K$, and an element $u\in\mathcal O_K$.

[F1] $\mathcal O_K$ is a free $\mathbb Z$-module of rank $n=[K:\mathbb Q]$
([[thm-ring-of-integers-free-of-rank-degree]]).

[F2] If $A\in M_n(R)$ is invertible over a commutative ring $R$, then $\det A$
is a unit of $R$, with $\det(A^{-1})$ its inverse
([[cor-invertible-matrix-has-unit-determinant]]).

[F3] If $\det(A)$ is a unit of $R$, then $A^{-1}=\det(A)^{-1}\operatorname{adj}(A)$,
and the adjugate of a matrix with entries in $R$ has entries in $R$, its
entries being cofactors ([[cor-inverse-matrix-by-adjugate]],
[[def-matrix-minors-cofactors-and-adjugate]]).

[F4] The units of $\mathbb Z$ are exactly $\pm1$ ([[lem-units-of-z]]).

## Proof

**Proof technique:** read the norm as the determinant of multiplication by $u$
in an integral basis, and use the adjugate formula in one direction and the
unit-determinant theorem in the other.

1.1 Fix a $\mathbb Z$-basis of $\mathcal O_K$ and let $M$ be the matrix of the $\mathbb Q$-linear map $m_u:K\to K$, $m_u(x)=ux$, in that basis ([[def-coordinate-column-and-matrix-of-a-linear-map]]). Since $u\in\mathcal O_K$ and $\mathcal O_K$ is closed under multiplication, $u\,\mathcal O_K\subseteq\mathcal O_K$; hence every column of $M$ is the coordinate column of an element of $\mathcal O_K$, so $M$ has entries in $\mathbb Z$, and $N_{K/\mathbb Q}(u)=\det M$. [F1, given]

2.1 Suppose first that $u$ is a unit of $\mathcal O_K$, so $u^{-1}\in\mathcal O_K$. The inverse of $m_u$ is $m_{u^{-1}}$, and its matrix in the same basis is $M^{-1}$; by the argument of step 1.1 with $u$ replaced by $u^{-1}$ this matrix has integer entries. Thus $M$ is invertible over $\mathbb Z$, so by [F2] $\det M$ is a unit of $\mathbb Z$, and [F4] gives $\det M=\pm1$, that is, $N_{K/\mathbb Q}(u)=\pm1$. [F2, F4, step 1.1]

3.1 Suppose conversely that $N_{K/\mathbb Q}(u)=\det M=\pm1$. Then $M$ is invertible and $M^{-1}=\det(M)^{-1}\operatorname{adj}(M)$ by [F3]; since $\det M=\pm1$ is a unit of $\mathbb Z$ and the adjugate of an integer matrix has integer entries, $M^{-1}$ has integer entries. For every $x\in\mathcal O_K$ the coordinate column of $u^{-1}x$ is $M^{-1}$ applied to the coordinate column of $x$, hence is integral, so $u^{-1}\mathcal O_K\subseteq\mathcal O_K$; taking $x=1$ and using $1\in\mathcal O_K$ gives $u^{-1}\in\mathcal O_K$. Therefore $u\cdot u^{-1}=1$ exhibits $u$ as a unit of $\mathcal O_K$ together with its inverse $u^{-1}$. [F3, step 1.1] ∎
