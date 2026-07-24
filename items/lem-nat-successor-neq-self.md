---
id: lem-nat-successor-neq-self
kind: lemma
title: "No natural number equals its own successor"
status: published
origin: session
deps: [def-natural-numbers, thm-omega-is-peano-system, thm-induction-principle]
aliases: []
landmark: false
short: "$n\\neq\\sigma(n)$"
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$, $n \neq \sigma(n)$.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with distinguished element $0$ and successor $\sigma$.

[L1] $\sigma(n) \neq 0$ for all $n$ (P1) and $\sigma$ is injective (P2) ([[thm-omega-is-peano-system]]).

[L2] The induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 0$: $\sigma(0) \neq 0$ by P1, so $0 \neq \sigma(0)$. [base, L1]

1.2 Inductive hypothesis: $n \neq \sigma(n)$. [ih]

2.1 If $\sigma(n) = \sigma(\sigma(n))$ then injectivity of $\sigma$ gives $n = \sigma(n)$, contradicting the hypothesis; hence $\sigma(n) \neq \sigma(\sigma(n))$. [step 1.2, L1]

3.1 By induction, $n \neq \sigma(n)$ for all $n \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
