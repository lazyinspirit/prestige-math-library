---
id: lem-bounded-coset-search-for-integer-lattice-membership
kind: lemma
title: "Finite exact membership test for a full-rank integer lattice"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - cor-inverse-matrix-by-adjugate
  - def-matrix-minors-cofactors-and-adjugate
  - thm-adjugate-identity-over-a-commutative-ring
  - thm-division-algorithm-in-z
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "Proposition 2.1.5 and proof (Smith normal form), printed pp. 16–18"
verification: {}
---

## Statement

Let $B\in\mathbb Z^{n\times m}$ have row rank $n$, choose $n$ columns whose square matrix $B_0$ has nonzero determinant, and write the remaining columns as $b_{n+1},\ldots,b_m$ after reordering. Put $E=|\det B_0|$. For $z\in\mathbb Z^n$, membership $z\in B\mathbb Z^m$ is equivalent to the existence of residues $r_j\in\{0,1,\ldots,E-1\}$ such that
$$B_0^{-1}\left(z-\sum_{j=n+1}^m r_jb_j\right)\in\mathbb Z^n.$$
Therefore exact lattice membership is decided by a finite search of at most $E^{m-n}$ residue tuples and exact rational arithmetic.

## Statement references

[William A. Stein, *Algebraic Number Theory: A Computational Approach*, Proposition 2.1.5 and proof, pp. 16–18](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The integer matrix, its full row rank, a nonsingular selected column block, and an integer vector $z$.

[F1] The entries of $\operatorname{adj}(B_0)$ are signed determinants of integer submatrices, so they are integers. [[def-matrix-minors-cofactors-and-adjugate]]

[F2] For a square matrix over a commutative ring, $B_0\operatorname{adj}(B_0)=\det(B_0)I$. [[thm-adjugate-identity-over-a-commutative-ring]]

[F3] Over $\mathbb Q$, a square matrix with nonzero determinant has inverse $B_0^{-1}=\det(B_0)^{-1}\operatorname{adj}(B_0)$. [[cor-inverse-matrix-by-adjugate]]

[F4] For every integer $c$ and positive integer $E$, there are unique integers $q,r$ with $c=Eq+r$ and $0\le r<E$. [[thm-division-algorithm-in-z]]

## Proof

**Given:** The data in the Statement.

1.1 By [F1], every entry of $\operatorname{adj}(B_0)$ is an integer and $B_0^{-1}=\operatorname{adj}(B_0)/\det(B_0)$ by [F3]. Hence for every integer column $b$, $E B_0^{-1}b=\operatorname{sgn}(\det B_0)\operatorname{adj}(B_0)b$ lies in $\mathbb Z^n$; [F2] supplies the adjugate determinant identity used by the inverse formula.[F1, F2, F3, given, algebra]

1.2 Suppose $z\in B\mathbb Z^m$. Write $z=B_0c+\sum_{j=n+1}^m d_jb_j$ with integer coefficients. Divide each $d_j=Eq_j+r_j$ using [F4]. Then
$$B_0^{-1}\left(z-\sum_{j=n+1}^m r_jb_j\right)=c+\sum_{j=n+1}^m q_j(E B_0^{-1}b_j),$$
which is integral by step 1.1. This proves the forward implication.[F4, given, step 1.1, algebra]

2.1 Conversely, suppose such residues exist and the displayed vector equals $c\in\mathbb Z^n$. Multiplying by $B_0$ gives $z=B_0c+\sum_{j=n+1}^m r_jb_j$, an integer combination of the columns of $B$. Thus $z\in B\mathbb Z^m$. The finite residue set has exactly $E^{m-n}$ tuples, so enumerating it and performing exact rational membership checks terminates.[given, algebra] ∎
