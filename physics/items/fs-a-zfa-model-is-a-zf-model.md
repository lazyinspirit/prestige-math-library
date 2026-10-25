---
id: fs-a-zfa-model-is-a-zf-model
kind: false-statement
title: A ZFA model is a ZF model
status: published
origin: pipeline
deps: [def-zfa-universe-atoms-and-kernel, thm-jech-sochor-first-embedding]
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Chapters 4 and 6", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## False statement

A ZFA model is a ZF model.

## Facts & Assumptions

**Given:** The hypotheses, objects, and conventions in the Statement.

[F1] [[def-zfa-universe-atoms-and-kernel]] distinguishes atoms from sets and identifies the pure kernel.

[F2] [[thm-jech-sochor-first-embedding]] gives a bounded atom-to-set simulation when the ZFA permutation model is presented inside an ambient ZFA+AC model.

## Counterexample

1.1 In a ZFA model with distinct atoms $a\ne b$, both have no members. Unrestricted ZF Extensionality would conclude $a=b$, so the whole ZFA universe is not a ZF model. [F1]

2.1 The valid repairs are narrower: F1 says the pure kernel is a ZF model, and F2 transfers a prescribed power-iterate segment into a symmetric ZF model under its explicit ambient ZFA+AC premise. Neither identifies the entire atom universe with a ZF universe. [F1, F2] ∎
