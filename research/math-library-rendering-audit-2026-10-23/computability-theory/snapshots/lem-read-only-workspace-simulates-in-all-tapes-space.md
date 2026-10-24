---
id: lem-read-only-workspace-simulates-in-all-tapes-space
kind: lemma
title: "Read-only work space becomes all-tapes space after charging input"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-read-only-input-workspace-classes, def-dtime-ntime-dspace-and-nspace]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Definition 4.1"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

For every $s$, $\mathrm{DWORKSPACE}(s(n))\subseteq\mathrm{DSPACE}(n+s(n))$
under the repository's all-tapes convention.

## Facts & Assumptions

**Given:** a read-only-input decider using $O(s(n))$ work cells.

## Proof

**Proof technique:** direct.

1.1 Regard its endmarked input tape as an ordinary tape. By the local-model definition the input head is confined to its $n+2$ input positions, and the machine visits $O(s(n))$ work cells. [given, construct]

2.1 Therefore the total visited-cell count is $O(n+s(n))$, which is the claimed all-tapes DSPACE bound. [step 1.1, algebra] ∎
