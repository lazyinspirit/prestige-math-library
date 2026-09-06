---
id: cex-a-character-modulus-need-not-be-its-conductor
kind: counterexample
title: "A modulus need not be a conductor"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-induced-dirichlet-character, thm-dirichlet-character-primitive-induction]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Andersen, Theorem 16.2"
      url: "https://mathdept.byu.edu/~nick/ucla/205a/205a-notes.pdf"
---

## Statement refuted

“Every character modulo $q$ has conductor $q$.”

## Facts & Assumptions

**Given:** Induction ([[def-induced-dirichlet-character]]) and unique primitive ancestors ([[thm-dirichlet-character-primitive-induction]]).

## Counterexample

**Proof technique:** direct.

1.1 Induce $\chi_4$ to modulus $12$; on units it agrees with reduction modulo $4$ and it vanishes at every nonunit modulo $12$. [given]

2.1 Its primitive ancestor is $\chi_4$, so uniqueness in the given theorem makes its conductor $4$, not $12$. [step 1.1, given] ∎
