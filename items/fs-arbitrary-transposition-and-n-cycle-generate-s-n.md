---
id: fs-arbitrary-transposition-and-n-cycle-generate-s-n
kind: false-statement
title: 'FALSE: any transposition together with any $n$-cycle generates $S_n$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group, def-generated-subgroup, def-symmetric-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "M. Macauley, Math 4120 lecture notes: Generating sets for $S_n$"
      url: "https://www.math.clemson.edu/~macaule/classes/m20_math4120/slides/math4120_lecture-2-03_h.pdf"
pipeline_run: frontier-11
---

## Statement refuted

Every $n$-cycle and every transposition together generate $S_n$.

## Facts & Assumptions

**Given:** The elements $c=(1234)$ and $t=(13)$ of $S_4$.

[F1] Relative to $(1\,2\,\ldots\,n)$, the neighboring transposition $(1\,2)$ does generate $S_n$ with that cycle ([[thm-an-n-cycle-and-a-neighbour-transposition-generate-the-symmetric-group]]).

[F2] A generated subgroup is the smallest subgroup containing its generators ([[def-generated-subgroup]]).

[F3] Permutations act on the underlying set by composition ([[def-symmetric-group]]).

## Counterexample

**Proof technique:** counterexample.

1.1 In $S_4$, let $c=(1234)$ and $t=(13)$, and partition the symbols into $B_1=\{1,3\}$ and $B_2=\{2,4\}$. [F3]

2.1 The cycle $c$ swaps $B_1$ and $B_2$, while $t$ preserves each block. Therefore every word in $c,t$ preserves the two-block system setwise. [F2, F3, step 1.1]

3.1 The permutation $(12)$ does not preserve that block system, so it is not in $\langle c,t\rangle$; hence this generated subgroup is proper in $S_4$. [F2, step 2.1]

4.1 Thus an arbitrary transposition need not work. The positive theorem [F1] requires a neighboring transposition relative to the chosen cycle. [F1, step 3.1] ∎
