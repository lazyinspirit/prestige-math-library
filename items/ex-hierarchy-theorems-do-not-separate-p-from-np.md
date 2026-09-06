---
id: ex-hierarchy-theorems-do-not-separate-p-from-np
kind: example
title: "Why a hierarchy separation is not a P versus NP separation"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-hierarchy-theorems-do-not-separate-p-from-np]
proof_strategy: direct
verification: {precheck: pass, judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Chapter 3"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

The separation $\mathrm{DTIME}(n^2)\subsetneq\mathrm{DTIME}(n^4)$ compares
two deterministic resource budgets. It says nothing about whether a language
with a polynomial verifier has a deterministic polynomial-time decider.

## Facts & Assumptions

**Given:** the displayed deterministic hierarchy separation.

## Verification

**Proof technique:** direct.

1.1 Both sides of the displayed separation are deterministic classes. [given]

2.1 The missing assertion would have to relate one of these classes to $NP$, whose definition allows existential certificates. No such relation appears in the hierarchy statement, so the P-versus-NP implication is absent. [step 1.1] ∎
