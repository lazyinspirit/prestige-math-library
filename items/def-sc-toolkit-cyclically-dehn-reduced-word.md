---
id: def-sc-toolkit-cyclically-dehn-reduced-word
kind: definition
title: "Cyclically Dehn-reduced words"
status: draft
origin: pipeline
deps: [def-sc-toolkit-symmetrised-relators-and-pieces]
landmark: false
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Lipschutz (1964), \u00a72, printed pp.37\u201338"
      url: "http://lib.ysu.am/articles_art/6b5e2e5df94354a3efa7529c0c38c956.pdf"
---

## Definition

Over the symmetrised presentation of [[def-sc-toolkit-symmetrised-relators-and-pieces]], a word $w$ is **Dehn-reduced** if it is freely reduced and has no literal contiguous segment $s$ that is an initial segment of some $r\in R$ with $|s|>|r|/2$. Symmetrisation permits the relator segment to start at any corner. A word is **cyclically Dehn-reduced** if every cyclic rotation of it is Dehn-reduced. Its rotations have the same finite length; the empty word has only itself as a rotation and satisfies both conditions. Equality $|s|=|r|/2$ is permitted. These conditions concern literal subwords, not equalities in the presented group.

## Remarks

This is Lipschutz §2's “fully reduced” and “cyclically fully reduced” terminology with a local name. No finiteness assumption on $R$ and no effective test is asserted.
