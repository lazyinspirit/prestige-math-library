---
id: thm-knot-concordance-is-an-abelian-group
kind: theorem
title: "Smooth and topological knot concordance classes form abelian groups"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-reverse-mirror-of-oriented-knot
  - def-smooth-knot-concordance
  - def-locally-flat-topological-knot-concordance
  - def-locally-flat-proper-surface-and-concordance-collars
  - lem-smooth-and-topological-knot-concordance-is-an-equivalence-relation
  - lem-knot-concordance-compatible-with-connected-sum
  - thm-oriented-knot-connected-sum-is-a-commutative-monoid
  - lem-knot-connected-sum-well-defined
  - lem-general-knot-reverse-mirror-sum-is-ribbon
  - lem-smooth-slice-iff-concordant-to-unknot
  - def-countable-choice
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: n/a
sources:
  references:
    - title: "Charles Livingston, A Survey of Classical Knot Concordance, Handbook of Knot Theory, Chapter 7"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/living.pdf"
      locator: "§2.1, Definition 2.1, Theorem 2.2 and inverse discussion, printed pp.322–323"
    - title: "Arunima Ray, Slice Knots and Knot Concordance, Winter Braids Lecture Notes 8"
      url: "https://numdam.org/item/10.5802/wbln.39.pdf"
      locator: "§3, Definitions 3.1/3.5 and Propositions 3.4/3.6, printed pp.10–12"
---

## Statement

Assume the Axiom of Countable Choice. The set of smooth oriented knot concordance classes in the standard three-sphere is an abelian group under connected sum, with identity the standard unknot and inverse of $[K]$ represented by the reverse mirror $K^\dagger$. Separately, the set of locally flat topological oriented knot concordance classes is an abelian group under connected sum, with the same identity and inverse convention.

## Statement references

[[def-smooth-knot-concordance|Smooth oriented knot concordance]]

[[def-locally-flat-topological-knot-concordance|Locally flat topological oriented knot concordance]]

[[def-reverse-mirror-of-oriented-knot|The reverse-mirror inverse convention]]

[[def-knot-connected-sum-and-prime-knot|The oriented connected-sum operation and standard unknot]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the smooth and topological concordance relations, and their oriented connected-sum operation.

[F1] Smooth and locally flat topological concordance are equivalence relations on oriented ambient-isotopy classes. ([[lem-smooth-and-topological-knot-concordance-is-an-equivalence-relation]])

[F2] In the smooth category, concordance respects connected sum; the current proof constructs the required annulus by straightening smooth spanning arcs and gluing product neighborhoods. ([[lem-knot-concordance-compatible-with-connected-sum]])

[L1] The same connected-sum compatibility is required in the locally flat topological category. The current compatibility lemma's topological branch depends on the locally flat codimension-three arc-unknotting statement, whose draft body remains unproved. ([[lem-knot-concordance-compatible-with-connected-sum]]) The missing subinterface is thm-locally-flat-codimension-three-arc-unknotting.

[F3] On oriented ambient-isotopy classes, connected sum is associative and commutative and has the standard unknot as two-sided identity under $\mathrm{AC}_\omega$. ([[thm-oriented-knot-connected-sum-is-a-commutative-monoid]])

[F4] For every smooth oriented knot $K$, $K\#K^\dagger$ bounds a smooth properly embedded disk in $B^4$; the disk is locally flat as a topological proper surface. ([[lem-general-knot-reverse-mirror-sum-is-ribbon]], [[def-locally-flat-proper-surface-and-concordance-collars]])

[F5] A knot bounds a smooth proper disk in $B^4$ if and only if it is smoothly concordant to the standard unknot. ([[lem-smooth-slice-iff-concordant-to-unknot]])

[A1] The Axiom of Countable Choice is used by the actual connected-sum and isotopy-extension supplier branches cited in this theorem. ([[def-countable-choice]], [[thm-oriented-knot-connected-sum-is-a-commutative-monoid]], [[lem-knot-connected-sum-well-defined]])

## Proof

**Given:** $\mathrm{AC}_\omega$ and the two concordance relations.

1.1 In the smooth category, [F1] makes the smooth concordance classes a quotient set. [F2] ensures that replacing either connected-sum input by a concordant knot leaves the resulting class unchanged, so connected sum defines a binary operation on that quotient. [F3] supplies associativity, commutativity, and the two-sided identity on oriented knot types; these equalities pass to the quotient because the operation is well-defined. [F1, F2, F3, A1, given, construct]

2.1 For every $K$, [F4] gives a smooth disk bounded by $K\#K^\dagger$. By [F5], this connected sum is smoothly concordant to the standard unknot, so $[K]+[K^\dagger]=[U]$ in the smooth quotient. Together with the commutative monoid structure from step 1.1, every element has an inverse; thus the smooth quotient is an abelian group with the stated inverse. [F3, F4, F5, step 1.1, given]

3.1 In the locally flat topological category, [F1] gives an equivalence relation, and every smooth disk and annulus used in [F4]–[F5] is locally flat. Hence the same disk construction gives $[K]+[K^\dagger]=[U]$ once connected sum is defined on topological concordance classes. However, that operation is well-defined only after the topological branch of [L1] is proved. The present carrier does not establish this prerequisite, so the topological group conclusion remains unresolved and no completion marker is supplied. [F1, L1, F3, F4, F5, step 2.1]

## Sources

[[thm-oriented-knot-connected-sum-is-a-commutative-monoid]]

[[lem-knot-concordance-compatible-with-connected-sum]]

[[lem-general-knot-reverse-mirror-sum-is-ribbon]]

[[lem-smooth-slice-iff-concordant-to-unknot]]
