---
id: ex-the-split-distinguished-triangle
kind: example
title: "The split distinguished triangle"
status: draft
origin: pipeline
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [prop-zero-and-split-triangles-are-distinguished, prop-a-distinguished-triangle-splits-exactly-when-one-connecting-map-vanishes]
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Charles A. Weibel, Chapter 10, Example 10.1.5"
      url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
---

## Example

For objects $X,Y$ of a triangulated category, consider
$$X\xrightarrow{\binom{1}{0}}X\oplus Y\xrightarrow{(0\;1)}Y\longrightarrow X[1].$$

## Verification

**Given:** The displayed data.

1.1 This is the canonical biproduct triangle, hence is distinguished. [given]

2.1 Its final map is zero, so it also exhibits the splitting criterion and the evident section/retraction. [step 1.1, given] ∎
