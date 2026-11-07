---
id: ex-number-field-brauer-invariants-sum-to-zero
kind: example
title: "Two nonzero rational-place invariants with zero sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-axiom-of-choice
  - def-completion-of-a-global-field-at-a-place
  - def-number-field
  - def-place-of-a-global-field
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - thm-local-brauer-invariant-for-finite-residue-local-field
  - thm-choice-implies-dependent-implies-countable-choice
  - def-local-field-valuation-ring-uniformizer-and-residue-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter IV, Example 2.14(e)"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
    - title: "Werner Hürlimann, A short proof of the Albert–Brauer–Hasse–Noether theorem, Theorem 4"
      url: "https://www.numdam.org/item/AST_1992__209__215_0.pdf"
verification: {}
---

## Example

Assume the Axiom of Choice.

Let $K=\mathbb Q$. Consider the finite-support tuple
$(a_v)_v\in\bigoplus_v\mathbb Q/\mathbb Z$ whose components at the
$5$-adic and $7$-adic places are both $\tfrac12+\mathbb Z$ and whose
components at every other place, including the real place, are zero. The
sum of the components is zero, so the Brauer–Hasse–Noether sequence gives a
unique $\beta\in\operatorname{Br}(\mathbb Q)$ with these local invariants.

## Example references

[[def-number-field]]

[[thm-global-brauer-hasse-noether-exact-sequence-number-field]]

[J. S. Milne, *Class Field Theory*, Chapter IV, Example 2.14(e)](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

[Werner Hürlimann, “A short proof of the Albert–Brauer–Hasse–Noether theorem,” Theorem 4](https://www.numdam.org/item/AST_1992__209__215_0.pdf)

## Facts & Assumptions

**Given:** The number field $\mathbb Q$ and the finite-support invariant
tuple in the Example.

[A1] AC supplies the place and completion interfaces used by the global
sequence. ([[def-axiom-of-choice]])

[F1] By the given tuple, its only nonzero components are at the two specified finite places.

[F2] The completed number-field invariant sequence under AC proves exactness, and localization from
$\operatorname{Br}(\mathbb Q)$ is injective.
([[thm-global-brauer-hasse-noether-exact-sequence-number-field]])

## Proof

**Proof status:** Complete at the public AC hypothesis; the supplied exact sequence [F2] now also proves global realization and uniqueness.

**Proof technique:** direct finite sum followed by exactness.

**Given:** The data above, using the completed exactness supplier [F2].

1.1 The sum of the tuple's components is $(\tfrac12+\mathbb Z)+(\tfrac12+\mathbb Z)=1+\mathbb Z=0$ in $\mathbb Q/\mathbb Z$. [F1, given, algebra]

2.1 Conditional on [F2], exactness of the global sequence at the direct sum in [F2] places this tuple in the image of $\operatorname{Br}(\mathbb Q)$. Injectivity in [F2] makes its preimage unique. This verifies the stated global realization from the stated exact-sequence input; no proof of that input is asserted here. [A1, F2, step 1.1] ∎
