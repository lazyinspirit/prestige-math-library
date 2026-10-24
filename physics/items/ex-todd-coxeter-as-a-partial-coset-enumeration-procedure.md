---
id: ex-todd-coxeter-as-a-partial-coset-enumeration-procedure
kind: example
title: "Todd-Coxeter as a partial coset-enumeration procedure"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-word-problem-for-a-fixed-finite-presentation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles F. Miller III, Decision Problems for Groups - Survey and Reflections"
      url: "https://web.archive.org/web/20240413212033/https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=fcda888d3e64f281e85977c474764527421ce852"
pipeline_run: null
---

## Example

Coset enumeration can certify some negative word-problem instances without
thereby giving a uniform solution.

## Facts & Assumptions

**Given:** A fixed finite presentation.

[L1] The word problem for a fixed finite presentation asks whether an input word is trivial in the presented group. ([[def-word-problem-for-a-fixed-finite-presentation]])

## Verification

**Proof technique:** direct.

1.1 In a finite quotient obtained from a partial Todd-Coxeter table, if the input word acts nontrivially on some enumerated coset, then the word is certainly nontrivial in the presented group, because every quotient homomorphism preserves equality with the identity. [L1, given]

2.1 This shows how a partial enumeration can settle some instances by exhibiting a separating finite quotient. It does not claim that every enumeration terminates or every instance is decided. [step 1.1, algebra] ∎
