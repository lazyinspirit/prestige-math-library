---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/cex-composition-factors-do-not-determine-the-extension.json
  precheck: pass
id: cex-composition-factors-do-not-determine-the-extension
kind: counterexample
title: "Composition factors do not determine the extension"
status: published
origin: pipeline
deps: [def-composition-series-composition-factors-and-length, def-external-direct-product-of-groups]
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Stephen D. Smith, CFSG—A User’s Manual"
      url: https://homepages.math.uic.edu/~smiths/talkv.pdf
proof_strategy: direct

---

## Statement refuted

$C_4$ and $C_2\times C_2$ share composition factors but are not isomorphic.

## Counterexample

**Given:** Use the two groups in the statement.

1.1 Their simple factors agree while their element orders differ. [given]

2.1 Thus they provide the asserted counterexample. [step 1.1, algebra] ∎
