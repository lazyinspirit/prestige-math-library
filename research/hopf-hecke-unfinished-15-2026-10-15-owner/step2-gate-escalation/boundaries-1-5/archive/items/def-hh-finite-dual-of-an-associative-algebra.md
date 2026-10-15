---
id: def-hh-finite-dual-of-an-associative-algebra
kind: definition
title: "The finite dual of an associative algebra"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps:
  - def-field
  - def-algebra-over-a-commutative-ring
  - def-algebraic-dual-and-linear-functional
  - def-hh-scalar-and-tensor-conventions
  - lem-hh-finite-matrix-and-module-preliminaries
justified_by:
  - thm-hh-finite-dual-coalgebra-and-hopf-descent
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, §3.9"
      url: "https://www.math.csi.cuny.edu/abhijit/iiser2018/reading/Hopf-lecture_notes.pdf"
---

## Definition

Let $k$ be a field ([[def-field]]) and let $A$ be a unital associative $k$-algebra ([[def-algebra-over-a-commutative-ring]]). Write $A^*=\operatorname{Hom}_k(A,k)$ for its algebraic dual ([[def-algebraic-dual-and-linear-functional]]), and use the $k$-tensor product ([[def-hh-scalar-and-tensor-conventions]]). Its **finite dual** (also called its restricted dual) is the subset
$$
A^\circ:=\{f\in A^*: \text{there is a two-sided ideal }I\trianglelefteq A \text{ with }\dim_k(A/I)<\infty\text{ and }f(I)=0\}.
$$
Equivalently, $f\in A^\circ$ exactly when it factors through a finite-dimensional quotient algebra $A/I$. The theorem [[thm-hh-finite-dual-coalgebra-and-hopf-descent]] proves that this subset is a vector subspace and that the transposed multiplication $m_A^*(f)$, defined by $m_A^*(f)(a\otimes b)=f(ab)$, corestricts to $A^\circ\otimes A^\circ$. Until that well-definedness proof is supplied, $m_A^*|_{A^\circ}$ is only a candidate coproduct.
