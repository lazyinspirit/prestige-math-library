---
id: ex-word-problem-by-free-reduction
kind: example
title: "Free reduction decides a word in a free group"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-word-problem-for-free-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-29
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
pipeline_run: null
---

## Example

In the free group on generators $a,b$, the word

$$w=ab b^{-1} a^{-1} a b a^{-1}$$

is nontrivial because its free reduction is $aba^{-1}$.

## Facts & Assumptions

**Given:** The free-group word-problem criterion.

[L1] A word in a finitely generated free group is trivial exactly when its free reduction is empty. ([[thm-word-problem-for-free-groups]])

## Verification

**Proof technique:** direct.

1.1 Cancel the adjacent pair $bb^{-1}$ in $w$, then cancel the adjacent pair $a^{-1}a$. The resulting reduced word is $aba^{-1}$. [given]

2.1 The reduced word $aba^{-1}$ is not empty, so [L1] implies that the original word $w$ is nontrivial. [L1, step 1.1] ∎
