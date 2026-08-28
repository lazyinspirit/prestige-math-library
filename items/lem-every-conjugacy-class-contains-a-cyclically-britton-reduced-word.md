---
id: lem-every-conjugacy-class-contains-a-cyclically-britton-reduced-word
kind: lemma
title: "Every HNN conjugacy class contains a cyclically Britton-reduced representative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cyclically-britton-reduced-hnn-word, lem-elementary-hnn-reductions-preserve-the-represented-element, thm-brittons-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Every element of an HNN extension is conjugate to a cyclically Britton-reduced
HNN word.

## Facts & Assumptions

**Given:** An element of an HNN extension.

[L1] A cyclically Britton-reduced word is a Britton-reduced word with no pin across its two ends. ([[def-cyclically-britton-reduced-hnn-word]])

[L2] Elementary pin reductions preserve the represented element. ([[lem-elementary-hnn-reductions-preserve-the-represented-element]])

[L3] A Britton-reduced word containing a stable letter is nontrivial. ([[thm-brittons-lemma]])

## Proof

**Proof technique:** direct.

1.1 Choose, among all conjugates of the given element, a Britton-reduced representative $w$ of minimal stable-letter length. Such a representative exists because one may first Britton-reduce any conjugate using [L2]. [L2, given, choose]

2.1 If $w$ were not cyclically Britton-reduced, [L1] would give a pin across the two ends. Conjugating by the initial stable-letter syllable rotates that end-pin into the interior of the word, and [L2] then removes it to produce a conjugate with strictly smaller stable-letter length, contradicting the minimal choice in step 1.1. [L1, L2, step 1.1, algebra]

3.1 Therefore the minimal Britton-reduced representative from step 1.1 has no end-pin and is cyclically Britton-reduced. The nontriviality clause [L3] ensures that the shortening in step 2.1 is genuine whenever a stable letter is present. [L1, L3, step 2.1] ∎
