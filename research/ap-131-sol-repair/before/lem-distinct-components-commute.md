---
id: lem-distinct-components-commute
kind: lemma
title: "Distinct components commute"
status: published
origin: pipeline
deps: [def-quasisimple-group-component-and-layer]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Distinct components of a finite group commute.

## Facts & Assumptions

**Given:** Let $K$ and $L$ be distinct components of $G$.

[L1] Smith's component theorem says that two components of a finite group either coincide or centralize one another.

## Proof

**Proof technique:** direct.

1.1 Smith's component theorem says that two components of a finite group either coincide or centralize one another.  It applies because $K$ and $L$ are subnormal quasisimple subgroups, exactly the components of [[def-quasisimple-group-component-and-layer]]. [L1, given]

2.1 Since $K\ne L$, the second alternative gives $[K,L]=1$; equivalently, $K$ and $L$ commute. [step 1.1] ∎
