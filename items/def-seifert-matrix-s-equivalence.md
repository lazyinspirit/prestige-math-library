---
id: def-seifert-matrix-s-equivalence
kind: definition
title: "S-equivalence of integral Seifert matrices"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps: []
justified_by: []
aliases: []
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Dale Rolfsen, Knots and Links, Chapter 8.A–8.B"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf"
    - title: "Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes, Section 6.2.3"
      url: "https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf"
    - title: "Knot Theory Lecture Notes, Chapter 7: Seifert Matrices and Derived Invariants"
      url: "https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf"
    - title: "Knot Theory Lecture Notes, Chapter 7: Seifert Matrices and Derived Invariants"
      url: "https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf"
---

## Definition

Let $V$ be an even-order square matrix with integer entries, of size $n=2g$. A unimodular congruence replaces $V$ by $P^TVP$ for an integer matrix $P$ with determinant $+1$ or $-1$. For $x,y\in\mathbb Z^n$ as column vectors and $z\in\mathbb Z$, the two elementary enlargements of $V$ are
$$E_0(V;x,y,z)=\begin{pmatrix}V&x&0\\y^T&z&0\\0^T&1&0\end{pmatrix},\qquad E_1(V;x,y,z)=\begin{pmatrix}V&x&0\\y^T&z&1\\0^T&0&0\end{pmatrix}.$$
Two even-order integral matrices are **S-equivalent** if one can be obtained from the other by a finite sequence of unimodular congruences, elementary enlargements, and reverse elementary enlargements.

## Definition references

[Rolfsen, Chapter 8.A–8.B](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf)

[Cattabriga–Francaviglia, §6.2.3](https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf)

[Knot Theory Lecture Notes, Chapter 7, Definition 7.7](https://www2.math.kyushu-u.ac.jp/~saeki/Lee-Lectures.pdf)
