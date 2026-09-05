---
id: fs-the-horseshoe-connecting-map-is-independent-without-a-comparison-proof
kind: false-statement
title: "FALSE: the horseshoe connecting map is independent without a comparison proof"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-connecting-map-for-left-derived-functors, lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Statement

> **False.** Once the left derived connecting map has been written using a
> horseshoe resolution, its independence from the chosen horseshoe is automatic
> and needs no proof.
## Facts & Assumptions

**Given:** Two choices of horseshoe resolution for the same short exact
sequence.

[L1] Item 9 defines the left derived connecting map from a chosen horseshoe
resolution and comparison isomorphisms
([[def-connecting-map-for-left-derived-functors]]).

[L2] Item 10 is the statement that different horseshoe choices give the same
map
([[lem-the-left-derived-connecting-map-is-independent-of-the-horseshoe-resolution-and-lifts]]).

## Refutation

**Proof technique:** direct.

1.1 Before [L2] is proved, item 9 produces one map from each chosen horseshoe resolution. Those maps are a priori attached to different auxiliary choices, so there is no equality available merely from the definition in [L1]. [L1, given, algebra]

2.1 The assertion of [L2] is exactly the missing comparison statement. Thus the independence is not automatic; it is a separate mathematical obligation that must be proved. [L2, step 1.1] ∎