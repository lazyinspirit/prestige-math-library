---
id: lem-weight-is-well-defined
kind: lemma
title: "Under choice, $w(X)$ is a well-defined cardinal"
status: published
origin: session
deps: [def-weight-density-and-character, def-cardinal, thm-well-ordering-theorem, lem-ordinal-trichotomy]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "D. H. Fremlin, Measure Theory, Chapter 5A", url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"}]
pipeline_run: null
---

## Statement

Assuming choice, the collection of cardinalities of bases for $X$ is nonempty and has a least member. Hence $w(X)$ is well-defined.

## Facts & Assumptions

**Given:** A topological space $X$ and the definition of $w(X)$ ([[def-weight-density-and-character]]).

[A1] Under choice every set has a cardinality ([[def-cardinal]], [[thm-well-ordering-theorem]]).

[L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 By [A1], every basis has a cardinality. The topology of $X$ is itself a basis, so the set of cardinalities of bases is nonempty. [A1, given]

2.1 By [L1], its nonempty collection of cardinal values has a least member; that member is exactly the minimum in the definition of $w(X)$. [step 1.1, L1] ∎
