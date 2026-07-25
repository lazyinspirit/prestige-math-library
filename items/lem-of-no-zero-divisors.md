---
id: lem-of-no-zero-divisors
kind: lemma
title: "A field has no zero divisors: $ab = 0 \\Rightarrow a = 0$ or $b = 0$"
status: published
origin: session
deps: [def-field, lem-of-zero-mult]
aliases: []
landmark: false
proof_strategy: direct
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
pipeline_run: null
---

## Statement

In any field $F$ ([[def-field]]), if $a, b \in F$ satisfy $ab = 0$, then $a = 0$ or $b = 0$.

## Facts & Assumptions

**Given:** A field $F$ and elements $a, b \in F$ with $ab = 0$.

[L1] Field axioms ([[def-field]]): if $a \ne 0$ then $a$ has a multiplicative inverse $a^{-1}$ with $a^{-1} a = 1$; multiplication is associative; and $1$ is the multiplicative identity, so $1 \cdot x = x$.

[L2] For every $x \in F$, $x \cdot 0 = 0$ ([[lem-of-zero-mult]], using commutativity).

## Proof

**Proof technique:** direct.

1.1 If $a = 0$ the disjunction $a = 0$ or $b = 0$ already holds, so it suffices to assume $a \ne 0$ and derive $b = 0$. [suffices: a ne 0 implies b = 0]

1.2 Assuming $a \ne 0$, the inverse $a^{-1}$ exists with $a^{-1} a = 1$. [L1]

1.3 Since $1$ is the multiplicative identity, $b = 1 \cdot b$. [L1]

1.4 By associativity, $(a^{-1} a) \cdot b = a^{-1} (a b)$. [L1]

1.5 We are given $ab = 0$. [given]

1.6 $a^{-1} \cdot 0 = 0$. [L2]

2.1 Substituting $1 = a^{-1} a$ into $b = 1 \cdot b$ and using associativity gives $b = (a^{-1} a) b = a^{-1}(ab)$. [step 1.2, step 1.3, step 1.4]

2.2 Since $ab = 0$, we have $a^{-1}(ab) = a^{-1} \cdot 0$. [step 1.5]

3.1 Combining, $b = a^{-1}(ab) = a^{-1} \cdot 0 = 0$. [step 2.1, step 2.2, step 1.6]

4.1 Hence $a \ne 0$ forces $b = 0$, so in every case $a = 0$ or $b = 0$. [step 1.1, step 3.1] ∎
