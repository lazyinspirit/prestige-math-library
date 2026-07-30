---
id: lem-cellularity-is-well-defined
kind: lemma
title: "Under choice, $c(X)$ is a well-defined cardinal"
status: published
origin: session
deps: [def-lindelof-degree-and-cellularity, thm-well-ordering-theorem, lem-cardinality-of-a-well-orderable-set, def-cardinal, lem-ordinal-basics, thm-schroder-bernstein]
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

Assuming choice, $c(X)$ is a well-defined cardinal.

## Facts & Assumptions

**Given:** A topological space $X$ and cellularity as in [[def-lindelof-degree-and-cellularity]].

[L1] Under choice every family has a cardinality ([[thm-well-ordering-theorem]], [[lem-cardinality-of-a-well-orderable-set]]).

[L2] Cardinals are initial ordinals, a set of ordinals has union as its least upper bound, and mutual injections give a bijection ([[def-cardinal]], [[lem-ordinal-basics]], [[thm-schroder-bernstein]]).

## Proof

**Proof technique:** direct.

1.1 Each cellular family is a subfamily of the topology, so its cardinality is bounded by the cardinality of the topology. [given]

2.1 Let $K$ be the set of cardinalities of cellular families and put $\delta=\bigcup K$. By [L2], $\delta$ is the least ordinal upper bound of $K$. It is a cardinal: if $\beta<\delta$ and $\beta\approx\delta$, choose $\kappa\in K$ with $\beta<\kappa\le\delta$; then $\beta\preceq\kappa\preceq\delta\approx\beta$, so [L2] yields $\beta\approx\kappa$, contrary to $\kappa$ being a cardinal. Hence $\delta=\sup K=c(X)$. [step 1.1, L1, L2] ∎
