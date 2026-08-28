---
id: lem-cyclic-permutations-of-a-cyclically-britton-reduced-hnn-word-are-conjugate
kind: lemma
title: "Cyclic permutations of a cyclically Britton-reduced HNN word stay in the same conjugacy class"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclically-britton-reduced-hnn-word]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Let

$$w=a_0t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}a_n$$

be cyclically Britton-reduced with $n>0$. Then every cyclic permutation of its
stable-letter syllables is conjugate to $w$. In particular,

$$t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}(a_na_0)$$

lies in the conjugacy class of $w$ and is still cyclically Britton-reduced.

## Facts & Assumptions

**Given:** The cyclically Britton-reduced word in the statement.

[L1] A cyclically Britton-reduced word remains Britton-reduced after the end-rotation that moves the last stable-letter syllable to the front. ([[def-cyclically-britton-reduced-hnn-word]])

## Proof

**Proof technique:** direct.

1.1 Conjugating $w$ by $a_0$ gives $a_0^{-1}wa_0=t^{\varepsilon_1}a_1\cdots t^{\varepsilon_n}(a_na_0)$, so the displayed first cyclic permutation lies in the conjugacy class of $w$. [given, algebra]

2.1 The end-rotation of the word from step 1.1 is $t^{\varepsilon_n}(a_na_0)t^{\varepsilon_1}a_1\cdots t^{\varepsilon_{n-1}}a_{n-1}$, which is Britton-reduced by [L1]. That is exactly the criterion saying the word from step 1.1 is cyclically Britton-reduced. Repeating the same conjugation on each successive rotation shows that every cyclic permutation of the stable-letter syllables is conjugate to $w$. [L1, step 1.1, algebra] ∎
