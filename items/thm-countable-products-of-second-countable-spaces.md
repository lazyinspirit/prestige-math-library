---
id: thm-countable-products-of-second-countable-spaces
kind: theorem
title: "Assuming countable choice, a countable product of second countable spaces is second countable"
status: published
origin: session
deps: [def-second-countable-space, def-product-topology, thm-product-of-countable, thm-countable-union-of-countable, def-countable-choice]
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

Assuming $\mathrm{AC}_\omega$, a countable product of second countable spaces is second countable.

## Facts & Assumptions

**Given:** Second countable factors $(X_n)$ indexed by a countable set.

[A1] Countable choice selects a countable basis in each factor ([[def-countable-choice]]).

[L1] A product of two at most countable sets is at most countable, and under countable choice a countable union of at most countable sets is at most countable ([[thm-product-of-countable]], [[thm-countable-union-of-countable]]).

[F1] Finite-support boxes whose nontrivial coordinates are basis members form a basis for the product topology ([[def-product-topology]], [[def-second-countable-space]]).

## Proof

**Proof technique:** constructive.

1.1 Use [A1] to choose countable factor bases. [A1, construct]

2.1 Finite-support boxes with selected basic coordinates form a basis for the product by [F1]. [step 1.1, F1]

3.1 The finite subsets of a countable index set form an at most countable family: after enumerating the index set, subsets of size at most $n$ are coded by $n$-tuples of natural numbers, which are countable by finite induction using the product theorem in [L1], and their union over $n$ is countable by the union theorem in [L1]. For each fixed finite support $F$, the choices of one member of the selected basis in every coordinate of $F$ form a finite product of countable sets and are countable by the same induction. A final application of the countable-union theorem shows that all finite-support boxes form an at most countable family. [step 2.1, L1]

4.1 Thus the product is second countable. [step 3.1, discharge-construct] ∎
