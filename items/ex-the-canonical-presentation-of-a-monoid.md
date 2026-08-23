---
id: ex-the-canonical-presentation-of-a-monoid
kind: example
title: "The canonical free-algebra presentation of a two-element idempotent monoid"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
  truth_risk: "The word-evaluation and flattening maps must form the canonical pair and have the stated coequalizer."
  counterexample_search: "Checked the empty word, one-letter words, arbitrary concatenations, and the full multiplication table of the two-element monoid."
deps: [thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras, thm-the-free-monoid-monad-and-its-algebras-are-monoids, def-semigroup-and-monoid]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $M=\{1,e\}$ be the monoid with $1$ as identity and $e^2=e$. For the free-monoid monad, its canonical presentation is

$$ (M^*)^*\mathrel{\substack{\xrightarrow{T(a)}\\[-3pt]\xrightarrow[\mu_M]{}}}M^*\xrightarrow{a}M, $$

where $a$ evaluates a word in $M$, $T(a)$ evaluates each inner word, and $\mu_M$ concatenates the inner words.

## Facts & Assumptions

**Given:** The two-element monoid $M$ and the three displayed word maps.

[L1] Every $T$-algebra is the coequalizer of its canonical pair of free algebras ([[thm-every-algebra-is-the-coequalizer-of-a-canonical-pair-of-free-algebras]]).

[L2] The free-monoid monad inserts letters as one-letter words and flattens words of words by concatenation ([[thm-the-free-monoid-monad-and-its-algebras-are-monoids]]).

## Verification

**Proof technique:** direct.

1.1 The multiplication table is $1\cdot1=1$, $1\cdot e=e\cdot1=e$, and $e\cdot e=e$, so $M$ is a monoid and $a:M^*\to M$ evaluates every finite word to its product. [construct]

1.2 On a word of words $[w_1,\ldots,w_n]$, the map $T(a)$ gives $[a(w_1),\ldots,a(w_n)]$, while $\mu_M$ gives the concatenated word $w_1\cdots w_n$, as in [L1] and [L2]. [L1, L2, construct]

2.1 Evaluating either result multiplies the same letters in the same order, so $aT(a)=a\mu_M$ for every finite word of words, including the empty one and words containing empty inner words. [step 1.1, step 1.2, algebra]

3.1 The theorem [L1] now gives the coequalizer universal property. On underlying sets the sections are the one-letter-word maps $\eta_{M^*}$ and $\eta_M$, and the monad unit and naturality equations verify the split presentation. [step 2.1, L1] ∎
