---
id: ex-function-field-brauer-invariant-sequence
kind: example
title: A finite-support invariant tuple on the rational function field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
- def-global-field
- def-place-of-a-global-field
- thm-global-function-field-brauer-hasse-sequence
- def-axiom-of-choice
- def-local-field-valuation-ring-uniformizer-and-residue-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Appendix A.7
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
  - title: Michael Rosen, Number Theory in Function Fields, Chapter 5
    url: https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf
verification: {}
---

## Example

Assume the Axiom of Choice.

Let $K=\mathbb F_3(t)$, the function field of $\mathbb P^1_{\mathbb F_3}$,
whose full constant field is $\mathbb F_3$. Give the place $t=0$ invariant
$\tfrac12+\mathbb Z$, give the place $t=\infty$ invariant
$\tfrac12+\mathbb Z$, and give every other place invariant zero. This is a
finite-support tuple with sum zero, so the function-field Brauer–Hasse
sequence gives a unique global Brauer class with those local invariants.

## Example references

[[def-global-field]]

[[thm-global-function-field-brauer-hasse-sequence]]

[J. S. Milne, *Arithmetic Duality Theorems*, Appendix A.7](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Michael Rosen, *Number Theory in Function Fields*, Chapter 5](https://knihovna.inpb.cz/soubory/number_theory_in_function_field_rosen.pdf)

## Facts & Assumptions

**Given:** $K=\mathbb F_3(t)$ and the tuple in the Example.

[A1] AC supplies the curve-model and completion interfaces used by the global
sequence. ([[def-axiom-of-choice]])

[F1] $\mathbb F_3(t)$ is a one-variable function field with exact finite
constant field $\mathbb F_3$. ([[def-global-field]])

[F2] The reconstructed function-field invariant sequence is exact and its localization
map is injective. ([[thm-global-function-field-brauer-hasse-sequence]])

## Proof

**Proof technique:** compute the two nonzero local terms and apply exactness.

**Given:** AC and the data above.

1.1 The tuple has only the two stated nonzero entries, so its support is finite. Its invariant sum is $(\tfrac12+\mathbb Z)+(\tfrac12+\mathbb Z)=1+\mathbb Z=0$. [F1, given, algebra]

2.1 Exactness at the direct sum in [F2] gives a global Brauer class mapping to this tuple, and injectivity at the first nonzero term makes that class unique. This gives the asserted global realization and uniqueness. [A1, F2, step 1.1] ∎
