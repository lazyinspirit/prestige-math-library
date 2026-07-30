---
id: lem-lindelof-degree-is-well-defined
kind: lemma
title: "Under choice, $L(X)$ is a well-defined cardinal"
status: published
origin: session
deps: [def-lindelof-degree-and-cellularity, def-cardinal, thm-well-ordering-theorem, lem-ordinal-trichotomy]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "D. H. Fremlin, Measure Theory, Chapter 5A", url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"}]}
pipeline_run: null
---

## Statement

Assuming choice, $L(X)$ is a well-defined cardinal.

## Facts & Assumptions

**Given:** A topological space $X$ and the definition in [[def-lindelof-degree-and-cellularity]].

[A1] Under choice every set has a cardinality ([[def-cardinal]], [[thm-well-ordering-theorem]]).

[L1] Every nonempty set of ordinals, and hence every nonempty set of cardinals, has a least member; this is a theorem of ZF ([[lem-ordinal-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 By [A1], the topology $\tau$ has a cardinality $\kappa$. Every open cover is a subcover of itself and has cardinality at most $\kappa$, so $\kappa$ bounds every cover's subcover size. [A1, given]

2.1 Let $S$ be the set of cardinals $\lambda\leq\kappa$ such that every open cover of $X$ has a subcover of cardinality at most $\lambda$. By Step 1.1, $\kappa\in S$, so [L1] supplies a least member of $S$. Any bounding cardinal larger than $\kappa$ cannot be smaller than that member, and hence this least member is exactly $L(X)$. [step 1.1, L1] ∎
