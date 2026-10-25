---
id: cor-cardinal-functions-detect-countability-axioms
kind: corollary
title: "Under choice, the five cardinal functions recover first countability, second countability, separability, Lindelöfness, and ccc at the $\\aleph_0$ threshold"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-first-countable-top, def-second-countable-space, def-separable-space, def-countable-chain-condition, def-compactness-variants, lem-weight-is-well-defined, lem-density-is-well-defined, lem-character-is-well-defined, lem-lindelof-degree-is-well-defined, lem-cellularity-is-well-defined]
aliases: []
landmark: true
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

Assuming choice, $X$ is first countable iff $\chi(X)\le\aleph_0$, second countable iff $w(X)\le\aleph_0$, separable iff $d(X)\le\aleph_0$, Lindelöf iff $L(X)\le\aleph_0$, and ccc iff $c(X)\le\aleph_0$.

## Facts & Assumptions

**Given:** A topological space $X$ and the Axiom of Choice, with the five raw cardinal functions and the named countability properties.

[L1] The minima defining $w(X)$, $d(X)$, $\chi(x,X)$ and $L(X)$, and the suprema defining $\chi(X)$ and $c(X)$, exist as cardinals ([[lem-weight-is-well-defined]], [[lem-density-is-well-defined]], [[lem-character-is-well-defined]], [[lem-lindelof-degree-is-well-defined]], [[lem-cellularity-is-well-defined]]).

[L2] First countability means a countable local base at every point, second countability means a countable basis, separability means a countable dense subset, ccc means that every pairwise-disjoint family of nonempty open sets is countable, and Lindelöfness means that every open cover has a countable subcover ([[def-first-countable-top]], [[def-second-countable-space]], [[def-separable-space]], [[def-countable-chain-condition]], [[def-compactness-variants]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $w(X)$ and $d(X)$ are the least cardinalities of a basis and a dense subset, respectively; hence $w(X)\le\aleph_0$ and $d(X)\le\aleph_0$ say exactly that such a basis and such a dense subset are at most countable. [L1]

1.2 By [L1], $L(X)\le\aleph_0$ says that every open cover has a subcover of at most countable cardinality, and $c(X)\le\aleph_0$ says that every pairwise-disjoint family of nonempty open sets is at most countable. [L1]

1.3 Since $\chi(X)=\sup\{\chi(x,X):x\in X\}$, one has $\chi(X)\le\aleph_0$ exactly when every point has a local base of cardinality at most $\aleph_0$. [L1]

2.1 The descriptions in steps 1.1, 1.2 and 1.3 are precisely the definitions in [L2], so they yield the five asserted equivalences. [step 1.1, step 1.2, step 1.3, L2] ∎
