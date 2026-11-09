---
title: Integer multiplication on rational complexes
status: draft
research_item: lem-author-4b6f215bcf3b-rational-complex-multiplication
dependency_level: 1
---

PDF p. 6: Finite-coefficient comparison

## Prerequisites

- [lem-author-4b6f215bcf3b-rational-module-multiplication](item-lem-author-4b6f215bcf3b-rational-module-multiplication)

## Statement
Let C be a cochain complex of Q-vector spaces, with Q-linear differentials, and n a positive integer. Multiplication by n is an isomorphism of C as a complex of abelian groups and hence in the derived category D(Z). Here D(Z) is the category of cochain complexes of abelian groups with quasi-isomorphisms inverted; a quasi-isomorphism induces isomorphisms on all cohomology groups.

## Facts & Assumptions

**Given:** C and n as in the statement.

**Goal:** Prove that multiplication by n on C is an isomorphism in D(Z).

[F1] Multiplication by n on each Q-vector space is invertible, with inverse multiplication by 1/n. [lem-author-4b6f215bcf3b-rational-module-multiplication](item-lem-author-4b6f215bcf3b-rational-module-multiplication)

## Proof

1.1 By [F1], multiplication by 1/n is the inverse of multiplication by n in every degree. Q-linearity of the differentials makes multiplication by 1/n commute with them, so these inverses form a chain map. [F1, given]

2.1 The two chain maps are mutually inverse, and their images remain inverse in D(Z). [step 1.1] ∎
