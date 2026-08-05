---
id: lem-density-is-well-defined
kind: lemma
title: "Under choice, $d(X)$ is a well-defined cardinal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
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
  references:
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---

## Statement

Assuming choice, $d(X)$ is a well-defined cardinal.

## Facts & Assumptions

**Given:** A topological space $X$ and density as in [[def-weight-density-and-character]].

[A1] Under choice every set has a cardinality ([[def-cardinal]], [[thm-well-ordering-theorem]]).

[L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 By [A1], every dense subset has a cardinality. The subset $X$ is dense in itself, so cardinalities of dense subsets form a nonempty collection. [A1, given]

2.1 [L1] gives its least member, which is the value defined as $d(X)$. [L1] ∎
