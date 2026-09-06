---
id: lem-universal-central-extension-is-unique-up-to-unique-isomorphism
kind: lemma
title: "Uniqueness of universal central extensions"
status: draft
origin: pipeline
deps: [def-universal-central-extension]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Clara Löh, Group Cohomology"
      url: https://loeh.app.uni-regensburg.de/teaching/grouphom_ss19/lecture_notes.pdf
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

A universal central extension is unique up to unique isomorphism over G.

## Proof

**Given:** Let $U\to G$ and $V\to G$ both be universal.

1.1 Initiality produces unique maps $U\to V$ and $V\to U$ over $G$. [given]

2.1 Their composites are the unique endomorphisms over $G$, hence identities; the maps are inverse and unique. [step 1.1, algebra] ∎
