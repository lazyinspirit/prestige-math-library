---
id: lem-minimal-algebraic-relator-area-exists
kind: lemma
title: "Every null word has a minimal algebraic relator area"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John Meier, Groups, Graphs and Trees"
      url: "https://web.archive.org/web/20260221182226if_/https://www.scribd.com/document/971180914/Groups-graphs-and-trees-An-introduction-to-the-geometry-of-infinite-groups-1st-Edition-John-Meier"
pipeline_run: null
---

## Statement

Let $\mathcal P$ be a finite presentation and let $w$ be trivial in the group
presented by $\mathcal P$. Then $\operatorname{Area}_{\mathcal P}(w)$ exists.

## Facts & Assumptions

**Given:** A finite presentation $\mathcal P$ and a word $w$ with $w=_{\mathcal P}1$.

[L1] The algebraic relator area of a null word is defined as the least length of a relator expression for that word. ([[def-algebraic-relator-area-and-dehn-function-of-a-finite-presentation]])

## Proof

**Proof technique:** direct.

1.1 Because $w$ is null, the admissible lengths in [L1] form a nonempty subset of $\mathbb N$: every relator expression for $w$ contributes one such length, and the empty product contributes the value $0$ in the boundary case. [L1, given]

2.1 Every nonempty subset of $\mathbb N$ has a least element. Applying this to the set of admissible lengths from step 1.1 gives a least $m$, and [L1] defines that least number to be $\operatorname{Area}_{\mathcal P}(w)$. [L1, step 1.1]

3.1 Hence the minimal algebraic relator area exists for every null word. [step 2.1] ∎
