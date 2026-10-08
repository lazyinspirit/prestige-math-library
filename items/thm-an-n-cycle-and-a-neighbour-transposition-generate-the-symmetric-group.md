---
id: thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group
kind: theorem
title: 'The standard $n$-cycle and a neighbour transposition generate $S_n$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-conjugating-a-cycle-relabels-its-entries, thm-adjacent-transpositions-generate-the-symmetric-group, def-generated-subgroup, def-finite-symmetric-group-and-permutation-notation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  repair: research/frontier-42-coxeter-32-codex-adjacent-transposition-local-repair/cycle-neighbour/receipt.json
sources:
  scraped: []
  references:
    - title: "M. Macauley, Math 4120 lecture notes: Generating sets for $S_n$"
      url: "https://www.math.clemson.edu/~macaule/classes/m20_math4120/slides/math4120_lecture-2-03_h.pdf"
pipeline_run: frontier-11
---

## Statement

For $n\ge2$, use the one-based model $\operatorname{Sym}(\{1,\ldots,n\})$, identified with the library's $S_n=\operatorname{Sym}(\{0,\ldots,n-1\})$ by conjugation with $\kappa_n(k)=k+1$ ([[def-finite-symmetric-group-and-permutation-notation]], [[thm-adjacent-transpositions-generate-the-symmetric-group]]). In this model, $c=(1\,2\,\ldots\,n)$ and $t=(1\,2)$ satisfy $\langle c,t\rangle=S_n$. Equivalently, in the library's zero-based model $c_0=(0\,1\,\ldots\,n-1)$ and $t_0=(0\,1)$ satisfy $\langle c_0,t_0\rangle=S_n$.

## Facts & Assumptions

**Given:** $n\ge2$, the one-based model fixed in the Statement, $c=(1\,2\,\ldots\,n)$, and $t=(1\,2)$.

[F1] Conjugating a cycle relabels its entries ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F2] The standard adjacent transpositions generate $S_n$ ([[thm-adjacent-transpositions-generate-the-symmetric-group]]).

[F3] A generated subgroup contains the generators and is closed under products and inverses ([[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For $0\le j\le n-2$, [F1] gives $c^jtc^{-j}=(j+1\ j+2)$. [F1, algebra]

2.1 Every element in step 1.1 belongs to $\langle c,t\rangle$ by [F3], so that subgroup contains all standard adjacent transpositions. [F3, step 1.1]

3.1 By the transported one-based generation clause of [F2], $\langle c,t\rangle=S_n$. Conjugating by $\kappa_n^{-1}$ preserves products and generated subgroups and carries $c,t$ to $c_0,t_0$, so it gives the equivalent zero-based assertion. At $n=2$, $c=t=(1\,2)$ in the one-based model and $c_0=t_0=(0\,1)$ in the zero-based model; the argument in either case has just its single adjacent transposition. [F2, step 2.1] ∎
