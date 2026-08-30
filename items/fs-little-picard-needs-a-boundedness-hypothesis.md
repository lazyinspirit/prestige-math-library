---
id: fs-little-picard-needs-a-boundedness-hypothesis
kind: false-statement
title: "FALSE: little Picard needs a boundedness hypothesis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-little-picard-theorem]
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  references:
    - title: "Aleksander Simonic, The Ahlfors lemma and Picard's theorems, §6.2"
      url: "https://arxiv.org/pdf/1506.07019"
---

## Statement

Little Picard's theorem needs an additional boundedness assumption on the entire
function.

## Facts & Assumptions

**Given:** Little Picard's theorem.

[L1] A nonconstant entire function omits at most one finite value ([[thm-little-picard-theorem]]).

## Refutation

**Proof technique:** direct.

1.1 Fact [L1] already states the omitted-value conclusion for every nonconstant entire function, with no boundedness hypothesis. [L1, given]

2.1 Therefore the asserted extra boundedness assumption is false. [step 1.1] ∎
