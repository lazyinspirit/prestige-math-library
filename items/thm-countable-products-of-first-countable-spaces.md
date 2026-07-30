---
id: thm-countable-products-of-first-countable-spaces
kind: theorem
title: "Assuming countable choice, a countable product of first countable spaces is first countable"
status: published
origin: session
deps: [def-first-countable-top, def-product-topology, thm-product-of-countable, thm-countable-union-of-countable, def-countable-choice]
aliases: []
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---

## Statement

Assuming $\mathrm{AC}_\omega$, a countable product of first countable spaces is first countable.

## Facts & Assumptions

**Given:** A point in a countable product of first countable spaces.

[A1] Countable choice selects a countable local base in every coordinate ([[def-countable-choice]]).

[L1] A product of two at most countable sets is at most countable, and under countable choice a countable union of at most countable sets is at most countable ([[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

[F1] Basic neighbourhoods in the product topology restrict only finitely many coordinates ([[def-product-topology]], [[def-first-countable-top]]).

## Proof

**Proof technique:** constructive.

1.1 Choose the coordinate local bases by [A1]. [A1, construct]

2.1 Finite-support products of their members form a local base at the given point: refine each of the finitely many restricted coordinates of a basic product neighbourhood by a member of its selected local base. [step 1.1, F1]

3.1 Finite subsets of the countable index set are countable in total: code the subsets of size at most $n$ by $n$-tuples and use finite induction on the product theorem in [L1], followed by the countable-union theorem. For each fixed finite support, the possible coordinate choices are a finite product of countable local bases and hence countable. The union over all finite supports is countable by [L1]. [step 2.1, L1]

4.1 The product is first countable. [step 3.1, discharge-construct] ∎
