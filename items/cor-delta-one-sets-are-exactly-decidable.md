---
id: cor-delta-one-sets-are-exactly-decidable
kind: corollary
title: "Delta_1^0 sets are exactly the decidable sets"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-sigma-n-pi-n-and-delta-n-sets, thm-sigma-one-sets-are-exactly-ce-sets, def-decidable-and-recognizable-language]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ludovic Patey, Computability Theory, Proposition 2.2"
      url: "https://ludovicpatey.com/courses/comp-thy-2023/cr11-en.pdf"
---

## Statement

A set of natural numbers is $\Delta_1^0$ if and only if it is decidable.

## Facts & Assumptions

**Given:** a set $A\subseteq\mathbb N$.

## Proof

**Proof technique:** direct.

1.1 If $A$ is $\Delta_1^0$, both $A$ and its complement are $\Sigma_1^0$ and hence recognizable. Dovetail their recognizers; exactly one accepts, yielding a decider for $A$. [given, construct]

2.1 If $A$ is decidable, both $A$ and its complement are recognizable, hence both are $\Sigma_1^0$. Therefore $A\in\Delta_1^0$. [step 1.1] ∎
