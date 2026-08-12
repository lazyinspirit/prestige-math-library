---
id: ex-conjugating-permutations-by-relabeling
kind: example
title: 'Conjugating $(1\,4)(2\,5\,3)$ by an explicit permutation in $S_5$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-conjugating-a-cycle-relabels-its-entries, thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "K. Conrad, Conjugacy Classes"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/conjclass.pdf"
pipeline_run: frontier-11
---

## Example

Let $\sigma=(1\,4)(2\,5\,3)$ and $g=(1\,2\,3\,4\,5)$ in $S_5$. Then
$$g\sigma g^{-1}=(2\,5)(3\,1\,4).$$

## Facts & Assumptions

**Given:** $\sigma=(1\,4)(2\,5\,3)$ and $g=(1\,2\,3\,4\,5)$ in $S_5$.

[F1] Conjugating a cycle relabels each entry by the conjugating permutation ([[lem-conjugating-a-cycle-relabels-its-entries]]).

[F2] Permutations in $S_n$ are conjugate exactly when they have the same cycle type ([[thm-symmetric-permutations-are-conjugate-iff-same-cycle-type]]).

## Verification

**Proof technique:** direct.

1.1 The relabellings are $(g(1)\ g(4))=(2\ 5)$ and $(g(2)\ g(5)\ g(3))=(3\ 1\ 4)$. [algebra]

2.1 Apply [F1] to the two disjoint factors to obtain the displayed conjugate. [F1, step 1.1]

3.1 The result has one $2$-cycle and one $3$-cycle, hence the same cycle type as $\sigma$, as [F2] requires; conjugating back by $g^{-1}$ recovers $\sigma$. [F2, step 2.1, algebra] ∎
