---
id: lem-nat-successor-neq-self
kind: lemma
title: "No natural number equals its own successor"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, thm-omega-is-peano-system, thm-induction-principle]
aliases: []
landmark: false
short: "$n\\neq\\sigma(n)$"
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
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

3.1 By induction [L2], $n \neq \sigma(n)$ for all $n \in \mathbb{N}$. [step 1.1, step 2.1, discharge-induction] ∎
