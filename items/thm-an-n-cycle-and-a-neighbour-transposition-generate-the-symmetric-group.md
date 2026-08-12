---
id: thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group
kind: theorem
title: 'For $n\ge2$, $(1\,2\,\ldots\,n)$ and $(1\,2)$ generate $S_n$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-conjugating-a-cycle-relabels-its-entries, thm-adjacent-transpositions-generate-the-symmetric-group, def-generated-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Macauley, Math 4120 lecture notes: Generating sets for $S_n$"
      url: "https://www.math.clemson.edu/~macaule/classes/m20_math4120/slides/math4120_lecture-2-03_h.pdf"
pipeline_run: frontier-11
---

## Statement

For $n\ge2$, if $c=(1\,2\,\ldots\,n)$ and $t=(1\,2)$, then
$\langle c,t\rangle=S_n$.

## Facts & Assumptions

**Given:** $n\ge2$, $c=(1\,2\,\ldots\,n)$, and $t=(1\,2)$.

[F1] Conjugating a cycle relabels its entries ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F2] The standard adjacent transpositions generate $S_n$ ([[thm-adjacent-transpositions-generate-the-symmetric-group]]).

[F3] A generated subgroup contains the generators and is closed under products and inverses ([[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For $0\le j\le n-2$, [F1] gives $c^jtc^{-j}=(j+1\ j+2)$. [F1, algebra]

2.1 Every element in step 1.1 belongs to $\langle c,t\rangle$ by [F3], so that subgroup contains all standard adjacent transpositions. [F3, step 1.1]

3.1 By [F2], $\langle c,t\rangle=S_n$. At $n=2$, $c=t=(1\,2)$ and the same argument has the single adjacent transposition. [F2, step 2.1] ∎
