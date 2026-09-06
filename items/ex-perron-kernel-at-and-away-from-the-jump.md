---
id: ex-perron-kernel-at-and-away-from-the-jump
kind: example
title: "Perron's kernel at and away from its jump"
status: draft
origin: pipeline
deps: [lem-perron-kernel, lem-truncated-perron-kernel]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Kiran S. Kedlaya, Analytic Number Theory, §10.2"
      url: "https://kskedlaya.org/ant/chapter-10.html"
---

## Example

At $c=1$, the limiting kernels for $y=1/2,1,2$ are respectively $0,1/2,1$.

## Verification

**Given:** the symmetric and truncated Perron kernel formulas.

1.1 Substitute $y=1/2,1,2$ in the three branches of the symmetric kernel. [given, algebra]

2.1 The truncated estimate has the separate $1/T$ branch only at $y=1$, exhibiting why the half value cannot be merged into either away-from-jump estimate. [step 1.1, algebra] ∎
