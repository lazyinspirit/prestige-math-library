---
id: ex-the-published-module-four-lemma-as-an-instance
kind: example
title: "The published module four lemma as an instance"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-four-lemma-in-an-abelian-category,
       lem-four-lemma-for-modules]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.19"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Example

When the ambient abelian category is a module category, the categorical four
lemma is exactly the published module four lemma.

## Facts & Assumptions

**Given:** A commutative exact-row four-term diagram of modules.

[L1] The categorical four lemma applies in any abelian category
([[thm-four-lemma-in-an-abelian-category]]).

[L2] The module four lemma is already published
([[lem-four-lemma-for-modules]]).

## Verification

1.1 The module diagram is one instance of the abelian-category diagram in [L1]. [L1]

2.1 Both the monic and epic conclusions then coincide with the two halves stated in [L2]. Hence the published module theorem is the module instance of the categorical four lemma. [L2, step 1.1] ∎
