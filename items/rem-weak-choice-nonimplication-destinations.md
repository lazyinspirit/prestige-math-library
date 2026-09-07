---
id: rem-weak-choice-nonimplication-destinations
kind: remark
title: "Nonimplication ledger and model destinations"
status: draft
origin: pipeline
deps: ["thm-choice-implies-dependent-implies-countable-choice", "thm-multiple-choice-equivalent-to-choice-in-zf", "thm-dependent-choice-and-finite-multiple-selections"]
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "Jech, The Axiom of Choice, §8.2 overview p.122, Theorem 8.3 p.123; §7.5 Problem 12 p.115"
      url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
proved_here: false
verification:
  precheck: n/a
external_dependency:
  source_url: https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf
  exact_statement: "Relative to consistency of ZF: DC can hold while choice for an arbitrary family of pairs fails; countable choice can hold while DC fails; choice for all finite-set families can hold while countable choice fails."
  local_proof_attempt: "The positive implication and finite-level constructions prove no model separation; no permutation or symmetric model construction is supplied here."
  necessity: "This is the assigned nonimplication ledger, used only as orientation, never as a proof premise."
---

## Statement

The following are **recorded relative-consistency separations, not proved here**. Conditional on the consistency of ZF, there are models of ZF satisfying:

- DC and failure of choice for an arbitrary family of pairs, hence failure of AC (Jech, Theorem 8.3 with the regular parameter $\omega_1$).
- $\mathrm{AC}_\omega$ and failure of DC (Jech, §8.2 overview of Theorem 8.12, with the countable parameter).
- Choice for every family of nonempty finite sets, but a countable family of countable nonempty sets without a choice function (Jech, §7.5, Problem 12). In particular $\mathrm{AC}_2$ need not imply $\mathrm{AC}_\omega$.

The model construction and transfer arguments belong to the planned page *Permutation Models and Transfer to ZF*; basic symmetric examples belong to *Symmetric Extensions and Basic Choice-Failure Models*. The proved positive implications on this page do not prove these separations. Boolean prime-ideal and ultrafilter equivalences belong to *Boolean Algebras, Stone Duality, and the Prime Ideal Theorem*.
