---
id: ex-the-cycle-lemma-on-a-word-of-length-seven
kind: example
title: "The cycle lemma on the word $(-1,+1,+1,-1,+1,-1,+1)$"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [thm-cycle-lemma, thm-catalan-numbers-by-the-cycle-lemma, def-cyclic-shift-and-the-periodic-partial-sum-function, def-binomial-coefficient, def-catalan-number]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "N. Dershowitz and S. Zaks, The Cycle Lemma and Some Applications"
      url: "https://weizmann.elsevierpure.com/en/publications/the-cycle-lemma-and-some-applications"
pipeline_run: null
---

## Example

Let

$$a=(-1,+1,+1,-1,+1,-1,+1),$$

a word of length $7$ and weight $1$. Its seven cyclic shifts and their partial
sums are:

| shift | partial sums |
|---|---|
| $(-1,+1,+1,-1,+1,-1,+1)$ | $-1,0,1,0,1,0,1$ |
| $(+1,+1,-1,+1,-1,+1,-1)$ | $1,2,1,2,1,2,1$ |
| $(+1,-1,+1,-1,+1,-1,+1)$ | $1,0,1,0,1,0,1$ |
| $(-1,+1,-1,+1,-1,+1,+1)$ | $-1,0,-1,0,-1,0,1$ |
| $(+1,-1,+1,-1,+1,+1,-1)$ | $1,0,1,0,1,2,1$ |
| $(-1,+1,-1,+1,+1,-1,+1)$ | $-1,0,-1,0,1,0,1$ |
| $(+1,-1,+1,+1,-1,+1,-1)$ | $1,0,1,2,1,2,1$ |

## Facts & Assumptions

**Given:** the two words above and the weight-two word $(+1,+1,+1,-1)$.

[L1] If every letter of a length-$m$ integer word is at most $1$ and its weight is $1$, then exactly one starting index gives a cyclic shift whose nonempty partial sums are all positive ([[thm-cycle-lemma]]).

[L2] The cycle-lemma Catalan count gives $(2\cdot3+1)C_3=\binom{7}{3}$ ([[thm-catalan-numbers-by-the-cycle-lemma]]).

## Verification

**Proof technique:** direct.

1.1 In the table, only the second row has all partial sums strictly positive, so the word $a$ has exactly one good shift. [given]

2.1 Deleting the leading $+1$ from that good shift gives $(+1,-1,+1,-1,+1,-1)$, which is the Dyck word `UDUDUD` of semilength $3$. [step 1.1]

2.2 This agrees with [L1] and [L2]: [L1] predicts one good shift, and [L2] reads $7C_3=\binom{7}{3}=35$, so $7\cdot5=35$. [L1, L2, step 1.1]

3.1 The weight-two word $(+1,+1,+1,-1)$ has exactly the two good shifts $(+1,+1,+1,-1)$ and $(+1,+1,-1,+1)$, so the general statement is visible too: the number of good shifts is the weight. [given] ∎

## Remarks

- The good shift is the second row because the page's convention counts strict positivity of every partial sum, not nonnegativity.
