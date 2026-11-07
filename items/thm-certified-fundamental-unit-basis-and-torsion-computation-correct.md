---
dependency_level: 9
id: thm-certified-fundamental-unit-basis-and-torsion-computation-correct
kind: theorem
title: "The certified fundamental-unit and torsion algorithm is correct"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - alg-certified-fundamental-unit-basis-and-torsion-decomposition
  - lem-decidable-abelian-group-known-rank-relation-completion
  - thm-bounded-s-unit-matrix-computation-correct
  - thm-integer-smith-normal-form-computes-kernel-and-cokernel
  - thm-s-unit-theorem
  - def-fundamental-units
  - def-axiom-of-choice
proof_strategy: direct
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach, Chapter2 integer matrix methods and Chapter8 unit groups"
      url: "https://wstein.org/books/ant/ant.pdf"
---

## Statement

Assume the Axiom of Choice. For every valid exact input of the certified fundamental-unit-basis algorithm, that algorithm terminates. Its final relation matrix generates every multiplicative relation among the returned initial ordinary-unit generators. Its free list consists of $r_1+r_2-1$ fundamental units, and its finite torsion list is exactly $\mu(K)$ with no repetitions. Every ordinary unit has exactly one representation as a listed torsion element times an integer-power product of those fundamental units. The returned Smith transformations certify all these assertions, including rank zero.

## Statement references

[[alg-certified-fundamental-unit-basis-and-torsion-decomposition]]

[Stein, Algebraic Number Theory: A Computational Approach, Chapters2 and8](https://wstein.org/books/ant/ant.pdf)

## Facts & Assumptions

**Given:** The Axiom of Choice and valid exact arithmetic data of the certified algorithm.

[A1] Choice is inherited from the bounded S-unit generator and unit-rank theorems. ([[def-axiom-of-choice]])

[F1] The native bounded S-unit procedure terminates and returns a complete generating list of the ordinary unit group. ([[thm-bounded-s-unit-matrix-computation-correct]])

[F2] The ordinary unit group has free rank $r_1+r_2-1$ and finite torsion subgroup $\mu(K)$; a basis of the quotient by torsion is a fundamental-unit system. ([[thm-s-unit-theorem]], [[def-fundamental-units]])

[F3] Known rank, complete generators and decidable words give a terminating computation of the entire relation group, by finite torsion-kernel testing after Smith reduction. ([[lem-decidable-abelian-group-known-rank-relation-completion]], [[thm-integer-smith-normal-form-computes-kernel-and-cokernel]])

[F4] The algorithm performs exactly those operations, keeping the quotient transformations and explicit words. ([[alg-certified-fundamental-unit-basis-and-torsion-decomposition]])

## Proof

1.1 By [F1] the first step supplies genuine units generating $\mathcal O_K^\times$. Their products and inverses are computable exactly: multiplication reduces rational polynomials modulo the irreducible $f$, and the polynomial Euclidean algorithm gives the inverse of every nonzero residue. Equality to1 is coefficientwise rational equality. Thus this list and the integer $r=r_1+r_2-1$ from [F2] satisfy all hypotheses of [F3]. In particular $m\ge r$ and the algorithm never asks for a negative number of relations. [given, A1, F1, F2, F3, F4, algebra]

2.1 Steps2 and3 of [F4] are the relation-completion construction of [F3]. They terminate and give the full relation lattice, including relations involving torsion generators; the finite torsion test removes every residual relation that rank alone cannot detect. The last Smith form therefore identifies the actual ordinary unit group with $\bigoplus_{i\le k}\mathbb Z/d_i\mathbb Z\oplus\mathbb Z^r$. Its row inverse gives exactly the explicit words specified in step4 of [F4]. [step 1.1, F3, F4, algebra]

3.1 The free coordinates in that quotient form a basis modulo torsion. Hence their words are fundamental units by [F2]. The finite coordinates give each torsion element once, and [F2] identifies this subgroup with $\mu(K)$. Unique Smith coordinates prove the claimed unique representation. All remaining enumerations are finite products of bounded cyclic residue sets. If $r=0$, every unit is on that finite list and the free tuple is empty. This proves the complete Statement. [step 2.1, F2, F3, F4, algebra] ∎
