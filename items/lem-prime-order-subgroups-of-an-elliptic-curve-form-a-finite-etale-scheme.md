---
id: lem-prime-order-subgroups-of-an-elliptic-curve-form-a-finite-etale-scheme
kind: lemma
title: Prime-order elliptic subgroups form a finite étale scheme
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-full-level-structures-form-a-finite-etale-cover
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: J. S. Milne, Modular Functions and Modular Forms
    url: https://www.jmilne.org/math/CourseNotes/MF.pdf
    locator: Chapter 5, cyclic-subgroup correspondences; the finite étale parameter scheme is constructed below.
dependency_level: 1
proof_strategy: direct
axiom_use: AC is assumed by the finite-frame supplier.
---

## Statement

Assume AC. Let S be locally Noetherian, E/S an elliptic curve, and q a prime invertible on S. The functor sending an S-scheme T to finite étale subgroup schemes `C⊂E[q]_T` of rank q is represented by a finite étale S-scheme `Sub_q(E)` of degree q+1. It carries a universal finite étale rank-q subgroup of the pulled-back E[q], and its construction commutes with arbitrary base change of S.

## Facts & Assumptions

**Given:** AC, S, E and q as in the Statement.

[F1] The full q-frame scheme of E is finite étale and surjective, and provides a universal isomorphism `E[q]≅(Z/q)²` after base change. [[lem-full-level-structures-form-a-finite-etale-cover]]

[F2] AC is assumed. [[def-axiom-of-choice]]

## Proof

**Proof technique:** descend the finite set of lines in q-torsion.

1.1 By [F1], over the finite étale frame cover F→S, E[q] is the constant group `(Z/q)²`. Its rank-q subgroup schemes are precisely its one-dimensional vector subspaces; there are `(q²−1)/(q−1)=q+1` of them. They form the constant finite étale F-scheme L, with a universal rank-q subgroup of the constant group. [F1, F2, given, construct, algebra]

2.1 Two q-frames differ uniquely by a matrix in `GL₂(F_q)`, and each such matrix permutes the lines and carries their subgroup schemes compatibly. These permutations define a descent datum for the finite étale algebra `O_F^(q+1)` and its universal subgroup along F→S. It is effective: on affine base charts, faithfully flat descent identifies finite projective modules and their multiplication, unit and idempotents with the equalizers of their two pullbacks; the finitely many algebra and group-law identities descend as equalities. The resulting finite locally free algebra is étale because its pullback to F is a product of copies of O_F. Thus it defines `Sub_q(E)→S` and the universal subgroup. [F1, F2, step 1.1, given, construct, algebra]

3.1 On any T, pulling back to F_T makes E[q] constant, where a finite étale rank-q subgroup is a locally constant choice of a line and is represented uniquely by a map T×_S F→L. Compatibility on the double overlap is exactly the descent condition of step 2.1, so the choice descends uniquely to a map T→Sub_q(E). The same argument applies after arbitrary base change, proving representability, degree q+1, and base-change compatibility. [F1, F2, step 1.1, step 2.1, given, algebra] ∎

## Source and authoring record

This supplies the finite subgroup parameter only. Quotient elliptic curves, Hecke correspondences and their cohomology actions remain separate.
