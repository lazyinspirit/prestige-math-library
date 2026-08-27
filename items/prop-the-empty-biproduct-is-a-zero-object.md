---
id: prop-the-empty-biproduct-is-a-zero-object
kind: proposition
title: "The empty biproduct is a zero object"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-biproduct, prop-empty-limits-and-colimits-are-terminal-and-initial-objects, def-initial-terminal-and-zero-object]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3: Preadditive and additive categories"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

If the empty family has a biproduct, then that object is a zero object.

## Facts & Assumptions

**Given:** An empty biproduct object $0$.

[L1] A biproduct is simultaneously a coproduct and a product
([[def-biproduct]]).

[L2] The empty coproduct is initial and the empty product is terminal
([[prop-empty-limits-and-colimits-are-terminal-and-initial-objects]]).

[L3] A zero object is an object that is both initial and terminal
([[def-initial-terminal-and-zero-object]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the empty biproduct object is both an empty coproduct and an empty product. [L1]

2.1 By [L2], those two roles make it initial and terminal. [L2, step 1.1]

3.1 Therefore it is a zero object by [L3]. [L3, step 2.1] ∎
