---
id: def-finite-support-binary-prefix-code
kind: definition
title: "Binary prefix codes on finite supports"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: []
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; finite-alphabet sums and code constructions are explicit, and cited measure-theoretic results retain their stated hypotheses."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Defines an injective binary prefix code on a finite support, code lengths, expected length, and the convention that the empty word is permitted only for singleton support.

## Facts & Assumptions

**Given:** A finite nonempty message set $M$ and finite binary strings $c(m)\in\{0,1\}^*$.

## Proof

**Given:** The code assignment in the statement.

1.1 The assignment is a finite-support binary prefix code when it is injective and no assigned string is a proper initial segment of another assigned string. The empty string is permitted only when $M$ is a singleton. [given, algebra]

1.2 Decoding is unique: when reading a concatenation from its beginning, at most one codeword can be a prefix of the unread string, because two such codewords would be comparable by the prefix relation; injectivity excludes equal codewords. Repeating this argument recovers every message. [given, step 1.1, algebra] ∎
