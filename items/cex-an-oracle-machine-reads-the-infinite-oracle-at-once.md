---
id: cex-an-oracle-machine-reads-the-infinite-oracle-at-once
kind: counterexample
title: "A finite oracle-query transcript"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-an-oracle-machine-reads-the-infinite-oracle-at-once, lem-oracle-computation-has-a-finite-query-witness]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Sebastiaan Terwijn, Computability Theory, Proposition 5.1.4"
      url: "https://www.math.ru.nl/~terwijn/teaching/syllabus.pdf"
---

## Statement refuted

A computation deciding whether $7$ belongs to its oracle must read every bit
of that oracle.

## Counterexample

**Proof technique:** direct.

**Given:** an oracle $X$.

1.1 The machine that queries only $7$ and returns the answer decides this predicate for every oracle $X$. Its transcript has the single query $7$. [given, construct]

2.1 Any two oracles agreeing at $7$ give exactly the same run and output, even if they differ elsewhere. This finite witness refutes the claimed whole-oracle read. [step 1.1] ∎
