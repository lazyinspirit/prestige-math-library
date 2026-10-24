---
id: fs-an-oracle-machine-reads-the-infinite-oracle-at-once
kind: false-statement
title: "An oracle machine reads the infinite oracle at once"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-oracle-turing-machine, lem-oracle-computation-has-a-finite-query-witness]
proof_strategy: direct
verification:
  audited: 2026-09-07
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

## Statement

An oracle machine can inspect all infinitely many bits of its oracle in one
halting computation.

## Refutation

**Proof technique:** direct.

**Given:** a halting oracle-machine computation.

1.1 A halting oracle-machine run has finitely many transitions and therefore only finitely many query instructions. [given, construct]

2.1 More precisely, [[lem-oracle-computation-has-a-finite-query-witness]] supplies a finite set of queried bits which fixes the whole run and output. Thus no halting computation reads the entire infinite oracle. [step 1.1] ∎
