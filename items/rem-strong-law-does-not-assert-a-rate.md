---
id: rem-strong-law-does-not-assert-a-rate
kind: remark
title: Strong law does not assert a rate
deps: ["thm-kolmogorov-iid-l1-strong-law"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Durrett, §§2.4–2.5, pp. 76–87
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: draft
origin: pipeline
---

## Remarks

The conclusion of [[thm-kolmogorov-iid-l1-strong-law]] is almost-sure convergence of sample means. It specifies no numerical rate of decay of the error. The finite-variance logarithmic-rate theorem requires an additional second-moment assumption; neither that assumption nor a law of the iterated logarithm is implicit in the $L^1$ law.
