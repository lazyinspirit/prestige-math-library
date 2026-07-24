---
id: lem-nat-nonzero-is-successor
kind: lemma
title: "Every nonzero natural number is a successor"
status: published
origin: session
deps: [def-natural-numbers, thm-induction-principle]
aliases: []
landmark: false
short: "$n\\neq0\\Rightarrow n=\\sigma(m)$"
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
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ with $n \neq 0$, there exists $m \in \mathbb{N}$ with $n = \sigma(m)$. Equivalently, every natural number is either $0$ or a successor.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with distinguished element $0$ and successor $\sigma$. Let $S = \{n \in \mathbb{N} : n = 0 \text{ or } \exists m \in \mathbb{N}\ (n = \sigma(m))\}$.

[L1] The induction principle ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $0 \in S$ since $0 = 0$. [base]

1.2 Inductive hypothesis: $n \in S$. [ih]

2.1 $\sigma(n)$ is the successor of $n$, so $\sigma(n) \in S$ (it satisfies $\exists m,\ \sigma(n) = \sigma(m)$ with $m = n$). [step 1.2]

3.1 By induction, $S = \mathbb{N}$, so every $n \in \mathbb{N}$ is $0$ or a successor; if $n \neq 0$ then $n = \sigma(m)$ for some $m$. [step 1.1, step 2.1, discharge-induction] ∎
