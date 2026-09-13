---
id: rem-pincus-transfer-interface-and-preservation-limits
kind: remark
title: Pincus transfer interfaces and preservation limits
status: draft
origin: pipeline
deps: [thm-jech-sochor-transfer-for-boundable-sentences]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Jech, The Axiom of Choice, Chapters 6 and 9", url: "https://gwern.net/doc/math/1973-jech-theaxiomofchoice.pdf"}
---

## Remark

Pincus transfer enlarges the interface to specified finite conjunctions of injectively boundable statements and, in a standard formulation, the Boolean Prime Ideal theorem. Those syntactic hypotheses must be verified for each intended consumer; this page does not use that stronger theorem.

The limitation in [[thm-jech-sochor-transfer-for-boundable-sentences]] is real. The atom-sensitive ZFA assertion “there are two distinct objects with no members” cannot hold in a transitive ZF model, where Extensionality makes the empty set unique. Thus neither Jech–Sochor nor Pincus transfer preserves arbitrary ZFA truth, and later pages may not infer conjunction or BPI preservation merely from this orientation remark.

