---
id: lem-henselian-pair-ideal-in-jacobson-radical
kind: lemma
title: "The defining ideal of a Henselian pair lies in the Jacobson radical"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-henselian-pair-and-henselian-local-ring]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
pipeline_run: null
---

## Statement

If $(A,I)$ is a Henselian pair, then $I \subseteq J(A)$.

## Facts & Assumptions

**Given:** A Henselian pair $(A,I)$.

[L1] A Henselian pair is defined by the Jacobson-radical condition together
with unique lifting of coprime monic factorizations
([[def-henselian-pair-and-henselian-local-ring]]).

## Proof

**Proof technique:** unpack the definition.

1.1 By [L1], one clause in the definition of a Henselian pair is exactly the containment $I \subseteq J(A)$. [L1, given]

2.1 Therefore the defining ideal of a Henselian pair lies in the Jacobson radical. [step 1.1] ∎
