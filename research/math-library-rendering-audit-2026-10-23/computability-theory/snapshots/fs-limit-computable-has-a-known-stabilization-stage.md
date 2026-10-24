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
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
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

1.1 Let $h(e,s)=1$ if program $e$ has halted by stage $s$, and $0$ otherwise. Bounded simulation makes $h$ total computable, and it converges pointwise to the characteristic function $\chi_{0'}$ of the halting set. Thus $\chi_{0'}$ is limit computable. [given, construct]

2.1 Suppose $\chi_{0'}$ had a total computable approximation $g(e,s)$ with a computable stabilization modulus $m(e)$. Computing $g(e,m(e))$ would then decide $0'$, contradicting undecidability of the halting problem. This argument covers every possible approximation, including $h$ from step 1.1, so no such modulus exists. [step 1.1, assume-contra, discharge-contradiction] ∎
