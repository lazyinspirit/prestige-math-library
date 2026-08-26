---
id: ex-foata-transformation-on-three-one-four-two
kind: example
title: "Foata's transformation on the permutation $2\\,0\\,3\\,1$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-foata-schutzenberger-transformation, thm-foata-transformation-sends-major-index-to-inversion-number]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Foata's transformation sends the permutation $[2,0,3,1]$ to $[2,3,0,1]$.

## Facts & Assumptions

**Given:** Foata's recursive transformation and the major-index/inversion identity ([[def-foata-schutzenberger-transformation]], [[thm-foata-transformation-sends-major-index-to-inversion-number]]).

## Verification

**Proof technique:** constructive.

1.1 Applying the recursion step by step gives $\Phi([2])=[2]$, then $\Phi([2,0])=[2,0]$, then $\Phi([2,0,3])=[2,0,3]$, and finally $\Phi([2,0,3,1])=[2,3,0,1]$. [construct]

2.1 The original permutation has descents at positions $0$ and $2$, so $\operatorname{maj}([2,0,3,1])=1+3=4$. The image $[2,3,0,1]$ has inversions $(2,0)$, $(2,1)$, $(3,0)$, and $(3,1)$, so $\operatorname{inv}([2,3,0,1])=4$. This matches the theorem. [step 1.1, given, discharge-construct] ∎
