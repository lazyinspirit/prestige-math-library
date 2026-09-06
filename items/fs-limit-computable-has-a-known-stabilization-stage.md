---
id: fs-limit-computable-has-a-known-stabilization-stage
kind: false-statement
title: "False: a limit-computable function has a known stabilization stage"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-limit-computable-function, thm-shoenfield-limit-lemma, thm-halting-is-recognizable-and-undecidable]
proof_strategy: contradiction
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, §4.7"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

Every limit-computable function has a computable modulus of stabilization.

## Facts & Assumptions

**Given:** the standard stage approximation to the halting set.

## Refutation

**Proof technique:** contradiction.

1.1 Assume a computable modulus is supplied for this approximation. Let $h(e,s)=1$ if program $e$ has halted by stage $s$, and $0$ otherwise. This is computable and converges pointwise to $\chi_{0'}$. [given, assume-contra, construct]

2.1 If a computable modulus $m(e)$ were available, simulate $e$ for $m(e)$ steps and return $h(e,m(e))$. This would decide $0'$, contradicting undecidability of the halting problem. [step 1.1, discharge-contradiction] ∎
