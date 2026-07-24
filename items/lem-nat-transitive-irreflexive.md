---
id: lem-nat-transitive-irreflexive
kind: lemma
title: "Every natural number is a transitive set and is not a member of itself"
status: published
origin: session
deps: [def-natural-numbers, thm-induction-principle]
aliases: []
landmark: false
short: "$n$ transitive, $n\\notin n$"
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
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$: (a) $n$ is transitive, i.e. $x \in n \Rightarrow x \subseteq n$; and (b) $n \notin n$.

## Facts & Assumptions

**Given:** $\mathbb{N}$ ([[def-natural-numbers]]) with $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$; the induction principle ([[thm-induction-principle]]). Let $P(n)$ be the conjunction "$n$ is transitive and $n \notin n$".

[L1] Induction: if $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$, then $P$ holds for all $n$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** induction.

1.1 Base $P(0)$: $0 = \varnothing$ has no members, so it is vacuously transitive and $\varnothing \notin \varnothing$. [base]

1.2 Inductive hypothesis: $P(n)$ holds, i.e. $n$ is transitive and $n \notin n$. [ih]

2.1 $\sigma(n) = n \cup \{n\}$ is transitive: take $x \in \sigma(n)$; if $x \in n$ then $x \subseteq n \subseteq \sigma(n)$ by the inductive hypothesis transitivity; if $x = n$ then $x = n \subseteq \sigma(n)$ since $n \subseteq n \cup \{n\}$; either way $x \subseteq \sigma(n)$. [step 1.2]

2.2 $\sigma(n) \notin \sigma(n)$: suppose $\sigma(n) \in \sigma(n) = n \cup \{n\}$, so $\sigma(n) \in n$ or $\sigma(n) = n$; if $\sigma(n) = n$ then $n \in n$ (as $n \in \{n\} \subseteq \sigma(n) = n$), contradicting the inductive hypothesis $n \notin n$; if $\sigma(n) \in n$ then $\sigma(n) \subseteq n$ by transitivity of $n$, and since $n \in n \cup \{n\} = \sigma(n) \subseteq n$ we get $n \in n$, again contradicting $n \notin n$; hence $\sigma(n) \notin \sigma(n)$. [step 1.2]

3.1 Hence $P(\sigma(n))$ holds; by induction $P(n)$ for all $n \in \mathbb{N}$: every natural number is transitive and satisfies $n \notin n$. [step 2.1, step 2.2, discharge-induction] ∎
