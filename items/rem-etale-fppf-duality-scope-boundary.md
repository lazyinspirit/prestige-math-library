---
id: rem-etale-fppf-duality-scope-boundary
kind: remark
title: "Finite-flat fppf duality is covered here; broader étale and flat theories remain scoped separately"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 15
deps:
  - thm-global-flat-duality-number-field-finite-sheaves
  - thm-global-flat-duality-finite-constant-field-curves
  - def-d-local-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, 2nd ed., Chapter III, §§3 and 8"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "Theorem III.3.1 and Theorem III.8.2, including their hypotheses and proof reductions."
    - title: "Cyril Demarche and David Harari, Artin–Mazur–Milne duality for fppf cohomology, §§2, 4–5"
      url: "https://arxiv.org/pdf/1804.03941"
      locator: "Completion-based compact support and global function-field and number-field reductions."
verification: {}
---

## Remark

The finite-flat duality claims in this run concern specified global settings:
finite sheaves on open number-field schemes with finite-flat models at the
primes dividing their order, and finite flat commutative group schemes on
open curves over finite fields. They do not state a duality theorem for a
$d$-local field with $d\ge2$. The two current global supplier items are
escalated: their proof bodies leave the finite-cover, local-trace,
height-one, or localization comparisons unresolved. Consequently this
remark records their actual scope and status and does not use either as a
proved higher-local duality input.

## Remark references

[[thm-global-flat-duality-number-field-finite-sheaves]]

[[thm-global-flat-duality-finite-constant-field-curves]]

[[def-d-local-field]]

[Milne, *Arithmetic Duality Theorems*, Chapter III §§3 and 8](https://www.jmilne.org/math/Books/ADTnot.pdf)

[Demarche–Harari, *Artin–Mazur–Milne duality for fppf cohomology*](https://arxiv.org/pdf/1804.03941)

## Facts & Assumptions

**Given:** the current bodies of the two named global duality items.

[F1] [[thm-global-flat-duality-number-field-finite-sheaves]] states a pairing for an open subscheme of the spectrum of a number-field ring and a finite fppf sheaf that is étale away from its order and has finite-flat models at the remaining primes. Its current proof status is escalated.

[F2] [[thm-global-flat-duality-finite-constant-field-curves]] states a pairing for a smooth proper curve over a finite field, an open subscheme, and a finite flat commutative group scheme. Its current proof status is escalated.

[F3] [[def-d-local-field]] requires a complete discrete-valuation tower ending in a finite field and is a different geometric input from either global scheme in [F1]–[F2].

[L1] [[thm-global-flat-duality-number-field-finite-sheaves]]: its final proof step says that the required completion-based diagram “has not been verified against ready suppliers, so the result is escalated.”

[L2] [[thm-global-flat-duality-finite-constant-field-curves]]: its Fact [A2] states that the height-one proper-curve pairing and completion-based localization diagram are not accepted in-run suppliers.

## Proof

**Proof technique:** compare the explicit hypotheses of the supplier statements and preserve their current readiness status.

**Given:** [F1]–[F3] and the unresolved supplier evidence [L1]–[L2].

1.1 The domains in [F1]–[F2] are global one-dimensional schemes with the stated finite-sheaf or finite-flat coefficients; [F3] instead supplies a recursive valuation field. None of the supplier statements has the $d$-local-field hypotheses or conclusion required for a general higher-local duality theorem. [F1, F2, F3, given, algebra]

2.1 The suppliers' current proof status is escalated and their exact unresolved comparisons are listed in [L1]–[L2]. A scope remark may record these claims and their limitations, but they cannot be used as ready duality inputs; the required higher-local theorem remains a separate proof-source gate. [F1, F2, L1, L2, step 1.1, given, algebra] ∎